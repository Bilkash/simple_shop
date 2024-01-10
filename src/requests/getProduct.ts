import {Product} from "@/types";

export default function getProduct(id: string): Promise<Product> {
    const data = fetch(`https://fakestoreapi.com/produwwcts/${id}`)
        .then(res=>res.json())
        .then(json=>json);

    return data;
}
