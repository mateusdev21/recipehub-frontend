export async function getNews() {
    const res = await fetch(`${process.env.API_URL}/news`, {
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch news')
    }

    return res.json()
}
