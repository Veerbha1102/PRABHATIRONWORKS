export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "decorticator" | "thresher" | "separator";
  categoryLabel: string;
  image: string;
  altImage?: string;
  description: string;
  shortDescription: string;
  specifications: ProductSpec[];
  features: string[];
  priceRange: string;
  minOrderQty: string;
  deliveryTime: string;
}

export const categories = [
  { id: "all", label: "All Products" },
  { id: "decorticator", label: "Decorticators" },
  { id: "thresher", label: "Threshers" },
  { id: "separator", label: "Separators" },
] as const;

export const products: Product[] = [
  {
    id: "groundnut-decorticator",
    name: "Groundnut Decorticator",
    slug: "groundnut-decorticator",
    category: "decorticator",
    categoryLabel: "Decorticator",
    image: "/images/products/groundnut-decorticator.webp",
    description:
      "Heavy-duty Groundnut Decorticator designed for efficient shelling of groundnuts with minimal kernel breakage. Built with a robust mild steel body, this machine features precision-engineered rollers and adjustable clearance settings for different groundnut sizes. Ideal for medium to large-scale processing units, it ensures high throughput while maintaining excellent kernel quality.",
    shortDescription:
      "High-capacity groundnut shelling machine with minimal kernel breakage and adjustable clearance settings.",
    specifications: [
      { label: "Capacity", value: "100 kg/hr" },
      { label: "Power Required", value: "5 HP Electric Motor" },
      { label: "Body Material", value: "Mild Steel (MS)" },
      { label: "Drive System", value: "Belt & Pulley Driven" },
      { label: "Shelling Efficiency", value: "95-98%" },
      { label: "Kernel Breakage", value: "< 3%" },
      { label: "Weight", value: "~180 kg" },
      { label: "Dimensions (LxWxH)", value: "1200 x 800 x 1400 mm" },
      { label: "Voltage", value: "220V / 440V" },
      { label: "Usage", value: "Commercial / Industrial" },
    ],
    features: [
      "Precision-engineered concave & cylinder design",
      "Adjustable gap for different groundnut varieties",
      "Low kernel breakage rate (< 3%)",
      "Heavy-duty MS body for long life",
      "Easy maintenance & cleaning",
      "Built-in aspiration system for shell separation",
      "Suitable for Bold, Java, and Runner varieties",
    ],
    priceRange: "₹55,000 – ₹85,000",
    minOrderQty: "1 Piece",
    deliveryTime: "7-10 Business Days",
  },
  {
    id: "almond-decorticator",
    name: "Almond Decorticator",
    slug: "almond-decorticator",
    category: "decorticator",
    categoryLabel: "Decorticator",
    image: "/images/products/almond-decorticator.webp",
    description:
      "Specially designed Almond Decorticator featuring a rotating drum mechanism for gentle yet effective almond shell cracking. The machine preserves kernel integrity while achieving high throughput. Constructed with premium mild steel and precision bearings, it is engineered for continuous operation in commercial processing plants.",
    shortDescription:
      "Gentle drum-type almond shelling machine that preserves kernel integrity for commercial processing.",
    specifications: [
      { label: "Capacity", value: "50 kg/hr" },
      { label: "Power Required", value: "3 HP Electric Motor" },
      { label: "Body Material", value: "Mild Steel (MS)" },
      { label: "Drive System", value: "Gear Driven" },
      { label: "Shelling Efficiency", value: "92-96%" },
      { label: "Kernel Integrity", value: "> 95%" },
      { label: "Weight", value: "~150 kg" },
      { label: "Dimensions (LxWxH)", value: "1000 x 700 x 1200 mm" },
      { label: "Voltage", value: "220V Single Phase" },
      { label: "Usage", value: "Commercial / Small Scale" },
    ],
    features: [
      "Rotating drum mechanism for gentle cracking",
      "Adjustable pressure settings for different almond sizes",
      "High kernel preservation rate (> 95%)",
      "Low power consumption",
      "Compact footprint for small spaces",
      "Easy feed hopper with flow control",
      "Minimal vibration during operation",
    ],
    priceRange: "₹45,000 – ₹65,000",
    minOrderQty: "1 Piece",
    deliveryTime: "7-10 Business Days",
  },
  {
    id: "groundnut-thresher",
    name: "Groundnut Thresher Machine",
    slug: "groundnut-thresher",
    category: "thresher",
    categoryLabel: "Thresher",
    image: "/images/products/groundnut-thresher.webp",
    altImage: "/images/products/groundnut-thresher-alt.webp",
    description:
      "Industrial-grade Groundnut Thresher Machine engineered for rapid separation of groundnut pods from vines. This high-capacity machine features a multi-fan cleaning system and a heavy-duty MS + Cast Iron frame for durability in demanding field conditions. The tractor-mountable design ensures mobility across farm locations.",
    shortDescription:
      "Industrial mobile groundnut thresher with multi-fan cleaning system and tractor-mountable design.",
    specifications: [
      { label: "Capacity", value: "500 kg/hr" },
      { label: "Power Required", value: "10 HP (Tractor PTO / Motor)" },
      { label: "Body Material", value: "MS + Cast Iron Frame" },
      { label: "Drive System", value: "PTO / Belt Driven" },
      { label: "Cleaning Fans", value: "3 Stage" },
      { label: "Threshing Efficiency", value: "97-99%" },
      { label: "Weight", value: "~550 kg" },
      { label: "Dimensions (LxWxH)", value: "2400 x 1200 x 1800 mm" },
      { label: "Mobility", value: "Tractor Mountable / Wheeled" },
      { label: "Usage", value: "Farm / Industrial" },
    ],
    features: [
      "High-speed threshing cylinder with rasp bars",
      "3-stage cleaning fan system for clean output",
      "Tractor PTO compatible for field operation",
      "Heavy-duty wheeled chassis for mobility",
      "Large-capacity feed hopper",
      "Adjustable concave clearance",
      "Separate outlets for pods, vines, and debris",
      "Suitable for wet & dry groundnut vines",
    ],
    priceRange: "₹95,000 – ₹1,45,000",
    minOrderQty: "1 Piece",
    deliveryTime: "10-15 Business Days",
  },
  {
    id: "paddy-thresher",
    name: "Paddy Thresher (5-Fan)",
    slug: "paddy-thresher",
    category: "thresher",
    categoryLabel: "Thresher",
    image: "/images/products/paddy-thresher.webp",
    description:
      "Premium 5-Fan Paddy Thresher designed for efficient rice paddy threshing with multi-stage grain cleaning. The five-fan system ensures thorough separation of grain from chaff, straw, and dust. Built on a robust wheeled chassis for easy field transportation, this machine is the preferred choice for rice farmers across Gujarat.",
    shortDescription:
      "Premium 5-fan paddy thresher with multi-stage cleaning for thorough grain-chaff separation.",
    specifications: [
      { label: "Capacity", value: "400 kg/hr" },
      { label: "Power Required", value: "10 HP Electric Motor / Tractor" },
      { label: "Body Material", value: "Mild Steel (MS) Body" },
      { label: "Number of Fans", value: "5 (Multi-Stage)" },
      { label: "Drive System", value: "Belt & Gear Driven" },
      { label: "Threshing Efficiency", value: "98-99%" },
      { label: "Weight", value: "~480 kg" },
      { label: "Dimensions (LxWxH)", value: "2200 x 1100 x 1600 mm" },
      { label: "Mobility", value: "Wheeled Chassis" },
      { label: "Usage", value: "Farm / Commercial" },
    ],
    features: [
      "5-fan multi-stage cleaning for superior grain quality",
      "High-speed threshing drum with spike teeth",
      "Wheeled chassis for easy field transportation",
      "Adjustable fan speed for different paddy varieties",
      "Low grain loss rate (< 1%)",
      "Large straw discharge outlet",
      "Compatible with Basmati, Sona Masuri, IR-36 varieties",
      "Rust-resistant epoxy-coated body",
    ],
    priceRange: "₹85,000 – ₹1,25,000",
    minOrderQty: "1 Piece",
    deliveryTime: "10-15 Business Days",
  },
  {
    id: "multi-crop-thresher",
    name: "Multi-Crop Thresher",
    slug: "multi-crop-thresher",
    category: "thresher",
    categoryLabel: "Thresher",
    image: "/images/products/multi-crop-thresher.webp",
    description:
      "Versatile Multi-Crop Thresher capable of processing wheat, paddy, soybean, sunflower, and other grain crops. This heavy-duty machine features interchangeable concaves and adjustable settings, making it the ultimate all-season investment for farmers handling multiple crop types throughout the year.",
    shortDescription:
      "Versatile all-season thresher for wheat, paddy, soybean, and sunflower with interchangeable concaves.",
    specifications: [
      { label: "Capacity", value: "600 kg/hr" },
      { label: "Power Required", value: "15 HP Motor / Tractor PTO" },
      { label: "Body Material", value: "Heavy-Duty MS" },
      { label: "Compatible Crops", value: "Wheat, Paddy, Soybean, Sunflower" },
      { label: "Drive System", value: "PTO / Belt Driven" },
      { label: "Cleaning System", value: "Multi-Fan + Sieve" },
      { label: "Weight", value: "~680 kg" },
      { label: "Dimensions (LxWxH)", value: "2800 x 1400 x 2000 mm" },
      { label: "Mobility", value: "Tractor Towable" },
      { label: "Usage", value: "Heavy Commercial / Farm" },
    ],
    features: [
      "Interchangeable concaves for different crops",
      "All-season versatility — one machine, multiple crops",
      "Multi-fan + sieve cleaning system",
      "15 HP heavy-duty motor compatible",
      "Tractor PTO and standalone electric operation",
      "Extra-large feed opening for bulk loading",
      "Robust frame for continuous heavy-duty use",
      "Separate grain, straw, and chaff outlets",
    ],
    priceRange: "₹1,10,000 – ₹1,65,000",
    minOrderQty: "1 Piece",
    deliveryTime: "15-20 Business Days",
  },
  {
    id: "garlic-separator",
    name: "Garlic Separator Machine",
    slug: "garlic-separator",
    category: "separator",
    categoryLabel: "Separator",
    image: "/images/products/garlic-separator.webp",
    description:
      "Efficient Garlic Separator Machine designed for quick separation of garlic cloves from bulbs without damaging the skin. Featuring a gentle rubberized separation mechanism and stainless steel contact surfaces, this machine is ideal for food-grade processing. Compact and easy to operate, it is perfect for spice processing units and commercial kitchens.",
    shortDescription:
      "Gentle garlic clove separator with food-grade SS contact surfaces for commercial processing.",
    specifications: [
      { label: "Capacity", value: "200 kg/hr" },
      { label: "Power Required", value: "3 HP Electric Motor" },
      { label: "Body Material", value: "SS + MS Hybrid" },
      { label: "Contact Surface", value: "Stainless Steel (Food Grade)" },
      { label: "Drive System", value: "Direct Drive Motor" },
      { label: "Separation Rate", value: "95%+" },
      { label: "Weight", value: "~100 kg" },
      { label: "Dimensions (LxWxH)", value: "800 x 600 x 1000 mm" },
      { label: "Voltage", value: "220V Single Phase" },
      { label: "Usage", value: "Commercial / Food Processing" },
    ],
    features: [
      "Rubberized separation for zero clove damage",
      "Food-grade stainless steel contact surfaces",
      "Compact design for small spaces",
      "Low power consumption (3 HP)",
      "Easy disassembly for cleaning",
      "Adjustable speed for different garlic sizes",
      "Suitable for both fresh and dry garlic",
      "Single-phase power — no 3-phase needed",
    ],
    priceRange: "₹35,000 – ₹55,000",
    minOrderQty: "1 Piece",
    deliveryTime: "5-7 Business Days",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
