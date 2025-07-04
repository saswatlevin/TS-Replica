/*const subDataSchema = z.object({
    subField1: z.number(),
    subField2: z.string(),
});

const subDataSchemaArray = z.array(subDataSchema);

const dataSchema = z.object({
    Field1: z.number(),
    Field2: z.string(),
    Field3: subDataSchemaArray 
});

const dataSchemaArray = z.array(dataSchema);

const testJSON = {
    Field1: 100,
    Field2: "STRING",
    Field3: [{
        subField1: 1000,
        subField2: "A, B, C, D"
    },

    {
        
        subField1: 1000,
        subField2: "A, B, C, D"
    }
    ]
};

const testJSONArray = [
    {
        Field1: 100,
        Field2: "STRING",
        Field3: 
        [
            {
                subField1: 1000,
                subField2: "A, B, C, D"
            },

            {
            
                subField1: 1500,
                subField2: "D, C, B, A"
            }
    
        ]   
    },

    {
        Field1: 200,
        Field2: "STRING2",
        Field3: 
        [
            {
                subField1: 2000,
                subField2: "E, F, G, H"
            },

            {
            
                subField1: 2500,
                subField2: "H, G, F, E"
            }
    
        ]   
    }
];

const result = dataSchemaArray.safeParse(testJSONArray);
console.log("result ", result);
console.log("result?.error?.issues ", result?.error?.issues); 
//console.log(JSON.parse('{"FieldOne": 100, "FieldTwo": "Me"}')); */