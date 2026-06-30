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

fetch('http://localhost:3500/productitems/createproductitem', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    item_type: "Short with Only Lower Size Letter",
    product_id: "u9yl6odhiget",
    lower_size_letter: "S",
    total_stock: 250,
    quantity_sold: 150,
    quantity_returned: 0,
    current_stock: 100 
  }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/productitems/updateproductitem', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    item_type: "Short with Only Lower Size Letter",
    product_id: "u9yl6odhiget",
    sku: '2d73a27453',
    lower_size_letter: "XL" 
  }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/productitems/deleteproductitem', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    product_id: "u9yl6odhiget",
    sku: '2d73a27453' 
  }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);