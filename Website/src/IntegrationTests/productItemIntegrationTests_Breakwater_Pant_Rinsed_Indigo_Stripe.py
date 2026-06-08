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
            "product_id": "dzh5txxega4c"
        },
        "serial": 1
    },
    {
        "url": "http://localhost:3500/productitems/searchproductitem",
        "test_name": "Test to search for a Product in SEARCHPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b"
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
            "sku": "9bkgezadt6"
        },
        "serial": 4
    },
    {
        "url": "http://localhost:3500/productitems/getproductitem",
        "test_name": "Test to search for a Product in GETPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b",
            "sku": "9bkgezadt6"
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
            "product_id": "dzh5txxega4c",
            "sku": "9bkgezadt6"
        },
        "serial": 7
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to a Product Item that does not exist in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b",
            "sku": "9bkgezadt7"
        },
        "serial": 8
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 9bkgezadt6 in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b",
            "sku": "9bkgezadt6"
        },
        "serial": 9
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku zcltof12fl in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b",
            "sku": "zcltof12fl"
        },
        "serial": 10
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku sj3u9sd5ti in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b",
            "sku": "sj3u9sd5ti"
        },
        "serial": 11
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku aghgp5ty5h in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b",
            "sku": "aghgp5ty5h"
        },
        "serial": 12
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku rakcwtv4jo in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b",
            "sku": "rakcwtv4jo"
        },
        "serial": 13
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check whether the minimum limit of 1 Product Item per Product is obeyed in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "dzh5txxega4b",
            "sku": "zuu66dm7p5"
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
        "test_name": "Test to check the response to a product that doesn't exist in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4c",
            "sku": "zuu66dm7p6",
            "lower_size_letter": "S",
            "inseam_length": 34
        },
        "serial": 16
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a Product Item that doesn't exist in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4b",
            "sku": "zuu66dm7p6",
            "lower_size_letter": "S",
            "inseam_length": 34
        },
        "serial": 17
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to an update that will result in a duplicate Product Item in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4b",
            "sku": "zuu66dm7p5",
            "lower_size_letter": "XS",
            "inseam_length": 34
        },
        "serial": 18
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a missing product_id value in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "sku": "zuu66dm7p5",
            "lower_size_letter": "S",
            "inseam_length": 34
        },
        "serial": 19
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to update lower_size_letter in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4b",
            "sku": "zuu66dm7p5",
            "lower_size_letter": "S"
        },
        "serial": 20
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to update inseam_length in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4b",
            "sku": "zuu66dm7p5",
            "lower_size_letter": "S",
            "inseam_length": 32
        },
        "serial": 21
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to an empty Request Body in CREATEPRODUCTITEM",
        "test_data": {},
        "serial": 22
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a product that does not exist in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4c",
            "lower_size_letter": "M",
            "inseam_length": 32,
            "total_stock": 100,
            "quantity_sold": 50,
            "quantity_returned": 0,
            "current_stock": 50
        },
        "serial": 23
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a duplicate Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4b",
            "lower_size_letter": "S",
            "inseam_length": 34,
            "total_stock": 251,
            "quantity_sold": 160,
            "quantity_returned": 0,
            "current_stock": 91
        },
        "serial": 24
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a missing total_stock field in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4c",
            "lower_size_letter": "M",
            "inseam_length": 32,
            "quantity_sold": 160,
            "quantity_returned": 0,
            "current_stock": 91
        },
        "serial": 25
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to create a Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Letter and Inseam Length",
            "product_id": "dzh5txxega4b",
            "lower_size_letter": "M",
            "inseam_length": 32,
            "total_stock": 110,
            "quantity_sold": 50,
            "quantity_returned": 0,
            "current_stock": 60
        },
        "serial": 26
    }
]

# SearchProductItem 0 - 2
# GetProductItem    3 - 5
# DeleteProductItem 6 - 14
# UpdateProductItem 15 - 21
# CreateProductItem 22 - 26

list_length = len(product_item_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======BREAKWATER PANT STRIPE PRODUCT ITEM TEST MENU======")
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

    elif user_choice >= 16 and user_choice <= 22:
        print("======UpdateProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 23 and user_choice <= 27:
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