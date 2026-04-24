If there's a User document in MongoDB, like so:



{

&#x09;"user\_id": "7ycthivdrqvl",

&#x09;"docType": "USER",

&#x09;"date\_created\_at": "2025-05-10T20:00:00Z",

&#x09;"email": "abc001@server.com",

&#x09;"password": "fdkodke03e3/eor",

&#x09;"phoneno": "0123456789",

&#x09;"first\_name": "ABC",

&#x09;"last\_name": "CBA",

&#x09;"user\_role": "user",

&#x09;"upper\_size\_number": 44,

&#x09;"upper\_size\_letter": "XL",

&#x09;"lower\_size\_number": 36,

&#x09;"others\_size\_letter": "XL",

&#x09;"email\_comms\_type": "One Weekly Recap",

&#x09;"sms\_comms": true,

&#x09;"ShippingAddresses": \[

&#x09;	{

&#x09;		"shipping\_address\_id": "koplasqwegmk",

&#x09;		"address\_type\_id": "1",

&#x09;		"company\_name": "",

&#x09;		"address": "6-5-1 Nishi-Shinjuku, Shinjuku-ku",

&#x09;		"apartment": "Room 2503, Shinjuku I-Land Tower",

&#x09;		"city": "Tokyo",

&#x09;		"administrative\_division": "Tokyo",

&#x09;		"country": "Japan",

&#x09;		"postal\_area": "163-1390",

&#x09;		"phone\_number": "+81312345678"

&#x09;	},

&#x09;

&#x09;	{

&#x09;		"shipping\_address\_id": "1ko0muljhytd",

&#x09;		"address\_type\_id": "1",

&#x09;		"company\_name": "",

&#x09;		"address": "2-1-1 Nishishinjuku",

&#x09;		"apartment": "Shinjuku Mitsui Building",

&#x09;		"city": "Shinjuku City",

&#x09;		"administrative\_division": "Tokyo",

&#x09;		"country": "Japan",

&#x09;		"postal\_area": "163-0451",

&#x09;		"phone\_number": "+81333443311"

&#x09;	}

&#x09;

&#x09;],



&#x09;"CartItems": \[



&#x09;	{

&#x09;		"cart\_item\_id": "gmzz5mseobth",

&#x09;		"product\_id": "b0e6v4zl9aih",

&#x09;		"sku":  "ygiy8ngzbm",

&#x09;		"cart\_item\_name": "The Apres Short in Navy Linen Tweed",

&#x09;		"cart\_item\_price": 150,

&#x09;		"cart\_item\_image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Shorts\\\\The\_Apres\_Short\_in\_Navy\_Linen\_Tweed\\\\instock\_m\_q225\_The\_Apres\_Short-NavyLinenTweed\_portrait\_004.jpg",

&#x09;		"cart\_item\_quantity": 3,

&#x09;		"discount\_code": "None",

&#x20;                       "discount\_percentage": 0,

&#x20;                       "discount\_amount": 0,

&#x20;                       "discounted\_total": 0

&#x09;	},



&#x09;	{

&#x09;		"cart\_item\_id": "6ibtbw7j38eh",

&#x09;		"product\_id": "ojvs7hjfihgc",

&#x09;		"sku": "cdwrbvcp2r",

&#x09;		"cart\_item\_name": "The Painter Pant in Seeded Natural Chipped Canvas",

&#x09;		"cart\_item\_price": 100,

&#x09;		"cart\_item\_image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Pants\\\\The\_Painter\_Pant\_in\_Seeded\_Natural\_Chipped\_Canvas\\\\instock\_m\_q225\_The\_Painter\_Pant-SeededNaturalChippedCanvas\_portrait\_001.jpg",

&#x09;		"cart\_item\_quantity": 1,

&#x20;                       "discount\_code": "None",

&#x20;                       "discount\_percentage": 0,

&#x20;                       "discount\_amount": 0,

&#x20;                       "discounted\_total": 0



&#x09;	},



&#x09;	{

&#x09;		"cart\_item\_id": "rqsqfusfuu24",

&#x09;		"product\_id": "u9yl6odhiget",

&#x09;		"sku": "xael8ujrjh",

&#x09;		"cart\_item\_name": "The Button Down Polo in Cilantro Herringbone",

&#x09;		"cart\_item\_price": 200,

&#x09;		"cart\_item\_image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Short-Sleeved Shirts\\\\The\_Button\_Down\_Polo\\\\The\_Button\_Down\_Polo\_in\_Cilantro\_Herringbone\\\\instock\_m\_q225\_buttondown\_cilantro\_portrait\_001.jpg",

&#x09;		"cart\_item\_quantity": 2,

&#x20;                       "discount\_code": "None",

&#x20;                       "discount\_percentage": 0,

&#x20;                       "discount\_amount": 0,

&#x20;                       "discounted\_total": 0

&#x09;	}





&#x09;

&#x09;],

&#x20;

&#x20;       "total\_price": 950

&#x20;       "total\_discount\_amount": 0,

&#x20;       "total\_discounted\_total": 0,

&#x20;       "total\_discount\_percentage":0

&#x20;





}



