from requestFunctions import *


##=====PRODUCT API INTEGRATION TESTING=====##
#print("====createProduct() TEST SUITE====")

create_product_url_1 = "http://localhost:3500/products/createproduct"

create_product_data_1 = {
   
  "product_name": "The Craftsman Shirt in Bark Plaid Linen",
  
  "product_color": "Bark Plaid Linen",
  
  "product_description": "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.",
  
  "product_price": 128,
  
  "product_category": "Upper Garment",
  
  "product_subcategory": "Shirt",
  
  "product_subcategory_type": "Long-Sleeved Shirt",
  
  "product_fit": "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.",
  
  "product_garment_weight": {
    "garment_weight_description": "Your daily driver, at a versatile all-season weight.",
    "garment_weight": "Medium"
  },
  
  "product_material": "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
  
  "product_supply_type": {
    "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
    
    "supply_type": "Limited"
  },
  
  "product_specifications": "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China.",
  
  "product_images": [
    {
      "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
      "main_image": True
    }
  ],
  
  "product_items": [
    {
      "upper_size_letter": "XXL",
      "upper_size_number": 46,
      "total_stock": 250,
      "quantity_sold": 80,
      "current_stock": 170
    }
  ]
}

#response_1 = postRequests(create_product_url_1, create_product_data_1)
#print("TEST 1 - Create a Product ", response_1.text)

#/////////////Test 2: Update a product garment weight (updateProductGarmentWeight)/////////////#
#print("====updateProductGarmentWeight() TEST SUITE====")

update_product_garment_weight_url_1 = "http://localhost:3500/products/updateproductgarmentweight"

####Update garment_weight_description and garment_weight - 1#### 
update_product_garment_weight_data_set_1 = {
    "product_id": "a6bb1d23bd28",
    "garment_weight_description": "Perfect for all SEASONS",
    "garment_weight": "Medium"
}

#response_1 = patchRequests(update_product_garment_weight_url_1, update_product_garment_weight_data_set_1)
#print("TEST 1 - Update a Product Garment (Weight & Description) ", response_1.text)

####Update garment_weight_description and garment_weight - 2####
update_product_garment_weight_data_set_2 = {
    "product_id": "a6bb1d23bd28",
    "garment_weight_description": "Perfect for every season, ALWAYS",
    "garment_weight": "Medium"  
}

#response_2 = patchRequests(update_product_garment_weight_url_1, update_product_garment_weight_data_set_2)
#print("TEST 2 - Update a Product Garment (Weight & Description) ", response_2.text)


####Update garment_weight_description while keeping garment_weight the same####
update_product_garment_weight_data_set_3 = {
    "product_id": "a6bb1d23bd28",
    "garment_weight_description": "Perfect!",
    "garment_weight": "Medium to Heavy"  
}

#response_3 = patchRequests(update_product_garment_weight_url_1, update_product_garment_weight_data_set_3)
#print("TEST 3 - Update a Product Garment (Weight) ", response_3.text)

####Update garment_weight while keeping garment_weight_description the same####
update_product_garment_weight_data_set_4 = {
    "product_id": "a6bb1d23bd28",
    "garment_weight_description": "Perfect!",
    "garment_weight": "Heavy"
}

#response_4 = patchRequests(update_product_garment_weight_url_1, update_product_garment_weight_data_set_4)
#print("TEST 4 - Update a Product Garment (Weight) ", response_4.text)

#/////////////Test 3: Update Any Field in a Product (updateProduct)/////////////#
####Update the product name keeping all other KV pairs unchanged####

#print("====updateProduct() TEST SUITE====")

update_product_url_1 = "http://localhost:3500/products/updateproduct"

update_product_data_set_1 = {
    "product_id": "a6bb1d23bd28",
    "product_color": "Bark Plaid Linen"    
}

#response_1 = patchRequests(update_product_url_1, update_product_data_set_1)
#print("TEST 1 - Update a Product (Color) ", response_1.text)

update_product_data_set_2 = {
  "product_id": "a6bb1d23bd28",
  "product_description": "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to COME."
}

#response_2 = patchRequests(update_product_url_1, update_product_data_set_2)
#print("TEST 2 - Update a Product (Description) ", response_2.text)

update_product_data_set_3 = {
  "product_id": "a6bb1d23bd28",
  "product_category": "Upper Garment"
}

#response_3 = patchRequests(update_product_url_1, update_product_data_set_3)
#print("TEST 3 - Update a Product (Category) ", response_3.text)

update_product_data_set_4 = {
  "product_id": "a6bb1d23bd28",
  "product_subcategory": "Shirt"
}

