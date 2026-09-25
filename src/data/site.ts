// ---------------------------------------------------------------
// All site content lives here. Replace the placeholder brand,
// contact details and copy with your own.
// ---------------------------------------------------------------

export const brand = {
  name: "Central Vendings",
  short: "Central Vendings",
  phone: "(555) 010-2040",
  phoneHref: "tel:+15550102040",
  email: "hello@example.com",
  area: "Your City & Surrounding Region",
  founded: 2012,
};

export type ServiceSlug = "vending" | "coffee" | "water-cooler-rental";

export const services: {
  slug: ServiceSlug;
  title: string;
  short: string;
  body: string;
  points: string[];
  art: "vending" | "coffee" | "water";
}[] = [
  {
    slug: "vending",
    title: "Vending machines",
    short:
      "Snack and drink machines with card and tap payments, stocked on a schedule that fits your building's traffic.",
    body: "We place, fill and look after snack, drink and combo machines. You pick the product mix, we track what sells and adjust the stock so the machines stay full of things people actually buy.",
    points: [
      "Card, tap and mobile payments",
      "Healthy and name-brand product mixes",
      "Restocking based on real sales data",
      "Repairs handled by our own technicians",
    ],
    art: "vending",
  },
  {
    slug: "coffee",
    title: "Office coffee",
    short:
      "Brewers, beans and supplies delivered on a regular route, so the break room never runs out mid-morning.",
    body: "Choose single-cup brewers, bean-to-cup machines or batch brewers. We deliver beans, cups, milk alternatives and sweeteners on a set route and descale the machines while we're there.",
    points: [
      "Single-cup and bean-to-cup brewers",
      "Local and fair-trade roasts",
      "Supplies delivered on a set route",
      "Cleaning and descaling included",
    ],
    art: "coffee",
  },
  {
    slug: "water-cooler-rental",
    title: "Water cooler rental",
    short:
      "Bottled or plumbed-in coolers with hot and cold taps, installed and sanitised by our team.",
    body: "Rent bottled or bottle-free coolers with hot and cold water. We install them, swap bottles on schedule and sanitise every unit so your team always has clean, chilled water.",
    points: [
      "Bottled and bottle-free units",
      "Hot and cold water taps",
      "Scheduled sanitising",
      "Flexible monthly rental",
    ],
    art: "water",
  },
];

export const steps = [
  {
    title: "Tell us about your space",
    body: "Call or send the form. We'll ask about headcount, hours and floor space, then suggest the right equipment.",
  },
  {
    title: "We install everything",
    body: "We deliver, set up and stock the machines, and agree a restocking schedule that suits your building.",
  },
  {
    title: "We keep it running",
    body: "Restocking, cleaning and repairs are on us. You only call if you want to change the product mix.",
  },
];

export const testimonials = [
  {
    name: "Priya K.",
    role: "Office Manager",
    quote:
      "The machines are always full and the one time a card reader failed, it was fixed the next morning.",
  },
  {
    name: "Tom R.",
    role: "Property Manager",
    quote:
      "Residents use the lobby machines every day and I haven't had to think about restocking once.",
  },
  {
    name: "Amélie B.",
    role: "Facilities Lead",
    quote:
      "Setup was quick and the coffee is a real step up from what we had. Staff noticed on day one.",
  },
];

export const aboutPoints = [
  {
    title: "Locally owned",
    body: "We live and work in the region, so our technicians are never far from your building.",
  },
  {
    title: "We handle the upkeep",
    body: "Stocking, deliveries, cleaning and repairs are all included in the service.",
  },
  {
    title: "Products people want",
    body: "Name-brand snacks, healthier options, good coffee and filtered water.",
  },
];

export const faqs = [
  {
    q: "Which areas do you serve?",
    a: "We cover the city and surrounding towns within roughly 50 km. If you're just outside that, ask anyway.",
  },
  {
    q: "How long does installation take?",
    a: "Most installs are done within two to three weeks of signing, including delivery, setup and the first full stock.",
  },
  {
    q: "Can I rent instead of buying?",
    a: "Yes. Every machine is available to rent or buy, and we'll help you work out which costs less for your usage.",
  },
  {
    q: "Do you repair machines you didn't supply?",
    a: "Yes. We service and upgrade most major vending, coffee and cooler brands.",
  },
];

export const nav = [
  { label: "About", href: "/#about" },
  { label: "How it works", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
];
