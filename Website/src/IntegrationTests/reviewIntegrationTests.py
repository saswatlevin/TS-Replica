from requestFunctions import *

review_test_data_list = [

    {
        "url": "http://localhost:3500/reviews/createreview/d2a986a0cab3",

        "test_name": "Test to check the response to an empty request in CREATEREVIEW",

        "test_data": {},

        "serial": 0
    },

    {
        "url": "http://localhost:3500/reviews/createreview/d2a986a0cab4",

        "test_name": "Test to check the response to a user that does not exist in CREATEREVIEW",

        "test_data": {
            "product_id": "a6bb1d23bd28",
            "docType": "REVIEW",
            "review_comment": "Great fabric and equally great fit. Loved the feels.",
            "review_rating": 4
        },

        "serial": 1
    },

    {
        "url": "http://localhost:3500/reviews/createreview/d2a986a0cab3",

        "test_name": "Test to check the response to a product that does not exist in CREATEREVIEW",

        "test_data": {
            "product_id": "a6bb1d23bd29",
            "docType": "REVIEW",
            "review_comment": "Great fabric and equally great fit. Loved the feels.",
            "review_rating": 4
        },

        "serial": 2
    },

    {
        "url": "http://localhost:3500/reviews/createreview/d2a986a0cab3",

        "test_name": "Test to check the response to missing docType field in CREATEREVIEW",

        "test_data": {
            "product_id": "a6bb1d23bd28",
            "review_comment": "Great fabric and equally great fit. Loved the feels.",
            "review_rating": 4
        },

        "serial": 3
    },

    {
        "url": "http://localhost:3500/reviews/createreview/d2a986a0cab3",

        "test_name": "Test to check if a user can create more than 1 review for a given product in CREATEREVIEW",

        "test_data": {
            "product_id": "a6bb1d23bd28",
            "docType": "REVIEW",
            "review_comment": "Test review 3.",
            "review_rating": 4
        },

        "serial": 4
    },

    {
        "url": "http://localhost:3500/reviews/createreview/d2a986a0cab3",

        "test_name": "Test to create a review for The Democratic Foundation Pant in Organic Navy using CREATEREVIEW",

        "test_data": {
            "product_id": "b0e6v4zl9aih",
            "docType": "REVIEW",
            "review_comment": "Test review for The Democratic Foundation Pant in Organic Navy",
            "review_rating": 4.5
        },

        "serial": 5
    },

    {
        "url": "http://localhost:3500/reviews/updatereview/d2a986a0cab3",

        "test_name": "Test to check the response to an empty request in UPDATEREVIEW",

        "test_data": {},

        "serial": 6
    },

    {
        "url": "http://localhost:3500/reviews/updatereview/d2a986a0cab4",

        "test_name": "Test to check the response to a user that does not exist in UPDATEREVIEW",

        "test_data": {
            "review_id": "693d3df631b3",
            "product_id": "a6bb1d23bd28",
            "review_comment": "Great fabric and equally great fit. Loved the feels."
        },

        "serial": 7
    },

    {
        "url": "http://localhost:3500/reviews/updatereview/d2a986a0cab3",

        "test_name": "Test to check the response to a product that does not exist in UPDATEREVIEW",

        "test_data": {
            "review_id": "693d3df631b3",
            "product_id": "a6bb1d23bd29",
            "review_comment": "GOOD fabric and equally great fit. Loved the feels."
        },

        "serial": 8
    },

    {
        "url": "http://localhost:3500/reviews/updatereview/d2a986a0cab3",

        "test_name": "Test to check the response to missing product_id field in UPDATEREVIEW",

        "test_data": {
            "review_id": "693d3df631b3",
            "review_comment": "GOOD fabric and equally great fit. Loved the feels."
        },

        "serial": 9
    },

    {
        "url": "http://localhost:3500/reviews/updatereview/d2a986a0cab3",

        "test_name": "Test to update a review_comment in UPDATEREVIEW",

        "test_data": {
            "review_id": "693d3df631b3",
            "product_id": "a6bb1d23bd28",
            "review_comment": "GOOD fabric and equally great fit. Loved the feels."
        },

        "serial": 10
    },

    {
        "url": "http://localhost:3500/reviews/updatereview/d2a986a0cab3",

        "test_name": "Test to update a review_rating in UPDATEREVIEW",

        "test_data": {
            "review_id": "693d3df631b3",
            "product_id": "a6bb1d23bd28",
            "review_rating": 5
        },

        "serial": 11
    },

    {
        "url": "http://localhost:3500/reviews/deletereview/f6c13bd3c15c",

        "test_name": "Test to check the response to an empty object in DELETEREVIEW",

        "test_data": {},

        "serial": 12
    },

    {
        "url": "http://localhost:3500/reviews/deletereview/f6c13bd3c15d",

        "test_name": "Test to check the response to a user that does not exist in DELETEREVIEW",

        "test_data": {
            "review_id": "0181f7954b68",
            "product_id": "hjiouyqw0lmt"
        },

        "serial": 13
    },

    {
        "url": "http://localhost:3500/reviews/deletereview/f6c13bd3c15c",

        "test_name": "Test to check the response to a product that does not exist in DELETEREVIEW",

        "test_data": {
            "review_id": "0181f7954b68",
            "product_id": "hjiouyqw0lms"
        },

        "serial": 14
    },

    {
        "url": "http://localhost:3500/reviews/deletereview/f6c13bd3c15c",

        "test_name": "Test to check the response to a review that does not exist in DELETEREVIEW",

        "test_data": {
            "review_id": "0181f7954b69",
            "product_id": "hjiouyqw0lmt"
        },

        "serial": 15
    },

    {
        "url": "http://localhost:3500/reviews/deletereview/f6c13bd3c15c",

        "test_name": "Test to check the response to missing review_id field in DELETEREVIEW",

        "test_data": {
            "product_id": "hjiouyqw0lmt"
        },

        "serial": 16
    },

    {
        "url": "http://localhost:3500/reviews/deletereview/d2a986a0cab3",

        "test_name": "Test to delete a review in DELETEREVIEW",

        "test_data": {
            
            "product_id": "b0e6v4zl9aih",
            "review_id": "8df8e5041e18"
        },

        "serial": 17
    },

    {
        "url": "http://localhost:3500/reviews/searchreview/d2a986a0cab3",

        "test_name": "Test to check the response to an empty request in SEARCHREVIEW",

        "test_data": {},

        "serial": 18
    },

    {
        "url": "http://localhost:3500/reviews/searchreview/d2a986a0cab4",

        "test_name": "Test to check the response to a user that does not exist in SEARCHREVIEW",

        "test_data": {
            "product_id": "a6bb1d23bd28",
            "review_comment": "GOOD fabric and equally great fit. Loved the feels.",
            "review_rating": 5
        },

        "serial": 19
    },

    {
        "url": "http://localhost:3500/reviews/searchreview/d2a986a0cab3",

        "test_name": "Test to search for a review in SEARCHREVIEW",

        "test_data": {
            "product_id": "a6bb1d23bd28",
            "review_comment": "GOOD fabric and equally great fit. Loved the feels.",
            "review_rating": 5
        },

        "serial": 20
    },

    {
        "url": "http://localhost:3500/reviews/searchreview/d2a986a0cab3",

        "test_name": "Test to search for a review that does not exist in SEARCHREVIEW",

        "test_data": {
            "product_id": "a6bb1d23bd29",
            "review_comment": "GOODCCC fabric and equally great fit. Loved the feels.",
            "review_rating": 4
        },

        "serial": 21
    },

    {
        "url": "http://localhost:3500/reviews/getreviewbyid/d2a986a0cab3",

        "test_name": "Test to check the response to an empty request in GETREVIEWBYID",

        "test_data": {},

        "serial": 22
    },

    {
        "url": "http://localhost:3500/reviews/getreviewbyid/d2a986a0cab3",

        "test_name": "Test to find a review that exists in GETREVIEWBYID",

        "test_data": {
            "review_id": "693d3df631b3"
        },

        "serial": 23
    },

    {
        "url": "http://localhost:3500/reviews/getreviewbyid/d2a986a0cab3",

        "test_name": "Test to find a review that does not exist in GETREVIEWBYID",

        "test_data": {
            "review_id": "693d3df631b4"
        },

        "serial": 24
    }

]

