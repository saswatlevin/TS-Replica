from requestFunctions import *

##====CART ITEM API INTEGRATION TESTING##====##
#////////////////TEST 1 Create a Cart Item////////////////#
create_cart_item_url = "http://localhost:3500/cartitems/createcartitem/fda85da16dd5"

create_cart_item_set_1 = {
    "product_id": "e45ee8541e4d",
    "sku": "38b66ee38c",
    "cart_item_name": "The Craftsman Shirt in Bark Plaid Linen",
    "cart_item_price": 128,
    "cart_item_image_uri":"C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-SleevedShirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
    "cart_item_quantity": 1
}

create_cart_item_response_1 = postRequests(create_cart_item_url, create_cart_item_set_1)

print("TEST 1 - Create a Cart Item ", create_cart_item_response_1.text)
