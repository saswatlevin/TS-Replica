const mongoose = require('mongoose');

async function addFieldToSubDocuments() {
  await mongoose.connect('mongodb://localhost:27017/taylor_stitch');

  await mongoose.connection.collection('Products').aggregate([
    {
      $addFields: {
        product_items: {
          $map: {
            input: "$product_items",
            as: "subdoc",
            in: {
              $switch: {
                branches: [
                  // Type 2 — identified by inseam_length
                  {
                    case: { $ne: [{ $type: "$$subdoc.inseam_length" }, "missing"] },
                    then: {
                      sku:               "$$subdoc.sku",
                      lower_size_number: "$$subdoc.lower_size_number",
                      inseam_length:     "$$subdoc.inseam_length",
                      total_stock:       "$$subdoc.total_stock",
                      quantity_sold:     "$$subdoc.quantity_sold",
                      quantity_returned: 0,  
                      current_stock:     "$$subdoc.current_stock"
                    }
                  },
                  // Type 3 — identified by upper_size_number
                  {
                    case: { $ne: [{ $type: "$$subdoc.upper_size_number" }, "missing"] },
                    then: {
                      sku:               "$$subdoc.sku",
                      upper_size_letter: "$$subdoc.upper_size_letter",
                      upper_size_number: "$$subdoc.upper_size_number",
                      total_stock:       "$$subdoc.total_stock",
                      quantity_sold:     "$$subdoc.quantity_sold",
                      quantity_returned: 0,
                      current_stock:     "$$subdoc.current_stock"
                    }
                  },
                  // Type 4 — identified by lower_size_letter
                  {
                    case: { $ne: [{ $type: "$$subdoc.lower_size_letter" }, "missing"] },
                    then: {
                      sku:               "$$subdoc.sku",
                      lower_size_letter: "$$subdoc.lower_size_letter",
                      total_stock:       "$$subdoc.total_stock",
                      quantity_sold:     "$$subdoc.quantity_sold",
                      quantity_returned: 0,
                      current_stock:     "$$subdoc.current_stock"
                    }
                  }
                ],
                // Type 1 — default, identified by upper_size_letter alone
                default: {
                  sku:               "$$subdoc.sku",
                  upper_size_letter: "$$subdoc.upper_size_letter",
                  total_stock:       "$$subdoc.total_stock",
                  quantity_sold:     "$$subdoc.quantity_sold",
                  quantity_returned: 0,
                  current_stock:     "$$subdoc.current_stock"
                }
              }
            }
          }
        }
      }
    },
    {
      $merge: {
        into: "Products",
        on: "_id",
        whenMatched: "replace",
        whenNotMatched: "insert"
      }
    }
  ]).toArray();

  console.log('Sub-document aggregation pipeline complete.');
  await mongoose.disconnect();
}

addFieldToSubDocuments();
