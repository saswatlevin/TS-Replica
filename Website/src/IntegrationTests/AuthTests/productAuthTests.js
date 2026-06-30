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

fetch('http://localhost:3500/products/createproduct', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ product_name: "The Apres Short in Navy Linen TWEED THREE",

            product_color: "Navy Linen TWEED",

            product_description: "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in BETWEEN",

            product_price: 94,

            product_category: "Lower Garment",

            product_subcategory: "Bottom",

            product_subcategory_type: "Short",

            product_fit: "7\" Inseam. Model is 6'3\", wearing a Medium.",

            product_garment_weight: {
                garment_weight_description: "Sturdy daily drivers.",
                garment_weight: "Medium"
            },

            product_material: "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in between.",

            product_supply_type: {
                supply_type_description: "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                supply_type: "Limited"
            },

            product_specifications: "8.5-oz. 55% linen, 45% organic cotton tweed with 6-oz. 100% organic cotton SF Map pocketing, washed for a soft, lived-in feel, featuring an elastic waistband with drawcord, button fly, two front slash pockets, two back patch button-through pockets, and made in China; wash cold, tumble dry low.",

            product_images: [],

            product_items: [
                {
                    item_type: "Short with Only Lower Size Letter",
                    lower_size_letter: "XL",
                    total_stock: 350,
                    quantity_sold: 150,
                    quantity_returned: 0,
                    current_stock: 200
                }
            ],

            discount_code: "30PERCENT",

            discount_percentage: 30 }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/products/updateproduct', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
    { 
      product_id: "12447f6f6bd3", 
      product_material: "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in BETWEEN." 
    }
    ),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/products/updateproductname', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ product_id: "12447f6f6bd3", product_name: "THE APRES SHORT IN NAVY LINEN TWEED THREE" }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/products/updateproductprice', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ product_id: "12447f6f6bd3", product_price: 300 }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/products/updateproductdiscount', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ product_id: "12447f6f6bd3", discount_code: "20PERCENT", discount_percentage: 20 }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/products/updateproductgarmentweight', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
      product_id: "12447f6f6bd3", 
      garment_weight_description: "Sturdy daily drivers.",
      garment_weight: "Heavy" 
    }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/products/updateproductsupplytype', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    product_id: "12447f6f6bd3",  
    supply_type_description: "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
    supply_type: "Essential" 
  }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/products/searchproducts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    "product_name": "The Apres Short in Navy Linen TWEED TWO" 
  }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/products/deleteproduct', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
     "product_id": "12447f6f6bd3"
  }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);