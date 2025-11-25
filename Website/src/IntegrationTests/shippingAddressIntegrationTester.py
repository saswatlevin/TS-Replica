from requestFunctions import *

##====SHIPPING ADDRESS API INTEGRATION TESTING====##
create_shipping_address_url_user_1 = "http://localhost:3500/shippingaddresses/createshippingaddress/f0c81fc59083"

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

create_shipping_address_url_user_2 = "http://localhost:3500/shippingaddresses/createshippingaddress/a6903c5d1ec0"
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