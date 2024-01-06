import {Product} from "@/types";

export default function getProductsByCategory(category: string): Promise<Product[]> {
    const data = fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())
        .then(json=>json);

    return data;
}
