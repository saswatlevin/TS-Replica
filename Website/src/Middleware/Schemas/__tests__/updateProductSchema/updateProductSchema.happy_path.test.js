const mongoose = require('mongoose');
const { updateProductSchema } = require('../../productSchemas');

describe('updateProductSchema - HAPPY PATH Tests', () => {
    test('updateProductSchema - HAPPY PATH TEST Set 1', () => {
        // Arrange
        
        const testData = {
  product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
  product_color: "Bark Plaid Linen",
  
  product_description: "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.",
  
  product_category: "Upper Garment",
  
  product_subcategory: "Shirt",
  
  product_subcategory_type: "Long-Sleeved Shirt",
  
  product_fit: "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.",
  
  product_material: "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
  
  product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China."
};

    const result = updateProductSchema.safeParse(testData);

    if (result?.error?.issues !== undefined){
        console.log("updateProductSchema - HAPPY PATH TEST Set 1 - result?.error?.issues ", result?.error?.issues);
    }
    
    else {
        console.log("updateProductSchema - HAPPY PATH TEST Set 1 - result ", result);
    }


    // Assert
    expect(result.success).toBe(true);
     
    
    expect(result.data.product_name).toBe("The Craftsman Shirt in Bark Plaid Linen");

    
    expect(result.data.product_color).toBe("Bark Plaid Linen");     

    expect(result.data.product_description).toBe("Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.");
     
    expect(result.data.product_category).toBe("Upper Garment");
    expect(result.data.product_subcategory).toBe("Shirt");
     
    expect(result.data.product_subcategory_type).toBe("Long-Sleeved Shirt");
    expect(result.data.product_fit).toBe("Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.");

    expect(result.data.product_material).toBe("Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.");
     
    expect(result.data.product_specifications).toBe("7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China.");
    
    });


    test('updateProductSchema - HAPPY PATH TEST Set 2', () => {
        const testData = {
  product_name: "The Division Shirt in Washed Indigo",
  
  product_color: "Washed Indigo",
  
  product_description: "The only thing better than a brand-new shirt is one that’s been around the block and has the wear and tear to prove it. With The Division Shirt, you get the best of both worlds. We’ve given it a thorough garment wash to draw the natural character of this indigo-dyed sashiko finish to the surface, and the harder you wear it, the better it will look.",

  product_category: "Upper Garment",
  
  product_subcategory: "Shirt",
  
  product_subcategory_type: "Long-Sleeved Shirt",
  
  product_fit: "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'1\", wearing a Medium. Customer says this fits: True to Size.",
  
  product_material: "This hefty organic cotton sashiko is incredible right out of the box, but it’ll really start to shine after it’s seen some action out in the field. The Division Shirt is finished with our signature California collar, dual-mitered chest pockets, and some handsome burnt corozo buttons.",
  
  product_specifications: "12.5-oz. 100% organic cotton. Heavily washed to bring out the depth of sashiko-woven indigo yarns. Our signature California collar. Two mitered chest pockets with button through flaps. Left pocket features a pen sleeve. Burnt corozo buttons. Wash cold and tumble dry low. Made in China."
}
    const result = updateProductSchema.safeParse(testData);

    if (result?.error?.issues !== undefined){
        console.log("updateProductSchema - HAPPY PATH TEST Set 2 - result?.error?.issues ", result?.error?.issues);
    }
    
    else {
        console.log("updateProductSchema - HAPPY PATH TEST Set 2 - result ", result);
    }

    expect(result.success).toBe(true);    
    expect(result.data.product_name).toBe("The Division Shirt in Washed Indigo");   
    
    expect(result.data.product_color).toBe("Washed Indigo");        
    
    expect(result.data.product_description).toBe("The only thing better than a brand-new shirt is one that’s been around the block and has the wear and tear to prove it. With The Division Shirt, you get the best of both worlds. We’ve given it a thorough garment wash to draw the natural character of this indigo-dyed sashiko finish to the surface, and the harder you wear it, the better it will look.");
     
    expect(result.data.product_category).toBe("Upper Garment");
    expect(result.data.product_subcategory).toBe("Shirt");
    
    expect(result.data.product_subcategory_type).toBe("Long-Sleeved Shirt");
    expect(result.data.product_fit).toBe("Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'1\", wearing a Medium. Customer says this fits: True to Size.");
    
    expect(result.data.product_material).toBe("This hefty organic cotton sashiko is incredible right out of the box, but it’ll really start to shine after it’s seen some action out in the field. The Division Shirt is finished with our signature California collar, dual-mitered chest pockets, and some handsome burnt corozo buttons.");
    
    expect(result.data.product_specifications).toBe("12.5-oz. 100% organic cotton. Heavily washed to bring out the depth of sashiko-woven indigo yarns. Our signature California collar. Two mitered chest pockets with button through flaps. Left pocket features a pen sleeve. Burnt corozo buttons. Wash cold and tumble dry low. Made in China.");
    
    });
});

