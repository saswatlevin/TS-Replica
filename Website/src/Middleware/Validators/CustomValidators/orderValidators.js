const z = require('zod');

const zodIsOrderId = z.string("The order_id field must be a string. It is a required field.").length(12, {message: "The order_id field must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The order_id field can only contain lowercase letters and digits."});

const zodIsOrderStatus = z.enum(["Pre-Dispatch", "Dispatched", "Arrived", "Cancelled"], {message: "The order_status field accepts one of the following values: Pre-Disptach, Dispatched, Arrived, Cancelled.It is a required field."});

const zodIsTotalOrderPrice = z.number("The total_price field must be a number(integer).").int("The total_price field must be an integer value.").min(1, {message: "The total_price field only takes positive integer values. Its minimum limit is 1."}).max(600, {message: "The maximum limit of the total_price field is 600."});

module.exports = {
	zodIsOrderId,
	zodIsOrderStatus,
	zodIsTotalOrderPrice
} 