And a Product Document like so:



{

&#x20; "product\_id": "u9yl6odhiget",

&#x20;

&#x20; "product\_name": "The Apres Short in Navy Linen Tweed",

&#x20;

&#x20; "docType": "PRODUCT",

&#x20;

&#x20; "product\_color": "Navy Linen Tweed",

&#x20;

&#x20; "product\_description": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it's an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in between",

&#x20;

&#x20; "product\_price": 94,

&#x20;

&#x20; "product\_category": "Lower Garment",

&#x20;

&#x20; "product\_subcategory": "Bottom",

&#x20;

&#x20; "product\_subcategory\_type": "Short",

&#x20;

&#x20; "product\_fit": "7\\" Inseam. Model is 6'3\\", wearing a Medium.",

&#x20;

&#x20; "product\_garment\_weight": {

&#x20;   "garment\_weight\_description": "Sturdy daily drivers.",

&#x20;   "garment\_weight": "Medium"

&#x20; },

&#x20;

&#x20; "product\_material": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it's an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in between.",

&#x20;

&#x20; "product\_supply\_type": {

&#x20;   "supply\_type\_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",

&#x20;   "supply\_type": "Limited"

&#x20; },

&#x20;

&#x20; "product\_specifications": "8.5-oz. 55% linen, 45% organic cotton tweed with 6-oz. 100% organic cotton SF Map pocketing, washed for a soft, lived-in feel, featuring an elastic waistband with drawcord, button fly, two front slash pockets, two back patch button-through pockets, and made in China; wash cold, tumble dry low.",

&#x20;

&#x20; "product\_images": \[

&#x20;   {

&#x20;     "image\_id": "zcp1exk8i2mi",

&#x20;     "image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Shorts\\\\The\_Apres\_Short\_in\_Navy\_Linen\_Tweed\\\\instock\_m\_q225\_The\_Apres\_Short-NavyLinenTweed\_portrait\_004.jpg",

&#x20;     "main\_image": true

&#x20;   },

&#x20;

&#x20;   {

&#x20;     "image\_id": "vibakx5eskh5",

&#x20;     "image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Shorts\\\\The\_Apres\_Short\_in\_Navy\_Linen\_Tweed\\\\instock\_m\_q225\_The\_Apres\_Short-NavyLinenTweed\_portrait\_005.jpg",

&#x20;     "main\_image": false

&#x20;   },

&#x20;

&#x20;   {

&#x20;     "image\_id": "b4xj4xyifqtl",

&#x20;     "image\_uri": "C:\\\\Users\\\\saswa\\\\OneDrive\\\\Desktop\\\\Taylor\_Stitch\\\\Website\\\\ActualData\\\\Shorts\\\\The\_Apres\_Short\_in\_Navy\_Linen\_Tweed\\\\instock\_m\_q225\_The\_Apres\_Short-NavyLinenTweed\_portrait\_006.jpg",

&#x20;     "main\_image": false

&#x20;   }

&#x20; ],



&#x20; "product\_items": \[

&#x20;   {

&#x20;     "sku": "ygiy8ngzbm",

&#x20;     "lower\_size\_letter": "XXL",

&#x20;     "total\_stock": 35,

&#x20;     "quantity\_sold": 0,

&#x20;     "quantity\_returned": 0,

&#x20;     "current\_stock": 35

&#x20;   }

&#x20;

&#x20; ],



&#x20; "discount\_code": "None",

&#x20; "discount\_percentage": 0,

&#x20; "discount\_amount": 0,

&#x20; "discounted\_total": 0



}







Here are a few questions.



01\) **When Users select a Product as a CartItem, then, we do not subtract the current\_stock or increment the quantity\_sold. This is because a "CartItem" is a "Reservation", not an actual sale  If a user A were to select 17 of "The Apres Short in Navy Linen Tweed" which puts them into user A's cart and user B were to select 18 of the same product, which puts them into user B's cart. At this time, neither user A nor user B have checked out and successfully paid for them CartItems. When user C comes along, then he still sees that there are 35 numbers of "The Apres Short in Navy Linen Tweed" and he selects 16 of them, which puts them into user C's cart. Now, the question is that, what would happen if user A and user B checked out and successfully paid for their CartItems, respectively one after another. What happens to user C's CartItems?**



