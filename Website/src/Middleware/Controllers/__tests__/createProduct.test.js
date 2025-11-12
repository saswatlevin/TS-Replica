const { createProduct } = require('../productControllers');
const Product = require('../../Models/Product');
const { checkIsEmptyObject } = require('../SupportFunctions/shippingAddressSupportFunctions');
const checkProduct = require('../SupportFunctions/productSupportFunctions');
const createRandomString = require('../../createRandomString');

// Mock dependencies
jest.mock('../../Models/Product');
jest.mock('../SupportFunctions/shippingAddressSupportFunctions');
jest.mock('../SupportFunctions/productSupportFunctions');
jest.mock('../../createRandomString');

describe('createProduct - Database Insertion Test', () => {
    test('Should successfully insert a new product into the Product collection', async () => {
        // Arrange - Mock all dependencies
        const mockMongoDBId = '64b7f9f4e1b2c8a1d2e3f456';
        const mockProductId = 'abc12r5ghjkl';
        const mockDocType = 'PRODUCT';
        const mockDocumentVersion = 0;

        const req = {
            body: {

                product_name: "The Craftsman Shirt in Bark Plaid Linen",
            
                product_color: "Bark Plaid Linen",
            
                product_description: "Rugged by design, built with comfort in mind. The Craftsman Shirt pairs classic workwear detailing with a breathable cotton-linen canvas that’s made to handle the season’s shifting demands. Durable, dependable, and crafted to keep up for years to come.",
            
                product_price: 128,
            
                product_category: "Upper Garment",
            
                product_subcategory: "Shirt",
            
                product_subcategory_type: "Long-Sleeved Shirt",
            
                product_fit: "Fitted at the chest with a straighter fit through the body. Shorter tail length to be worn untucked. Model is 6'3\", wearing a Medium.",
            
                product_garment_weight: {
                    garment_weight_description: "Your daily driver, at a versatile all-season weight.",
                
                    garment_weight: "Light"
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
                    }
                
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
                ]
            },

            params: {
                product_id: mockProductId
            }
        }

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        };

        const next = jest.fn();

        // Mock support functions
        checkIsEmptyObject.mockReturnValue(false);
        checkProduct.mockResolvedValue(true);
        createRandomString.mockReturnValue(mockProductId);

        const mockRequestBody = { 
            product_id: mockProductId,
            docType: mockDocType, 
            ...req.body 
        };
        
        const mockCreatedProduct = {
            _id: mockMongoDBId,
            product_id: mockProductId,
            docType: mockDocType,
            ...req.body,
            __v: mockDocumentVersion

        };


        Product.create.mockResolvedValue(mockCreatedProduct);

        // Act
        const result = await createProduct(req, res, next);
        await result;
        //console.log("Test result ", result);

        // Assert
        expect(checkIsEmptyObject).toHaveBeenCalledWith(req.body);
        expect(checkProduct).toHaveBeenCalledWith(req, res, next);
        expect(createRandomString).toHaveBeenCalledWith(6);
        expect(Product.create).toHaveBeenCalledWith(mockRequestBody);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockCreatedProduct);



    });
});

