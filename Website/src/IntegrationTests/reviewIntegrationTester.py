from requestFunctions import *

#print("===createReview() TEST SUITE===")
#create_review_url_1 = "http://localhost:3500/reviews/createreview/f6c13bd3c15c"
create_review_set_1 = {
	"product_id": "hjiouyqw0lmt",
	"review_comment": "Excellent oxford. Works great for all seasons",
	"review_rating": 3.8
}

#response_1 = postRequests(create_review_url_1, create_review_set_1)
#print("TEST 1 - Create a Review ", response_1.text)

#create_review_url_2 = "http://localhost:3500/reviews/createreview/d2a986a0cab3"
create_review_set_2 = {
	"product_id": "a6bb1d23bd28",
	"review_comment": "Great fabric and equally great fit. Loved the feels.",
	"review_rating": 4.0
}

#response_2 = postRequests(create_review_url_2, create_review_set_2)
#print("TEST 2 - Create a Review ", response_2.text)

#print("===updateReview() TEST SUITE===")
#update_review_url_1 = "http://localhost:3500/reviews/updatereview/f6c13bd3c15c"

update_review_set_1 = {
	"review_id": "r0hl39wfrxef",
	"product_id": "b0e6v4zl9aih",
	"review_comment": "A good pair of pants"
}

#response_1 = patchRequests(update_review_url_1, update_review_set_1)
#print("TEST 1 - Update a Review (review_comment) ", response_1.text)

update_review_set_2 = {
	"review_id": "r0hl39wfrxef",
	"product_id": "b0e6v4zl9aih",
	"review_rating": 4.0
}

#response_2 = patchRequests(update_review_url_1, update_review_set_2)
#print("TEST 2 - Update a Review (review_rating) ", response_2.text)

#print("===deleteReview() TEST SUITE===")
#delete_review_url_1 = "http://localhost:3500/reviews/deletereview/f6c13bd3c15c"

delete_review_set_1 = {
	"product_id": "b0e6v4zl9aih",
	"review_id": "r0hl39wfrxef" 
}

#response_1 = deleteRequests(delete_review_url_1, delete_review_set_1)
#print("TEST 1 - Delete a Review ", response_1.text)

#print("===searchReview() TEST SUITE===")
#search_review_url_1 = "http://localhost:3500/reviews/searchreview/f6c13bd3c15c"
search_review_set_1 = {
	"review_rating": 3.8
}

#response_1 = getRequests(search_review_url_1, search_review_set_1)
#print("TEST 1 - Search a Review (review_rating) ", response_1.text)

#print("===getReviewById() TEST SUITE===")
#get_review_by_id_url_1 = "http://localhost:3500/reviews/getreviewbyid/f6c13bd3c15c"
get_review_by_id_set_1 = {
	"review_id": "0181f7954b68"
}

#response_1 = getRequests(get_review_by_id_url_1, get_review_by_id_set_1)
#print("TEST 1 - Get a Review By ID ", response_1.text)