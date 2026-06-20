from requestFunctions import *

product_image_test_data_list = [
	{
		"url": "http://localhost:3500/productimages/createproductimage",
		"test_name": "Test to check the response to an empty request body in CREATEPRODUCTIMAGE",
		"test_data": {},
		"file_path": "C:\\Users\\saswa\\OneDrive\\Pictures\\SampleImages\\Sample_Image_1.png",
		"serial": 0
	},

	{
		"url": "http://localhost:3500/productimages/createproductimage",
		"test_name": "Test to check the response to a Product that doesn't exist in CREATEPRODUCTIMAGE",
		"test_data": {
			"product_id": "u9yl6odhigeu"
		},
		"file_path": "C:\\Users\\saswa\\OneDrive\\Pictures\\SampleImages\\Sample_Image_1.png",
		"serial": 1
	},

	{
		"url": "http://localhost:3500/productimages/createproductimage",
		"test_name": "Test to create a Product Image (Sample Image 1) in CREATEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f"
		},

		"file_path": "C:\\Users\\saswa\\OneDrive\\Pictures\\SampleImages\\Sample_Image_1.png",
		"serial": 2
	},

	{
		"url": "http://localhost:3500/productimages/createproductimage",
		"test_name": "Test to create a Product Image (Sample Image 2) in CREATEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f"
		},

		"file_path": "C:\\Users\\saswa\\OneDrive\\Pictures\\SampleImages\\Sample_Image_2.png",
		"serial": 3
	},

	{
		"url": "http://localhost:3500/productimages/createproductimage",
		"test_name": "Test to create a Product Image (Sample Image 3) in CREATEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f"
		},

		"file_path": "C:\\Users\\saswa\\OneDrive\\Pictures\\SampleImages\\Sample_Image_3.png",
		"serial": 4
	},

	{
		"url": "http://localhost:3500/productimages/createproductimage",
		"test_name": "Test to create a Product Image (Sample Image 4) in CREATEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f"
		},

		"file_path": "C:\\Users\\saswa\\OneDrive\\Pictures\\SampleImages\\Sample_Image_4.png",
		"serial": 5
	},

	{
		"url": "http://localhost:3500/productimages/createproductimage",
		"test_name": "Test to create a Product Image (Sample Image 5) in CREATEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f"
		},

		"file_path": "C:\\Users\\saswa\\OneDrive\\Pictures\\SampleImages\\Sample_Image_5.png",
		"serial": 6
	},

	{
		"url": "http://localhost:3500/productimages/createproductimage",
		"test_name": "Test to create a Product Image (Sample Image 5(a)) in CREATEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f"
		},

		"file_path": "C:\\Users\\saswa\\OneDrive\\Pictures\\SampleImages\\Sample_Image_5(a).png",
		"serial": 7
	},

	{
		"url": "http://localhost:3500/productimages/searchproductimagebyid",
		"test_name": "Test to check the response to an empty request body in SEARCHPRODUCTIMAGEBYID",
		"test_data": {},
		"file_path": "NONE",
		"serial": 8
	},

	{
		"url": "http://localhost:3500/productimages/searchproductimagebyid",
		"test_name": "Test to check the response to a Product that does not exist in SEARCHPRODUCTIMAGEBYID",
		"test_data": {
			"product_id": "3uaah9wv028g",
			"image_id": "135244bc02b0"
		},
		"file_path": "NONE",
		"serial": 9
	},

	{
		"url": "http://localhost:3500/productimages/searchproductimagebyid",
		"test_name": "Test to check the response to a Product Image that does not exist in SEARCHPRODUCTIMAGEBYID",
		"test_data": {
			"product_id": "3uaah9wv028f",
			"image_id": "135244bc02b1"
		},
		"file_path": "NONE",
		"serial": 10
	},

	{
		"url": "http://localhost:3500/productimages/searchproductimagebyid",
		"test_name": "Test to search for a Product Image in SEARCHPRODUCTIMAGEBYID",
		"test_data": {
			"product_id": "3uaah9wv028f",
			"image_id": "135244bc02b0"
		},
		"file_path": "NONE",
		"serial": 11
	},

	{
		"url": "http://localhost:3500/productimages/deleteproductimage",
		"test_name": "Test to check the response to an empty body in DELETEPRODUCTIMAGE",
		"test_data": {},
		"file_path": "NONE",
		"serial": 12
	},

	{
		"url": "http://localhost:3500/productimages/deleteproductimage",
		"test_name": "Test to check the response to a Product that doesn't exist in DELETEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028g",
			"image_id": "135244bc02b0"
		},
		"file_path": "NONE",
		"serial": 13
	},


	{
		"url": "http://localhost:3500/productimages/deleteproductimage",
		"test_name": "Test to check the response to a Product Image that doesn't exist in DELETEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f",
			"image_id": "135244bc02b1"
		},
		"file_path": "NONE",
		"serial": 14
	},

	{
		"url": "http://localhost:3500/productimages/deleteproductimage",
		"test_name": "Test to delete a Product Image that is the main image in DELETEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f",
			"image_id": "135244bc02b0"
		},
		"file_path": "NONE",
		"serial": 15
	},

	{
		"url": "http://localhost:3500/productimages/deleteproductimage",
		"test_name": "Test to delete a Product Image in DELETEPRODUCTIMAGE",
		"test_data": {
			"product_id": "3uaah9wv028f",
			"image_id": "7950b9d9c03c"
		},
		"file_path": "NONE",
		"serial": 16
	}	
]



list_length = len(product_image_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======PRODUCT IMAGE TEST MENU======")
    for index in range (0, list_length):
        print(str(index + 1) + ". " + product_image_test_data_list[index]['test_name'])

    user_choice = int(input('\nChoose a test to run or press 0 to exit '))

    url = product_image_test_data_list[user_choice - 1]['url']
    test_name = product_image_test_data_list[user_choice - 1]['test_name']
    test_data = product_image_test_data_list[user_choice - 1]['test_data']
    file_path = product_image_test_data_list[user_choice - 1]['file_path']
    serial = product_image_test_data_list[user_choice - 1]['serial']

    file_field_name = 'image'
    
    if user_choice >= 1 and user_choice <= 8:
        print("======CreateProductImage TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("file_path " + str(file_path))
        print("\ntest_data " + str(test_data))

        response = filePostRequests(url=url, data=test_data, file_path=file_path, file_field_name=file_field_name)
        print("\nresponse.status_code ", response.status_code, " response.json() ", response.json())

    elif user_choice >= 9 and user_choice <= 12:
        print("======SearchProductImageByID TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("file_path " + str(file_path))
        print("\ntest_data " + str(test_data))

        response = getRequests(url=url, data=test_data)
        print("\nresponse ", response.text)

    elif user_choice >= 13 and user_choice <= 17:
        print("======DeleteProductImage TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("file_path " + str(file_path))
        print("\ntest_data " + str(test_data))

        response = deleteRequests(url=url, data=test_data)
        print("\nresponse ", response.text)

    else:
        if user_choice != 0:
            print("User choice out of range.")
            continue
        else:
            print("Exiting...")
            break