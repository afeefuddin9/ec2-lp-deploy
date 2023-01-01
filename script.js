// function getItems(){
//     db.collection("items").get().then((querySnapshot) => {
//         let items = [];
//         querySnapshot.forEach((doc) => {
//             items.push({
//                 id: doc.id,
//                 image: doc.data().image,
//                 name: doc.data().name,
//                 make: doc.data().make,
//                 rating: doc.data().rating,
//                 price: doc.data().price
//             })
//         });
//         generateItems(items)
//     });
// }

// function generateItems(items) {
//     let itemsHTML = "";
//     items.forEach((items) => {
//         itemsHTML += `
//         <div class="main-product">
//                     <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
//                        <img class="w-full h-full object-contain" src="${item.image}">
//                     </div>
//                    <div class="product-name text-gray-700 font-bold mt-2 text-sm">
//                        ${item.name}
//                    </div>
//                    <div class="product-make text-green-700 font-bold">
//                         ${item.make}
//                    </div>
//                    <div class="product-rating text-yellow-300 font-bold my-1">
//                         ⭐⭐⭐⭐⭐${item.rating}
//                    </div>
//                    <div class="product-price font-bold text-gray-700">
//                         ${item.price}
//                    </div>
//                    <div class="add-to-cart-button w-28 h-10 text-md flex items-center justify-center 
//                     bg-yellow-500 rounded text-white hover:bg-yellow-600 mt-2 cursor-pointer">
//                      Add to Cart
//              </div>
//         </div>
//     `
//     })

//     document.querySelector(".main-section-products").innerHTML = itemsHTML;
// }


// getItems();