/**
 * The $set: { orders: ... } replaces the orders field with a new computed value. We use it instead of the $addFields operator.

 * $map → Iterates over each element in orders
 
 * as: "order" → names the current element
 * $$order → reference to the current element, i.e., $$order is the current array element inside $map, defined by as: "order".

 * The input: { $ifNull: ["$orders", []] } prevents map from failing when orders is null

 * $mergeObjects → Takes the original order object
 * Adds (or overwrites) the total field
 * Keeps all existing fields intact

 * i.e., $mergeObjects keeps existing fields and adds total

 * The $multiply: ["$$order.price", "$$order.quantity"] computes price × quantity, which becomes the "total" field.
 
 * We reuse the computed itemTotal value via a variable using $let.
 
 * "in" is the expression block where you use the variables defined (e.g., in $let or $map) to produce the final value/result.
  
 **/

function buildUpdateCartItemPricePipeline(product_id, product_price) {
  return [
   {
      $set: {
        CartItems: {
          $map: {
            input: { $ifNull: ["$CartItems", []] },
            as: "item",
            in: {
              $cond: [
                { $eq: ["$$item.product_id", product_id] },
                {
                  $mergeObjects: [
                    "$$item",
                    {
                      $let: {
                              vars: {
                                  itemTotal: {
                                    $multiply: [product_price, "$$item.cart_item_quantity"]
                                  },
                                  
                                 discountAmount: {
                                  $multiply: [
                                    product_price,
                                      "$$item.cart_item_quantity",
                                        { $divide: ["$$item.discount_percentage", 100] }
                                      ]
                                    } 
                              },
                      in: {
                        item_total: "$$itemTotal",
                        discount_amount: "$$discountAmount",
                        discounted_total: { $subtract: ["$$itemTotal", "$$discountAmount"] }                        
                      }
                    }
                  }
                ]
                },
                "$$item"
              ]
            }
          }
        }
      }
    }
 ]
}

function buildUpdateCartItemDiscountPipeline(product_id, discount_code, discount_percentage) {
  return [
   {
      $set: {
        CartItems: {
          $map: {
            input: { $ifNull: ["$CartItems", []] },
            as: "item",
            in: {
              $cond: [
                { $eq: ["$$item.product_id", product_id] },
                {
                  $mergeObjects: [
                    "$$item",
                    {
                      $let: {
                              vars: {
                                discountAmount: {
                                  $multiply: [
                                    "$$item.item_total",
                                      { $divide: [discount_percentage, 100] }
                                  ]
                                }
                              },
                      in: {
                        discount_code: discount_code,
                        discount_percentage: discount_percentage,
                        discount_amount: "$$discountAmount",
                        discounted_total: { $subtract: ["$$item.item_total", "$$discountAmount"] }                        
                      }
                    }
                  }
                ]
                },
                "$$item"
              ]
            }
          }
        }
      }
    }
 ]
}

function buildSingleUserCartItemTotalsUpdatePipeline() {

  return  [
                {
                    $set: {

                        total_item_total: {
                            $sum: "$CartItems.item_total"
                        },

                        total_discount_amount: {
                            $sum: "$CartItems.discount_amount"
                        },

                        total_discounted_total: {
                            $sum: "$CartItems.discounted_total"
                        }
                    }
                },

                {
                    $set: {

                        total_discount_percentage: {
                            $cond: [
                                { $eq: ["$total_item_total", 0] },
                                0,
                                {
                                    $multiply: [
                                        {
                                            $divide: [
                                                "$total_discount_amount",
                                                "$total_item_total"
                                            ]
                                        },
                                        100
                                    ]
                                }
                            ]
                        },

                        total_payable_amount: {
                            $subtract: [
                                "$total_item_total",
                                "$total_discount_amount"
                            ]
                        }
                    }
                }
            ]
};

function buildMultiUserCartItemTotalsUpdatePipeline() {
  return [
                {
                    $set: {

                        total_item_total: {
                            $sum: "$CartItems.item_total"
                        },

                        total_discount_amount: {
                            $sum: "$CartItems.discount_amount"
                        },

                        total_discounted_total: {
                            $sum: "$CartItems.discounted_total"
                        }
                    }
                },

                {
                    $set: {

                        total_discount_percentage: {
                            $cond: [
                                { $eq: ["$total_item_total", 0] }, 0,
                                {
                                    $multiply: [
                                        {
                                            $divide: [
                                                "$total_discount_amount",
                                                "$total_item_total"
                                            ]
                                        },
                                        100
                                    ]
                                }
                            ]
                        },

                        total_payable_amount: {
                            $subtract: [
                                "$total_item_total",
                                "$total_discount_amount"
                            ]
                        }
                    }
                }
            ]
};

module.exports = { 
  buildUpdateCartItemPricePipeline,
  buildUpdateCartItemDiscountPipeline,
  buildSingleUserCartItemTotalsUpdatePipeline,
  buildMultiUserCartItemTotalsUpdatePipeline
};