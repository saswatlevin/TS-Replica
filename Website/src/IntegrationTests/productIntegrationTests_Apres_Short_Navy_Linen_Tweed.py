from requestFunctions import *

apres_short_navy_linen_tweed_test_data_list = [

    {
        "url": "http://localhost:3500/products/createproduct",

        "test_name": "Test to check for response to an empty request body in CREATEPRODUCT",

        "test_data": {},

        "serial": 0 
    },

    {
        "url": "http://localhost:3500/products/createproduct",

        "test_name": "Test to check the response to a duplicate product in CREATEPRODUCT",

        "test_data": {
            "product_name": "The Apres Short in Navy Linen Tweed",

            "product_color": "Navy Linen Tweed",

            "product_description": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in between",

            "product_price": 94,

            "product_category": "Lower Garment",

            "product_subcategory": "Bottom",

            "product_subcategory_type": "Short",

            "product_fit": "7\" Inseam. Model is 6'3\", wearing a Medium.",

            "product_garment_weight": {
                "garment_weight_description": "Sturdy daily drivers.",
                "garment_weight": "Medium"
            },

            "product_material": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in between.",

            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },

            "product_specifications": "8.5-oz. 55% linen, 45% organic cotton tweed with 6-oz. 100% organic cotton SF Map pocketing, washed for a soft, lived-in feel, featuring an elastic waistband with drawcord, button fly, two front slash pockets, two back patch button-through pockets, and made in China; wash cold, tumble dry low.",

            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Shorts\\The_Apres_Short_in_Navy_Linen_Tweed\\instock_m_q225_The_Apres_Short-NavyLinenTweed_portrait_004.jpg",
                    "main_image": True
                }
            ],

            "product_items": [
                {
                    "item_type": "Short with Only Lower Size Letter",
                    "lower_size_letter": "XL",
                    "total_stock": 350,
                    "quantity_sold": 150,
                    "quantity_returned": 0,
                    "current_stock": 200
                }
            ],

            "discount_code": "30PERCENT",

            "discount_percentage": 30
        },

        "serial": 1
    },

    {
        "url": "http://localhost:3500/products/createproduct",

        "test_name": "Test to check response to a missing product_price field in CREATEPRODUCT",

        "test_data": {
            "product_name": "The Apres Short in Navy Linen Tweed",

            "product_color": "Navy Linen Tweed",

            "product_description": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in between",

            "product_category": "Lower Garment",

            "product_subcategory": "Bottom",

            "product_subcategory_type": "Short",

            "product_fit": "7\" Inseam. Model is 6'3\", wearing a Medium.",

            "product_garment_weight": {
                "garment_weight_description": "Sturdy daily drivers.",
                "garment_weight": "Medium"
            },

            "product_material": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in between.",

            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },

            "product_specifications": "8.5-oz. 55% linen, 45% organic cotton tweed with 6-oz. 100% organic cotton SF Map pocketing, washed for a soft, lived-in feel, featuring an elastic waistband with drawcord, button fly, two front slash pockets, two back patch button-through pockets, and made in China; wash cold, tumble dry low.",

            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Shorts\\The_Apres_Short_in_Navy_Linen_Tweed\\instock_m_q225_The_Apres_Short-NavyLinenTweed_portrait_004.jpg",
                    "main_image": True
                }
            ],

            "product_items": [
                {
                    "item_type": "Short with Only Lower Size Letter",
                    "lower_size_letter": "XL",
                    "total_stock": 350,
                    "quantity_sold": 150,
                    "quantity_returned": 0,
                    "current_stock": 200
                }
            ],

            "discount_code": "30PERCENT",

            "discount_percentage": 30
        },

        "serial": 2
    },

    {
        "url": "http://localhost:3500/products/createproduct",

        "test_name": "Test to create a Product in CREATEPRODUCT",

        "test_data": {
            "product_name": "The Apres Short in Navy Linen TWEED TWO",

            "product_color": "Navy Linen TWEED",

            "product_description": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in BETWEEN",

            "product_price": 94,

            "product_category": "Lower Garment",

            "product_subcategory": "Bottom",

            "product_subcategory_type": "Short",

            "product_fit": "7\" Inseam. Model is 6'3\", wearing a Medium.",

            "product_garment_weight": {
                "garment_weight_description": "Sturdy daily drivers.",
                "garment_weight": "Medium"
            },

            "product_material": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in between.",

            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },

            "product_specifications": "8.5-oz. 55% linen, 45% organic cotton tweed with 6-oz. 100% organic cotton SF Map pocketing, washed for a soft, lived-in feel, featuring an elastic waistband with drawcord, button fly, two front slash pockets, two back patch button-through pockets, and made in China; wash cold, tumble dry low.",

            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Shorts\\The_Apres_Short_in_Navy_Linen_Tweed\\instock_m_q225_The_Apres_Short-NavyLinenTweed_portrait_004.jpg",
                    "main_image": True
                }
            ],

            "product_items": [
                {
                    "item_type": "Short with Only Lower Size Letter",
                    "lower_size_letter": "XL",
                    "total_stock": 350,
                    "quantity_sold": 150,
                    "quantity_returned": 0,
                    "current_stock": 200
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
            "product_id": "u9yl6odhigeu",
            "product_description": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in BETWEEN."
        },

        "serial": 5
    },

    {
        "url": "http://localhost:3500/products/updateproduct",

        "test_name": "Test to check the response to a value that already exists in UPDATEPRODUCT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_category": "Lower Garment"
        },

        "serial": 6
    },

    {
        "url": "http://localhost:3500/products/updateproduct",

        "test_name": "Test to update the product_color in UPDATEPRODUCT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_color": "Navy Linen TWEED"
        },

        "serial": 7
    },

    {
        "url": "http://localhost:3500/products/updateproduct",

        "test_name": "Test to update the product_description in UPDATEPRODUCT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_description": "With its richly textured hand and breezy feel, this Linen Tweed iteration of The Après Short is built to walk through the warmer months with ease. Combining the comfort of a drawcord waist with a clean, tailored fit, it’s an ideal companion for relaxed summer days by the pool, the ocean, or anywhere in BETWEEN."
        },

        "serial": 8
    },

    {
        "url": "http://localhost:3500/products/updateproduct",

        "test_name": "Test to update the product_category in UPDATEPRODUCT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_category": "Upper Garment"
        },

        "serial": 9
    },

    {
        "url": "http://localhost:3500/products/updateproduct",

        "test_name": "Test to update the product_subcategory in UPDATEPRODUCT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_subcategory": "Shirt"
        },

        "serial": 10
    },

    {
        "url": "http://localhost:3500/products/updateproduct",

        "test_name": "Test to update the product_subcategory_type in UPDATEPRODUCT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_subcategory_type": "Pant"
        },

        "serial": 11
    },

    {
        "url": "http://localhost:3500/products/updateproduct",

        "test_name": "Test to update the product_specifications in UPDATEPRODUCT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_specifications": "8.5-oz. 55% linen, 45% organic cotton tweed with 6-oz. 100% organic cotton SF Map pocketing, washed for a soft, lived-in feel, featuring an elastic waistband with drawcord, button fly, two front slash pockets, two back patch button-through pockets, and made in China; wash cold, tumble dry LOW."
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
            "product_id": "u9yl6odhigeu",
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },

        "serial": 14
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",

        "test_name": "Test to check the response to discount_code and discount_percentage values that already exist in UPDATEPRODUCTDISCOUNT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "discount_code": "20PERCENT",
            "discount_percentage": 20
        },

        "serial": 15
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",

        "test_name": "Test to check the response to a missing discount_code field in UPDATEPRODUCTDISCOUNT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "discount_percentage": 20
        },

        "serial": 16
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",

        "test_name": "Test to update the discount_code and discount_percentage in UPDATEPRODUCTDISCOUNT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },

        "serial": 17
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",

        "test_name": "Test to check the response to an empty object in UPDATEPRODUCTGARMENTWEIGHT",

        "test_data": {},

        "serial": 18
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",

        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCTGARMENTWEIGHT",

        "test_data": {
            "product_id": "u9yl6odhigeu",
            "garment_weight_description": "Sturdy daily drivers.",
            "garment_weight": "Heavy"
        },

        "serial": 19
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",

        "test_name": "Test to check the response to a garment_weight value that already exists in UPDATEPRODUCTGARMENTWEIGHT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "garment_weight_description": "Sturdy daily drivers.",
            "garment_weight": "Medium"
        },

         "serial": 20
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",

        "test_name": "Test to update a garment_weight value in UPDATEPRODUCTGARMENTWEIGHT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "garment_weight_description": "Sturdy daily drivers.",
            "garment_weight": "Heavy"
        },

        "serial": 21
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",

        "test_name": "Test to update a garment_weight_description value in UPDATEPRODUCTGARMENTWEIGHT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "garment_weight": "Heavy",
            "garment_weight_description": "Sturdy Daily DRIVERS"
        },

        "serial": 22
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",

        "test_name": "Test to update the garment_weight and garment_weight_description values in UPDATEPRODUCTGARMENTWEIGHT",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "garment_weight": "Light",
            "garment_weight_description": "STURDY GOOD DAILY DRIVERS"
        },

        "serial": 23
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",

        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTSUPPLYTYPE",

        "test_data": {},

        "serial": 24
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",

        "test_name": "Test to check the response to a Product that does not exist in UPDATEPRODUCTSUPPLYTYPE",

        "test_data": {
            "product_id": "u9yl6odhigeu",
            "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
            "supply_type": "Essential"
        },

        "serial": 25
    },


    {
        "url": "http://localhost:3500/products/updateproductsupplytype",

        "test_name": "Test to check the response to updating a value that already exists in UPDATEPRODUCTSUPPLYTYPE",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Limited"
        },

        "serial": 26
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",

        "test_name": "Test to check the response to a missing product_id field in UPDATEPRODUCTSUPPLYTYPE",

        "test_data": {
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Limited"
        },

        "serial": 27
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",

        "test_name": "Test to update the supply_type in UPDATEPRODUCTSUPPLYTYPE",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
            "supply_type": "Essential"
        },

        "serial": 28
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",

        "test_name": "Test to update the supply_description and supply_type in UPDATEPRODUCTSUPPLYTYPE",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "supply_type": "Essential",
            "supply_type_description": "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping."
        },

        "serial": 29
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",

        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTPRICE",

        "test_data": {},

        "serial": 30
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",

        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCTPRICE",

        "test_data": {
            "product_id": "u9yl6odhigeu",
            "product_price": 200
        },

        "serial": 31
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",

        "test_name": "Test to check the response to a product_price value that already exists in UPDATEPRODUCTPRICE",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_price": 94
        },

        "serial": 32
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",

        "test_name": "Test to check the response to a missing product_price field in UPDATEPRODUCTPRICE",

        "test_data": {
            "product_id": "u9yl6odhiget"
        },

        "serial": 33
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",

        "test_name": "Test to update the product_price in UPDATEPRODUCTPRICE",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_price": 120
        },

        "serial": 34
    },

    {
        "url": "http://localhost:3500/products/updateproductname",

        "test_name": "Test to check the response to an empty request body in UPDATEPRODUCTNAME",

        "test_data": {},

        "serial": 35
    },

    {
        "url": "http://localhost:3500/products/updateproductname",

        "test_name": "Test to check the response to a product that does not exist in UPDATEPRODUCTNAME",

        "test_data": {
            "product_id": "u9yl6odhigeu",
            "product_name": "The Apres Short in Navy Linen TWEED"
        },

        "serial": 36
    },

    {
        "url": "http://localhost:3500/products/updateproductname",

        "test_name": "Test to check the response to a product name that already exists in UPDATEPRODUCTNAME",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_name": "The Apres Short in Navy Linen Tweed"
        },

        "serial": 37
    },

    {
        "url": "http://localhost:3500/products/updateproductname",

        "test_name": "Test to check the response to a missing product_name field in UPDATEPRODUCTNAME",

        "test_data": {
            "product_id": "u9yl6odhiget"
        },

        "serial": 38
    },

    {
        "url": "http://localhost:3500/products/updateproductname",

        "test_name": "Test to update the product_name in UPDATEPRODUCTNAME",

        "test_data": {
            "product_id": "u9yl6odhiget",
            "product_name": "The Apres Short in Navy Linen TWEED"
        },

        "serial": 39
    },

    {
        "url": "http://localhost:3500/products/searchproducts",

        "test_name": "Test to check the response to an empty object in SEARCHPRODUCTS",

        "test_data": {},

        "serial": 40
    },

    {
        "url": "http://localhost:3500/products/searchproducts",

        "test_name": "Test to search for a Product using product_name in SEARCHPRODUCTS",

        "test_data": {
            "product_name": "The Apres Short in Navy Linen Tweed"
        },

        "serial": 41
    },

    {
        "url": "http://localhost:3500/products/searchproducts",

        "test_name": "Test to search for a Product using product_color in SEARCHPRODUCTS",

        "test_data": {
            "product_color": "Navy Linen Tweed"
        },

        "serial": 42
    },

    {
        "url": "http://localhost:3500/products/searchproducts",

        "test_name": "Test to search for a Product using product_subcategory in SEARCHPRODUCTS",

        "test_data": {
            "product_subcategory": "Bottom"
        },

        "serial": 43
    },

    {
        "url": "http://localhost:3500/products/searchproducts",

        "test_name": "Test to search for a Product using product_name and product_subcategory in SEARCHPRODUCTS",

        "test_data": {
            "product_name": "The Apres Short in Navy Linen Tweed",
            "product_subcategory": "Bottom"
        },

         "serial": 44
    }

]

