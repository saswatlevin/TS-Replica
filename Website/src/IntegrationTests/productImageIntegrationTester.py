from requestFunctions import *

#print("===createProductImage() TEST SUITE===")
#create_product_image_url_1 = "http://localhost:3500/productimages/createproductimage"

create_product_image_data_1 = {
    "product_id": "a6bb1d23bd28",

    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_002.jpg"
}

#response_1 = postRequests(create_product_image_url_1, create_product_image_data_1)
#print("TEST 1 - Create a Product Image ", response_1.text)

create_product_image_data_2 = {
    "product_id": "a6bb1d23bd28",

    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_003.jpg"
}

#response_2 = postRequests(create_product_image_url_1, create_product_image_data_2)
#print("TEST 2 - Create a Product Image ", response_2.text)

create_product_image_data_3 = {
    "product_id": "a6bb1d23bd28",

    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
}

#response_3 = postRequests(create_product_image_url_1, create_product_image_data_3)
#print("TEST 3 - Create a Product Image ", response_3.text)

#print("===updateProductImageURI TEST SUITE===")
#update_product_image_uri_url = "http://localhost:3500/productimages/updateproductimageuri/d2a986a0cab3"

update_product_image_uri_data_1 = {
    "product_id": "a6bb1d23bd28",

    "image_id": "c5a0d89a4089",

    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_004.jpg",

    "main_image": True
} 

#response_1 = patchRequests(update_product_image_uri_url, update_product_image_uri_data_1)
#print("TEST 1 - Update a Product Image URI ", response_1.text)

#print("===searchProductImage TEST SUITE===")
#search_product_image_url = "http://localhost:3500/productimages/searchproductimagebyid"

search_product_image_data_1 = {
    "product_id": "a6bb1d23bd28",

    "image_id": "6a422a267f00"
} 

#response_1 = getRequests(search_product_image_url, search_product_image_data_1)
#print("TEST 1 - Search a Product Image ", response_1.text)

#print("===deleteProductImage TEST SUITE===")
#delete_product_image_url = "http://localhost:3500/productimages/deleteproductimage"

# Trying to delete the main image
delete_product_image_data_1 = {
    "product_id": "a6bb1d23bd28",

    "image_id": "aa0adb66d338",

    "main_image": True
} 

#response_1 = deleteRequests(delete_product_image_url, delete_product_image_data_1)
#print("TEST 1 - Delete a Product Image ", response_1.text)

delete_product_image_data_2 = {
    "product_id": "a6bb1d23bd28",

    "image_id": "6a422a267f00",

    "main_image": False
} 

#response_2 = deleteRequests(delete_product_image_url, delete_product_image_data_2)
#print("TEST 2 - Delete a Product Image ", response_2.text)

delete_product_image_data_3 = {
    "product_id": "a6bb1d23bd28",

    "image_id": "0b17294dfb71",

    "main_image": False
} 

#response_3 = deleteRequests(delete_product_image_url, delete_product_image_data_3)
#print("TEST 3 - Delete a Product Image ", response_3.text)