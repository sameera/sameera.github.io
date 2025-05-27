import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
    return redirect("https://cal.com/sameera-perera/30min");
};
