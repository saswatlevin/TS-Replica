import requests
import json

def getRequests(url, data):
    response = requests.get(url, json=data)
    return response

def postRequests(url, data):
    response = requests.post(url, json=data)
    return response

def putRequests(url, data):
    response = requests.put(url, json=data)
    return response

def patchRequests(url, data):
    response = requests.patch(url, json=data)
    return response

def deleteRequests(url, data):
    response = requests.delete(url, json=data)
    return response

##=====PRODUCT API INTEGRATION TESTING=====##
#/////////////Test 1: Create a product (createProduct)/////////////#
print("TEST 1 - Create a product (createProduct)")
create_product_url = "http://localhost:3500/products/createproduct"
create_product_data = {
   
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

#response = postRequests(create_product_url, create_product_data)
#print("create_product_data response ", response.text)

#/////////////Test 2: Update a product garment weight (updateProductGarmentWeight)/////////////#
print("TEST 2 - Update a product garment weight (updateProductGarmentWeight)")

update_product_garment_weight_url = "http://localhost:3500/products/updateproductgarmentweight/1400bfd3abc6"

####Update garment_weight_description and garment_weight - 1#### 
update_product_garment_weight_data_set_1 = {
    "garment_weight_description": "Perfect for all seasonsss",
    "garment_weight": "Medium"
}

response = patchRequests(update_product_garment_weight_url, update_product_garment_weight_data_set_1)
print("update_product_garment_weight_data_set_1 response ", response.text)



####Update garment_weight_description and garment_weight - 2####
update_product_garment_weight_data_set_2 = {
    "garment_weight_description": "Perfect for every season, always!",
    "garment_weight": "Medium to Heavy"  
}

#response = patchRequests(update_product_garment_weight_url, update_product_garment_weight_data_set_2)
#print("update_product_garment_weight_data_set_2 ", response)


####Update garment_weight_description while keeping garment_weight the same####
update_product_garment_weight_data_set_3 = {
    "garment_weight_description": "Perfect!",
    "garment_weight": "Medium to Heavy"  
}

#response = patchRequests(update_product_garment_weight_url, update_product_garment_weight_data_set_3)
#print("update_product_garment_weight_data_set_3 ", response)

####Update garment_weight while keeping garment_weight_description the same####
update_product_garment_weight_data_set_4 = {
    "garment_weight_description": "Perfect!",
    "garment_weight": "Heavy"
}

#response = patchRequests(update_product_garment_weight_url, update_product_garment_weight_data_set_4)
#print("update_product_garment_weight_data_set_4 ", response)

#/////////////Test 3: Update Any Field in a Product (updateProduct)/////////////#

####Update the product name keeping all other KV pairs unchanged####
#update_product_url = "http://localhost:3500/products/updateproduct/hya3y1kdhv4p"
#print("TEST 3 (updateProduct) - Update the product name keeping all other KV pairs unchanged")

update_product_data_set_1 = {
    "product_name": "The Craftsman Shirt in Bark Plaid C"    
}

#update_product_name_response = patchRequests(update_product_url, update_product_data_set_1)
#print("TEST 3 (updateProduct) - Update product name response ", update_product_name_response)