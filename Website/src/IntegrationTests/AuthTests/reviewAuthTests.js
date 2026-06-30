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

fetch('http://localhost:3500/reviews/createreview', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
    { 
      product_id: "b0e6v4zl9aih",
      docType: "REVIEW",
      review_comment: "Test review for The Democratic Foundation Pant in Organic Navy",
      review_rating: 4.5 
    }
    ),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/reviews/updatereview', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
    { 
      review_id: "33a8a56a678e",
      product_id: "b0e6v4zl9aih",
      review_comment: "Test review for The Democratic Foundation Pant in Organic Navy. Great FABRIC" 
    }
    ),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/reviews/deletereview', {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
    { 
      review_id: "33a8a56a678e",
      product_id: "b0e6v4zl9aih"
    }
    ),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/reviews/searchreview', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
    { 
      product_id: "a6bb1d23bd29",
      review_comment: "Great fabric and equally great fit. Loved the FEELS.",
      review_rating: 4
    }
    ),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);

fetch('http://localhost:3500/reviews/getreviewbyid', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
    { 
     review_id: "0181f7954b68"
    }
    ),
  credentials: 'include' // needed to send/receive cookies
})
.then(res => res.json())
.then(console.log);