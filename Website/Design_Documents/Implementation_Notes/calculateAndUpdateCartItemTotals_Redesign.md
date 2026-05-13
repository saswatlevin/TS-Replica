The following is a MongoDB User document. It contains ShippingAddresses and CartItems.

{

&#x20; "\_id": "692f4d3cbc61fbf1bc36c0fe",

&#x20; "user\_id": "f6c13bd3c15c",

&#x20; "docType": "USER",

&#x20; "date\_created\_at": "2025-12-02T20:34:04",

&#x20; "email": "fed004@server.com",

&#x20; "password": "$argon2id$v=19$m=65536,t=3,p=4$E5Y8T90ZdMP3yfwo3l2w+w$BF3BLm4PZ1c3KPDwa6UJuCsERhjD3Pn/HwBF5/QB/V8",

&#x20; "phone\_number": "917548725510",

&#x20; "first\_name": "DEEF",

&#x20; "last\_name": "FEED",

&#x20; "user\_role": "admin",

&#x20; "upper\_size\_number": 40,

&#x20; "upper\_size\_letter": "M",

&#x20; "others\_size\_letter": "M",

&#x20; "email\_comms\_type": "Never / Unsubscribe",

&#x20; "sms\_comms": true,

&#x20; "ShippingAddresses": \[

&#x20;   {

&#x20;     "shipping\_address\_id": "8a979f6525ff",

&#x20;     "address\_type\_id": "1",

&#x20;     "company\_name": "",

&#x20;     "address": "617 4th Street",

&#x20;     "apartment": "Unit 1 (NE)",

&#x20;     "city": "Canmore",

&#x20;     "administrative\_division": "Alberta",

&#x20;     "country": "Canada",

&#x20;     "postal\_area": "T1W 2G7",

&#x20;     "phone\_number": "14035551234"

&#x20;   },

&#x20;   {

&#x20;     "shipping\_address\_id": "b953363faea4",

&#x20;     "address\_type\_id": "1",

&#x20;     "company\_name": "Packard Bay",

&#x20;     "address": "100 1st Street",

&#x20;     "apartment": "Unit 1",

&#x20;     "city": "Camberwell",

&#x20;     "administrative\_division": "Alberta",

&#x20;     "country": "Canada",

&#x20;     "postal\_area": "T1W 2G7",

&#x20;     "phone\_number": "14035761892"

&#x20;   }

&#x20; ],

&#x20; "CartItems": \[

&#x20;   {

&#x20;     "cart\_item\_id": "6372bf308fc9",

&#x20;     "product\_id": "prl5dyv7n0bx",

&#x20;     "sku": "mqusuae9r0",

&#x20;     "cart\_item\_name": "The Short Sleeve Jack in Deep Sea Seersucker",

&#x20;     "cart\_item\_image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Short-SleevedShirts\\\\The\_Short\_Sleeve\_Jack\\\\The\_Short\_Sleeve\_Jack\_in\_Deep\_Sea\_Seersucker\\\\instock\_m\_q225\_The\_Short\_Sleeve\_Jack-DeepSeaSeersucker\_portrait\_001.jpg",

&#x20;     "cart\_item\_quantity": 1,

&#x20;     "item\_total": 108,

&#x20;     "discount\_code": "20PERCENT",

&#x20;     "discount\_percentage": 20,

&#x20;     "discount\_amount": 0,

&#x20;     "discounted\_total": 0

&#x20;   },

&#x20;   {

&#x20;     "cart\_item\_id": "1214c4ae661d",

&#x20;     "product\_id": "b0e6v4zl9aih",

&#x20;     "sku": "vkr7eqvzsh",

&#x20;     "cart\_item\_name": "The Democratic Foundation Pant in Organic Navy",

&#x20;     "cart\_item\_image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Chinos\\\\The\_Democratic\_Foundation\_Pant\_in\_Organic\_Navy\\\\7310894563405\_democratic-foundation-pant-in-organic-navy-twill-2501\_01\_tsio.jpg",

&#x20;     "cart\_item\_quantity": 3,

&#x20;     "item\_total": 125,

&#x20;     "discount\_code": "20PERCENT",

&#x20;     "discount\_percentage": 20,

&#x20;     "discount\_amount": 0,

&#x20;     "discounted\_total": 0

&#x20;   },

&#x20;   {

&#x20;     "cart\_item\_id": "cnklop1223kl",

&#x20;     "product\_id": "a6bb1d23bd28",

&#x20;     "sku": "byhl4v6vfw",

&#x20;     "cart\_item\_name": "The Craftsman Shirt in Bark Plaid Cotton",

&#x20;     "cart\_item\_image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Long-Sleeved Shirts\\\\The\_Craftsman\_Shirt\\\\The\_Craftsman\_Shirt\_in\_Bark\_Plaid\_Linen\\\\instock\_m\_q225\_craftsman\_bark\_portrait\_004.jpg",

&#x20;     "cart\_item\_quantity": 2,

&#x20;     "item\_total": 600,

&#x20;     "discount\_code": "15PERCENT",

&#x20;     "discount\_percentage": 15,

&#x20;     "discount\_amount": 90,

&#x20;     "discounted\_total": 510

&#x20;   }

&#x20; ],

&#x20; "total\_item\_total": 0,

&#x20; "total\_discount\_amount": 0,

&#x20; "total\_discounted\_total": 0,

&#x20; "total\_discount\_percentage": 0,

&#x20; "total\_payable\_amount": 0,

&#x20; "\_\_v": 0

}



