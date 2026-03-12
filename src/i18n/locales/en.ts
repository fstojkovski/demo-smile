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
        { name: 'Homemade Crescent', desc: 'Handmade, delicious, and fluffy homemade crescent' },
        { name: 'Cheese pie', desc: 'Crusty cheese pie filled with traditional white cheese' },
        {
          name: 'Mini cheese pie',
          desc: 'The signature crusty cheese pie little brother, shaped as a triangle',
        },
        {
          name: 'Pogacha',
          desc: 'Traditional macedonian bread, usually prepared for orthodox holidays',
        },
      ],
    },
    creamSalads: {
      label: 'Homemade',
      title: 'Cream Salads',
      items: [
        { name: 'Ruska salad', desc: 'Potatoes, carrots, peas and mayo dressing' },
        { name: 'Francuska salad', desc: 'Yogurt, cheese, ham and cucumbers' },
        { name: 'Chicken salad', desc: 'Boiled chicken breast, mayo, pickles, yogurt' },
      ],
    },
    sandwiches: {
      label: 'Build Your Own',
      title: 'Sandwiches',
      items: [
        {
          name: 'Classic Ham',
          desc: 'Homemade bun, Ham, Greek yogurt, Cheese, Tomato and Cucumber',
        },
        {
          name: 'Classic Peperoni',
          desc: 'Homemade bun, Peperoni, Greek yogurt, Cheese, Tomato and Cucumber',
        },
        {
          name: 'Classic Smoked Pork Ham',
          desc: 'Homemade bun, Smoked Pork, Greek yogurt, Cheese, Tomato and Cucumber',
        },
        {
          name: 'Cream salad Sandwich',
          desc: 'Homemade bun filled with any of the cream salads',
        },
        {
          name: 'Make your own sandwich',
          desc: 'Choose any ingredient to make your own sandwich with the best homemade buns',
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
        },
        {
          name: 'Piroshka with ham and cheese',
          desc: 'Deep-fried pancake filled with ham and cheese',
        },
        {
          name: 'Piroshka with ruska salad',
          desc: 'Deep-fried pancake filled with Ruska salad',
        },
        { name: 'Palachinka', desc: 'Or just get the pancakes and fill it however you like' },
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
    kicker: 'About',
    title: 'A small starter with room to grow.',
    description:
      'TanStack Start gives you type-safe routing, server functions, and modern SSR defaults. Use this as a clean foundation, then layer in your own routes, styling, and add-ons.',
  },
  misc: {
    photoComingSoon: 'Photo coming soon',
  },
} as const

export default en
