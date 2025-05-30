export default {
  async fetch(req) {
    const url = new URL(req.url).searchParams.get("url");
    if (!url) return new Response("Missing 'url'", { status: 400 });

    try {
      const r = await fetch(url);
      const h = new Headers(r.headers);
      h.set("Access-Control-Allow-Origin", "*");
      return new Response(r.body, { status: r.status, headers: h });
    } catch (e) {
      return new Response("Error: " + e.message, { status: 500 });
    }
  }
}
