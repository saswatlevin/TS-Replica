const mongoose = require('mongoose');

async function addFieldToMainDocument() {
  await mongoose.connect('mongodb://localhost:27017/taylor_stitch');

  await mongoose.connection.collection('Products').aggregate([
    {
      $addFields: {
        discount_code: "None",
        discount_percentage: 0,
        discount_amount: 0,
        discounted_total: 0
      }
    },
    
    {
      $project: {
        _id: 1,
        product_id: 1,
        product_name: 1,
        docType: 1,
        product_color: 1,
        product_description: 1,
        product_price: 1,
        discount_code: 1,
        discount_percentage: 1,
        discount_amount: 1,
        discounted_total: 1,
        product_category: 1,
        product_subcategory: 1,
        product_subcategory_type: 1,
        product_fit: 1,
        product_garment_weight: 1,
        product_material: 1,
        product_supply_type: 1,
        product_specifications: 1,
        product_images: 1,
        product_items: 1
      }
    },
    {
      $merge: {
        into: "Products",
        on: "_id",                  // match existing documents by _id
        whenMatched: "replace",     // replace the whole document with the new shape
        whenNotMatched: "insert"    // insert if somehow no match is found
      }
    }
  ]).toArray();

  console.log('Main Product Document Aggregation Pipeline Complete.');
  await mongoose.disconnect();
}

addFieldToMainDocument();