const testUserDataFull = {
    user_id: "7ycthivdrqvl",
    docType: "USER", 
    date_created_at: "2025-05-10T20:00:00Z",
    email: "abc001@server.com",
    password: "$argon2id$v=19$m=65536,t=3,p=4$wgFfiRKZebEqD1vfmk1Kxg$lr00L61MijtqvchnG6F2FS2euk9G9cIpvbLI+gZrQC8",
    phone_number: "91123456789",
    first_name: "ABC",
    last_name: "CBA",
    user_role: "user",
    upper_size_number: 44,
    upper_size_letter: "XL",
    lower_size_number: 36,
    others_size_letter: "XL",
    email_comms_type: "One weekly recap",
    sms_comms: true,
    ShippingAddresses: [
        {
            shipping_address_id: "koplasqwegmk",
            address_type_id: "1",
            company_name: "",
            address: "800 Wilson Way",
            apartment: "Fosters Home For Imaginary Friends",
            city: "New York",
            administrative_division: "New York",
            country: "United States",
            postal_area: "10011",
            phone_number: "+1-212-456-7890"
        },
        
        {	
            shipping_address_id: "1ko0muljhytd",
            address_type_id: "1",
            company_name: "",
            address: "1234 Ocean Drive",
            apartment: "",
            city: "Miami Beach",
            administrative_division: "Florida",
            country: "United States",
            postal_area: "33139",
            phone_number: "+1-212-456-7890"
        }
    ],
    CartItems: [
        {
            cart_item_id: "gmzz5mseobth",
            product_id: "b0e6v4zl9aih",
            sku: "ygiy8ngzbm",
            cart_item_name: "The Apres Short in Navy Linen Tweed",
            cart_item_image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Shorts\\The_Apres_Short_in_Navy_Linen_Tweed\\instock_m_q225_The_Apres_Short-NavyLinenTweed_portrait_004.jpg",
            cart_item_quantity: 3
        },
        {
            cart_item_id: "6ibtbw7j38eh",
            product_id: "ojvs7hjfihgc",
            sku: "cdwrbvcp2r",
            cart_item_name: "The Painter Pant in Seeded Natural Chipped Canvas",
            cart_item_image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Pants\\The_Painter_Pant_in_Seeded_Natural_Chipped_Canvas\\instock_m_q225_The_Painter_Pant-SeededNaturalChippedCanvas_portrait_001.jpg",
            cart_item_quantity: 1
        },
        {
            cart_item_id: "rqsqfusfuu24",
            product_id: "u9yl6odhiget",
            sku: "xael8ujrjh",
            cart_item_name: "The Button Down Polo in Cilantro Herringbone",
            cart_item_image_uri: "C:\\Users\\saswa\\OneDrive\\Desktop\\Taylor_Stitch\\Website\\ActualData\\Short-Sleeved Shirts\\The_Button_Down_Polo\\The_Button_Down_Polo_in_Cilantro_Herringbone\\instock_m_q225_buttondown_cilantro_portrait_001.jpg",
            cart_item_quantity: 2
        }
    ]
};

const testUserData = { 
    user_id: "7ycthivdrqvl",
    docType: "USER", 
    date_created_at: "2025-05-10T20:00:00",
    email: "abc001@server.com",
    password: "$argon2id$v=19$m=65536,t=3,p=4$wgFfiRKZebEqD1vfmk1Kxg$lr00L61MijtqvchnG6F2FS2euk9G9cIpvbLI+gZrQC8",
    phoneno: "0123456789",
    first_name: "ABC",
    last_name: "CBA",
    user_role: "user",
    upper_size_number: 44,
    upper_size_letter: "XL",
    lower_size_number: 36,
    others_size_letter: "XL",
    email_comms_type: "One weekly recap",
    sms_comms: true,
    ShippingAddresses: [],
    CartItems: []
};

module.exports = {
    testUserData,
    testUserDataFull
};