# 0 - 5   CreateReview
# 6 - 11  UpdateReview
# 12 - 17 DeleteReview
# 18 - 21 SearchReview
# 22 - 24 GetReviewById

list_length = len(review_test_data_list)
user_choice = None
url = None
test_name = None
test_data = None
serial = None
response = None

while user_choice != 0:
    user_choice = None
    
    print("======REVIEW TEST MENU======")
    for index in range (0, list_length):
        print(str(index + 1) + ". " + review_test_data_list[index]['test_name'])

    user_choice = int(input('\nChoose a test to run or press 0 to exit '))

    url = review_test_data_list[user_choice - 1]['url']
    test_name = review_test_data_list[user_choice - 1]['test_name']
    test_data = review_test_data_list[user_choice - 1]['test_data']
    serial = review_test_data_list[user_choice - 1]['serial']


    if user_choice >= 1 and user_choice <= 6:
        print("======CreateReview TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))
        

        response = postRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 7 and user_choice <= 12:
        print("======UpdateReview TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = patchRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 13 and user_choice <= 18:
        print("======DeleteReview TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = deleteRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 19 and user_choice <= 22:
        print("======SearchReview TEST======")
        print("Test Number " + str(user_choice))
        print("url " + url)
        print("test_name " + test_name)
        print("serial " + str(serial))
        print("\ntest_data " + str(test_data))

        response = getRequests(url, test_data)
        print("\nresponse " + response.text + "\n")

    elif user_choice >= 23 and user_choice <= 25:
        print("======GetReviewById TEST======")
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