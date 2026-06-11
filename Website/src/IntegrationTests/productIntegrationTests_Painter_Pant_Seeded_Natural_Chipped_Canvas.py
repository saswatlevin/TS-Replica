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
            "product_name": "The Painter Pant in Seeded Natural Chipped Canvas",
            "product_color": "Seeded Natural Chipped Canvas",
            "product_description": "A thoughtful riff on a timeless workwear silhouette, The Painter Pant offers utility-driven details in a clean, tailored package. Built from sturdy organic cotton canvas and finished with a subtle stone wash, it brings classic durability and everyday versatility to the table—no paint required.",
            "product_price": 138,
            "product_category": "Lower Garment",
            "product_subcategory": "Bottom",
            "product_subcategory_type": "Pant",
            "product_fit": "Medium rise straight leg fit, with a 9\" taper from thigh to leg opening. 34\" inseam. Model is 6'2\", wearing a 32\".",
            "product_garment_weight": {
                "garment_weight_description": "Built like a brick Sh#!thouse.",
                "garment_weight": "Medium to Heavy"
            },
            "product_material": "Crafted from hefty chipped canvas and stone washed for a worn-in feel from day one. Reinforced with triple-needle stitching on outseam, with functional details like dual tool pockets, bar-tacked stress points, and our signature SF map print pocketing.",
            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },
            "product_specifications": "12.5 oz. 100% organic cotton canvas with 6 oz. organic cotton SF Map pocketing, stone-washed for a worn-in feel, features angled front slash pockets, two mitered back patch pockets with reinforced lining, dual tool pockets sewn into side seam, coin pocket, triple-needle felled outseam construction, bar-tacked stress points, YKK zip fly with tack button closure, machine wash cold and tumble dry low, made in China.",
            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Pants\\The_Painter_Pant_in_Seeded_Natural_Chipped_Canvas\\instock_m_q225_The_Painter_Pant-SeededNaturalChippedCanvas_portrait_001.jpg",
                    "main_image": True
                }
            ],
            "product_items": [
                {
                    "item_type": "Pant with Lower Size Number and Inseam Length",
                    "lower_size_number": 38,
                    "inseam_length": 34,
                    "total_stock": 310,
                    "quantity_sold": 50,
                    "quantity_returned": 0,
                    "current_stock": 260
                }
            ],
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },
        "serial": 1
    },

    {
        "url": "http://localhost:3500/products/createproduct",
        "test_name": "Test to check response to a missing product_price field in CREATEPRODUCT.",
        "test_data": {
            "product_name": "The Painter Pant in Seeded Natural Chipped Canvas 2",
            "product_color": "Seeded Natural Chipped Canvas",
            "product_description": "A thoughtful riff on a timeless workwear silhouette, The Painter Pant offers utility-driven details in a clean, tailored package. Built from sturdy organic cotton canvas and finished with a subtle stone wash, it brings classic durability and everyday versatility to the table—no paint required, EVER!!",
            "product_category": "Lower Garment",
            "product_subcategory": "Bottom",
            "product_subcategory_type": "Pant",
            "product_fit": "Medium rise straight leg fit, with a 9\" taper from thigh to leg opening. 34\" inseam. Model is 6'2\", wearing a 32\".",
            "product_garment_weight": {
                "garment_weight_description": "Built like a brick Sh#!thouse.",
                "garment_weight": "Medium to Heavy"
            },
            "product_material": "Crafted from hefty chipped canvas and stone washed for a worn-in feel from day one. Reinforced with triple-needle stitching on outseam, with functional details like dual tool pockets, bar-tacked stress points, and our signature SF map print pocketing.",
            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },
            "product_specifications": "12.5 oz. 100% organic cotton canvas with 6 oz. organic cotton SF Map pocketing, stone-washed for a worn-in feel, features angled front slash pockets, two mitered back patch pockets with reinforced lining, dual tool pockets sewn into side seam, coin pocket, triple-needle felled outseam construction, bar-tacked stress points, YKK zip fly with tack button closure, machine wash cold and tumble dry low, made in China.",
            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Pants\\The_Painter_Pant_in_Seeded_Natural_Chipped_Canvas\\instock_m_q225_The_Painter_Pant-SeededNaturalChippedCanvas_portrait_001.jpg",
                    "main_image": True
                }
            ],
            "product_items": [
                {
                    "item_type": "Pant with Lower Size Number and Inseam Length",
                    "lower_size_number": 38,
                    "inseam_length": 34,
                    "total_stock": 310,
                    "quantity_sold": 50,
                    "quantity_returned": 0,
                    "current_stock": 260
                }
            ],
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },
        "serial": 2
    },

    {
        "url": "http://localhost:3500/products/createproduct",
        "test_name": "Test to create a Product in CREATEPRODUCT.",
        "test_data": {
            "product_name": "The Painter Pant in Seeded Natural Chipped CANVAS TWO",
            "product_color": "Seeded Natural Chipped CANVAS",
            "product_description": "A thoughtful riff on a timeless workwear silhouette, The Painter Pant offers utility-driven details in a clean, tailored package. Built from sturdy organic cotton canvas and finished with a subtle stone wash, it brings classic durability and everyday versatility to the table—no paint required, EVER!!",
            "product_price": 138,
            "product_category": "Lower Garment",
            "product_subcategory": "Bottom",
            "product_subcategory_type": "Pant",
            "product_fit": "Medium rise straight leg fit, with a 9\" taper from thigh to leg opening. 34\" inseam. Model is 6'2\", wearing a 32\".",
            "product_garment_weight": {
                "garment_weight_description": "Built like a brick Sh#!thouse.",
                "garment_weight": "Medium to Heavy"
            },
            "product_material": "Crafted from hefty chipped canvas and stone washed for a worn-in feel from day one. Reinforced with triple-needle stitching on outseam, with functional details like dual tool pockets, bar-tacked stress points, and our signature SF map print pocketing.",
            "product_supply_type": {
                "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
                "supply_type": "Limited"
            },
            "product_specifications": "12.5 oz. 100% organic cotton canvas with 6 oz. organic cotton SF Map pocketing, stone-washed for a worn-in feel, features angled front slash pockets, two mitered back patch pockets with reinforced lining, dual tool pockets sewn into side seam, coin pocket, triple-needle felled outseam construction, bar-tacked stress points, YKK zip fly with tack button closure, machine wash cold and tumble dry low, made in China.",
            "product_images": [
                {
                    "image_uri": "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Pants\\The_Painter_Pant_in_Seeded_Natural_Chipped_Canvas\\instock_m_q225_The_Painter_Pant-SeededNaturalChippedCanvas_portrait_001.jpg",
                    "main_image": True
                }
            ],
            "product_items": [
                {
                    "item_type": "Pant with Lower Size Number and Inseam Length",
                    "lower_size_number": 38,
                    "inseam_length": 34,
                    "total_stock": 310,
                    "quantity_sold": 50,
                    "quantity_returned": 0,
                    "current_stock": 260
                }
            ],
            "discount_code": "10PERCENT",
            "discount_percentage": 10
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
            "product_id": "ojvs7hjfihgd",
            "product_description": "A thoughtful riff on a timeless workwear silhouette, The Painter Pant offers utility-driven details in a clean, tailored package. Built from sturdy organic cotton canvas and finished with a subtle stone wash, it brings classic durability and everyday versatility to the table—no paint REQUIRED."
        },
        "serial": 5
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to check the response to a value that already exists in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "product_category": "Lower Garment"
        },
        "serial": 6
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_color in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "product_color": "Natural Chipped CANVAS"
        },
        "serial": 7
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_description in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "product_description": "A thoughtful riff on a timeless workwear silhouette, The Painter Pant offers utility-driven details in a clean, tailored package. Built from sturdy organic cotton canvas and finished with a subtle stone wash, it brings classic durability and everyday versatility to the table—no paint REQUIRED."
        },
        "serial": 8
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_category in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
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
            "product_subcategory_type": "Chino"
        },
        "serial": 11
    },

    {
        "url": "http://localhost:3500/products/updateproduct",
        "test_name": "Test to update the product_specifications in UPDATEPRODUCT.",
        "test_data": {
            "product_id": "a6bb1d23bd28",
            "product_specifications": "12.5 oz. 100% organic cotton canvas with 6 oz. organic cotton SF Map pocketing, stone-washed for a worn-in feel, features angled front slash pockets, two mitered back patch pockets with reinforced lining, dual tool pockets sewn into side seam, coin pocket, triple-needle felled outseam construction, bar-tacked stress points, YKK zip fly with tack button closure, machine wash cold and tumble dry low, made in CHINA."
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
            "product_id": "ojvs7hjfihgd",
            "discount_code": "10PERCENT",
            "discount_percentage": 10
        },
        "serial": 14
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to discount_code and discount_percentage values that already exist in UPDATEPRODUCTDISCOUNT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "discount_code": "None",
            "discount_percentage": 0
        },
        "serial": 15
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to check the response to a missing discount_code field in UPDATEPRODUCTDISCOUNT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "discount_percentage": 0
        },
        "serial": 16
    },

    {
        "url": "http://localhost:3500/products/updateproductdiscount",
        "test_name": "Test to update the discount_code and discount_percentage in UPDATEPRODUCTDISCOUNT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "discount_code": "10PERCENT",
            "discount_percentage": 10
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
            "product_id": "ojvs7hjfihgd",
            "garment_weight_description": "Built like a brick Sh#!thouse.",
            "garment_weight": "Medium to Heavy"
        },
        "serial": 19
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to check the response to a product_garment_weight that already exists in UPDATEPRODUCTGARMENTWEIGHT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "garment_weight_description": "Built like a brick Sh#!thouse.",
            "garment_weight": "Medium to Heavy"
        },
        "serial": 20
    },

    {
        "url": "http://localhost:3500/products/updateproductgarmentweight",
        "test_name": "Test to update the garment_weight and garment_weight_description value in UPDATEPRODUCTGARMENTWEIGHT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "garment_weight": "Heavy",
            "garment_weight_description": "Good build"
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
            "product_id": "ojvs7hjfihgd",
            "product_name": "The Painter Pant in Seeded Natural Chipped CANVAS"
        },
        "serial": 23
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to a product_name that already exists in UPDATEPRODUCTNAME.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "product_name": "The Painter Pant in Seeded Natural Chipped Canvas"
        },
        "serial": 24
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to check the response to a missing product_id field in UPDATEPRODUCTNAME.",
        "test_data": {
            "product_name": "The Painter Pant in Seeded Natural Chipped CANVAS"
        },
        "serial": 25
    },

    {
        "url": "http://localhost:3500/products/updateproductname",
        "test_name": "Test to update the product_name of a Product in UPDATEPRODUCTNAME.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "product_name": "The Painter Pant in Seeded Natural Chipped CANVAS"
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
            "product_id": "ojvs7hjfihgd",
            "product_price": 200
        },
        "serial": 28
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to a product_price value that already exists in UPDATEPRODUCTPRICE.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "product_price": 138
        },
        "serial": 29
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to check the response to a missing product_price field in UPDATEPRODUCTPRICE.",
        "test_data": {
            "product_id": "ojvs7hjfihgc"
        },
        "serial": 30
    },

    {
        "url": "http://localhost:3500/products/updateproductprice",
        "test_name": "Test to update the product_price in UPDATEPRODUCTPRICE.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "product_price": 200
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
            "product_id": "ojvs7hjfihgd",
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Essential"
        },
        "serial": 33
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to updating a product_supply_type that already exists in UPDATEPRODUCTSUPPLYTYPE.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 34
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to check the response to a missing product_id field in UPDATEPRODUCTSUPPLYTYPE.",
        "test_data": {
            "supply_type_description": "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
            "supply_type": "Limited"
        },
        "serial": 35
    },

    {
        "url": "http://localhost:3500/products/updateproductsupplytype",
        "test_name": "Test to update the supply_type_description and supply_type in UPDATEPRODUCTSUPPLYTYPE.",
        "test_data": {
            "product_id": "ojvs7hjfihgc",
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
        "test_name": "Test to search for a Product using product_name in SEARCHPRODUCTS.",
        "test_data": {
            "product_name": "The Painter Pant in Seeded Natural Chipped CANVAS"
        },
        "serial": 38
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_color in SEARCHPRODUCTS.",
        "test_data": {
            "product_color": "Seeded Natural Chipped CANVAS"
        },
        "serial": 39
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_subcategory in SEARCHPRODUCTS.",
        "test_data": {
            "product_subcategory": "Bottom"
        },
        "serial": 40
    },

    {
        "url": "http://localhost:3500/products/searchproducts",
        "test_name": "Test to search for a Product using product_name and product_subcategory in SEARCHPRODUCTS.",
        "test_data": {
            "product_name": "The Painter Pant in Natural Chipped CANVAS",
            "product_subcategory": "Bottom"
        },
        "serial": 41
    },

    {
        "url": "http://localhost:3500/products/deleteproduct",
        "test_name": "Test to check response to empty request body in DELETEPRODUCT.",
        "test_data": {},
        "serial": 42
    },

    {
        "url": "http://localhost:3500/products/deleteproduct",
        "test_name": "Test to check response to a product that does not exist in DELETEPRODUCT.",
        "test_data": {
            "product_id": "ojvs7hjfihgd"
        },
        "serial": 43
    },

    {
        "url": "http://localhost:3500/products/deleteproduct",
        "test_name": "Test to delete a PRODUCT in DELETEPRODUCT.",
        "test_data": {
            "product_id": "ojvs7hjfihgc"
        },
        "serial": 44
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
# DeleteProduct -> # 42 - 44

list_length = len(product_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======PAINTER PANT IN SEEDED NATURAL CHIPPED CANVAS PRODUCT TEST MENU======")
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

    elif user_choice >= 43 and user_choice <= 45:
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