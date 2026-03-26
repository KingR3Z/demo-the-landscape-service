export const client = {
  // Business Details
  name: "The Landscape Service",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Southampton.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "023 8198 0022",
  email: "",
  website: "",

  // Location
  address: "Southampton",
  city: "Southampton",
  county: "",
  postcode: "",
  basedIn: "Southampton",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Alex P", rating: 5, text: "Excellent experience.  Purchased an old / period property in 2023; the large garden was overgrown and very messy.  Through several meetings, Jordan completely redesigned the the space, modernising, but with careful thought about synergy with the period nature of the property.  The design service then involves thoughtful selection of all materials and planting, which have been a huge success.  Overall result has been excellent; completely transforming the feel of the property in a very positive way.", date: "a month ago" },
    { name: "Rob Westhead", rating: 5, text: "Luke and his team are always the first call I make for any garden design requirements I may have, either for my own business or on behalf of clients. His knowledge, experienced team and easy to deal with attitude make the whole process easy and cost-effective from start to finish. Highly recommended.", date: "a month ago", badge: "Local Guide" },
    { name: "John Roberts", rating: 5, text: "Great work building Fabulous gardens.", date: "3 years ago", badge: "Local Guide" },
    { name: "Allan thompson", rating: 5, text: "Very impressed.  The Landscape Service are ultra reliable.  Understood exactly what we wanted.  Service is prompt and on budget.  Highly recommended.", date: "5 years ago" },
    { name: "Garry Packer", rating: 5, text: "Luke was very good on helping us to see the potential for the redesign of our garden, including the new patio we needed to replace our existing and crumbling old one. He quickly came up with the very professional designs, gave advice on planting and was available for any questions we had about the project when it was being worked upon.", date: "5 years ago" },
    { name: "AXT", rating: 5, text: "We can always rely on the Landscape Service.  Luke is professional and extremely organised.  I would not hesitate to recommend the landscape service.  Luke carefully considers requirements and creates designs that completely suit the customer.   A unique service that is head and shoulders above the rest.", date: "5 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "The Landscape Service | Landscaper in Southampton",
    description: "Professional landscaper in Southampton. 5.0-star rated on Google. Call for a free quote.",
  },
};
