const mongoose = require('mongoose');
const { productResponseSchema } = require('../../productSchemas');

describe('productResponseSchema - HAPPY PATH Tests', () => {
    test('productResponseSchema - HAPPY PATH TEST Set 1', () => {
        // Arrange
        
        const testData = {
  _id: new mongoose.Types.ObjectId("654f1a9b7d2c4e58a3b912de"),        
  product_id: "hya3y1kdhv4p",

  product_name: "The Craftsman Shirt in Bark Plaid Linen",
  
  docType: "PRODUCT",
  
  product_color: "Bark Plaid Linen",
  
  product_description: "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.",
  
  product_price: 128,
  
  product_category: "Upper Garment",
  
  product_subcategory: "Shirt",
  
  product_subcategory_type: "Long-Sleeved Shirt",
  
  product_fit: "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.",
  
  product_garment_weight: {
    garment_weight_description: "Your daily driver, at a versatile all-season weight.",
    garment_weight: "Medium"
  },
  
  product_material: "Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.",
  
  product_supply_type: {
    supply_type_description: "This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.",
    supply_type: "Limited"
  },
  
  product_specifications: "7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China.",
  
  product_images: 
  [
    {
      image_id: "zz6f7oq0fdof",
      image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Craftsman_Shirt\\The_Craftsman_Shirt_in_Bark_Plaid_Linen\\instock_m_q225_craftsman_bark_portrait_001.jpg",
      main_image: true
    },
    
  ],
  
  product_items: 
  [
    {
      sku: "9qjmn3ak0b",
      upper_size_letter: "XXL",
      upper_size_number: 46,
      total_stock: 250,
      quantity_sold: 80,
      current_stock: 170
    }
 ],

 __v: 0
};

    const result = productResponseSchema.safeParse(testData);

    if (result?.error?.issues !== undefined){
        console.log("productResponseSchema - HAPPY PATH TEST Set 1 - result?.error?.issues ", result?.error?.issues);
    }
    
    else {
        console.log("productResponseSchema - HAPPY PATH TEST Set 1 - result ", result);
    }


    // Assert
    expect(result.success).toBe(true);
     
    expect(result.data.product_id).toBe("hya3y1kdhv4p");
    expect(result.data.product_name).toBe("The Craftsman Shirt in Bark Plaid Linen");

    expect(result.data.docType).toBe("PRODUCT");
    expect(result.data.product_color).toBe("Bark Plaid Linen");     

    expect(result.data.product_description).toBe("Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.");
    expect(result.data.product_price).toBe(128);
     
    expect(result.data.product_category).toBe("Upper Garment");
    expect(result.data.product_subcategory).toBe("Shirt");
     
    expect(result.data.product_subcategory_type).toBe("Long-Sleeved Shirt");
    expect(result.data.product_fit).toBe("Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.");

    expect(result.data.product_garment_weight.garment_weight).toBe("Medium");
    expect(result.data.product_garment_weight.garment_weight_description).toBe("Your daily driver, at a versatile all-season weight.");

    expect(result.data.product_material).toBe("Crafted from a mid-weight organic cotton and linen canvas and washed for a soft, lived-in feel. Features classic double chest pockets—complete with a handy pen sleeve—and reinforced with double-needle felled seams for lasting durability.");
     
    expect(result.data.product_supply_type.supply_type_description).toBe("This product is part of a small batch manufacturing run that may use exclusive materials like dead stock fabrics. The product is limited in quantity and may never be in stock again. Limited products are available for immediate shipping.");
    expect(result.data.product_supply_type.supply_type).toBe("Limited");

    expect(result.data.product_specifications).toBe("7-oz. 55% linen, 45% organic cotton canvas. Washed for a soft, lived in feel. Two U-shaped chest pockets with button through flaps. Left pocket features a pen sleeve. Adjustable button cuffs. Double-needle felled construction. Wash cold and lay flat to dry. Made in China.");
     
    expect(result.data.product_items.length).toBe(1);
    expect(result.data.product_images.length).toBe(1);
    
    });


    test('productResponseSchema - HAPPY PATH TEST Set 2', () => {
      const testData = {
        _id: new mongoose.Types.ObjectId("654f1a9b7d2c4e58a3b912de"),
        
        product_id: "vxcei49vin0z",
        
        product_name: "The Division Shirt in Washed Indigo",
        
        docType: "PRODUCT",
        
        product_color: "Washed Indigo",
        
        product_description: "The only thing better than a brand-new shirt is one that’s been around the block and has the wear and tear to prove it. With The Division Shirt, you get the best of both worlds. We’ve given it a thorough garment wash to draw the natural character of this indigo-dyed sashiko finish to the surface, and the harder you wear it, the better it will look.",
        
        product_price: 132,
        
        product_category: "Upper Garment",
        
        product_subcategory: "Shirt",
        
        product_subcategory_type: "Long-Sleeved Shirt",
        
        product_fit: "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'1\", wearing a Medium. Customer says this fits: True to Size.",
        product_garment_weight: {
        
          garment_weight_description: "Toss on over another shirt or make it your first layer on a colder day.",
        
          garment_weight: "Medium to Heavy"
        },
        
        product_material: "This hefty organic cotton sashiko is incredible right out of the box, but it’ll really start to shine after it’s seen some action out in the field. The Division Shirt is finished with our signature California collar, dual-mitered chest pockets, and some handsome burnt corozo buttons.",
        
        product_supply_type: {
          supply_type_description: "This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.",
        
          supply_type: "Limited"
        },
        
        product_specifications: "12.5-oz. 100% organic cotton. Heavily washed to bring out the depth of sashiko-woven indigo yarns. Our signature California collar. Two mitered chest pockets with button through flaps. Left pocket features a pen sleeve. Burnt corozo buttons. Wash cold and tumble dry low. Made in China.",
        
        product_images: [
          {
            image_id: "guq4vjn76q66",
        
            image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Long-Sleeved Shirts\\The_Division_Shirt\\The_Division_Shirt_in_Washed_Indigo\\6757461459021_division-shirt-in-washed-indigo-2301_01_tsio.jpg",
        
            main_image: false
          }
        ],
        product_items: [
          {
            sku: "785r0xzd3p",
        
            upper_size_letter: "XXL",
        
            upper_size_number: 46,
        
            total_stock: 180,
        
            quantity_sold: 78,
        
            current_stock: 102
          }
        ],

        __v: 0
}
    const result = productResponseSchema.safeParse(testData);

    if (result?.error?.issues !== undefined){
        console.log("productResponseSchema - HAPPY PATH TEST Set 2 - result?.error?.issues ", result?.error?.issues);
    }
    
    else {
        console.log("productResponseSchema - HAPPY PATH TEST Set 2 - result ", result);
    }

    expect(result.success).toBe(true);
     
    expect(result.data.product_id).toBe("vxcei49vin0z");
    expect(result.data.product_name).toBe("The Division Shirt in Washed Indigo");   
    
    expect(result.data.docType).toBe("PRODUCT");
    expect(result.data.product_color).toBe("Washed Indigo");        
    
    expect(result.data.product_description).toBe("The only thing better than a brand-new shirt is one that’s been around the block and has the wear and tear to prove it. With The Division Shirt, you get the best of both worlds. We’ve given it a thorough garment wash to draw the natural character of this indigo-dyed sashiko finish to the surface, and the harder you wear it, the better it will look.");
    expect(result.data.product_price).toBe(132);
     
    expect(result.data.product_category).toBe("Upper Garment");
    expect(result.data.product_subcategory).toBe("Shirt");
    
    expect(result.data.product_subcategory_type).toBe("Long-Sleeved Shirt");
    expect(result.data.product_fit).toBe("Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'1\", wearing a Medium. Customer says this fits: True to Size.");
    
    expect(result.data.product_garment_weight.garment_weight).toBe("Medium to Heavy");
    expect(result.data.product_garment_weight.garment_weight_description).toBe("Toss on over another shirt or make it your first layer on a colder day.");
    
    expect(result.data.product_material).toBe("This hefty organic cotton sashiko is incredible right out of the box, but it’ll really start to shine after it’s seen some action out in the field. The Division Shirt is finished with our signature California collar, dual-mitered chest pockets, and some handsome burnt corozo buttons.");
    
    expect(result.data.product_supply_type.supply_type_description).toBe("This product is a Taylor Stitch Essential that we aim to always keep in stock. Essentials are our tried and true products that we wear damn near everyday. If your size is currently out-of-stock, please submit your email address to the “Notify Me” tab. We restock Essentials regularly. In stock sizes are available for immediate shipping.");
    expect(result.data.product_supply_type.supply_type).toBe("Limited");
    
    expect(result.data.product_specifications).toBe("12.5-oz. 100% organic cotton. Heavily washed to bring out the depth of sashiko-woven indigo yarns. Our signature California collar. Two mitered chest pockets with button through flaps. Left pocket features a pen sleeve. Burnt corozo buttons. Wash cold and tumble dry low. Made in China.");
    
    expect(result.data.product_items.length).toBe(1);
    expect(result.data.product_images.length).toBe(1);

    });
});