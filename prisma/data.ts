const cookingOilProducts = [
  // Sunflower Oil
  {
    brandName: "Fortune",
    productName: "Fortune Sunlite Refined Sunflower Oil",
    description: "Light and healthy sunflower oil for everyday use.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sunflower Oil",
    description: "Refined sunflower oil rich in Vitamin E.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Sunflower Oil",
    description: "Pure sunflower oil for deep and shallow frying.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Sunflower Oil",
    description: "Organic cold-pressed sunflower oil.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Sunflower Oil",
    description: "Healthy and natural sunflower oil.",
  },

  // Mustard Oil
  {
    brandName: "Fortune",
    productName: "Fortune Kachi Ghani Mustard Oil",
    description: "Traditional mustard oil with strong flavor.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Cold Pressed Mustard Oil",
    description: "Cold-pressed mustard oil rich in natural nutrients.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Kachi Ghani Mustard Oil",
    description: "Traditional Kachi Ghani process for strong flavor.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Mustard Oil",
    description: "Organic mustard oil for authentic Indian cooking.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Mustard Oil",
    description: "Natural mustard oil with antibacterial properties.",
  },

  // Groundnut Oil
  {
    brandName: "Fortune",
    productName: "Fortune Groundnut Oil",
    description: "Rich and aromatic oil ideal for Indian cooking.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Groundnut Oil",
    description: "Naturally extracted oil with high smoking point.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Groundnut Oil",
    description: "Nutty and nutritious cooking oil.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Groundnut Oil",
    description: "Organic groundnut oil ideal for deep frying.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Groundnut Oil",
    description: "Cold-pressed and natural oil from groundnuts.",
  },

  // Coconut Oil
  {
    brandName: "Fortune",
    productName: "Fortune Virgin Coconut Oil",
    description: "Cold-pressed coconut oil for cooking and skincare.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Coconut Oil",
    description: "Pure coconut oil for multiple uses.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Coconut Oil",
    description: "Naturally extracted coconut oil.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Coconut Oil",
    description: "Organic coconut oil for healthy living.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Virgin Coconut Oil",
    description: "Pure virgin coconut oil for cooking and skin care.",
  },

  // Soybean Oil
  {
    brandName: "Fortune",
    productName: "Fortune Soyabean Oil",
    description: "Refined soybean oil for daily Indian cooking.",
  },
  {
    brandName: "Tata",
    productName: "Tata Soyabean Oil",
    description: "Healthy soybean oil rich in Omega-3.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Soyabean Oil",
    description: "Nutritious and affordable cooking oil.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Soyabean Oil",
    description: "Organically produced soybean oil.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Soyabean Oil",
    description: "Natural oil for heart-healthy meals.",
  },

  // Additional Oils
  {
    brandName: "Fortune",
    productName: "Fortune Rice Bran Health Oil",
    description: "Light oil made from rice bran, rich in oryzanol.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Rice Bran Oil",
    description: "Heart-healthy rice bran oil with natural antioxidants.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Sesame Oil",
    description: "Cold-pressed sesame oil with rich aroma.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Sesame Oil",
    description: "Ayurvedic sesame oil for cooking and wellness.",
  },
  {
    brandName: "Fortune",
    productName: "Fortune Filtered Groundnut Oil",
    description: "Filtered version with nutty aroma and taste.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Blended Oil",
    description: "A mix of soybean and rice bran oil for balanced nutrition.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Blended Edible Oil",
    description: "Blend of sunflower and mustard oil for daily use.",
  },
  {
    brandName: "Nature Fresh",
    productName: "Nature Fresh Acti-Lite Soyabean Oil",
    description: "Light and healthy refined soyabean oil.",
  },
  {
    brandName: "Saffola",
    productName: "Saffola Gold Blended Oil",
    description: "Healthy blend of rice bran and sunflower oil.",
  },
  {
    brandName: "Saffola",
    productName: "Saffola Active Blended Oil",
    description:
      "Healthy blend of rice bran and soybean oil for fitness lovers.",
  },
  {
    brandName: "Saffola",
    productName: "Saffola Total Heart Conscious Oil",
    description: "Blended oil with dual seed technology for heart health.",
  },
  {
    brandName: "Saffola",
    productName: "Saffola Aura Extra Virgin Olive Oil",
    description:
      "Cold-pressed extra virgin olive oil for salads and dressings.",
  },
  {
    brandName: "Figaro",
    productName: "Figaro Olive Oil",
    description: "Pure and mild olive oil suitable for light cooking.",
  },
  {
    brandName: "Del Monte",
    productName: "Del Monte Extra Virgin Olive Oil",
    description:
      "Imported extra virgin olive oil ideal for Mediterranean dishes.",
  },
  {
    brandName: "Oleev",
    productName: "Oleev Active Cooking Oil",
    description: "Perfect blend of rice bran and canola oil.",
  },
  {
    brandName: "Oleev",
    productName: "Oleev Health Canola Oil",
    description: "Light canola oil with a high smoking point.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Vanaspati Ghee",
    description: "Vegetable ghee for deep frying and traditional recipes.",
  },
  {
    brandName: "Fortune",
    productName: "Fortune Vanaspati",
    description: "Trusted vanaspati ghee with rich aroma.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Olive Pomace Oil",
    description: "Ideal for Indian-style cooking with olive benefits.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Flaxseed Oil",
    description: "Cold-pressed flaxseed oil, rich in Omega-3.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Flaxseed Oil",
    description: "Organic flaxseed oil for heart health.",
  },
  {
    brandName: "Nature Fresh",
    productName: "Nature Fresh Purita Sunflower Oil",
    description: "Refined sunflower oil for everyday cooking.",
  },
  {
    brandName: "Engine",
    productName: "Engine Mustard Oil",
    description: "Strong mustard oil for authentic Indian dishes.",
  },
];

const sugarSaltProducts = [
  // Sugar
  {
    brandName: "Tata",
    productName: "Tata Sugar",
    description: "Pure refined sugar for daily use",
  },
  {
    brandName: "Catch",
    productName: "Catch Sugar",
    description: "Quality sugar for household needs",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Sugar",
    description: "Crystal white sugar for kitchen use",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Sugar",
    description: "Organically sourced sugar",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Sugar",
    description: "Organic and unrefined sugar",
  },

  // Black Salt
  {
    brandName: "Tata",
    productName: "Tata Black Salt",
    description: "Kala namak rich in minerals",
  },
  {
    brandName: "Catch",
    productName: "Catch Black Salt",
    description: "Flavorful black salt for digestive comfort",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Black Salt",
    description: "Ayurvedic grade black salt",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Black Salt",
    description: "Organic black salt for seasoning",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Black Salt",
    description: "Natural black salt, rich in iron",
  },

  // Rock Salt
  {
    brandName: "Tata",
    productName: "Tata Rock Salt",
    description: "Edible rock salt for healthy cooking",
  },
  {
    brandName: "Catch",
    productName: "Catch Rock Salt",
    description: "Premium pink rock salt crystals",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Rock Salt",
    description: "Natural sendha namak",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Rock Salt",
    description: "Natural mineral-rich salt",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Rock Salt",
    description: "Pure Himalayan rock salt",
  },

  // Desi Sugar
  {
    brandName: "Tata",
    productName: "Tata Desi Sugar",
    description: "Traditional Indian sugar alternative",
  },
  {
    brandName: "Catch",
    productName: "Catch Desi Sugar",
    description: "Desi khand with natural sweetness",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Desi Sugar",
    description: "Ayurvedic desi khand sweetener",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Desi Sugar",
    description: "Naturally processed desi sugar",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Desi Sugar",
    description: "Organic and unprocessed khand",
  },

  // Granulated Sugar
  {
    brandName: "Tata",
    productName: "Tata Granulated Sugar",
    description: "Fine sugar crystals for all uses",
  },
  {
    brandName: "Catch",
    productName: "Catch Granulated Sugar",
    description: "Perfect for baking and desserts",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Granulated Sugar",
    description: "Everyday kitchen granules",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Granulated Sugar",
    description: "Organic fine sugar",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Granulated Sugar",
    description: "Unrefined granulated sweetness",
  },
];

const spicesCondimentsProducts = [
  // Turmeric
  {
    brandName: "Tata",
    productName: "Tata Sampann Turmeric Powder",
    description: "High curcumin content turmeric powder.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Haldi Powder",
    description: "Pure turmeric powder for everyday cooking.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Turmeric Powder",
    description: "Organic haldi with natural aroma and color.",
  },

  // Coriander
  {
    brandName: "Catch",
    productName: "Catch Coriander Powder",
    description: "Fresh and aromatic ground dhania.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Coriander Powder",
    description: "Flavorful and pure coriander powder.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Coriander Powder",
    description: "Organically grown and processed coriander.",
  },

  // Cumin
  {
    brandName: "Catch",
    productName: "Catch Jeera Whole",
    description: "Premium quality whole cumin seeds.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Jeera Powder",
    description: "Aromatic cumin powder for rich taste.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Cumin Seeds",
    description: "Naturally grown whole cumin seeds.",
  },

  // Mustard Seeds
  {
    brandName: "Tata",
    productName: "Tata Black Mustard Seeds",
    description: "Bold mustard seeds for tadka.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Rai",
    description: "Strong flavored black mustard seeds.",
  },

  // Fenugreek
  {
    brandName: "Catch",
    productName: "Catch Methi Dana",
    description: "Whole fenugreek seeds for Indian recipes.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Fenugreek Seeds",
    description: "Naturally sourced methi for cooking and health.",
  },

  // Carom Seeds
  {
    brandName: "Patanjali",
    productName: "Patanjali Ajwain",
    description: "Strong ajwain for digestive aid and cooking.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Carom Seeds",
    description: "Organic ajwain rich in essential oils.",
  },

  // Nigella Seeds
  {
    brandName: "Tata",
    productName: "Tata Nigella Seeds",
    description: "Kalonji seeds with distinctive flavor.",
  },

  // Sesame Seeds
  {
    brandName: "Catch",
    productName: "Catch White Sesame Seeds",
    description: "High quality til for cooking and garnishing.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Sesame Seeds",
    description: "Whole sesame seeds grown organically.",
  },

  // Red Chili
  {
    brandName: "Patanjali",
    productName: "Patanjali Red Chili Powder",
    description: "Spicy lal mirch powder for Indian cuisine.",
  },
  {
    brandName: "Catch",
    productName: "Catch Dry Red Chillies",
    description: "Whole red chilies with pungent heat.",
  },

  // Garlic
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Garlic Powder",
    description: "Dehydrated garlic powder for convenience.",
  },
  {
    brandName: "Tata",
    productName: "Tata Garlic Paste",
    description: "Ready-to-use garlic paste in hygienic pack.",
  },
];

const grainsPulsesProducts = [
  // 🍚 Rice
  {
    brandName: "India Gate",
    productName: "India Gate Basmati Rice Classic",
    description: "Premium aged basmati rice for everyday cooking.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Basmati Rice",
    description: "Long grain basmati rice with rich aroma.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Basmati Rice Silver",
    description: "Economical basmati rice for regular meals.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Basmati Rice",
    description: "Organic long grain basmati rice.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Brown Rice",
    description: "Healthy brown rice with low GI.",
  },

  // 🍲 Pulses/Lentils
  {
    brandName: "Tata",
    productName: "Tata Sampann Toor Dal",
    description: "Unpolished toor dal rich in protein and fiber.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Moong Dal Split",
    description: "Split green gram packed with nutrition.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Chana Dal",
    description: "Organic split chickpeas, protein rich.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Masoor Dal",
    description: "Whole red lentils, grown organically.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Urad Dal",
    description: "Unpolished urad dal for traditional recipes.",
  },
  {
    brandName: "Fortune",
    productName: "Fortune Toor Dal",
    description: "Premium toor dal for daily cooking.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Chana Dal",
    description: "Nutritious Bengal gram lentils.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Moong Dal",
    description: "Organic moong dal for light meals.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Masoor Dal",
    description: "Protein-packed organic red lentils.",
  },
  {
    brandName: "Fortune",
    productName: "Fortune Urad Dal",
    description: "Wholesome urad dal with high quality.",
  },

  // 🌱 Soybean
  {
    brandName: "Fortune",
    productName: "Fortune Soyabean Whole",
    description: "High protein whole soybean for daily meals.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Soyabean",
    description: "Nutritious and natural soybeans.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Soyabean",
    description: "Soybeans for protein-rich dishes.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Soybean",
    description: "Organic soybean for healthy lifestyle.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Soybean",
    description: "Rich in fiber and plant protein.",
  },

  // 🫘 Kidney Beans
  {
    brandName: "Tata",
    productName: "Tata Sampann Rajma Red",
    description: "Premium quality red kidney beans.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Rajma",
    description: "Delicious rajma for Punjabi curry.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Rajma Chitra",
    description: "Organic speckled kidney beans.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Rajma",
    description: "High-fiber, organic kidney beans.",
  },
  {
    brandName: "Fortune",
    productName: "Fortune Red Rajma",
    description: "Wholesome rajma rich in protein and iron.",
  },
];

