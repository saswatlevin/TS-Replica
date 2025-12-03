from requestFunctions import *
##====USER API INTEGRATION TESTING====##

#////////////////Create a User////////////////#
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

#create_user_response_1 = postRequests(create_user_url, create_user_set_1)
#print("TEST 1 - Create a User (registerUser) ", create_user_response_1.text)


create_user_set_1a = {
    "email": "abd002@server.com",
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

#create_user_response_1a = postRequests(create_user_url, create_user_set_1a)
#print("TEST 1a - Create a User (registerUser) ", create_user_response_1a.text)


create_user_set_1b = {
    "email": "abe003@server.com",
	"password": "SakuraKai@1982",
	"phone_number": "917349700297",
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

#create_user_response_1b = postRequests(create_user_url, create_user_set_1b)
#print("TEST 1b - Create a User (registerUser) ", create_user_response_1b.text)

create_user_set_1c = {
    "email": "abc001@server.com",
	"password": "SakuraKai@1982",
	"phone_number": "917349700297",
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

#create_user_response_1c = postRequests(create_user_url, create_user_set_1c)
#print("TEST 1c - Create a User (registerUser) ", create_user_response_1c.text)

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

#////////////////Update a User////////////////#
update_user_url = "http://localhost:3500/users/updateuser/f6c13bd3c15c"
update_user_set_1 = {
	"email": "fed004@server.com"
}

#update_user_response_1 = patchRequests(update_user_url, update_user_set_1)
#print("TEST 1 - Update a user (updateUser) ", update_user_response_1.text)

update_user_set_2 = {
	"phone_number": "917548725510"
}

#update_user_response_2 = patchRequests(update_user_url, update_user_set_2)
#print("TEST 2 - Update a user (updateUser) ", update_user_response_2.text)

update_user_set_3 = {
	"first_name": "DEEF"
}

#update_user_response_3 = patchRequests(update_user_url, update_user_set_3)
#print("TEST 3 - Update a user (updateUser) ", update_user_response_3.text)

update_user_set_4 = {
	"last_name": "FEED"
}

#update_user_response_4 = patchRequests(update_user_url, update_user_set_4)
#print("TEST 4 - Update a user (updateUser) ", update_user_response_4.text)

update_user_set_5 = {
	"user_role": "user"
}

#update_user_response_5 = patchRequests(update_user_url, update_user_set_5)
#print("TEST 5 - Update a user (updateUser) ", update_user_response_5.text)

update_user_set_6 = {
	"upper_size_number": 40
}

#update_user_response_6 = patchRequests(update_user_url, update_user_set_6)
#print("TEST 6 - Update a user (updateUser) ", update_user_response_6.text)

update_user_set_7 = {
	"upper_size_letter": "M"
}

#update_user_response_7 = patchRequests(update_user_url, update_user_set_7)
#print("TEST 7 - Update a user (updateUser) ", update_user_response_7.text)

update_user_set_9 = {
	"others_size_letter": "M"
}

#update_user_response_9 = patchRequests(update_user_url, update_user_set_9)
#print("TEST 9 - Update a user (updateUser) ", update_user_response_9.text)

update_user_set_10 = {
	"user_role": "admin",
	"email_comms_type": "Never / Unsubscribe",
	"sms_comms": True
}

#update_user_response_10 = patchRequests(update_user_url, update_user_set_10)
#print("TEST 10 - Update a user (updateUser) ", update_user_response_10.text)

#////////Update User Password////////#
#update_password_url = "http://localhost:3500/users/updateuserpassword/f6c13bd3c15c"
update_user_password_set_1 = {
	"password": "Arzamas16@1962"
}

#update_user_password_response_1 = patchRequests(update_password_url, update_user_password_set_1)
#print("TEST 1 - Update a User Password (updateUserPassword) ", update_user_password_response_1.text)

#////////Get User By Id////////#
#get_user_by_id_url = "http://localhost:3500/users/getuserbyid"
get_user_by_id_set_1 = {
    "user_id": "f6c13bd3c15c"
}

#get_user_by_id_response_1 = getRequests(get_user_by_id_url, get_user_by_id_set_1)
#print("TEST 1 - Get a User By Id ", get_user_by_id_response_1.text)

#/////////Search User By Name/////////#
#search_user_by_name_url = "http://localhost:3500/users/getusersbyname"

search_user_by_name_set_1 = {
    "first_name": "DEEF",
    "last_name": "FEED"
}

#search_user_by_name_response_1 = getRequests(search_user_by_name_url, search_user_by_name_set_1)
#print("TEST 1 - Get a User by Name ", search_user_by_name_response_1.text)