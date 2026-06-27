from requestFunctions import *

user_test_data_list = [

    {
        "url": "http://localhost:3500/users/registeruser",

        "test_name": "Test to check response to empty object in REGISTERUSER",

        "test_data": {}, 

        "serial": 0
    },

    {
        "url": "http://localhost:3500/users/registeruser",

        "test_name": "Test to check response to duplicate email in REGISTERUSER",

        "test_data": {
            "email": "abc002@server.com",
            "password": "Arkavon@1994",
            "phone_number": "917670848604",
            "first_name": "ABCTwo",
            "last_name": "CBATwo",
            "user_role": "admin",
            "upper_size_number": 40,
            "upper_size_letter": "L",
            "others_size_letter": "L",
            "email_comms_type": "One weekly recap",
            "sms_comms": False,
            "ShippingAddresses": [],
            "CartItems": []
        },

        "serial": 1
    },

    {
        "url": "http://localhost:3500/users/registeruser",

        "test_name": "Test to check response to duplicate phone number in REGISTERUSER",

        "test_data": {  
            "email": "abc004@server.com",
            "password": "Arkavon@1994",
            "phone_number": "917670848604",
            "first_name": "ABCThree",
            "last_name": "CBAThree",
            "user_role": "user",
            "upper_size_number": 38,
            "upper_size_letter": "M",
            "others_size_letter": "M",
            "email_comms_type": "One weekly recap",
            "sms_comms": True,
            "ShippingAddresses": [],
            "CartItems": []
        },

        "serial": 2
    },

    {
        "url": "http://localhost:3500/users/registeruser",

        "test_name": "Test to check response to missing first_name field in REGISTERUSER",

        "test_data": {
            "email": "dbg001@server.com",
            "password": "kAsleir@4ru8008",
            "phone_number": "918298123456",
            "last_name": "GDBOne",
            "user_role": "admin",
            "upper_size_number": 40,
            "upper_size_letter": "L",
            "others_size_letter": "L",
            "email_comms_type": "One weekly recap",
            "sms_comms": False,
            "ShippingAddresses": [],
            "CartItems": []
        },

        "serial": 3
    },

    {
        "url": "http://localhost:3500/users/registeruser",

        "test_name": "Test to create a User in REGISTERUSER",

        "test_data": {
            "email": "els002@server.com",
            "password": "Kurzweil@Ray9229",
            "phone_number": "918297279835",
            "first_name": "ELSTwo",
            "last_name": "SLETwo",
            "user_role": "user",
            "upper_size_number": 40,
            "upper_size_letter": "L",
            "others_size_letter": "L",
            "email_comms_type": "One weekly recap",
            "sms_comms": True,
            "ShippingAddresses": [],
            "CartItems": []
        },

        "serial": 4
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to check response to empty object in UPDATEUSER",

        "test_data": {},

        "serial": 5
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab4",

        "test_name": "Test to check response to user not existing in UPDATEUSER",

        "test_data": {
            "user_role": "admin"
        },

        "serial": 6
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to check response to update existing value with the same value in UPDATEUSER",

        "test_data": {
            "user_role": "user"
        },

        "serial": 7
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the email value in UPDATEUSER",

        "test_data": {
            "email": "abc003@gmail.com"
        },

        "serial": 8
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the phone_number value in UPDATEUSER",

        "test_data": {
            "phone_number": "917285642159"
        },

        "serial": 9
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the first_name value in UPDATEUSER",

        "test_data": {
            "first_name": "JKLOne"
        },

        "serial": 10
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the last_name value in UPDATEUSER",

        "test_data": {
            "last_name": "OneLKJ"
        },

        "serial": 11
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the user_role value in UPDATEUSER",

        "test_data": {
            "user_role": "admin"
        },

        "serial": 12
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the upper_size_number value in UPDATEUSER",

        "test_data": {
            "upper_size_number": 40
        },

        "serial": 13
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the upper_size_letter value in UPDATEUSER",

        "test_data": {
            "upper_size_letter": "M"
        },

        "serial": 14
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the others_size_letter value in UPDATEUSER",

        "test_data": {
            "others_size_letter": "M"
        },

        "serial": 15
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the email_comms_type value in UPDATEUSER",

        "test_data": {
            "email_comms_type": "Stock notifications only"
        },

        "serial": 16
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update the sms_comms value in UPDATEUSER",

        "test_data": {
            "sms_comms": False
        },

        "serial": 17
    },

    {
        "url": "http://localhost:3500/users/updateuser/d2a986a0cab3",

        "test_name": "Test to update multiple values in UPDATEUSER",

        "test_data": {
            "user_role": "user",
            "sms_comms": True,
            "email_comms_type": "One weekly recap"
        },

        "serial": 18
    },

    {
        "url": "http://localhost:3500/users/updateuserpassword/d2a986a0cab3",

        "test_name": "Test to check response to empty object in UPDATEUSERPASSWORD",

        "test_data": {},

        "serial": 19
    },

    {
        "url": "http://localhost:3500/users/updateuserpassword/d2a986a0cab4",

        "test_name": "Test to check response to user not existing in UPDATEUSERPASSWORD",

        "test_data": {
            "password": "aBcd@e001034"
        },

        "serial": 20
    },

    {
        "url": "http://localhost:3500/users/updateuserpassword/d2a986a0cab3",

        "test_name": "Test to check response to update password with the existing value in UPDATEUSERPASSWORD",

        "test_data": {
            "password": "Bcde@f112145"
        },

        "serial": 21
    },

    {
        "url": "http://localhost:3500/users/updateuserpassword/f6c13bd3c15c",

        "test_name": "Test to update the password in UPDATEUSERPASSWORD",

        "test_data": {
            "password": "Kenpeitai@1940"
        },

        "serial": 22
    },

    {
        "url": "http://localhost:3500/users/searchusersbyname",

        "test_name": "Test to check response to empty object in SEARCHUSERSBYNAME",

        "test_data": {},

        "serial": 23
    },

    {
        "url": "http://localhost:3500/users/searchusersbyname",

        "test_name": "Test to search a user by first_name only in SEARCHUSERSBYNAME",

        "test_data": {
            "first_name": "ELSOne"
        },

        "serial": 24
    },

    {
        "url": "http://localhost:3500/users/searchusersbyname",

        "test_name": "Test to search a user by first_name and last_name in SEARCHUSERSBYNAME",

        "test_data": {
            "first_name": "ELSOne",
            "last_name": "SLEOne"
        },

        "serial": 25
    },

    {
        "url": "http://localhost:3500/users/searchusersbyname",

        "test_name": "Test to search a user using only last_name in SEARCHUSERSBYNAME",

        "test_data": {
            "last_name": "SLEOne"
        },

        "serial": 26
    },

    {
        "url": "http://localhost:3500/users/getuserbyid",

        "test_name": "Test to check if an empty object is provided in GETUSERBYID",

        "test_data": {},

        "serial": 27
    },

    {
        "url": "http://localhost:3500/users/getuserbyid",

        "test_name": "Test to search an existing user by id in GETUSERBYID",

        "test_data": {
            "user_id": "d2a986a0cab3"
        },

        "serial": 28
    },

    {
        "url": "http://localhost:3500/users/getuserbyid",

        "test_name": "Test to search a user that doesn't exist by id in GETUSERBYID",

        "test_data": {
            "user_id": "d2a986a0cab4"
        },

        "serial": 29
    },

    {
        "url": "http://localhost:3500/users/deleteuser",

        "test_name": "Test for response to an empty object in DELETEUSER",

        "test_data": {},

        "serial": 30
    },

    {
        "url": "http://localhost:3500/users/deleteuser",

        "test_name": "Test to check the response to a User that does not exist in DELETEUSER",

        "test_data": {
            "user_id": "d2a986a0cab4"
        },

        "serial": 31
    },

    {
        "url": "http://localhost:3500/users/deleteuser",

        "test_name": "Test to delete a user in DELETEUSER",

        "test_data": {
            "user_id": "bce18532d9ff"
        },

        "serial": 32
    },

    {
        "url": "http://localhost:3500/users/loginuser",
        "test_name": "Login Request",
        "test_data": {
            "user_id": "f6c13bd3c15c",
            "password": "Kenpeitai@1940"
        },

        "serial": 33
    },

    {
        "url": "http://localhost:3500/users/logoutuser",
        "test_name": "Logout Request",
        "test_data": {},
        "serial": 34
    }
]

