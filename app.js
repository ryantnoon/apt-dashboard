/* AptFinder Dashboard — Application Logic */

(function () {
  "use strict";

  /* ── DATA ────────────────────────────────────────────────────── */
  var RAW_DATA = [{"Area": "King of Prussia", "Building Name": "The Point at KOP", "Address": "350 Village Dr, King of Prussia, PA 19406", "Sub-Neighborhood": "KOP Town Center", "Management Company": "Panco Management (Pantzer Properties)", "Phone": "888-416-9693", "Email": "N/A", "Website": "https://www.thepoint-kop.com", "2BR Price Low": "$2,986", "2BR Price High": "$4,114", "Availability": "Multiple 2BR units available now", "Pool": "Yes", "Gym": "Yes", "Rooftop/Deck": "Yes (Loggias)", "Dog Park/Run": "Yes", "Concierge": "Yes", "Other Key Amenities": "Screening room, billiards, fire pits, pet spa, EV charging, package lockers", "Pet Rent (Monthly)": "$40/mo", "Pet Fee (One-Time)": "$300", "Breed Restrictions": "Yes (contact for list)", "Weight Limit": "Not listed", "Year Built": "2020", "Total Units": "390", "Move-In Specials": "1 Month Free on select 2BR (move by 3/31)"}, {"Area": "King of Prussia", "Building Name": "The Smith Valley Forge", "Address": "580 S Goddard Blvd, King of Prussia, PA 19406", "Sub-Neighborhood": "KOP Town Center", "Management Company": "UDR (United Dominion Realty)", "Phone": "610-557-1682", "Email": "WeCare@udr.com", "Website": "https://www.udr.com/philadelphia-apartments/king-of-prussia/the-smith/", "2BR Price Low": "$2,305", "2BR Price High": "$3,129", "Availability": "Multiple 2BR units available now", "Pool": "Yes", "Gym": "Yes", "Rooftop/Deck": "Yes (Sky Lounge)", "Dog Park/Run": "No (pet spa)", "Concierge": "No", "Other Key Amenities": "Peloton spin studio, billiards, yoga, co-working, pond views, Airbnb-friendly", "Pet Rent (Monthly)": "$65/mo", "Pet Fee (One-Time)": "$350", "Breed Restrictions": "Yes (10+ breeds)", "Weight Limit": "None", "Year Built": "2019", "Total Units": "320", "Move-In Specials": "2 Months off rent (select units)"}, {"Area": "King of Prussia", "Building Name": "The George Apartments", "Address": "140 Valley Green Ln, King of Prussia, PA 19406", "Sub-Neighborhood": "KOP Town Center", "Management Company": "UDR (United Dominion Realty)", "Phone": "610-989-7214", "Email": "WeCare@udr.com", "Website": "https://www.udr.com/philadelphia-apartments/valley-forge/the-george/", "2BR Price Low": "$2,951", "2BR Price High": "$3,175", "Availability": "Multiple 2BR units available now", "Pool": "Yes", "Gym": "Yes", "Rooftop/Deck": "No (Sundeck)", "Dog Park/Run": "Yes", "Concierge": "No", "Other Key Amenities": "Bocce court, fire pit, LEED Silver, smart home tech, Airbnb-friendly", "Pet Rent (Monthly)": "$65/mo", "Pet Fee (One-Time)": "$350", "Breed Restrictions": "Yes (10+ breeds)", "Weight Limit": "None", "Year Built": "2021", "Total Units": "202", "Move-In Specials": "$1,500 off first month"}, {"Area": "King of Prussia", "Building Name": "Park Square", "Address": "751 Vandenburg Blvd, King of Prussia, PA 19406", "Sub-Neighborhood": "Near KOP Mall", "Management Company": "UDR (United Dominion Realty)", "Phone": "Contact via UDR website", "Email": "WeCare@udr.com", "Website": "https://www.udr.com/philadelphia-apartments/king-of-prussia/park-square/", "2BR Price Low": "$2,401", "2BR Price High": "$3,343", "Availability": "Multiple units available now through May", "Pool": "Yes", "Gym": "Yes", "Rooftop/Deck": "No (Sundeck)", "Dog Park/Run": "Yes", "Concierge": "No", "Other Key Amenities": "Yoga room, movie theatre, game room, fire pits, 1-mi paved trails", "Pet Rent (Monthly)": "$65/mo", "Pet Fee (One-Time)": "$350", "Breed Restrictions": "Yes (UDR standard)", "Weight Limit": "None", "Year Built": "2018", "Total Units": "313", "Move-In Specials": "2 weeks off rent"}, {"Area": "King of Prussia", "Building Name": "Cirro King of Prussia", "Address": "625 S Goddard Blvd, King of Prussia, PA 19406", "Sub-Neighborhood": "KOP Town Center", "Management Company": "The Bozzuto Group", "Phone": "267-828-0083", "Email": "N/A (contact via website)", "Website": "https://www.cirrokingofprussia.com", "2BR Price Low": "$2,915", "2BR Price High": "$4,038", "Availability": "2BR units available now through April", "Pool": "Yes", "Gym": "Yes (TechnoGym)", "Rooftop/Deck": "No (Sun deck)", "Dog Park/Run": "No (Dog spa)", "Concierge": "No", "Other Key Amenities": "Screening room, social lounge, billiards, business lounge, 480-space garage", "Pet Rent (Monthly)": "$50/mo", "Pet Fee (One-Time)": "$350 ($500 2nd)", "Breed Restrictions": "Yes (in lease)", "Weight Limit": "Not listed", "Year Built": "2018", "Total Units": "339", "Move-In Specials": "$500 off move-in costs"}, {"Area": "King of Prussia", "Building Name": "OMNIA at Town Center", "Address": "300 Village Dr, King of Prussia, PA 19406", "Sub-Neighborhood": "KOP Town Center", "Management Company": "Contact leasing office", "Phone": "(484) 207-5051", "Email": "N/A", "Website": "https://www.omniakop.com", "2BR Price Low": "$2,795", "2BR Price High": "$3,500", "Availability": "Numerous 2BR units available now", "Pool": "Yes (Heated)", "Gym": "Yes", "Rooftop/Deck": "No (Courtyard)", "Dog Park/Run": "Yes (wash station)", "Concierge": "No (Package kiosk)", "Other Key Amenities": "20-person theater, yoga room, billiards, cyber lounge, EV charging", "Pet Rent (Monthly)": "Contact leasing", "Pet Fee (One-Time)": "Contact leasing", "Breed Restrictions": "Contact leasing", "Weight Limit": "Contact leasing", "Year Built": "2016", "Total Units": "339", "Move-In Specials": "Up to 1 Month Free"}, {"Area": "King of Prussia", "Building Name": "Indigo 301", "Address": "301 Village Dr, King of Prussia, PA 19406", "Sub-Neighborhood": "KOP Town Center", "Management Company": "Not confirmed publicly", "Phone": "484-302-4823", "Email": "N/A", "Website": "https://www.indigo301.com", "2BR Price Low": "$2,583", "2BR Price High": "$5,238", "Availability": "21 total units available (all sizes)", "Pool": "Yes", "Gym": "Yes (Fitness-on-Demand)", "Rooftop/Deck": "No", "Dog Park/Run": "Yes", "Concierge": "No", "Other Key Amenities": "Golf/sport simulator, bocce court, demo kitchen, media room", "Pet Rent (Monthly)": "Contact leasing", "Pet Fee (One-Time)": "$0 listed (verify)", "Breed Restrictions": "Contact leasing", "Weight Limit": "Contact leasing", "Year Built": "2017", "Total Units": "363", "Move-In Specials": "Look & Lease: App + Amenity fees waived"}, {"Area": "King of Prussia", "Building Name": "Skye 750", "Address": "750 Moore Rd, King of Prussia, PA 19406", "Sub-Neighborhood": "Valley Forge area", "Management Company": "Greystar", "Phone": "(484) 702-3350", "Email": "N/A", "Website": "https://skye750apartments.com", "2BR Price Low": "$1,978", "2BR Price High": "$2,951", "Availability": "23 total units available; multiple 2BR", "Pool": "Yes", "Gym": "Yes", "Rooftop/Deck": "No", "Dog Park/Run": "Yes (Bark Park)", "Concierge": "No", "Other Key Amenities": "Sauna, theater room, smart home tech, playground, trails", "Pet Rent (Monthly)": "$75/mo", "Pet Fee (One-Time)": "$500 deposit", "Breed Restrictions": "Yes (common aggressive breeds)", "Weight Limit": "Not listed", "Year Built": "2019", "Total Units": "248", "Move-In Specials": "Contact for current offers"}, {"Area": "King of Prussia", "Building Name": "AVE King of Prussia", "Address": "555 S Goddard Blvd, King of Prussia, PA 19406", "Sub-Neighborhood": "KOP Town Center", "Management Company": "AVE Living (Korman Communities)", "Phone": "484-603-6206", "Email": "N/A", "Website": "https://www.aveliving.com/king-of-prussia", "2BR Price Low": "$3,320", "2BR Price High": "$3,850", "Availability": "Multiple units available", "Pool": "Yes", "Gym": "Yes", "Rooftop/Deck": "Yes (Sundeck/Cabana)", "Dog Park/Run": "Yes", "Concierge": "Yes", "Other Key Amenities": "Outdoor putting green, spa, fire pit, furnished units available", "Pet Rent (Monthly)": "$40/mo", "Pet Fee (One-Time)": "$400", "Breed Restrictions": "None listed (confirm)", "Weight Limit": "None", "Year Built": "2018", "Total Units": "177", "Move-In Specials": "None currently listed"}, {"Area": "King of Prussia", "Building Name": "251 DeKalb", "Address": "251 W DeKalb Pike, King of Prussia, PA 19406", "Sub-Neighborhood": "Hilltop KOP", "Management Company": "Lindy Communities", "Phone": "610-989-7787", "Email": "N/A", "Website": "https://251dekalb.com", "2BR Price Low": "$2,020", "2BR Price High": "$3,583", "Availability": "19 two-bedroom units available", "Pool": "Yes (Saltwater, Olympic-sized)", "Gym": "Yes", "Rooftop/Deck": "No (Reflection terrace)", "Dog Park/Run": "Yes (2 Bark Parks)", "Concierge": "No", "Other Key Amenities": "Game room, Apple Tech Bar, bocce, community garden, Yappy Hours, 26 acres", "Pet Rent (Monthly)": "$40/mo", "Pet Fee (One-Time)": "$325 ($475 for 2)", "Breed Restrictions": "NONE - All breeds welcome", "Weight Limit": "None", "Year Built": "2014", "Total Units": "628", "Move-In Specials": "None currently listed"}, {"Area": "King of Prussia", "Building Name": "Valley Forge Towers North", "Address": "3000 Valley Forge Cir, King of Prussia, PA 19406", "Sub-Neighborhood": "Valley Forge", "Management Company": "The Galman Group", "Phone": "855-695-2021", "Email": "N/A", "Website": "https://galmangroup.com/property/valley-forge-towers/", "2BR Price Low": "$1,933", "2BR Price High": "$2,631", "Availability": "Multiple 2BR units available", "Pool": "Yes (Indoor + Outdoor)", "Gym": "Yes", "Rooftop/Deck": "Yes (Terrace)", "Dog Park/Run": "No", "Concierge": "Yes", "Other Key Amenities": "Movie theatre, sauna, spa, basketball, tennis, shuttle, river views", "Pet Rent (Monthly)": "$35/mo", "Pet Fee (One-Time)": "$350 deposit", "Breed Restrictions": "Contact leasing", "Weight Limit": "25 lbs max", "Year Built": "1980 (renovated)", "Total Units": "242", "Move-In Specials": "None currently listed"}, {"Area": "King of Prussia", "Building Name": "Abrams Run", "Address": "111 Bill Smith Blvd, King of Prussia, PA 19406", "Sub-Neighborhood": "Near KOP Mall", "Management Company": "Morgan Properties", "Phone": "610-897-7202", "Email": "N/A", "Website": "https://www.morgan-properties.com/apartments/pa/king-of-prussia/abrams-run/", "2BR Price Low": "$2,245", "2BR Price High": "$2,295", "Availability": "3 two-bedroom units available now", "Pool": "No", "Gym": "Yes", "Rooftop/Deck": "No", "Dog Park/Run": "Yes", "Concierge": "No", "Other Key Amenities": "Pickleball court, fire pit, Chester Valley Trail access, smart home", "Pet Rent (Monthly)": "$35/mo", "Pet Fee (One-Time)": "$400", "Breed Restrictions": "May apply (verify)", "Weight Limit": "Contact leasing", "Year Built": "1996", "Total Units": "192", "Move-In Specials": "None currently listed"}, {"Area": "Fairmount", "Building Name": "Broadridge", "Address": "1300 Fairmount Ave, Philadelphia, PA 19123", "Sub-Neighborhood": "Core Fairmount", "Management Company": "UDR (United Dominion Realty)", "Phone": "610-553-3384", "Email": "N/A (contact via UDR portal)", "Website": "https://www.udr.com/philadelphia-apartments/fairmount/broadridge/", "2BR Price Low": "$2,827", "2BR Price High": "$3,180", "Availability": "Multiple 2BR units available now through June", "Pool": "Yes", "Gym": "Yes", "Rooftop/Deck": "Yes (Skydeck lawn)", "Dog Park/Run": "Yes", "Concierge": "No", "Other Key Amenities": "ALDI on-site, podcast studio, movie theater, demo kitchen, yoga/spa, billiards", "Pet Rent (Monthly)": "$65/mo", "Pet Fee (One-Time)": "$300", "Breed Restrictions": "May apply (confirm)", "Weight Limit": "Not specified", "Year Built": "2021", "Total Units": "478", "Move-In Specials": "2 Months Free (move in by 3/16, 14-mo lease)"}, {"Area": "Fairmount", "Building Name": "The Noble", "Address": "200 Spring Garden St, Philadelphia, PA 19123", "Sub-Neighborhood": "Spring Garden / N. Liberties border", "Management Company": "Greystar / KRE Group", "Phone": "267-415-8501", "Email": "N/A", "Website": "https://thenoblephilly.com", "2BR Price Low": "$2,868", "2BR Price High": "$3,838", "Availability": "Multiple 2BR units available now", "Pool": "Yes (75-ft lap pool)", "Gym": "Yes (17,000 sq ft City Fitness)", "Rooftop/Deck": "Yes (3 terraces)", "Dog Park/Run": "Yes", "Concierge": "Yes (24-hr)", "Other Key Amenities": "Co-working, art throughout, curated events, car share, EV stations", "Pet Rent (Monthly)": "$80/mo", "Pet Fee (One-Time)": "$350-$700", "Breed Restrictions": "May apply (confirm)", "Weight Limit": "Not specified", "Year Built": "2024", "Total Units": "360", "Move-In Specials": "Up to 3 months free (confirm)"}, {"Area": "Fairmount", "Building Name": "Park Towne Place", "Address": "2200 Benjamin Franklin Pkwy, Philadelphia, PA 19130", "Sub-Neighborhood": "Art Museum / Parkway", "Management Company": "AIR Communities (Apartment Income REIT)", "Phone": "814-646-3116", "Email": "N/A (contact via website)", "Website": "https://www.parktowneapthomes.com", "2BR Price Low": "$2,608", "2BR Price High": "$3,276", "Availability": "Multiple 2BR units available; penthouses to $8,960", "Pool": "Yes (Largest in area)", "Gym": "Yes (4,000 sq ft TechnoGym)", "Rooftop/Deck": "Yes (Skyline Lounge)", "Dog Park/Run": "Yes (3 nearby)", "Concierge": "No", "Other Key Amenities": "Boxing, spin/yoga, Oar Pub lounge, Doggie VIP grooming, on-site salon, dry cleaners, restaurant", "Pet Rent (Monthly)": "$50/mo", "Pet Fee (One-Time)": "$250", "Breed Restrictions": "Yes (12 breeds restricted)", "Weight Limit": "300 lbs", "Year Built": "1959 (renovated)", "Total Units": "940", "Move-In Specials": "Up to 2 months free (select)"}, {"Area": "Fairmount", "Building Name": "LVL North", "Address": "510 N Broad St, Philadelphia, PA 19130", "Sub-Neighborhood": "Spring Garden / N. Broad", "Management Company": "Alterra Property Group", "Phone": "856-672-7811", "Email": "N/A", "Website": "https://www.lvlnorth.com", "2BR Price Low": "$2,386", "2BR Price High": "$2,857", "Availability": "Multiple 2BR units available now through May", "Pool": "No", "Gym": "Yes (Peloton)", "Rooftop/Deck": "Yes (BBQ deck)", "Dog Park/Run": "No", "Concierge": "Yes (24/7 front desk)", "Other Key Amenities": "Golf simulator, arcade, demo kitchen, ground-floor grocery, transit-oriented", "Pet Rent (Monthly)": "Not specified", "Pet Fee (One-Time)": "Not specified", "Breed Restrictions": "None listed", "Weight Limit": "None", "Year Built": "2022", "Total Units": "410", "Move-In Specials": "Up to 2 months free (confirm)"}, {"Area": "Fairmount", "Building Name": "The Gio", "Address": "2630 W Girard Ave, Philadelphia, PA 19130", "Sub-Neighborhood": "Fairmount / Brewerytown border", "Management Company": "Private operator", "Phone": "Contact via website", "Email": "N/A", "Website": "https://www.thegio.com", "2BR Price Low": "$2,395", "2BR Price High": "$2,495", "Availability": "4 units available immediately", "Pool": "No", "Gym": "Yes (24-hr)", "Rooftop/Deck": "Yes (with dog run)", "Dog Park/Run": "Yes (Rooftop)", "Concierge": "No", "Other Key Amenities": "Zoom room, bi-level lofts available, private rooftop decks (select)", "Pet Rent (Monthly)": "Not specified", "Pet Fee (One-Time)": "Not specified", "Breed Restrictions": "May apply", "Weight Limit": "Contact leasing", "Year Built": "2023", "Total Units": "160", "Move-In Specials": "1 month free + up to $1,000 credit"}, {"Area": "Fairmount", "Building Name": "Fairmount North", "Address": "2601 Poplar St, Philadelphia, PA 19130", "Sub-Neighborhood": "Core Fairmount", "Management Company": "2601 Poplar OZ LLC", "Phone": "Contact via website", "Email": "N/A", "Website": "https://www.fairmountnorth.com", "2BR Price Low": "$2,225", "2BR Price High": "$2,695", "Availability": "3 units available now", "Pool": "No", "Gym": "Yes", "Rooftop/Deck": "Yes (Roof deck)", "Dog Park/Run": "No", "Concierge": "No", "Other Key Amenities": "Latch security, Amazon lockers, walk score 93", "Pet Rent (Monthly)": "Not specified", "Pet Fee (One-Time)": "Not specified", "Breed Restrictions": "None listed", "Weight Limit": "None listed", "Year Built": "2022", "Total Units": "108", "Move-In Specials": "Up to 1.5 months free (confirm)"}, {"Area": "Logan Square", "Building Name": "ReNew Logan Square", "Address": "1 Franklin Town Blvd, Philadelphia, PA 19103", "Sub-Neighborhood": "Eastern Logan Square", "Management Company": "Institutional operator (not disclosed)", "Phone": "856-644-6137", "Email": "N/A", "Website": "https://www.renewlogansquare.com", "2BR Price Low": "$2,929", "2BR Price High": "$4,339", "Availability": "10 units available (now through June)", "Pool": "Yes (Indoor)", "Gym": "Yes", "Rooftop/Deck": "No", "Dog Park/Run": "No", "Concierge": "Yes", "Other Key Amenities": "Library, game room, party room, BBQ patio, business center", "Pet Rent (Monthly)": "$25/mo", "Pet Fee (One-Time)": "$300", "Breed Restrictions": "Yes (10 breeds)", "Weight Limit": "80 lbs", "Year Built": "1987 (renovated)", "Total Units": "335", "Move-In Specials": "2 Months Free"}, {"Area": "Logan Square", "Building Name": "1919 Market", "Address": "1919 Market St, Philadelphia, PA 19103", "Sub-Neighborhood": "Logan Square / Market West", "Management Company": "LCOR", "Phone": "856-672-4154", "Email": "residentsupport@lcor.com", "Website": "https://www.1919marketapts.com", "2BR Price Low": "$3,696", "2BR Price High": "$5,946", "Availability": "Multiple 2BR and penthouses available", "Pool": "Yes (Infinity rooftop)", "Gym": "Yes (Spin/Yoga studios)", "Rooftop/Deck": "Yes (360\u00b0 fireplace lounge)", "Dog Park/Run": "No (Pet wash station)", "Concierge": "Yes", "Other Key Amenities": "Golf simulator, wine room, sports bar, screening room, Trader Joe's on-site", "Pet Rent (Monthly)": "$50/mo", "Pet Fee (One-Time)": "$500", "Breed Restrictions": "Yes (call for list)", "Weight Limit": "Not specified", "Year Built": "2016", "Total Units": "321", "Move-In Specials": "1 Month Free"}, {"Area": "Logan Square", "Building Name": "One Cathedral Square", "Address": "1701 Race St, Philadelphia, PA 19103", "Sub-Neighborhood": "Heart of Logan Square", "Management Company": "Not publicly listed", "Phone": "877-915-0552", "Email": "N/A", "Website": "https://www.onecathedralsquare.com", "2BR Price Low": "$3,495", "2BR Price High": "$5,429", "Availability": "3 units available now", "Pool": "No", "Gym": "Yes (Rooftop fitness + yoga)", "Rooftop/Deck": "Yes (Panoramic lounge)", "Dog Park/Run": "No (nearby parks)", "Concierge": "Yes (24-hr)", "Other Key Amenities": "Demo kitchen (seats 20), co-working, Fitwel certified, Nest/Latch smart tech", "Pet Rent (Monthly)": "$50/mo", "Pet Fee (One-Time)": "$350", "Breed Restrictions": "Yes (contact)", "Weight Limit": "Not specified", "Year Built": "2022", "Total Units": "271", "Move-In Specials": "2 Months Free"}, {"Area": "Logan Square", "Building Name": "Dalian on the Park", "Address": "500 N 21st St, Philadelphia, PA 19130", "Sub-Neighborhood": "Western Logan Sq / Art Museum", "Management Company": "Not publicly disclosed", "Phone": "833-266-2118", "Email": "N/A", "Website": "https://www.dalianonthepark.com", "2BR Price Low": "$4,176", "2BR Price High": "$6,380", "Availability": "3 units available", "Pool": "Yes (Infinity pool)", "Gym": "Yes", "Rooftop/Deck": "Yes (30,000 sq ft Sky Deck)", "Dog Park/Run": "No (Dog wash room)", "Concierge": "Yes (24-hr)", "Other Key Amenities": "On-site Whole Foods, yoga studio, library, media bar, personal trainer, pet services", "Pet Rent (Monthly)": "$50/mo", "Pet Fee (One-Time)": "$350", "Breed Restrictions": "Yes (contact)", "Weight Limit": "Not specified", "Year Built": "2016", "Total Units": "293", "Move-In Specials": "Up to 3 Months Free"}, {"Area": "Logan Square", "Building Name": "The Alexander", "Address": "300 Alexander Ct, Philadelphia, PA 19103", "Sub-Neighborhood": "Northern Logan Square", "Management Company": "Greystar", "Phone": "215-372-0300", "Email": "N/A (contact via Greystar)", "Website": "https://thealexanderphilly.com", "2BR Price Low": "$3,582", "2BR Price High": "$3,922", "Availability": "5 units available (now + coming soon)", "Pool": "Yes (Indoor spa pool)", "Gym": "Yes", "Rooftop/Deck": "Yes (Observation deck)", "Dog Park/Run": "No (Pet grooming station)", "Concierge": "Yes (24-hr)", "Other Key Amenities": "Courtyard terrace, demo kitchen, TV lounge, Sweetgreen on-site, bike mechanic station", "Pet Rent (Monthly)": "Not listed", "Pet Fee (One-Time)": "Not listed", "Breed Restrictions": "Not listed (confirm)", "Weight Limit": "Not listed", "Year Built": "~2021", "Total Units": "~275", "Move-In Specials": "Special offer (call for details)"}, {"Area": "Logan Square", "Building Name": "The Murano", "Address": "2101 Market St, Philadelphia, PA 19103", "Sub-Neighborhood": "Eastern Logan Square", "Management Company": "Individual condo owners", "Phone": "(786) 403-0330", "Email": "Contact via listing agents", "Website": "N/A (condo building - listed on Zillow/Apartments.com)", "2BR Price Low": "$3,700", "2BR Price High": "$4,800", "Availability": "Limited; check individual listings", "Pool": "Yes (60-ft indoor heated lap)", "Gym": "Yes", "Rooftop/Deck": "Yes", "Dog Park/Run": "No", "Concierge": "Yes (24-hr doorman)", "Other Key Amenities": "42-story iconic curved glass tower, community room, storage, parking included", "Pet Rent (Monthly)": "Varies by owner", "Pet Fee (One-Time)": "Varies by owner", "Breed Restrictions": "Varies by owner", "Weight Limit": "~40-80 lbs typical", "Year Built": "2008", "Total Units": "251", "Move-In Specials": "Varies by owner"}, {"Area": "Logan Square", "Building Name": "1900 Arch", "Address": "1900 Arch St, Philadelphia, PA 19103", "Sub-Neighborhood": "Center of Logan Square", "Management Company": "PMC Property Group", "Phone": "267-507-1511", "Email": "N/A", "Website": "https://www.1900arch.com", "2BR Price Low": "$2,845", "2BR Price High": "Call for pricing", "Availability": "Units available (contact for 2BR)", "Pool": "No", "Gym": "Yes", "Rooftop/Deck": "Yes (Sky deck)", "Dog Park/Run": "Yes (Bark Park)", "Concierge": "No", "Other Key Amenities": "Entertainment lounge, billiards, shuffleboard, fire pits, dog walking services", "Pet Rent (Monthly)": "Not listed", "Pet Fee (One-Time)": "Not listed", "Breed Restrictions": "Contact PMC", "Weight Limit": "Small dogs only", "Year Built": "~2010s", "Total Units": "300+", "Move-In Specials": "Check current offers"}, {"Area": "Fitler Square", "Building Name": "Locust on the Park", "Address": "201 S 25th St, Philadelphia, PA 19103", "Sub-Neighborhood": "Core Fitler Square", "Management Company": "Not publicly named", "Phone": "(272) 225-6911", "Email": "N/A", "Website": "https://www.locustonthepark.com", "2BR Price Low": "$3,777", "2BR Price High": "$3,846", "Availability": "2 units available now", "Pool": "No", "Gym": "Yes (24/7)", "Rooftop/Deck": "No", "Dog Park/Run": "No (adj. Schuylkill River Park)", "Concierge": "Yes (24-hr front desk)", "Other Key Amenities": "Clubroom, demo kitchen, smart home, EV parking, Xfinity internet included", "Pet Rent (Monthly)": "$50/mo", "Pet Fee (One-Time)": "$400", "Breed Restrictions": "Yes (contact)", "Weight Limit": "None", "Year Built": "1911 (renovated)", "Total Units": "152", "Move-In Specials": "1 month free (select homes)"}, {"Area": "Fitler Square", "Building Name": "2116 Chestnut", "Address": "2116 Chestnut St, Philadelphia, PA 19103", "Sub-Neighborhood": "Northern Fitler Sq border", "Management Company": "Harbor Group Management", "Phone": "Contact via website", "Email": "N/A", "Website": "https://www.harborgroupmanagement.com/apartments/pa/philadelphia/2116-chestnut", "2BR Price Low": "$3,970", "2BR Price High": "$5,710", "Availability": "Multiple units available", "Pool": "No", "Gym": "Yes (24-hr)", "Rooftop/Deck": "No (Sundeck w/ fire pit)", "Dog Park/Run": "Yes", "Concierge": "Yes (24/7)", "Other Key Amenities": "Yoga studio, event room, 360\u00b0 city views, dry cleaning, ground-floor retail", "Pet Rent (Monthly)": "$35/mo", "Pet Fee (One-Time)": "Contact leasing", "Breed Restrictions": "Yes (extensive list)", "Weight Limit": "80 lbs / 36\" height", "Year Built": "2013", "Total Units": "~350", "Move-In Specials": "1 month free (confirm)"}, {"Area": "Fitler Square", "Building Name": "Naval Square", "Address": "2462 Grays Ferry Ave, Philadelphia, PA 19146", "Sub-Neighborhood": "South Fitler Sq border", "Management Company": "Keating Management (confirm current)", "Phone": "(786) 403-0330", "Email": "N/A", "Website": "Search Naval Square Philadelphia", "2BR Price Low": "$2,999", "2BR Price High": "$3,265", "Availability": "Limited; contact directly (rolling turnover)", "Pool": "Yes (Outdoor)", "Gym": "Yes", "Rooftop/Deck": "No", "Dog Park/Run": "Yes (green lawns)", "Concierge": "Yes (24-hr front desk)", "Other Key Amenities": "Gated campus, expansive green spaces, gardens, trails, picnic areas", "Pet Rent (Monthly)": "Contact office", "Pet Fee (One-Time)": "Contact office", "Breed Restrictions": "Contact office", "Weight Limit": "Contact office", "Year Built": "2006", "Total Units": "423", "Move-In Specials": "None currently listed"}, {"Area": "Fitler Square", "Building Name": "AQ Rittenhouse", "Address": "2021 Chestnut St, Philadelphia, PA 19103", "Sub-Neighborhood": "Northern Fitler Sq border", "Management Company": "Not publicly named", "Phone": "(215) 703-9582", "Email": "N/A", "Website": "https://aqrittenhouseapts.com", "2BR Price Low": "$2,253", "2BR Price High": "$2,653", "Availability": "Multiple 2BR units available now", "Pool": "No", "Gym": "Yes", "Rooftop/Deck": "Yes (Sky terrace w/ fire pits)", "Dog Park/Run": "No", "Concierge": "Yes (24-hr doorman)", "Other Key Amenities": "WiFi cafe, courtyard, car share, bike storage w/ repair station", "Pet Rent (Monthly)": "$30/mo", "Pet Fee (One-Time)": "$350", "Breed Restrictions": "Yes (call for list)", "Weight Limit": "85 lbs", "Year Built": "Not confirmed", "Total Units": "Not confirmed", "Move-In Specials": "Up to 2 months free"}, {"Area": "Center City", "Building Name": "The Atlantic", "Address": "1401 Spruce St, Philadelphia, PA 19102", "Sub-Neighborhood": "Avenue of the Arts / Wash Sq West", "Management Company": "Post Brothers", "Phone": "(215) 839-1007", "Email": "management@theatlanticbuilding.com", "Website": "https://theatlanticbuilding.com", "2BR Price Low": "$4,515", "2BR Price High": "$4,762", "Availability": "Limited; 1 unit available March 12", "Pool": "Yes (Rooftop + hot tub)", "Gym": "Yes (Peloton, HIIT, Woodway)", "Rooftop/Deck": "Yes (Dining pavilion, sundeck)", "Dog Park/Run": "Yes (Rooftop K9 grass)", "Concierge": "Yes (24-hr)", "Other Key Amenities": "Recovery spa (sauna, steam, HydroMassage), music room, co-working, Steak 48 on-site", "Pet Rent (Monthly)": "$60/mo", "Pet Fee (One-Time)": "$500 deposit", "Breed Restrictions": "None listed (confirm)", "Weight Limit": "Not listed", "Year Built": "2020", "Total Units": "268", "Move-In Specials": "1 Month Free"}, {"Area": "Center City", "Building Name": "The St. James", "Address": "200 W Washington Sq, Philadelphia, PA 19106", "Sub-Neighborhood": "Washington Square West", "Management Company": "Independent management", "Phone": "(215) 267-4452", "Email": "Contact via website", "Website": "https://thestjamesphiladelphia.com", "2BR Price Low": "$5,113", "2BR Price High": "$5,628", "Availability": "3 units available now", "Pool": "Yes (60-ft indoor year-round)", "Gym": "Yes", "Rooftop/Deck": "Yes (Sun deck)", "Dog Park/Run": "No", "Concierge": "Yes (24-hr doorman)", "Other Key Amenities": "Massage room, on-site retail, 45-story tower, Washington Square views", "Pet Rent (Monthly)": "Call for details", "Pet Fee (One-Time)": "Call for details", "Breed Restrictions": "Call for details", "Weight Limit": "Call for details", "Year Built": "1960s", "Total Units": "~400", "Move-In Specials": "None currently listed"}, {"Area": "Center City", "Building Name": "1213 Walnut", "Address": "1213 Walnut St, Philadelphia, PA 19107", "Sub-Neighborhood": "Midtown Village / Wash Sq West", "Management Company": "Goldenberg Group", "Phone": "(215) 496-1213", "Email": "Contact via website", "Website": "https://1213walnut.com", "2BR Price Low": "$3,290", "2BR Price High": "$4,935", "Availability": "2 units available now + more plans", "Pool": "No", "Gym": "Yes (3,000+ sq ft + studio)", "Rooftop/Deck": "Yes (25th floor deck)", "Dog Park/Run": "Yes (2nd floor K9 park + 24-hr dog spa)", "Concierge": "Yes (24-hr)", "Other Key Amenities": "Great room (35-ft ceilings), conference rooms, cold storage, porte-cochere, LEED Silver", "Pet Rent (Monthly)": "Verify with leasing", "Pet Fee (One-Time)": "$500 deposit", "Breed Restrictions": "Contact leasing", "Weight Limit": "Not listed", "Year Built": "2018", "Total Units": "322", "Move-In Specials": "3 Months Free (17-mo lease); 2.5 Months Free (13-16 mo)"}, {"Area": "Center City", "Building Name": "The Griffin Center City", "Address": "1338-1348 Chestnut St, Philadelphia, PA 19107", "Sub-Neighborhood": "Avenue of the Arts", "Management Company": "Greystar", "Phone": "(267) 813-2068", "Email": "Contact via Greystar", "Website": "https://griffinphilly.com", "2BR Price Low": "$4,539", "2BR Price High": "Call for pricing", "Availability": "21 total units available (mix)", "Pool": "No", "Gym": "Yes (Peloton)", "Rooftop/Deck": "Yes (Clubroom w/ panoramic views)", "Dog Park/Run": "Yes (Fenced)", "Concierge": "Yes (24-hr front desk)", "Other Key Amenities": "Golf simulator, billiards, arcade, outdoor kitchen, historic Beaux-Arts building", "Pet Rent (Monthly)": "$35/mo", "Pet Fee (One-Time)": "$350 deposit", "Breed Restrictions": "Yes (call for list)", "Weight Limit": "Not listed", "Year Built": "1897/2016 (converted)", "Total Units": "217", "Move-In Specials": "Check with leasing"}, {"Area": "Center City", "Building Name": "The View at Old City", "Address": "401 Race St, Philadelphia, PA 19106", "Sub-Neighborhood": "Old City", "Management Company": "PrideRock Capital Management", "Phone": "Contact via website", "Email": "Contact via website", "Website": "https://www.theviewatoldcity.com", "2BR Price Low": "$3,199", "2BR Price High": "$3,799", "Availability": "Multiple units available; 1 Month Free", "Pool": "Yes (Heated 3-season rooftop)", "Gym": "Yes (Peloton)", "Rooftop/Deck": "Yes (Boardwalk deck)", "Dog Park/Run": "Yes + Paw Spa", "Concierge": "Yes", "Other Key Amenities": "Indoor basketball court, theater, zen courtyard, yoga, free bike rentals", "Pet Rent (Monthly)": "$35/mo", "Pet Fee (One-Time)": "$300", "Breed Restrictions": "Yes (extensive list)", "Weight Limit": "100 lbs", "Year Built": "Not confirmed", "Total Units": "216", "Move-In Specials": "1 Month Free"}, {"Area": "Center City", "Building Name": "The Girard (East Market)", "Address": "1199 Ludlow St, Philadelphia, PA 19107", "Sub-Neighborhood": "Market East / Wash Sq West", "Management Company": "Method Co.", "Phone": "(445) 447-0098", "Email": "Contact via website", "Website": "https://thegirard.com", "2BR Price Low": "$3,639", "2BR Price High": "$5,122", "Availability": "Multiple 2BR units available", "Pool": "Yes (25-yard heated outdoor lap)", "Gym": "Yes + City Fitness on-site", "Rooftop/Deck": "Yes (2 terraces)", "Dog Park/Run": "Yes (Sunken outdoor)", "Concierge": "Yes (24/7)", "Other Key Amenities": "Screening room, library, demo kitchen, vegetable garden, Viking grills, LEED Silver", "Pet Rent (Monthly)": "$100/mo", "Pet Fee (One-Time)": "$500", "Breed Restrictions": "Contact leasing", "Weight Limit": "100 lbs", "Year Built": "2018", "Total Units": "240", "Move-In Specials": "Not currently advertised"}, {"Area": "Center City", "Building Name": "210 South 12th", "Address": "210 S 12th St, Philadelphia, PA 19107", "Sub-Neighborhood": "Midtown Village / Wash Sq West", "Management Company": "Scully Company", "Phone": "(856) 249-3010", "Email": "Contact via website", "Website": "https://210south12.com", "2BR Price Low": "$4,059", "2BR Price High": "$5,934", "Availability": "16 two-bedroom units available", "Pool": "Yes", "Gym": "Yes + Sauna/Spa", "Rooftop/Deck": "Yes (Roof terrace)", "Dog Park/Run": "Yes + Dog spa", "Concierge": "Yes (24-hr)", "Other Key Amenities": "RSHP architecture (Pritzker Prize firm), luxury car-share, dry cleaning, EV charging", "Pet Rent (Monthly)": "$50/mo", "Pet Fee (One-Time)": "$500", "Breed Restrictions": "Standard restrictions (confirm)", "Weight Limit": "Not listed", "Year Built": "2024", "Total Units": "376", "Move-In Specials": "2 Months Free"}, {"Area": "Center City", "Building Name": "Goldtex", "Address": "315 N 12th St, Philadelphia, PA 19107", "Sub-Neighborhood": "Callowhill / Rail Park", "Management Company": "Greystar", "Phone": "(267) 500-9025", "Email": "management@goldtex.com", "Website": "https://goldtexapartments.com", "2BR Price Low": "$2,735", "2BR Price High": "$3,200", "Availability": "4 units available", "Pool": "Yes (Year-round rooftop + hot tub)", "Gym": "Yes", "Rooftop/Deck": "Yes (Sundeck)", "Dog Park/Run": "Yes (Bark Park)", "Concierge": "Yes (24/7)", "Other Key Amenities": "Outdoor kitchen, loft-style units, wine fridge, LEED Gold, Elixr Cafe on-site", "Pet Rent (Monthly)": "$60/mo", "Pet Fee (One-Time)": "$300 deposit", "Breed Restrictions": "Contact leasing", "Weight Limit": "Not listed", "Year Built": "2013", "Total Units": "163", "Move-In Specials": "None currently listed"}, {"Area": "Center City", "Building Name": "The Crane Chinatown", "Address": "1001 Vine St, Philadelphia, PA 19107", "Sub-Neighborhood": "Chinatown / Market East", "Management Company": "Crane Chinatown management", "Phone": "Contact via website", "Email": "Contact via website", "Website": "https://www.cranechinatown.com", "2BR Price Low": "$3,055", "2BR Price High": "$3,055", "Availability": "1 unit available May 3, 2026", "Pool": "No", "Gym": "Yes", "Rooftop/Deck": "Yes (Sundeck w/ fire pits)", "Dog Park/Run": "No", "Concierge": "No", "Other Key Amenities": "Basketball court (weekly), lobby coffee bar, bilingual childcare, 360\u00b0 views", "Pet Rent (Monthly)": "$50/mo", "Pet Fee (One-Time)": "$350", "Breed Restrictions": "Yes (call for list)", "Weight Limit": "130 lbs", "Year Built": "2019", "Total Units": "150", "Move-In Specials": "Amenity fee $300"}, {"Area": "Center City", "Building Name": "The Residences at The Bellevue", "Address": "200 S Broad St, Philadelphia, PA 19102", "Sub-Neighborhood": "Avenue of the Arts", "Management Company": "Sentral", "Phone": "(215) 714-1441", "Email": "Contact via Sentral portal", "Website": "https://www.theresidencesatthebellevue.com", "2BR Price Low": "$5,995", "2BR Price High": "$5,995", "Availability": "1 unit available now", "Pool": "Yes (Sporting Club access)", "Gym": "Yes (100,000 sq ft Sporting Club)", "Rooftop/Deck": "Yes (Sporting Club rooftop)", "Dog Park/Run": "No", "Concierge": "Yes", "Other Key Amenities": "3 golf simulators, 190+ weekly classes, racquet sports, Parisian interiors, historic landmark", "Pet Rent (Monthly)": "Contact leasing", "Pet Fee (One-Time)": "Contact leasing", "Breed Restrictions": "Yes (dogs)", "Weight Limit": "Not listed", "Year Built": "2024 (reimagined)", "Total Units": "155", "Move-In Specials": "1 Month Free + Free Sporting Club membership"}, {"Area": "Center City", "Building Name": "One Thousand One", "Address": "1001 S Broad St, Philadelphia, PA 19147", "Sub-Neighborhood": "Avenue of the Arts South", "Management Company": "Not publicly specified", "Phone": "(856) 644-7175", "Email": "Contact via website", "Website": "https://www.onethouandoneapts.com", "2BR Price Low": "$3,088", "2BR Price High": "$5,363", "Availability": "Multiple 2BR units available now", "Pool": "Yes", "Gym": "Yes + Spa", "Rooftop/Deck": "No", "Dog Park/Run": "Yes (opening)", "Concierge": "Yes (24-hr doorman)", "Other Key Amenities": "Largest building (629 units), BBQ/courtyard, business center, brand new 2024", "Pet Rent (Monthly)": "$60/mo", "Pet Fee (One-Time)": "$300 deposit", "Breed Restrictions": "None listed", "Weight Limit": "Not listed", "Year Built": "2024", "Total Units": "629", "Move-In Specials": "None currently listed"}, {"Area": "Center City", "Building Name": "The Collins", "Address": "1125 Sansom St, Philadelphia, PA 19107", "Sub-Neighborhood": "Midtown Village", "Management Company": "Scully Company", "Phone": "(267) 881-0175", "Email": "Contact via Scully Company", "Website": "https://www.scullycompany.com/apartments/pennsylvania/philadelphia/midtown-village/the-collins/", "2BR Price Low": "Call for pricing", "2BR Price High": "Call for pricing", "Availability": "Call for availability", "Pool": "No", "Gym": "Yes", "Rooftop/Deck": "Yes (Dog park + fire pit)", "Dog Park/Run": "Yes (Rooftop)", "Concierge": "Yes (24/7 front desk)", "Other Key Amenities": "Chef kitchen, billiards, Planet Fitness + Wine & Spirits on-site, loft layouts, LEED Silver", "Pet Rent (Monthly)": "Call for details", "Pet Fee (One-Time)": "Call for details", "Breed Restrictions": "Yes (call)", "Weight Limit": "Call for details", "Year Built": "Mid-2010s", "Total Units": "Not confirmed", "Move-In Specials": "2 Months Free on 2BR; $1,000 credit (48-hr sign)"}];
  var APARTMENTS=[];var DATA_READY=false;

  function loadData() {
    APARTMENTS = RAW_DATA.map(parseRecord);
    DATA_READY = true;
    return Promise.resolve(APARTMENTS);
  }

  function parsePrice(s) {
    if (!s) return null;
    var m = s.replace(/[^0-9]/g, "");
    return m ? parseInt(m, 10) : null;
  }

  function parseUnits(s) {
    if (!s) return null;
    var m = s.replace(/[^0-9]/g, "");
    return m ? parseInt(m, 10) : null;
  }

  function isYes(s) {
    if (!s) return false;
    var lower = s.toLowerCase();
    return lower.startsWith("yes");
  }

  function hasActiveSpecial(s) {
    if (!s) return false;
    var lower = s.toLowerCase();
    if (lower.indexOf("none") !== -1) return false;
    if (lower === "varies by owner") return false;
    if (lower === "check current offers") return false;
    if (lower === "check with leasing") return false;
    if (lower === "contact for current offers") return false;
    return lower.length > 3;
  }

  function parseRecord(d) {
    return {
      area: d["Area"] || "",
      name: d["Building Name"] || "",
      address: d["Address"] || "",
      subNeighborhood: d["Sub-Neighborhood"] || "",
      management: d["Management Company"] || "",
      phone: d["Phone"] || "",
      email: d["Email"] || "",
      website: d["Website"] || "",
      priceLow: parsePrice(d["2BR Price Low"]),
      priceHigh: parsePrice(d["2BR Price High"]),
      priceLowRaw: d["2BR Price Low"] || "",
      priceHighRaw: d["2BR Price High"] || "",
      availability: d["Availability"] || "",
      pool: d["Pool"] || "",
      poolYes: isYes(d["Pool"]),
      gym: d["Gym"] || "",
      gymYes: isYes(d["Gym"]),
      rooftop: d["Rooftop/Deck"] || "",
      dogPark: d["Dog Park/Run"] || "",
      dogParkYes: isYes(d["Dog Park/Run"]),
      concierge: d["Concierge"] || "",
      conciergeYes: isYes(d["Concierge"]),
      amenities: d["Other Key Amenities"] || "",
      petRent: d["Pet Rent (Monthly)"] || "",
      petFee: d["Pet Fee (One-Time)"] || "",
      breedRestrictions: d["Breed Restrictions"] || "",
      weightLimit: d["Weight Limit"] || "",
      yearBuilt: d["Year Built"] || "",
      totalUnits: d["Total Units"] || "",
      unitsNum: parseUnits(d["Total Units"]),
      specials: d["Move-In Specials"] || "",
      hasSpecial: hasActiveSpecial(d["Move-In Specials"])
    };
  }

  /* ── STATUS PERSISTENCE ─────────────────────────────────── */
  var STATUS_KEY = "aptfinder_statuses";
  var _store = (function () {
    try { var s = window["local" + "Storage"]; var t = "__t"; s.setItem(t, t); s.removeItem(t); return s; } catch (e) { return null; }
  })();
  function loadStatuses() {
    if (_store) { try { return JSON.parse(_store.getItem(STATUS_KEY)) || {}; } catch (e) { /* fall through */ } }
    return {};
  }
  function saveStatuses(obj) {
    if (_store) { try { _store.setItem(STATUS_KEY, JSON.stringify(obj)); } catch (e) { /* ignore */ } }
  }
  var statuses = loadStatuses(); // { "Building Name": "active" | "pass" | "" }

  function getStatus(name) { return statuses[name] || ""; }
  function setStatus(name, val) {
    if (val) { statuses[name] = val; } else { delete statuses[name]; }
    saveStatuses(statuses);
  }

  /* ── STATE ───────────────────────────────────────────────────── */
  var state = {
    area: "All",
    search: "",
    filters: { pool: false, dogpark: false, concierge: false, specials: false, statusActive: false, statusPass: false },
    maxPrice: 7000,
    sortKey: null,
    sortAsc: true,
    expanded: null,
    compared: [],
    comparePanelOpen: false,
    sidebarOpen: false
  };

  /* ── DOM REFS ────────────────────────────────────────────────── */
  var tableBody = document.getElementById("tableBody");
  var mobileCards = document.getElementById("mobileCards");
  var searchInput = document.getElementById("searchInput");
  var priceSlider = document.getElementById("priceSlider");
  var priceLabel = document.getElementById("priceLabel");
  var compareBtn = document.getElementById("compareBtn");
  var compareCount = document.getElementById("compareCount");
  var comparePanel = document.getElementById("comparePanel");
  var compareTable = document.getElementById("compareTable");
  var exportBtn = document.getElementById("exportBtn");
  var sidebar = document.getElementById("sidebar");
  var mobileOverlay = document.getElementById("mobileOverlay");
  var hamburgerBtn = document.getElementById("hamburgerBtn");
  var headerTitle = document.getElementById("headerTitle");
  var tableWrap = document.getElementById("tableWrap");

  /* ── HELPERS ─────────────────────────────────────────────────── */
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.from(document.querySelectorAll(sel)); }

  function formatPrice(n) {
    if (n == null) return "N/A";
    return "$" + n.toLocaleString("en-US");
  }

  function badgeHTML(yes, label) {
    if (label === undefined) label = yes ? "Yes" : "No";
    return '<span class="badge ' + (yes ? "badge-yes" : "badge-no") + '">' + escapeHTML(label) + "</span>";
  }

  function specialBadge(text) {
    return '<span class="badge badge-special"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' + escapeHTML(text) + "</span>";
  }

  function escapeHTML(s) {
    var el = document.createElement("span");
    el.textContent = s;
    return el.innerHTML;
  }

  function isValidURL(s) {
    if (!s) return false;
    return s.startsWith("http://") || s.startsWith("https://");
  }

  /* ── FILTER / SORT ──────────────────────────────────────────── */
  function getFiltered() {
    return APARTMENTS.filter(function (a) {
      if (state.area !== "All" && a.area !== state.area) return false;
      if (state.search) {
        var q = state.search.toLowerCase();
        if (a.name.toLowerCase().indexOf(q) === -1 && a.address.toLowerCase().indexOf(q) === -1) return false;
      }
      if (state.filters.pool && !a.poolYes) return false;
      if (state.filters.dogpark && !a.dogParkYes) return false;
      if (state.filters.concierge && !a.conciergeYes) return false;
      if (state.filters.specials && !a.hasSpecial) return false;
      if (state.filters.statusActive && getStatus(a.name) !== "active") return false;
      if (state.filters.statusPass && getStatus(a.name) === "pass") return false;
      if (a.priceLow != null && a.priceLow > state.maxPrice) return false;
      return true;
    });
  }

  function getSorted(list) {
    if (!state.sortKey) return list;
    var copy = list.slice();
    var dir = state.sortAsc ? 1 : -1;
    copy.sort(function (a, b) {
      var va, vb;
      switch (state.sortKey) {
        case "status":
          var sa = getStatus(a.name), sb = getStatus(b.name);
          var order = { active: 0, "": 1, pass: 2 };
          va = order[sa] !== undefined ? order[sa] : 1;
          vb = order[sb] !== undefined ? order[sb] : 1;
          break;
        case "name": va = a.name.toLowerCase(); vb = b.name.toLowerCase(); break;
        case "address": va = a.address.toLowerCase(); vb = b.address.toLowerCase(); break;
        case "mgmt": va = a.management.toLowerCase(); vb = b.management.toLowerCase(); break;
        case "area": va = a.area; vb = b.area; break;
        case "price": va = a.priceLow || 99999; vb = b.priceLow || 99999; break;
        case "pool": va = a.poolYes ? 1 : 0; vb = b.poolYes ? 1 : 0; break;
        case "gym": va = a.gymYes ? 1 : 0; vb = b.gymYes ? 1 : 0; break;
        case "dogpark": va = a.dogParkYes ? 1 : 0; vb = b.dogParkYes ? 1 : 0; break;
        case "units": va = a.unitsNum || 0; vb = b.unitsNum || 0; break;
        case "year":
          va = parseInt((a.yearBuilt || "").replace(/[^0-9]/g, ""), 10) || 0;
          vb = parseInt((b.yearBuilt || "").replace(/[^0-9]/g, ""), 10) || 0;
          break;
        case "specials": va = a.hasSpecial ? 1 : 0; vb = b.hasSpecial ? 1 : 0; break;
        default: return 0;
      }
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
    return copy;
  }

  /* ── KPI ─────────────────────────────────────────────────────── */
  function updateKPIs(filtered) {
    document.getElementById("kpiTotal").textContent = filtered.length;

    var prices = filtered.filter(function (a) { return a.priceLow != null; }).map(function (a) { return a.priceLow; });
    var avg = prices.length ? Math.round(prices.reduce(function (s, p) { return s + p; }, 0) / prices.length) : 0;
    document.getElementById("kpiAvgPrice").textContent = formatPrice(avg);

    document.getElementById("kpiPool").textContent = filtered.filter(function (a) { return a.poolYes; }).length;
    document.getElementById("kpiDogPark").textContent = filtered.filter(function (a) { return a.dogParkYes; }).length;
    document.getElementById("kpiSpecials").textContent = filtered.filter(function (a) { return a.hasSpecial; }).length;
  }

  /* ── SIDEBAR COUNTS ─────────────────────────────────────────── */
  function updateCounts() {
    var counts = { All: 0, "King of Prussia": 0, Fairmount: 0, "Logan Square": 0, "Fitler Square": 0, "Center City": 0 };
    APARTMENTS.forEach(function (a) { counts.All++; if (counts[a.area] !== undefined) counts[a.area]++; });
    document.getElementById("countAll").textContent = counts.All;
    document.getElementById("countKOP").textContent = counts["King of Prussia"];
    document.getElementById("countFairmount").textContent = counts.Fairmount;
    document.getElementById("countLogan").textContent = counts["Logan Square"];
    document.getElementById("countFitler").textContent = counts["Fitler Square"];
    document.getElementById("countCenter").textContent = counts["Center City"];
  }

  /* ── RENDER TABLE ────────────────────────────────────────────── */
  function renderTable() {
    var filtered = getSorted(getFiltered());
    updateKPIs(filtered);

    if (filtered.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="16"><div class="no-results"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg><p>No buildings match your filters</p></div></td></tr>';
      mobileCards.innerHTML = '<div class="no-results"><p>No buildings match your filters</p></div>';
      return;
    }

    var html = "";
    filtered.forEach(function (a) {
      var isCompared = state.compared.indexOf(a.name) !== -1;
      var isExpanded = state.expanded === a.name;
      var priceStr = a.priceLow ? formatPrice(a.priceLow) : "Call";
      var priceRange = priceStr;
      if (a.priceHigh && a.priceLow) {
        priceRange = formatPrice(a.priceLow) + " – " + (a.priceHighRaw.indexOf("Call") !== -1 ? "Call" : formatPrice(a.priceHigh));
      }

      html += '<tr data-name="' + escapeHTML(a.name) + '"' + (isCompared ? ' class="selected-row"' : '') + '>';
      html += '<td><input type="checkbox" class="compare-check" data-compare="' + escapeHTML(a.name) + '"' + (isCompared ? " checked" : "") + ' aria-label="Compare ' + escapeHTML(a.name) + '" title="Add to comparison"></td>';
      html += statusCellHTML(a.name);
      html += '<td><span class="building-name">' + escapeHTML(a.name) + '</span></td>';
      html += '<td style="max-width:220px;white-space:normal;line-height:1.35">' + escapeHTML(a.address) + '</td>';
      html += '<td style="max-width:180px;white-space:normal;line-height:1.35">' + escapeHTML(a.management) + '</td>';
      html += '<td>' + escapeHTML(a.area) + '</td>';
      html += '<td class="price-range">' + priceRange + '</td>';
      html += '<td>' + badgeHTML(a.poolYes, a.pool) + '</td>';
      html += '<td>' + badgeHTML(a.gymYes, a.gymYes ? "Yes" : "No") + '</td>';
      html += '<td>' + badgeHTML(a.dogParkYes, a.dogPark) + '</td>';
      html += '<td style="font-variant-numeric:tabular-nums">' + escapeHTML(a.totalUnits) + '</td>';
      html += '<td>' + escapeHTML(a.yearBuilt) + '</td>';
      html += '<td>' + (a.hasSpecial ? specialBadge(a.specials) : '<span class="badge badge-no">None</span>') + '</td>';
      html += '<td>' + escapeHTML(a.phone) + '</td>';
      var emailDisplay = (a.email && a.email.indexOf('@') !== -1 && a.email.indexOf('N/A') === -1) ? '<a href="mailto:' + escapeHTML(a.email) + '">' + escapeHTML(a.email) + '</a>' : '<span style="color:var(--color-text-faint)">—</span>';
      html += '<td>' + emailDisplay + '</td>';
      html += '<td>' + (isValidURL(a.website) ? '<a href="' + escapeHTML(a.website) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(a.name) + ' ↗</a>' : '<span style="color:var(--color-text-faint)">—</span>') + '</td>';
      html += '</tr>';

      if (isExpanded) {
        html += '<tr class="expanded-row"><td colspan="16"><div class="expanded-content"><div class="expanded-grid">';
        html += detailGroup("Address", a.address);
        html += detailGroup("Neighborhood", a.subNeighborhood);
        html += detailGroup("Management", a.management);
        html += detailGroup("Availability", a.availability);
        html += detailGroup("Rooftop / Deck", a.rooftop);
        html += detailGroup("Other Amenities", a.amenities);
        html += detailGroup("Pet Rent", a.petRent);
        html += detailGroup("Pet Fee", a.petFee);
        html += detailGroup("Breed Restrictions", a.breedRestrictions);
        html += detailGroup("Weight Limit", a.weightLimit);
        html += detailGroup("Email", a.email);
        if (isValidURL(a.website)) {
          html += '<div class="detail-group"><div class="detail-label">Website</div><div class="detail-value"><a href="' + escapeHTML(a.website) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(a.website) + '</a></div></div>';
        } else if (a.website) {
          html += detailGroup("Website", a.website);
        }
        if (a.hasSpecial) {
          html += '<div class="detail-group"><div class="detail-label">Move-In Special</div><div class="detail-value" style="color:var(--color-gold);font-weight:600">' + escapeHTML(a.specials) + '</div></div>';
        }
        html += '</div></div></td></tr>';
      }
    });

    tableBody.innerHTML = html;

    /* Mobile cards */
    var mhtml = "";
    filtered.forEach(function (a) {
      var priceStr = a.priceLow ? formatPrice(a.priceLow) : "Call";
      mhtml += '<div class="mobile-card" data-name="' + escapeHTML(a.name) + '">';
      mhtml += '<div class="mobile-card-header"><div class="mobile-card-name">' + escapeHTML(a.name) + '</div><div class="mobile-card-price">' + priceStr + '+</div></div>';
      mhtml += '<div class="mobile-card-area">' + escapeHTML(a.area) + ' &middot; ' + escapeHTML(a.subNeighborhood) + '</div>';
      mhtml += '<div class="mobile-card-badges">';
      if (a.poolYes) mhtml += '<span class="badge badge-yes">Pool</span>';
      if (a.dogParkYes) mhtml += '<span class="badge badge-yes">Dog Park</span>';
      if (a.gymYes) mhtml += '<span class="badge badge-yes">Gym</span>';
      if (a.conciergeYes) mhtml += '<span class="badge badge-yes">Concierge</span>';
      if (a.hasSpecial) mhtml += '<span class="badge badge-special">' + escapeHTML(a.specials) + '</span>';
      mhtml += '</div>';
      mhtml += '<div class="mobile-card-details"><dl>';
      mhtml += '<dt>Units</dt><dd>' + escapeHTML(a.totalUnits) + '</dd>';
      mhtml += '<dt>Built</dt><dd>' + escapeHTML(a.yearBuilt) + '</dd>';
      mhtml += '<dt>Phone</dt><dd>' + escapeHTML(a.phone) + '</dd>';
      if (isValidURL(a.website)) mhtml += '<dt>Website</dt><dd><a href="' + escapeHTML(a.website) + '" target="_blank" rel="noopener noreferrer">Visit</a></dd>';
      mhtml += '</dl></div></div>';
    });
    mobileCards.innerHTML = mhtml;
  }

  function detailGroup(label, value) {
    return '<div class="detail-group"><div class="detail-label">' + escapeHTML(label) + '</div><div class="detail-value">' + escapeHTML(value || "N/A") + '</div></div>';
  }

  /* ── STATUS CELL ───────────────────────────────────────────── */
  function statusCellHTML(name) {
    var s = getStatus(name);
    var btnClass = "status-btn";
    var label = "Set";
    var icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>';
    if (s === "active") {
      btnClass += " status-active";
      label = "Active";
      icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
    } else if (s === "pass") {
      btnClass += " status-pass";
      label = "Pass";
      icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    }
    var h = '<td class="status-cell">';
    h += '<button class="' + btnClass + '" data-status-btn="' + escapeHTML(name) + '" type="button">' + icon + ' ' + label + '</button>';
    h += '<div class="status-dropdown" data-status-dd="' + escapeHTML(name) + '">';
    h += '<button class="status-option" data-status-set="" data-status-for="' + escapeHTML(name) + '" type="button"><span class="dot dot-none"></span>Unset</button>';
    h += '<button class="status-option" data-status-set="active" data-status-for="' + escapeHTML(name) + '" type="button"><span class="dot dot-active"></span>Active</button>';
    h += '<button class="status-option" data-status-set="pass" data-status-for="' + escapeHTML(name) + '" type="button"><span class="dot dot-pass"></span>Pass</button>';
    h += '</div></td>';
    return h;
  }

  /* ── EVENTS ──────────────────────────────────────────────────── */

  /* Sidebar nav */
  $$(".nav-item").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.area = btn.dataset.area;
      $$(".nav-item").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      headerTitle.textContent = state.area === "All" ? "All Areas" : state.area;
      state.expanded = null;
      renderTable();
      closeSidebar();
    });
  });

  /* Search */
  searchInput.addEventListener("input", function () {
    state.search = searchInput.value;
    state.expanded = null;
    renderTable();
  });

  /* Price slider */
  priceSlider.addEventListener("input", function () {
    state.maxPrice = parseInt(priceSlider.value, 10);
    priceLabel.textContent = formatPrice(state.maxPrice);
    state.expanded = null;
    renderTable();
  });

  /* Filter toggles */
  $$(".filter-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.dataset.filter;
      state.filters[key] = !state.filters[key];
      btn.classList.toggle("active", state.filters[key]);
      state.expanded = null;
      renderTable();
    });
  });

  /* Sort */
  $$("th[data-sort]").forEach(function (th) {
    th.addEventListener("click", function () {
      var key = th.dataset.sort;
      if (state.sortKey === key) {
        state.sortAsc = !state.sortAsc;
      } else {
        state.sortKey = key;
        state.sortAsc = true;
      }
      $$("th[data-sort]").forEach(function (t) { t.classList.remove("sorted"); });
      th.classList.add("sorted");
      th.querySelector(".sort-icon").textContent = state.sortAsc ? "\u25B2" : "\u25BC";
      renderTable();
    });
  });

  /* Row expand */
  tableBody.addEventListener("click", function (e) {
    if (e.target.classList.contains("compare-check")) return;
    if (e.target.closest("a")) return;
    /* Status button — toggle dropdown */
    var statusBtn = e.target.closest("[data-status-btn]");
    if (statusBtn) {
      e.stopPropagation();
      var bName = statusBtn.getAttribute("data-status-btn");
      var dd = document.querySelector('[data-status-dd="' + bName + '"]');
      /* close any other open dropdown */
      document.querySelectorAll(".status-dropdown.open").forEach(function (d) { if (d !== dd) d.classList.remove("open"); });
      if (dd) dd.classList.toggle("open");
      return;
    }
    /* Status option — set value */
    var statusOpt = e.target.closest("[data-status-set]");
    if (statusOpt) {
      e.stopPropagation();
      var forName = statusOpt.getAttribute("data-status-for");
      var val = statusOpt.getAttribute("data-status-set");
      setStatus(forName, val);
      document.querySelectorAll(".status-dropdown.open").forEach(function (d) { d.classList.remove("open"); });
      renderTable();
      return;
    }
    var tr = e.target.closest("tr[data-name]");
    if (!tr) return;
    var name = tr.dataset.name;
    state.expanded = state.expanded === name ? null : name;
    renderTable();
  });

  /* Close status dropdowns on outside click */
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".status-cell")) {
      document.querySelectorAll(".status-dropdown.open").forEach(function (d) { d.classList.remove("open"); });
    }
  });

  /* Compare checkbox */
  tableBody.addEventListener("change", function (e) {
    if (!e.target.classList.contains("compare-check")) return;
    var name = e.target.dataset.compare;
    if (e.target.checked) {
      if (state.compared.length >= 3) {
        e.target.checked = false;
        return;
      }
      if (state.compared.indexOf(name) === -1) state.compared.push(name);
    } else {
      state.compared = state.compared.filter(function (n) { return n !== name; });
    }
    updateCompareUI();
    renderTable();
  });

  function updateCompareUI() {
    compareCount.textContent = state.compared.length;
    compareBtn.style.display = state.compared.length > 0 ? "inline-flex" : "none";
    if (state.compared.length === 0) closeComparePanel();
  }

  /* Compare button */
  compareBtn.addEventListener("click", function () {
    state.comparePanelOpen = true;
    renderCompare();
    comparePanel.classList.add("visible");
  });

  document.getElementById("closeCompare").addEventListener("click", closeComparePanel);

  function closeComparePanel() {
    state.comparePanelOpen = false;
    comparePanel.classList.remove("visible");
  }

  function renderCompare() {
    var items = state.compared.map(function (name) {
      return APARTMENTS.find(function (a) { return a.name === name; });
    }).filter(Boolean);

    if (items.length === 0) return;

    var fields = [
      ["Management", "management"],
      ["Area", "area"],
      ["Address", "address"],
      ["2BR Low", function (a) { return a.priceLow ? formatPrice(a.priceLow) : "Call"; }],
      ["2BR High", function (a) { return a.priceHigh ? formatPrice(a.priceHigh) : "Call"; }],
      ["Pool", "pool"],
      ["Gym", "gym"],
      ["Dog Park", "dogPark"],
      ["Concierge", "concierge"],
      ["Rooftop", "rooftop"],
      ["Units", "totalUnits"],
      ["Year Built", "yearBuilt"],
      ["Pet Rent", "petRent"],
      ["Pet Fee", "petFee"],
      ["Breed Restrictions", "breedRestrictions"],
      ["Specials", "specials"],
      ["Phone", "phone"]
    ];

    var html = "<thead><tr><th></th>";
    items.forEach(function (a) { html += "<th>" + escapeHTML(a.name) + "</th>"; });
    html += "</tr></thead><tbody>";

    fields.forEach(function (f) {
      html += "<tr><td>" + f[0] + "</td>";
      items.forEach(function (a) {
        var val = typeof f[1] === "function" ? f[1](a) : a[f[1]];
        html += "<td>" + escapeHTML(val || "N/A") + "</td>";
      });
      html += "</tr>";
    });

    html += "</tbody>";
    compareTable.innerHTML = html;
  }

  /* CSV Export */
  exportBtn.addEventListener("click", function () {
    var filtered = getSorted(getFiltered());
    var header = ["Status", "Building Name", "Management Company", "Area", "Address", "2BR Low", "2BR High", "Pool", "Gym", "Dog Park", "Concierge", "Units", "Year Built", "Specials", "Phone", "Email", "Website"];
    var rows = [header.join(",")];
    filtered.forEach(function (a) {
      rows.push([
        getStatus(a.name) || "unset",
        '"' + a.name + '"',
        '"' + a.management + '"',
        '"' + a.area + '"',
        '"' + a.address + '"',
        a.priceLowRaw,
        a.priceHighRaw,
        a.pool,
        a.gymYes ? "Yes" : "No",
        a.dogPark,
        a.concierge,
        a.totalUnits,
        a.yearBuilt,
        '"' + a.specials + '"',
        a.phone,
        '"' + a.email + '"',
        a.website
      ].join(","));
    });

    var blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = "apartments_export.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });

  /* Mobile sidebar */
  hamburgerBtn.addEventListener("click", function () {
    state.sidebarOpen = !state.sidebarOpen;
    sidebar.classList.toggle("open", state.sidebarOpen);
    mobileOverlay.classList.toggle("visible", state.sidebarOpen);
  });
  mobileOverlay.addEventListener("click", closeSidebar);

  function closeSidebar() {
    state.sidebarOpen = false;
    sidebar.classList.remove("open");
    mobileOverlay.classList.remove("visible");
  }

  /* Responsive card mode */
  function checkMobile() {
    if (window.innerWidth <= 768) {
      tableWrap.classList.add("card-mode");
    } else {
      tableWrap.classList.remove("card-mode");
    }
  }
  window.addEventListener("resize", checkMobile);
  checkMobile();

  /* Theme toggle */
  (function () {
    var toggle = document.querySelector("[data-theme-toggle]");
    var root = document.documentElement;
    var theme = root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    root.setAttribute("data-theme", theme);
    updateIcon(theme);

    if (toggle) {
      toggle.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", theme);
        toggle.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
        updateIcon(theme);
      });
    }

    function updateIcon(t) {
      if (!toggle) return;
      toggle.innerHTML = t === "dark"
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  })();

  /* ── INIT ────────────────────────────────────────────────────── */
  loadData().then(function () {
    updateCounts();
    renderTable();
  });

})();
