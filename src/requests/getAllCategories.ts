export async function getAllCategories(): Promise<string[]> {
    const data = fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=> json);

    return data;
}
