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

fetch('http://localhost:3500/shippingaddresses/createshippingaddress', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ address_type_id: "1",
            company_name: "LKS Company",
            address: "200 Market Street",
            apartment: "Suite 204",
            city: "San Francisco",
            administrative_division: "California",
            country: "United States",
            postal_area: "93205",
            phone_number: "14177774136"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/shippingaddresses/updateshippingaddress', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
  shipping_address_id: "1eb5c8a32c9b",
  address_type_id: "2"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/shippingaddresses/searchshippingaddress', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ country: "United States"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/shippingaddresses/getshippingaddressbyid', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ shipping_address_id: "85bb09eb7654"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/shippingaddresses/deleteshippingaddressbyid', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ shipping_address_id: "1eb5c8a32c9b"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);