const naturalSweetenersProducts = [
  {
    brandName: "Pure & Sure",
    productName: "Pure & Sure Liquid Jaggery",
    description: "Organic liquid jaggery made using traditional methods.",
  },
  {
    brandName: "Two Brothers Organic Farms",
    productName: "TBOF Jaggery Powder",
    description: "Stone-ground organic jaggery powder from natural farms.",
  },
  {
    brandName: "Anveshan",
    productName: "Anveshan Organic Jaggery Powder",
    description: "Made from naturally grown sugarcane, no chemicals used.",
  },
  {
    brandName: "Kapiva",
    productName: "Kapiva Organic Liquid Jaggery",
    description: "Unrefined kakvi packed with iron and energy.",
  },
  {
    brandName: "Nutriorg",
    productName: "Nutriorg Organic Jaggery Cubes",
    description: "Convenient jaggery cubes made from organic cane.",
  },
  {
    brandName: "Gulab",
    productName: "Gulab Traditional Gud",
    description: "Sun-dried jaggery blocks rich in natural molasses.",
  },
  {
    brandName: "Vedaka",
    productName: "Vedaka Jaggery Powder",
    description: "Refined jaggery powder ideal for desserts and beverages.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Kakvi Syrup",
    description: "Liquid jaggery syrup ideal for baking and sweets.",
  },
  {
    brandName: "Organic Tattva",
    productName: "Organic Tattva Jaggery Whole",
    description: "Wholesome jaggery with earthy aroma and rich taste.",
  },
  {
    brandName: "Organic Tattva",
    productName: "Organic Tattva Organic Jaggery Powder",
    description: "Healthy alternative to sugar, unprocessed and organic.",
  },
  {
    brandName: "Natureland Organics",
    productName: "Natureland Organic Jaggery Cube",
    description: "Farm-fresh jaggery in cube format, no additives.",
  },
  {
    brandName: "Arya Farm",
    productName: "Arya Farm Organic Jaggery Powder",
    description: "Naturally sweet jaggery powder for guilt-free indulgence.",
  },
  {
    brandName: "B&B Organics",
    productName: "B&B Organics Palm Jaggery",
    description: "Palm-based jaggery with rich mineral content.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Natural Jaggery Cubes",
    description: "Traditional jaggery made from sun-dried sugarcane juice.",
  },
  {
    brandName: "Satvyk",
    productName: "Satvyk Organic Gud Powder",
    description: "Locally sourced organic jaggery for everyday use.",
  },
];

const foxNutsProducts = [
  // Tata
  {
    brandName: "Tata",
    productName: "Tata Makhana Classic Roasted",
    description: "Lightly roasted classic fox nuts, perfect for snacking.",
  },
  {
    brandName: "Tata",
    productName: "Tata Makhana Himalayan Salt",
    description: "Crunchy fox nuts lightly seasoned with Himalayan salt.",
  },
  {
    brandName: "Tata",
    productName: "Tata Makhana Black Pepper",
    description: "Fox nuts with a bold black pepper twist.",
  },

  // Patanjali
  {
    brandName: "Patanjali",
    productName: "Patanjali Makhana",
    description: "Healthy and nutritious fox nuts from trusted Patanjali.",
  },
  {
    brandName: "Patanjali",
    productName: "Patanjali Spiced Makhana",
    description: "Roasted makhana with Ayurvedic spices for digestion.",
  },

  // Organic India
  {
    brandName: "Organic India",
    productName: "Organic India Premium Makhana",
    description: "Organic fox nuts sourced from sustainable farms.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Plain Roasted Makhana",
    description: "Simple, unsalted roasted fox nuts – zero additives.",
  },

  // 24 Mantra
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Roasted Makhana",
    description:
      "Crunchy roasted organic fox nuts, great for guilt-free snacks.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Makhana Peri Peri",
    description: "Fiery peri peri fox nuts for spicy cravings.",
  },

  // Too Yumm!
  {
    brandName: "Too Yumm!",
    productName: "Too Yumm! Cream & Onion Makhana",
    description: "Roasted fox nuts with creamy onion seasoning.",
  },
  {
    brandName: "Too Yumm!",
    productName: "Too Yumm! Tandoori Makhana",
    description: "Delicious tandoori-flavored fox nuts.",
  },

  // Open Secret
  {
    brandName: "Open Secret",
    productName: "Open Secret Peri Peri Makhana",
    description: "Deliciously spicy peri peri flavored roasted makhana.",
  },
  {
    brandName: "Open Secret",
    productName: "Open Secret Pudina Makhana",
    description: "Mint-flavored roasted fox nuts for fresh snacking.",
  },

  // Nutty Yogi
  {
    brandName: "Nutty Yogi",
    productName: "Nutty Yogi Spicy Masala Makhana",
    description:
      "Bold masala flavor for those who love a punch in their snack.",
  },
  {
    brandName: "Nutty Yogi",
    productName: "Nutty Yogi Makhana Garlic Herb",
    description: "Roasted fox nuts infused with garlic and herbs.",
  },

  // The Whole Truth
  {
    brandName: "The Whole Truth",
    productName: "The Whole Truth Makhana - Himalayan Salt",
    description:
      "Simply seasoned with Himalayan salt and roasted to perfection.",
  },
  {
    brandName: "The Whole Truth",
    productName: "The Whole Truth Makhana Cocoa Dust",
    description: "Sweet cocoa-dusted roasted fox nuts – dessert-like crunch.",
  },

  // Bikano
  {
    brandName: "Bikano",
    productName: "Bikano Roasted Makhana Salted",
    description: "Traditional lightly salted roasted makhana.",
  },
  {
    brandName: "Bikano",
    productName: "Bikano Makhana Tangy Tomato",
    description: "Tangy tomato flavored fox nuts – chatpata snack.",
  },

  // Farmley
  {
    brandName: "Farmley",
    productName: "Farmley Peri Peri Makhana",
    description: "Super crunchy makhana roasted with peri peri spice.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Chilli Cheese Makhana",
    description: "Addictive cheese & chilli-flavored roasted fox nuts.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Makhana Trail Mix",
    description: "A healthy blend of makhana, seeds, and dry fruits.",
  },

  // Sattviko
  {
    brandName: "Sattviko",
    productName: "Sattviko Desi Masala Makhana",
    description: "Indian spice mix on roasted fox nuts.",
  },
  {
    brandName: "Sattviko",
    productName: "Sattviko Salt & Pepper Makhana",
    description: "Salt and pepper flavored makhana for classic taste.",
  },

  // Happilo
  {
    brandName: "Happilo",
    productName: "Happilo Premium Roasted Makhana",
    description: "Premium quality roasted fox nuts for healthy snacking.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Himalayan Pink Salt Makhana",
    description: "Low-sodium, lightly salted fox nuts.",
  },

  // Yoga Bar
  {
    brandName: "Yoga Bar",
    productName: "Yoga Bar Roasted Makhana - Chaat Masala",
    description: "Roasted makhana tossed in tangy chaat masala.",
  },
  {
    brandName: "Yoga Bar",
    productName: "Yoga Bar Roasted Makhana - Thai Sweet Chili",
    description: "Asian-style chili flavor in crunchy fox nuts.",
  },
];

const almondsProducts = [
  // Tata
  {
    brandName: "Tata",
    productName: "Tata Sampann California Almonds",
    description: "Premium quality almonds from California.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Whole Almonds",
    description: "Naturally crunchy and nutrient-rich almonds.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Raw Almonds",
    description: "Raw and unsalted almonds for healthy snacking.",
  },

  // Nutraj
  {
    brandName: "Nutraj",
    productName: "Nutraj Californian Almonds",
    description: "Crunchy and fresh almonds for daily snacking.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Raw California Almonds",
    description: "Premium raw almonds rich in healthy fats.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Super Almonds",
    description: "High-protein almonds for active lifestyles.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Daily Needs Almonds",
    description: "Everyday almonds packed for freshness.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Salted Almonds",
    description: "Lightly salted almonds, perfect snack option.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Roasted Almonds",
    description: "Perfectly roasted almonds with rich taste.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Jumbo Almonds",
    description: "Large size almonds for gourmet dishes.",
  },

  // Happilo
  {
    brandName: "Happilo",
    productName: "Happilo Premium Californian Almonds",
    description: "Vacuum packed almonds for freshness.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo 100% Natural Almonds",
    description: "Naturally grown almonds rich in Vitamin E.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Salted Almonds",
    description: "Roasted and lightly salted premium almonds.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Roasted Almonds",
    description: "Crunchy roasted almonds for a tasty bite.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Californian Almonds Value Pack",
    description: "Economical pack for family snacking.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo King Size Almonds",
    description: "Large almonds rich in protein and fiber.",
  },

  // 24 Mantra
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Almonds",
    description: "Organic almonds grown without chemicals.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Premium Almonds",
    description: "Premium grade organic almonds.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Raw Almonds",
    description: "Natural and unprocessed almonds.",
  },

  // Organic India
  {
    brandName: "Organic India",
    productName: "Organic India Almonds",
    description: "Pure organic almonds rich in nutrients.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Raw Almonds",
    description: "Naturally sun-dried and handpicked almonds.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Blanched Almonds",
    description: "Skinless almonds for baking and cooking.",
  },

  // Urban Platter
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Raw Californian Almonds",
    description: "Rich in fiber and heart-healthy nutrients.",
  },
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Sliced Almonds",
    description: "Convenient sliced almonds for topping.",
  },
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Almond Flour",
    description: "Finely ground almond flour for keto baking.",
  },

  // Vedaka
  {
    brandName: "Vedaka",
    productName: "Vedaka Premium Almonds",
    description: "Economical and premium quality almonds.",
  },
  {
    brandName: "Vedaka",
    productName: "Vedaka Raw Almonds",
    description: "Crunchy raw almonds in resealable pack.",
  },
  {
    brandName: "Vedaka",
    productName: "Vedaka Roasted Almonds",
    description: "Perfectly roasted almonds for daily consumption.",
  },

  // More brands
  {
    brandName: "Amazon Brand - Solimo",
    productName: "Solimo Premium Almonds",
    description: "High-quality almonds at great value.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Raw Almonds",
    description: "Wholesome and natural almonds.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Californian Almonds",
    description: "Naturally grown almonds with superior taste.",
  },
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Roasted Almonds",
    description: "Protein-rich snack for any time of the day.",
  },
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Smoked Almonds",
    description: "Smoky flavored almonds for bold taste.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Almonds",
    description: "Budget-friendly and high-quality almonds.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Roasted Almonds",
    description: "Tasty roasted almonds packed with nutrition.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Raw Almonds",
    description: "Clean, unprocessed almonds for multipurpose use.",
  },
  {
    brandName: "Go Organic",
    productName: "Go Organic Raw Almonds",
    description: "Chemical-free, pesticide-free organic almonds.",
  },
  {
    brandName: "True Elements",
    productName: "True Elements California Almonds",
    description: "Premium almonds with clean nutrition.",
  },
  {
    brandName: "True Elements",
    productName: "True Elements Roasted Almonds",
    description: "Dry roasted almonds without added oil.",
  },
  {
    brandName: "The Green Snack Co.",
    productName: "Green Snack Co. Spicy Masala Almonds",
    description: "Almonds with a bold Indian masala twist.",
  },
  {
    brandName: "Open Secret",
    productName: "Open Secret Chocolate Coated Almonds",
    description: "Delicious chocolate-coated crunchy almonds.",
  },
  {
    brandName: "Rostaa",
    productName: "Rostaa Classic Almonds",
    description: "Select Californian almonds for elite snacking.",
  },
];

