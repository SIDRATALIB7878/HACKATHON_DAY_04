import { groq } from "next-sanity";

export const allproducts=groq`[_type=="product"]`  ;
export const five=groq`[_type=="product"][0...4]` ;