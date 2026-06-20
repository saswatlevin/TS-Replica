from requestFunctions import *

product_test_data_list = [
    {
        "url": "http://localhost:3500/products/createproduct",
        "test_name": "Test to check for response to an empty request body in CREATEPRODUCT.",
        "test_data": {},
        "serial": 0
    },

    {
        "url": "http://localhost:3500/products/createproduct",
        "test_name": "Test to check the response to a duplicate product in CREATEPRODUCT.",
        "test_data": {
            "product_name": "The Craftsman Shirt in Bark Plaid Cotton",
            "product_color": "Bark Plaid Cotton",
            "product_description": "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come -.",
            "product_price": 300,
            "product_category": "Lower Garment",
            "product_subcategory": "Shirt",
            "product_subcategory_type": "Short-Sleeved Shirt",
            "product_fit": "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a light.",
            "product_garment_weight": {
                "garment_weight_description": "Perfect!",
                "garment_weight": "Heavy"
            },
            "product_material": "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
            "product_supply_type": {
                "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
                "supply_type": "Essential"
            },
            "product_specifications": "7-OZ. 55% linen, 45% organic cotton canvas. Washed for a soft, lived-in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. MADE IN CHINA.",
            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_004.jpg",
                    "main_image": True
                }
            ],
            "product_items": [
                {
                    "item_type": "Shirt",
                    "upper_size_letter": "XL",
                    "upper_size_number": 46,
                    "total_stock": 100,
                    "quantity_sold": 80,
                    "quantity_returned": 0,
                    "current_stock": 20
                }
            ],
            "discount_code": "15PERCENT",
            "discount_percentage": 15
        },
        "serial": 1
    },

    {
        "url": "http://localhost:3500/products/createproduct",
        "test_name": "Test to check the response to a missing product_price field in CREATEPRODUCT.",
        "test_data": {
            "product_name": "The Craftsman Shirt in Bark Plaid Cotton",
            "product_color": "Bark Plaid Cotton",
            "product_description": "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to COME.",
            "product_category": "Lower Garment",
            "product_subcategory": "Shirt",
            "product_subcategory_type": "Short-Sleeved Shirt",
            "product_fit": "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a light.",
            "product_garment_weight": {
                "garment_weight_description": "Perfect!",
                "garment_weight": "Heavy"
            },
            "product_material": "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
            "product_supply_type": {
                "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
                "supply_type": "Essential"
            },
            "product_specifications": "7-OZ. 55% linen, 45% organic cotton canvas. Washed for a soft, lived-in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. MADE IN CHINA.",
            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_004.jpg",
                    "main_image": True
                }
            ],
            "product_items": [
                {
                    "item_type": "Shirt",
                    "upper_size_letter": "XL",
                    "upper_size_number": 46,
                    "total_stock": 100,
                    "quantity_sold": 80,
                    "quantity_returned": 0,
                    "current_stock": 20
                }
            ],
            "discount_code": "15PERCENT",
            "discount_percentage": 15
        },
        "serial": 2
    },

    {
        "url": "http://localhost:3500/products/createproduct",
        "test_name": "Test to create a Product in CREATEPRODUCT.",
        "test_data": {
            "product_name": "The Craftsman Shirt in Bark Plaid COTTON TWO",
            "product_color": "Bark Plaid COTTON",
            "product_description": "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to COME -.",
            "product_price": 300,
            "product_category": "Lower Garment",
            "product_subcategory": "Shirt",
            "product_subcategory_type": "Short-Sleeved Shirt",
            "product_fit": "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a light.",
            "product_garment_weight": {
                "garment_weight_description": "Perfect!",
                "garment_weight": "Heavy"
            },
            "product_material": "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
            "product_supply_type": {
                "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
                "supply_type": "Essential"
            },
            "product_specifications": "7-OZ. 55% linen, 45% organic cotton canvas. Washed for a soft, lived-in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. MADE IN CHINA.",
            "product_images": [],
            "product_items": [
                {
                    "item_type": "Shirt",
                    "upper_size_letter": "XL",
                    "upper_size_number": 46,
                    "total_stock": 100,
                    "quantity_sold": 80,
                    "quantity_returned": 0,
                    "current_stock": 20
                }
            ],
            "discount_code": "15PERCENT",
            "discount_percentage": 15
        },
        "serial": 3
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCT.",
        "test_data": {},
        "serial": 4
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd29",
            "product_description": "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come."
        },
        "serial": 5
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to check the response to a value that already exists in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_category": "Lower Garment"
        },
        "serial": 6
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_color in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_color": "BARK PLAID LINEN"
        },
        "serial": 7
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_description in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_description": "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to COME."
        },
        "serial": 8
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_category in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_category": "Upper Garment"
        },
        "serial": 9
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_subcategory in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_subcategory": "Shirt"
        },
        "serial": 10
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_subcategory_type in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_subcategory_type": "Long-Sleeved Shirt"
        },
        "serial": 11
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_specifications in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_specifications": "7-OZ. 55% linen, 45% organic cotton canvas. Washed for a soft, lived-in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to DRY."
        },
        "serial": 12
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTDISCOUNT.",
        "test_data": {},
        "serial": 13
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to a Product that does not exist in UPDATEPRODUCTDISCOUNT.",
        "test_data": {
            "product_id": "a6bb1d23bd29",
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },
        "serial": 14
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to discount_code and discount_percentage values that already exist in UPDATEPRODUCTDISCOUNT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "discount_code": "None",
            "discount_percentage": 0
        },
        "serial": 15
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to a missing discount_code field in UPDATEPRODUCTDISCOUNT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "discount_percentage": 0
        },
        "serial": 16
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to update the discount_code and discount_percentage in UPDATEPRODUCTDISCOUNT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "discount_code": "20PERCENT",
            "discount_percentage": 20
        },
        "serial": 17
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to check the response to an empty object in UPDATEPRODUCTGARMENTWEIGHT.",
        "test_data": {},
        "serial": 18
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCTGARMENTWEIGHT.",
        "test_data": {
            "product_id": "a6bb1d23bd29",
            "garment_weight_description": "Perfect!",
            "garment_weight": "Medium"
        },
        "serial": 19
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to check the response to a product_garment_weight that already exists in UPDATEPRODUCTGARMENTWEIGHT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "garment_weight_description": "Perfect!",
            "garment_weight": "Heavy"
        },
        "serial": 20
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to update the garment_weight and garment_weight_description value in UPDATEPRODUCTGARMENTWEIGHT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "garment_weight_description": "Good",
            "garment_weight": "Medium"
        },
        "serial": 21
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to an empty object in UPDATEPRODUCTNAME.",
        "test_data": {},
        "serial": 22
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCTNAME.",
        "test_data": {
            "product_id": "a6bb1d23bd29",
            "product_name": "The Craftsman Shirt in Bark Plaid CottonAA"
        },
        "serial": 23
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to a product_name that already exists in UPDATEPRODUCTNAME.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_name": "The Craftsman Shirt in Bark Plaid Cotton"
        },
        "serial": 24
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to a missing product_id field in UPDATEPRODUCTNAME.",
        "test_data": {
            "product_name": "The Craftsman Shirt in Bark Plaid COTTON"
        },
        "serial": 25
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to update the product_name of a Product in UPDATEPRODUCTNAME.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_name": "The Craftsman Shirt in Bark Plaid COTTON"
        },
        "serial": 26
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTPRICE.",
        "test_data": {},
        "serial": 27
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCTPRICE.",
        "test_data": {
            "product_id": "a6bb1d23bd29",
            "product_price": 305
        },
        "serial": 28
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to a product_price value that already exists in UPDATEPRODUCTPRICE.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_price": 300
        },
        "serial": 29
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to a missing product_price field in UPDATEPRODUCTPRICE.",
        "test_data": {
            "product_id": "a6bb1d23bd28"
        },
        "serial": 30
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to update the product_price in UPDATEPRODUCTPRICE.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_price": 280
        },
        "serial": 31
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTSUPPLYTYPE.",
        "test_data": {},
        "serial": 32
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to a Product that does not exist in UPDATEPRODUCTSUPPLYTYPE.",
        "test_data": {
            "product_id": "a6bb1d23bd29",
            "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 33
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to updating a product_supply_type that already exists in UPDATEPRODUCTSUPPLYTYPE.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 34
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to a missing product_id field in UPDATEPRODUCTSUPPLYTYPE.",
        "test_data": {
            "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 35
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to update the supply_description and supply_type in UPDATEPRODUCTSUPPLYTYPE.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 36
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to check the response to an empty object in SEARCHPRODUCTS.",
        "test_data": {},
        "serial": 37
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_name in SEARCHPRODUCTS.",
        "test_data": {
            "product_name": "The Craftsman Shirt in Bark Plaid Cotton"
        },
        "serial": 38
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_color in SEARCHPRODUCTS.",
        "test_data": {
            "product_name": "Bark Plaid Cotton"
        },
        "serial": 39
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_subcategory in SEARCHPRODUCTS.",
        "test_data": {
            "product_name": "Bark Plaid Cotton"
        },
        "serial": 40
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_subcategory in SEARCHPRODUCTS.",
        "test_data": {
            "product_subcategory": "Short-Sleeved Shirt"
        },
        "serial": 41
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_name and product_subcategory in SEARCHPRODUCTS.",
        "test_data": {
            "product_name": "The Craftsman Shirt in Bark Plaid Cotton",
            "product_subcategory": "Short-Sleeved Shirt"
        },
        "serial": 42
    },

    {
        "url": "http://localhost:3500/products/deleteproduct",
        "test_name": "Test to check response to an empty object in DELETEPRODUCT",
        "test_data": {},
        "serial": 43
    },

    {
        "url": "http://localhost:3500/products/deleteproduct",
        "test_name": "Test to check response to a Product that doesn't exist in DELETEPRODUCT",
        "test_data": {
            "product_id": "a6bb1d23bd29"
        },
        "serial": 44
    },

    {
        "url": "http://localhost:3500/products/deleteproduct",
        "test_name": "Test to delete a Product in DELETEPRODUCT",
        "test_data": {
            "product_id": "a6bb1d23bd28"
        },
        "serial": 45
    }

]

