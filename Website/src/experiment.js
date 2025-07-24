/* const jsesc = require('jsesc');
console.log(jsesc("’", {'json': true}));

console.log(jsesc("“Notify Me”", {minimal: false, quotes: 'double', wrap: true}));

//console.log(jsesc("This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.", {'json': true}));

console.log(jsesc("après", {minimal: false, quotes: 'double', wrap: true}));

//console.log(jsesc("8-oz. 100% organic cotton twill. 5.5-oz. 100% organic cotton herringbone pocketing. Garment dyed and washed for a soft, lived-in feel. Front slash pockets for easy entry. Low profile welt coin pocket inset into the waistband. Two back welt pockets. Right pocket features button closure. Bound fly and outseam. YKK zip fly with 4-hole vintage military-style button closure. Wash cold and tumble dry low. Made in China.", {'json': true}));

//console.log(jsesc("C:\\users\\saswa\\abc.txt", {'json': true}));

//zodIsProductId, zodIsSKU, zodIsCartItemId, 
//console.log(jsesc("ap01cvbnsyvw", {'json': true}));
//zodIsCartItemName, productNameRegex
console.log(jsesc("AzÀÖ Ø ö øÿ", {minimal: true, json: true, quotes: 'double', wrap: true}));

*/

const { sanitize } = require('express-xss-sanitizer');

const test_data = {
  user_id: "7ycthivdrqvl",
  docType: "USER",
  date_created_at: "2025-05-10T20:00:00Z",
  email: "abc001@server.com",
  password: "fdkodke03e3/eor",
  phoneno: "0123456789",
  first_name: "ABC",
  last_name: "CBA",
  user_role: "user",
  upper_size_number: 44,
  upper_size_letter: "XL",
  lower_size_number: 36,
  others_size_letter: "XL",
  email_comms_type: "One Weekly Recap",
  sms_comms: true,
  ShippingAddresses: [
    {
      shipping_address_id: "koplasqwegmk",
      address_type_id: "1",
      company_name: "",
      address: "6-5-1 Nishi-Shinjuku, Shinjuku-ku",
      apartment: "Room 2503, Shinjuku I-Land Tower",
      city: "Tokyo",
      administrative_division: "Tokyo",
      country: "Japan",
      postal_area: "163-1390",
      phone_number: "+81312345678"
    },
    {
      shipping_address_id: "1ko0muljhytd",
      address_type_id: "1",
      company_name: "",
      address: "2-1-1 Nishishinjuku",
      apartment: "Shinjuku Mitsui Building",
      city: "Shinjuku City",
      administrative_division: "Tokyo",
      country: "Japan",
      postal_area: "163-0451",
      phone_number: "+81333443311"
    }
  ],
  CartItems: [
    {
      cart_item_id: "gmzz5mseobth",
      product_id: "b0e6v4zl9aih",
      sku: "ygiy8ngzbm",
      cart_item_name: "The Apres Short in Navy Linen Tweed",
      cart_item_image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Shorts\\The_Apres_Short_in_Navy_Linen_Tweed\\instock_m_q225_The_Apres_Short-NavyLinenTweed_portrait_004.jpg",
      cart_item_quantity: 3
    },
    {
      cart_item_id: "6ibtbw7j38eh",
      product_id: "ojvs7hjfihgc",
      sku: "cdwrbvcp2r",
      cart_item_name: "The Painter Pant in Seeded Natural Chipped Canvas",
      cart_item_image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Pants\\The_Painter_Pant_in_Seeded_Natural_Chipped_Canvas\\instock_m_q225_The_Painter_Pant-SeededNaturalChippedCanvas_portrait_001.jpg",
      cart_item_quantity: 1
    },
    {
      cart_item_id: "rqsqfusfuu24",
      product_id: "u9yl6odhiget",
      sku: "xael8ujrjh",
      cart_item_name: "The Button Down Polo in Cilantro Herringbone",
      cart_item_image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Short-Sleeved Shirts\\The_Button_Down_Polo\\The_Button_Down_Polo_in_Cilantro_Herringbone\\instock_m_q225_buttondown_cilantro_portrait_001.jpg",
      cart_item_quantity: 2
    }
  ]
}; 

const smallData = {
  "key": "value"
};

const result = sanitize(smallData);

console.log("result ", result);
console.log("smallData ", smallData);
smallData["key"]  = "value1";
console.log("result ", result, "\n smallData after modification", smallData);
