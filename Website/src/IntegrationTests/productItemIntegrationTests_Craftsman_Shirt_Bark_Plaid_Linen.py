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
            "product_id": "a6bb1d23bd29"
        },
        "serial": 1
    },
    {
        "url": "http://localhost:3500/productitems/searchproductitem",
        "test_name": "Test to search for a Product in SEARCHPRODUCTITEM",
        "test_data": {
            "product_id": "a6bb1d23bd28"
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
            "product_id": "a6bb1d23bd28"
        },
        "serial": 4
    },
    {
        "url": "http://localhost:3500/productitems/getproductitem",
        "test_name": "Test to search for a Product in GETPRODUCTITEM",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "sku": "12dcc9cd7b"
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
        "test_name": "Test to check the response to a product that does not exist in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "a6bb1d23bd29",
            "sku": "12dcc9cd7b"
        },
        "serial": 7
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to a Product Item that does not exist in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "sku": "12dcc9cd7c"
        },
        "serial": 8
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with 4565314a71 in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "sku": "4565314a71"
        },
        "serial": 9
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check whether the minimum limit of 1 Product Item per Product is obeyed in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "sku": "12dcc9cd7b"
        },
        "serial": 10
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to an empty object in UPDATEPRODUCTITEM",
        "test_data": {},
        "serial": 11
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a missing product in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "product_id": "a6bb1d23bd29",
            "sku": "12dcc9cd7b",
            "upper_size_letter": "XXL"
        },
        "serial": 12
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a missing Product Item in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "product_id": "a6bb1d23bd28",
            "sku": "12dcc9cd7c",
            "upper_size_letter": "XXL"
        },
        "serial": 13
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to an update that will result in a duplicate Product Item in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "product_id": "a6bb1d23bd28",
            "sku": "12dcc9cd7b",
            "upper_size_letter": "XL"
        },
        "serial": 14
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a missing product_id value in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "sku": "12dcc9cd7b",
            "upper_size_letter": "XL"
        },
        "serial": 15
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to update upper_size_letter and upper_size_number in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "product_id": "a6bb1d23bd28",
            "sku": "12dcc9cd7b",
            "upper_size_letter": "XXL",
            "upper_size_number": 46
        },
        "serial": 16
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to update upper_size_number in UPDATEPRODUCTITEM",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "sku": "12dcc9cd7b",
            "upper_size_number": 46
        },
        "serial": 17
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to an empty Request Body in CREATEPRODUCTITEM",
        "test_data": {},
        "serial": 18
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a product that does not exist in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "product_id": "a6bb1d23bd29",
            "upper_size_letter": "L",
            "upper_size_number": 40,
            "total_stock": 100,
            "quantity_sold": 70,
            "quantity_returned": 0,
            "current_stock": 30
        },
        "serial": 19
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a duplicate Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "product_id": "a6bb1d23bd28",
            "upper_size_letter": "XXL",
            "upper_size_number": 46,
            "total_stock": 100,
            "quantity_sold": 80,
            "quantity_returned": 0,
            "current_stock": 20
        },
        "serial": 20
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a missing total_stock field in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "product_id": "a6bb1d23bd28",
            "upper_size_letter": "L",
            "upper_size_number": 40,
            "quantity_sold": 70,
            "quantity_returned": 0,
            "current_stock": 30
        },
        "serial": 21
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to create a Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Shirt",
            "product_id": "a6bb1d23bd28",
            "upper_size_letter": "L",
            "upper_size_number": 40,
            "total_stock": 100,
            "quantity_sold": 70,
            "quantity_returned": 0,
            "current_stock": 30
        },
        "serial": 22
    }
]

# SearchProductItem 0 - 2
# GetProductItem 3 - 5
# DeleteProductItem 6 - 10
# UpdateProductItem 11 - 17
# CreateProductItem 18 - 22
# DeleteProductItem 23 - 26

list_length = len(product_item_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======CRAFTSMAN SHIRT PRODUCT ITEM TEST MENU======")
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

    elif user_choice >= 7 and user_choice <= 11:
        print("======DeleteProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = deleteRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 12 and user_choice <= 18:
        print("======UpdateProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 19 and user_choice <= 23:
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