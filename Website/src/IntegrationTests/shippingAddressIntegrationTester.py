from requestFunctions import *

##====SHIPPING ADDRESS API INTEGRATION TESTING====##
#create_shipping_address_url_user_1 = "http://localhost:3500/shippingaddresses/createshippingaddress/d2a986a0cab3"

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

#create_shipping_address_response_1 = postRequests(create_shipping_address_url_user_1, create_shipping_address_set_1)
#print("TEST 1 - Create a shipping address (createShippingAddress) ", create_shipping_address_response_1.text)

#create_shipping_address_url_user_2 = "http://localhost:3500/shippingaddresses/createshippingaddress/f6c13bd3c15c"
create_shipping_address_set_2a = {
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


#create_shipping_address_response_2a = postRequests(create_shipping_address_url_user_2, create_shipping_address_set_2a)
#print("TEST 2a - Create a shipping address (createShippingAddress) ", create_shipping_address_response_2a.text)

create_shipping_address_set_2b = {
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

#create_shipping_address_response_2b = postRequests(create_shipping_address_url_user_2, create_shipping_address_set_2b)
#print("TEST 2b - Create a shipping address (createShippingAddress) ", create_shipping_address_response_2b.text)

#//////////Update a Shipping Address/////////#
#update_shipping_address_url = "http://localhost:3500/shippingaddresses/updateshippingaddress/a6903c5d1ec0/ba24f924fe34"
update_shipping_address_set_3a = {
	"address_type_id": "2"
} 

#update_shipping_address_response_3a = patchRequests(update_shipping_address_url, update_shipping_address_set_3a)
#print("TEST 3a - Update Shipping Address Set 3a ", update_shipping_address_response_3a.text)

update_shipping_address_set_3b = {
	"company_name": "Hewlett Packard"
} 

#update_shipping_address_response_3b = patchRequests(update_shipping_address_url, update_shipping_address_set_3b)
#print("TEST 3b - Update Shipping Address Set 3b ", update_shipping_address_response_3b.text)

update_shipping_address_set_3c = {
	"address": "6-5-2 Nishi-Shinjuku, Shinjuku-ku",
	"apartment": "Room 1000, Shinjuku I-Land Tower",
	"city": "Tokyo"
} 

#update_shipping_address_response_3c = patchRequests(update_shipping_address_url, update_shipping_address_set_3c)
#print("TEST 3c - Update Shipping Address Set 3c ", update_shipping_address_response_3c.text)

#//////////Search for a Shipping Address/////////#
#search_shipping_address_url = "http://localhost:3500/shippingaddresses/searchshippingaddress/f0c81fc59083"
search_shipping_address_set_1 = {
	"city": "Tokyo",
	"country": "Japan"
}

#search_shipping_address_response_1 = getRequests(search_shipping_address_url, search_shipping_address_set_1)
#print("TEST 1 - Search Shipping Address Set 1 ", search_shipping_address_response_1.text)

#///////Get shipping Address////#
#get_shipping_address_url = "http://localhost:3500/shippingaddresses/getshippingaddressbyid/a6903c5d1ec0"
get_shipping_address_set_1 = {
	"shipping_address_id": "ba24f924fe34"
}

#get_shipping_address_response_1 = getRequests(get_shipping_address_url, get_shipping_address_set_1)
#print("TEST 1 - Get Shipping Address By Id Set 1 ", get_shipping_address_response_1.text)

#///////Delete shipping Address//////#
#delete_shipping_address_url = "http://localhost:3500/shippingaddresses/deleteshippingaddressbyid/f0c81fc59083"
delete_shipping_address_set_1 = {
	"shipping_address_id": "d4dba979a2af"
}
#delete_shipping_address_response_1 = deleteRequests(delete_shipping_address_url, delete_shipping_address_set_1)
#print("TEST 1 - Delete Shipping Address By Id Set 1 ", delete_shipping_address_response_1.text)