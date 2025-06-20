const z = require('zod');
const customValidators = require('../CustomValidators/customValidators');

const productImageSchema = z.object({
    image_id: customValidators.zodIsTwelveCharacterId,

    image_uri: z.string("The image_uri field must be a string.").min(1, {message: "The image_uri field is a required field."}).max(256, {message: "The image_uri field has a maximum permitted length of 256 characters."}).regex(/^[a-zA-Z]:\\(((?![<>:"/\\|?*]).)+((?<![ .])\\)?)*$/, {message: "The image_uri path must be a valid windows filepath."}),

    main_image: z.boolean("The main_image field must be a boolean value. The main_image field is a required field.")
});

const productImageArraySchema = z.array(productImageSchema);

module.exports = productImageArraySchema;
