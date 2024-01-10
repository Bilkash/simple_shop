import {Product} from "@/types";

export async function getAllProducts(): Promise<Product[]> {
    try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");

        return [];
    }
}