The following is a MongoDB Product document: 



{

&#x20; "\_id": "683251a8815f56fea947db67",

&#x20; "product\_id": "b0e6v4zl9aih",

&#x20; "product\_name": "The Democratic Foundation Pant in Organic Navy",

&#x20; "docType": "PRODUCT",

&#x20; "product\_color": "Organic Navy",

&#x20; "product\_description": "Originally issued to American soldiers during WWII, the first military chinos were celebrated for their comfort, versatility, and impressive ruggedness. They proved so popular, in fact, that soldiers held onto their well-worn pairs even after discharge, and as more and more civilians took notice, the style became a fixture of garages and workshops as well as college campuses and city streets. Featuring 100% Responsible materials and an updated silhouette, The Foundation Pant is both a reinvention of our earlier chinos and an elevated reimagining of the all-purpose originals, built to help you start your day on solid ground.",

&#x20; "product\_price": 125,

&#x20; "product\_category": "Lower Garment",

&#x20; "product\_subcategory": "Bottom",

&#x20; "product\_subcategory\_type": "Chino",

&#x20; "product\_fit": "Classic medium rise, tailored fit, straight through the thigh with a slight taper from knee to leg opening. Available in 32\\" and 34\\" inseams. Model is 6\\\\'2\\", wearing a 32.",

&#x20; "product\_garment\_weight": {

&#x20;   "garment\_weight\_description": "Sturdy daily drivers",

&#x20;   "garment\_weight": "Medium"

&#x20; },

&#x20; "product\_material": "The Foundation Pant project started when we discovered some deadstock military chino material and decided to reverse-engineer it with 100% organic cotton. We chose a balanced weight (8-oz.) that feels great all year round, and opted for a tight weave using mercerized yarns, giving The Foundation Pant a smooth hand feel and improved durability. Because it’s been garment dyed and washed, it has the character of a well-loved vintage piece, and it’ll continue to pick up a ton of nuance with wear. Cool herringbone accents at the waistband and the pockets serve as a nod to the style’s military origins.",

&#x20; "product\_supply\_type": {

&#x20;   "supply\_type\_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",

&#x20;   "supply\_type": "Essential"

&#x20; },

&#x20; "product\_specifications": "8-oz. 100% organic cotton twill. 5.5-oz. 100% organic cotton herringbone pocketing. Garment dyed and washed for a soft, lived-in feel. Front slash pockets for easy entry. Low profile welt coin pocket inset into the waistband. Two back welt pockets. Right pocket features button closure. Bound fly and outseam. YKK zip fly with 4-hole vintage military-style button closure. Wash cold and tumble dry low. Made in China.",

&#x20; "product\_images": \[

&#x20;   {

&#x20;     "image\_id": "9b8n5ohloj96",

&#x20;     "image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Chinos\\\\The\_Democratic\_Foundation\_Pant\_in\_Organic\_Navy\\\\7310894563405\_democratic-foundation-pant-in-organic-navy-twill-2501\_01\_tsio.jpg",

&#x20;     "main\_image": true

&#x20;   },

&#x20;   {

&#x20;     "image\_id": "3zz3yg2gc6m2",

&#x20;     "image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Chinos\\\\The\_Democratic\_Foundation\_Pant\_in\_Organic\_Navy\\\\7310894563405\_democratic-foundation-pant-in-organic-navy-twill-2501\_08\_tsio.jpg",

&#x20;     "main\_image": false

&#x20;   },

&#x20;   {

&#x20;     "image\_id": "878cv2n5y0vu",

&#x20;     "image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Chinos\\\\The\_Democratic\_Foundation\_Pant\_in\_Organic\_Navy\\\\7310894563405\_democratic-foundation-pant-in-organic-navy-twill-2501\_05\_tsio.jpg",

&#x20;     "main\_image": false

&#x20;   }

&#x20; ],

&#x20; "product\_items": \[

&#x20;   {

&#x20;     "sku": "vkr7eqvzsh",

&#x20;     "lower\_size\_number": 38,

&#x20;     "inseam\_length": 32,

&#x20;     "total\_stock": 410,

&#x20;     "quantity\_sold": 410,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "fmrok30o34",

&#x20;     "lower\_size\_number": 38,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 311,

&#x20;     "quantity\_sold": 310,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 1

&#x20;   },

&#x20;   {

&#x20;     "sku": "0gciqd07s0",

&#x20;     "lower\_size\_number": 36,

&#x20;     "inseam\_length": 32,

&#x20;     "total\_stock": 480,

&#x20;     "quantity\_sold": 480,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "ybulgp0qvt",

&#x20;     "lower\_size\_number": 36,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 380,

&#x20;     "quantity\_sold": 380,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "k8sws30u5a",

&#x20;     "lower\_size\_number": 35,

&#x20;     "inseam\_length": 32,

&#x20;     "total\_stock": 401,

&#x20;     "quantity\_sold": 401,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "ddstmcazle",

&#x20;     "lower\_size\_number": 35,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 301,

&#x20;     "quantity\_sold": 301,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "0kxgofmoob",

&#x20;     "lower\_size\_number": 34,

&#x20;     "inseam\_length": 32,

&#x20;     "total\_stock": 398,

&#x20;     "quantity\_sold": 398,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "2rhrkprijj",

&#x20;     "lower\_size\_number": 34,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 298,

&#x20;     "quantity\_sold": 298,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "vmjowog0h6",

&#x20;     "lower\_size\_number": 33,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 387,

&#x20;     "quantity\_sold": 387,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "hwe6kks2ua",

&#x20;     "lower\_size\_number": 33,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 287,

&#x20;     "quantity\_sold": 287,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "p7bzu29n95",

&#x20;     "lower\_size\_number": 32,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 365,

&#x20;     "quantity\_sold": 365,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "k34f951z73",

&#x20;     "lower\_size\_number": 32,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 265,

&#x20;     "quantity\_sold": 260,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 5

&#x20;   },

&#x20;   {

&#x20;     "sku": "hdpwj2uswz",

&#x20;     "lower\_size\_number": 31,

&#x20;     "inseam\_length": 32,

&#x20;     "total\_stock": 373,

&#x20;     "quantity\_sold": 373,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "juqo09kjas",

&#x20;     "lower\_size\_number": 31,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 273,

&#x20;     "quantity\_sold": 269,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 4

&#x20;   },

&#x20;   {

&#x20;     "sku": "od57s83t8t",

&#x20;     "lower\_size\_number": 30,

&#x20;     "inseam\_length": 32,

&#x20;     "total\_stock": 396,

&#x20;     "quantity\_sold": 396,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "akop1qwnbv",

&#x20;     "lower\_size\_number": 30,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 296,

&#x20;     "quantity\_sold": 294,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 2

&#x20;   },

&#x20;   {

&#x20;     "sku": "gj9z2qxpse",

&#x20;     "lower\_size\_number": 29,

&#x20;     "inseam\_length": 32,

&#x20;     "total\_stock": 700,

&#x20;     "quantity\_sold": 700,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "akouewzxvg",

&#x20;     "lower\_size\_number": 29,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 600,

&#x20;     "quantity\_sold": 600,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "feq8ukauyf",

&#x20;     "lower\_size\_number": 28,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 682,

&#x20;     "quantity\_sold": 682,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   },

&#x20;   {

&#x20;     "sku": "fhrizmjxsh",

&#x20;     "lower\_size\_number": 28,

&#x20;     "inseam\_length": 34,

&#x20;     "total\_stock": 582,

&#x20;     "quantity\_sold": 582,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 0

&#x20;   }

&#x20; ],



&#x20; "discount\_code": "None",

&#x20; "discount\_percentage": 0,

&#x20; "discount\_amount": 0,

&#x20; "discounted\_total": 0,

&#x20; "\_\_v": 0

}





