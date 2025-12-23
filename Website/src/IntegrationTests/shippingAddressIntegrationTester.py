from requestFunctions import *

##====SHIPPING ADDRESS API INTEGRATION TESTING====##
#print(====createShippingAddress() TEST SUITE====)
create_shipping_address_url_user_1 = "http://localhost:3500/shippingaddresses/createshippingaddress/d2a986a0cab3"

create_shipping_address_set_1 = {
	"address_type_id": "1",
	"company_name": "",
	"address": "6-5-1 Nishi-Shinjuku, Shinjuku-ku",
	"apartment": "Room 2503, Shinjuku I-Land Tower",
	"city": "Tokyo",
	"administrative_division": "Tokyo",
	"country": "Japan",
	"postal_area": "163-1390",
	"phone_number": "81312345678"
}

#response_1 = postRequests(create_shipping_address_url_user_1, create_shipping_address_set_1)
#print("TEST 1 - Create a Shipping Address ", response_1.text)

create_shipping_address_url_user_2 = "http://localhost:3500/shippingaddresses/createshippingaddress/f6c13bd3c15c"
create_shipping_address_set_2 = {
	"address_type_id": "1",
	"company_name": "",
	"address": "617 4th Street",
	"apartment": "Unit 1 (NE)",
	"city": "Canmore",
	"administrative_division": "Alberta",
	"country": "Canada",
	"postal_area": "T1W 2G7",
	"phone_number": "14035551234"
}


#response_2 = postRequests(create_shipping_address_url_user_2, create_shipping_address_set_2)
#print("TEST 2 - Create a Shipping Address ", response_2.text)

create_shipping_address_set_3 = {
	"address_type_id": "1",
	"company_name": "",
	"address": "300 6th Street",
	"apartment": "Unit 3 (E)",
	"city": "Canmore",
	"administrative_division": "Alberta",
	"country": "Canada",
	"postal_area": "T1W 2G7",
	"phone_number": "14035761892"
}

#response_3 = postRequests(create_shipping_address_url_user_2, create_shipping_address_set_3)
#print("TEST 3 - Create a Shipping Address ", response_3.text)

#//////////Update a Shipping Address/////////#
update_shipping_address_url_1 = "http://localhost:3500/shippingaddresses/updateshippingaddress/f6c13bd3c15c"

print("====updateShippingAddress() TEST SUITE====")

update_shipping_address_set_1 = {
	"shipping_address_id": "b953363faea4",
	"address_type_id": "1"
} 

#response_1 = patchRequests(update_shipping_address_url_1, update_shipping_address_set_1)
#print("TEST 1 - Update a Shipping Address (Address Type ID) ", response_1.text)

update_shipping_address_set_2 = {
	"shipping_address_id": "b953363faea4",
	"company_name": "Packard Bay"
} 

#response_2 = patchRequests(update_shipping_address_url_1, update_shipping_address_set_2)
#print("TEST 2 - Update a Shipping Address (Company Name) ", response_2.text)

update_shipping_address_set_3 = {
	"shipping_address_id": "b953363faea4",
	"address": "100 1st Street",
	"apartment": "Unit 1",
	"city": "Camberwell"
} 

#response_3 = patchRequests(update_shipping_address_url_1, update_shipping_address_set_3)
#print("TEST 3 - Update a Shipping Address (Address, Apaprtment, City) ", response_3.text)

#//////////Search for a Shipping Address/////////#
search_shipping_address_url = "http://localhost:3500/shippingaddresses/searchshippingaddress/f0c81fc59083"

#print("====searchShippingAddress() TEST SUITE====")

search_shipping_address_set_1 = {
	"city": "Tokyo",
	"country": "Japan"
}

#response_1 = getRequests(search_shipping_address_url_1, search_shipping_address_set_1)
#print("TEST 1 - Search for a Shipping Address (City, Country) ", response_1.text)

#///////Get shipping Address////#
#print("====getShippingAddress() TEST SUITE====")

get_shipping_address_url_1 = "http://localhost:3500/shippingaddresses/getshippingaddressbyid/a6903c5d1ec0"

get_shipping_address_set_1 = {
	"shipping_address_id": "ba24f924fe34"
}

#response_1 = getRequests(get_shipping_address_url_1, get_shipping_address_set_1)
#print("TEST 1 - Search for a Shipping Address (Shipping_Address_ID) ", response_1.text)

#///////Delete shipping Address//////#

delete_shipping_address_url_1 = "http://localhost:3500/shippingaddresses/deleteshippingaddressbyid/f0c81fc59083"

delete_shipping_address_set_1 = {
	"shipping_address_id": "d4dba979a2af"
}

#response_1 = deleteRequests(delete_shipping_address_url_1, delete_shipping_address_set_1)
#print("TEST 1 - Delete a Shipping Address By Id ", response_1.text)