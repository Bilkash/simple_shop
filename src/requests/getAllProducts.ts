import {Product} from "@/types";

export async function getAllProducts(): Promise<Product[]> {
    const data = fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> json);

    return data;
}
