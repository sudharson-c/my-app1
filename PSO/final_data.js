
const data = { 
    hospitals : [
    {
      id: 1,
      name: 'JJ Hospital madurai',
      coordinates: [ 9.9168421, 78.0937991 ],
      rating: 4.9,
      address: 'Plot no 2, Bypass Rd, behind KFC Restaurant, Vanamamalai Nagar, Durai Samy Nagar, Madurai, Tamil Nadu 625010, India',
      phone: '+91 90031 94438',
      website: 'https://drmadhugastro.com/'
    },
    {
      id: 2,
      name: 'Bright Hospital, Madurai Tn.',
      coordinates: [ 9.933076, 78.1397271 ],
      rating: 4.8,
      address: 'Dr Thangaraj Salai, Mellur, Madurai, Tamil Nadu 625020, India',
      phone: '+91 98401 45835',
      website: null
    },
    {
      id: 3,
      name: 'Iniya Multispeciality Hospital',
      coordinates: [ 9.916409, 78.15042919999999 ],
      rating: 4.9,
      address: 'Vandiyur Main Rd, Vaigai Colony, Sathamangalam, Madurai, Tamil Nadu 625020, India',
      phone: '+91 98423 47284',
      website: 'http://www.iniyahospital.com/'
    },
    {
      id: 4,
      name: 'Easvara Hospital',
      coordinates: [ 9.9328697, 78.1352594 ],
      rating: 4.8,
      address: 'Ground, Near, Old Post Office Road, 1-B, Perumal Koil St, Madurai, Tamil Nadu 625002, India',
      phone: '+91 452 253 9555',
      website: 'https://easvarahospital.com/'
    },
    {
      id: 5,
      name: 'Lakshmana multispeciality Hospital',
      coordinates: [ 9.898293899999999, 78.0903328 ],
      rating: 4.4,
      address: 'Tirupparankunram Rd, Madurai, Tamil Nadu 625004, India',
      phone: '+91 73730 72110',
      website: null
    },
    {
      id: 6,
      name: 'Jaisee Hospital',
      coordinates: [ 9.9255397, 78.09761429999999 ],
      rating: 4.8,
      address: '38, Thiruvalluvar Street, opp. Bhuvaneshwari Amman Temple, Ponmeni, S S Colony, Madurai, Tamil Nadu 625010, India',
      phone: '+91 452 420 0067',
      website: 'http://jaiseehospital.org/'
    },
    {
      id: 7,
      name: 'Guru Hospital',
      coordinates: [ 9.9435922, 78.1649261 ],
      rating: 4.5,
      address: '120-F, 4, Pandi Kovil Ring Rd, near Mattuthavani, Madurai, Tamil Nadu 625107, India',
      phone: '+91 89389 33893',
      website: 'http://www.guruhospitals.com/'
    },
    {
      id: 8,
      name: 'NTC Gastro and Multispeciality Hospitals',
      coordinates: [ 9.94118, 78.101961 ],
      rating: 4.7,
      address: 'No: 187, Thathaneri Main Rd, near ESI Hospital, Vaithiyanathapuram, Madurai, Tamil Nadu 625018, India',
      phone: '+91 63856 02664',
      website: 'http://ntchospitals.com/'
    },
    {
      id: 9,
      name: 'Alpha Hospital & Research Centre',
      coordinates: [ 9.9102967, 78.1384336 ],
      rating: 4.5,
      address: '2B/2C, Gate Lock Rd, Madurai, Meenakshi Nagar, Tamil Nadu 625009, India',
      phone: '+91 96000 09449',
      website: 'http://www.alphahrc.com/'
    },
    {
      id: 10,
      name: 'Pandian Multi Speciality Hospital',
      coordinates: [ 9.920715099999999, 78.1253273 ],
      rating: undefined,
      address: 'New Rajmahal, 45, E Veli St, near Madurai, Madurai Main, Madurai, Tamil Nadu 625001, India',
      phone: null,
      website: null
    },
    {
      id: 11,
      name: "Padma Speciality Care Hospital - Paediatrician | General Surgeon | Children's hospital",
      coordinates: [ 9.9326784, 78.1301776 ],
      rating: 4.9,
      address: '28, Velayudham Pillai St, Goripalayam, Madurai, Tamil Nadu 625002, India',
      phone: '+91 96296 99994',
      website: null
    },
    {
      id: 12,
      name: "St. Antony's Multispeciality Hospital",
      coordinates: [ 9.9187739, 78.103894 ],
      rating: 4.5,
      address: '2/50, Sarvodaya Main Rd, New Ellis Nagar, Madurai, Tamil Nadu 625010, India',
      phone: '+91 452 436 0369',
      website: null
    },
    {
      id: 13,
      name: 'Daisy Hospital (Ayush Integrated)',
      coordinates: [ 9.926988699999999, 78.1328703 ],
      rating: 4.8,
      address: '29,2nd floor, Panagal Rd, near Hotel vilvaas, Shenoy Nagar, Madurai, Tamil Nadu 625020, India',
      phone: '+91 99629 00020',
      website: null
    },
    {
      id: 14,
      name: 'Arun Hospital Pvt Ltd, Madurai',
      coordinates: [ 9.9211438, 78.1257844 ],
      rating: 4.8,
      address: '185-186, Munichalai Rd, Madurai, Tamil Nadu 625009, India',
      phone: '+91 98421 07136',
      website: 'https://arunhospitals.com/'
    },
    {
      id: 15,
      name: 'Malar hospital',
      coordinates: [ 9.9552751, 78.0981726 ],
      rating: 4.9,
      address: 'Anjal Nagar 3rd Main St, Anjal Nagar, Koodal Nagar, Madurai, Tamil Nadu 625018, India',
      phone: '+91 452 452 2012',
      website: null
    },
    {
      id: 16,
      name: 'Apollo Speciality Hospitals Madurai',
      coordinates: [ 9.9283264, 78.1490759 ],
      rating: 4.7,
      address: '80 Feet Rd, Deputy Collector Colony, KK Nagar, Madurai, Tamil Nadu 625020, India',
      phone: '+91 1860 500 1066',
      website: 'https://www.apollohospitals.com/madurai/'
    },
    {
      id: 17,
      name: 'MERCY HOSPITAL MADURAI',
      coordinates: [ 9.924116699999999, 78.0946515 ],
      rating: 4.3,
      address: '4/A, Bypass Rd, near HDFC BANK, Ponmeni, Madurai, Tamil Nadu 625010, India',
      phone: '+91 73391 23944',
      website: null
    },
    {
      id: 18,
      name: 'Preethi Multispeciality & Orthopedics Hospital, Madurai',
      coordinates: [ 9.951776299999999, 78.16715219999999 ],
      rating: 4.6,
      address: '50, Melur Main Rd, Uthangudi, Tamil Nadu 625107, India',
      phone: '+91 78100 44444',
      website: 'https://www.preethihospitals.com/'
    },
    {
      id: 19,
      name: 'Bharathi neuro hospital - Best neuro surgery hospital in madurai',
      coordinates: [ 9.9463543, 78.1441206 ],
      rating: 5,
      address: '115, Alagar Kovil Main Rd, K.Pudur, Madurai, Tamil Nadu 625007, India',
      phone: '+91 84899 77765',
      website: 'https://www.bharathihospital.com/'
    },
    {
      id: 20,
      name: 'A R Hospital Pvt Ltd',
      coordinates: [ 9.9363279, 78.1454029 ],
      rating: 4,
      address: '609, KK Nagar Main Rd, Near District Court, Madurai, Tamil Nadu 625020, India',
      phone: '+91 99525 40727',
      website: null
    }
  ],
    adventure : [
    {
      id: 1,
      name: 'Sky shuttle cour',
      coordinates: [ 9.8968052, 78.107192 ],
      rating: 5,
      address: 'V4W4+PVG, Thendral Nagar, Jeeva Nagar, Madurai, Tamil Nadu 625011, India',
      phone: null,
      website: null
    },
    {
      id: 2,
      name: 'Twisted Trails Adventures',
      coordinates: [ 9.964296299999999, 78.127177 ],
      rating: 4.9,
      address: '1st St, Thabaal Thanthi Nagar, P and T Nagar, Madurai, Tamil Nadu 625017, India',
      phone: '+91 96007 30207',
      website: 'https://www.twistedtrailsadv.com/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=8032129664602642338'
    },
    {
      id: 3,
      name: 'Madurai Eco Tourism',
      coordinates: [ 9.9223001, 78.09550759999999 ],
      rating: 1,
      address: '10B, Jawahar Nagar 2nd St, near MRP Mahal, Somasundaram colony, S S Colony, Madurai, Tamil Nadu 625016, India',
      phone: '+91 95001 37477',
      website: 'http://www.arola.in/'
    },
    {
      id: 4,
      name: 'My Holiday Happiness - Madurai',
      coordinates: [ 9.894336299999999, 78.0814661 ],
      rating: 5,
      address: '221, 2nd Floor, GST Road, Pasumalai, Madurai, Tamil Nadu 625004, India',
      phone: '+91 98865 25253',
      website: 'https://www.myholidayhappiness.com/'
    },
    {
      id: 5,
      name: 'dream travels madurai',
      coordinates: [ 9.948277, 78.0831833 ],
      rating: 4.5,
      address: 'Daisy street, 12 B, Chemparuthi nagar 4th main Rd, Vilangudi, Madurai, Tamil Nadu 625018, India',
      phone: '+91 94874 39919',
      website: 'http://dreamtravelsmadurai.com/'
    },
    {
      id: 6,
      name: 'south indian package tourism & Madurai Eco Tourism',
      coordinates: [ 9.9222983, 78.0955457 ],
      rating: 4.6,
      address: '10b, 1, Jawahar Nagar 2nd St, Somasundaram colony, S S Colony, Madurai, Tamil Nadu 625016, India',
      phone: '+91 95001 37477',
      website: 'http://www.maduraiecotourism.com/'
    },
    {
      id: 7,
      name: 'ssktravels',
      coordinates: [ 9.9189128, 78.1120375 ],
      rating: 4.7,
      address: '2, W Marret St, opposite Karnataka bank, PKS Colony, Madurai Main, Madurai, Tamil Nadu 625001, India',
      phone: '+91 99523 45247',
      website: 'https://www.ssktravels.org/'
    },
    {
      id: 8,
      name: 'RJ Tourism Madurai',
      coordinates: [ 10.0120471, 78.19878709999999 ],
      rating: undefined,
      address: 'Alagar Kovil Main Rd, Madurai, Mathur, Tamil Nadu 625301, India',
      phone: null,
      website: null
    },
    {
      id: 9,
      name: 'Sky Tourism',
      coordinates: [ 9.906889999999999, 78.094655 ],
      rating: 5,
      address: '2/748, Pasumpon Nagar, Perungudi, Madurai, Tamil Nadu 625022, India',
      phone: '+91 94443 77980',
      website: 'http://www.skytourism.in/'
    },
    {
      id: 10,
      name: 'Rayyan Tours & Travels Madurai',
      coordinates: [ 9.918542, 78.11389129999999 ],
      rating: 4.7,
      address: '13A, North Perumal Theppam, Town Hall Rd, opposite to kadhi craft, Madurai, Tamil Nadu 625001, India',
      phone: '+91 70108 08354',
      website: 'http://rayyantoursandtravels.com/'
    },
    {
      id: 11,
      name: 'Genuine Travels | Tours & travels in madurai | Cab Bookings',
      coordinates: [ 9.9333488, 78.13471059999999 ],
      rating: 4.7,
      address: 'No.7, Kallazhagar Shopping Complex, Tallakulam, Madurai, Tamil Nadu 625002, India',
      phone: '+91 95002 73692',
      website: 'https://thegenuinetravels.com/'
    },
    {
      id: 12,
      name: 'MADURAI RD TOURISM',
      coordinates: [ 9.9108355, 78.13824869999999 ],
      rating: 5,
      address: 'Gatelock road new meenakshi nagar near, Teppakulam, Madurai, Tamil Nadu 625009, India',
      phone: '+91 80725 38195',
      website: null
    },
    {
      id: 13,
      name: 'Tento',
      coordinates: [ 9.9296466, 78.1435956 ],
      rating: 3.4,
      address: '118, KK Nagar Main Rd, Managiri, KK Nagar, Madurai, Tamil Nadu 625020, India',
      phone: null,
      website: null
    },
    {
      id: 14,
      name: 'Pickyourtrail Madurai',
      coordinates: [ 9.948966, 78.1641246 ],
      rating: 4.4,
      address: 'No 5/116, 2nd floor, Kalyani Tower, near Meenakshi Mission Hospital, Uthangudi, Tamil Nadu 625107, India',
      phone: '+91 93609 91166',
      website: 'https://pickyourtrail.com/?utm_medium=organic&utm_source=googlebusiness'
    },
    {
      id: 15,
      name: 'UNNIVERSAL HOLIDAYZ',
      coordinates: [ 9.9283504, 78.09805879999999 ],
      rating: 4.7,
      address: 'No 20, Swami Complex, Arasaradi, Arappalayam, Madurai, Tamil Nadu 625010, India',
      phone: '+91 99405 66405',
      website: 'http://www.unniversalholidayz.com/'
    },
    {
      id: 16,
      name: 'Eagle park',
      coordinates: [ 9.919138199999999, 78.09359719999999 ],
      rating: 3.5,
      address: 'W39V+MC5, Bypass Rd, Ponmeni, Madurai, Tamil Nadu 625018, India',
      phone: null,
      website: null
    },
    {
      id: 17,
      name: 'Madurai Voyages',
      coordinates: [ 9.904082299999999, 78.13338 ],
      rating: undefined,
      address: 'Door No 45, Bhai Building, Periya, Pallivasal Rd, Tamil Nadu Housing Board Colony, Madurai, Tamil Nadu 625011, India',
      phone: '+91 96262 83664',
      website: 'http://maduraivoyages.com/'
    }
  ],
  food : [
      {
          id: 1,
      name: 'Biryani to Heaven in Madurai | Best nonveg family chettinad restaurant in Madurai | chettinadu special restaurant',
      coordinates: [ 9.9385716, 78.1286241 ],
      rating: 4.8,
      address: '62, PT Rajan Rd, Narimedu, Madurai, Tamil Nadu 625002, India',
      phone: '+91 80565 63337',
      website: 'https://www.biryanitoheaven.in/'
    },
    {
      id: 2,
      name: 'Awestrucks- Family Restaurant',
      coordinates: [ 9.9620491, 78.1345439 ],
      rating: 4.4,
      address: 'Sri Muthu Ayyanar Tower, Narayanapuram, Nagankulam, Mahalakshmi Nagar, Madurai, Tamil Nadu 625014, India',
      phone: '+91 86003 70042',
      website: 'http://www.awestrucks.in/'
    },
    {
      id: 3,
      name: 'Sangam Veg Restaurant',
      coordinates: [ 9.9121992, 78.14616339999999 ],
      rating: 4.5,
      address: '159, A/2, Kamarajar Salai, Teppakulam, Corner, Madurai, Meenakshi Nagar, Tamil Nadu 625009, India',
      phone: '+91 90922 09991',
      website: null
    },
    {
      id: 4,
      name: 'Dine Elaichi Restaurant',
      coordinates: [ 9.9379625, 78.1355597 ],
      rating: 4.5,
      address: '1, Gokhale Rd, 1st Lane, Chinna Chokikulam, Madurai, Tamil Nadu 625002, India',
      phone: '+91 99203 34567',
      website: 'http://www.dineelaichi.com/'
    },
    {
      id: 5,
      name: 'Amma Mess',
      coordinates: [ 9.9325739, 78.1340585 ],
      rating: 3.9,
      address: '136, Alagar Kovil Main Rd, Tallakulam, Madurai, Tamil Nadu 625002, India',
      phone: '+91 98421 45900',
      website: null
    },
    {
      id: 6,
      name: 'Hotel New Sri Sabareesh',
      coordinates: [ 9.9189063, 78.1127509 ],
      rating: 4.2,
      address: '49A, W Perumal Maistry St, Madurai Main, Madurai, Tamil Nadu 625001, India',
      phone: '+91 90039 31116',
      website: null
    },
    {
      id: 7,
      name: 'Kumar Mess- Non-veg Restaurant',
      coordinates: [ 9.931972199999999, 78.13388379999999 ],
      rating: 4.1,
      address: '57, Alagar Kovil Main Rd, Mellur, Tallakulam, Madurai, Tamil Nadu 625002, India',
      phone: '+91 99659 44576',
      website: 'http://www.maduraikumarmess.com/'
    },
    {
      id: 8,
      name: 'Duke A.C.Restuarant - Madurai',
      coordinates: [ 9.9243895, 78.11463739999999 ],
      rating: 5,
      address: '6, N Veli St, Madurai Main, Madurai, Poondhotam, Tamil Nadu 625001, India',
      phone: null,
      website: null
    },
    {
      id: 9,
      name: 'Annapoorna Mithai',
      coordinates: [ 9.9189597, 78.09429109999999 ],
      rating: 4.6,
      address: '12/2, Ram Nagar, Bypass Road, Near Aparna Tower, Madurai, Tamil Nadu 625010, India',
      phone: '+91 96002 00484',
      website: 'http://annapoornamithai.com/'
    },
    {
      id: 10,
      name: 'Murugan Idli Shop',
      coordinates: [ 9.915890599999999, 78.11561449999999 ],
      rating: 4,
      address: '196, W Masi St, Periyar, Madurai Main, Madurai, Tamil Nadu 625001, India',
      phone: '+91 44 4208 4842',
      website: 'http://www.muruganidlishop.com/'
    },
    {
      id: 11,
      name: 'Hotel Sree Sabarees- Veg Restaurant',
      coordinates: [ 9.918128699999999, 78.1127181 ],
      rating: 4.2,
      address: 'West, Town Hall Rd, Madurai Main, Madurai, Tamil Nadu 625001, India',
      phone: '+91 452 437 9037',
      website: null
    },
    {
      id: 12,
      name: 'SPS Tiffins & Fruit Shop at Meenakshi Amman Temple, Madurai Famous Jigarthanda',
      coordinates: [ 9.9182125, 78.1191296 ],
      rating: 4.4,
      address: 'S Chitrai St, Valaiyal Kadai, Madurai Main, Madurai, Tamil Nadu 625001, India',
      phone: '+91 99448 32383',
      website: null
    },
    {
      id: 13,
      name: 'Madurai Kitchen',
      coordinates: [ 9.9409747, 78.1395299 ],
      rating: 4.1,
      address: 'Courtyard, 168, Alagar Kovil Main Rd, next to Circuit House, KK Nagar, Ramaond Reserve Line, Madurai, Tamil Nadu 625002, India',
      phone: '+91 452 424 4555',
      website: 'https://www.marriott.com/hotels/hotel-information/restaurant/ixmcy-courtyard-madurai/'
    },
    {
      id: 14,
      name: 'New Shri Ram Mess A/C Pure Veg',
      coordinates: [ 9.919524, 78.112759 ],
      rating: 4.3,
      address: '2, Kaka Thoppu St, Madurai Main, Madurai, Tamil Nadu 625001, India',
      phone: '+91 98431 94971',
      website: 'https://newshrirammess.github.io/NewShriRamMess/'
    },
    {
      id: 15,
      name: 'Hotel Sree Sabarees',
      coordinates: [ 9.9137405, 78.1444051 ],
      rating: 4.3,
      address: '1, Kamarajar Salai, Pankajam Colony, Madurai, Tamil Nadu 625009, India',
      phone: '+91 63690 41492',
      website: null
    },
    {
      id: 16,
      name: 'KONAR KADAI',
      coordinates: [ 9.925208699999999, 78.1204644 ],
      rating: 3.4,
      address: 'N Veli St, Arajar Salai, Simmakkal, Madurai Main, Madurai, Tamil Nadu 625001, India',
      phone: '+91 99440 80011',
      website: null
    },
    {
      id: 17,
      name: 'restaurant madurai',
      coordinates: [ 9.9212471, 78.1474294 ],
      rating: 5,
      address: '2nd East Main Rd, Anna Nagar, Madurai, Tamil Nadu 625020, India',
      phone: null,
      website: null
    },
    {
      id: 18,
      name: "Phil's Bistro",
      coordinates: [ 9.932556199999999, 78.14796009999999 ],
      rating: 4.2,
      address: '444, 9th Main Rd, Managiri, Madurai, Tamil Nadu 625020, India',
      phone: '+91 94865 83444',
      website: 'https://www.philsbistro.in/'
    },
    {
      id: 19,
      name: 'Melting Pot Restaurant Madurai',
      coordinates: [ 9.9460307, 78.1651428 ],
      rating: 4.9,
      address: '122, Airport-Mattuthavani Ring Rd, Madurai, Tamil Nadu 625107, India',
      phone: '+91 452 455 1555',
      website: 'https://poppyshotels.com/poppys-hotel-madurai/dining'
    },
    {
      id: 20,
      name: 'maduravaasi traditional biriyani',
      coordinates: [ 9.9190024, 78.1488483 ],
      rating: 4.8,
      address: 'Mig, 80 Feet Rd, Anna Nagar, Madurai, Tamil Nadu 625020, India',
      phone: '+91 97868 36105',
      website: null
    }
  ]
}