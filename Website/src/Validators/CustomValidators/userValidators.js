const z = require('zod');
const customValidators = require('./customFormatValidators');

const zodIsUserId = z.string("The user_id field must be a string. It is a required field.").length(12, { message: "The user_id must be 12 characters long." }).regex(customValidators.twelveCharacterRegex, { message: "The user_id can only contain lowercase letters and numbers." });

const zodIsUserDocType = z.literal("USER", { message: "The docType field is a required field. It takes the value: USER." });

const zodIsFirstName = z.string("The first_name field must be a string.").min(1, { message: "The first_name field is a required field." }).max(100, { message: "The first_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The first_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes." });

const zodIsLastName = z.string("The last_name field must be a string.").min(1, { message: "The last_name field is a required field." }).max(100, { message: "The last_name field has a maximum permitted length of 100 characters." }).regex(customValidators.nameRegex, { message: "The last_name field can only contain uppercase letters, lowercase letters, hyphens and single-quotes." });

const zodIsUserRole = z.enum(["user", "admin"], { message: "The user_role field is a required field. It takes 1 of the following values: user, admin." });

const zodIsEmailCommsType = z.enum(["I want all emails", "One weekly recap", "Stock notifications only", "Never / Unsubscribe"], { message: "The email_comms_type field is a required field. It takes one of the following values: I want all emails, One weekly recap, Stock notifications only or Never / Unsubscribe." });

const zodIsSmsComms = z.boolean("The sms_comms field is a required field. It only accepts boolean values.");

module.exports = {
	zodIsUserId,
	zodIsUserDocType,
	zodIsFirstName,
	zodIsLastName,
	zodIsUserRole,
	zodIsEmailCommsType,
	zodIsSmsComms
};