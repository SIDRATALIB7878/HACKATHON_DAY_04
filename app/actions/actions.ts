// import { Product } from '/types/product';
// import { product } from '@/types/products';
// import { product, Product} from "@/types/products";
// export const addToCart = (product: Product)=>{
//     const cart: Product[]=JSON.parse(localStorage.getItem('cart')||`[]`)
//     const exixtingProductIndex=cart.findIndex(item=>item._id===product._id)

// if(exixtingProductIndex>-1){cart[exixtingProductIndex].inventory+=1

//     }
//     else{
//         cart.push({...product,inventory:1})
//     }
//     localStorage.setItem('cart',JSON.stringify(cart))
// }

// export const removeFromCart=(productId: string,quantity:number)=>{
//     let cart :product[]=JSON.parse(localStorage.getItem('cart')||`[]`)
//     cart=cart.filter(item=>item._id!==productId)
//     localStorage.setItem('cart',JSON.stringify(cart))
// }
// export const undateCartQuantity=(productId: string)=>{
//     const cart :product[]=JSON.parse(localStorage.getItem('cart')||`[]`)
// const productIndex=cart.find(item=>item._id===productId)
// // if
// // (ProductIndex > -1){
// //     cart[productIndex].inventory = quantity
// // }
//     // localStorage.setItem('cart',JSON.stringify(cart))
// }
// export const clearCart=()=>{
//     localStorage.removeItem('cart')
// }
// export const getTotalCartQuantity=()=>{
//     let cart: product[]=JSON.parse(localStorage.getItem('cart')||`[]`)
//     return cart.reduce((total,item)=>total+item.inventory,0)
// }
//     export const getCartItems=():Product[] => {
//         return JSON.parse(localStorage.getItem('cart')||`[]`)
//     }
import {product} from "@/types/products";

export const addToCart = (product: product) => {
  const cart: product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingProductIndex = cart.findIndex((item) => item._id === product._id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].invantory += 1;
  } else {
    cart.push({ ...product, invantory: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  let cart: product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = cart.filter((item) => item._id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].invantory = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};

export const getTotalCartQuantity = () => {
  const cart: product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  return cart.reduce((total, item) => total + (item.invantory || 0), 0);
};

export const getCartItems = (): product[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};


