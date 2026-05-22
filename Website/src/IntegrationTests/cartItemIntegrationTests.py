from requestFunctions import *

cart_item_test_data_list = [

    {
        "url": "http://localhost:3500/cartitems/createcartitem/d2a986a0cab3",

        "test_name": "Test to check response to empty object in CREATECARTITEM",

        "test_data": {},

        "serial": 0
    },

    {
        "url": "http://localhost:3500/cartitems/createcartitem/d2a986a0cab4",

        "test_name": "Test to check response to a user that does not exist in CREATECARTITEM",

        "test_data": {
            "product_id": "a6bb1d23bd28",
            "sku": "4565314a71",
            "cart_item_name": "The Craftsman Shirt in Bark Plaid Cotton",
            "cart_item_image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_004.jpg",
            "cart_item_quantity": 1,
            "item_total": 300,
            "discount_code": "15PERCENT",
            "discount_percentage": 15
        },

        "serial": 1
    },

    {
        "url": "http://localhost:3500/cartitems/createcartitem/d2a986a0cab3",

        "test_name": "Test to check response to a Product that does not exist in CREATECARTITEM",

        "test_data": {
            "product_id": "a6bb1d23bd29",
            "sku": "4565314a71",
            "cart_item_name": "Non Existing Product",
            "cart_item_image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_004.jpg",
            "cart_item_quantity": 1,
            "item_total": 100,
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },

        "serial": 2
    },

    {
        "url": "http://localhost:3500/cartitems/createcartitem/d2a986a0cab3",

        "test_name": "Test to check response to a product_item that has 0 current_stock in CREATECARTITEM",

        "test_data": {
            "product_id": "gpnfrb48zcyo",
            "sku": "ctf33g20do",
            "cart_item_name": "The Slim Foundation Pant in Organic Khaki",
            "cart_item_image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Products\\Chinos\\The_Slim_Foundation_Pant_in_Organic_Khaki\6990307950669_slim-foundation-pant-in-organic-khaki-2407_01_tsio.jpg",
            "cart_item_quantity": 1,
            "item_total": 125,
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },

        "serial": 3
    },

    {
        "url": "http://localhost:3500/cartitems/createcartitem/d2a986a0cab3",

        "test_name": "Test to check response to a CartItem that already exists in CREATECARTITEM",

        "test_data": {
            "product_id": "a6bb1d23bd28",
            "sku": "4565314a71",
            "cart_item_name": "The Craftsman Shirt in Bark Plaid Cotton",
            "cart_item_image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_004.jpg",
            "cart_item_quantity": 1,
            "item_total": 300,
            "discount_code": "15PERCENT",
            "discount_percentage": 15
        },

        "serial": 4
    },

    {
        "url": "http://localhost:3500/cartitems/createcartitem/d2a986a0cab3",

        "test_name": "Test to create a CartItem in CREATECARTITEM",

        "test_data": {
            "product_id": "b0e6v4zl9aih",
            "sku": "fmrok30o34",
            "cart_item_name": "The Democratic Foundation Pant in Organic Navy",
            "cart_item_image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Chinos\\The_Democratic_Foundation_Pant_in_Organic_Navy\\7310894563405_democratic-foundation-pant-in-organic-navy-twill-2501_01_tsio.jpg",
            "cart_item_quantity": 1,
            "item_total": 125,
            "discount_code": "None",
            "discount_percentage": 0
        },

        "serial": 5
    },

    {
        "url": "http://localhost:3500/cartitems/deletecartitem/d2a986a0cab3",

        "test_name": "Test to check the response to an empty request body in DELETECARTITEM",

        "test_data": {},

        "serial": 6
    },

    {
        "url": "http://localhost:3500/cartitems/deletecartitem/d2a986a0cab4",

        "test_name": "Test to check response to a User that does not exist in DELETECARTITEM",

        "test_data": {
            "cart_item_id": "377a0b56f1be",
            "product_id": "a6bb1d23bd28",
            "sku": "4565314a71"
        },

        "serial": 7
    },

    {
        "url": "http://localhost:3500/cartitems/deletecartitem/d2a986a0cab3",

        "test_name": "Test to check response to a CartItem that does not exist in DELETECARTITEM",

        "test_data": {
            "cart_item_id": "377a0b56f1bf",
            "product_id": "a6bb1d23bd29",
            "sku": "4565314a72"
        },

        "serial": 8
    },
    
    {
        "url": "http://localhost:3500/cartitems/deletecartitem/d2a986a0cab3",

        "test_name": "Test to check response to missing sku field in DELETECARTITEM",

        "test_data": {
            "cart_item_id": "377a0b56f1be",
            "product_id": "a6bb1d23bd28"
        },

        "serial": 9
    },

    {
        "url": "http://localhost:3500/cartitems/deletecartitem/d2a986a0cab3",

        "test_name": "Test to delete a CartItem in DELETECARTITEM",

        "test_data": {
            "cart_item_id": "377a0b56f1be",
            "product_id": "a6bb1d23bd28",
            "sku": "4565314a71"
        },

        "serial": 10
    },


    {
        "url": "http://localhost:3500/cartitems/updatecartitemquantity/d2a986a0cab3",

        "test_name": "Test to check the response to an empty request body in UPDATECARTITEMQUANTITY",

        "test_data": {},

        "serial": 11
    },

    {
        "url": "http://localhost:3500/cartitems/updatecartitemquantity/d2a986a0cab4",

        "test_name": "Test to check response to a User that does not exist in UPDATECARTITEMQUANTITY",

        "test_data": {
            "cart_item_id": "377a0b56f1be",
            "product_id": "a6bb1d23bd28",
            "sku": "4565314a71",
            "cart_item_quantity": 2
        },

        "serial": 12
    },

    {
        "url": "http://localhost:3500/cartitems/updatecartitemquantity/d2a986a0cab3",

        "test_name": "Test to check response to a CartItem that does not exist in UPDATECARTITEMQUANTITY",

        "test_data": {
            "cart_item_id": "377a0b56f1bf",
            "product_id": "a6bb1d23bd29",
            "sku": "4565314a72",
            "cart_item_quantity": 2
        },

        "serial": 13
    },

    {
        "url": "http://localhost:3500/cartitems/updatecartitemquantity/d2a986a0cab3",

        "test_name": "Test to check response to missing cart_item_quantity field in UPDATECARTITEMQUANTITY",

        "test_data": {
            "cart_item_id": "377a0b56f1be",
            "product_id": "a6bb1d23bd28",
            "sku": "4565314a71"
        },

        "serial": 14
    },

    {
        "url": "http://localhost:3500/cartitems/updatecartitemquantity/d2a986a0cab3",

        "test_name": "Test to update the quantity of a CartItem to 2 in UPDATECARTITEMQUANTITY",

        "test_data": {
            "cart_item_id": "15315b1a2056",
            "product_id": "a6bb1d23bd28",
            "sku": "12dcc9cd7b",
            "cart_item_quantity": 2
        },

        "serial": 15
    }

]

# 0 - 5 createCartItem
# 6 - 10 deleteCartItem
# 11 - 15 updateCartItemQuantity

list_length = len(cart_item_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======CARTITEM TEST MENU======")
    for index in range (0, list_length):
        print(str(index + 1) + ". " + cart_item_test_data_list[index]['test_name'])

    user_choice = int(input('\nChoose a test to run or press 0 to exit '))

    url = cart_item_test_data_list[user_choice - 1]['url']
    test_name = cart_item_test_data_list[user_choice - 1]['test_name']
    test_data = cart_item_test_data_list[user_choice - 1]['test_data']
    serial = cart_item_test_data_list[user_choice - 1]['serial']

    if user_choice >= 1 and user_choice <= 6:
        print("======CreateCartItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))
        
        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 7 and user_choice <= 11:
        print("======DeleteCartItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))
        
        response = deleteRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 12 and user_choice <= 16:
        print("======UpdateCartItemQuantity TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))
        
        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    else:
        if user_choice != 0:
            print("User choice out of range.")
            continue
        else:
            print("Exiting...")
            break