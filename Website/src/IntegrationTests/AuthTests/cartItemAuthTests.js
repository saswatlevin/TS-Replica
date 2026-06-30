fetch('http://localhost:3500/users/loginuser', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user_id: "f6c13bd3c15c", password: "Kenpeitai@1940" }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/users/logoutuser', {
  method: 'POST',
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/cartitems/createcartitem', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    product_id: "u64xz4yc2zcb",
    sku: "733tse774k",
    product_name: "The Jack in Navy University Stripe Everyday Oxford",
    image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Oxfords\\The_Jack_in_Navy_University_Stripe_Everyday_Oxford\\6824013693005_jack-in-navy-university-stripe-everyday-oxford-2304_01.jpg",
    cart_item_quantity: 1,
    product_price: 125,
    discount_code: "None",
    discount_percentage: 0 }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/cartitems/deletecartitem', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
  { 
      cart_item_id: "884f1e9f1636",
      product_id: "u64xz4yc2zcb",
      sku: "733tse774k" 
  }
  ),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/cartitems/updatecartitemquantity', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
  { 
      cart_item_id: "884f1e9f1636",
      product_id: "u64xz4yc2zcb",
      sku: "733tse774k",
      cart_item_quantity: 2 
  }
  ),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);