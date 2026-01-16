import api from "./api";

export const getNews = () => api.get("/news");

export async function getNewsDetail(id) {
    const res = await fetch(`${process.env.API_URL}/news/${id}`)
    return res.json()
}
