 const pricingData = [
    {
        id:1,
        title: "Basic",
        description:"Basic dashboards to get you started",
        dashboardCount:[1],  
        includes: [
            
            "1 Users"
        ],
        priceAmount: "Free",
        pricingImageUrl: "https://icons.veryicon.com/png/o/miscellaneous/standard-general-linear-icon/dashboard-80.png",
        features: [
            "Core data sources",
            "sharing links"
        ]
    },
    {
        id:2,
        title: "Essential",
        description: "Easily build and share dashboards that display essential business data.",
        dashboardCount:[1,3,5],  
        includes:[            
            "3 Users", 
            "Send to 1 TV"
        ],
        priceAmount: "3920.00",
        pricingImageUrl: "",
        features: [
            "Everything in Basic",
            "Dashboard Loops",
            "Support via Email, chat and documentation"
        ]
    },
    {
        id:3,
        title: "Professional",
        description: "Connect to over 80 data sources and keep teams in the loop with advanced sharing options.",
        dashboardCount:[1,5, 10],  
        includes:[            
            "10 Users", 
            "Send to 3 TV"
        ],
        priceAmount: "7920.00",
        pricingImageUrl: "",
        features: [
            "Everything in Essential, plus...",
            "Pro data sources",
            "Send to Slack",
            "Send dashboard via Email",
            "Use your own logo",
            "Priority Support"
        ]
    },
    {
        id:4,
        title: "Scale",
        description: "Introduce KPI dashboards into multiple areas of your business.",
        dashboardCount:[30, 31],  
        includes:[     
            "25 Users", 
            "Send to 10 TV"
        ],
        priceAmount: "55,920.00",
        pricingImageUrl: "",
        features: [
            "Everything in Pro, plus...",
            "Single Sign On (SSO)",
            "Pay by bank transfer or PO",
            "Advanced dashboard theming",
            "Dedicated support rep"
        ]
    }
]


export default pricingData;