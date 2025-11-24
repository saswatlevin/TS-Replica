from requestFunctions import *

##====CART ITEM API INTEGRATION TESTING====##
#////////////////TEST 1 Create a Cart Item////////////////#
create_cart_item_url = "http://localhost:3500/cartitems/createcartitem/c48db791e150"

create_cart_item_set_1 = {
    "product_id": "ed0234cc8bbc",
    "sku": "60dac512b5",
    "cart_item_name": "The Craftsman Shirt in Bark Plaid Linen",
    "cart_item_price": 128,
    "cart_item_image_uri":"C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-SleevedShirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
    "cart_item_quantity": 1
}

#create_cart_item_response_1 = postRequests(create_cart_item_url, create_cart_item_set_1)
#print("TEST 1 - Create a Cart Item ", create_cart_item_response_1.text)

create_cart_item_set_2 = {
    "product_id": "prl5dyv7n0bx",
    "sku": "mqusuae9r0",
    "cart_item_name": "The Short Sleeve Jack in Deep Sea Seersucker",
    "cart_item_price": 108,
    "cart_item_image_uri":"C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Short-SleevedShirts\\The_Short_Sleeve_Jack\\The_Short_Sleeve_Jack_in_Deep_Sea_Seersucker\\instock_m_q225_The_Short_Sleeve_Jack-DeepSeaSeersucker_portrait_001.jpg",
    "cart_item_quantity": 1
}

create_cart_item_response_2 = postRequests(create_cart_item_url, create_cart_item_set_2)
print("TEST 2 - Create a Cart Item ", create_cart_item_response_2.text)