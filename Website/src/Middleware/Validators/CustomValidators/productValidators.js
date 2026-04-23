const z = require('zod');
const customValidators = require('./customFormatValidators');

// Reuse existing product_id validator from custom validators to ensure consistency
const zodIsProductId = z.string("The product_id field must be a string. It is a required field.").length(12, {message: "The product_id must be 12 characters long."}).regex(customValidators.twelveCharacterRegex, {message: "The product_id can only contain lowercase letters and numbers."});

const zodIsProductName = z
	.string('The product_name field must be a string.')
	.min(3, { message: 'The product_name field is a required field. The minimum permitted length is 3 characters.' })
	.max(100, { message: 'The maximum permitted length is 100 characters.' })
	.regex(customValidators.productNameRegex, {
		message:
			'The product_name field accepts only upper case letters, lower case letters, accented uppercase and lowercase letters and spaces.',
	});

const zodIsProductColor = z
	.string('The product_color field must be a string.')
	.min(1, { message: 'The product_color field is a required field.' })
	.max(50, { message: 'The maximum permitted length is 50 characters.' })
	.regex(/^[A-Za-z ]*$/, {
		message:
			'The product_color field can contain only uppercase letters, lowercase letters and spaces. ',
	});

const zodIsProductDescription = z
	.string('The product_description field must be a string.')
	.min(1, { message: 'The product_description field is a required field.' })
	.max(700, {
		message:
			'The product_description field has a maximum permitted length of 700 characters.',
	})
	.regex(customValidators.paragraphRegex, {
		message:
			'The product_description field accepts only uppercase letters, lowercase letters, uppercase accented letters, lowercase accented letters, digits, hashes, exclamation marks, commas, semicolons, colons, percentage symbols, single-quotes, typeset-single-quotes, double-quotes, typeset-double-quotes, backward-slash, brackets, hyphens, long hyphens, dots, and spaces.',
	});

const zodIsProductPrice = z
	.number(
		'The product_price field must be a number (integer). It is a required field.'
	)
	.min(1, { message: 'The product_price field has a minimum limit of 1. ' })
	.max(300, { message: 'The product_price field has a maximum limit of 300.' });

const zodIsProductCategory = z.enum(['Lower Garment', 'Upper Garment'], {
	message:
		'The product_category field accepts only one of the following values: Upper Garment, Lower Garment.',
});

const zodIsProductSubcategory = z.enum(['Shirt', 'Bottom'], {
	message:
		'The product_subcategory field accepts only 1 of 2 values: Shirt, Bottom.',
});

const zodIsSubcategoryType = z.enum(
	[
		'Short-Sleeved Shirt',
		'Long-Sleeved Shirt',
		'Oxford',
		'Chino',
		'Jean',
		'Pant',
		'Short',
	],
	{
		message:
			'The product_subcategory_type field accepts only one of the following values: Short-Sleeved Shirt, Long-Sleeved Shirt, Chino, Jean, Pant, Short.',
	}
);

const zodIsProductFit = z
	.string('The product_fit field must be a string.')
	.min(1, { message: 'The product_fit field is a required field.' })
	.max(400, {
		message:
			'The product_fit field has a maximum permitted length of 400 characters.',
	})
	.regex(customValidators.paragraphRegex, {
		message:
			'The product_fit field accepts only only uppercase letters, lowercase letters, uppercase accented letters, lowercase accented letters, digits, hashes, exclamation marks, commas, semicolons, colons, percentage symbols, single-quotes, typeset-single-quotes, double-quotes, typeset-double-quotes, backward-slash, brackets, hyphens, long hyphens, dots and spaces.',
	});

const zodIsGarmentWeightDescription = z
	.string('The garment_weight_description field must be a string.')
	.min(1, {
		message: 'The garment_weight_description field is a required field.',
	})
	.max(200, {
		message:
			'The maximum permitted length of the garment_weight_description field is 200 characters.',
	})
	.regex(customValidators.paragraphRegex, {
		message:
			'The garment_weight_description field accepts only uppercase letters, lowercase letters, uppercase accented letters, lowercase accented letters, digits, hashes, exclamation marks, commas, semicolons, colons, percentage symbols, single-quotes, typeset-single-quotes, double-quotes, typeset-double-quotes, backward-slash, brackets, hyphens, long hyphens, dots and spaces.',
	});

const zodIsGarmentWeight = z.enum(
	['Light', 'Medium', 'Medium to Heavy', 'Heavy'],
	{
		message:
			'The garment_weight field accepts one of the following values: Light, Medium, Medium-to-Heavy, Heavy.',
	}
);

const zodIsSupplyTypeDescription = z.enum(
	[
		'This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.',
		'This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.',
	],
	{
		message:
			'The supply_type_description field accepts only one of two exact description values: This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping. ,    This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.',
	}
);

const zodIsSupplyType = z.enum(['Essential', 'Limited'], {
	message:
		'The supply_type field accepts one of the following values: Essential, Limited',
});

const zodIsProductSpecifications = z
	.string('The product_specifications field must be a string.')
	.min(1, {
		message: 'The product_specifications field is a required field.',
	})
	.max(500, {
		message:
			'The product_specifications field has a maximum permitted length of 500 characters.',
	})
	.regex(customValidators.paragraphRegex, {
		message:
			'The product_specifications field accepts only only uppercase letters, lowercase letters, uppercase accented letters, lowercase accented letters, digits, hashes, exclamation marks, commas, semicolons, colons, percentage symbols, single-quotes, typeset-single-quotes, double-quotes, typeset-double-quotes, backward-slash, brackets, hyphens, long hyphens, dots and spaces.',
	});

const zodIsProductDocType = z.literal('PRODUCT', {
	message:
		'The docType field in a Product document is set to: PRODUCT.',
});

const zodIsProductMaterial = z
	.string('The product_material field is a string.')
	.min(1, { message: 'The product_material field is a required field.' })
	.max(640, {
		message:
			'The product_material field has a maximum permitted length of 640 characters.',
	})
	.regex(customValidators.paragraphRegex, {
		message:
			'The product_material field accepts only uppercase letters, lowercase letters, uppercase accented letters, lowercase accented letters, digits, hashes, exclamation marks, commas, semicolons, colons, percentage symbols, single-quotes, typeset-single-quotes, double-quotes, typeset-double-quotes, backward-slash, brackets, hyphens, long hyphens, dots and spaces..',
	});

module.exports = {
	zodIsProductId,
	zodIsProductName,
	zodIsProductColor,
	zodIsProductDescription,
	zodIsProductPrice,
	zodIsProductCategory,
	zodIsProductSubcategory,
	zodIsSubcategoryType,
	zodIsProductFit,
	zodIsGarmentWeightDescription,
	zodIsGarmentWeight,
	zodIsSupplyTypeDescription,
	zodIsSupplyType,
	zodIsProductSpecifications,
	zodIsProductMaterial,
	zodIsProductDocType
};