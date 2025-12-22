from requestFunctions import *

##====CART ITEM API INTEGRATION TESTING====##
#////////////////Create a Cart Item////////////////#
#print("====createCartItem() TEST SUITE====")
#create_cart_item_url = "http://localhost:3500/cartitems/createcartitem/d2a986a0cab3
create_cart_item_set_1 = {
    "product_id": "a6bb1d23bd28",
    "sku": "4565314a71",
    "cart_item_name": "The Craftsman Shirt in Bark Plaid COTTON",
    "cart_item_price": 128,
    "cart_item_image_uri":"C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-SleevedShirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
    "cart_item_quantity": 1
}

#create_cart_item_response_1 = postRequests(create_cart_item_url, create_cart_item_set_1)
#print("TEST 1 - Create a Cart Item ", create_cart_item_response_1.text)

#create_cart_item_url_2 = "http://localhost:3500/cartitems/createcartitem/f6c13bd3c15c"
create_cart_item_set_2 = {
    "product_id": "prl5dyv7n0bx",
    "sku": "mqusuae9r0",
    "cart_item_name": "The Short Sleeve Jack in Deep Sea Seersucker",
    "cart_item_price": 108,
    "cart_item_image_uri":"C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Short-SleevedShirts\\The_Short_Sleeve_Jack\\The_Short_Sleeve_Jack_in_Deep_Sea_Seersucker\\instock_m_q225_The_Short_Sleeve_Jack-DeepSeaSeersucker_portrait_001.jpg",
    "cart_item_quantity": 1
}

#create_cart_item_response_2 = postRequests(create_cart_item_url_2, create_cart_item_set_2)
#print("TEST 2 - Create a Cart Item ", create_cart_item_response_2.text)

#create_cart_item_url_3 = "http://localhost:3500/cartitems/createcartitem/f6c13bd3c15c"
create_cart_item_set_3 = {
    "product_id": "b0e6v4zl9aih",
    "sku": "vkr7eqvzsh",
    "cart_item_name": "The Democratic Foundation Pant in Organic Navy",
    "cart_item_price": 125,
    "cart_item_image_uri":"C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Chinos\\The_Democratic_Foundation_Pant_in_Organic_Navy\\7310894563405_democratic-foundation-pant-in-organic-navy-twill-2501_01_tsio.jpg",
    "cart_item_quantity": 1
}

#create_cart_item_response_3 = postRequests(create_cart_item_url_3, create_cart_item_set_3)
#print("TEST 3 - Create a Cart Item ", create_cart_item_response_3.text)

#print("====updateCartItemQuantity() TEST SUITE====")
#update_cart_item_quantity_url_1 = "http://localhost:3500/cartitems/updatecartitemquantity/d2a986a0cab3"
update_cart_item_quantity_set_1 = {
    "product_id": "a6bb1d23bd28",
    "cart_item_quantity": 3
}

#update_cart_item_quantity_response_1 = patchRequests(update_cart_item_quantity_url_1, update_cart_item_quantity_set_1)
#print("TEST 3a - Update the cart item quantity ", update_cart_item_quantity_response_1.text)

#update_cart_item_quantity_url_2 = "http://localhost:3500/cartitems/updatecartitemquantity/f6c13bd3c15c"
update_cart_item_quantity_set_2 = {
    "product_id": "b0e6v4zl9aih",
    "cart_item_quantity": 3
}

#update_cart_item_quantity_response_2 = patchRequests(update_cart_item_quantity_url_2, update_cart_item_quantity_set_2)
#print("TEST 3b - Update the cart item quantity ", update_cart_item_quantity_response_2.text)