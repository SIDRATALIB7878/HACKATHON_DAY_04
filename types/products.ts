
export type Product = {
    _id: string;
    productName: string;
    description: string;
    price: number;
    image?: string;
    slug: { current: string };
    inventory: number; // Ensure this exists
};

export interface  product{
    _id: string;
    productName: string;
    _type: product;
    image:{
        asset: {
            _ref: string;
            _type: "image";
            
        }
    };
price: number;
    category: string;
    description?:string;
    slug: {
        current: string;
    };
invantory:number;
}