/* AptFinder Dashboard — Application Logic */

(function () {
  "use strict";

  /* ── DATA ────────────────────────────────────────────────────── */
  var RAW_DATA = [{"Area":"Fairmount","Building Name":"Broadridge","Address":"1300 Fairmount Ave, Philadelphia, PA 19123","Sub-Neighborhood":"Core Fairmount","Management Company":"UDR (United Dominion Realty)","Phone":"610-553-3384","Email":"N/A (contact via UDR portal)","Website":"https://www.udr.com/philadelphia-apartments/fairmount/broadridge/","2BR Price Low":"$2,827","2BR Price High":"$3,180","Availability":"Multiple 2BR units available now through June","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes (Skydeck lawn)","Dog Park/Run":"Yes","Concierge":"No","Other Key Amenities":"ALDI on-site, podcast studio, movie theater, demo kitchen, yoga/spa, billiards","Pet Rent (Monthly)":"$65/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"May apply (confirm)","Weight Limit":"Not specified","Year Built":"2021","Total Units":"478","Move-In Specials":"2 Months Free (move in by 3/16, 14-mo lease)","Parking Type":"garage","Parking Cost":"costs extra: $200/month unreserved, $250/month reserved ([UDR Expenses](https://www.udr.com/philadelphia-apartments/fairmount/broadridge/apartment-expenses))","Reserved Parking":"yes, $250/month","EV Charging":"yes, Level 2 ChargePoint stations on 2nd floor ([ChargeHub](https://chargehub.com/en/ev-charging-stations/united-states/pennsylvania/philadelphia/broadridge-philly/electric-car-stations-near-me?locId=132385))","Parking Notes":"Third-party listing shows $175 unreserved/$199 reserved (possibly outdated) ([Black Label](https://blacklabelkw.com/properties/1300-fairmount-ave-flat-1bed-den-philadelphia-pa-19123-paph2032826)). Not included in rent. Prices subject to change."},{"Area":"Fairmount","Building Name":"The Noble","Address":"200 Spring Garden St, Philadelphia, PA 19123","Sub-Neighborhood":"Spring Garden / N. Liberties border","Management Company":"Greystar / KRE Group","Phone":"267-415-8501","Email":"N/A","Website":"https://thenoblephilly.com","2BR Price Low":"$2,868","2BR Price High":"$3,838","Availability":"Multiple 2BR units available now","Pool":"Yes (75-ft lap pool)","Gym":"Yes (17,000 sq ft City Fitness)","Rooftop/Deck":"Yes (3 terraces)","Dog Park/Run":"Yes","Concierge":"Yes (24-hr)","Other Key Amenities":"Co-working, art throughout, curated events, car share, EV stations","Pet Rent (Monthly)":"$80/mo","Pet Fee (One-Time)":"$350-$700","Breed Restrictions":"May apply (confirm)","Weight Limit":"Not specified","Year Built":"2024","Total Units":"360","Move-In Specials":"Up to 3 months free (confirm)","Parking Type":"garage (structured, onsite)","Parking Cost":"$350 per month (extra, not included in rent)","Reserved Parking":"likely available (waitlist reported)","EV Charging":"yes, EV stations available","Parking Notes":"84 spaces for 360 units; contact property for details and availability"},{"Area":"Fairmount","Building Name":"Park Towne Place","Address":"2200 Benjamin Franklin Pkwy, Philadelphia, PA 19130","Sub-Neighborhood":"Art Museum / Parkway","Management Company":"AIR Communities (Apartment Income REIT)","Phone":"814-646-3116","Email":"N/A (contact via website)","Website":"https://www.parktowneapthomes.com","2BR Price Low":"$2,608","2BR Price High":"$3,276","Availability":"Multiple 2BR units available; penthouses to $8,960","Pool":"Yes (Largest in area)","Gym":"Yes (4,000 sq ft TechnoGym)","Rooftop/Deck":"Yes (Skyline Lounge)","Dog Park/Run":"Yes (3 nearby)","Concierge":"No","Other Key Amenities":"Boxing, spin/yoga, Oar Pub lounge, Doggie VIP grooming, on-site salon, dry cleaners, restaurant","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$250","Breed Restrictions":"Yes (12 breeds restricted)","Weight Limit":"300 lbs","Year Built":"1959 (renovated)","Total Units":"940","Move-In Specials":"Up to 2 months free (select)","Parking Type":"Garage (including tandem), standard (likely surface), EV spots","Parking Cost":"Extra cost, not included in rent. Monthly rates start at: Standard $265, Garage $321, Garage Tandem $449, EV $365. Additional charges may apply for upgrades/additional vehicles.","Reserved Parking":"Likely available (monthly paid spaces suggest assigned/reserved)","EV Charging":"Yes, EV parking starts at $365/month","Parking Notes":"Contact leasing team for details and availability. Bike storage $10-25, general storage $60-150."},{"Area":"Fairmount","Building Name":"LVL North","Address":"510 N Broad St, Philadelphia, PA 19130","Sub-Neighborhood":"Spring Garden / N. Broad","Management Company":"Alterra Property Group","Phone":"856-672-7811","Email":"N/A","Website":"https://www.lvlnorth.com","2BR Price Low":"$2,386","2BR Price High":"$2,857","Availability":"Multiple 2BR units available now through May","Pool":"No","Gym":"Yes (Peloton)","Rooftop/Deck":"Yes (BBQ deck)","Dog Park/Run":"No","Concierge":"Yes (24/7 front desk)","Other Key Amenities":"Golf simulator, arcade, demo kitchen, ground-floor grocery, transit-oriented","Pet Rent (Monthly)":"Not specified","Pet Fee (One-Time)":"Not specified","Breed Restrictions":"None listed","Weight Limit":"None","Year Built":"2022","Total Units":"410","Move-In Specials":"Up to 2 months free (confirm)","Parking Type":"Garage","Parking Cost":"Costs extra (additional fees; monthly rate not specified by building; nearby garage $350)","Reserved Parking":"Not specified","EV Charging":"Not specified","Parking Notes":"Parking garage available for additional fees. Contact property for details and exact rates. On-site garage has 288 spaces, EV chargers, open 24/7, but monthly $350 listed may be public rates."},{"Area":"Fairmount","Building Name":"The Gio","Address":"2630 W Girard Ave, Philadelphia, PA 19130","Sub-Neighborhood":"Fairmount / Brewerytown border","Management Company":"Private operator","Phone":"Contact via website","Email":"N/A","Website":"https://www.thegio.com","2BR Price Low":"$2,395","2BR Price High":"$2,495","Availability":"4 units available immediately","Pool":"No","Gym":"Yes (24-hr)","Rooftop/Deck":"Yes (with dog run)","Dog Park/Run":"Yes (Rooftop)","Concierge":"No","Other Key Amenities":"Zoom room, bi-level lofts available, private rooftop decks (select)","Pet Rent (Monthly)":"Not specified","Pet Fee (One-Time)":"Not specified","Breed Restrictions":"May apply","Weight Limit":"Contact leasing","Year Built":"2023","Total Units":"160","Move-In Specials":"1 month free + up to $1,000 credit","Parking Type":"gated garage","Parking Cost":"$250/month extra","Reserved Parking":"Yes, assigned spaces","EV Charging":"No","Parking Notes":"Secured resident parking; some amenities available only in specific homes - contact leasing office for details"},{"Area":"Fairmount","Building Name":"Fairmount North","Address":"2601 Poplar St, Philadelphia, PA 19130","Sub-Neighborhood":"Core Fairmount","Management Company":"2601 Poplar OZ LLC","Phone":"Contact via website","Email":"N/A","Website":"https://www.fairmountnorth.com","2BR Price Low":"$2,225","2BR Price High":"$2,695","Availability":"3 units available now","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes (Roof deck)","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Latch security, Amazon lockers, walk score 93","Pet Rent (Monthly)":"Not specified","Pet Fee (One-Time)":"Not specified","Breed Restrictions":"None listed","Weight Limit":"None listed","Year Built":"2022","Total Units":"108","Move-In Specials":"Up to 1.5 months free (confirm)","Parking Type":"Garage (indoor)","Parking Cost":"Costs extra (not included in rent); monthly rate not specified - contact property","Reserved Parking":"Not specified - contact property","EV Charging":"Not mentioned","Parking Notes":"Parking available per listings; resident notes it's expensive for indoor spots. Development presentation shows parking garage entry. Specific details require contacting management."},{"Area":"Logan Square","Building Name":"ReNew Logan Square","Address":"1 Franklin Town Blvd, Philadelphia, PA 19103","Sub-Neighborhood":"Eastern Logan Square","Management Company":"Institutional operator (not disclosed)","Phone":"856-644-6137","Email":"N/A","Website":"https://www.renewlogansquare.com","2BR Price Low":"$2,929","2BR Price High":"$4,339","Availability":"10 units available (now through June)","Pool":"Yes (Indoor)","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"Library, game room, party room, BBQ patio, business center","Pet Rent (Monthly)":"$25/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Yes (10 breeds)","Weight Limit":"80 lbs","Year Built":"1987 (renovated)","Total Units":"335","Move-In Specials":"2 Months Free","Parking Type":"Garage (covered, self-park)","Parking Cost":"Costs extra (not included in rent); contact property for monthly rates","Reserved Parking":"Reserved spaces available","EV Charging":"Not mentioned","Parking Notes":"On-site garage at 1701 Callowhill St adjacent to building; hourly rates available via apps like HONK ($7.65-$16.95); managed by Power Parking; Apartments.com states \"Contact this property for parking details.\""},{"Area":"Logan Square","Building Name":"1919 Market","Address":"1919 Market St, Philadelphia, PA 19103","Sub-Neighborhood":"Logan Square / Market West","Management Company":"LCOR","Phone":"856-672-4154","Email":"residentsupport@lcor.com","Website":"https://www.1919marketapts.com","2BR Price Low":"$3,696","2BR Price High":"$5,946","Availability":"Multiple 2BR and penthouses available","Pool":"Yes (Infinity rooftop)","Gym":"Yes (Spin/Yoga studios)","Rooftop/Deck":"Yes (360° fireplace lounge)","Dog Park/Run":"No (Pet wash station)","Concierge":"Yes","Other Key Amenities":"Golf simulator, wine room, sports bar, screening room, Trader Joe's on-site","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$500","Breed Restrictions":"Yes (call for list)","Weight Limit":"Not specified","Year Built":"2016","Total Units":"321","Move-In Specials":"1 Month Free","Parking Type":"garage","Parking Cost":"costs extra (fees apply; monthly rate not publicly listed)","Reserved Parking":"not specified","EV Charging":"not specified","Parking Notes":"Garage parking available but separate fee required (not included in rent); operated by LAZ Parking with subscription options available but no specific resident monthly cost found. Contact property for details and rates."},{"Area":"Logan Square","Building Name":"One Cathedral Square","Address":"1701 Race St, Philadelphia, PA 19103","Sub-Neighborhood":"Heart of Logan Square","Management Company":"Not publicly listed","Phone":"877-915-0552","Email":"N/A","Website":"https://www.onecathedralsquare.com","2BR Price Low":"$3,495","2BR Price High":"$5,429","Availability":"3 units available now","Pool":"No","Gym":"Yes (Rooftop fitness + yoga)","Rooftop/Deck":"Yes (Panoramic lounge)","Dog Park/Run":"No (nearby parks)","Concierge":"Yes (24-hr)","Other Key Amenities":"Demo kitchen (seats 20), co-working, Fitwel certified, Nest/Latch smart tech","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$350","Breed Restrictions":"Yes (contact)","Weight Limit":"Not specified","Year Built":"2022","Total Units":"271","Move-In Specials":"2 Months Free","Parking Type":"underground garage","Parking Cost":"$475 monthly (extra, not included in rent)","Reserved Parking":"No (first come first served/unassigned; 18 spaces)","EV Charging":"Not mentioned","Parking Notes":"Limited to 18 spaces; surrounding paid garages nearby. Contact property for details."},{"Area":"Logan Square","Building Name":"Dalian on the Park","Address":"500 N 21st St, Philadelphia, PA 19130","Sub-Neighborhood":"Western Logan Sq / Art Museum","Management Company":"Not publicly disclosed","Phone":"833-266-2118","Email":"N/A","Website":"https://www.dalianonthepark.com","2BR Price Low":"$4,176","2BR Price High":"$6,380","Availability":"3 units available","Pool":"Yes (Infinity pool)","Gym":"Yes","Rooftop/Deck":"Yes (30,000 sq ft Sky Deck)","Dog Park/Run":"No (Dog wash room)","Concierge":"Yes (24-hr)","Other Key Amenities":"On-site Whole Foods, yoga studio, library, media bar, personal trainer, pet services","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$350","Breed Restrictions":"Yes (contact)","Weight Limit":"Not specified","Year Built":"2016","Total Units":"293","Move-In Specials":"Up to 3 Months Free","Parking Type":"Garage (attached covered parking, structure lot)","Parking Cost":"Costs extra; $250-$300/month for garage, $250-$500/month for surface lot per various sources","Reserved Parking":"Unassigned","EV Charging":"Yes, Level 2 free for tenants","Parking Notes":"Managed by LAZ Parking; 420 spaces in garage; available for rent separately from apartment rent"},{"Area":"Logan Square","Building Name":"The Alexander","Address":"300 Alexander Ct, Philadelphia, PA 19103","Sub-Neighborhood":"Northern Logan Square","Management Company":"Greystar","Phone":"215-372-0300","Email":"N/A (contact via Greystar)","Website":"https://thealexanderphilly.com","2BR Price Low":"$3,582","2BR Price High":"$3,922","Availability":"5 units available (now + coming soon)","Pool":"Yes (Indoor spa pool)","Gym":"Yes","Rooftop/Deck":"Yes (Observation deck)","Dog Park/Run":"No (Pet grooming station)","Concierge":"Yes (24-hr)","Other Key Amenities":"Courtyard terrace, demo kitchen, TV lounge, Sweetgreen on-site, bike mechanic station","Pet Rent (Monthly)":"Not listed","Pet Fee (One-Time)":"Not listed","Breed Restrictions":"Not listed (confirm)","Weight Limit":"Not listed","Year Built":"~2021","Total Units":"~275","Move-In Specials":"Special offer (call for details)","Parking Type":"On-site access-controlled underground garage","Parking Cost":"Costs extra (fees apply; monthly cost not publicly listed; contact property for details)","Reserved Parking":"Available but may involve waitlist (not guaranteed; not assigned)","EV Charging":"Not mentioned; no public confirmation","Parking Notes":"Secure garage parking; described as a perk in reviews. Some residents report waitlists for spots and potential removal upon renewal. Bike storage available."},{"Area":"Logan Square","Building Name":"The Murano","Address":"2101 Market St, Philadelphia, PA 19103","Sub-Neighborhood":"Eastern Logan Square","Management Company":"Individual condo owners","Phone":"(786) 403-0330","Email":"Contact via listing agents","Website":"N/A (condo building - listed on Zillow/Apartments.com)","2BR Price Low":"$3,700","2BR Price High":"$4,800","Availability":"Limited; check individual listings","Pool":"Yes (60-ft indoor heated lap)","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"Yes (24-hr doorman)","Other Key Amenities":"42-story iconic curved glass tower, community room, storage, parking included","Pet Rent (Monthly)":"Varies by owner","Pet Fee (One-Time)":"Varies by owner","Breed Restrictions":"Varies by owner","Weight Limit":"~40-80 lbs typical","Year Built":"2008","Total Units":"251","Move-In Specials":"Varies by owner","Parking Type":"attached covered garage","Parking Cost":"Varies by rental listing; sometimes included in rent ($0), sometimes extra (resident sublet rate ~$375/month)","Reserved Parking":"Yes, assigned/reserved spaces available","EV Charging":"Yes, shared EV charging stations in the garage","Parking Notes":"Deeded parking for some condos; on-site garage with direct building access; storage often included with parking in rentals"},{"Area":"Logan Square","Building Name":"1900 Arch","Address":"1900 Arch St, Philadelphia, PA 19103","Sub-Neighborhood":"Center of Logan Square","Management Company":"PMC Property Group","Phone":"267-507-1511","Email":"N/A","Website":"https://www.1900arch.com","2BR Price Low":"$2,845","2BR Price High":"Call for pricing","Availability":"Units available (contact for 2BR)","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes (Sky deck)","Dog Park/Run":"Yes (Bark Park)","Concierge":"No","Other Key Amenities":"Entertainment lounge, billiards, shuffleboard, fire pits, dog walking services","Pet Rent (Monthly)":"Not listed","Pet Fee (One-Time)":"Not listed","Breed Restrictions":"Contact PMC","Weight Limit":"Small dogs only","Year Built":"~2010s","Total Units":"300+","Move-In Specials":"Check current offers","Parking Type":"covered garage (subterranean lot, valet-assist)","Parking Cost":"costs extra: Standard $325/month, Premium $375/month, Tandem $550/month ([ApartmentList](https://www.apartmentlist.com/pa/philadelphia/1900-arch-apartments--1)); Monthly $350 ([ParkMe](https://www.parkme.com/lot/189157/1900-arch-st))","Reserved Parking":"no (unassigned)","EV Charging":"not mentioned / unknown","Parking Notes":"Operated by Patriot Parking; on-site covered lot per listings; nearby garage rates listed separately"},{"Area":"Fitler Square","Building Name":"Locust on the Park","Address":"201 S 25th St, Philadelphia, PA 19103","Sub-Neighborhood":"Core Fitler Square","Management Company":"Not publicly named","Phone":"(272) 225-6911","Email":"N/A","Website":"https://www.locustonthepark.com","2BR Price Low":"$3,777","2BR Price High":"$3,846","Availability":"2 units available now","Pool":"No","Gym":"Yes (24/7)","Rooftop/Deck":"No","Dog Park/Run":"No (adj. Schuylkill River Park)","Concierge":"Yes (24-hr front desk)","Other Key Amenities":"Clubroom, demo kitchen, smart home, EV parking, Xfinity internet included","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$400","Breed Restrictions":"Yes (contact)","Weight Limit":"None","Year Built":"1911 (renovated)","Total Units":"152","Move-In Specials":"1 month free (select homes)","Parking Type":"Garage (Garage, Garage Premier), other options (Standard, Premier)","Parking Cost":"Costs extra; monthly rates start at: Standard $275, Premier $290, Garage $326, Garage Premier $347. Additional charges may apply for upgrades/additional vehicles.","Reserved Parking":"Premier options likely reserved; ask leasing team for details","EV Charging":"Yes, designated on-site EV parking available","Parking Notes":"Rates are per month. Contact leasing team for details on upgrades, additional vehicles, and reservations."},{"Area":"Fitler Square","Building Name":"2116 Chestnut","Address":"2116 Chestnut St, Philadelphia, PA 19103","Sub-Neighborhood":"Northern Fitler Sq border","Management Company":"Harbor Group Management","Phone":"Contact via website","Email":"N/A","Website":"https://www.harborgroupmanagement.com/apartments/pa/philadelphia/2116-chestnut","2BR Price Low":"$3,970","2BR Price High":"$5,710","Availability":"Multiple units available","Pool":"No","Gym":"Yes (24-hr)","Rooftop/Deck":"No (Sundeck w/ fire pit)","Dog Park/Run":"Yes","Concierge":"Yes (24/7)","Other Key Amenities":"Yoga studio, event room, 360° city views, dry cleaning, ground-floor retail","Pet Rent (Monthly)":"$35/mo","Pet Fee (One-Time)":"Contact leasing","Breed Restrictions":"Yes (extensive list)","Weight Limit":"80 lbs / 36\" height","Year Built":"2013","Total Units":"~350","Move-In Specials":"1 month free (confirm)","Parking Type":"garage","Parking Cost":"$350/month extra (Garage parking, per [Greystar calculator](https://www.greystar.com/2116-chestnut-philadelphia-pa/p_13226/calculator))","Reserved Parking":"Yes, assigned garage parking ([Apartments.com](https://www.apartments.com/2116-chestnut-philadelphia-pa/w8xrmsk/), [VeryApt](https://www.veryapt.com/ApartmentReview-a124-2116-chestnut-philadelphia))","EV Charging":"Yes, EV charging stations available at building ([Apartments.com](https://www.apartments.com/2116-chestnut-philadelphia-pa/w8xrmsk/), [MapQuest Blink](https://www.mapquest.com/us/pennsylvania/electric-charging-station-701000288))","Parking Notes":"Guest parking available. On-site parking garage confirmed in resident reviews. Rent range $2,135-$5,710/mo (excludes parking). Official site does not mention parking."},{"Area":"Fitler Square","Building Name":"Naval Square","Address":"2462 Grays Ferry Ave, Philadelphia, PA 19146","Sub-Neighborhood":"South Fitler Sq border","Management Company":"Keating Management (confirm current)","Phone":"(786) 403-0330","Email":"N/A","Website":"Search Naval Square Philadelphia","2BR Price Low":"$2,999","2BR Price High":"$3,265","Availability":"Limited; contact directly (rolling turnover)","Pool":"Yes (Outdoor)","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"Yes (green lawns)","Concierge":"Yes (24-hr front desk)","Other Key Amenities":"Gated campus, expansive green spaces, gardens, trails, picnic areas","Pet Rent (Monthly)":"Contact office","Pet Fee (One-Time)":"Contact office","Breed Restrictions":"Contact office","Weight Limit":"Contact office","Year Built":"2006","Total Units":"423","Move-In Specials":"None currently listed","Parking Type":"Garage and surface lot","Parking Cost":"Typically included in rent; specific monthly costs not listed","Reserved Parking":"Deeded/assigned available (primarily for condos); available for nearly all units","EV Charging":"No information found","Parking Notes":"Ample dedicated guest parking; convenient garage or lot parking for nearly all units; surface parking lot listed in amenities"},{"Area":"Fitler Square","Building Name":"AQ Rittenhouse","Address":"2021 Chestnut St, Philadelphia, PA 19103","Sub-Neighborhood":"Northern Fitler Sq border","Management Company":"Not publicly named","Phone":"(215) 703-9582","Email":"N/A","Website":"https://aqrittenhouseapts.com","2BR Price Low":"$2,253","2BR Price High":"$2,653","Availability":"Multiple 2BR units available now","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes (Sky terrace w/ fire pits)","Dog Park/Run":"No","Concierge":"Yes (24-hr doorman)","Other Key Amenities":"WiFi cafe, courtyard, car share, bike storage w/ repair station","Pet Rent (Monthly)":"$30/mo","Pet Fee (One-Time)":"$350","Breed Restrictions":"Yes (call for list)","Weight Limit":"85 lbs","Year Built":"Not confirmed","Total Units":"Not confirmed","Move-In Specials":"Up to 2 months free","Parking Type":"Garage (inferred from garaged car share program)","Parking Cost":"Costs extra; contact property for details (monthly rate not specified)","Reserved Parking":"Not specified","EV Charging":"Not specified","Parking Notes":"Parking available per [Apartments.com](https://www.apartments.com/aq-rittenhouse-philadelphia-pa/16wpkk4/). Exclusive access to private garaged car share program. Nearby public garages have EV charging but not confirmed for building. No info on official site [aqrittenhouseapts.com](https://aqrittenhouseapts.com)."},{"Area":"Center City","Building Name":"The Atlantic","Address":"1401 Spruce St, Philadelphia, PA 19102","Sub-Neighborhood":"Avenue of the Arts / Wash Sq West","Management Company":"Post Brothers","Phone":"(215) 839-1007","Email":"management@theatlanticbuilding.com","Website":"https://theatlanticbuilding.com","2BR Price Low":"$4,515","2BR Price High":"$4,762","Availability":"Limited; 1 unit available March 12","Pool":"Yes (Rooftop + hot tub)","Gym":"Yes (Peloton, HIIT, Woodway)","Rooftop/Deck":"Yes (Dining pavilion, sundeck)","Dog Park/Run":"Yes (Rooftop K9 grass)","Concierge":"Yes (24-hr)","Other Key Amenities":"Recovery spa (sauna, steam, HydroMassage), music room, co-working, Steak 48 on-site","Pet Rent (Monthly)":"$60/mo","Pet Fee (One-Time)":"$500 deposit","Breed Restrictions":"None listed (confirm)","Weight Limit":"Not listed","Year Built":"2020","Total Units":"268","Move-In Specials":"1 Month Free","Parking Type":"24-hour valet parking and reserved self-parking garage","Parking Cost":"Costs extra; unassigned parking $495/month","Reserved Parking":"Yes, reserved self-parking spaces available","EV Charging":"Yes","Parking Notes":"App and text-based car retrieval for valet; off-street private driveway for drop-off. Contact property for reserved parking rates and full details."},{"Area":"Center City","Building Name":"The St. James","Address":"200 W Washington Sq, Philadelphia, PA 19106","Sub-Neighborhood":"Washington Square West","Management Company":"Independent management","Phone":"(215) 267-4452","Email":"Contact via website","Website":"https://thestjamesphiladelphia.com","2BR Price Low":"$5,113","2BR Price High":"$5,628","Availability":"3 units available now","Pool":"Yes (60-ft indoor year-round)","Gym":"Yes","Rooftop/Deck":"Yes (Sun deck)","Dog Park/Run":"No","Concierge":"Yes (24-hr doorman)","Other Key Amenities":"Massage room, on-site retail, 45-story tower, Washington Square views","Pet Rent (Monthly)":"Call for details","Pet Fee (One-Time)":"Call for details","Breed Restrictions":"Call for details","Weight Limit":"Call for details","Year Built":"1960s","Total Units":"~400","Move-In Specials":"None currently listed","Parking Type":"on-site garage (9-story)","Parking Cost":"costs extra (not included in rent); monthly rate not publicly listed, contact property","Reserved Parking":"not specified","EV Charging":"not available / not mentioned","Parking Notes":"Contact property for details per [Apartments.com](https://www.apartments.com/the-st-james-philadelphia-pa/4mdeq1h/); confirmed on-site garage across sources including [official site](https://thestjamesphiladelphia.com/p/match-day/), [LiteMovers](https://litemovers.com/the-st-james-200-w-washington-square-philadelphia-moving-guide/)"},{"Area":"Center City","Building Name":"1213 Walnut","Address":"1213 Walnut St, Philadelphia, PA 19107","Sub-Neighborhood":"Midtown Village / Wash Sq West","Management Company":"Goldenberg Group","Phone":"(215) 496-1213","Email":"Contact via website","Website":"https://1213walnut.com","2BR Price Low":"$3,290","2BR Price High":"$4,935","Availability":"2 units available now + more plans","Pool":"No","Gym":"Yes (3,000+ sq ft + studio)","Rooftop/Deck":"Yes (25th floor deck)","Dog Park/Run":"Yes (2nd floor K9 park + 24-hr dog spa)","Concierge":"Yes (24-hr)","Other Key Amenities":"Great room (35-ft ceilings), conference rooms, cold storage, porte-cochere, LEED Silver","Pet Rent (Monthly)":"Verify with leasing","Pet Fee (One-Time)":"$500 deposit","Breed Restrictions":"Contact leasing","Weight Limit":"Not listed","Year Built":"2018","Total Units":"322","Move-In Specials":"3 Months Free (17-mo lease); 2.5 Months Free (13-16 mo)","Parking Type":"Adjacent garage (Parkway 12th & Walnut Garage)","Parking Cost":"Costs extra; monthly rate not publicly listed (contact property)","Reserved Parking":"Not specified","EV Charging":"Yes, 6 EV charging spaces in adjacent garage ([ParkWhiz](https://www.parkwhiz.com/p/philadelphia-parking/1201-walnut-st))","Parking Notes":"Adjacent parking garage mentioned on official site; not included in rent; daily rates around $30-40 based on reviews; contact property for details ([Apartments.com](https://www.apartments.com/1213-walnut-philadelphia-pa/851yr90/))"},{"Area":"Center City","Building Name":"The Griffin Center City","Address":"1338-1348 Chestnut St, Philadelphia, PA 19107","Sub-Neighborhood":"Avenue of the Arts","Management Company":"Greystar","Phone":"(267) 813-2068","Email":"Contact via Greystar","Website":"https://griffinphilly.com","2BR Price Low":"$4,539","2BR Price High":"Call for pricing","Availability":"21 total units available (mix)","Pool":"No","Gym":"Yes (Peloton)","Rooftop/Deck":"Yes (Clubroom w/ panoramic views)","Dog Park/Run":"Yes (Fenced)","Concierge":"Yes (24-hr front desk)","Other Key Amenities":"Golf simulator, billiards, arcade, outdoor kitchen, historic Beaux-Arts building","Pet Rent (Monthly)":"$35/mo","Pet Fee (One-Time)":"$350 deposit","Breed Restrictions":"Yes (call for list)","Weight Limit":"Not listed","Year Built":"1897/2016 (converted)","Total Units":"217","Move-In Specials":"Check with leasing","Parking Type":"None on-site","Parking Cost":"Not included; not available on-site; nearby monthly parking options $150-$400","Reserved Parking":"No on-site parking available","EV Charging":"Not available on-site","Parking Notes":"Multiple listing sites (Apartments.com, Zillow, Redfin) state \"Parking: None\" or \"Parking is not available at THE GRIFFIN CENTER CITY. Contact this property to explore nearby options.\" One site (VeryApt) lists \"Parking Available\" without details. No specific monthly cost, type, reserved spots, or EV charging mentioned for the building. Area has public garages with monthly rates around $150-$375, some with EV charging (e.g., Platinum Parking lots)."},{"Area":"Center City","Building Name":"The View at Old City","Address":"401 Race St, Philadelphia, PA 19106","Sub-Neighborhood":"Old City","Management Company":"PrideRock Capital Management","Phone":"Contact via website","Email":"Contact via website","Website":"https://www.theviewatoldcity.com","2BR Price Low":"$3,199","2BR Price High":"$3,799","Availability":"Multiple units available; 1 Month Free","Pool":"Yes (Heated 3-season rooftop)","Gym":"Yes (Peloton)","Rooftop/Deck":"Yes (Boardwalk deck)","Dog Park/Run":"Yes + Paw Spa","Concierge":"Yes","Other Key Amenities":"Indoor basketball court, theater, zen courtyard, yoga, free bike rentals","Pet Rent (Monthly)":"$35/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Yes (extensive list)","Weight Limit":"100 lbs","Year Built":"Not confirmed","Total Units":"216","Move-In Specials":"1 Month Free","Parking Type":"Reserved surface parking and garages (on-site)","Parking Cost":"Costs extra (not included in rent); monthly rate available upon inquiry (*call for rate*)","Reserved Parking":"Yes","EV Charging":"Yes","Parking Notes":"Contact leasing office for current monthly parking rates and availability. Amenities excluding parking have no extra fees."},{"Area":"Center City","Building Name":"The Girard (East Market)","Address":"1199 Ludlow St, Philadelphia, PA 19107","Sub-Neighborhood":"Market East / Wash Sq West","Management Company":"Method Co.","Phone":"(445) 447-0098","Email":"Contact via website","Website":"https://thegirard.com","2BR Price Low":"$3,639","2BR Price High":"$5,122","Availability":"Multiple 2BR units available","Pool":"Yes (25-yard heated outdoor lap)","Gym":"Yes + City Fitness on-site","Rooftop/Deck":"Yes (2 terraces)","Dog Park/Run":"Yes (Sunken outdoor)","Concierge":"Yes (24/7)","Other Key Amenities":"Screening room, library, demo kitchen, vegetable garden, Viking grills, LEED Silver","Pet Rent (Monthly)":"$100/mo","Pet Fee (One-Time)":"$500","Breed Restrictions":"Contact leasing","Weight Limit":"100 lbs","Year Built":"2018","Total Units":"240","Move-In Specials":"Not currently advertised","Parking Type":"underground public garage","Parking Cost":"costs extra (fees apply; monthly cost not specified)","Reserved Parking":"no (none dedicated for tenants)","EV Charging":"yes","Parking Notes":"186 spaces available; contact property for rates and details. Public garage, not assigned to residents."},{"Area":"Center City","Building Name":"210 South 12th","Address":"210 S 12th St, Philadelphia, PA 19107","Sub-Neighborhood":"Midtown Village / Wash Sq West","Management Company":"Scully Company","Phone":"(856) 249-3010","Email":"Contact via website","Website":"https://210south12.com","2BR Price Low":"$4,059","2BR Price High":"$5,934","Availability":"16 two-bedroom units available","Pool":"Yes","Gym":"Yes + Sauna/Spa","Rooftop/Deck":"Yes (Roof terrace)","Dog Park/Run":"Yes + Dog spa","Concierge":"Yes (24-hr)","Other Key Amenities":"RSHP architecture (Pritzker Prize firm), luxury car-share, dry cleaning, EV charging","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$500","Breed Restrictions":"Standard restrictions (confirm)","Weight Limit":"Not listed","Year Built":"2024","Total Units":"376","Move-In Specials":"2 Months Free","Parking Type":"Automated garage","Parking Cost":"Costs extra; $525-$650/month (sources vary)","Reserved Parking":"Unassigned available; reserved not specified","EV Charging":"Yes, 100% EV-equipped","Parking Notes":"Fully automated parking system; controlled access; on-site EV carshare for residents"},{"Area":"Center City","Building Name":"Goldtex","Address":"315 N 12th St, Philadelphia, PA 19107","Sub-Neighborhood":"Callowhill / Rail Park","Management Company":"Greystar","Phone":"(267) 500-9025","Email":"management@goldtex.com","Website":"https://goldtexapartments.com","2BR Price Low":"$2,735","2BR Price High":"$3,200","Availability":"4 units available","Pool":"Yes (Year-round rooftop + hot tub)","Gym":"Yes","Rooftop/Deck":"Yes (Sundeck)","Dog Park/Run":"Yes (Bark Park)","Concierge":"Yes (24/7)","Other Key Amenities":"Outdoor kitchen, loft-style units, wine fridge, LEED Gold, Elixr Cafe on-site","Pet Rent (Monthly)":"$60/mo","Pet Fee (One-Time)":"$300 deposit","Breed Restrictions":"Contact leasing","Weight Limit":"Not listed","Year Built":"2013","Total Units":"163","Move-In Specials":"None currently listed","Parking Type":"On-site garage and surface lot","Parking Cost":"Costs extra; monthly fees apply (approx. $225-$350 for garage, $225 for surface per third-party listings; contact property for current rates)","Reserved Parking":"Assigned parking available","EV Charging":"Not mentioned; no confirmation found","Parking Notes":"On-site parking available but fees may apply depending on type. Max 1 space per unit in some listings. Contact leasing office for details: 215-978-9123"},{"Area":"Center City","Building Name":"The Crane Chinatown","Address":"1001 Vine St, Philadelphia, PA 19107","Sub-Neighborhood":"Chinatown / Market East","Management Company":"Crane Chinatown management","Phone":"Contact via website","Email":"Contact via website","Website":"https://www.cranechinatown.com","2BR Price Low":"$3,055","2BR Price High":"$3,055","Availability":"1 unit available May 3, 2026","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes (Sundeck w/ fire pits)","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Basketball court (weekly), lobby coffee bar, bilingual childcare, 360° views","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$350","Breed Restrictions":"Yes (call for list)","Weight Limit":"130 lbs","Year Built":"2019","Total Units":"150","Move-In Specials":"Amenity fee $300","Parking Type":"None on-site; adjacent private lot available","Parking Cost":"Not included in rent; extra cost at nearby options (monthly rates ~$150-$300 in area, discounts for residents at some locations)","Reserved Parking":"Not specified","EV Charging":"Not specified","Parking Notes":"No on-site parking. Leasing office offers list of nearby parking options including privately owned adjacent lot; some offer resident discounts. Contact craneleasing@divirsis.com for details."},{"Area":"Center City","Building Name":"The Residences at The Bellevue","Address":"200 S Broad St, Philadelphia, PA 19102","Sub-Neighborhood":"Avenue of the Arts","Management Company":"Sentral","Phone":"(215) 714-1441","Email":"Contact via Sentral portal","Website":"https://www.theresidencesatthebellevue.com","2BR Price Low":"$5,995","2BR Price High":"$5,995","Availability":"1 unit available now","Pool":"Yes (Sporting Club access)","Gym":"Yes (100,000 sq ft Sporting Club)","Rooftop/Deck":"Yes (Sporting Club rooftop)","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"3 golf simulators, 190+ weekly classes, racquet sports, Parisian interiors, historic landmark","Pet Rent (Monthly)":"Contact leasing","Pet Fee (One-Time)":"Contact leasing","Breed Restrictions":"Yes (dogs)","Weight Limit":"Not listed","Year Built":"2024 (reimagined)","Total Units":"155","Move-In Specials":"1 Month Free + Free Sporting Club membership","Parking Type":"Garage","Parking Cost":"Costs extra (fees apply; contact property for monthly rate)","Reserved Parking":"Not specified","EV Charging":"Yes","Parking Notes":"Car wash area available. Contact: 215-714-1441 or (844) 928-4281 for details. Adjacent to Bellevue Hotel valet parking ($76/night)."},{"Area":"Center City","Building Name":"One Thousand One","Address":"1001 S Broad St, Philadelphia, PA 19147","Sub-Neighborhood":"Avenue of the Arts South","Management Company":"Not publicly specified","Phone":"(856) 644-7175","Email":"Contact via website","Website":"https://www.onethouandoneapts.com","2BR Price Low":"$3,088","2BR Price High":"$5,363","Availability":"Multiple 2BR units available now","Pool":"Yes","Gym":"Yes + Spa","Rooftop/Deck":"No","Dog Park/Run":"Yes (opening)","Concierge":"Yes (24-hr doorman)","Other Key Amenities":"Largest building (629 units), BBQ/courtyard, business center, brand new 2024","Pet Rent (Monthly)":"$60/mo","Pet Fee (One-Time)":"$300 deposit","Breed Restrictions":"None listed","Weight Limit":"Not listed","Year Built":"2024","Total Units":"629","Move-In Specials":"None currently listed","Parking Type":"Unassigned garage and covered parking","Parking Cost":"Extra: Unassigned garage $425/month, unassigned covered $625/month","Reserved Parking":"No reserved/assigned parking mentioned; unassigned only","EV Charging":"Not available","Parking Notes":"Off-street parking available; fees apply and not included in rent. No mention of valet or surface lots."},{"Area":"Center City","Building Name":"The Collins","Address":"1125 Sansom St, Philadelphia, PA 19107","Sub-Neighborhood":"Midtown Village","Management Company":"Scully Company","Phone":"(267) 881-0175","Email":"Contact via Scully Company","Website":"https://www.scullycompany.com/apartments/pennsylvania/philadelphia/midtown-village/the-collins/","2BR Price Low":"Call for pricing","2BR Price High":"Call for pricing","Availability":"Call for availability","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes (Dog park + fire pit)","Dog Park/Run":"Yes (Rooftop)","Concierge":"Yes (24/7 front desk)","Other Key Amenities":"Chef kitchen, billiards, Planet Fitness + Wine & Spirits on-site, loft layouts, LEED Silver","Pet Rent (Monthly)":"Call for details","Pet Fee (One-Time)":"Call for details","Breed Restrictions":"Yes (call)","Weight Limit":"Call for details","Year Built":"Mid-2010s","Total Units":"Not confirmed","Move-In Specials":"2 Months Free on 2BR; $1,000 credit (48-hr sign)","Parking Type":"Garage (on-site or affiliated)","Parking Cost":"Extra cost (not included in rent); discounted monthly rates available through affiliated parking; specific dollar amount not found","Reserved Parking":"Not specified","EV Charging":"Not specified","Parking Notes":"Parking garage listed as amenity on VeryApt; affiliated parking with discounted monthly rates mentioned in Yelp review; nearby parking options available; contact leasing office at (267) 881-0175 for details"},{"Area":"Logan Square","Building Name":"The Sterling","Address":"1815 John F Kennedy Blvd, Philadelphia, PA 19103","Sub-Neighborhood":"Logan Square","Management Company":"Aimco (Apartment Income REIT Corp)","Phone":"(445) 308-2459","Email":"N/A","Website":"https://www.sterlingapthomes.com","2BR Price Low":"$3,312","2BR Price High":"$4,752","Availability":"Multiple 2BR units available now","Pool":"Yes (Rooftop)","Gym":"Yes (24hr + City Fitness in-building)","Rooftop/Deck":"Yes (Social rooftop deck)","Dog Park/Run":"No (pet-friendly)","Concierge":"Yes (24hr)","Other Key Amenities":"City Fitness membership, rooftop pool & lounge, resident lounge, co-working, package lockers, EV charging, bike storage, garage parking","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$250","Breed Restrictions":"Yes (per Philadelphia Ordinance)","Weight Limit":"None","Year Built":"2018","Total Units":"534","Move-In Specials":"Contact for current offers"},{"Area":"Logan Square","Building Name":"2301 JFK","Address":"2301 John F Kennedy Blvd, Philadelphia, PA 19103","Sub-Neighborhood":"Logan Square / Schuylkill Riverfront","Management Company":"PMC Property Group","Phone":"(445) 308-8101","Email":"N/A","Website":"https://www.pmcpropertygroup.com/properties/2301-jfk","2BR Price Low":"$3,690","2BR Price High":"$4,750","Availability":"Multiple 2BR units available now","Pool":"Yes (Rooftop infinity pool w/ sundeck)","Gym":"Yes (Rooftop fitness center + cycling studio)","Rooftop/Deck":"Yes (Rooftop terrace w/ views)","Dog Park/Run":"Yes (Largest on-site dog park in the city)","Concierge":"Yes (24/7 front desk)","Other Key Amenities":"Sport courts (basketball, pickleball, volleyball), co-working pods, on-site Starbucks, Giant supermarket delivery, pet care, EV charging, bike storage, game room, resident lounge","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$350","Breed Restrictions":"Yes","Weight Limit":"Yes (size limit - contact for details)","Year Built":"2025","Total Units":"313","Move-In Specials":"1 month free on 13-month lease + $1,000 move-in credit"}];
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

  function isDogFriendly(breed, weight) {
    var w = (weight || "").toLowerCase();
    if (w.indexOf("small dogs only") !== -1) return false;
    var weightMatch = w.match(/(\d+)/);
    if (weightMatch) {
      var lbs = parseInt(weightMatch[1], 10);
      if (lbs > 0 && lbs < 38) return false;
    }
    return true;
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
      dogFriendly: isDogFriendly(d["Breed Restrictions"], d["Weight Limit"]),
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
      hasSpecial: hasActiveSpecial(d["Move-In Specials"]),
      parkingType: d["Parking Type"] || "",
      parkingCost: d["Parking Cost"] || "",
      reservedParking: d["Reserved Parking"] || ""
    };
  }

  /* ── THREE-WAY STATUS: Active / Hold / Pass ────────────────── */
  var STATUSES = [
    { id: "active", label: "Active",  color: "success" },
    { id: "hold",   label: "Hold",    color: "warning" },
    { id: "pass",   label: "Pass",    color: "error"   }
  ];
  var STATUS_MAP = {};
  STATUSES.forEach(function (s) { STATUS_MAP[s.id] = s; });

  /* ── PIPELINE STAGES ───────────────────────────────────────── */
  var CRM_STAGES = [
    { id: "none",           label: "—",              icon: "circle",   color: "faint" },
    { id: "researching",    label: "Researching",    icon: "search",   color: "info" },
    { id: "tour_scheduled", label: "Tour Scheduled", icon: "calendar", color: "warning" },
    { id: "tour_complete",  label: "Tour Complete",  icon: "eye",      color: "primary" },
    { id: "applied",        label: "Applied",        icon: "send",     color: "purple" },
    { id: "approved",       label: "Approved",       icon: "check",    color: "success" },
    { id: "signed",         label: "Signed",         icon: "star",     color: "gold" }
  ];

  var STAGE_MAP = {};
  CRM_STAGES.forEach(function (s) { STAGE_MAP[s.id] = s; });

  function stageIcon(iconName) {
    var icons = {
      circle:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="8"/></svg>',
      search:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="20" y2="20"/></svg>',
      calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      eye:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
      send:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
      check:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
      star:     '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
      x:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
    };
    return icons[iconName] || icons.circle;
  }

  /* ── SUPABASE CLIENT ───────────────────────────────────────── */
  var _sb = null;
  var SB_CONFIG_KEY = "aptfinder_sb_config";

  function getSBConfig() {
    try {
      var s = window["local" + "Storage"];
      var cfg = s.getItem(SB_CONFIG_KEY);
      return cfg ? JSON.parse(cfg) : null;
    } catch (e) { return null; }
  }

  function saveSBConfig(url, key) {
    try {
      var s = window["local" + "Storage"];
      s.setItem(SB_CONFIG_KEY, JSON.stringify({ url: url, key: key }));
    } catch (e) { /* ignore */ }
  }

  function initSupabase(url, key) {
    if (typeof window.supabase !== "undefined" && window.supabase.createClient) {
      _sb = window.supabase.createClient(url, key);
      return true;
    }
    return false;
  }

  function sbConnected() { return _sb !== null; }

  /* ── PERSISTENCE (Supabase primary, local-storage fallback) ── */
  var LOCAL_STATUS_KEY = "aptfinder_statuses";
  var LOCAL_STAGE_KEY = "aptfinder_stages";
  var _store = (function () {
    try { var s = window["local" + "Storage"]; var t = "__t"; s.setItem(t, t); s.removeItem(t); return s; } catch (e) { return null; }
  })();

  /* In-memory cache */
  var statusCache = {};  /* name → "active"|"hold"|"pass" */
  var stageCache = {};   /* name → stage id */

  /* Hardcoded defaults — survives even without Supabase or local-storage */
  var DEFAULT_STAGES = {
    "The Sterling": "tour_scheduled"
  };
  var DEFAULT_STATUSES = {
    /* all default to "active" via getStatus(), add overrides here */
  };

  function loadLocalCache() {
    if (_store) {
      try { statusCache = JSON.parse(_store.getItem(LOCAL_STATUS_KEY)) || {}; } catch (e) { statusCache = {}; }
      try { stageCache = JSON.parse(_store.getItem(LOCAL_STAGE_KEY)) || {}; } catch (e) { stageCache = {}; }
    }
    /* Migrate old combined statuses */
    var oldKey = "aptfinder_statuses";
    if (_store) {
      try {
        var old = JSON.parse(_store.getItem(oldKey)) || {};
        var migrated = false;
        Object.keys(old).forEach(function (k) {
          var v = old[k];
          /* Old values: "active"/"researching"/"tour_scheduled" etc were stages; "passed"/"pass" was status */
          if (v === "passed" || v === "pass") {
            if (!statusCache[k]) { statusCache[k] = "pass"; migrated = true; }
          } else if (v === "researching" || v === "tour_scheduled" || v === "tour_complete" || v === "applied" || v === "approved" || v === "signed") {
            if (!stageCache[k]) { stageCache[k] = v; migrated = true; }
            if (!statusCache[k]) { statusCache[k] = "active"; migrated = true; }
          } else if (v === "new") {
            /* leave as default */
          }
        });
        if (migrated) { saveLocalCache(); }
      } catch (e) { /* ignore */ }
    }
  }

  function saveLocalCache() {
    if (_store) {
      try { _store.setItem(LOCAL_STATUS_KEY, JSON.stringify(statusCache)); } catch (e) {}
      try { _store.setItem(LOCAL_STAGE_KEY, JSON.stringify(stageCache)); } catch (e) {}
    }
  }

  function getStatus(name) { return statusCache[name] || DEFAULT_STATUSES[name] || "active"; }
  function getStage(name) { return stageCache[name] || DEFAULT_STAGES[name] || "none"; }

  function setStatus(name, val) {
    if (val === "active") { delete statusCache[name]; } else { statusCache[name] = val; }
    saveLocalCache();
    sbUpsert(name);
  }

  function setStage(name, val) {
    if (val === "none") { delete stageCache[name]; } else { stageCache[name] = val; }
    saveLocalCache();
    sbUpsert(name);
  }

  /* Supabase sync */
  var _syncIndicator = null;
  function showSyncStatus(ok) {
    if (!_syncIndicator) {
      _syncIndicator = document.getElementById("syncIndicator");
    }
    if (_syncIndicator) {
      _syncIndicator.textContent = ok ? "Synced ✓" : "Sync error";
      _syncIndicator.className = "sync-indicator " + (ok ? "sync-ok" : "sync-err");
      _syncIndicator.style.opacity = "1";
      setTimeout(function () { _syncIndicator.style.opacity = "0"; }, 2000);
    }
  }

  function sbUpsert(name) {
    if (!sbConnected()) return;
    var data = {
      building_name: name,
      status: getStatus(name),
      stage: getStage(name),
      updated_at: new Date().toISOString()
    };
    _sb.from("apt_tracking").upsert(data, { onConflict: "building_name" })
      .then(function (res) {
        showSyncStatus(!res.error);
        if (res.error) console.error("Supabase upsert error:", res.error);
      });
  }

  function sbLoadAll() {
    if (!sbConnected()) return Promise.resolve();
    return _sb.from("apt_tracking").select("*").then(function (res) {
      if (res.error) {
        console.error("Supabase load error:", res.error);
        return;
      }
      if (res.data && res.data.length > 0) {
        statusCache = {};
        stageCache = {};
        res.data.forEach(function (row) {
          if (row.status && row.status !== "active") statusCache[row.building_name] = row.status;
          if (row.stage && row.stage !== "none") stageCache[row.building_name] = row.stage;
        });
        saveLocalCache();
      }
    });
  }

  function sbSeedAll() {
    if (!sbConnected()) return Promise.resolve();
    var rows = APARTMENTS.map(function (a) {
      return {
        building_name: a.name,
        status: getStatus(a.name),
        stage: getStage(a.name),
        updated_at: new Date().toISOString()
      };
    });
    return _sb.from("apt_tracking").upsert(rows, { onConflict: "building_name" })
      .then(function (res) {
        if (res.error) console.error("Supabase seed error:", res.error);
      });
  }

  /* ── STATE ───────────────────────────────────────────────────── */
  var state = {
    area: "All",
    search: "",
    filters: { pool: false, dogpark: false, dogfriendly: false, concierge: false, specials: false, hideNew: false, hidePassed: false },
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
        if (a.name.toLowerCase().indexOf(q) === -1 && a.address.toLowerCase().indexOf(q) === -1 && a.management.toLowerCase().indexOf(q) === -1) return false;
      }
      if (state.filters.pool && !a.poolYes) return false;
      if (state.filters.dogpark && !a.dogParkYes) return false;
      if (state.filters.dogfriendly && !a.dogFriendly) return false;
      if (state.filters.concierge && !a.conciergeYes) return false;
      if (state.filters.specials && !a.hasSpecial) return false;
      if (state.filters.hideNew && getStage(a.name) === "none" && getStatus(a.name) === "active") return false;
      if (state.filters.hidePassed && getStatus(a.name) === "pass") return false;
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
          var so = { active: 0, hold: 1, pass: 2 };
          va = so[getStatus(a.name)] || 0;
          vb = so[getStatus(b.name)] || 0;
          break;
        case "stage":
          var stageOrder = {};
          CRM_STAGES.forEach(function (s, i) { stageOrder[s.id] = i; });
          va = stageOrder[getStage(a.name)] !== undefined ? stageOrder[getStage(a.name)] : 0;
          vb = stageOrder[getStage(b.name)] !== undefined ? stageOrder[getStage(b.name)] : 0;
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
    document.getElementById("kpiDogFriendly").textContent = filtered.filter(function (a) { return a.dogFriendly; }).length;

    /* Pipeline KPI: count those with a stage set (not "none") AND status is active */
    var pipeline = filtered.filter(function (a) {
      var st = getStatus(a.name);
      var sg = getStage(a.name);
      return st === "active" && sg !== "none";
    }).length;
    document.getElementById("kpiPipeline").textContent = pipeline;
  }

  /* ── SIDEBAR COUNTS ─────────────────────────────────────────── */
  function updateCounts() {
    var counts = { All: 0, Fairmount: 0, "Logan Square": 0, "Fitler Square": 0, "Center City": 0 };
    APARTMENTS.forEach(function (a) { counts.All++; if (counts[a.area] !== undefined) counts[a.area]++; });
    document.getElementById("countAll").textContent = counts.All;
    document.getElementById("countFairmount").textContent = counts.Fairmount;
    document.getElementById("countLogan").textContent = counts["Logan Square"];
    document.getElementById("countFitler").textContent = counts["Fitler Square"];
    document.getElementById("countCenter").textContent = counts["Center City"];
  }

  /* ── STATUS CELL (three-way: Active / Hold / Pass) ──────────── */
  function statusBtnHTML(name, context) {
    var s = getStatus(name);
    var stObj = STATUS_MAP[s] || STATUS_MAP["active"];
    var cls = context === "mobile" ? "mc-status-btn" : "status-pill";
    var h = '<button class="' + cls + ' pill-' + stObj.color + '" data-apt-status="' + escapeHTML(name) + '" type="button">';
    h += stObj.label;
    h += '</button>';
    return h;
  }

  function statusDropdownHTML(name) {
    var current = getStatus(name);
    var h = '<div class="status-dropdown">';
    STATUSES.forEach(function (st) {
      var sel = st.id === current ? " sdd-selected" : "";
      h += '<button class="sdd-opt pill-' + st.color + sel + '" data-set-status="' + st.id + '" data-set-status-for="' + escapeHTML(name) + '" type="button">';
      h += '<span class="sdd-dot"></span>' + st.label;
      if (st.id === current) h += '<svg class="sdd-chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
      h += '</button>';
    });
    h += '</div>';
    return h;
  }

  /* ── STAGE CELL (pipeline dropdown) ─────────────────────────── */
  function stageBtnHTML(name, context) {
    var s = getStage(name);
    var stg = STAGE_MAP[s] || STAGE_MAP["none"];
    var cls = context === "mobile" ? "mc-stage-btn" : "stage-btn";
    var h = '<button class="' + cls + ' stage-' + stg.color + '" data-apt-stage="' + escapeHTML(name) + '" type="button">';
    h += '<span class="stage-icon">' + stageIcon(stg.icon) + '</span>';
    h += '<span class="stage-label">' + stg.label + '</span>';
    h += '</button>';
    return h;
  }

  function stageDropdownHTML(name) {
    var current = getStage(name);
    var h = '<div class="stage-dropdown">';
    h += '<div class="stage-dd-title">Pipeline Stage</div>';
    CRM_STAGES.forEach(function (stg) {
      var sel = stg.id === current ? " stage-dd-selected" : "";
      h += '<button class="stage-dd-opt stage-' + stg.color + sel + '" data-set-stage="' + stg.id + '" data-set-stage-for="' + escapeHTML(name) + '" type="button">';
      h += '<span class="stage-dd-dot"></span>';
      h += '<span>' + stg.label + '</span>';
      if (stg.id === current) h += '<svg class="stage-dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
      h += '</button>';
    });
    h += '</div>';
    return h;
  }

  /* ── RENDER TABLE ────────────────────────────────────────────── */
  function renderTable() {
    var filtered = getSorted(getFiltered());
    updateKPIs(filtered);

    if (filtered.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="17"><div class="no-results"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg><p>No buildings match your filters</p></div></td></tr>';
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
        priceRange = formatPrice(a.priceLow) + " \u2013 " + (a.priceHighRaw.indexOf("Call") !== -1 ? "Call" : formatPrice(a.priceHigh));
      }

      html += '<tr data-name="' + escapeHTML(a.name) + '"' + (isCompared ? ' class="selected-row"' : '') + '>';
      html += '<td><input type="checkbox" class="compare-check" data-compare="' + escapeHTML(a.name) + '"' + (isCompared ? " checked" : "") + ' aria-label="Compare ' + escapeHTML(a.name) + '" title="Add to comparison"></td>';
      /* Status column */
      html += '<td class="status-cell">' + statusBtnHTML(a.name, "desktop") + statusDropdownHTML(a.name) + '</td>';
      /* Stage column */
      html += '<td class="stage-cell">' + stageBtnHTML(a.name, "desktop") + stageDropdownHTML(a.name) + '</td>';
      html += '<td><span class="building-name">' + escapeHTML(a.name) + '</span></td>';
      html += '<td title="' + escapeHTML(a.address) + '">' + escapeHTML(a.address) + '</td>';
      html += '<td title="' + escapeHTML(a.management) + '">' + escapeHTML(a.management) + '</td>';
      html += '<td>' + escapeHTML(a.area) + '</td>';
      html += '<td class="price-range">' + priceRange + '</td>';
      html += '<td>' + badgeHTML(a.poolYes, a.pool) + '</td>';
      html += '<td>' + badgeHTML(a.gymYes, a.gymYes ? "Yes" : "No") + '</td>';
      html += '<td>' + badgeHTML(a.dogParkYes, a.dogPark) + '</td>';
      html += '<td style="font-variant-numeric:tabular-nums">' + escapeHTML(a.totalUnits) + '</td>';
      html += '<td>' + escapeHTML(a.yearBuilt) + '</td>';
      html += '<td>' + (a.hasSpecial ? specialBadge(a.specials) : '<span class="badge badge-no">None</span>') + '</td>';
      html += '<td>' + escapeHTML(a.phone) + '</td>';
      var emailDisplay = (a.email && a.email.indexOf('@') !== -1 && a.email.indexOf('N/A') === -1) ? '<a href="mailto:' + escapeHTML(a.email) + '">' + escapeHTML(a.email) + '</a>' : '<span style="color:var(--color-text-faint)">\u2014</span>';
      html += '<td>' + emailDisplay + '</td>';
      html += '<td>' + (isValidURL(a.website) ? '<a href="' + escapeHTML(a.website) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(a.name) + ' \u2197</a>' : '<span style="color:var(--color-text-faint)">\u2014</span>') + '</td>';
      html += '</tr>';

      if (isExpanded) {
        html += '<tr class="expanded-row"><td colspan="17"><div class="expanded-content"><div class="expanded-grid">';
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
        html += detailGroup("Parking Type", a.parkingType);
        html += detailGroup("Parking Cost", a.parkingCost);
        html += detailGroup("Reserved Parking", a.reservedParking);
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

    /* ── MOBILE CARDS ────────────────────────────────────────── */
    var mhtml = "";
    filtered.forEach(function (a) {
      var priceStr = a.priceLow ? formatPrice(a.priceLow) : "Call";
      var priceRange = priceStr;
      if (a.priceHigh && a.priceLow) {
        priceRange = formatPrice(a.priceLow) + " \u2013 " + formatPrice(a.priceHigh);
      }
      var isExpanded = state.expanded === a.name;

      mhtml += '<div class="mobile-card' + (isExpanded ? " mobile-card-expanded" : "") + '" data-name="' + escapeHTML(a.name) + '">';

      /* Status + Stage bar */
      mhtml += '<div class="mc-controls">';
      mhtml += '<div class="mc-status-wrap">' + statusBtnHTML(a.name, "mobile") + statusDropdownHTML(a.name) + '</div>';
      mhtml += '<div class="mc-stage-wrap">' + stageBtnHTML(a.name, "mobile") + stageDropdownHTML(a.name) + '</div>';
      mhtml += '</div>';

      /* Header: name + price */
      mhtml += '<div class="mc-header">';
      mhtml += '<div class="mc-name">' + escapeHTML(a.name) + '</div>';
      mhtml += '<div class="mc-price">' + priceRange + '</div>';
      mhtml += '</div>';

      /* Area / Neighborhood */
      mhtml += '<div class="mc-area">' + escapeHTML(a.area) + ' \u00b7 ' + escapeHTML(a.subNeighborhood) + '</div>';

      /* Badges */
      mhtml += '<div class="mc-badges">';
      if (a.poolYes) mhtml += '<span class="badge badge-yes">Pool</span>';
      if (a.dogParkYes) mhtml += '<span class="badge badge-yes">Dog Park</span>';
      if (a.gymYes) mhtml += '<span class="badge badge-yes">Gym</span>';
      if (a.conciergeYes) mhtml += '<span class="badge badge-yes">Concierge</span>';
      if (a.dogFriendly) mhtml += '<span class="badge badge-yes">\ud83d\udc36 Dog OK</span>';
      if (a.hasSpecial) mhtml += '<span class="badge badge-special">' + escapeHTML(a.specials) + '</span>';
      mhtml += '</div>';

      /* Key stats grid */
      mhtml += '<div class="mc-stats">';
      mhtml += '<div class="mc-stat"><span class="mc-stat-label">Units</span><span class="mc-stat-val">' + escapeHTML(a.totalUnits) + '</span></div>';
      mhtml += '<div class="mc-stat"><span class="mc-stat-label">Built</span><span class="mc-stat-val">' + escapeHTML(a.yearBuilt) + '</span></div>';
      mhtml += '<div class="mc-stat"><span class="mc-stat-label">Mgmt</span><span class="mc-stat-val">' + escapeHTML(a.management) + '</span></div>';
      mhtml += '</div>';

      /* Expand toggle */
      mhtml += '<button class="mc-expand-btn" data-mc-expand="' + escapeHTML(a.name) + '" type="button">';
      mhtml += isExpanded ? 'Hide Details \u25b2' : 'Show Details \u25bc';
      mhtml += '</button>';

      /* Expanded detail section */
      if (isExpanded) {
        mhtml += '<div class="mc-details">';
        mhtml += mcDetail("Address", a.address);
        mhtml += mcDetail("Management", a.management);
        mhtml += mcDetail("Availability", a.availability);
        mhtml += mcDetail("Rooftop/Deck", a.rooftop);
        mhtml += mcDetail("Amenities", a.amenities);
        mhtml += mcDetail("Pet Rent", a.petRent);
        mhtml += mcDetail("Pet Fee", a.petFee);
        mhtml += mcDetail("Breed Restrictions", a.breedRestrictions);
        mhtml += mcDetail("Weight Limit", a.weightLimit);
        mhtml += mcDetail("Parking", a.parkingType + (a.parkingCost ? " \u2014 " + a.parkingCost : ""));
        if (a.phone) mhtml += '<div class="mc-detail-row"><span class="mc-detail-label">Phone</span><a href="tel:' + escapeHTML(a.phone) + '">' + escapeHTML(a.phone) + '</a></div>';
        if (a.email && a.email.indexOf("@") !== -1 && a.email.indexOf("N/A") === -1) {
          mhtml += '<div class="mc-detail-row"><span class="mc-detail-label">Email</span><a href="mailto:' + escapeHTML(a.email) + '">' + escapeHTML(a.email) + '</a></div>';
        }
        if (isValidURL(a.website)) {
          mhtml += '<div class="mc-detail-row"><span class="mc-detail-label">Website</span><a href="' + escapeHTML(a.website) + '" target="_blank" rel="noopener noreferrer">Visit Site \u2197</a></div>';
        }
        if (a.hasSpecial) {
          mhtml += '<div class="mc-detail-row mc-special"><span class="mc-detail-label">Special</span><span>' + escapeHTML(a.specials) + '</span></div>';
        }
        mhtml += '</div>';
      }

      mhtml += '</div>';
    });
    mobileCards.innerHTML = mhtml;

    /* Update map if map view is active */
    if (_mapViewActive && _map) { updateMapMarkers(); }
  }

  function mcDetail(label, val) {
    if (!val || val === "N/A") return "";
    return '<div class="mc-detail-row"><span class="mc-detail-label">' + escapeHTML(label) + '</span><span>' + escapeHTML(val) + '</span></div>';
  }

  function detailGroup(label, value) {
    return '<div class="detail-group"><div class="detail-label">' + escapeHTML(label) + '</div><div class="detail-value">' + escapeHTML(value || "N/A") + '</div></div>';
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

  /* ── Generic dropdown handler ────────────────────────────── */
  function openDropdown(btnEl, ddEl) {
    /* close all open dropdowns first */
    document.querySelectorAll(".stage-dropdown.open, .status-dropdown.open").forEach(function (d) { if (d !== ddEl) d.classList.remove("open"); });
    var isOpen = ddEl.classList.toggle("open");
    if (isOpen) {
      var rect = btnEl.getBoundingClientRect();
      ddEl.style.position = "fixed";
      ddEl.style.top = (rect.bottom + 4) + "px";
      ddEl.style.left = rect.left + "px";
      requestAnimationFrame(function () {
        var ddRect = ddEl.getBoundingClientRect();
        if (ddRect.right > window.innerWidth) {
          ddEl.style.left = Math.max(8, window.innerWidth - ddRect.width - 8) + "px";
        }
        if (ddRect.bottom > window.innerHeight) {
          ddEl.style.top = (rect.top - ddRect.height - 4) + "px";
        }
      });
    }
  }

  function handleDropdownClicks(e) {
    if (e.target.closest("a")) return;

    /* Status button → open status dropdown */
    var statusBtn = e.target.closest("[data-apt-status]");
    if (statusBtn) {
      e.preventDefault(); e.stopPropagation();
      var dd = statusBtn.parentElement.querySelector(".status-dropdown");
      if (dd) openDropdown(statusBtn, dd);
      return;
    }

    /* Status option → set status value */
    var statusOpt = e.target.closest("[data-set-status]");
    if (statusOpt) {
      e.preventDefault(); e.stopPropagation();
      setStatus(statusOpt.getAttribute("data-set-status-for"), statusOpt.getAttribute("data-set-status"));
      document.querySelectorAll(".status-dropdown.open").forEach(function (d) { d.classList.remove("open"); });
      renderTable();
      return;
    }

    /* Stage button → open stage dropdown */
    var stageBtn = e.target.closest("[data-apt-stage]");
    if (stageBtn) {
      e.preventDefault(); e.stopPropagation();
      var dd2 = stageBtn.parentElement.querySelector(".stage-dropdown");
      if (dd2) openDropdown(stageBtn, dd2);
      return;
    }

    /* Stage option → set stage value */
    var stageOpt = e.target.closest("[data-set-stage]");
    if (stageOpt) {
      e.preventDefault(); e.stopPropagation();
      setStage(stageOpt.getAttribute("data-set-stage-for"), stageOpt.getAttribute("data-set-stage"));
      document.querySelectorAll(".stage-dropdown.open").forEach(function (d) { d.classList.remove("open"); });
      renderTable();
      return;
    }
  }

  /* Attach to table body */
  tableBody.addEventListener("click", function (e) {
    if (e.target.classList.contains("compare-check")) return;
    handleDropdownClicks(e);
    if (e.target.closest("[data-apt-status]") || e.target.closest("[data-set-status]") || e.target.closest("[data-apt-stage]") || e.target.closest("[data-set-stage]")) return;
    var tr = e.target.closest("tr[data-name]");
    if (!tr) return;
    var name = tr.dataset.name;
    state.expanded = state.expanded === name ? null : name;
    renderTable();
  });

  /* Attach to mobile cards */
  mobileCards.addEventListener("click", function (e) {
    handleDropdownClicks(e);
    if (e.target.closest("[data-apt-status]") || e.target.closest("[data-set-status]") || e.target.closest("[data-apt-stage]") || e.target.closest("[data-set-stage]")) return;
    if (e.target.closest("a")) return;

    /* Expand toggle */
    var expandBtn = e.target.closest("[data-mc-expand]");
    if (expandBtn) {
      var name = expandBtn.getAttribute("data-mc-expand");
      state.expanded = state.expanded === name ? null : name;
      renderTable();
      return;
    }

    /* Card tap to expand */
    var card = e.target.closest(".mobile-card[data-name]");
    if (card) {
      var cardName = card.getAttribute("data-name");
      state.expanded = state.expanded === cardName ? null : cardName;
      renderTable();
    }
  });

  /* Close all dropdowns on outside click */
  document.addEventListener("click", function (e) {
    if (!e.target.closest("[data-apt-status]") && !e.target.closest(".status-dropdown") &&
        !e.target.closest("[data-apt-stage]") && !e.target.closest(".stage-dropdown")) {
      document.querySelectorAll(".stage-dropdown.open, .status-dropdown.open").forEach(function (d) { d.classList.remove("open"); });
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
      ["Status", function (a) { var s = STATUS_MAP[getStatus(a.name)]; return s ? s.label : "Active"; }],
      ["Stage", function (a) { var s = STAGE_MAP[getStage(a.name)]; return s ? s.label : "—"; }],
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
      ["Parking Type", "parkingType"],
      ["Parking Cost", "parkingCost"],
      ["Reserved Parking", "reservedParking"],
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
    var header = ["Status", "Stage", "Building Name", "Management Company", "Area", "Address", "2BR Low", "2BR High", "Pool", "Gym", "Dog Park", "Concierge", "Units", "Year Built", "Parking Type", "Parking Cost", "Reserved Parking", "Specials", "Phone", "Email", "Website"];
    var rows = [header.join(",")];
    filtered.forEach(function (a) {
      var stObj = STATUS_MAP[getStatus(a.name)];
      var sgObj = STAGE_MAP[getStage(a.name)];
      rows.push([
        stObj ? stObj.label : "Active",
        sgObj ? sgObj.label : "—",
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
        '"' + a.parkingType + '"',
        '"' + a.parkingCost + '"',
        '"' + a.reservedParking + '"',
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

  /* ── COLUMN RESIZE ──────────────────────────────────────────── */
  function initColumnResize() {
    var ths = Array.from(document.querySelectorAll(".table-scroll table thead th"));
    var table = document.querySelector(".table-scroll table");
    if (!table || ths.length === 0) return;

    var totalW = 0;
    ths.forEach(function (th) {
      var w = th.getBoundingClientRect().width;
      th.style.width = w + "px";
      totalW += w;
    });
    table.style.width = totalW + "px";

    ths.forEach(function (th) {
      if (th.querySelector(".col-resize")) return;
      var handle = document.createElement("div");
      handle.className = "col-resize";
      handle.setAttribute("aria-hidden", "true");
      th.appendChild(handle);

      var startX, startW, startTableW;

      handle.addEventListener("mousedown", function (e) {
        e.preventDefault();
        e.stopPropagation();
        startX = e.clientX;
        startW = th.getBoundingClientRect().width;
        startTableW = table.getBoundingClientRect().width;
        handle.classList.add("dragging");
        document.body.classList.add("col-resizing");

        function onMove(ev) {
          var delta = ev.clientX - startX;
          var newW = Math.max(40, startW + delta);
          th.style.width = newW + "px";
          table.style.width = (startTableW + (newW - startW)) + "px";
        }

        function onUp() {
          handle.classList.remove("dragging");
          document.body.classList.remove("col-resizing");
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup", onUp);
        }

        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
      });
    });
  }

  /* ── SUPABASE CONFIG MODAL ──────────────────────────────────── */
  function initConfigModal() {
    var openBtn = document.getElementById("sbConfigBtn");
    var modal = document.getElementById("sbConfigModal");
    var closeBtn = document.getElementById("sbConfigClose");
    var form = document.getElementById("sbConfigForm");
    var urlInput = document.getElementById("sbUrlInput");
    var keyInput = document.getElementById("sbKeyInput");
    var statusEl = document.getElementById("sbConfigStatus");

    if (!openBtn || !modal) return;

    function updateConfigBtnState() {
      if (sbConnected()) {
        openBtn.classList.add("sb-connected");
        openBtn.title = "Supabase connected — click to reconfigure";
      } else {
        openBtn.classList.remove("sb-connected");
        openBtn.title = "Connect Supabase for cross-device sync";
      }
    }

    openBtn.addEventListener("click", function () {
      modal.classList.add("visible");
      var cfg = getSBConfig();
      if (cfg) {
        urlInput.value = cfg.url || "";
        keyInput.value = cfg.key || "";
      }
    });

    closeBtn.addEventListener("click", function () {
      modal.classList.remove("visible");
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("visible");
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var url = urlInput.value.trim();
      var key = keyInput.value.trim();
      if (!url || !key) { statusEl.textContent = "Both fields required"; return; }
      statusEl.textContent = "Connecting...";
      saveSBConfig(url, key);
      if (initSupabase(url, key)) {
        sbLoadAll().then(function () {
          statusEl.textContent = "Connected! Data synced.";
          statusEl.style.color = "var(--color-success)";
          updateConfigBtnState();
          renderTable();
          setTimeout(function () { modal.classList.remove("visible"); }, 1500);
        });
      } else {
        statusEl.textContent = "Supabase library not loaded. Refresh page.";
        statusEl.style.color = "var(--color-error)";
      }
    });

    /* Auto-connect on load */
    var cfg = getSBConfig();
    if (cfg && cfg.url && cfg.key) {
      if (initSupabase(cfg.url, cfg.key)) {
        sbLoadAll().then(function () {
          updateConfigBtnState();
          renderTable();
        });
      }
    }
    updateConfigBtnState();
  }

  /* ── MAP VIEW ──────────────────────────────────────────────── */
  var COORDS = {"Broadridge":[39.966489,-75.15847],"The Noble":[39.9602064,-75.1420119],"Park Towne Place":[39.962587,-75.177549],"LVL North":[39.9629673,-75.1622285],"The Gio":[39.9735396,-75.1803812],"Fairmount North":[39.9733345,-75.1795868],"ReNew Logan Square":[39.9598536,-75.1671801],"1919 Market":[39.9536819,-75.1724664],"One Cathedral Square":[39.956941,-75.167739],"Dalian on the Park":[39.964058,-75.172927],"The Alexander":[39.9589345,-75.1658761],"The Murano":[39.9543657,-75.1752938],"1900 Arch":[39.9551938,-75.1716679],"Locust on the Park":[39.9498523,-75.1803938],"2116 Chestnut":[39.952061,-75.1765532],"Naval Square":[39.9424933,-75.1842776],"AQ Rittenhouse":[39.9523674,-75.1742267],"The Atlantic":[39.947099,-75.164987],"The St. James":[39.9477113,-75.1540246],"1213 Walnut":[39.9493923,-75.1612003],"The Griffin Center City":[39.9494617,-75.1525842],"The View at Old City":[39.9545901,-75.1470763],"The Girard (East Market)":[39.9515322,-75.1596191],"210 South 12th":[39.9479753,-75.1608447],"Goldtex":[39.9581762,-75.1580821],"The Crane Chinatown":[39.9575179,-75.1557648],"The Residences at The Bellevue":[39.9490879,-75.1648651],"One Thousand One":[39.9131097,-75.1717519],"The Collins":[39.9495462,-75.1589528],"The Sterling":[39.9543161,-75.170111],"2301 JFK":[39.955546,-75.1785508]};

  var AREA_COLORS = {
    "Fairmount": "#f97316",
    "Logan Square": "#3b82f6",
    "Fitler Square": "#a855f7",
    "Center City": "#14b8a6"
  };

  var _map = null;
  var _markers = [];
  var _mapViewActive = false;
  var mapContainer = document.getElementById("mapContainer");
  var viewListBtn = document.getElementById("viewList");
  var viewMapBtn = document.getElementById("viewMap");

  function initMap() {
    if (_map) return;
    _map = L.map("mapContainer", {
      center: [39.955, -75.165],
      zoom: 14,
      zoomControl: true,
      attributionControl: true
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(_map);
  }

  function buildPopupHTML(apt) {
    var st = STATUS_MAP[getStatus(apt.name)] || STATUS_MAP["active"];
    var sg = STAGE_MAP[getStage(apt.name)] || STAGE_MAP["none"];
    var priceStr = apt.priceLow ? formatPrice(apt.priceLow) : "N/A";
    if (apt.priceHigh && apt.priceHigh !== apt.priceLow) priceStr += " – " + formatPrice(apt.priceHigh);

    var badges = [];
    if (apt.poolYes) badges.push("Pool");
    if (apt.gymYes) badges.push("Gym");
    if (apt.dogParkYes) badges.push("Dog Park");
    if (apt.conciergeYes) badges.push("Concierge");

    var html = '<div class="map-popup">';
    html += '<div class="map-popup-name">' + escapeHTML(apt.name) + '</div>';
    html += '<div class="map-popup-area" style="color:' + (AREA_COLORS[apt.area] || '#94a3b8') + '">' + escapeHTML(apt.area) + '</div>';
    html += '<div class="map-popup-price">' + priceStr + '</div>';
    if (badges.length) {
      html += '<div class="map-popup-badges">';
      badges.forEach(function (b) { html += '<span>' + b + '</span>'; });
      html += '</div>';
    }
    if (apt.hasSpecial) {
      html += '<div class="map-popup-special">' + escapeHTML(apt.specials) + '</div>';
    }
    html += '<div class="map-popup-controls">';
    html += '<span class="pill pill-' + st.color + '" style="font-size:10px;padding:2px 6px">' + escapeHTML(st.label) + '</span>';
    if (sg.id !== "none") {
      html += ' <span class="stage-pill stage-' + sg.color + '" style="font-size:10px;padding:2px 6px">' + escapeHTML(sg.label) + '</span>';
    }
    html += '</div>';
    if (apt.website && isValidURL(apt.website)) {
      html += '<a href="' + escapeHTML(apt.website) + '" target="_blank" rel="noopener noreferrer" style="display:block;margin-top:6px;font-size:10px;color:var(--color-primary)">Visit Website →</a>';
    }
    html += '</div>';
    return html;
  }

  var _legendEl = null;

  function updateMapLegend() {
    /* Show legend only on "All Areas" view */
    if (state.area === "All") {
      if (!_legendEl) {
        _legendEl = document.createElement("div");
        _legendEl.className = "map-legend";
        var areas = ["Fairmount", "Logan Square", "Fitler Square", "Center City"];
        areas.forEach(function (a) {
          _legendEl.innerHTML += '<div class="map-legend-item"><span class="map-legend-dot" style="background:' + AREA_COLORS[a] + '"></span>' + a + '</div>';
        });
        mapContainer.appendChild(_legendEl);
      }
      _legendEl.style.display = "";
    } else if (_legendEl) {
      _legendEl.style.display = "none";
    }
  }

  function updateMapMarkers() {
    if (!_map) return;
    /* clear old markers */
    _markers.forEach(function (m) { _map.removeLayer(m); });
    _markers = [];

    updateMapLegend();

    var filtered = getSorted(getFiltered());
    var bounds = [];

    filtered.forEach(function (apt) {
      var coord = COORDS[apt.name];
      if (!coord) return;
      var color = AREA_COLORS[apt.area] || "#94a3b8";
      var statusId = getStatus(apt.name);
      var radius = 8;
      var opacity = 1;
      var fillOpacity = 0.85;
      if (statusId === "pass") { opacity = 0.4; fillOpacity = 0.3; }
      else if (statusId === "hold") { fillOpacity = 0.55; }

      var marker = L.circleMarker([coord[0], coord[1]], {
        radius: radius,
        color: color,
        fillColor: color,
        fillOpacity: fillOpacity,
        opacity: opacity,
        weight: 2
      });
      marker.bindPopup(buildPopupHTML(apt), { maxWidth: 260, className: "map-popup-wrap" });
      marker.addTo(_map);
      _markers.push(marker);
      bounds.push([coord[0], coord[1]]);
    });

    if (bounds.length > 0) {
      _map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    }
  }

  function showMapView() {
    _mapViewActive = true;
    mapContainer.classList.add("visible");
    tableWrap.style.display = "none";
    viewMapBtn.classList.add("active");
    viewListBtn.classList.remove("active");
    initMap();
    /* Leaflet needs a tick after display change to compute size */
    setTimeout(function () {
      _map.invalidateSize();
      updateMapMarkers();
    }, 100);
  }

  function showListView() {
    _mapViewActive = false;
    mapContainer.classList.remove("visible");
    tableWrap.style.display = "";
    viewListBtn.classList.add("active");
    viewMapBtn.classList.remove("active");
  }

  viewListBtn.addEventListener("click", showListView);
  viewMapBtn.addEventListener("click", showMapView);

  /* ── INIT ────────────────────────────────────────────────────── */
  loadLocalCache();
  loadData().then(function () {
    updateCounts();
    renderTable();
    requestAnimationFrame(function () { initColumnResize(); });
    initConfigModal();
  });

})();
