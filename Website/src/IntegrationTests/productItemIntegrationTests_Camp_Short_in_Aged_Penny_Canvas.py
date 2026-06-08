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
            "product_id": "il19g7cce84m"
        },
        "serial": 1
    },
    {
        "url": "http://localhost:3500/productitems/searchproductitem",
        "test_name": "Test to search for a Product Item in SEARCHPRODUCTITEM",
        "test_data": {
            "product_id": "il19g7cce84l"
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
            "sku": "x6mgf6qdam"
        },
        "serial": 4
    },
    {
        "url": "http://localhost:3500/productitems/getproductitem",
        "test_name": "Test to search for a Product in GETPRODUCTITEM",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "x6mgf6qdam"
        },
        "serial": 5
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to an empty request body in DELETEPRODUCTITEMS",
        "test_data": {},
        "serial": 6
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to a Product that does not exist in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84m",
            "sku": "x6mgf6qdam"
        },
        "serial": 7
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to a Product Item that does not exist in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "x6mgf6qdan"
        },
        "serial": 8
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 945r5ung5p in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "945r5ung5p"
        },
        "serial": 9
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku x6mgf6qdam in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "x6mgf6qdam"
        },
        "serial": 10
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 73kfxcbs8n in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "73kfxcbs8n"
        },
        "serial": 11
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku pmdziqta5a in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "pmdziqta5a"
        },
        "serial": 12
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 16iah3lpwd in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "16iah3lpwd"
        },
        "serial": 13
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku w9q3l2zexb in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "w9q3l2zexb"
        },
        "serial": 14
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku iwgqx4evt6 in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "iwgqx4evt6"
        },
        "serial": 15
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku xz4hb41d8o in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "xz4hb41d8o"
        },
        "serial": 16
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 44bsx8c33k in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "44bsx8c33k"
        },
        "serial": 17
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check whether the minimum limit of 1 Product Item per Product is obeyed in DELETEPRODUCTITEMS",
        "test_data": {
            "product_id": "il19g7cce84l",
            "sku": "uq45weaa3t"
        },
        "serial": 18
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to an empty object in UPDATEPRODUCTITEM",
        "test_data": {},
        "serial": 19
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a product that doesn't exist in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "product_id": "il19g7cce84m",
            "sku": "uq45weaa3t",
            "lower_size_number": 28
        },
        "serial": 20
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a Product Item that doesn't exist in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "product_id": "il19g7cce84l",
            "sku": "uq45weaa3u",
            "lower_size_number": 28
        },
        "serial": 21
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to an update that will result in a duplicate Product Item in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "product_id": "il19g7cce84l",
            "sku": "uq45weaa3t",
            "lower_size_number": 28
        },
        "serial": 22
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a missing product_id value in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "sku": "uq45weaa3t",
            "lower_size_number": 28
        },
        "serial": 23
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to update lower_size_number in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "product_id": "il19g7cce84l",
            "sku": "uq45weaa3t",
            "lower_size_number": 29
        },
        "serial": 24
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to an empty Request Body in CREATEPRODUCTITEM",
        "test_data": {},
        "serial": 25
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a product that does not exist in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "product_id": "il19g7cce84m",
            "lower_size_number": 38,
            "total_stock": 180,
            "quantity_sold": 32,
            "quantity_returned": 0,
            "current_stock": 148
        },
        "serial": 26
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a duplicate Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "product_id": "il19g7cce84l",
            "lower_size_number": 29,
            "total_stock": 180,
            "quantity_sold": 32,
            "quantity_returned": 0,
            "current_stock": 148
        },
        "serial": 27
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a missing total_stock field in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "product_id": "il19g7cce84l",
            "lower_size_number": 29,
            "quantity_sold": 32,
            "current_stock": 148
        },
        "serial": 28
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to create a Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Short with Only Lower Size Number",
            "product_id": "il19g7cce84l",
            "lower_size_number": 30,
            "total_stock": 200,
            "quantity_sold": 32,
            "quantity_returned": 0,
            "current_stock": 168
        },
        "serial": 29
    }
]

# SearchProductItem 0 - 2
# GetProductItem  3 - 5
# DeleteProductItems 6 - 18
# UpdateProductItems 19 - 24
# CreateProductItems 25 - 29

list_length = len(product_item_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======CAMP SHORT PRODUCT ITEM TEST MENU======")
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

    elif user_choice >= 7 and user_choice <= 19:
        print("======DeleteProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = deleteRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 20 and user_choice <= 25:
        print("======UpdateProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 26 and user_choice <= 30:
        print("======CreateProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    else:
        if user_choice != 0:
            print("User choice out of range.")
            continue
        else:
            print("Exiting...")
            break