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
            "product_name": "The Camp Short in Aged Penny Chipped Canvas",
            "product_color": "Aged Penny Chipped Canvas",
            "product_description": "Boasting rugged construction and considered tailoring, The Camp Short is a cut above the rest in both leisure and labor. Given its workwear roots, it should come as no surprise that The Camp Short is built like a tank, complete with a host of utility-focused features like easy-entry slash pockets and bar-tacked stress points. We’ve finished this Chipped Canvas iteration with a stone wash for lived-in character from the very first wear.",
            "product_price": 98,
            "product_category": "Lower Garment",
            "product_subcategory": "Bottom",
            "product_subcategory_type": "Short",
            "product_fit": "8\" inseam. Model is 6'2\", wearing a 32.",
            "product_garment_weight": {
                "garment_weight_description": "Sturdy daily drivers.",
                "garment_weight": "Medium"
            },
            "product_material": "Built from 100% GOTS-certified organic cotton loomed to a thick, plain weave for lasting durability, this Chipped Canvas iteration of our Camp Short is characterized by a unique, two-step dye process in which the fabric is dyed, then top dyed with a slightly darker pigment, resulting in a well-worn look that will only get better as you put these shorts through their paces.",
            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },
            "product_specifications": "12.5-oz. 100% organic cotton canvas, 6-oz. organic cotton SF map pocketing, stone washed for a worn-in look and feel, angled front slash pockets, two back mitered patch pockets with half lining for added durability, bar-tacked pockets at stress points, YKK top button and zip fly closure, double-needle stitching throughout, wash cold and tumble dry low, made in China.",
            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Shorts\\The_Camp_Short_in_Aged_Penny_Chipped_Canvas\\instock_m_q225_The_Camp_Short-AgedPennyChippedCanvas_portrait_001.jpg",
                    "main_image": True
                }
            ],
            "product_items": [
                {
                    "item_type": "Short with Only Lower Size Number",
                    "lower_size_number": 36,
                    "total_stock": 300,
                    "quantity_sold": 50,
                    "quantity_returned": 0,
                    "current_stock": 250
                }
            ],
            "discount_code": "30PERCENT",
            "discount_percentage": 30
        },
        "serial": 1
    },

    {
        "url": "http://localhost:3500/products/createproduct",
        "test_name": "Test to check response to a missing product_price field in CREATEPRODUCT.",
        "test_data": {
            "product_name": "The Camp Short in Aged Penny Chipped Canvas",
            "product_color": "Aged Penny Chipped Canvas",
            "product_description": "Boasting rugged construction and considered tailoring, The Camp Short is a cut above the rest in both leisure and labor. Given its workwear roots, it should come as no surprise that The Camp Short is built like a tank, complete with a host of utility-focused features like easy-entry slash pockets and bar-tacked stress points. We’ve finished this Chipped Canvas iteration with a stone wash for lived-in character from the very first wear.",
            "product_category": "Lower Garment",
            "product_subcategory": "Bottom",
            "product_subcategory_type": "Short",
            "product_fit": "8\" inseam. Model is 6'2\", wearing a 32.",
            "product_garment_weight": {
                "garment_weight_description": "Sturdy daily drivers.",
                "garment_weight": "Medium"
            },
            "product_material": "Built from 100% GOTS-certified organic cotton loomed to a thick, plain weave for lasting durability, this Chipped Canvas iteration of our Camp Short is characterized by a unique, two-step dye process in which the fabric is dyed, then top dyed with a slightly darker pigment, resulting in a well-worn look that will only get better as you put these shorts through their paces.",
            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },
            "product_specifications": "12.5-oz. 100% organic cotton canvas, 6-oz. organic cotton SF map pocketing, stone washed for a worn-in look and feel, angled front slash pockets, two back mitered patch pockets with half lining for added durability, bar-tacked pockets at stress points, YKK top button and zip fly closure, double-needle stitching throughout, wash cold and tumble dry low, made in China.",
            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Shorts\\The_Camp_Short_in_Aged_Penny_Chipped_Canvas\\instock_m_q225_The_Camp_Short-AgedPennyChippedCanvas_portrait_001.jpg",
                    "main_image": True
                }
            ],
            "product_items": [
                {
                    "item_type": "Short with Only Lower Size Number",
                    "lower_size_number": 36,
                    "total_stock": 300,
                    "quantity_sold": 50,
                    "quantity_returned": 0,
                    "current_stock": 250
                }
            ],
            "discount_code": "30PERCENT",
            "discount_percentage": 30
        },
        "serial": 2
    },

    {
        "url": "http://localhost:3500/products/createproduct",
        "test_name": "Test to create a Product in CREATEPRODUCT.",
        "test_data": {
            "product_name": "The Camp Short in Aged Penny Chipped CANVAS TWO",
            "product_color": "Aged Penny Chipped CANVAS",
            "product_description": "Boasting rugged construction and considered tailoring, The Camp Short is a cut above the rest in both leisure and labor. Given its workwear roots, it should come as no surprise that The Camp Short is built like a tank, complete with a host of utility-focused features like easy-entry slash pockets and bar-tacked stress points. We’ve finished this Chipped Canvas iteration with a stone wash for lived-in character from the very first WEAR.",
            "product_price": 98,
            "product_category": "Lower Garment",
            "product_subcategory": "Bottom",
            "product_subcategory_type": "Short",
            "product_fit": "8\" inseam. Model is 6'2\", wearing a 32.",
            "product_garment_weight": {
                "garment_weight_description": "Sturdy daily drivers.",
                "garment_weight": "Medium"
            },
            "product_material": "Built from 100% GOTS-certified organic cotton loomed to a thick, plain weave for lasting durability, this Chipped Canvas iteration of our Camp Short is characterized by a unique, two-step dye process in which the fabric is dyed, then top dyed with a slightly darker pigment, resulting in a well-worn look that will only get better as you put these shorts through their paces.",
            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },
            "product_specifications": "12.5-oz. 100% organic cotton canvas, 6-oz. organic cotton SF map pocketing, stone washed for a worn-in look and feel, angled front slash pockets, two back mitered patch pockets with half lining for added durability, bar-tacked pockets at stress points, YKK top button and zip fly closure, double-needle stitching throughout, wash cold and tumble dry low, made in China.",
            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Shorts\\The_Camp_Short_in_Aged_Penny_Chipped_Canvas\\instock_m_q225_The_Camp_Short-AgedPennyChippedCanvas_portrait_001.jpg",
                    "main_image": True
                }
            ],
            "product_items": [
                {
                    "item_type": "Short with Only Lower Size Number",
                    "lower_size_number": 36,
                    "total_stock": 300,
                    "quantity_sold": 50,
                    "quantity_returned": 0,
                    "current_stock": 250
                }
            ],
            "discount_code": "30PERCENT",
            "discount_percentage": 30
        },
        "serial": 3
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCT",
        "test_data": {},
        "serial": 4
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCT",
        "test_data": {
            "product_id": "il19g7cce84m",
            "product_description": "Boasting rugged construction and considered tailoring, The Camp Short is a cut above the rest in both leisure and labor. Given its workwear roots, it should come as no surprise that The Camp Short is built like a tank, complete with a host of utility-focused features like easy-entry slash pockets and bar-tacked stress points. We’ve finished this Chipped Canvas iteration with a stone wash for lived-in character from the very first wear."
        },
        "serial": 5
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to check the response to a value that already exists in UPDATEPRODUCT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_category": "Lower Garment"
        },
        "serial": 6
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_color in UPDATEPRODUCT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_color": "Aged Penny Chipped CANVAS"
        },
        "serial": 7
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_description in UPDATEPRODUCT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_description": "Boasting rugged construction and considered tailoring, The Camp Short is a cut above the rest in both leisure and labor. Given its workwear roots, it should come as no surprise that The Camp Short is built like a tank, complete with a host of utility-focused features like easy-entry slash pockets and bar-tacked stress points. We’ve finished this Chipped Canvas iteration with a stone wash for lived-in character from the very first WEAR."
        },
        "serial": 8
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_category in UPDATEPRODUCT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_category": "Upper Garment"
        },
        "serial": 9
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_subcategory in UPDATEPRODUCT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_subcategory": "Shirt"
        },
        "serial": 10
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_subcategory_type in UPDATEPRODUCT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_subcategory_type": "Pant"
        },
        "serial": 11
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_specifications in UPDATEPRODUCT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_specifications": "12.5-oz. 100% organic cotton canvas, 6-oz. organic cotton SF map pocketing, stone washed for a worn-in look and feel, angled front slash pockets, two back mitered patch pockets with half lining for added durability, bar-tacked pockets at stress points, YKK top button and zip fly closure, double-needle stitching throughout, wash cold and tumble dry low, made in China."
        },
        "serial": 12
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTDISCOUNT",
        "test_data": {},
        "serial": 13
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to a Product that does not exist in UPDATEPRODUCTDISCOUNT",
        "test_data": {
            "product_id": "il19g7cce84m",
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },
        "serial": 14
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to discount_code and discount_percentage values that already exist in UPDATEPRODUCTDISCOUNT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "discount_code": "30PERCENT",
            "discount_percentage": 30
        },
        "serial": 15
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to a missing discount_code field in UPDATEPRODUCTDISCOUNT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "discount_percentage": 30
        },
        "serial": 16
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to update the discount_code and discount_percentage in UPDATEPRODUCTDISCOUNT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },
        "serial": 17
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to check the response to an empty object in UPDATEGARMENTWEIGHT",
        "test_data": {},
        "serial": 18
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to check the response to a product that does not exist in UPDATEGARMENTWEIGHT",
        "test_data": {
            "product_id": "il19g7cce84m",
            "garment_weight_description": "Sturdy daily drivers.",
            "garment_weight": "Medium"
        },
        "serial": 19
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to check the response to a product_garment_weight that already exists in UPDATEGARMENTWEIGHT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "garment_weight_description": "Sturdy daily drivers.",
            "garment_weight": "Medium"
        },
        "serial": 20
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to update the garment_weight and garment_weight_description value in UPDATEGARMENTWEIGHT",
        "test_data": {
            "product_id": "il19g7cce84l",
            "garment_weight_description": "Sturdy Daily DRIVERS",
            "garment_weight": "Light"
        },
        "serial": 21
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to an empty object in UPDATEPRODUCTNAME",
        "test_data": {},
        "serial": 22
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCTNAME",
        "test_data": {
            "product_id": "il19g7cce84m",
            "product_name": "The Camp Shirt in Aged Penny Chipped CANVAS"
        },
        "serial": 23
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to a product_name that already exists in UPDATEPRODUCTNAME",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_name": "The Camp Short in Aged Penny Chipped Canvas"
        },
        "serial": 24
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to a missing product_id field in UPDATEPRODUCTNAME",
        "test_data": {
            "product_name": "The Camp Short in Aged Penny Chipped CANVAS"
        },
        "serial": 25
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to update the product_name of a Product in UPDATEPRODUCTNAME",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_name": "The Camp Short in Aged Penny Chipped CANVAS"
        },
        "serial": 26
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTPRICE",
        "test_data": {},
        "serial": 27
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCTPRICE",
        "test_data": {
            "product_id": "il19g7cce84m",
            "product_price": 200
        },
        "serial": 28
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to a product_price value that already exists in UPDATEPRODUCTPRICE",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_price": 98
        },
        "serial": 29
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to a missing product_price field in UPDATEPRODUCTPRICE",
        "test_data": {
            "product_id": "il19g7cce84l"
        },
        "serial": 30
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to update the product_price in UPDATEPRODUCTPRICE",
        "test_data": {
            "product_id": "il19g7cce84l",
            "product_price": 100
        },
        "serial": 31
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTSUPPLYTYPE",
        "test_data": {},
        "serial": 32
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to a Product that does not exist in UPDATEPRODUCTSUPPLYTYPE",
        "test_data": {
            "product_id": "il19g7cce84m",
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 33
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to updating a product_supply_type that already exists in UPDATEPRODUCTSUPPLYTYPE",
        "test_data": {
            "product_id": "il19g7cce84l",
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 34
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to a missing product_id field in UPDATEPRODUCTSUPPLYTYPE",
        "test_data": {
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 35
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to update the supply_type_description and supply_type in UPDATEPRODUCTSUPPLYTYPE",
        "test_data": {
            "product_id": "il19g7cce84l",
            "supply_type": "Essential",
            "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping."
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
        "test_name": "Test to search for a Product using product_name in SEARCHPRODUCTS",
        "test_data": {
            "product_name": "The Camp Short in Aged Penny Chipped Canvas"
        },
        "serial": 38
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_color in SEARCHPRODUCTS",
        "test_data": {
            "product_color": "Aged Penny Chipped Canvas"
        },
        "serial": 39
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_subcategory in SEARCHPRODUCTS",
        "test_data": {
            "product_subcategory": "Bottom"
        },
        "serial": 40
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_name and product_subcategory in SEARCHPRODUCTS",
        "test_data": {
            "product_name": "The Camp Short in Aged Penny Chipped Canvas",
            "product_subcategory": "Bottom"
        },
        "serial": 41
    }
]

# CreateProduct -> # 0 - 3
# UpdateProduct -> # 4 - 12
# UpdateProductDiscount -> # 13 - 17
# UpdateProductGarmentWeight -> 18 - 21
# UpdateProductName -> # 22 - 26
# UpdateProductPrice -> # 27 - 31 
# UpdateProductSupplyType -> # 32 - 36
# SearchProducts -> # 37 - 41

list_length = len(product_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======CAMP SHORT AGED PENNY CHIPPED CANVAS PRODUCT TEST MENU======")
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

    elif user_choice >= 38 and user_choice <= 42:
        print("======SearchProduct TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = getRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    else:
        if user_choice != 0:
            print("User choice out of range.")
            continue
        else:
            print("Exiting...")
            break