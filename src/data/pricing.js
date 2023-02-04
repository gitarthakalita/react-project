

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
        pricingImageUrl: "https://firebasestorage.googleapis.com/v0/b/kpistory-app.appspot.com/o/assets%2Fbasic.svg?alt=media&token=bd21d2fd-368e-49fc-a17d-5ec7306a2350",
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
        pricingImageUrl: "https://firebasestorage.googleapis.com/v0/b/kpistory-app.appspot.com/o/assets%2Fessential.svg?alt=media&token=e6f5f3b1-93d8-49fb-8fba-b5358f02ec7e",
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
        pricingImageUrl: "https://firebasestorage.googleapis.com/v0/b/kpistory-app.appspot.com/o/assets%2Fpro.svg?alt=media&token=4a8dd08e-cade-4553-ae7a-3b07fe954f97",
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
        pricingImageUrl: "https://firebasestorage.googleapis.com/v0/b/kpistory-app.appspot.com/o/assets%2Fscale.svg?alt=media&token=75171ef4-515e-405b-b0ed-6914a01588bd",
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