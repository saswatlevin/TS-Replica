const mongoose = require('mongoose');

async function addFieldToSubDocuments() {
  await mongoose.connect('mongodb://localhost:27017/taylor_stitch');

  await mongoose.connection.collection('Orders').aggregate([
    {
      $addFields: {
        order_items: {
          $map: {
            input: "$order_items",
            as: "subdoc",
            in: {
              order_item_id:   "$$subdoc.order_item_id",
              product_id:   "$$subdoc.product_id",
              order_item_name: "$$subdoc.order_item_name",
              order_item_price:   "$$subdoc.order_item_price",
              order_item_quantity:  "$$subdoc.order_item_quantity",
              order_item_image_uri: "$$subdoc.order_item_image_uri",
              returned_quantity: 0,
              return_reason: "None",
              return_status: "None"
            }
          }
        }
      }
    },
    {
      $merge: {
        into: "Orders",
        on: "_id",
        whenMatched: "replace",
        whenNotMatched: "insert"
      }
    }
  ]).toArray();

  console.log('Order-Item Subdocument Aggregation Pipeline complete — sub-document field added.');
  await mongoose.disconnect();
}

addFieldToSubDocuments();