const cashewNutsProducts = [
  // Tata
  {
    brandName: "Tata",
    productName: "Tata Sampann Whole Cashews",
    description: "Premium whole cashews, rich in taste and texture.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Roasted Cashews",
    description: "Perfectly roasted for a crunchy delight.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Salted Cashews",
    description: "Lightly salted cashews for a tasty snack.",
  },

  // Nutraj
  {
    brandName: "Nutraj",
    productName: "Nutraj Signature Cashew Nuts",
    description: "Rich in protein and essential minerals.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Roasted Cashews",
    description: "Roasted to perfection with a crunchy bite.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Spicy Cashew Nuts",
    description: "Flavored with bold Indian spices.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj W320 Cashew Nuts",
    description: "High-grade W320 quality cashew nuts.",
  },

  // Happilo
  {
    brandName: "Happilo",
    productName: "Happilo Premium Cashew Nuts",
    description: "Vacuum packed for freshness and crunch.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Lightly Salted Cashews",
    description: "Roasted and salted for a delightful snack.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Whole Cashews",
    description: "Naturally tasty and nutrient-rich.",
  },

  // 24 Mantra
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Cashews",
    description: "Certified organic cashews free from chemicals.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra W240 Cashews",
    description: "High-quality W240 grade organic cashews.",
  },

  // Organic India
  {
    brandName: "Organic India",
    productName: "Organic India Whole Cashews",
    description: "Grown organically and full of flavor.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Raw Cashews",
    description: "Unroasted, unsalted for pure nutrition.",
  },

  // Urban Platter
  {
    brandName: "Urban Platter",
    productName: "Urban Platter W320 Cashew Nuts",
    description: "Perfect for snacking or cooking.",
  },
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Salted Roasted Cashews",
    description: "Crunchy, savory, and satisfying.",
  },

  // Vedaka
  {
    brandName: "Vedaka",
    productName: "Vedaka Premium Whole Cashews",
    description: "Crunchy and full of flavor.",
  },
  {
    brandName: "Vedaka",
    productName: "Vedaka Salted Cashews",
    description: "Perfect mid-day snack with light salt.",
  },

  // More Brands
  {
    brandName: "Amazon Brand - Solimo",
    productName: "Solimo W320 Cashew Nuts",
    description: "Budget-friendly and good quality.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Whole Cashews",
    description: "Naturally grown and deliciously creamy.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Classic Roasted Cashews",
    description: "Perfect for snacking and gifting.",
  },
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Peri Peri Cashews",
    description: "Bold and spicy twist to traditional cashews.",
  },
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Classic Cashew Nuts",
    description: "Mildly salted, ideal everyday snack.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Whole Cashews",
    description: "Budget-friendly cashews in resealable pack.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Roasted Cashews",
    description: "Roasted to golden perfection.",
  },
  {
    brandName: "Go Organic",
    productName: "Go Organic Raw Cashew Nuts",
    description: "Chemical-free, sun-dried for purity.",
  },
  {
    brandName: "True Elements",
    productName: "True Elements Roasted Cashews",
    description: "Dry roasted with no added oil.",
  },
  {
    brandName: "The Green Snack Co.",
    productName: "Green Snack Co. Masala Cashews",
    description: "Flavored with Indian spices for a bold punch.",
  },
  {
    brandName: "Open Secret",
    productName: "Open Secret Chocolate Coated Cashews",
    description: "Crunchy cashews with a sweet chocolate coating.",
  },
  {
    brandName: "Rostaa",
    productName: "Rostaa Premium Cashew Nuts",
    description: "Gourmet-grade, handpicked cashews.",
  },
];

const raisinProducts = [
  // Tata
  {
    brandName: "Tata",
    productName: "Tata Sampann Seedless Raisins",
    description: "Naturally sweet and juicy seedless raisins.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Black Raisins",
    description: "Premium black raisins, rich in iron and antioxidants.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Golden Raisins",
    description: "Plump and sweet golden raisins for desserts.",
  },

  // Nutraj
  {
    brandName: "Nutraj",
    productName: "Nutraj Californian Black Raisins",
    description: "High-quality black raisins, ideal for daily snacking.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Afghan Long Raisins",
    description: "Long and chewy raisins imported from Afghanistan.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Premium Green Raisins",
    description: "Tangy-sweet green raisins for cooking and snacking.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Seedless Golden Raisins",
    description: "Naturally sweet, seedless golden raisins.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Jumbo Raisins",
    description: "Extra large raisins packed with natural sweetness.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Seedless Long Raisins",
    description: "Long, chewy and seedless for perfect munching.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Flame Raisins",
    description: "Dark, sweet flame raisins rich in antioxidants.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Fard Raisins",
    description: "Sweet, chewy and slightly sticky raisins from Iran.",
  },

  // Happilo
  {
    brandName: "Happilo",
    productName: "Happilo Premium Seedless Raisins",
    description: "Naturally sun-dried raisins for healthy snacking.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo King Size Black Raisins",
    description: "Large-sized raisins packed with nutrients.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Golden Raisins",
    description: "Golden, soft raisins for baking and snacking.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Seedless Golden Raisins",
    description: "Perfect for desserts, baking or direct consumption.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Natural Green Raisins",
    description: "Naturally sun-dried green raisins for immunity boost.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Long Raisins",
    description: "Soft and juicy long-sized raisins.",
  },

  // 24 Mantra
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Raisins",
    description: "Organically grown raisins, no added sugar or preservatives.",
  },
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Seedless Raisins",
    description: "Sun-dried and naturally sweet organic raisins.",
  },

  // Organic India
  {
    brandName: "Organic India",
    productName: "Organic India Raisins",
    description: "Pure, sun-dried organic raisins for daily nutrition.",
  },
  {
    brandName: "Organic India",
    productName: "Organic India Black Raisins",
    description: "Rich in antioxidants and fiber, ideal for immunity.",
  },

  // Urban Platter
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Black Raisins",
    description: "Sun-dried, soft and juicy black raisins.",
  },
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Green Raisins",
    description: "Slightly tangy, sweet and chewy raisins.",
  },
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Jumbo Black Raisins",
    description: "Extra juicy black raisins rich in iron and potassium.",
  },
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Organic Golden Raisins",
    description: "Certified organic raisins, no additives.",
  },

  // Vedaka
  {
    brandName: "Vedaka",
    productName: "Vedaka Premium Raisins",
    description: "Economical and high-quality seedless raisins.",
  },
  {
    brandName: "Vedaka",
    productName: "Vedaka Golden Raisins",
    description: "Golden raisins in resealable freshness pouch.",
  },
  {
    brandName: "Vedaka",
    productName: "Vedaka Black Raisins",
    description: "Perfect for everyday use and festive dishes.",
  },

  // Solimo (Amazon Brand)
  {
    brandName: "Amazon Brand - Solimo",
    productName: "Solimo Seedless Raisins",
    description: "Budget-friendly seedless raisins with good taste.",
  },

  // Farmley
  {
    brandName: "Farmley",
    productName: "Farmley Long Green Raisins",
    description: "Long, chewy raisins sourced from Nashik farms.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Black Raisins",
    description: "Naturally dried black raisins rich in iron.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Jumbo Green Raisins",
    description: "Large, chewy raisins full of energy.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Premium Seedless Raisins",
    description: "Perfect for snacking and festive cooking.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Yellow Raisins",
    description: "Bright, sweet raisins sun-dried to perfection.",
  },

  // Nutty Gritties
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Premium Raisins",
    description: "Sun-kissed raisins for energy and fiber boost.",
  },
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Green Long Raisins",
    description: "Perfect for gifting or daily snack.",
  },

  // Big Basket
  {
    brandName: "Big Basket",
    productName: "BB Royal Seedless Raisins",
    description: "Ideal for cooking, baking, or snacking.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Golden Raisins",
    description: "Sweet and soft golden variety raisins.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Black Raisins",
    description: "Budget-friendly and high-quality black raisins.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Long Green Raisins",
    description: "Great for cooking or direct eating.",
  },

  // Go Organic
  {
    brandName: "Go Organic",
    productName: "Go Organic Raisins",
    description: "Pesticide-free, clean and healthy raisins.",
  },
  {
    brandName: "Go Organic",
    productName: "Go Organic Long Raisins",
    description: "Naturally long raisins without chemical residue.",
  },

  // True Elements
  {
    brandName: "True Elements",
    productName: "True Elements Raisins",
    description: "No added sugar or oil, only pure raisins.",
  },
  {
    brandName: "True Elements",
    productName: "True Elements Long Raisins",
    description: "Sun-dried long raisins, rich in natural sugars.",
  },

  // Rostaa
  {
    brandName: "Rostaa",
    productName: "Rostaa Classic Raisins",
    description: "Soft, sweet raisins great for trail mixes.",
  },
  {
    brandName: "Rostaa",
    productName: "Rostaa Black Raisins",
    description: "Naturally dried raisins in a premium pack.",
  },
  {
    brandName: "Rostaa",
    productName: "Rostaa Premium Golden Raisins",
    description: "Golden raisins for premium gifting or daily use.",
  },

  // New Brands
  {
    brandName: "Natureland Organics",
    productName: "Natureland Organic Green Raisins",
    description: "100% organic and naturally sun-dried.",
  },
  {
    brandName: "Dry Fruit Hub",
    productName: "Dry Fruit Hub Premium Raisins",
    description: "Delicious and chewy raisins packed with iron.",
  },
  {
    brandName: "Jewel Farmer",
    productName: "Jewel Farmer Long Raisins",
    description: "Ideal for Indian sweets and dry fruit mixes.",
  },
  {
    brandName: "Ancy",
    productName: "Ancy Golden Raisins",
    description: "Naturally dried golden raisins in eco pack.",
  },
  {
    brandName: "Nuticious",
    productName: "Nuticious Jumbo Raisins",
    description: "Big-sized raisins, great for kids and elders alike.",
  },
  {
    brandName: "Tulsi",
    productName: "Tulsi W320 Grade Raisins",
    description: "Uniformly graded raisins with consistent taste.",
  },
  {
    brandName: "Wonderland Foods",
    productName: "Wonderland Premium Raisins",
    description: "Top-quality raisins in a resealable freshness pack.",
  },
  {
    brandName: "Berries & Nuts",
    productName: "Berries & Nuts Classic Raisins",
    description: "Packed with fiber and sweet natural flavor.",
  },
  {
    brandName: "Healthy Treat",
    productName: "Healthy Treat Roasted Raisins",
    description: "Lightly roasted for a unique twist on raisins.",
  },
  {
    brandName: "Snackible",
    productName: "Snackible Raisin Mix",
    description: "Mixed raisins for energy-packed snacking.",
  },
  {
    brandName: "Snack Amor",
    productName: "Snack Amor Golden Raisins",
    description: "Naturally sweetened with no added sugar.",
  },
  {
    brandName: "Alpino",
    productName: "Alpino Organic Raisins",
    description: "Organic and GMO-free raisins for clean eating.",
  },
];

