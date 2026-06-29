fetch('http://localhost:3500/users/loginuser', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user_id: "f6c13bd3c15c", password: "Kenpeitai@1940" }),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/users/loginuser', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user_id: "8c489498b4b4", password: "ArkaThrust@2022" }),
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

fetch('http://localhost:3500/users/registeruser', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ "email": "abc004@server.com",
            "password": "ArkaThrust@2022",
            "phone_number": "91756057577",
            "first_name": "ABCFour",
            "last_name": "CBAFour",
            "user_role": "user",
            "upper_size_number": 42,
            "upper_size_letter": "XL",
            "others_size_letter": "XL",
            "email_comms_type": "One weekly recap",
            "sms_comms": true,
            "ShippingAddresses": [],
            "CartItems": []}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/users/updateuser', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ "email": "abc005@server.com"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/users/updateuserpassword', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ "password": "ArkaThruster@2022"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/users/searchusersbyname', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ first_name: "ELSOne"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/users/getuserbyid', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ user_id: 'f6c13bd3c15c'}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/users/deleteuser', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ "user_id": "8c489498b4b4"}),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);