from requestFunctions import *
##====USER API INTEGRATION TESTING====##

#////////////////TEST 1 Create a User////////////////#
create_user_url = "http://localhost:3500/users/registeruser"
create_user_set_1 = {
    "email": "abc001@server.com",
	"password": "SakuraKai@1982",
	"phone_number": "917560847544",
	"first_name": "ABC",
	"last_name": "CBA",
	"user_role": "user",
	"upper_size_number": 44,
	"upper_size_letter": "XL",
	"lower_size_number": 36,
	"others_size_letter": "XL",
	"email_comms_type": "One weekly recap",
	"sms_comms": True,
    "ShippingAddresses": [],
    "CartItems": []
}

create_user_response_1 = postRequests(create_user_url, create_user_set_1)
print("TEST 1 - Create a User (registerUser) ", create_user_response_1.text)

#////////////////TEST 2 Create a User////////////////#
create_user_set_2 = {
    "email": "def001@server.com",
	"password": "DoJinKaiTung@1987",
	"phone_number": "917533468241",
	"first_name": "DEF",
	"last_name": "FED",
	"user_role": "admin",
	"upper_size_number": 42,
	"upper_size_letter": "L",
	"lower_size_number": 34,
	"others_size_letter": "L",
	"email_comms_type": "Never / Unsubscribe",
	"sms_comms": False,
    "ShippingAddresses": [],
    "CartItems": []
}

#create_user_response_2 = postRequests(create_user_url, create_user_set_2)
#print("TEST 2 - Create a User (registerUser) ", create_user_response_2.text)
