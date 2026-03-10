const mongoose = require('mongoose');

async function addFieldToMainDocument() {
  await mongoose.connect('mongodb://localhost:27017/taylor_stitch');

  await mongoose.connection.collection('Orders').aggregate([
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
        order_id: 1,
        user_id: 1,
        docType: 1,
        order_status: 1,
        discount_code: 1,
        discount_percentage: 1,
        discount_amount: 1,
        discounted_total: 1,
        total_price: 1,
        date_created_at: 1,
        date_of_arrival: 1,
        shipping_address: 1,
        order_items: 1
      }
    },
    {
      $merge: {
        into: "Orders",
        on: "_id",                  // match existing documents by _id
        whenMatched: "replace",     // replace the whole document with the new shape
        whenNotMatched: "insert"    // insert if somehow no match is found
      }
    }
  ]).toArray();

  console.log('Main Order Document Aggregation Pipeline Complete.');
  await mongoose.disconnect();
}

addFieldToMainDocument();