const walnutProducts = [
  // Tata
  {
    brandName: "Tata",
    productName: "Tata Sampann Premium Walnuts",
    description: "Handpicked premium walnut kernels, rich in Omega-3.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann California Walnuts",
    description: "Fresh Californian walnuts packed for purity.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Walnut Halves",
    description: "Perfectly split walnut halves with no shells.",
  },

  // Nutraj
  {
    brandName: "Nutraj",
    productName: "Nutraj California Inshell Walnuts",
    description: "Whole walnuts with shells from California farms.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Walnut Kernels",
    description: "Premium walnut kernels rich in healthy fats.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Light Halves Walnuts",
    description: "Selected light color walnut halves.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Broken Walnut Kernels",
    description: "Broken pieces ideal for baking and cooking.",
  },

  // Happilo
  {
    brandName: "Happilo",
    productName: "Happilo Premium Californian Walnuts",
    description: "Natural walnuts for daily brain-boosting snack.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Light Halves Walnuts",
    description: "Light-colored walnut halves in resealable pack.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Raw Walnut Kernels",
    description: "Naturally raw, unsalted walnut kernels.",
  },

  // 24 Mantra
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Walnut Kernels",
    description: "Organically grown walnut halves without shells.",
  },

  // Organic India
  {
    brandName: "Organic India",
    productName: "Organic India Organic Walnuts",
    description: "Pure organic walnuts for holistic wellness.",
  },

  // Farmley
  {
    brandName: "Farmley",
    productName: "Farmley Inshell Walnuts",
    description: "Crunchy walnuts in shell, farm-fresh quality.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Walnut Kernels",
    description: "Premium walnut kernels for snacking & cooking.",
  },

  // Amazon Brand - Solimo
  {
    brandName: "Amazon Brand - Solimo",
    productName: "Solimo Premium Walnut Kernels",
    description: "Budget-friendly premium walnut kernels.",
  },
  {
    brandName: "Amazon Brand - Solimo",
    productName: "Solimo Inshell Walnuts",
    description: "Whole walnuts with shells for festive use.",
  },

  // BB Royal (Big Basket)
  {
    brandName: "Big Basket",
    productName: "BB Royal Walnut Kernels",
    description: "Economical walnut halves for everyday use.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Walnut Inshell",
    description: "Whole in-shell walnuts, great for winter snacks.",
  },

  // Rostaa
  {
    brandName: "Rostaa",
    productName: "Rostaa Gourmet Walnuts",
    description: "Gourmet-grade walnut halves for elite snacking.",
  },

  // True Elements
  {
    brandName: "True Elements",
    productName: "True Elements Walnut Halves",
    description: "Raw, unsweetened, and unflavored walnut halves.",
  },

  // Go Organic
  {
    brandName: "Go Organic",
    productName: "Go Organic Walnut Kernels",
    description: "Chemical-free walnut kernels in food-grade pack.",
  },

  // Urban Platter
  {
    brandName: "Urban Platter",
    productName: "Urban Platter California Walnut Halves",
    description: "Premium quality walnut halves from California.",
  },
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Raw Organic Walnuts",
    description: "USDA certified organic walnuts with rich nutrients.",
  },

  // Nutty Gritties
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Walnut Kernels",
    description: "Freshly cracked kernels packed with care.",
  },
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Light Walnut Halves",
    description: "Top-grade walnut halves, light and crispy.",
  },

  // Dry Fruit Hub
  {
    brandName: "Dry Fruit Hub",
    productName: "Dry Fruit Hub Premium Walnuts",
    description: "Hand-selected walnuts for daily nutrition.",
  },

  // Wonderland Foods
  {
    brandName: "Wonderland Foods",
    productName: "Wonderland Walnut Kernels",
    description: "Clean and delicious walnuts for every kitchen.",
  },

  // Jewel Farmer
  {
    brandName: "Jewel Farmer",
    productName: "Jewel Farmer Walnut Halves",
    description: "Halved walnut kernels with soft texture.",
  },

  // Berries & Nuts
  {
    brandName: "Berries & Nuts",
    productName: "Berries & Nuts Californian Walnuts",
    description: "Sourced from USA and packed fresh.",
  },

  // Natureland Organics
  {
    brandName: "Natureland Organics",
    productName: "Natureland Organic Walnuts",
    description: "100% certified organic and chemical-free.",
  },

  // Snackible
  {
    brandName: "Snackible",
    productName: "Snackible Flavored Walnuts",
    description: "Seasoned walnut snacks with a spicy twist.",
  },

  // Snack Amor
  {
    brandName: "Snack Amor",
    productName: "Snack Amor Himalayan Walnuts",
    description: "Sourced from the Himalayan region, natural & fresh.",
  },

  // Healthy Treat
  {
    brandName: "Healthy Treat",
    productName: "Healthy Treat Dry Roasted Walnuts",
    description: "Oil-free roasted walnuts for guilt-free snacking.",
  },
];

const peanutProducts = [
  // Tata
  {
    brandName: "Tata",
    productName: "Tata Sampann Protein Rich Peanuts",
    description: "Naturally protein-rich peanuts ideal for daily snacking.",
  },
  {
    brandName: "Tata",
    productName: "Tata Sampann Roasted Peanuts",
    description: "Roasted and lightly salted peanuts with crunchy taste.",
  },

  // Nutraj
  {
    brandName: "Nutraj",
    productName: "Nutraj Crunchy Roasted Peanuts",
    description: "Tasty and roasted peanuts, great with evening tea.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Masala Peanuts",
    description: "Spicy coated peanuts, a perfect party snack.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Classic Raw Peanuts",
    description: "High-quality raw peanuts packed with nutrition.",
  },

  // Happilo
  {
    brandName: "Happilo",
    productName: "Happilo Premium Salted Peanuts",
    description: "Salted peanuts in resealable freshness pack.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo King Size Roasted Peanuts",
    description: "Large crunchy peanuts roasted to perfection.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Chatpata Masala Peanuts",
    description: "Delicious masala peanuts with a tangy twist.",
  },

  // Farmley
  {
    brandName: "Farmley",
    productName: "Farmley Raw Peanuts",
    description: "Unprocessed peanuts ideal for roasting or cooking.",
  },
  {
    brandName: "Farmley",
    productName: "Farmley Premium Roasted Peanuts",
    description: "Roasted peanuts with skin for healthy munching.",
  },

  // 24 Mantra
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Peanuts",
    description: "Organically grown peanuts without chemicals.",
  },

  // Organic India
  {
    brandName: "Organic India",
    productName: "Organic India Peanuts",
    description: "Certified organic peanuts full of protein and fiber.",
  },

  // Big Basket (BB Royal)
  {
    brandName: "Big Basket",
    productName: "BB Royal Raw Peanuts",
    description: "Clean and economical raw peanuts for cooking.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Roasted Peanuts",
    description: "Tasty roasted peanuts, perfect for evening snack.",
  },

  // True Elements
  {
    brandName: "True Elements",
    productName: "True Elements Protein Rich Peanuts",
    description: "Raw peanuts rich in natural plant protein.",
  },
  {
    brandName: "True Elements",
    productName: "True Elements Spicy Masala Peanuts",
    description: "Bold and spicy peanuts without added oil.",
  },

  // Rostaa
  {
    brandName: "Rostaa",
    productName: "Rostaa Roasted Peanuts",
    description: "Premium quality roasted peanuts for healthy snacking.",
  },

  // Go Organic
  {
    brandName: "Go Organic",
    productName: "Go Organic Raw Peanuts",
    description: "Chemical-free and natural peanuts in food-safe pack.",
  },

  // Urban Platter
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Raw Peanuts",
    description: "Natural peanuts for roasting, cooking or snacking.",
  },
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Salted Peanuts",
    description: "Salted and crunchy peanuts in resealable pouch.",
  },

  // Nutty Gritties
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Smoky BBQ Peanuts",
    description: "Barbecue-flavored peanuts for a smoky experience.",
  },
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Himalayan Pink Salt Peanuts",
    description: "Peanuts roasted and seasoned with Himalayan salt.",
  },

  // Snackible
  {
    brandName: "Snackible",
    productName: "Snackible Spicy Peri Peri Peanuts",
    description: "Peri Peri coated peanuts with fiery taste.",
  },
  {
    brandName: "Snackible",
    productName: "Snackible Jaggery Coated Peanuts",
    description: "Sweet and crunchy jaggery-covered peanuts.",
  },

  // Wonderland Foods
  {
    brandName: "Wonderland Foods",
    productName: "Wonderland Spiced Peanuts",
    description: "Peanuts coated in classic Indian spices.",
  },

  // Natureland Organics
  {
    brandName: "Natureland Organics",
    productName: "Natureland Organic Raw Peanuts",
    description: "GMO-free, chemical-free organic peanuts.",
  },

  // Healthy Treat
  {
    brandName: "Healthy Treat",
    productName: "Healthy Treat Dry Roasted Peanuts",
    description: "Oil-free roasted peanuts for guilt-free snacking.",
  },
];

const figProducts = [
  // Happilo
  {
    brandName: "Happilo",
    productName: "Happilo Premium Dried Figs",
    description: "Sun-dried figs rich in dietary fiber and iron.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Anjeer Dry Figs",
    description: "Soft and chewy anjeer packed for freshness.",
  },

  // Nutraj
  {
    brandName: "Nutraj",
    productName: "Nutraj California Dried Figs",
    description: "High-quality dried figs, naturally sweet and soft.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Anjeer Premium",
    description: "Premium anjeer for daily health and wellness.",
  },

  // 24 Mantra
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Dried Figs",
    description: "Certified organic dried figs with no preservatives.",
  },

  // Rostaa
  {
    brandName: "Rostaa",
    productName: "Rostaa Gourmet Figs",
    description: "Handpicked gourmet figs perfect for snacking.",
  },

  // Big Basket
  {
    brandName: "Big Basket",
    productName: "BB Royal Dried Figs",
    description: "Naturally dried figs at affordable price.",
  },

  // Organic India
  {
    brandName: "Organic India",
    productName: "Organic India Dried Anjeer",
    description: "Wholesome organic anjeer from trusted farms.",
  },

  // Go Organic
  {
    brandName: "Go Organic",
    productName: "Go Organic Premium Figs",
    description: "Sweet and fiber-rich figs, organically grown.",
  },

  // Vedaka
  {
    brandName: "Vedaka",
    productName: "Vedaka Premium Anjeer",
    description: "Nutrient-dense dried anjeer from reliable source.",
  },

  // True Elements
  {
    brandName: "True Elements",
    productName: "True Elements Dried Figs",
    description: "Soft, sweet figs naturally sun-dried.",
  },
];