The following ExpressJS helper function is intended to calculate the "total\_item\_total", "total\_discount\_amount", "total\_discounted\_total", "total\_discount\_percentage" and "total\_payable\_amount" by adding up the "discount\_percentage", "discount\_amount" and "disocunted\_total" of all the CartItems in a User document. It does this for a given user user. However, the code is inefficient since it gets the given User and then uses a for-loop for most of the calculations. I want to be able to do 2 things with it:



1. Explore options to make the code more efficient.
2. Explore options to does the calculations for all User documents



Here is the Helper Function:



const calculateAndUpdateCartItemTotals = async(req) => {



&#x20;  // Get all the CartItem sub-documents from the CartItems array of the respective 

&#x20;  // user and add sum the respective fields and then update them in the respective user document.

&#x20;  console.log("In calculateAndUpdateCartItemTotals");



&#x20;  try {



&#x20;       const user\_id = req.params.user\_id;

&#x20;       console.log("user\_id ", user\_id);



&#x20;       const user\_id\_query = {user\_id: user\_id};

&#x20;       console.log("user\_id\_query ", user\_id\_query);



&#x20;       const user = await User.findOne(user\_id\_query).lean();



&#x20;       const cart\_items = user.CartItems;



&#x20;       const cart\_item\_length = cart\_items.length;



&#x20;       var total\_item\_total = 0;

&#x20;  

&#x20;       var total\_discount\_amount = 0;

&#x20;  

&#x20;       var total\_discounted\_total = 0;



&#x20;       var total\_discount\_percentage = 0;



&#x20;       var total\_payable\_amount = 0;



&#x20;       var i = 0;



&#x20;       for ( i = 0; i < cart\_item\_length; ++i) {



&#x20;           total\_item\_total = total\_item\_total + cart\_items\[i].item\_total;

&#x20;           total\_discount\_amount = total\_discount\_amount + cart\_items\[i].discount\_amount;

&#x20;           total\_discounted\_total = total\_discounted\_total + cart\_items\[i].discounted\_total;



&#x20;       } 



&#x20;       total\_discount\_percentage = (total\_discount\_amount / total\_item\_total) \* 100;

&#x20;       total\_payable\_amount = total\_item\_total - total\_discount\_amount;



&#x20;       const update\_object = { 

&#x20;           

&#x20;           total\_item\_total: total\_item\_total, 

&#x20;           total\_discount\_amount: total\_discount\_amount, 

&#x20;           total\_discounted\_total: total\_discounted\_total, 

&#x20;           total\_discount\_percentage: total\_discount\_percentage, 

&#x20;           total\_payable\_amount: total\_payable\_amount

&#x20;       };



&#x20;       console.log("update\_object ", update\_object);



&#x20;       const result = User.findOneAndUpdate(user\_id\_query, update\_object, {new: true}, {runValidators: true}).lean();



&#x20;       console.log("result in calculateCartItemTotals ", result);

&#x20;       return result;

&#x20;  }



&#x20;  catch(error) {

&#x20;       console.log("Error in calculateCartItemTotals ", error);

&#x20;       throw error;

&#x20;  }

};







