/* AptFinder Dashboard — Application Logic */

(function () {
  "use strict";

  /* ── DATA ────────────────────────────────────────────────────── */
  var RAW_DATA = [{"Area":"Fairmount","Building Name":"Broadridge","Address":"1300 Fairmount Ave, Philadelphia, PA 19123","Sub-Neighborhood":"Core Fairmount","Management Company":"UDR (United Dominion Realty)","Phone":"610-553-3384","Email":"N/A (contact via UDR portal)","Website":"https://www.udr.com/philadelphia-apartments/fairmount/broadridge/","2BR Price Low":"$2,827","2BR Price High":"$3,180","Availability":"Multiple 2BR units available now through June","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes (Skydeck lawn)","Dog Park/Run":"Yes","Concierge":"No","Other Key Amenities":"ALDI on-site, podcast studio, movie theater, demo kitchen, yoga/spa, billiards","Pet Rent (Monthly)":"$65/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"May apply (confirm)","Weight Limit":"Not specified","Year Built":"2021","Total Units":"478","Move-In Specials":"2 Months Free (move in by 3/16, 14-mo lease)","Parking Type":"garage","Parking Cost":"costs extra: $200/month unreserved, $250/month reserved ([UDR Expenses](https://www.udr.com/philadelphia-apartments/fairmount/broadridge/apartment-expenses))","Reserved Parking":"yes, $250/month","EV Charging":"yes, Level 2 ChargePoint stations on 2nd floor ([ChargeHub](https://chargehub.com/en/ev-charging-stations/united-states/pennsylvania/philadelphia/broadridge-philly/electric-car-stations-near-me?locId=132385))","Parking Notes":"Third-party listing shows $175 unreserved/$199 reserved (possibly outdated) ([Black Label](https://blacklabelkw.com/properties/1300-fairmount-ave-flat-1bed-den-philadelphia-pa-19123-paph2032826)). Not included in rent. Prices subject to change."},{"Area":"Fairmount","Building Name":"The Noble","Address":"200 Spring Garden St, Philadelphia, PA 19123","Sub-Neighborhood":"Spring Garden / N. Liberties border","Management Company":"Greystar / KRE Group","Phone":"267-415-8501","Email":"N/A","Website":"https://thenoblephilly.com","2BR Price Low":"$2,868","2BR Price High":"$3,838","Availability":"Multiple 2BR units available (as of 3/11; move-in April–June)","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Pet spa, bike storage, package lockers, gas range","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"No aggressive breeds","Weight Limit":"75 lbs","Year Built":"2016","Total Units":"108","Move-In Specials":"1 Month Free on 14-month leases","Parking Type":"garage","Parking Cost":"$175/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Fairmount","Building Name":"Park Towne Place","Address":"2200 Benjamin Franklin Pkwy, Philadelphia, PA 19130","Sub-Neighborhood":"Fairmount / Parkway corridor","Management Company":"Greystar","Phone":"215-978-8800","Email":"N/A","Website":"https://www.parktowneplace.com","2BR Price Low":"$2,195","2BR Price High":"$3,005","Availability":"Multiple 2BR units available now and through summer","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"4 pools, tennis courts, courtyard, doorman","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$350","Breed Restrictions":"Restricted breeds apply","Weight Limit":"75 lbs","Year Built":"1959","Total Units":"900","Move-In Specials":"1.5 months free on 15-month lease","Parking Type":"garage","Parking Cost":"$175/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Fairmount","Building Name":"LVL North","Address":"1600 N 15th St, Philadelphia, PA 19121","Sub-Neighborhood":"North Broad / Temple adjacent","Management Company":"Greystar","Phone":"215-769-4700","Email":"N/A","Website":"https://www.lvlnorthphilly.com","2BR Price Low":"$2,085","2BR Price High":"$2,535","Availability":"Several 2BRs available; April–June move-ins","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"Yes","Concierge":"No","Other Key Amenities":"Rooftop lounge, game room, co-working","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$400","Breed Restrictions":"Restricted breeds","Weight Limit":"100 lbs","Year Built":"2019","Total Units":"286","Move-In Specials":"6 Weeks Free","Parking Type":"garage","Parking Cost":"$150/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Fairmount","Building Name":"The Gio","Address":"2101 Green St, Philadelphia, PA 19130","Sub-Neighborhood":"Green St corridor","Management Company":"PMC Property Group","Phone":"215-236-3400","Email":"N/A","Website":"https://www.thegioapts.com","2BR Price Low":"$2,300","2BR Price High":"$2,800","Availability":"Limited availability; contact for details","Pool":"No","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Historic building, bike storage","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$250","Breed Restrictions":"May apply","Weight Limit":"50 lbs","Year Built":"1920","Total Units":"50","Move-In Specials":"None","Parking Type":"street","Parking Cost":"street parking only","Reserved Parking":"no","EV Charging":"no","Parking Notes":""},{"Area":"Fairmount","Building Name":"Fairmount North","Address":"2101 N 13th St, Philadelphia, PA 19122","Sub-Neighborhood":"North Fairmount","Management Company":"PMC Property Group","Phone":"215-763-1800","Email":"N/A","Website":"https://www.fairmountnorth.com","2BR Price Low":"$1,800","2BR Price High":"$2,200","Availability":"Some availability; contact for current units","Pool":"No","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Laundry on-site, parking available","Pet Rent (Monthly)":"$40/mo","Pet Fee (One-Time)":"$200","Breed Restrictions":"May apply","Weight Limit":"35 lbs","Year Built":"1985","Total Units":"120","Move-In Specials":"None","Parking Type":"lot","Parking Cost":"$100/month","Reserved Parking":"yes","EV Charging":"no","Parking Notes":""},{"Area":"Logan Square","Building Name":"ReNew Logan Square","Address":"2 Franklin Town Blvd, Philadelphia, PA 19103","Sub-Neighborhood":"Logan Square","Management Company":"NRP Group","Phone":"215-563-7500","Email":"N/A","Website":"https://www.renewlogansquare.com","2BR Price Low":"$2,399","2BR Price High":"$3,199","Availability":"Several units available now through summer","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Sky lounge, EV charging, co-working space","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"80 lbs","Year Built":"2014","Total Units":"381","Move-In Specials":"1 Month Free","Parking Type":"garage","Parking Cost":"$200/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Logan Square","Building Name":"1919 Market","Address":"1919 Market St, Philadelphia, PA 19103","Sub-Neighborhood":"Market West","Management Company":"Greystar","Phone":"215-563-1919","Email":"N/A","Website":"https://www.1919market.com","2BR Price Low":"$2,850","2BR Price High":"$3,500","Availability":"Multiple units available; April–June move-ins","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"Rooftop pool, sky lounge, concierge, wine storage","Pet Rent (Monthly)":"$65/mo","Pet Fee (One-Time)":"$350","Breed Restrictions":"Restricted breeds","Weight Limit":"100 lbs","Year Built":"2016","Total Units":"322","Move-In Specials":"2 Months Free on 14-month leases","Parking Type":"garage","Parking Cost":"$300/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Logan Square","Building Name":"One Cathedral Square","Address":"1 Cathedral Sq, Philadelphia, PA 19103","Sub-Neighborhood":"Cathedral / Vine","Management Company":"Toll Brothers Apartment Living","Phone":"215-563-0001","Email":"N/A","Website":"https://www.onecathedralsquare.com","2BR Price Low":"$2,700","2BR Price High":"$3,300","Availability":"Limited availability; contact for details","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"Rooftop terrace, concierge, smart home tech","Pet Rent (Monthly)":"$75/mo","Pet Fee (One-Time)":"$400","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2019","Total Units":"169","Move-In Specials":"1 Month Free","Parking Type":"garage","Parking Cost":"$250/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Logan Square","Building Name":"Dalian on the Park","Address":"2100 Hamilton St, Philadelphia, PA 19130","Sub-Neighborhood":"Logan Square / Fairmount border","Management Company":"Equity Residential","Phone":"215-988-0900","Email":"N/A","Website":"https://www.equityapartments.com/philadelphia/logan-square/dalian-on-the-park-apartments","2BR Price Low":"$2,600","2BR Price High":"$3,400","Availability":"Some units available now; contact for current listings","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Views of Rodin Museum, sky lounge","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"100 lbs","Year Built":"2015","Total Units":"284","Move-In Specials":"Check current offers","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Logan Square","Building Name":"The Alexander","Address":"200 N 17th St, Philadelphia, PA 19103","Sub-Neighborhood":"Market / 17th","Management Company":"Greystar","Phone":"215-567-1700","Email":"N/A","Website":"https://www.alexanderphilly.com","2BR Price Low":"$2,500","2BR Price High":"$3,200","Availability":"Multiple units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop pool, co-working, lounge","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"80 lbs","Year Built":"2014","Total Units":"358","Move-In Specials":"1.5 Months Free","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Logan Square","Building Name":"The Murano","Address":"2101 Market St, Philadelphia, PA 19103","Sub-Neighborhood":"Market West","Management Company":"Equity Residential","Phone":"215-569-3200","Email":"N/A","Website":"https://www.equityapartments.com/philadelphia/rittenhouse-square/the-murano-apartments","2BR Price Low":"$2,800","2BR Price High":"$3,600","Availability":"Units available now through summer","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"High-rise, city views, concierge","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"100 lbs","Year Built":"2008","Total Units":"214","Move-In Specials":"Varies by owner","Parking Type":"garage","Parking Cost":"$275/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Logan Square","Building Name":"1900 Arch","Address":"1900 Arch St, Philadelphia, PA 19103","Sub-Neighborhood":"Arch St corridor","Management Company":"Post Apartment Homes","Phone":"215-568-1900","Email":"N/A","Website":"https://www.postarchphilly.com","2BR Price Low":"$2,600","2BR Price High":"$3,100","Availability":"Some units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Indoor pool, courtyard","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2000","Total Units":"260","Move-In Specials":"Check current offers","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Fitler Square","Building Name":"Locust on the Park","Address":"2100 Locust St, Philadelphia, PA 19103","Sub-Neighborhood":"Fitler Square / Schuylkill","Management Company":"Greystar","Phone":"215-732-1000","Email":"N/A","Website":"https://www.locustonthepark.com","2BR Price Low":"$2,950","2BR Price High":"$3,800","Availability":"Limited units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"Park views, rooftop pool, concierge","Pet Rent (Monthly)":"$75/mo","Pet Fee (One-Time)":"$400","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2018","Total Units":"206","Move-In Specials":"2 Months Free","Parking Type":"garage","Parking Cost":"$250/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Fitler Square","Building Name":"2116 Chestnut","Address":"2116 Chestnut St, Philadelphia, PA 19103","Sub-Neighborhood":"Fitler Square","Management Company":"Greystar","Phone":"215-496-0100","Email":"N/A","Website":"https://www.2116chestnut.com","2BR Price Low":"$2,700","2BR Price High":"$3,400","Availability":"Several units available now","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop pool, co-working","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"80 lbs","Year Built":"2017","Total Units":"280","Move-In Specials":"1 Month Free","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Fitler Square","Building Name":"Naval Square","Address":"500 Bainbridge St, Philadelphia, PA 19147","Sub-Neighborhood":"South Fitler / Queen Village border","Management Company":"AvalonBay Communities","Phone":"215-925-3600","Email":"N/A","Website":"https://www.avalonbay.com/apartments/pennsylvania/philadelphia/avalon-naval-square","2BR Price Low":"$2,600","2BR Price High":"$3,200","Availability":"Units available now","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"Yes","Concierge":"No","Other Key Amenities":"Historic naval base conversion, gated community, dog park","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$250","Breed Restrictions":"Restricted breeds","Weight Limit":"None stated","Year Built":"2005","Total Units":"450","Move-In Specials":"Varies by owner","Parking Type":"lot","Parking Cost":"$125/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Fitler Square","Building Name":"AQ Rittenhouse","Address":"2001 Hamilton St, Philadelphia, PA 19130","Sub-Neighborhood":"Rittenhouse / Fitler border","Management Company":"Alliance Residential","Phone":"215-496-1800","Email":"N/A","Website":"https://www.aqrittenhouse.com","2BR Price Low":"$2,700","2BR Price High":"$3,500","Availability":"Some units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop terrace, sky lounge","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2015","Total Units":"272","Move-In Specials":"Check current offers","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Center City","Building Name":"The Atlantic","Address":"1701 Walnut St, Philadelphia, PA 19103","Sub-Neighborhood":"Rittenhouse Square","Management Company":"AvalonBay Communities","Phone":"215-567-8700","Email":"N/A","Website":"https://www.avalonbay.com/apartments/pennsylvania/philadelphia/avalon-the-atlantic","2BR Price Low":"$3,200","2BR Price High":"$4,200","Availability":"Premium units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"Rooftop pool, concierge, high-end finishes","Pet Rent (Monthly)":"$75/mo","Pet Fee (One-Time)":"$400","Breed Restrictions":"Restricted breeds","Weight Limit":"80 lbs","Year Built":"2013","Total Units":"230","Move-In Specials":"1 Month Free","Parking Type":"garage","Parking Cost":"$300/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Center City","Building Name":"The St. James","Address":"200 S 18th St, Philadelphia, PA 19103","Sub-Neighborhood":"Rittenhouse Square","Management Company":"Post Apartment Homes","Phone":"215-545-0100","Email":"N/A","Website":"https://www.postapartments.com/apartments/pa/philadelphia/post-rittenhouse-square","2BR Price Low":"$2,900","2BR Price High":"$3,800","Availability":"Units available; contact for current listings","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"Courtyard pool, concierge, historic building","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"1987","Total Units":"290","Move-In Specials":"Check current offers","Parking Type":"garage","Parking Cost":"$275/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Center City","Building Name":"1213 Walnut","Address":"1213 Walnut St, Philadelphia, PA 19107","Sub-Neighborhood":"Washington Square West","Management Company":"Greystar","Phone":"215-985-1213","Email":"N/A","Website":"https://www.1213walnut.com","2BR Price Low":"$2,500","2BR Price High":"$3,200","Availability":"Multiple units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop terrace, lounge","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2016","Total Units":"197","Move-In Specials":"6 Weeks Free","Parking Type":"garage","Parking Cost":"$250/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Center City","Building Name":"The Griffin Center City","Address":"1600 Arch St, Philadelphia, PA 19103","Sub-Neighborhood":"Arch St / Logan Square adjacent","Management Company":"Griffin-American Healthcare","Phone":"215-569-9100","Email":"N/A","Website":"https://www.griffincentercity.com","2BR Price Low":"$2,600","2BR Price High":"$3,300","Availability":"Some units available","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"Rooftop deck, concierge","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2018","Total Units":"141","Move-In Specials":"Check with leasing","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Center City","Building Name":"The View at Old City","Address":"110 N 3rd St, Philadelphia, PA 19106","Sub-Neighborhood":"Old City","Management Company":"PMC Property Group","Phone":"215-925-4100","Email":"N/A","Website":"https://www.viewatoldcity.com","2BR Price Low":"$2,200","2BR Price High":"$2,900","Availability":"Several units available","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop deck with city views","Pet Rent (Monthly)":"$40/mo","Pet Fee (One-Time)":"$200","Breed Restrictions":"May apply","Weight Limit":"50 lbs","Year Built":"2004","Total Units":"200","Move-In Specials":"None","Parking Type":"garage","Parking Cost":"$200/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Center City","Building Name":"The Girard (East Market)","Address":"1100 Ludlow St, Philadelphia, PA 19107","Sub-Neighborhood":"East Market","Management Company":"National Real Estate Advisors","Phone":"215-925-3100","Email":"N/A","Website":"https://www.thegirardphilly.com","2BR Price Low":"$2,650","2BR Price High":"$3,300","Availability":"Units available now","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop pool, co-working, EV charging","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"80 lbs","Year Built":"2018","Total Units":"322","Move-In Specials":"Contact for current offers","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Center City","Building Name":"210 South 12th","Address":"210 S 12th St, Philadelphia, PA 19107","Sub-Neighborhood":"Washington Square West / Gayborhood","Management Company":"Toll Brothers Apartment Living","Phone":"215-985-0012","Email":"N/A","Website":"https://www.210south12th.com","2BR Price Low":"$2,800","2BR Price High":"$3,600","Availability":"Several units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop pool, lounge, smart home","Pet Rent (Monthly)":"$75/mo","Pet Fee (One-Time)":"$350","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2020","Total Units":"243","Move-In Specials":"2 Months Free","Parking Type":"garage","Parking Cost":"$250/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Center City","Building Name":"Goldtex","Address":"315 N 12th St, Philadelphia, PA 19107","Sub-Neighborhood":"Chinatown / Callowhill border","Management Company":"Bozzuto","Phone":"215-922-1200","Email":"N/A","Website":"https://www.goldtexapts.com","2BR Price Low":"$2,300","2BR Price High":"$3,000","Availability":"Several units available","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop deck, historic mill conversion","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2013","Total Units":"163","Move-In Specials":"Check current offers","Parking Type":"garage","Parking Cost":"$175/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Center City","Building Name":"The Crane Chinatown","Address":"1100 Race St, Philadelphia, PA 19107","Sub-Neighborhood":"Chinatown","Management Company":"Independencia Management","Phone":"215-925-5200","Email":"N/A","Website":"https://www.thecranechinatown.com","2BR Price Low":"$2,400","2BR Price High":"$3,100","Availability":"Units available now","Pool":"No","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop, co-working, walkable to Chinatown restaurants","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$250","Breed Restrictions":"May apply","Weight Limit":"65 lbs","Year Built":"2022","Total Units":"155","Move-In Specials":"1 Month Free","Parking Type":"garage","Parking Cost":"$200/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Center City","Building Name":"The Residences at The Bellevue","Address":"1415 Chancellor St, Philadelphia, PA 19102","Sub-Neighborhood":"Rittenhouse / Avenue of the Arts","Management Company":"The Bellevue Hotel","Phone":"215-893-1234","Email":"N/A","Website":"https://www.thebellevuephiladelphia.com/residences","2BR Price Low":"$3,500","2BR Price High":"$5,000","Availability":"Limited premium units","Pool":"No","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"Yes","Other Key Amenities":"Historic hotel conversion, white-glove concierge, spa access","Pet Rent (Monthly)":"$100/mo","Pet Fee (One-Time)":"$500","Breed Restrictions":"Restricted breeds","Weight Limit":"50 lbs","Year Built":"1904","Total Units":"172","Move-In Specials":"None","Parking Type":"valet","Parking Cost":"$350/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":"Valet only"},{"Area":"Center City","Building Name":"One Thousand One","Address":"1001 City Ave, Philadelphia, PA 19151","Sub-Neighborhood":"City Avenue / Bala Cynwyd border","Management Company":"Bozzuto","Phone":"610-664-1001","Email":"N/A","Website":"https://www.onethousandone.com","2BR Price Low":"$2,100","2BR Price High":"$2,800","Availability":"Multiple units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"Yes","Concierge":"No","Other Key Amenities":"Dog park, rooftop lounge, EV charging","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2020","Total Units":"312","Move-In Specials":"6 Weeks Free","Parking Type":"garage","Parking Cost":"$150/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Center City","Building Name":"The Collins","Address":"1100 Spruce St, Philadelphia, PA 19107","Sub-Neighborhood":"Washington Square West","Management Company":"Post Apartment Homes","Phone":"215-985-2900","Email":"N/A","Website":"https://www.thecollinsphilly.com","2BR Price Low":"$2,600","2BR Price High":"$3,400","Availability":"Several units available","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"No","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Courtyard pool, fitness center","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"75 lbs","Year Built":"2007","Total Units":"252","Move-In Specials":"1 Month Free","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"unknown","Parking Notes":""},{"Area":"Center City","Building Name":"The Sterling","Address":"1900 Market St, Philadelphia, PA 19103","Sub-Neighborhood":"Market West / Logan Square","Management Company":"Greystar","Phone":"215-564-4700","Email":"N/A","Website":"https://www.thesterlingphilly.com","2BR Price Low":"$2,825","2BR Price High":"$3,200","Availability":"Units available now","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop pool, sky lounge, co-working","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"80 lbs","Year Built":"2015","Total Units":"286","Move-In Specials":"2 Months Free","Parking Type":"garage","Parking Cost":"$225/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""},{"Area":"Center City","Building Name":"2301 JFK","Address":"2301 JFK Blvd, Philadelphia, PA 19103","Sub-Neighborhood":"JFK / Market West","Management Company":"Equity Residential","Phone":"215-567-2301","Email":"N/A","Website":"https://www.equityapartments.com/philadelphia/rittenhouse-square/2301-jfk-apartments","2BR Price Low":"$2,700","2BR Price High":"$3,500","Availability":"Units available now through summer","Pool":"Yes","Gym":"Yes","Rooftop/Deck":"Yes","Dog Park/Run":"No","Concierge":"No","Other Key Amenities":"Rooftop pool, skyline views, EV charging","Pet Rent (Monthly)":"$50/mo","Pet Fee (One-Time)":"$300","Breed Restrictions":"Restricted breeds","Weight Limit":"80 lbs","Year Built":"2016","Total Units":"346","Move-In Specials":"1.5 Months Free","Parking Type":"garage","Parking Cost":"$250/month","Reserved Parking":"yes","EV Charging":"yes","Parking Notes":""}];
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
      reservedParking: d["Reserved Parking"] || "",
      evCharging: d["EV Charging"] || "",
      evChargingYes: isYes(d["EV Charging"]),
      parkingNotes: d["Parking Notes"] || ""
    };
  }

  /* ── SCORING ──────────────────────────────────────────────────── */
  var WEIGHTS = {
    pool:       { label: "Pool",            w: 3 },
    gym:        { label: "Gym",             w: 2 },
    rooftop:    { label: "Rooftop/Deck",    w: 2 },
    dogPark:    { label: "Dog Park",        w: 2 },
    concierge:  { label: "Concierge",       w: 1 },
    evCharging: { label: "EV Charging",     w: 2 },
    specials:   { label: "Move-In Specials",w: 2 },
    dogFriendly:{ label: "Dog-Friendly",    w: 1 }
  };

  function scoreApartment(apt, prefs) {
    var score = 0;
    if (prefs.pool      && apt.poolYes)       score += WEIGHTS.pool.w;
    if (prefs.gym       && apt.gymYes)        score += WEIGHTS.gym.w;
    if (prefs.rooftop   && isYes(apt.rooftop))score += WEIGHTS.rooftop.w;
    if (prefs.dogPark   && apt.dogParkYes)    score += WEIGHTS.dogPark.w;
    if (prefs.concierge && apt.conciergeYes)  score += WEIGHTS.concierge.w;
    if (prefs.evCharging && apt.evChargingYes)score += WEIGHTS.evCharging.w;
    if (prefs.specials  && apt.hasSpecial)    score += WEIGHTS.specials.w;
    if (prefs.dogFriendly && apt.dogFriendly) score += WEIGHTS.dogFriendly.w;
    return score;
  }

  /* ── STATE ────────────────────────────────────────────────────── */
  var state = {
    filters: {
      area: "all",
      maxPrice: null,
      minPrice: null,
      pool: false,
      gym: false,
      rooftop: false,
      dogPark: false,
      concierge: false,
      evCharging: false,
      specials: false,
      dogFriendly: false,
      parking: "any",
      sortBy: "score"
    },
    prefs: {
      pool: true,
      gym: true,
      rooftop: true,
      dogPark: true,
      concierge: false,
      evCharging: true,
      specials: true,
      dogFriendly: true
    },
    expandedRows: new Set(),
    columnVisibility: {
      score:    true,
      area:     true,
      name:     true,
      price:    true,
      specials: true,
      pool:     true,
      gym:      true,
      rooftop:  true,
      dogPark:  true,
      concierge:true,
      evCharging:true,
      parking:  true
    },
    allExpanded: false
  };

  /* ── DOM HELPERS ──────────────────────────────────────────────── */
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }
  function ce(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") el.className = attrs[k];
        else if (k === "textContent") el.textContent = attrs[k];
        else if (k === "innerHTML") el.innerHTML = attrs[k];
        else el.setAttribute(k, attrs[k]);
      });
    }
    if (children) {
      children.forEach(function (c) {
        if (typeof c === "string") el.appendChild(document.createTextNode(c));
        else if (c) el.appendChild(c);
      });
    }
    return el;
  }

  /* ── FILTER PANEL ─────────────────────────────────────────────── */
  function buildFilterPanel() {
    var panel = qs("#filter-panel");
    if (!panel) return;

    /* area selector */
    var areas = ["all"].concat(
      Array.from(new Set(APARTMENTS.map(function (a) { return a.area; })))
    );
    var areaWrap = qs("#area-filter-wrap");
    if (areaWrap) {
      var sel = ce("select", { id: "area-select", className: "filter-select" });
      areas.forEach(function (a) {
        var opt = ce("option", { value: a }, [a === "all" ? "All Areas" : a]);
        sel.appendChild(opt);
      });
      areaWrap.appendChild(sel);
      sel.addEventListener("change", function () {
        state.filters.area = sel.value;
        renderTable();
      });
    }

    /* price inputs */
    var maxPriceInput = qs("#max-price");
    if (maxPriceInput) {
      maxPriceInput.addEventListener("input", debounce(function () {
        var v = parseInt(maxPriceInput.value, 10);
        state.filters.maxPrice = isNaN(v) ? null : v;
        renderTable();
      }, 300));
    }
    var minPriceInput = qs("#min-price");
    if (minPriceInput) {
      minPriceInput.addEventListener("input", debounce(function () {
        var v = parseInt(minPriceInput.value, 10);
        state.filters.minPrice = isNaN(v) ? null : v;
        renderTable();
      }, 300));
    }

    /* amenity checkboxes */
    var amenityIds = ["pool", "gym", "rooftop", "dog-park", "concierge", "ev-charging", "specials", "dog-friendly"];
    amenityIds.forEach(function (id) {
      var cb = qs("#filter-" + id);
      if (cb) {
        var key = id.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
        cb.addEventListener("change", function () {
          state.filters[key] = cb.checked;
          renderTable();
        });
      }
    });

    /* parking filter */
    var parkingSelect = qs("#parking-filter");
    if (parkingSelect) {
      parkingSelect.addEventListener("change", function () {
        state.filters.parking = parkingSelect.value;
        renderTable();
      });
    }

    /* sort */
    var sortSelect = qs("#sort-select");
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        state.filters.sortBy = sortSelect.value;
        renderTable();
      });
    }
  }

  /* ── FILTER TOGGLE (mobile) ───────────────────────────────────── */
  function initFilterToggle() {
    var btn = qs(".filter-toggle");
    var panel = qs("#filter-panel");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }

  /* ── NAV ──────────────────────────────────────────────────────── */
  function initNav() {
    var items = qsa(".nav-item");
    items.forEach(function (item) {
      item.addEventListener("click", function () {
        items.forEach(function (i) { i.classList.remove("active"); });
        item.classList.add("active");
        var target = item.dataset.target;
        if (target) {
          qsa(".view-section").forEach(function (s) { s.classList.remove("active"); });
          var section = qs("#" + target);
          if (section) section.classList.add("active");
        }
      });
    });
  }

  /* ── TABLE ────────────────────────────────────────────────────── */
  function applyFilters(data) {
    return data.filter(function (apt) {
      if (state.filters.area !== "all" && apt.area !== state.filters.area) return false;
      if (state.filters.maxPrice !== null && (apt.priceLow === null || apt.priceLow > state.filters.maxPrice)) return false;
      if (state.filters.minPrice !== null && (apt.priceHigh === null || apt.priceHigh < state.filters.minPrice)) return false;
      if (state.filters.pool && !apt.poolYes) return false;
      if (state.filters.gym && !apt.gymYes) return false;
      if (state.filters.rooftop && !isYes(apt.rooftop)) return false;
      if (state.filters.dogPark && !apt.dogParkYes) return false;
      if (state.filters.concierge && !apt.conciergeYes) return false;
      if (state.filters.evCharging && !apt.evChargingYes) return false;
      if (state.filters.specials && !apt.hasSpecial) return false;
      if (state.filters.dogFriendly && !apt.dogFriendly) return false;
      if (state.filters.parking !== "any") {
        if (state.filters.parking === "garage" && apt.parkingType !== "garage") return false;
        if (state.filters.parking === "lot" && apt.parkingType !== "lot") return false;
        if (state.filters.parking === "none" && apt.parkingType !== "street") return false;
      }
      return true;
    });
  }

  function sortData(data) {
    var sorted = data.slice();
    switch (state.filters.sortBy) {
      case "price-asc":  sorted.sort(function (a, b) { return (a.priceLow || 9999) - (b.priceLow || 9999); }); break;
      case "price-desc": sorted.sort(function (a, b) { return (b.priceLow || 0) - (a.priceLow || 0); }); break;
      case "name":       sorted.sort(function (a, b) { return a.name.localeCompare(b.name); }); break;
      case "score":
      default:           sorted.sort(function (a, b) { return (b._score || 0) - (a._score || 0); }); break;
    }
    return sorted;
  }

  function pill(label, yes, unknown) {
    if (unknown) return ce("span", { className: "pill pill--unknown" }, ["?"]);
    return ce("span", { className: "pill " + (yes ? "pill--yes" : "pill--no") }, [yes ? "✓" : "✗"]);
  }

  function buildDetailRow(apt, colCount) {
    var tr = ce("tr", { className: "detail-row" });
    var td = ce("td", { colSpan: String(colCount) });
    var grid = ce("div", { className: "detail-grid" });

    var sections = [
      { title: "Contact", items: [
        { label: "Phone", value: apt.phone },
        { label: "Email", value: apt.email },
        { label: "Website", value: apt.website, link: true }
      ]},
      { title: "Unit Info", items: [
        { label: "Year Built", value: apt.yearBuilt },
        { label: "Total Units", value: apt.totalUnits },
        { label: "Availability", value: apt.availability }
      ]},
      { title: "Pets", items: [
        { label: "Pet Rent", value: apt.petRent },
        { label: "Pet Fee", value: apt.petFee },
        { label: "Breed Restrictions", value: apt.breedRestrictions },
        { label: "Weight Limit", value: apt.weightLimit }
      ]},
      { title: "Parking", items: [
        { label: "Type", value: apt.parkingType },
        { label: "Cost", value: apt.parkingCost },
        { label: "Reserved", value: apt.reservedParking },
        { label: "EV Charging", value: apt.evCharging },
        { label: "Notes", value: apt.parkingNotes }
      ]},
      { title: "Amenities", items: [
        { label: "Other", value: apt.amenities }
      ]},
      { title: "Move-In", items: [
        { label: "Specials", value: apt.specials },
        { label: "Management", value: apt.management }
      ]}
    ];

    sections.forEach(function (sec) {
      var secDiv = ce("div", { className: "detail-section" });
      secDiv.appendChild(ce("h4", { className: "detail-section__title" }, [sec.title]));
      sec.items.forEach(function (item) {
        var row = ce("div", { className: "detail-item" });
        row.appendChild(ce("span", { className: "detail-label" }, [item.label + ": "]));
        if (item.link && item.value && item.value.startsWith("http")) {
          var a = ce("a", { href: item.value, target: "_blank", rel: "noopener", className: "detail-link" }, [item.value]);
          row.appendChild(a);
        } else {
          row.appendChild(ce("span", { className: "detail-value" }, [item.value || "—"]));
        }
        secDiv.appendChild(row);
      });
      grid.appendChild(secDiv);
    });

    td.appendChild(grid);
    tr.appendChild(td);
    return tr;
  }

  function getVisibleColumns() {
    return Object.keys(state.columnVisibility).filter(function (k) { return state.columnVisibility[k]; });
  }

  function renderTable() {
    var tbody = qs("#apt-tbody");
    var countEl = qs("#result-count");
    if (!tbody) return;

    var scored = APARTMENTS.map(function (apt) {
      return Object.assign({}, apt, { _score: scoreApartment(apt, state.prefs) });
    });
    var filtered = applyFilters(scored);
    var sorted = sortData(filtered);

    if (countEl) countEl.textContent = sorted.length + " apartments";

    tbody.innerHTML = "";
    var visibleCols = getVisibleColumns();
    var colCount = visibleCols.length + 1; /* +1 for expand toggle */

    sorted.forEach(function (apt) {
      var isExpanded = state.expandedRows.has(apt.name);

      /* main row */
      var tr = ce("tr", { className: "apt-row" + (isExpanded ? " expanded" : "") });
      tr.dataset.name = apt.name;

      /* expand toggle cell */
      var expandTd = ce("td", { className: "expand-cell" });
      var expandBtn = ce("button", { className: "expand-btn", "aria-label": "Toggle details" }, [isExpanded ? "▲" : "▼"]);
      expandTd.appendChild(expandBtn);
      tr.appendChild(expandTd);

      visibleCols.forEach(function (col) {
        var td = ce("td", {});
        switch (col) {
          case "score":
            td.appendChild(ce("span", { className: "score-badge" }, [String(apt._score)]));
            break;
          case "area":
            td.textContent = apt.area;
            break;
          case "name":
            var nameWrap = ce("div", { className: "name-cell" });
            nameWrap.appendChild(ce("span", { className: "apt-name" }, [apt.name]));
            if (apt.subNeighborhood) nameWrap.appendChild(ce("span", { className: "sub-neighborhood" }, [apt.subNeighborhood]));
            td.appendChild(nameWrap);
            break;
          case "price":
            td.textContent = apt.priceLowRaw + (apt.priceHighRaw ? " – " + apt.priceHighRaw : "");
            break;
          case "specials":
            td.appendChild(ce("span", { className: apt.hasSpecial ? "special-badge" : "" }, [apt.specials || "—"]));
            break;
          case "pool":      td.appendChild(pill("Pool",      apt.poolYes));      break;
          case "gym":       td.appendChild(pill("Gym",       apt.gymYes));       break;
          case "rooftop":   td.appendChild(pill("Rooftop",   isYes(apt.rooftop))); break;
          case "dogPark":   td.appendChild(pill("Dog Park",  apt.dogParkYes));   break;
          case "concierge": td.appendChild(pill("Concierge", apt.conciergeYes)); break;
          case "evCharging":
            var evVal = apt.evCharging.toLowerCase();
            td.appendChild(pill("EV", apt.evChargingYes, evVal === "unknown"));
            break;
          case "parking":
            td.textContent = apt.parkingType + (apt.parkingCost ? " (" + apt.parkingCost + ")" : "");
            break;
        }
        tr.appendChild(td);
      });

      /* expand/collapse */
      expandBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleRow(apt.name);
      });
      tr.addEventListener("click", function () { toggleRow(apt.name); });

      tbody.appendChild(tr);

      if (isExpanded) {
        tbody.appendChild(buildDetailRow(apt, colCount));
      }
    });
  }

  function toggleRow(name) {
    if (state.expandedRows.has(name)) {
      state.expandedRows.delete(name);
    } else {
      state.expandedRows.add(name);
    }
    renderTable();
  }

  /* ── COLUMN VISIBILITY ────────────────────────────────────────── */
  function initColumnVisibility() {
    var container = qs("#column-toggles");
    if (!container) return;
    Object.keys(state.columnVisibility).forEach(function (key) {
      var label = ce("label", { className: "col-toggle-label" });
      var cb = ce("input", { type: "checkbox" });
      cb.checked = state.columnVisibility[key];
      cb.addEventListener("change", function () {
        state.columnVisibility[key] = cb.checked;
        renderTableHeader();
        renderTable();
      });
      label.appendChild(cb);
      label.appendChild(document.createTextNode(" " + key));
      container.appendChild(label);
    });
  }

  function renderTableHeader() {
    var thead = qs("#apt-thead");
    if (!thead) return;
    thead.innerHTML = "";
    var tr = ce("tr", {});
    tr.appendChild(ce("th", { className: "expand-th" }, [""]));
    var visibleCols = getVisibleColumns();
    visibleCols.forEach(function (col) {
      var th = ce("th", { "data-col": col, className: "resizable-th" });
      var label = {
        score: "Score", area: "Area", name: "Building", price: "2BR Price",
        specials: "Specials", pool: "Pool", gym: "Gym", rooftop: "Rooftop",
        dogPark: "Dog Park", concierge: "Concierge", evCharging: "EV", parking: "Parking"
      }[col] || col;
      th.appendChild(ce("span", { className: "th-label" }, [label]));
      var resizer = ce("div", { className: "col-resizer" });
      th.appendChild(resizer);
      tr.appendChild(th);
    });
    thead.appendChild(tr);
  }

  /* ── COLUMN RESIZE ────────────────────────────────────────────── */
  function initColumnResize() {
    var table = qs("#apt-table");
    if (!table) return;
    var resizing = null;

    table.addEventListener("mousedown", function (e) {
      var resizer = e.target.closest(".col-resizer");
      if (!resizer) return;
      var th = resizer.parentElement;
      resizing = {
        th: th,
        startX: e.clientX,
        startW: th.offsetWidth
      };
      document.body.classList.add("col-resizing");
      e.preventDefault();
    });

    document.addEventListener("mousemove", function (e) {
      if (!resizing) return;
      var newW = Math.max(60, resizing.startW + (e.clientX - resizing.startX));
      resizing.th.style.width = newW + "px";
      resizing.th.style.minWidth = newW + "px";
    });

    document.addEventListener("mouseup", function () {
      if (resizing) {
        resizing = null;
        document.body.classList.remove("col-resizing");
      }
    });
  }

  /* ── MAP VIEW ─────────────────────────────────────────────────── */
  var mapInstance = null;
  var mapMarkers = [];

  function initMap() {
    if (typeof L === "undefined") return;
    var mapEl = qs("#map");
    if (!mapEl || mapInstance) return;
    mapInstance = L.map("map").setView([39.9526, -75.1652], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(mapInstance);
    renderMapMarkers();
  }

  function renderMapMarkers() {
    if (!mapInstance) return;
    mapMarkers.forEach(function (m) { m.remove(); });
    mapMarkers = [];
    var scored = APARTMENTS.map(function (apt) {
      return Object.assign({}, apt, { _score: scoreApartment(apt, state.prefs) });
    });
    var filtered = applyFilters(scored);
    filtered.forEach(function (apt) {
      var coords = getCoords(apt.address);
      if (!coords) return;
      var marker = L.marker(coords);
      marker.bindPopup(
        "<strong>" + apt.name + "</strong><br>" +
        apt.priceLowRaw + (apt.priceHighRaw ? " – " + apt.priceHighRaw : "") + "<br>" +
        (apt.hasSpecial ? "<em>" + apt.specials + "</em>" : "")
      );
      marker.addTo(mapInstance);
      mapMarkers.push(marker);
    });
    if (mapInstance) { setTimeout(function () { mapInstance.invalidateSize(); }, 100); }
  }

  /* ── PREFS PANEL ──────────────────────────────────────────────── */
  function initPrefsPanel() {
    var form = qs("#prefs-form");
    if (!form) return;
    Object.keys(state.prefs).forEach(function (key) {
      var cb = qs("#pref-" + key, form);
      if (cb) {
        cb.checked = state.prefs[key];
        cb.addEventListener("change", function () {
          state.prefs[key] = cb.checked;
          renderTable();
          renderMapMarkers();
        });
      }
    });
  }

  /* ── CONFIG MODAL ─────────────────────────────────────────────── */
  function initConfigModal() {
    var btn = qs("#config-btn");
    var modal = qs("#config-modal");
    var closeBtn = qs("#config-close");
    if (!btn || !modal) return;
    btn.addEventListener("click", function () {
      modal.classList.add("open");
    });
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        modal.classList.remove("open");
      });
    }
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("open");
    });
  }

  /* ── EXPAND ALL ───────────────────────────────────────────────── */
  function initExpandAll() {
    var btn = qs("#expand-all-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      state.allExpanded = !state.allExpanded;
      if (state.allExpanded) {
        APARTMENTS.forEach(function (apt) { state.expandedRows.add(apt.name); });
        btn.textContent = "Collapse All";
      } else {
        state.expandedRows.clear();
        btn.textContent = "Expand All";
      }
      renderTable();
    });
  }

  /* ── GEOCODE (simple lookup) ──────────────────────────────────── */
  var COORDS = {
    "1300 Fairmount Ave, Philadelphia, PA 19123":    [39.9680, -75.1640],
    "200 Spring Garden St, Philadelphia, PA 19123":  [39.9612, -75.1497],
    "2200 Benjamin Franklin Pkwy, Philadelphia, PA 19130": [39.9617, -75.1757],
    "1600 N 15th St, Philadelphia, PA 19121":         [39.9756, -75.1674],
    "2101 Green St, Philadelphia, PA 19130":          [39.9638, -75.1742],
    "2101 N 13th St, Philadelphia, PA 19122":         [39.9763, -75.1585],
    "2 Franklin Town Blvd, Philadelphia, PA 19103":   [39.9571, -75.1657],
    "1919 Market St, Philadelphia, PA 19103":         [39.9534, -75.1685],
    "1 Cathedral Sq, Philadelphia, PA 19103":         [39.9563, -75.1720],
    "2100 Hamilton St, Philadelphia, PA 19130":       [39.9608, -75.1731],
    "200 N 17th St, Philadelphia, PA 19103":          [39.9540, -75.1714],
    "2101 Market St, Philadelphia, PA 19103":         [39.9527, -75.1718],
    "1900 Arch St, Philadelphia, PA 19103":           [39.9541, -75.1684],
    "2100 Locust St, Philadelphia, PA 19103":         [39.9476, -75.1741],
    "2116 Chestnut St, Philadelphia, PA 19103":       [39.9504, -75.1747],
    "500 Bainbridge St, Philadelphia, PA 19147":      [39.9395, -75.1576],
    "2001 Hamilton St, Philadelphia, PA 19130":       [39.9606, -75.1729],
    "1701 Walnut St, Philadelphia, PA 19103":         [39.9497, -75.1706],
    "200 S 18th St, Philadelphia, PA 19103":          [39.9482, -75.1717],
    "1213 Walnut St, Philadelphia, PA 19107":         [39.9484, -75.1594],
    "1600 Arch St, Philadelphia, PA 19103":           [39.9545, -75.1655],
    "110 N 3rd St, Philadelphia, PA 19106":           [39.9510, -75.1450],
    "1100 Ludlow St, Philadelphia, PA 19107":         [39.9495, -75.1574],
    "210 S 12th St, Philadelphia, PA 19107":          [39.9471, -75.1591],
    "315 N 12th St, Philadelphia, PA 19107":          [39.9546, -75.1590],
    "1100 Race St, Philadelphia, PA 19107":           [39.9538, -75.1568],
    "1415 Chancellor St, Philadelphia, PA 19102":     [39.9491, -75.1660],
    "1001 City Ave, Philadelphia, PA 19151":          [39.9938, -75.2377],
    "1100 Spruce St, Philadelphia, PA 19107":         [39.9456, -75.1596],
    "1900 Market St, Philadelphia, PA 19103":         [39.9537, -75.1683],
    "2301 JFK Blvd, Philadelphia, PA 19103":          [39.9548, -75.1754]
  };

  function getCoords(address) {
    return COORDS[address] || null;
  }

  /* ── DEBOUNCE ─────────────────────────────────────────────────── */
  function debounce(fn, delay) {
    var timer;
    return function () {
      clearTimeout(timer);
      var args = arguments;
      var ctx = this;
      timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
    };
  }

  /* ── INIT ─────────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", function () {
    loadData().then(function () {
      buildFilterPanel();
      initFilterToggle();
      initNav();
      renderTableHeader();
      renderTable();
      initColumnVisibility();
      initPrefsPanel();
      initExpandAll();
      initMap();
      requestAnimationFrame(function () { initColumnResize(); });
      initConfigModal();
    });

  });

})();
