const cars = [
    {
        name:'Rolls-Royce Ghost',
        price:'$ 12000',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-ghost-white-fr-3-4-1-1598911711.jpg',
        describe:' Making its debut in 2020, the new Ghost Extended is a motor car for those seeking clarity. Within the serene realm of its cabin, time and space are yours alone.'
    },
    {
        name:'Lamborghini Aventador',
        price:'$ 9000',
        image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_01.jpg',
        describe:' Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy. The Aventador advances every concept of performance, immediately establishing itself as the benchmark for the super sports car sector. Giving a glimpse of the future today, it comes from a family of supercars already considered legendary.'
    },
    {
        name:'Ferrari 812',
        price:'$ 15000',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/60901a6cddbfb11217ead568-ferrari-812-competizione-a-dynamics-focus-new-1620220801.jpeg?crop=0.985xw:0.786xh;0,0.160xh&resize=640:*',
        describe:' Ferrari claims that the 812 Superfast has a top speed of 340 km/h (211 mph) with a 0–100 km/h (0–62 mph) acceleration time of 2.9 seconds. The car has a power to weight ratio of 2.18 kg (4.81 lb) per horsepower (PS). The 812 Superfast is the first Ferrari equipped with EPS (Electronic Power Steering).'
    },
    {
        name:'Maruti Baleno',
        price:'$ 40000',
        image: 'https://imgd.aeplcdn.com/0x0/cw/ec/37710/Maruti-Suzuki-Baleno-Right-Front-Three-Quarter-147420.jpg?wm=0',
        describe:' Maruti Baleno is a 5 seater Hatchback available in a price range of Rs. 6.14 - 9.66 Lakh*. It is available in 9 variants, a 1197 cc, BS6 and 2 transmission options: Manual & Automatic. Other key specifications of the Baleno include a kerb weight of 910-935, ground clearance of 170mm and boot space of 339 Liters.'
    },
    {
        name:'Rolls Royce Wraith',
        price:'$ 30000',
        image: 'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-5-2-commission/page-properties/rolls-royce-wraith-commission-hero-d.jpg',
        describe:" Power is unleashed with Black Badge Wraith. The boldest edition of the world's most powerful Rolls-Royce is sculpted for those who dare to defy convention. A motor car for the restless seekers, Wraith is quite simply the most powerful Rolls-Royce ever created, redefining the grenre of Grand Tourer."
    },
    {
        name:'Tata Tiago',
        price:'$ 20000',
        image: 'https://images.hindustantimes.com/auto/auto-images/Tata/Tiago/1589876821523_Tiago1',
        describe:' Tata Tiago is a 5 seater Hatchback available in a price range of Rs. 5.19 - 7.64 Lakh*. It is available in 16 variants, a 1199 cc, BS6 and 2 transmission options: Manual & Automatic. ... Over 605 User reviews basis Mileage, Performance, Price and overall experience of users for Tata Tiago.'
    },
    {
        name:'Renault KWID',
        price:'$ 10000',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/8593/Renault-KWID-Climber-1.0-AMT-Opt-DT/1630912585387/front-left-side-47.jpg',
        describe:' The facelifted Renault Kwid receives safety features in the form dual airbags, ABS with EBD, speed alert system, reverse parking sensors and seatbelt reminder. Renault KWID is a 5 seater Hatchback available in a price range of Rs. 4.24 - 5.80 Lakh*. It is available in 11 variants, 2 engine options that are BS6 '
    },
    {
        name:'BMW M4 Competition',
        price:'$ 10000',
        image: 'https://www.ccarprice.com/products/BMW_M4_Competition_2021.jpg',
        describe:' The M4 matches the performance of supercars from not long ago, hitting 62mph in 4.1sec and reaching 155mph. The most impressive figure, however, is a 0-100mph time of 8.6sec. The latest generation M3 and M4 are very quick cars indeed.'
    },
    {
        name:'Audi Q7',
        price:'$ 90000',
        image: 'https://autonxt.net/wp-content/uploads/2020/03/2020_Audi_Q7_Black_Optic_4.jpg',
        describe:' The Audi Q7 is a good luxury midsize SUV. On the performance front, the Q7 impresses with its array of turbocharged engines and its fusion of a pillow-soft ride with engaging handling and nimble steering. It also has standard all-wheel drive, called Quattro by Audi.'
    },
    {
        name:'Toyota Land Cruiser',
        price:'$ 70000',
        image: 'https://cdn-japantimes.com/wp-content/uploads/2022/01/np_file_136468.jpeg',
        describe:' Toyota Land Cruiser is a 7 seater suv. The Toyota Land Cruiser is expected to launch in India in March 2022. The Toyota Land Cruiser will rival Phantom. Toyota Land Cruiser price starts at ₹ 1.47 Crore ex-showroom and it comes with 4461cc engine.'
    },
    
]