const pistachioProducts = [
  // Happilo
  {
    brandName: "Happilo",
    productName: "Happilo Premium California Pistachios",
    description: "Roasted and salted pistachios with a crunchy bite.",
  },
  {
    brandName: "Happilo",
    productName: "Happilo Lightly Salted Pista",
    description: "Mildly salted premium pista for everyday snacking.",
  },

  // Nutraj
  {
    brandName: "Nutraj",
    productName: "Nutraj California Pistachios",
    description: "Premium pistachios imported from California farms.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Salted Pistachios",
    description: "Salted roasted pista, rich in protein and fiber.",
  },
  {
    brandName: "Nutraj",
    productName: "Nutraj Iranian Pistachios",
    description: "Rich-tasting large pistachios from Iran.",
  },

  // 24 Mantra
  {
    brandName: "24 Mantra",
    productName: "24 Mantra Organic Pistachios",
    description: "Certified organic pista, unsalted and natural.",
  },

  // Rostaa
  {
    brandName: "Rostaa",
    productName: "Rostaa Gourmet Pistachios",
    description: "Handpicked roasted pista for elite snacking.",
  },

  // Big Basket
  {
    brandName: "Big Basket",
    productName: "BB Royal Roasted Pistachios",
    description: "Economical roasted pista with resealable packaging.",
  },
  {
    brandName: "Big Basket",
    productName: "BB Royal Raw Pistachios",
    description: "Naturally raw pista for healthy snacking.",
  },

  // Organic India
  {
    brandName: "Organic India",
    productName: "Organic India Natural Pistachios",
    description: "Chemical-free pista packed with antioxidants.",
  },

  // True Elements
  {
    brandName: "True Elements",
    productName: "True Elements Roasted Pistachios",
    description: "Dry roasted pista with zero added oil.",
  },

  // Go Organic
  {
    brandName: "Go Organic",
    productName: "Go Organic Premium Pista",
    description: "Organically grown, naturally sweet pistachios.",
  },

  // Urban Platter
  {
    brandName: "Urban Platter",
    productName: "Urban Platter Californian Pistachios",
    description: "Crunchy, delicious pista perfect for snacking or gifting.",
  },

  // Vedaka
  {
    brandName: "Vedaka",
    productName: "Vedaka Premium Pistachios",
    description: "Affordable and high-quality pista for daily use.",
  },

  // Nutty Gritties
  {
    brandName: "Nutty Gritties",
    productName: "Nutty Gritties Roasted Salted Pista",
    description: "Flavorful roasted pista ideal for munching anytime.",
  },
];
const notebookProducts = [
  {
    productName: "Sundaram Premium Notebook",
    brandName: "Sundaram",
    description: "Premium notebook ideal for office and academic use.",
  },
  {
    productName: "Classmate Subject Notebook",
    brandName: "Classmate",
    description: "Subject-wise notebook with index pages and separators.",
  },
  {
    productName: "Navneet College Notebook",
    brandName: "Navneet",
    description:
      "Navneet notebook perfect for college students and daily notes.",
  },
  {
    productName: "Camlin Project Notebook",
    brandName: "Camlin",
    description: "Notebook designed for project reports and submissions.",
  },
  {
    productName: "Youva Hard Bound Register",
    brandName: "Youva",
    description: "Sturdy hard bound register for long-term academic use.",
  },
  {
    productName: "Flair Graph Notebook",
    brandName: "Flair",
    description:
      "Notebook with pre-printed graph pages for mathematics and science.",
  },
  {
    productName: "Sundaram Practical Book",
    brandName: "Sundaram",
    description: "A4 size practical book for laboratory records.",
  },
  {
    productName: "Classmate Drawing Notebook",
    brandName: "Classmate",
    description:
      "Notebook with thick pages suitable for sketches and diagrams.",
  },
  {
    productName: "Camlin Lab Record Book",
    brandName: "Camlin",
    description:
      "Record book for writing science experiments and observations.",
  },
  {
    productName: "Youva Spiral Sketch Book",
    brandName: "Youva",
    description: "Sketch book with perforated pages for easy tear-off.",
  },
  {
    productName: "Flair Multi-Subject Notebook",
    brandName: "Flair",
    description:
      "Notebook divided into multiple subjects with color-coded sections.",
  },
  {
    productName: "Navneet Premium Writing Book",
    brandName: "Navneet",
    description: "Writing book for school students with high-quality paper.",
  },
  {
    productName: "Classmate Executive Notebook",
    brandName: "Classmate",
    description: "Professional notebook with leather finish and ruled pages.",
  },
  {
    productName: "Camlin College Register",
    brandName: "Camlin",
    description: "College register with hard cover and extra-thick binding.",
  },
  {
    productName: "Youva Exam Pad Notebook",
    brandName: "Youva",
    description: "Notebook attached with exam pad for writing on the go.",
  },
  {
    productName: "Flair Soft Cover Notebook",
    brandName: "Flair",
    description: "Budget-friendly notebook for everyday use.",
  },
  {
    productName: "Navneet Drawing Pad",
    brandName: "Navneet",
    description: "Drawing pad for art students and hobbyists.",
  },
  {
    productName: "Sundaram Spiral Writing Book",
    brandName: "Sundaram",
    description: "Spiral-bound writing book for neat and easy flipping.",
  },
  {
    productName: "Camlin Spiral Science Book",
    brandName: "Camlin",
    description: "Notebook suitable for science theory and experiments.",
  },
  {
    productName: "Classmate Ruled Notebook",
    brandName: "Classmate",
    description: "Standard ruled notebook for school and office use.",
  },
  {
    productName: "Youva Math Notebook",
    brandName: "Youva",
    description: "Notebook with squares layout ideal for mathematics.",
  },
  {
    productName: "Flair Designer Notebook",
    brandName: "Flair",
    description: "Notebook with colorful designer covers for creative minds.",
  },
  {
    productName: "Sundaram Subject Book",
    brandName: "Sundaram",
    description: "Organized subject book with ample space for notes.",
  },
  {
    productName: "Navneet English Grammar Book",
    brandName: "Navneet",
    description: "Notebook specially designed for grammar exercises.",
  },
  {
    productName: "Classmate Lab Record",
    brandName: "Classmate",
    description: "Lab record notebook with charts and guidelines.",
  },
  {
    productName: "Camlin Work Book",
    brandName: "Camlin",
    description: "Work book for assignments, homework, and exercises.",
  },
];
const writingInstrumentsProducts = [
  // Reynolds
  {
    brandName: "Reynolds",
    productName: "Reynolds Ball Pen Blue",
    description: "Smooth ball pen for everyday writing",
  },
  {
    brandName: "Reynolds",
    productName: "Reynolds Trimax Gel Pen",
    description: "Retractable gel pen for smooth writing",
  },
  {
    brandName: "Reynolds",
    productName: "Reynolds 045 Metallic Gel Pen Set",
    description: "Vibrant metallic gel pens for crafts",
  },
  {
    brandName: "Reynolds",
    productName: "Reynolds Fountain Elegance Pen",
    description: "Classic fountain pen for formal writing",
  },

  // Cello
  {
    brandName: "Cello",
    productName: "Cello Finegrip Ball Pen Black",
    description: "Finegrip pen for professional writing",
  },
  {
    brandName: "Cello",
    productName: "Cello Butterflow Blue Pen",
    description: "Ultra-smooth ink pen with easy flow",
  },
  {
    brandName: "Cello",
    productName: "Cello Maxriter Gel Pen",
    description: "Gel pen with premium ink flow",
  },
  {
    brandName: "Cello",
    productName: "Cello Gelmate Max Blue Pen",
    description: "Comfortable gel pen for everyday use",
  },

  // Camlin
  {
    brandName: "Camlin",
    productName: "Camlin Supreme Pencil Pack",
    description: "Supreme graphite pencils ideal for students",
  },
  {
    brandName: "Camlin",
    productName: "Camlin Mechanical Pencil",
    description: "Lead pencil for precise drawing",
  },
  {
    brandName: "Camlin",
    productName: "Camlin Artline Sketch Pen Set",
    description: "Sketch pens for artists and students",
  },

  // Faber‑Castell
  {
    brandName: "Faber‑Castell",
    productName: "Faber‑Castell Highlighter Pack",
    description: "Vibrant highlighters in assorted colors",
  },
  {
    brandName: "Faber‑Castell",
    productName: "Faber‑Castell Connector Sketch Pen Set",
    description: "Colorful sketch pens for school art projects",
  },
  {
    brandName: "Faber‑Castell",
    productName: "Faber‑Castell Grip Ball Pen",
    description: "Winner ball pen with ergonomic grip",
  },

  // Luxor
  {
    brandName: "Luxor",
    productName: "Luxor Whiteboard Marker Set",
    description: "Dry erase markers for whiteboards",
  },
  {
    brandName: "Luxor",
    productName: "Luxor Text Highlighter",
    description: "Bright highlighter with chisel tip",
  },
  {
    brandName: "Luxor",
    productName: "Luxor Pilot Pen (Ball)",
    description: "Trusted everyday ball pen",
  },

  // Classmate
  {
    brandName: "Classmate",
    productName: "Classmate Octane Gel Pen Blue",
    description: "Smooth gel pen for neat writing",
  },
  {
    brandName: "Classmate",
    productName: "Classmate Subject Notebook Pen",
    description: "Matching pen set for notebooks",
  },
  {
    brandName: "Classmate",
    productName: "Classmate Tie & Clip Pen",
    description: "Metallic pen with clip for professionals",
  },

  // Pilot
  {
    brandName: "Pilot",
    productName: "Pilot V7 Hi‑Tecpoint Pen",
    description: "Needle‑point pen for precise writing",
  },
  {
    brandName: "Pilot",
    productName: "Pilot V5 RT Pen",
    description: "Refillable needle‑point pen with cap",
  },
  {
    brandName: "Pilot",
    productName: "Pilot Frixion Erasable Pen",
    description: "Ink pen you can erase cleanly",
  },

  // Nataraj
  {
    brandName: "Nataraj",
    productName: "Nataraj Erasable Pen",
    description: "Erasable ink pen for corrections",
  },
  {
    brandName: "Nataraj",
    productName: "Nataraj Ball Pen 621",
    description: "Smooth and durable ball pens",
  },
  {
    brandName: "Nataraj",
    productName: "Nataraj Pencil 621",
    description: "Classic graphite pencil popular in schools",
  },

  // Doms
  {
    brandName: "Doms",
    productName: "Doms X1 Pencil Set",
    description: "Premium pencils for drawing and writing",
  },
  {
    brandName: "Doms",
    productName: "Doms Techno Marker",
    description: "Bold tip marker for posters and crafts",
  },
  {
    brandName: "Doms",
    productName: "Doms Whiteboard Marker",
    description: " washable dry‑erase marker",
  },

  // Sharpie
  {
    brandName: "Sharpie",
    productName: "Sharpie Permanent Marker",
    description: "Bold permanent markers for labeling",
  },
  {
    brandName: "Sharpie",
    productName: "Sharpie Fine Tip Marker",
    description: "Precision permanent marker for detailed work",
  },
  {
    brandName: "Sharpie",
    productName: "Sharpie Neon Marker Set",
    description: "Bright neon markers for visibility",
  },

  // Additional Brands
  {
    brandName: "Parker",
    productName: "Parker Vector Ball Pen",
    description: "Elegant writing pen with smooth flow",
  },
  {
    brandName: "Uniball",
    productName: "Uniball Eye UB‑157 Pen",
    description: "Waterproof ink pen for long‑lasting writing",
  },
  {
    brandName: "Pentel",
    productName: "Pentel EnerGel Roller Pen",
    description: "Quick‑drying ink for left‑handers",
  },
  {
    brandName: "Stabilo",
    productName: "Stabilo Swing Cool Highlighter",
    description: "Pocket‑sized highlighter for students",
  },
  {
    brandName: "Maped",
    productName: "Maped Technic Pencil",
    description: "Auto mechanical pencil for school use",
  },
  {
    brandName: "Artline",
    productName: "Artline Whiteboard Marker",
    description: "Quick‑dry whiteboard marker with refillable ink",
  },
  {
    brandName: "Kores",
    productName: "Kores Permanent Marker",
    description: "Waterproof permanent marker",
  },
  {
    brandName: "Hauser",
    productName: "Hauser XO Ball Pen",
    description: "High quality German pen for writing",
  },
  {
    brandName: "Pierre Cardin",
    productName: "Pierre Cardin Roller Ball Pen",
    description: "Stylish pen for executive use",
  },
  {
    brandName: "Linc",
    productName: "Pentonic Linc Gel Pen",
    description: "Modern design with quick flow ink",
  },
  {
    brandName: "Montex",
    productName: "Montex Gel Pen Set",
    description: "Colorful gel pens for school and home",
  },
  {
    brandName: "Staedtler",
    productName: "Staedtler Lumocolor Marker",
    description: "Highlighter/marker hybrid for writing and drawing",
  },
  {
    brandName: "Foska",
    productName: "Foska Hardcover Notebook Pen Set",
    description: "Notebook plus pen combo for gifting",
  },
];
const accessoriesProducts = [
  {
    productName: "Non-Dust Eraser",
    brandName: "Apsara",
    description:
      "Smooth erasing experience that leaves no residue. Ideal for clean sheets.",
  },
  {
    productName: "White Eraser",
    brandName: "Nataraj",
    description:
      "Classic white eraser with soft texture for paper-friendly use.",
  },
  {
    productName: "Premium Eraser for Exams",
    brandName: "Faber-Castell",
    description:
      "High-quality eraser designed for clean and precise erasing during tests.",
  },
  {
    productName: "Dust-Free Eraser",
    brandName: "Camlin",
    description:
      "Minimizes dust particles for a neat workspace and better erasing.",
  },
  {
    productName: "Colored Erasers (Pack of 5)",
    brandName: "DOMS",
    description:
      "Colorful erasers for fun and effective erasing at school or home.",
  },
  {
    productName: "Kid's Eraser Set - Animals",
    brandName: "Classmate",
    description:
      "Animal-shaped erasers that combine fun and functionality for kids.",
  },
  {
    productName: "Eco-Friendly Eraser",
    brandName: "PaperKraft",
    description: "Made from recycled materials, great for eco-conscious users.",
  },
  {
    productName: "Soft Erasers (Pack of 10)",
    brandName: "Cello",
    description: "Gentle erasers perfect for notebooks and sketchpads.",
  },
  {
    productName: "Premium Pencil Sharpener",
    brandName: "Faber-Castell",
    description:
      "Durable sharpener for clean and smooth sharpening of pencils.",
  },
  {
    productName: "Dual Blade Sharpener",
    brandName: "Apsara",
    description:
      "Two sharpeners in one — handles both regular and jumbo pencils.",
  },
  {
    productName: "Barrel Sharpener with Catcher",
    brandName: "DOMS",
    description: "Compact barrel sharpener with waste catcher to avoid mess.",
  },
  {
    productName: "Child Safe Sharpener",
    brandName: "Nataraj",
    description: "Safe design for children with protective blade housing.",
  },
  {
    productName: "Multi-Color Sharpener Pack",
    brandName: "Camlin",
    description: "Set of colorful sharpeners suitable for school supplies.",
  },
  {
    productName: "Cartoon Sharpener (Set of 4)",
    brandName: "Classmate",
    description: "Fun cartoon-themed sharpeners that kids will love to use.",
  },
  {
    productName: "Wooden Sharpener",
    brandName: "PaperKraft",
    description: "Stylish eco-friendly sharpener made from quality wood.",
  },
  {
    productName: "Sharpeners with Eraser Combo",
    brandName: "Cello",
    description:
      "Convenient combo of sharpener and eraser in a compact format.",
  },
  {
    productName: "Mathematical Geometry Box",
    brandName: "Camlin",
    description: "Essential geometry tools in a sturdy metal box.",
  },
  {
    productName: "Complete Geometry Set",
    brandName: "Faber-Castell",
    description:
      "Comprehensive set of compass, ruler, and protractor for students.",
  },
  {
    productName: "Exam Geometry Box",
    brandName: "Classmate",
    description: "Exam-ready geometry set built for precision and clarity.",
  },
  {
    productName: "Junior Geometry Kit",
    brandName: "DOMS",
    description: "Perfect beginner set for young learners learning geometry.",
  },
  {
    productName: "Advanced Drawing Kit",
    brandName: "Nataraj",
    description:
      "Advanced instruments for technical drawing and school geometry.",
  },
  {
    productName: "Stainless Steel Compass Set",
    brandName: "Apsara",
    description: "Durable stainless steel compass for accurate geometry work.",
  },
  {
    productName: "Combo Geometry Box",
    brandName: "Cello",
    description:
      "All-in-one box with rulers, compass, divider, and set squares.",
  },
  {
    productName: "Mathematical Instrument Box",
    brandName: "Maped",
    description: "Imported quality geometry tools for school and college use.",
  },
  {
    productName: "Premium Stationery Pouch",
    brandName: "Faber-Castell",
    description: "Elegant and spacious pouch for all your stationery needs.",
  },
  {
    productName: "Multicolor Zip Pouch",
    brandName: "Classmate",
    description: "Trendy pouch with zipper and colorful design.",
  },
  {
    productName: "Large Storage Pencil Case",
    brandName: "DOMS",
    description: "Spacious pencil box to store all your writing tools.",
  },
  {
    productName: "Canvas Printed Pouch",
    brandName: "Nataraj",
    description: "Stylish canvas pouch with printed designs and smooth zipper.",
  },
  {
    productName: "Transparent Pencil Box",
    brandName: "Camlin",
    description: "Clear pencil box for easy visibility and access to contents.",
  },
  {
    productName: "Kids' Cartoon Pouch",
    brandName: "Apsara",
    description:
      "Colorful pouch with fun cartoon prints for kids’ school supplies.",
  },
  {
    productName: "Stylish Zip Pouch",
    brandName: "Cello",
    description: "Compact and trendy design suitable for all ages.",
  },
  {
    productName: "3-Compartment Pencil Bag",
    brandName: "PaperKraft",
    description:
      "Organized storage with 3 zipped compartments for school essentials.",
  },
  {
    productName: "Mesh Pencil Case",
    brandName: "Maped",
    description: "Modern mesh design pencil pouch with strong zip closure.",
  },
  {
    productName: "Magnetic Closure Pencil Box",
    brandName: "Faber-Castell",
    description: "Premium box with magnetic latch and sleek design.",
  },
  {
    productName: "Double Zip Pencil Pouch",
    brandName: "Classmate",
    description: "Double zipper pencil pouch with multiple pockets.",
  },
  {
    productName: "PVC Stationery Pouch",
    brandName: "DOMS",
    description: "Durable PVC construction perfect for rough use.",
  },
  {
    productName: "Animal Face Pouch",
    brandName: "Nataraj",
    description: "Cute animal-themed pouch that kids love to carry.",
  },
  {
    productName: "Flip Top Pencil Case",
    brandName: "Camlin",
    description: "Hard cover flip-open pencil box for neat organization.",
  },
  {
    productName: "Glitter Pouch",
    brandName: "Apsara",
    description: "Sparkling glitter pouch perfect for kids and teens.",
  },
  {
    productName: "Small School Geometry Set",
    brandName: "DOMS",
    description: "Compact geometry kit with basic tools for students.",
  },
  {
    productName: "Eraser + Sharpener Combo Pack",
    brandName: "Nataraj",
    description: "Useful combo pack for quick corrections and sharpening.",
  },
  {
    productName: "Box of 20 Erasers",
    brandName: "Camlin",
    description: "Bulk eraser pack ideal for classrooms or office use.",
  },
  {
    productName: "Professional Compass & Divider",
    brandName: "Maped",
    description: "High-precision drawing set for advanced users.",
  },
  {
    productName: "Cartoon Printed Geometry Box",
    brandName: "DOMS",
    description: "Geometry box with fun and engaging cartoon designs.",
  },
  {
    productName: "Glitter Eraser Pack",
    brandName: "Classmate",
    description: "Fun and stylish erasers with glitter finishes.",
  },
  {
    productName: "Animal Print Sharpener",
    brandName: "Faber-Castell",
    description: "Bright sharpener with printed animal patterns.",
  },
  {
    productName: "Deluxe Instrument Set",
    brandName: "Apsara",
    description: "Premium instruments with long-lasting build and accuracy.",
  },
  {
    productName: "Compass Set with Ruler",
    brandName: "Nataraj",
    description: "Affordable compass and ruler combo for students.",
  },
  {
    productName: "Refillable Eraser Set",
    brandName: "Camlin",
    description: "Erasers that can be refilled and reused, reducing waste.",
  },
  {
    productName: "Eraser Set with Holder",
    brandName: "PaperKraft",
    description: "Comfortable holder for clean and mess-free erasing.",
  },
  {
    productName: "2-in-1 Sharpener",
    brandName: "Cello",
    description: "Dual use sharpener for standard and thick pencils.",
  },
  {
    productName: "Transparent Eraser Box",
    brandName: "Maped",
    description: "Box of transparent erasers ideal for precise work.",
  },
  {
    productName: "Slotted Geometry Box",
    brandName: "Faber-Castell",
    description: "Segmented box for organizing every geometry instrument.",
  },
  {
    productName: "Triangular Ruler & Set Square",
    brandName: "Classmate",
    description: "Strong plastic tools designed for accurate measurements.",
  },
  {
    productName: "Circular Geometry Instrument Set",
    brandName: "Apsara",
    description: "Complete set for drawing circles and angles with precision.",
  },
  {
    productName: "Travel Stationery Pouch",
    brandName: "DOMS",
    description: "Handy and portable pouch for travel and school.",
  },
  {
    productName: "Kids Pouch with Zip Lock",
    brandName: "Nataraj",
    description: "Colorful zip-lock pouch great for kids' everyday use.",
  },
  {
    productName: "Pattern Printed Pencil Bag",
    brandName: "Camlin",
    description: "Printed fabric bag with artistic patterns and zip closure.",
  },
  {
    productName: "Mini Compass Set",
    brandName: "Maped",
    description: "Compact design compass for basic geometric drawing.",
  },
  {
    productName: "Unicorn Eraser Pack",
    brandName: "Faber-Castell",
    description: "Magical unicorn-themed erasers for fantasy lovers.",
  },
  {
    productName: "Glow in the Dark Eraser",
    brandName: "Classmate",
    description: "Fun glow-in-the-dark eraser for kids and teens.",
  },
  {
    productName: "Space Theme Geometry Box",
    brandName: "Cello",
    description: "Explore geometry with a space-themed toolset.",
  },
  {
    productName: "Transparent Geometry Set",
    brandName: "PaperKraft",
    description: "Clear plastic geometry tools for perfect visibility.",
  },
  {
    productName: "Premium Sharpener Combo",
    brandName: "Maped",
    description: "High-quality sharpener combo set for professionals.",
  },
  {
    productName: "Mini Geometry Set for Travel",
    brandName: "Camlin",
    description: "Pocket-size geometry set for students on the go.",
  },
  {
    productName: "Geometry Box with Protractor",
    brandName: "Apsara",
    description: "All-in-one kit including protractor and ruler set.",
  },
  {
    productName: "Square Erasers (Pack of 6)",
    brandName: "DOMS",
    description: "Square-shaped erasers ideal for school children.",
  },
  {
    productName: "Eco Geometry Kit",
    brandName: "PaperKraft",
    description: "Environmentally friendly geometry tools for schools.",
  },
  {
    productName: "Exam Eraser Pack",
    brandName: "Nataraj",
    description: "Pack of erasers made for clean and efficient exam writing.",
  },
  {
    productName: "Multi-Tool Sharpener",
    brandName: "Faber-Castell",
    description: "Sharpener with added tools for convenience and versatility.",
  },
  {
    productName: "Funky Pouch for Teens",
    brandName: "Classmate",
    description: "Trendy and colorful pouch for stylish students.",
  },
  {
    productName: "Zip Case with Mesh Pocket",
    brandName: "Cello",
    description: "Durable zip pouch with inner mesh for organized storage.",
  },
  {
    productName: "3D Printed Pencil Pouch",
    brandName: "Maped",
    description: "Pouch with vibrant 3D prints and zip-lock system.",
  },
  {
    productName: "Character Erasers - Superheroes",
    brandName: "DOMS",
    description: "Superhero-shaped erasers to make studying more fun.",
  },
  {
    productName: "Pencil Organizer Box",
    brandName: "Camlin",
    description: "Organize your pencils and pens neatly in one place.",
  },
  {
    productName: "Slide Open Pencil Case",
    brandName: "Apsara",
    description: "Easy-slide open pencil box with sturdy body.",
  },
  {
    productName: "School Kid Pouch Combo",
    brandName: "Nataraj",
    description: "Complete combo of pouch and stationery for kids.",
  },
  {
    productName: "Unicorn Pencil Pouch",
    brandName: "Classmate",
    description: "Whimsical unicorn-themed pencil pouch for school girls.",
  },
  {
    productName: "Fruit Eraser Set",
    brandName: "Faber-Castell",
    description: "Erasers shaped like fruits — fun and functional.",
  },
  {
    productName: "Sticker Printed Sharpener",
    brandName: "DOMS",
    description: "Bright and funky sharpener with cool stickers.",
  },
  {
    productName: "Snap Closure Pouch",
    brandName: "PaperKraft",
    description: "Secure pouch with snap-button closure for quick access.",
  },
  {
    productName: "Exam Kit - Eraser, Sharpener, Ruler",
    brandName: "Camlin",
    description: "Essential exam kit for students packed with tools.",
  },
];

