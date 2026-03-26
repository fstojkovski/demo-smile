const en = {
  nav: {
    menu: 'Menu',
    contact: 'Contact',
    orderNow: 'Order Now',
  },
  footer: {
    location: '— Skopje, Macedonia',
    copyright: '© {{year}} Smile Bakery. Made with love. 🧁',
  },
  hero: {
    badge: 'Skopje, Macedonia',
    title: 'Baked with love',
    titleAccent: 'served with a smile 😊',
    description:
      'Freshly made pastries, cream salads, sandwiches and pancakes — crafted daily in our cozy Skopje kitchen.',
    seeMenu: 'See Our Menu',
    orderNow: 'Order Now',
    pills: {
      pastries: '🥐 Pastries',
      creamSalads: '🥗 Cream Salads',
      sandwiches: '🥪 Sandwiches',
      pancakes: '🥞 Pancakes',
    },
  },
  menu: {
    sectionLabel: 'Our Menu',
    sectionTitle: 'Something for everyone',
    pastries: {
      label: 'Freshly Baked',
      title: 'Pastries',
      items: [
        { name: 'Homemade Crescent', desc: 'Handmade, delicious, and fluffy homemade crescent', price: 100, pricePerKg: true },
        { name: 'Cheese pie', desc: 'Crusty cheese pie filled with traditional white cheese', price: 100, pricePerKg: false },
        {
          name: 'Mini cheese pie',
          desc: 'The signature crusty cheese pie little brother, shaped as a triangle',
          price: 100,
          pricePerKg: false,
        },
        {
          name: 'Pogacha',
          desc: 'Traditional macedonian bread, usually prepared for orthodox holidays',
          price: 100,
          pricePerKg: false,
        },
      ],
    },
    creamSalads: {
      label: 'Homemade',
      title: 'Cream Salads',
      items: [
        { name: 'Ruska salad', desc: 'Potatoes, carrots, peas and mayo dressing', price: 100, pricePerKg: true },
        { name: 'Francuska salad', desc: 'Yogurt, cheese, ham and cucumbers', price: 100, pricePerKg: true },
        { name: 'Chicken salad', desc: 'Boiled chicken breast, mayo, pickles, yogurt', price: 100, pricePerKg: true },
      ],
    },
    sandwiches: {
      label: 'Build Your Own',
      title: 'Sandwiches',
      items: [
        {
          name: 'Classic Ham',
          desc: 'Homemade bun, Ham, Greek yogurt, Cheese, Tomato and Cucumber',
          price: 100,
        },
        {
          name: 'Classic Peperoni',
          desc: 'Homemade bun, Peperoni, Greek yogurt, Cheese, Tomato and Cucumber',
          price: 100,
        },
        {
          name: 'Classic Smoked Pork Ham',
          desc: 'Homemade bun, Smoked Pork, Greek yogurt, Cheese, Tomato and Cucumber',
          price: 100,
        },
        {
          name: 'Cream salad Sandwich',
          desc: 'Homemade bun filled with any of the cream salads',
          price: 100,
        },
        {
          name: 'Make your own sandwich',
          desc: 'Choose any ingredient to make your own sandwich with the best homemade buns',
          price: 100,
          hasCustomPrice: true,
        },
      ],
    },
    pancakes: {
      label: 'Sweet & Savoury',
      title: 'Pancakes',
      items: [
        {
          name: 'Makedonska Palachinka',
          desc: 'The classic balkan pancake filled with hazelnut cocoa cream and banana',
          price: 100,
        },
        {
          name: 'Piroshka with ham and cheese',
          desc: 'Deep-fried pancake filled with ham and cheese',
          price: 100,
        },
        {
          name: 'Piroshka with ruska salad',
          desc: 'Deep-fried pancake filled with Ruska salad',
          price: 100,
        },
        { name: 'Palachinka', desc: 'Or just get the pancakes and fill it however you like', price: 100 },
      ],
    },
  },
  contact: {
    sectionLabel: 'Find Us',
    sectionTitle: 'Visit or Order',
    sectionDesc: 'Come in, or call us to place your order ahead of time.',
    cardTitle: 'Contact Information',
    address: {
      label: 'Address',
      line1: 'Bozhidar Adzhia 3, lok. 8',
      line2: 'Skopje 1000, Macedonia',
    },
    phone: {
      label: 'Phone',
    },
    hours: {
      label: 'Working Hours',
      weekdays: 'Mon – Fri: 08:00 – 16:00',
      saturday: 'Saturday: 08:00 – 13:00',
      sunday: 'Sunday: Closed',
    },
    social: {
      follow: 'Follow us',
    },
  },
  about: {
    kicker: 'About Us',
    title: 'Where tradition meets family warmth.',
    story: {
      heading: 'Our Story',
      p1: 'What started as a dream in 2007 has grown into a neighborhood staple. After years of honing their craft in some of Skopje\'s most beloved bakeries, the founders of Smile set out to build something of their own — a place where professional expertise meets cherished family recipes passed down through generations.',
      p2: 'Our signature Homemade Crescents have remained unchanged since day one. Every single batch is shaped by the same hands that started it all — the owner herself — ensuring the taste and quality you love never wavers.',
    },
    people: {
      heading: 'The People Behind Smile',
      description: 'Smile is run by Sonja Stojkovska and her husband Zoran Stojkovski. Together, they are behind the counter every day, greeting regulars by name, and putting genuine care into everything they serve. It\'s this personal touch that makes Smile more than just a bakery.',
    },
    quality: {
      heading: 'Quality You Can Taste',
      p1: 'We source our core ingredients — flour, eggs, and more — from trusted local producers. No shortcuts, no compromises, just honest food made with real ingredients.',
      p2: 'Everything on our shelves is baked fresh that morning. If it wasn\'t made today, we don\'t serve it. That\'s a promise we\'ve kept since opening our doors.',
    },
    notice: {
      heading: 'A Friendly Note',
      description: 'During holidays and peak seasons our small kitchen runs at full capacity, and we occasionally sell out earlier than usual. To make sure you get exactly what you\'re craving, we recommend placing your order ahead of time. We\'d hate for you to leave empty-handed!',
    },
  },
  misc: {
    photoComingSoon: 'Photo coming soon',
  },
} as const

export default en
