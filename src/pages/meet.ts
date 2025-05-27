import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
    return new Response(null, {
        status: 307,
        headers: {
            Location: "https://cal.com/sameera-perera/30min",
        },
    });
};
