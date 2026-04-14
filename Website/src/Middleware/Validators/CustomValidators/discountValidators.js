const z = require('zod');

const zodIsDiscountCode = z.enum(["None", "10PERCENT", "20PERCENT", "30PERCENT", "40PERCENT", "50PERCENT"], {message: "The discount_code field accepts one of the following values: None, 10PERCENT, 20PERCENT, 30PERCENT, 40PERCENT, 50PERCENT. It is a required field."});

const zodIsDiscountPercentage = z.number("The discount_percentage field must be a number (integer).").int("The discount_percentage field must be an integer value.").min(0, {message: "The discount_percentage field only takes integer values. Its minimum limit is 0."}).max(100, {message: "The maximum limit of the discount_percentage field is 100."});

const zodIsDiscountAmount = z.number("The discount_amount field must be a number (integer).").int("The discount_amount field must be an integer value.").min(0, {message: "The discount_amount field only takes integer values. Its minimum limit is 0."}).max(300, {message: "The maximum limit of the discount_amount field is 300."});
    
const zodIsDiscountedTotal = z.number("The discounted_total field must be a number (integer).").int("The discounted_total field must be an integer value.").min(0, {message: "The discounted_total field only takes integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the discounted_total field is 10000."});

const zodIsTotalDiscountAmount = z.number("The total_discount_amount field must be a number (integer).").int("The total_discount_amount must be an integer value.").min(0, {message: "The total_discount_amount field only takes integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the discounted_total field is 10000."});

const zodIsTotalDiscountPercentage = z.number("The total_discount_percentage field must be a number (integer).").int("The total_discount_percentage field must be an integer value.").min(0, {message: "The total_discount_percentage field has a minimum limit of 0"}).max(100, {message: "The total_discount_percentage value has a maximum limit of 100"});

const zodIsTotalDiscountedTotal = z.number("The total_discounted_total field must be a number (integer).").int("The total_discounted_total field must be an integer value.").min(0, {message: "The total_discounted_total field only takes integer values. Its minimum limit is 0."}).max(10000, {message: "The maximum limit of the total_discounted_total field is 10000."});


module.exports = {
	zodIsDiscountCode,
	zodIsDiscountPercentage,
	zodIsDiscountAmount,
	zodIsDiscountedTotal,
	zodIsTotalDiscountAmount,
	zodIsTotalDiscountPercentage,
	zodIsTotalDiscountedTotal
}