02\) **What should be the formula for calculating the "total\_product\_price", "total\_discount\_amount", "total\_discounted\_total" and "total\_discount\_percentage"?**



**Answer to Question 01:**

&#x20;\* When creating a CartItem, ensure that the current\_stock is > 0.

&#x20;\* When updating a CartItem quantity, ensure that current\_stock >= the proposed cart\_item\_quantity.

&#x20;\* During checkout, check that the current\_stock is greater than or equal to the proposed cart\_item\_quantity inside the MongoDB transaction.

&#x20;\* During checkout, if the current\_stock is not greater than or equal to the proposed cart\_item\_quantity inside the MongoDB transaction for 1 or more Cartitems, then we fail the Checkout and delete the CartItems.



**Answer to Question 02:**

item\_total = cart\_item\_quantity \* 4

discount\_amount = item\_total \* (discount\_percentage / 100)

discounted\_total = item\_total - discount\_amount

&#x09;

total\_product\_price = Σ(item\_total)

total\_discount\_amount = Σ(discount\_amount)

total\_discounted\_total = Σ(discounted\_total)



===================PRODUCT PRICE AND DISCOUNT FIELD UPDATES===================

\* **When we create a CartItem, then**:

&#x20; ^ Assume that the **cart\_item\_quantity** is 1. Set it inside the **createCartItem()** function.

&#x20; 

&#x20; ^ The **item\_total** is equal to the **product\_price**.

&#x20; 

&#x20; ^ Therefore the **discount\_code**, **discount\_percentage**, **discount\_amount** and **discounted\_total** are the same as that of the corresponding product.

&#x20; 

&#x20; ^ We need to call the updateCartItemTotals() function.

&#x20; 



\* **When we update the product\_price, then**:

&#x20;   ^ The **discount\_amount** and **discount\_total** should be updated in the Product document. \[Use **updateMany()** to update the **product\_price**, **discount\_amount** and **discounted\_total** of the respective Product document in the **updateProductPrice()** function.]



&#x20;   ^ The **item\_total** should be updated in all the CartItems of the said Product of all Users. \[Point covered below.]



&#x20;   ^ The **discount\_amount** and **discounted\_total** should be updated in the all the CartItems of the said Product of all Users.  \[Use the **UpdateCartItemPricePipeline** aggregation pipeline to update the **item\_total**, **discount\_amount** and **discounted\_total** in the **updateCartItemPrice()** function. The DISCOUNT 1 aggregation pipeline takes the EXISTING **discount\_percentage** value from the database to be able to calculate the **discount\_amount**. It DOES NOT update the **discount\_percentage** field.]



&#x20;   ^ The **total\_item\_total**, **total\_discount\_amount**, **total\_discount\_percentage**, **total\_discounted\_total** and **total\_payable\_amount** should be calculated and updated in the respective User document. \[Done in the **updateCartItemTotals()** function.]



&#x20;

&#x20; \* **When we update the discount\_code AND discount\_percentage, then**:

&#x20;   ^ The **discount\_amount** and **discount\_total** should be updated in the Product document.  \[Use **updateMany()** to update the **discount\_code**, **discount\_percentage**, **discount\_amount** and **discounted\_total** of the respective Product document in the **updateProductDiscount()** function.]



&#x20;   ^ The **discount\_code**, **discount\_percentage**, **discount\_amount** and **discount\_total** should be updated in the all the CartItems of the said Product of all Users. \[Use the **UpdateCartItemDiscountPipeline** aggregation pipeline to update the **discount\_code**, **discount\_percentage**, **discount\_amount** and **discount\_total** fields of all the CartItems of the respective Product of all Users in the **updateCartItemDiscount()** function. The  aggregation pipeline takes the NEW **discount\_percentage** value from outside the database to calculate the **discount\_amount** value.]

&#x20;

&#x20;   ^ The **total\_discount\_amount**, **total\_discounted\_total** and **total\_payable\_amount** should be calculated and updated in the respective User document. \[Done in the **updateCartItemTotals()** function.]





&#x20; \* **When the cart\_item\_quantity is updated**:

&#x20;   ^ The **item\_total** should be updated in the respective CartItem of the said product. \[Augment the **updateCartItemQuantity()** function to be able to update the **item\_total**.]



&#x20;   ^ The **discount\_amount** and **discounted\_total** should be updated in the respective CartItem of the said product. \[Augment the **updateCartItemQuantity()** function to be able to update the **discount\_amount** and the **discounted\_total**.]



&#x20;   ^ The **total\_discount\_amount**, **total\_discounted\_total** and **total\_payable\_amount** should be calculated and updated in the respective User document. \[Done in the **updateCartItemTotals()** function.]

===================PRODUCT PRICE AND DISCOUNT FIELD UPDATES===================