# CreateProduct -> # 0 - 3
# UpdateProduct -> # 4 - 12
# UpdateProductDiscount -> # 13 - 17
# UpdateProductGarmentWeight -> 18 - 21
# UpdateProductName -> # 22 - 26
# UpdateProductPrice -> # 27 - 31 
# UpdateProductSupplyType -> # 32 - 36
# SearchProducts -> # 37 - 42
# DeleteProduct -> # 43 - 45

list_length = len(product_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======CRAFTSMAN SHIRT BARK PLAID COTTON PRODUCT TEST MENU======")
    for index in range (0, list_length):
        print(str(index + 1) + ". " + product_test_data_list[index]['test_name'])

    user_choice = int(input('\nChoose a test to run or press 0 to exit '))

    url = product_test_data_list[user_choice - 1]['url']
    test_name = product_test_data_list[user_choice - 1]['test_name']
    test_data = product_test_data_list[user_choice - 1]['test_data']
    serial = product_test_data_list[user_choice - 1]['serial']


    if user_choice >= 1 and user_choice <= 4:
        print("======CreateProduct TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))
        

        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 5 and user_choice <= 13:
        print("======UpdateProduct TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 14 and user_choice <= 18:
        print("======UpdateProductDiscount TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 19 and user_choice <= 22:
        print("======UpdateProductGarmentWeight TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 23 and user_choice <= 27:
        print("======UpdateProductName TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")
    
    elif user_choice >= 28 and user_choice <= 32:
        print("======UpdateProductPrice TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 33 and user_choice <= 37:
        print("======UpdateProductSupplyType TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 38 and user_choice <= 43:
        print("======SearchProduct TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = getRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 44 and user_choice <= 46:
        print("======DeleteProduct TEST======")
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