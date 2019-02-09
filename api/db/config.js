const db = {
    url="mongodb://localhost:27017/bigb"
}

module.exports= db;





[
    {  "categoryId":"1",
    "categoryName":"Fruits & vegetables",
    "subcategory":[{
    "subcategoryId":"1a",
    "subcategoryName":"Fruits Vegetables",
    "products":[
    
    { 
     "productId":"11",
    "productName":"Potato & Onions",
  
    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":{
        "description":"lsdjlfsdkjflsdflsdlfsdkljflsdf",
        "benefitsAndUses":"dlsjfldsjflsdjlfsdkfjldsjfsl",
        "priceAndAmount":[
        { "amount":"3", "suffix":"kg", "price":"50", "discount":"5%"
        },
        { "amount":"5", "suffix":"kg", "price":"70", "discount":"5%"
        },
        { "amount":"10", "suffix":"kg", "price":"100", "discount":"5%"
        }]
        },
        "imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"23","subproductName":"Washington Onion","info":"4","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"24","subproductName":"Alebela Onion","info":"6","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"25","subproductName":"Washington Potato","info":"7","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"26","subproductName":"Alebela Potato","info":"7","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
    
    ]},{
     "productId":"12",
    "productName":"Cucumber & Capsicum",
    "subProducts":[
    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"22","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"28","subproductName":"Washington Onion","info":"4","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"29","subproductName":"Alebela Onion","info":"6","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"30","subproductName":"Washington Potato","info":"7","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]},
    {"subproductId":"31","subproductName":"Alebela Potato","info":"7","imageUrl":[{"index":"1" ,"uri":"http://www.bite.co.nz/images/recipes/Generic_Tomatoes1.jpg?width=1200&height=800&upscale=false"},{ "index":"1", "uri":"http://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/4w/46/p04w46sp.jpg"}]}
    
    ]},
    {
         "productId":"13",    
        "productName":"Beans, Brinjals & Okra",
        "subProducts":[{"subproductId":"32","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"34","subproductName":"Alebela Onion","info":"68"},
        {"subproductId":"35","subproductName":"Washington Potato","info":"77"},
        {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
        
        ]},
    
        { "productId":"14",
            "productName":"Root Vegetables",
           
            "subProducts":[{"subproductId":"37","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"38","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"39","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"40","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"41","subproductName":"Alebela Potato","info":"7"}
            
            ]},
        
    {
     "productId":"15",
        "productName":"Beans, Brinjals & Okra",
       
        "subProducts":[{"subproductId":"42","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"43","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"44","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"45","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"46","subproductName":"Alebela Potato","info":"7"}
        
        ]},
    
        {
          "productId":"16",
            "productName":"Beans, Brinjals & Okra",
          
            "subProducts":[{"subproductId":"4","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
            
            ]}]
    },
    {
        "subcategoryId":"1b",
        "subcategoryName":"Herbal And Seasoning",
        "products":[
        
        {
          "productId":"17",
          
        "productName":"Lemon , Ginger & Garlic",
      
        "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
        
        ]},{
         "productId":"18",
        "productName":"Indian & Exotic Herb",
       
        "subProducts":[
        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
        
        ]}]
        },
        {
            "subcategoryId":"1c",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
             "productId":"19",
            "productName":"Banana, Sapota & Papaya",
           
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
            
             "productId":"20",
            "productName":"Kiwi, Melon, Citrus Fruit",
           
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
             "productId":"21", 
                "productName":"Banana, Sapota & Papaya",
               
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                   "productId":"22",
                "productName":"Kiwi, Melon, Citrus Fruit",
             
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                 "productId":"23",
                    "productName":"Banana, Sapota & Papayaui",
                   
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                      "productId":"24",
                    "productName":"Mangoes",
                  
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                      "productId":"25",
                        "productName":"Fruit Baskets",
                      
                        "subProducts":[
                        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                        
                        ]}
            ]
            },
  {
            "subcategoryId":"1d",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
            "productId":"26",
            "productName":"Very Fresh Banana, Sapota & Papaya",
            
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
                 "productId":"27",
            "productName":"Kiwi,lll Melon, Citrus Fruit",
       
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
             "productId":"28",
                "productName":"Banana,kkk Sapota & Papaya",
               
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productId":"29",
                "productName":"Kiwi,kkk Melon, Citrus Fruit",
                
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                 "productId":"30",
                    "productName":"Banana,kkk Sapota & Papaya",
                   
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productId":"31",
                    "productName":"Mangoes aam",
                    
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                     "productId":"32",
                        "productName":"Fruit jj Baskets",
                       
                        "subProducts":[
                        {"subproductId":"32","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
                        
                          
                        
                    ]}
                ]
                }
    
    ]
    },
{
    "categoryId":"2",
    "categoryName":"Oils & Shampoo",
    "subcategory":[{
    "subcategoryId":"2a",
    "subcategoryName":"Oil",
    "products":[
    
    {
        "productId":"33",
    "productName":"Almond Oil",

    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
    
    ]},{
    "productId":"34",
    "productName":"Nariyal Oil",
    
    "subProducts":[
    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
    
    ]},
    {
     "productId":"35",
        "productName":"alovera oil",
       
        "subProducts":[{"subproductId":"32","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
        
        ]},
    
        {
           "productId":"36",
            "productName":"navaratan oil",
         
            "subProducts":[{"subproductId":"37","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"38","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"39","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"40","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"41","subproductName":"Alebela Potato","info":"7"}
            
            ]},
        
    {
    "productId":"37",
        "productName":"patanjali oil",
        
        "subProducts":[{"subproductId":"42","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"43","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"44","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"45","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"46","subproductName":"Alebela Potato","info":"7"}
        
        ]} 
        ]
            },
        
        
 
    {
        "subcategoryId":"2b",
        "subcategoryName":"Lip Balm",
        "products":[
        
        {
         "productId":"38",
        "productName":"abcd",
       
        "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
        
        ]},{
         "productId":"39",
        "productName":"xyz",
       
        "subProducts":[
        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
        
        ]}]
        },
        {
            "subcategoryId":"2c",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
              "productId":"40",
            "productName":"Banana, Sapota & Papaya",
          
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
             "productId":"41",
            "productName":"Kiwi, Melon, Citrus Fruit",
           
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
             "productId":"42",
                "productName":"Banana, Sapota & Papaya",
               
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productName":"Kiwi, Melon, Citrus Fruit",
                "productId":"43",
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                    "productName":"Banana, Sapota & Papaya",
                    "productId":"44",
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productName":"Mangoes",
                    "productId":"45",
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                        "productName":"Fruit Baskets",
                        "productId":"46",
                        "subProducts":[
                        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                        
                        ]}
            ]
            },
{
            "subcategoryId":"2d",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
            "productName":"Banana, Sapota & Papaya",
            "productId":"11",
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
            "productName":"Kiwi, Melon, Citrus Fruit",
            "productId":"12",
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
                "productName":"Banana, Sapota & Papaya",
                "productId":"11",
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productName":"Kiwi, Melon, Citrus Fruit",
                "productId":"12",
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                    "productName":"Banana, Sapota & Papaya",
                    "productId":"11",
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productName":"Mangoes",
                    "productId":"12",
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                        "productName":"Fruit Baskets",
                        "productId":"12",
                        "subProducts":[
                        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                        
                           
                    ]}
                ]
                }
    
    ]
    },
{
    "categoryId":"3",
    "categoryName":"Fruits & vegetables",
    "subcategory":[{
    "subcategoryId":"3a",
    "subcategoryName":"Fruits Vegetables",
    "products":[
    
    {
    "productName":"Potato & Onion",
    "productId":"11",
    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
    
    ]},{
    "productName":"Cucumber & Capsicum",
    "productId":"12",
    "subProducts":[
    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
    
    ]},
    {
        "productName":"Beans, Brinjals & Okra",
        "productId":"13",
        "subProducts":[{"subproductId":"32","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
        
        ]},
    
        {
            "productName":"Root Vegetables",
            "productId":"14",
            "subProducts":[{"subproductId":"37","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"38","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"39","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"40","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"41","subproductName":"Alebela Potato","info":"7"}
            
            ]},
        
    {
        "productName":"Beans, Brinjals & Okra",
        "productId":"15",
        "subProducts":[{"subproductId":"42","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"43","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"44","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"45","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"46","subproductName":"Alebela Potato","info":"7"}
        
        ]},
    
        {
            "productName":"Beans, Brinjals & Okra",
            "productId":"16",
            "subProducts":[{"subproductId":"4","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"33","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"34","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"35","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"36","subproductName":"Alebela Potato","info":"7"}
            
            ]}]
    },
    {
        "subcategoryId":"3b",
        "subcategoryName":"Herbal And Seasoning",
        "products":[
        
        {
        "productName":"Lemon , Ginger & Garlic",
        "productId":"11",
        "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
        
        ]},{
        "productName":"Indian & Exotic Herb",
        "productId":"12",
        "subProducts":[
        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
        
        ]}]
        },
        {
            "subcategoryId":"3c",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
            "productName":"Banana, Sapota & Papaya",
            "productId":"11",
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
            "productName":"Kiwi, Melon, Citrus Fruit",
            "productId":"12",
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
                "productName":"Banana, Sapota & Papaya",
                "productId":"11",
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productName":"Kiwi, Melon, Citrus Fruit",
                "productId":"12",
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                    "productName":"Banana, Sapota & Papaya",
                    "productId":"11",
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productName":"Mangoes",
                    "productId":"12",
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                        "productName":"Fruit Baskets",
                        "productId":"12",
                        "subProducts":[
                        {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                        
                        ]}
            ]
            },
{
            "subcategoryId":"3d",
            "subcategoryName":"Fresh Fruits",
            "products":[
            
            {
            "productName":"Banana, Sapota & Papaya",
            "productId":"11",
            "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
            
            ]},{
            "productName":"Kiwi, Melon, Citrus Fruit",
            "productId":"12",
            "subProducts":[
            {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
            {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
            {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
            {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
            {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
            
            ]},
            {
                "productName":"Banana, Sapota & Papaya",
                "productId":"11",
                "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                
                ]},{
                "productName":"Kiwi, Melon, Citrus Fruit",
                "productId":"12",
                "subProducts":[
                {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                
                ]},
                {
                    "productName":"Banana, Sapota & Papaya",
                    "productId":"11",
                    "subProducts":[{"subproductId":"22","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"23","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"24","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"25","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"26","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},{
                    "productName":"Mangoes",
                    "productId":"12",
                    "subProducts":[
                    {"subproductId":"27","subproductName":"Kashmeeri Onion","info":"2"},
                    {"subproductId":"28","subproductName":"Washington Onion","info":"4"},
                    {"subproductId":"29","subproductName":"Alebela Onion","info":"6"},
                    {"subproductId":"30","subproductName":"Washington Potato","info":"7"},
                    {"subproductId":"31","subproductName":"Alebela Potato","info":"7"}
                    
                    ]},
                    {
                        "productName":"Fruit Baskets",
                        "productId":"12",
                        "subProducts":[
                        {"subproductId":"270","subproductName":"Kashmeeri Onion","info":"2"},
                        {"subproductId":"333","subproductName":"Washington Onion","info":"4"},
                        {"subproductId":"299","subproductName":"Alebela Onion","info":"6"},
                        {"subproductId":"390","subproductName":"Washington Potato","info":"7"},
                        {"subproductId":"310","subproductName":"Alebela Potato","info":"7"}
                          
                        ]}
            ]
            }

]
}]