# 0 - 3   CreateProduct
# 4 - 12  UpdateProduct
# 13 - 17 UpdateProductDiscount
# 18 - 23 UpdateProductGarmentWeight
# 24 - 29 UpdateProductSupplyType
# 30 - 34 UpdateProductPrice
# 35 - 39 updateProductName
# 40 - 44 searchProducts

list_length = len(apres_short_navy_linen_tweed_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======APRES SHORT NAVY LINEN TWEED PRODUCT TEST MENU======")
    for index in range (0, list_length):
        print(str(index + 1) + ". " + apres_short_navy_linen_tweed_test_data_list[index]['test_name'])

    user_choice = int(input('\nChoose a test to run or press 0 to exit '))

    url = apres_short_navy_linen_tweed_test_data_list[user_choice - 1]['url']
    test_name = apres_short_navy_linen_tweed_test_data_list[user_choice - 1]['test_name']
    test_data = apres_short_navy_linen_tweed_test_data_list[user_choice - 1]['test_data']
    serial = apres_short_navy_linen_tweed_test_data_list[user_choice - 1]['serial']


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
        print("======UpdateProductDIscount TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 19 and user_choice <= 24:
        print("======UpdateProductGarmentWeight TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 25 and user_choice <= 30:
        print("======UpdateProductSupplyType TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 31 and user_choice <= 35:
        print("======UpdateProductPrice TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 36 and user_choice <= 40:
        print("======UpdateProductName TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 41 and user_choice <= 45:
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