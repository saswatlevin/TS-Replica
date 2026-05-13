const z = require('zod');

const zodIsDiscountCode = z.enum(["None", "10PERCENT", "20PERCENT", "30PERCENT", "40PERCENT", "50PERCENT"], {message: "The discount_code field accepts one of the following values: None, 10PERCENT, 20PERCENT, 30PERCENT, 40PERCENT, 50PERCENT. It is a required field."});

const zodIsDiscountPercentage = z.number({message: "The discount_percentage field must be a number."
}).min(0, { message: "The discount_percentage field has a minimum limit of 0." }).max(100, { message: "The discount_percentage has a maximum limit of 100."});

const zodIsDiscountAmount = z.number({message: "The discount_amount field must be a number."
}).min(0, { message: "The discount_amount field has a minimum limit of 0."}).max(300, { message: "The discount_amount field has a maximum limit of 300."});

const zodIsDiscountedTotal = z.number({message: "The discounted_total field must be a number."
}).min(0, { message: "The discounted_total field has a minimum limit of 0."}).max(10000, { message: "The discounted_total field has a maximum limit of 10000."});

const zodIsTotalDiscountAmount = z.number({message: "The total_discount_amount must be a number."}).min(0, { message: "The total_discount_amount field has a minimum limit of 0."}).max(10000, { message: "The total_discount_amount has a maximum limit of 10000."});

const zodIsTotalDiscountPercentage = z.number({message: "The total_discount_percentage must be a number."}).min(0, { message: "The total_discount_percentage field has a minimum limit of 0."}).max(100, { message: "The total_discount_percentage field has a maximum limit of 100."});

const zodIsTotalDiscountedTotal = z.number({message: "The total_discounted_total must be a number."}).min(0, { message: "The total_discounted_total field has a minimum limit of 0."}).max(10000, { message: "The total_discounted_total has a maximum limit of 10000."});

module.exports = {
	zodIsDiscountCode,
	zodIsDiscountPercentage,
	zodIsDiscountAmount,
	zodIsDiscountedTotal,
	zodIsTotalDiscountAmount,
	zodIsTotalDiscountPercentage,
	zodIsTotalDiscountedTotal
}
