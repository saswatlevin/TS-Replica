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
            "product_id": "ojvs7hjfihgd"
        },
        "serial": 1
    },
    {
        "url": "http://localhost:3500/productitems/searchproductitem",
        "test_name": "Test to search for a Product in SEARCHPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc"
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
            "product_id": "ojvs7hjfihgc"
        },
        "serial": 4
    },
    {
        "url": "http://localhost:3500/productitems/getproductitem",
        "test_name": "Test to search for a Product in GETPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "cdwrbvcp2r"
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
            "product_id": "ojvs7hjfihgd",
            "sku": "cdwrbvcp2r"
        },
        "serial": 7
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check the response to a Product Item that does not exist in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "cdwrbvcp2s"
        },
        "serial": 8
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku cdwrbvcp2r in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "cdwrbvcp2r"
        },
        "serial": 9
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku bzpr1txn5j in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "bzpr1txn5j"
        },
        "serial": 10
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku jel0mvuh2n in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "jel0mvuh2n"
        },
        "serial": 11
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 352z5lztub in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "352z5lztub"
        },
        "serial": 12
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 2v5ecttxdx in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "2v5ecttxdx"
        },
        "serial": 13
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku 3yfyx9od4q in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "3yfyx9od4q"
        },
        "serial": 14
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku gobzyrykhp in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "gobzyrykhp"
        },
        "serial": 15
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku j7jo34y3ie in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "j7jo34y3ie"
        },
        "serial": 16
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to delete a Product Item with sku j7jo34y3ie in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "j7jo34y3ie"
        },
        "serial": 17
    },
    {
        "url": "http://localhost:3500/productitems/deleteproductitem",
        "test_name": "Test to check whether the minimum limit of 1 Product Item per Product is obeyed in DELETEPRODUCTITEM",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "sku": "ohgqsdan8j"
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
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgd",
            "sku": "cdwrbvcp2r",
            "lower_size_number": 38
        },
        "serial": 20
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a Product Item that doesn't exist in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgc",
            "sku": "cdwrbvcp2s",
            "lower_size_number": 38
        },
        "serial": 21
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to an update that will result in a duplicate Product Item in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgc",
            "sku": "ohgqsdan8j",
            "lower_size_number": 28,
            "inseam_length": 34
        },
        "serial": 22
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to check the response to a missing product_id value in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "sku": "ohgqsdan8j",
            "lower_size_number": 38
        },
        "serial": 23
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to update lower_size_number and inseam_length in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgc",
            "sku": "ohgqsdan8j",
            "lower_size_number": 29,
            "inseam_length": 32
        },
        "serial": 24
    },
    {
        "url": "http://localhost:3500/productitems/updateproductitem",
        "test_name": "Test to update inseam_length in UPDATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgc",
            "sku": "ohgqsdan8j",
            "inseam_length": 32
        },
        "serial": 25
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to an empty Request Body in CREATEPRODUCTITEM",
        "test_data": {},
        "serial": 26
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a product that does not exist in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgd",
            "lower_size_number": 30,
            "inseam_length": 32,
            "total_stock": 320,
            "quantity_sold": 60,
            "quantity_returned": 0,
            "current_stock": 260
        },
        "serial": 27
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a duplicate Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgc",
            "lower_size_number": 29,
            "inseam_length": 32,
            "total_stock": 156,
            "quantity_sold": 60,
            "quantity_returned": 0,
            "current_stock": 96
        },
        "serial": 28
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to check the response to a missing total_stock field in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgc",
            "lower_size_number": 30,
            "inseam_length": 34,
            "quantity_sold": 50,
            "quantity_returned": 0,
            "current_stock": 260
        },
        "serial": 29
    },
    {
        "url": "http://localhost:3500/productitems/createproductitem",
        "test_name": "Test to create a Product Item in CREATEPRODUCTITEM",
        "test_data": {
            "item_type": "Pant with Lower Size Number and Inseam Length",
            "product_id": "ojvs7hjfihgc",
            "lower_size_number": 30,
            "inseam_length": 34,
            "total_stock": 310,
            "quantity_sold": 50,
            "quantity_returned": 0,
            "current_stock": 260
        },
        "serial": 30
    }
]

# SearchProductItem 0 - 2
# GetProductItem    3 - 5
# DeleteProductItem 6 - 18
# UpdateProductItem 19 - 25
# CreateProductItem 26 - 30

list_length = len(product_item_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======PAINTER PANT PRODUCT ITEM TEST MENU======")
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

    elif user_choice >= 20 and user_choice <= 26:
        print("======UpdateProductItem TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 27 and user_choice <= 31:
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