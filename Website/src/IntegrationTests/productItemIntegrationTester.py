from requestFunctions import *

#print("===createProductItem() TEST SUITE===")
#create_product_item_url = "http://localhost:3500/productitems/createproductitem"

create_product_item_set_1 = {
	"product_id": "a6bb1d23bd28",
	"upper_size_letter": "XL",
    "upper_size_number": 46,
    "total_stock":  100,
    "quantity_sold": 80,
    "quantity_returned": 0,
    "current_stock": 20
}

#response_1 = postRequests(create_product_item_url, create_product_item_set_1)
#print("TEST 1 - Create a Product Item ", response_1.text)

#print("===updateProductItem() TEST SUITE===")
#update_product_item_url = "http://localhost:3500/productitems/updateproductitem"

update_product_item_set_1 = {
    "product_id": "a6bb1d23bd28",
    "sku": "816cc0707f",
    "upper_size_letter": "L"

}

#response_1 = patchRequests(update_product_item_url, update_product_item_set_1)
#print("TEST 1 - Update a Product Item upper_size_letter ", response_1.text)

update_product_item_set_2 = {
    "product_id": "a6bb1d23bd28",
    "sku": "816cc0707f",
    "upper_size_number": 44
}

#response_2 = patchRequests(update_product_item_url, update_product_item_set_2)
#print("TEST 2 - Update a Product Item upper_size_number ", response_2.text)

update_product_item_set_3 = {
    "product_id": "a6bb1d23bd28",
    "sku": "816cc0707f",
    "total_stock": 90
}

#response_3 = patchRequests(update_product_item_url, update_product_item_set_3)
#print("TEST 3 - Update a Product Item total_stock ", response_3.text)


update_product_item_set_4 = {
    "product_id": "a6bb1d23bd28",
    "sku": "816cc0707f",
    "quantity_sold": 70
}

#response_4 = patchRequests(update_product_item_url, update_product_item_set_4)
#print("TEST 4 - Update a Product Item quantity_sold ", response_4.text)

update_product_item_set_5 = {
    "product_id": "a6bb1d23bd28",
    "sku": "816cc0707f",
    "current_stock": 10
}

#response_5 = patchRequests(update_product_item_url, update_product_item_set_5)
#print("TEST 5 - Update a Product Item current_stock ", response_5.text)

#print("===deleteProductItem() TEST SUITE===")
#delete_product_item_url = "http://localhost:3500/productitems/deleteproductitem"
delete_product_item_set_1 = {
    "product_id": "a6bb1d23bd28",
    "sku": "816cc0707f",
}

#response_1 = deleteRequests(delete_product_item_url, delete_product_item_set_1)
#print("TEST 1 - Delete a Product Item ", response_1.text)

#print("===searchProductItem() TEST SUITE===")
#search_product_item_url = "http://localhost:3500/productitems/searchproductitem"
search_product_item_set_1 = {
    "product_id": "a6bb1d23bd28"
}

#response_1 = getRequests(search_product_item_url, search_product_item_set_1)
#print("TEST 1 - Search a Product Item ", response_1.text)

search_product_item_set_2 = {
    "product_id": "a6bb1d23bd29"
}

#response_2 = getRequests(search_product_item_url, search_product_item_set_2)
#print("TEST 2 - Search a Product Item ", response_2.text)

#print("===getProductItem() TEST SUITE===")
#get_product_item_url = "http://localhost:3500/productitems/getproductitem"

get_product_item_set_1 = {
    "product_id": "a6bb1d23bd28",
    "sku": "4565314a71"
}

#response_1 = getRequests(get_product_item_url, get_product_item_set_1)
#print("TEST 1 - Get a Product Item ", response_1.text)

get_product_item_set_2 = {
    "product_id": "a6bb1d23bd29",
    "sku": "4565314a72"
}

#response_2 = getRequests(get_product_item_url, get_product_item_set_2)
#print("TEST 2 - Get a Product Item ", response_2.text)