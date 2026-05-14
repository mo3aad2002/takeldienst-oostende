// Deno edge function: receive contact form, send email via Resend
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey, x-client-info",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const { naam, email, telefoon, bericht } = await req.json();

    if (
      typeof naam !== "string" || naam.trim().length < 1 || naam.length > 100 ||
      typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255 ||
      typeof bericht !== "string" || bericht.trim().length < 1 || bericht.length > 2000 ||
      (telefoon !== undefined && telefoon !== null && (typeof telefoon !== "string" || telefoon.length > 40))
    ) {
      return new Response(JSON.stringify({ error: "Ongeldige invoer." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "E-mailservice is niet geconfigureerd." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <h2>Nieuw bericht via takeldienstoostende.be</h2>
      <p><strong>Naam:</strong> ${escapeHtml(naam)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefoon:</strong> ${escapeHtml(telefoon || "—")}</p>
      <p><strong>Bericht:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(bericht)}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Takeldienst Oostende <info@takeldienstoostende.be>",
        to: ["info@takeldienstoostende.be"],
        reply_to: email,
        subject: `Nieuw bericht van ${naam}`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend error", res.status, body);
      return new Response(JSON.stringify({ error: "Verzenden mislukt." }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Onverwachte fout." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
