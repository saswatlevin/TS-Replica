from requestFunctions import *

shipping_address_test_data_list = [

    {

        "url": "http://localhost:3500/shippingaddresses/createshippingaddress/d2a986a0cab3",

        "test_name": "Test to check response to empty object in CREATESHIPPINGADDRESS",

        "test_data": {},

        "serial": 0
    },

    {
        "url": "http://localhost:3500/shippingaddresses/createshippingaddress/d2a986a0cab4",

        "test_name": "Test to check response to a user that does not exist in CREATESHIPPINGADDRESS",

        "test_data": {
            "address_type_id": "1",
            "company_name": "DEF Company",
            "address": "425 Market Street",
            "apartment": "Suite 1204",
            "city": "San Francisco",
            "administrative_division": "California",
            "country": "United States",
            "postal_area": "94105",
            "phone_number": "14155550123"
        },

        "serial": 1
    },

    {
        "url": "http://localhost:3500/shippingaddresses/createshippingaddress/d2a986a0cab3",

        "test_name": "Test to check response to creating an address that already exists in CREATESHIPPINGADDRESS",

        "test_data": {
            "address_type_id": "1",
            "company_name": "ABC Company",
            "address": "400 Walkers Street",
            "apartment": "Suite 1216",
            "city": "New York",
            "administrative_division": "New York",
            "country": "United States",
            "postal_area": "94106",
            "phone_number": "14155550123"
        },

        "serial": 2
    },

    {
        "url": "http://localhost:3500/shippingaddresses/createshippingaddress/d2a986a0cab3",

        "test_name": "Test to check response to an address with a missing city field in CREATESHIPPINGADDRESS",

        "test_data": {
            "address_type_id": "1",
            "company_name": "DEF Company",
            "address": "425 Market Street",
            "apartment": "Suite 1204",
            "administrative_division": "California",
            "country": "United States",
            "postal_area": "94105",
            "phone_number": "14155550123"
        },

        "serial": 3
    },

    {
        "url": "http://localhost:3500/shippingaddresses/createshippingaddress/d2a986a0cab3",

        "test_name": "Test to create a shipping address in CREATESHIPPINGADDRESS",

        "test_data": {
            "address_type_id": "1",
            "company_name": "GHI Company",
            "address": "428 Market Street",
            "apartment": "Suite 1204",
            "city": "San Francisco",
            "administrative_division": "California",
            "country": "United States",
            "postal_area": "94105",
            "phone_number": "14155550124"
        },

        "serial": 4
    },


    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to check response to empty object in UPDATESHIPPINGADDRESS",

        "test_data": {},

        "serial": 5
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab4",

        "test_name": "Test to check response to a user that doesn't exist in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "apartment": "Suite 1208"
        },

        "serial": 6
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to update the address_type_id of a ShippingAddress in UPDATESHIPPINGADDRESS",

        "test_data": {

            "shipping_address_id": "85bb09eb7654",
            "address_type_id": "1"
        },

        "serial": 7
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to update the company_name of a ShippingAddress in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "company_name": "ABCD Company"
        },

        "serial": 8
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to update the address of a ShippingAddress in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "address": "410 Walkers STREET"
        },

        "serial": 9
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to update the apartment of a ShippingAddress in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "apartment": "Suite 1220"
        },

        "serial": 10
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to update the city of a ShippingAddress in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "city": "New York City"
        },

        "serial": 11
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to update the administrative_division of a ShippingAddress in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "administrative_division": "New York"
        },

        "serial": 12
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to check the response when country is updated with an existing value in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "country": "United States"
        },

        "serial": 13
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to update the postal_address of a ShippingAddress in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "postal_area": "94110"
        },

        "serial": 14
    },

    {
        "url": "http://localhost:3500/shippingaddresses/updateshippingaddress/d2a986a0cab3",

        "test_name": "Test to update the phone_number of a ShippingAddress in UPDATESHIPPINGADDRESS",

        "test_data": {
            "shipping_address_id": "85bb09eb7654",
            "phone_number": "14155550126"
        },

        "serial": 15
    },

    {
    	"url": "http://localhost:3500/shippingaddresses/deleteshippingaddressbyid/d2a986a0cab3",

    	"test_name": "Test to check response to empty object in DELETESHIPPINGADDRESS",

    	"test_data": {},

    	"serial": 16
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/deleteshippingaddressbyid/d2a986a0cab4",

    	"test_name": "Test to check the response to a user that does not exist in DELETESHIPPINGADDRESS",

    	"test_data": {
        	"shipping_address_id": "5c46b626c934"
    	},

    	"serial": 17
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/deleteshippingaddressbyid/d2a986a0cab3",

    	"test_name": "Test to check the response to a Shipping Address that does not exist in DELETESHIPPINGADDRESS",

    	"test_data": {
        	"shipping_address_id": "5c46b626c935"
    	},

    	"serial": 18
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/deleteshippingaddressbyid/d2a986a0cab3",

    	"test_name": "Test to delete a Shipping Address in DELETESHIPPINGADDRESS",

    	"test_data": {
        	"shipping_address_id": "46ad51574d5e"
    	},

    	"serial": 19
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to check response to empty object in SEARCHSHIPPINGADDRESS",

    	"test_data": {},

    	"serial": 20
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab4",

    	"test_name": "Test to check response to a user that does not exist in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"shipping_address_id": "5c46b626c934"
    	},

    	"serial": 21
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search for a shipping_address using shipping_address_id in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"shipping_address_id": "5c46b626c934"
    	},

    	"serial": 22
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search for a shipping_address using address_type_id in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"address_type_id": "1"
    	},

    	"serial": 23
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search for a shipping_address using company_name in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"company_name": "ABC Company"
    	},

    	"serial": 24
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search for a shipping_address using address in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"address": "410 Walkers STRAAT"
    	},

    	"serial": 25
	},

 	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search for a shipping_address using apartment in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"apartment": "Suite 1220"
    	},

    	"serial": 26
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search a shipping_address using city in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"city": "New York City"
    	},

    	"serial": 27
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search a shipping_address using administrative_division in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"administrative_division": "New York"
    	},

    	"serial": 28
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search a shipping_address using country in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"country": "United States"
    	},

    	"serial": 29
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search a shipping_address using postal_area in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"postal_area": "94110"
    	},

    	"serial": 30
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/searchshippingaddress/d2a986a0cab3",

    	"test_name": "Test to search a shipping_address using multiple fields in SEARCHSHIPPINGADDRESS",

    	"test_data": {
        	"apartment": "Suite 1220",
        	"city": "New York City",
        	"administrative_division": "New York"
    	},

    	"serial": 31
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/getshippingaddressbyid/d2a986a0cab3",

    	"test_name": "Test to check response to empty object in GETSHIPPINGADDRESSBYID",

    	"test_data": {},

    	"serial": 32
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/getshippingaddressbyid/d2a986a0cab4",

    	"test_name": "Test to check response to a user that does not exist in GETSHIPPINGADDRESSBYID",

    	"test_data": {
        	"shipping_address_id": "85bb09eb7654"
    	},

    	"serial": 33
	},

	{
    	"url": "http://localhost:3500/shippingaddresses/getshippingaddressbyid/d2a986a0cab3",

    	"test_name": "Test to find a ShippingAddress in GETSHIPPINGADDRESSBYID",

    	"test_data": {
        	"shipping_address_id": "85bb09eb7654"
    	},

    	"serial": 34
	}

]

# 0 to 4  -> createShippingAddress
# 5 to 15 -> updateShippingAddress
# 16 to 19 -> deleteShippingAddress
# 20 to 31 -> searchShippingAddress
# 32 to 34 -> getShippingAddressById

list_length = len(shipping_address_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======SHIPPINGADDRESS TEST MENU======")
    for index in range (0, list_length):
        print(str(index + 1) + ". " + shipping_address_test_data_list[index]['test_name'])

    user_choice = int(input('\nChoose a test to run or press 0 to exit '))

    url = shipping_address_test_data_list[user_choice - 1]['url']
    test_name = shipping_address_test_data_list[user_choice - 1]['test_name']
    test_data = shipping_address_test_data_list[user_choice - 1]['test_data']
    serial = shipping_address_test_data_list[user_choice - 1]['serial']


    if user_choice >= 1 and user_choice <= 5:
        print("======CreateShippingAddress TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))
        

        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 6 and user_choice <= 16:
        print("======UpdateShippingAddress TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 17 and user_choice <= 20:
        print("======DeleteShippingAddress TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = deleteRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 21 and user_choice <= 32:
        print("======SearchShippingAddress TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = getRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 33 and user_choice <= 35:
        print("======GetShippingAddressById TEST======")
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