#response_4 = patchRequests(update_product_url_1, update_product_data_set_4)
#print("TEST 4 - Update a Product (Subcategory) ", response_4.text)

update_product_data_set_5 = {
  "product_id": "a6bb1d23bd28",
  "product_subcategory_type": "Long-Sleeved Shirt"
}

#response_5 = patchRequests(update_product_url_1, update_product_data_set_5)
#print("TEST 5 - Update a Product (Subcategory Type) ", response_5.text)

update_product_data_set_6 = {
  "product_id": "a6bb1d23bd28",
  "product_fit": "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Light."
}

#response_6 = patchRequests(update_product_url_1, update_product_data_set_6)
#print("TEST 6 - Update a Product (Fit) ", response_6.text)

update_product_data_set_7 = {
  "product_id": "a6bb1d23bd28",
  "product_specifications": "7-OZ. 55% linen, 45% organic cotton canvas. Washed for a soft, lived-in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China."
}

#response_7 = patchRequests(update_product_url_1, update_product_data_set_7)
#print("TEST 7 - Update a Product (Specifications) ", response_7.text)

update_product_data_set_8 = {
  "product_id": "a6bb1d23bd28",
  "product_material": "CRAFTED from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability."
}

#response_8 = patchRequests(update_product_url_1, update_product_data_set_8)
#print("TEST 8 - Update a Product (Material) ", response_8.text)

#/////////////Test 4: Update product supply type in a Product (updateProductSupplyType)/////////////#
####Update the supply_type_description only keeping supply_type the same####

update_product_supply_type_url_1 = "http://localhost:3500/products/updateproductsupplytype"

#print("====updateProductSupplyType() TEST SUITE====")

update_product_supply_type_data_set_1 = {
  "product_id": "a6bb1d23bd28",
  "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
  "supply_type": "Limited"
}

#response_1 = patchRequests(update_product_supply_type_url_1, update_product_supply_type_data_set_1)
#print("TEST 1 - Update a Product Supply (Type) ", response_1.text)

####Update the supply_type only keeping supply_type_description the same####
update_product_supply_type_data_set_2 = {
  "product_id": "a6bb1d23bd28",
  "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
  "supply_type": "Essential"
}

#response_2 = patchRequests(update_product_supply_type_url_1, update_product_supply_type_data_set_2)
#print("TEST 2 - Update a Product Supply (Type) ", response_2.text)

####Update the supply_type_description and supply_type####
update_product_supply_type_data_set_3 = {
  "product_id": "a6bb1d23bd28",
  "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
  "supply_type": "Limited"  
}

#response_3 = patchRequests(update_product_supply_type_url_1, update_product_supply_type_data_set_3)
#print("TEST 3 - Update a Product Supply (Description & Type) ", response_3.text)

#/////////////Test 5: Search for a product (searchProducts)/////////////#
####Search for a product by product name####

search_products_url_1 = "http://localhost:3500/products/searchproducts"

#print("====searchProducts() TEST SUITE====")

search_products_data_set_1 = {
  "product_name": "The Craftsman Shirt in Bark Plaid A"
}

#response_1 = getRequests(search_products_url_1, search_products_data_set_1)
#print("TEST 1 - Search for a Product by Name ", response_1.text)

search_products_data_set_2 = {
  "product_color": "Bark Plaid Linen"
}

#response_2 = getRequests(search_products_url_1, search_products_data_set_2)
#print("TEST 2 - Search for a Product by Color ", response_2.text)

search_products_data_set_3 = {
  "product_subcategory": "Shirt"
}

#response_3 = getRequests(search_products_url_1, search_products_data_set_3)
#print("TEST 3 - Search for a Product by Subcategory ", response_3.text)

#/////////////Test 6: Update a Product price (updateProductPrice)/////////////#

update_product_price_url_1 = "http://localhost:3500/products/updateproductprice/d2a986a0cab3"

#print("====updateProductPrice() TEST SUITE====")

update_product_price_data_set_1 = {
  "product_id": "a6bb1d23bd28",
  "product_price": 115
}

#response_1 = patchRequests(update_product_price_url_1, update_product_price_data_set_1)
#print("TEST 1 - Update a Product Price ", response_1.text)

#/////////////Test 7: Update a Product name (updateProductName)/////////////#

update_product_name_url_1 = "http://localhost:3500/products/updateproductname/d2a986a0cab3"

#print("====updateProductName() TEST SUITE====")

update_product_name_data_set_1 = {
  "product_id": "a6bb1d23bd28",
  "product_name": "The Craftsman Shirt in Bark Plaid Cotton"
}

#response_1 = patchRequests(update_product_name_url_1, update_product_name_data_set_1)
#print("TEST 1 - Update a Product Name ", response_1.text)