# 1 - 5, registerUser Tests
# 6 - 19, updateUser Tests
# 20 - 24, updateUserPassword Tests
# 25 - 28, searchUserByName Tests
# 27 - 29, getUserById Tests
# 30 - 32, deleteUser Tests


list_length = len(user_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======USER TEST MENU======")
    for index in range (0, list_length):
        print(str(index + 1) + ". " + user_test_data_list[index]['test_name'])

    user_choice = int(input('\nChoose a test to run or press 0 to exit '))

    url = user_test_data_list[user_choice - 1]['url']
    test_name = user_test_data_list[user_choice - 1]['test_name']
    test_data = user_test_data_list[user_choice - 1]['test_data']
    serial = user_test_data_list[user_choice - 1]['serial']


    if user_choice >= 1 and user_choice <= 5:
        print("======RegisterUser TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))
        

        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 6 and user_choice <= 19:
        print("======UpdateUser TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 20 and user_choice <= 23:
        print("======UpdateUserPassword TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 24 and user_choice <= 27:
        print("======SearchUsersByName TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = getRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 28 and user_choice <= 30:
        print("======GetUserById TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = getRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 31 and user_choice <= 33:
        print("======DeleteUser TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = deleteRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice == 34:
        print("=====LoginUser REQUEST=====")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice == 35:
        print("=====LogoutUser REQUEST=====")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")
    
    
    else:
        if user_choice != 0:
            print("User choice out of range.")
            continue
        else:
            print("Exiting...")
            break