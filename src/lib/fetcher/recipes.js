export async function getRecipes() {
    const res = await fetch(`${process.env.API_URL}/recipes`, {
        next: { revalidate: 60 }
    })

    if (!res.ok) {
        throw new Error('Failed to fetch recipes')
    }

    return res.json()
}
