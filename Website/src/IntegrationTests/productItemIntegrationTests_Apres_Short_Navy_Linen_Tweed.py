from requestFunctions import *

product_item_test_data_list = [
    {
        "url": "http://localhost:3500/productitems/searchproductitem",
        "test_name": "Test to check the response to an empty request body in SEARCHPRODUCTITEM",
        "test_data": {},
        "serial": 0
    },
    {
        "url": "http://localhost:3500/productitems/searchproductitem",
        "test_name": "Test to check the response to a Product that does not exist in SEARCHPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhigeu"
        },
        "serial": 1
    },
    {
        "url": "http://localhost:3500/productitems/searchproductitem",
        "test_name": "Test to search for a Product in SEARCHPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget"
        },
        "serial": 2
    },
    {
        "url": "http://localhost:3500/productitems/getproductitem",
        "test_name": "Test to check the response to an empty object in GETPRODUCTITEM",
        "test_data": {},
        "serial": 3
    },
    {
        "url": "http://localhost:3500/productitems/getproductitem",
        "test_name": "Test to check the response to a missing product_id in GETPRODUCTITEM",
        "test_data": {
            "sku": "ygiy8ngzbm"
        },
        "serial": 4
    },
    {
        "url": "http://localhost:3500/productitems/getproductitem",
        "test_name": "Test to search for a Product in GETPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "ygiy8ngzbm"
        },
        "serial": 5
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to an empty request body in DELETEPRODUCTITEM",
        "test_data": {},
        "serial": 6
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to a Product that does not exist in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhigeu",
            "sku": "ygiy8ngzbm"
        },
        "serial": 7
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to a Product Item that does not exist in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "ygiy8ngzbn"
        },
        "serial": 8
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 269ujn48i2 in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "269ujn48i2"
        },
        "serial": 9
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku ygiy8ngzbm in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "ygiy8ngzbm"
        },
        "serial": 10
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku lscpppzd0i in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "lscpppzd0i"
        },
        "serial": 11
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku dapw4niiqj in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "dapw4niiqj"
        },
        "serial": 12
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku y12d7ztnkl in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "y12d7ztnkl"
        },
        "serial": 13
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check whether the minimum limit of 1 Product Item per Product is obeyed in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "h77sjj22nv"
        },
        "serial": 14
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to an empty object in UPDATEPRODUCTITEM",
        "test_data": {},
        "serial": 15
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a Product that doesn't exist in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "product_id": "u9yl6odhigey",
            "sku": "h77sjj22nv",
            "lower_size_letter": "XXL"
        },
        "serial": 16
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a Product Item that doesn't exist in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "product_id": "u9yl6odhiget",
            "sku": "h77sjj22nw",
            "lower_size_letter": "XXL"
        },
        "serial": 17
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to an update that will result in a duplicate Product Item in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "product_id": "u9yl6odhiget",
            "sku": "h77sjj22nv",
            "lower_size_letter": "XXL"
        },
        "serial": 18
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a missing product_id value in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "sku": "h77sjj22nv",
            "lower_size_letter": "XXL"
        },
        "serial": 19
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to update lower_size_letter in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "product_id": "u9yl6odhiget",
            "sku": "h77sjj22nv",
            "lower_size_letter": "S"
        },
        "serial": 20
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to an empty Request Body in CREATEPRODUCTITEM",
        "test_data": {},
        "serial": 21
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a product that does not exist in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "product_id": "u9yl6odhigey",
            "lower_size_letter": "S",
            "total_stock": 250,
            "quantity_sold": 150,
            "quantity_returned": 0,
            "current_stock": 100
        },
        "serial": 22
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a duplicate Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "product_id": "u9yl6odhiget",
            "lower_size_letter": "XS",
            "total_stock": 200,
            "quantity_sold": 30,
            "quantity_returned": 0,
            "current_stock": 170
        },
        "serial": 23
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a missing total_stock field in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "product_id": "u9yl6odhiget",
            "lower_size_letter": "S",
            "quantity_sold": 150,
            "quantity_returned": 0,
            "current_stock": 100
        },
        "serial": 24
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to create a Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Letter",
            "product_id": "u9yl6odhiget",
            "lower_size_letter": "M",
            "total_stock": 200,
            "quantity_sold": 150,
            "quantity_returned": 0,
            "current_stock": 50
        },
        "serial": 25
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to an empty request in DELETEPRODUCTITEM",
        "test_data": {},
        "serial": 26
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check response to a Product that doesn't exist in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhigeu",
            "sku": "269ujn48i2"
        },
        "serial": 27
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check response to a Product Item that doesn't exist in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "269ujn48i3"
        },
        "serial": 28
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "u9yl6odhiget",
            "sku": "269ujn48i2"
        },
        "serial": 29
    }
]

# SearchProductItem 0 - 2
# GetProductItem 3 - 5
# DeleteProductItem 6 - 14
# UpdateProductItem 15 - 20
# CreateProductItem 21 - 25
# DeleteProductItem 26 - 29

list_length = len(product_item_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======APRES SHORT LINEN TWEED PRODUCT ITEM TEST MENU======")
    for index in range (0, list_length):
        print(str(index + 1) + ". " + product_item_test_data_list[index]['test_name'])

    user_choice = int(input('\nChoose a test to run or press 0 to exit '))

    url = product_item_test_data_list[user_choice - 1]['url']
    test_name = product_item_test_data_list[user_choice - 1]['test_name']
    test_data = product_item_test_data_list[user_choice - 1]['test_data']
    serial = product_item_test_data_list[user_choice - 1]['serial']


    if user_choice >= 1 and user_choice <= 3:
        print("======SearchProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = getRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 4 and user_choice <= 6:
        print("======GetProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = getRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 7 and user_choice <= 15:
        print("======DeleteProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = deleteRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 16 and user_choice <= 21:
        print("======UpdateProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 22 and user_choice <= 26:
        print("======CreateProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 27 and user_choice <= 30:
        print("======DeleteProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = deleteRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    else:
        if user_choice != 0:
            print("User choice out of range.")
            continue
        else:
            print("Exiting...")
            break