const OfficeSuppliesProducts = [
  {
    productName: "Heavy Duty Correction Fluid",
    brandName: "Faber-Castell",
    description: "Formulated for thick and stubborn ink marks.",
  },
  {
    productName: "Portable Mini Stapler Kit",
    brandName: "Kangaro",
    description: "Includes a mini stapler with staples and remover.",
  },
  {
    productName: "Correction Tape with Side Dispenser",
    brandName: "DOMS",
    description: "Ergonomic side-dispensing tape for natural movement.",
  },
  {
    productName: "Deluxe Flat Stapler",
    brandName: "Solo",
    description: "Elegant and efficient stapler with high binding capacity.",
  },
  {
    productName: "Gel Based Correction Pen",
    brandName: "Camlin",
    description: "Smooth gel-based formula for seamless corrections.",
  },
  {
    productName: "Color-Coded Correction Tapes",
    brandName: "Cello",
    description: "Pack of multiple colors for visual organization.",
  },
  {
    productName: "Mini Stapler with Anti-Skid Base",
    brandName: "Oddy",
    description: "Compact design with anti-slip rubber feet.",
  },
  {
    productName: "Eco-Friendly Correction Pen",
    brandName: "Nataraj",
    description: "Made with recyclable plastic and non-toxic ink.",
  },
  {
    productName: "Stapler with Built-in Tape Cutter",
    brandName: "Faber-Castell",
    description: "Multifunctional office tool for efficiency.",
  },
  {
    productName: "Correction Pen with Flexible Nib",
    brandName: "Camlin",
    description: "Adjustable tip to match pressure and angle.",
  },
  {
    productName: "Heavy Load Professional Stapler",
    brandName: "Kangaro",
    description: "Built for frequent use in high-volume environments.",
  },
  {
    productName: "Brush Tip Correction Fluid",
    brandName: "DOMS",
    description: "Fluid with a wide-tip brush for large corrections.",
  },
  {
    productName: "Basic Office Stapler",
    brandName: "Solo",
    description: "Essential design for everyday document use.",
  },
  {
    productName: "Quick Swipe Correction Tape",
    brandName: "Cello",
    description: "Fast and clean tape correction in one motion.",
  },
  {
    productName: "Rubber Grip Mini Stapler",
    brandName: "Oddy",
    description: "Soft grip and small size for user comfort.",
  },
  {
    productName: "Dual Ink Correction Pen",
    brandName: "Camlin",
    description: "Switch between white and blue ink correction.",
  },
  {
    productName: "Stapler with Magnetic Base",
    brandName: "Faber-Castell",
    description: "Stays securely in place during usage.",
  },
  {
    productName: "Correction Tape Roller with Grip",
    brandName: "Nataraj",
    description: "Enhanced grip for precise tape application.",
  },
  {
    productName: "Ultra-Thin Stapler",
    brandName: "Kangaro",
    description: "Slim design that fits in pockets or pencil cases.",
  },
  {
    productName: "Roller Tip Correction Pen",
    brandName: "Solo",
    description: "Roller ball tip for smooth application.",
  },
  {
    productName: "Auto Loading Stapler",
    brandName: "DOMS",
    description: "Automatically loads staples with push mechanism.",
  },
  {
    productName: "All-Surface Correction Fluid",
    brandName: "Camlin",
    description: "Adheres to most surfaces including photo paper.",
  },
  {
    productName: "Mini Correction Roller",
    brandName: "Oddy",
    description: "Tiny roller for compact corrections.",
  },
  {
    productName: "Ergo Press Stapler",
    brandName: "Faber-Castell",
    description: "Reduces hand strain during frequent use.",
  },
  {
    productName: "Brushless Correction Fluid",
    brandName: "Cello",
    description: "Foam tip instead of brush for finer application.",
  },
  {
    productName: "Antibacterial Correction Pen",
    brandName: "Camlin",
    description: "Safe for shared use with germ-resistant coating.",
  },
  {
    productName: "Portable Flat Stapler",
    brandName: "Nataraj",
    description: "Easy to carry and store in small compartments.",
  },
  {
    productName: "Correction Pen with Refill Option",
    brandName: "Kangaro",
    description: "Refillable pen for eco-conscious users.",
  },
  {
    productName: "Multicolor Stapler Pack",
    brandName: "DOMS",
    description: "Set of vibrant staplers for organized color coding.",
  },
  {
    productName: "Fast Dry Gel Correction Fluid",
    brandName: "Solo",
    description: "Gel-based, dries in under 3 seconds.",
  },
  {
    productName: "Stapler with Indicator Window",
    brandName: "Oddy",
    description: "Shows how many staples are left at a glance.",
  },
  {
    productName: "Precision Mini Correction Pen",
    brandName: "Camlin",
    description: "Micro tip pen for pinpoint corrections.",
  },
  {
    productName: "Large Capacity Office Stapler",
    brandName: "Faber-Castell",
    description: "Staples up to 60 sheets with ease.",
  },
  {
    productName: "Correction Roller with Lock Cap",
    brandName: "Cello",
    description: "Prevents tape from drying or getting damaged.",
  },
  {
    productName: "Ergonomic Desk Stapler",
    brandName: "Kangaro",
    description: "Curved design for better grip and control.",
  },
  {
    productName: "Odor-Free Correction Fluid",
    brandName: "Camlin",
    description: "Low-odor formula ideal for indoor use.",
  },
  {
    productName: "Tape-Based Correction Pen",
    brandName: "Solo",
    description: "Uses thin tape strip for clean corrections.",
  },
  {
    productName: "Premium Metal Stapler",
    brandName: "Oddy",
    description: "Heavy metal body for long-lasting performance.",
  },
  {
    productName: "Twist Lock Correction Pen",
    brandName: "Nataraj",
    description: "Prevents leakage with twist-lock cap.",
  },
  {
    productName: "Click Button Stapler",
    brandName: "DOMS",
    description: "Click mechanism for fast loading.",
  },
  {
    productName: "Correction Roller with Grip Ring",
    brandName: "Faber-Castell",
    description: "Soft ring design for slip-free correction.",
  },
  {
    productName: "Stapler with Dual Pin Sizes",
    brandName: "Kangaro",
    description: "Supports 24/6 and 26/6 staple types.",
  },
  {
    productName: "Correction Pen for Exam Sheets",
    brandName: "Camlin",
    description: "Smudge-proof and fast drying for OMR safety.",
  },
  {
    productName: "Quick Load Desktop Stapler",
    brandName: "Solo",
    description: "Reloads in seconds with top-button press.",
  },
  {
    productName: "Glide Smooth Correction Tape",
    brandName: "Cello",
    description: "Designed for extra-smooth tape application.",
  },
];
const faceCareProducts = [
  {
    productName: "Moisturizing Face Cream",
    brandName: "Nivea",
    description:
      "Nivea Moisturizing Face Cream for daily hydration and softness.",
  },
  {
    productName: "Fair & Lovely Advanced Multivitamin Cream",
    brandName: "Glow & Lovely",
    description:
      "Glow & Lovely multivitamin cream for radiant and even-toned skin.",
  },
  {
    productName: "Skin Brightening Cream",
    brandName: "Pond's",
    description:
      "Pond's Skin Brightening Cream with Pro-Vitamin B3 for glowing skin.",
  },
  {
    productName: "Anti-Wrinkle Day Cream",
    brandName: "Olay",
    description: "Olay Anti-Wrinkle Cream for youthful and firm-looking skin.",
  },
  {
    productName: "Hydra Bomb Face Cream",
    brandName: "Garnier",
    description: "Garnier Hydra Bomb Cream deeply hydrates dry and dull skin.",
  },
  {
    productName: "Ayurvedic Massage Cream",
    brandName: "Patanjali",
    description:
      "Patanjali Herbal Massage Cream for rejuvenating skin therapy.",
  },
  {
    productName: "Soft Moisturizing Cream",
    brandName: "Dove",
    description: "Dove Soft Cream for smooth, soft, and nourished skin.",
  },
  {
    productName: "Vitamin C Face Cream",
    brandName: "Mamaearth",
    description:
      "Mamaearth Vitamin C Cream for skin brightness and antioxidant care.",
  },
  {
    productName: "Saffron Fairness Cream",
    brandName: "Vicco",
    description: "Vicco Turmeric and Saffron Cream for natural skin radiance.",
  },
  {
    productName: "Face Massage Cream",
    brandName: "VLCC",
    description: "VLCC Face Massage Cream to improve skin texture and tone.",
  },
  {
    productName: "Almond Nourishing Cream",
    brandName: "Biotique",
    description:
      "Biotique Almond Cream for deep nourishment and skin restoration.",
  },
  {
    productName: "Herbal Skin Cream",
    brandName: "Himalaya",
    description: "Himalaya Herbal Skin Cream for daily protection and care.",
  },
  {
    productName: "Brightening Face Cream",
    brandName: "Lotus Herbals",
    description:
      "Lotus Herbal Brightening Cream enriched with natural extracts.",
  },
  {
    productName: "Anti-Blemish Face Cream",
    brandName: "The Derma Co",
    description: "Derma Co Anti-Blemish Cream targets marks and pigmentation.",
  },
  {
    productName: "Aloe Vera Soothing Cream",
    brandName: "Khadi Natural",
    description: "Khadi Natural Aloe Cream for cooling and hydration.",
  },
  {
    productName: "Hydrating Face Massage Cream",
    brandName: "WOW Skin Science",
    description: "WOW Hydrating Cream restores skin moisture and glow.",
  },
  {
    productName: "Glow Face Cream",
    brandName: "Lakmé",
    description: "Lakmé Glow Face Cream enhances natural radiance and shine.",
  },
  {
    productName: "Whitening & Firming Cream",
    brandName: "L'Oreal",
    description: "L'Oreal Whitening Cream for firm, clear, and fair skin.",
  },
  {
    productName: "Radiance Skin Cream",
    brandName: "Joy",
    description: "Joy Skin Cream boosts natural glow with active botanicals.",
  },
  {
    productName: "Neem Anti-Pimple Cream",
    brandName: "Roop Mantra",
    description: "Roop Mantra Neem Cream prevents pimples and acne breakouts.",
  },
  {
    productName: "Glow Boost Cream",
    brandName: "Clean & Clear",
    description: "Clean & Clear Glow Boost Cream for oil-free fresh skin.",
  },
  {
    productName: "Night Repair Cream",
    brandName: "Plum",
    description: "Plum Night Cream repairs and restores skin overnight.",
  },
  {
    productName: "Retinol Skin Cream",
    brandName: "Minimalist",
    description: "Minimalist Retinol Cream targets fine lines and dull skin.",
  },
  {
    productName: "Bright Skin Massage Cream",
    brandName: "Aroma Magic",
    description: "Aroma Magic Cream enhances skin glow with natural oils.",
  },
  {
    productName: "Hydrating Cream with Shea Butter",
    brandName: "The Body Shop",
    description: "The Body Shop Shea Cream nourishes and smoothens dry skin.",
  },
  {
    productName: "Vitamin E Moisturizer",
    brandName: "Faces Canada",
    description: "Faces Canada Vitamin E Cream for intense hydration.",
  },
  {
    productName: "Olive Deep Nourish Cream",
    brandName: "Oriflame",
    description: "Oriflame Olive Cream for deep skin nourishment.",
  },
  {
    productName: "Natural Brightening Cream",
    brandName: "Forest Essentials",
    description: "Forest Essentials Brightening Cream with Ayurvedic formula.",
  },
  {
    productName: "Cocoa Butter Massage Cream",
    brandName: "Palmer's",
    description:
      "Palmer's Cocoa Massage Cream restores elasticity and smoothness.",
  },
  {
    productName: "Pearl Whitening Face Cream",
    brandName: "Jovees",
    description: "Jovees Pearl Cream promotes skin clarity and fairness.",
  },
  {
    productName: "Charcoal Detox Cream",
    brandName: "Beardo",
    description: "Beardo Charcoal Cream detoxifies and hydrates men's skin.",
  },
  {
    productName: "Youthful Radiance Cream",
    brandName: "St. Botanica",
    description: "St. Botanica Cream enhances elasticity and youthful glow.",
  },
  {
    productName: "Papaya Face Cream",
    brandName: "Good Vibes",
    description: "Good Vibes Papaya Cream brightens skin and clears spots.",
  },
  {
    productName: "Collagen Boosting Cream",
    brandName: "Dot & Key",
    description: "Dot & Key Collagen Cream firms and lifts mature skin.",
  },
  {
    productName: "Anti-Tan Massage Cream",
    brandName: "OxyGlow",
    description: "OxyGlow Anti-Tan Cream removes tan and sun damage.",
  },
  {
    productName: "Hydra Boost Day Cream",
    brandName: "Neutrogena",
    description: "Neutrogena Hydra Boost for intense daily hydration.",
  },
  {
    productName: "Natural Fairness Massage Cream",
    brandName: "Ayush",
    description:
      "Ayush Massage Cream made with authentic Ayurvedic ingredients.",
  },
  {
    productName: "Brightening Vitamin C Cream",
    brandName: "Re'equil",
    description: "Re'equil Vitamin C Cream enhances brightness and elasticity.",
  },
  {
    productName: "Basil & Turmeric Face Cream",
    brandName: "Blue Nectar",
    description: "Blue Nectar Ayurvedic Cream with herbs for clear skin.",
  },
  {
    productName: "Whitening Massage Cream",
    brandName: "Raaga Professional",
    description: "Raaga Whitening Massage Cream suitable for all skin types.",
  },
  {
    productName: "Skin Nourishing Massage Cream",
    brandName: "Nature’s Essence",
    description: "Nature’s Essence Cream softens and restores dull skin.",
  },
  {
    productName: "Turmeric & Sandal Face Cream",
    brandName: "Just Herbs",
    description: "Just Herbs Cream calms and purifies the skin naturally.",
  },
  {
    productName: "Ayurvedic Night Face Cream",
    brandName: "Kama Ayurveda",
    description: "Kama Ayurveda Night Cream with saffron for glowing skin.",
  },
  {
    productName: "Deep Moisturizing Cream",
    brandName: "Himalaya Men",
    description: "Himalaya Men Moisturizing Cream for hydration and strength.",
  },
  {
    productName: "Lemon Massage Face Cream",
    brandName: "Vaadi Herbals",
    description: "Vaadi Lemon Cream for oil-control and fresh skin texture.",
  },
  {
    productName: "Organic Glow Face Cream",
    brandName: "Organic Harvest",
    description: "Organic Harvest Glow Cream for radiant, healthy skin.",
  },
  {
    productName: "Radiant Skin Massage Cream",
    brandName: "Khadi Essentials",
    description: "Khadi Essentials Cream for glowing and refreshed skin.",
  },
  {
    productName: "Milk Protein Massage Cream",
    brandName: "Astaberry",
    description: "Astaberry Milk Cream repairs dry skin and provides glow.",
  },
  {
    productName: "Matte Finish Day Cream",
    brandName: "mCaffeine",
    description: "mCaffeine Matte Cream energizes and brightens oily skin.",
  },
];
const eyeMakeupProducts = [
  {
    productName: "Maybelline Colossal Kajal",
    brandName: "Maybelline",
    description:
      "Maybelline's waterproof Colossal Kajal for 24-hour smudge-proof wear.",
  },
  {
    productName: "Lakmé Eyeconic Kajal",
    brandName: "Lakmé",
    description:
      "Lakmé's Eyeconic Kajal delivers rich color and long-lasting definition.",
  },
  {
    productName: "L'Oréal Paris Super Liner Kajal",
    brandName: "L'Oréal Paris",
    description:
      "Deep black L'Oréal Paris kajal with intense pigmentation and smooth glide.",
  },
  {
    productName: "Faces Canada Magneteyes Kajal",
    brandName: "Faces Canada",
    description:
      "Magneteyes Kajal by Faces Canada offers bold color with a single stroke.",
  },
  {
    productName: "Plum NaturStudio All-Day-Wear Kajal",
    brandName: "Plum",
    description:
      "100% smudge-proof kajal with natural ingredients, safe for sensitive eyes.",
  },
  {
    productName: "Elle 18 Eye Drama Kajal",
    brandName: "Elle 18",
    description: "Bold and affordable kajal pencil ideal for everyday use.",
  },
  {
    productName: "Maybelline Lash Sensational Mascara",
    brandName: "Maybelline",
    description:
      "Maybelline mascara with fan effect brush for voluminous lashes.",
  },
  {
    productName: "Lakmé Eyeconic Curling Mascara",
    brandName: "Lakmé",
    description:
      "Smudge-resistant curling mascara for perfectly defined lashes.",
  },
  {
    productName: "L'Oréal Voluminous Lash Paradise Mascara",
    brandName: "L'Oréal Paris",
    description: "Soft bristle mascara with intense volume and length.",
  },
  {
    productName: "Colorbar Zoom & Whoosh Mascara",
    brandName: "Colorbar",
    description: "Dual-effect mascara with volume and separation modes.",
  },
  {
    productName: "Swiss Beauty Bold Eyes Kajal",
    brandName: "Swiss Beauty",
    description: "Smooth, bold kajal with all-day hold and rich color.",
  },
  {
    productName: "Blue Heaven Walk Free Kajal",
    brandName: "Blue Heaven",
    description:
      "Waterproof and smudge-resistant kajal for budget-conscious users.",
  },
  {
    productName: "Mamaearth Charcoal Black Long Stay Kajal",
    brandName: "Mamaearth",
    description:
      "Natural kajal with Vitamin C and Chamomile for sensitive eyes.",
  },
  {
    productName: "SUGAR Uptown Curl Mascara",
    brandName: "SUGAR Cosmetics",
    description:
      "Mascara that curls and defines lashes with rich black pigment.",
  },
  {
    productName: "Insight Cosmetics Mascara",
    brandName: "Insight",
    description:
      "Affordable mascara with long-stay formula and bold lash effect.",
  },
];
const hairAndSkinProducts = [
  {
    productName: "Eva Wild Flower Talc",
    brandName: "Eva",
    description:
      "Gentle talcum powder with wild flower fragrance for lasting freshness.",
  },
  {
    productName: "Spinz Exotic Talc",
    brandName: "Spinz",
    description:
      "Soft talc with exotic floral scent and sweat-absorbing formula.",
  },
  {
    productName: "Set Wet Cool Avatar Talc",
    brandName: "Set Wet",
    description: "Cool and masculine talc for men with anti-sweat properties.",
  },
  {
    productName: "Park Avenue Storm Talc",
    brandName: "Park Avenue",
    description:
      "Bold and energetic fragrance in a talc perfect for daily use.",
  },
  {
    productName: "Emami Golden Beauty Talc",
    brandName: "Emami",
    description:
      "Beauty-enhancing talc with golden shimmer and soft fragrance.",
  },
  {
    productName: "Denver Talcum Powder Hamilton",
    brandName: "Denver",
    description:
      "Classic masculine fragrance talc with long-lasting freshness.",
  },
  {
    productName: "Godrej Cinthol Confidence Talc",
    brandName: "Godrej",
    description: "Confidence-boosting talc with antibacterial properties.",
  },
  {
    productName: "Shahnaz Forever Sindoor Maroon",
    brandName: "Shahnaz Husain",
    description:
      "Premium sindoor made with herbal extracts for safe daily wear.",
  },
  {
    productName: "H&B Herbal Sindoor Stick",
    brandName: "Herbs & Beauty",
    description: "Long-lasting sindoor stick made from herbal ingredients.",
  },
  {
    productName: "Jovees Herbal Sindoor Red",
    brandName: "Jovees",
    description: "Red herbal sindoor enriched with sandalwood and turmeric.",
  },
  {
    productName: "Swiss Beauty Liquid Sindoor",
    brandName: "Swiss Beauty",
    description:
      "Smudge-proof, water-resistant sindoor with a quick-dry formula.",
  },
  {
    productName: "Sesa Ayurvedic Sindoor",
    brandName: "Sesa",
    description:
      "Ayurvedic sindoor enriched with traditional herbs for safe application.",
  },
  {
    productName: "Roop Mantra Rose Talc",
    brandName: "Roop Mantra",
    description:
      "Talc with rose and ayurvedic ingredients for smooth skin feel.",
  },
  {
    productName: "Khadi Natural Herbal Talc",
    brandName: "Khadi",
    description:
      "100% natural herbal talc with cooling and soothing properties.",
  },
  {
    productName: "Blue Heaven Waterproof Sindoor",
    brandName: "Blue Heaven",
    description: "Waterproof and long-lasting sindoor for modern Indian women.",
  },
];
const nailsProducts = [
  {
    productName: "Color Show Nail Lacquer – Red Carpet",
    brandName: "Maybelline",
    description:
      "Long-lasting nail lacquer in vibrant Red Carpet shade by Maybelline.",
  },
  {
    productName: "Colorbar Luxe Nail Enamel – Plum",
    brandName: "Colorbar",
    description:
      "Glossy plum nail enamel with chip-resistant formula by Colorbar.",
  },
  {
    productName: "Lakme True Wear – Berry Pink",
    brandName: "Lakme",
    description:
      "Classic berry pink nail color by Lakme for a perfect daily wear look.",
  },
  {
    productName: "Nykaa Matte Nail Enamel – Coral Crush",
    brandName: "Nykaa",
    description: "Matte finish coral nail paint from Nykaa's long-wear range.",
  },
  {
    productName: "Faces Canada Splash Nail Enamel – Azure Blue",
    brandName: "Faces Canada",
    description:
      "Splash of bold azure blue color from Faces Canada for vibrant nails.",
  },
  {
    productName: "Elle 18 Nail Pops – Mint Green",
    brandName: "Elle 18",
    description: "Trendy mint green nail pops for a playful and fresh look.",
  },
  {
    productName: "Revlon ColorStay Gel Envy – Wine",
    brandName: "Revlon",
    description:
      "Salon-quality wine-toned nail enamel with gel-like finish by Revlon.",
  },
  {
    productName: "SUGAR Tip Tac Toe – Lilac Lust",
    brandName: "SUGAR",
    description:
      "Lilac nail polish by SUGAR with quick-dry, chip-resistant technology.",
  },
  {
    productName: "Incolor Nail Lacquer – Golden Glow",
    brandName: "Incolor",
    description: "Golden shimmer nail polish from Incolor for festive sparkle.",
  },
  {
    productName: "Bella Voste Nail Paint – Mauve Magic",
    brandName: "Bella Voste",
    description:
      "Mauve Magic nail paint with high pigmentation and smooth application.",
  },
  {
    productName: "Miniso Fast Dry Nail Polish – Snow White",
    brandName: "Miniso",
    description:
      "Minimalist snow white nail polish from Miniso with fast-dry formula.",
  },
  {
    productName: "Swiss Beauty Nail Polish – Rose Gold",
    brandName: "Swiss Beauty",
    description: "Rose gold shimmer polish for elegant nails by Swiss Beauty.",
  },
  {
    productName: "Miss Claire Nail Enamel – Deep Sea",
    brandName: "Miss Claire",
    description: "Dark oceanic blue enamel with glossy finish by Miss Claire.",
  },
  {
    productName: "Blue Heaven Nail Polish – Neon Pink",
    brandName: "Blue Heaven",
    description:
      "Vivid neon pink nail polish with high-gloss shine by Blue Heaven.",
  },
  {
    productName: "Oriflame The One Nail Polish – Chocolate Brown",
    brandName: "Oriflame",
    description: "Deep chocolate brown polish with gel-like sheen by Oriflame.",
  },
  {
    productName: "Wet n Wild Wild Shine – Emerald Green",
    brandName: "Wet n Wild",
    description:
      "Shiny emerald green polish with long-lasting formula by Wet n Wild.",
  },
  {
    productName: "Avon Gel Finish Nail Enamel – Nude Peach",
    brandName: "Avon",
    description: "Salon-like nude peach finish in one coat by Avon.",
  },
  {
    productName: "MyGlamm LIT Nail Enamel – Sky Blue",
    brandName: "MyGlamm",
    description:
      "Sky blue, chip-resistant nail color from MyGlamm LIT Collection.",
  },
  {
    productName: "Insight Nail Enamel – Blackout",
    brandName: "Insight",
    description: "Bold blackout polish for high impact statement nails.",
  },
  {
    productName: "Lotus Ecostay Nail Enamel – Brick Red",
    brandName: "Lotus Herbals",
    description:
      "Eco-friendly, toxin-free nail polish in brick red from Lotus.",
  },
  {
    productName: "Juice Long Stay Nail Polish – Tangerine",
    brandName: "Juice",
    description: "Tangerine orange polish with long stay formula from Juice.",
  },
  {
    productName: "Chambor Gel Effect Nail Polish – French Beige",
    brandName: "Chambor",
    description: "Glossy beige shade from Chambor's gel-effect nail range.",
  },
  {
    productName: "Daily Life Forever52 Nail Polish – Lavender Dream",
    brandName: "Forever52",
    description:
      "Soft lavender nail color with creamy texture and smooth finish.",
  },
  {
    productName: "NY Bae Nail Lacquer – Burgundy Wine",
    brandName: "NY Bae",
    description: "Dark burgundy nail lacquer with intense pigment payoff.",
  },
  {
    productName: "Me Now Nail Enamel – Silver Sparkle",
    brandName: "Me Now",
    description: "Sparkling silver polish for party-ready nails by Me Now.",
  },
  {
    productName: "TS Nail Paint – Classic Nude",
    brandName: "TS",
    description: "Everyday nude polish with soft-glide application from TS.",
  },
  {
    productName: "O.P.I Nail Lacquer – Bubble Bath",
    brandName: "O.P.I",
    description: "World-favorite soft pink nail lacquer by O.P.I.",
  },
  {
    productName: "Essie Nail Polish – Aruba Blue",
    brandName: "Essie",
    description: "Essie's iconic shiny blue nail color for bold and fun look.",
  },
  {
    productName: "Deborah Milano Gel Effect – Cherry Red",
    brandName: "Deborah Milano",
    description: "Cherry red polish with professional gel-like gloss.",
  },
  {
    productName: "BeYu Nail Lacquer – Coral Peach",
    brandName: "BeYu",
    description: "Coral peach summer polish from BeYu with long-wear finish.",
  },
];

export {
  hairAndSkinProducts,
  OfficeSuppliesProducts,
  figProducts,
  pistachioProducts,
  peanutProducts,
  walnutProducts,
  raisinProducts,
  cashewNutsProducts,
  almondsProducts,
  foxNutsProducts,
  naturalSweetenersProducts,
  grainsPulsesProducts,
  spicesCondimentsProducts,
  sugarSaltProducts,
  cookingOilProducts,
  notebookProducts,
  writingInstrumentsProducts,
  faceCareProducts,
  accessoriesProducts,
  eyeMakeupProducts,
  nailsProducts,
};
