// Product data — 80+ realistic products across 10 categories
// Images sourced from Unsplash

export const categories = [
  { id: 'shoes', name: 'Shoes', icon: 'Footprints', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80' },
  { id: 'headphones', name: 'Headphones', icon: 'Headphones', image: 'https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 'laptop', name: 'Laptops', icon: 'Laptop', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80' },
  { id: 'phone', name: 'Phones', icon: 'Smartphone', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80' },
  { id: 'watch', name: 'Watches', icon: 'Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80' },
  { id: 'gaming', name: 'Gaming', icon: 'Gamepad2', image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&q=80' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80' },
  { id: 'accessories', name: 'Accessories', icon: 'Briefcase', image: 'https://images.unsplash.com/photo-1620783770629-122b7f187703?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'camera', name: 'Cameras', icon: 'Camera', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80' },
  { id: 'smarthome', name: 'Smart Home', icon: 'House', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80' },
]

const img = (url) => `${url}?w=900&q=80&auto=format&fit=crop`

export const products = [
  // ===== SHOES (9) =====
  { id: 1, name: 'Aero Runner Pro', category: 'shoes', brand: 'Velocity', price: 189, oldPrice: 249, rating: 4.8, reviews: 342, badge: 'Best Seller', stock: 12,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff', 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdbaf3', 'https://images.unsplash.com/photo-1539185441755-769473a23574'],
    description: 'Engineered for speed and comfort. Featherlight knit upper with responsive carbon-plate cushioning.', features: ['Carbon fiber plate', 'Breathable knit mesh', 'Responsive foam midsole', 'Rubber traction outsole'] },
  { id: 2, name: 'Stealth Court Low', category: 'shoes', brand: 'Velocity', price: 149, oldPrice: 199, rating: 4.6, reviews: 218, badge: 'Sale', stock: 20,
    images: ['https://images.unsplash.com/photo-1606107557493-2e1e4511867c', 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2', 'https://images.unsplash.com/photo-1525966222134-fcfa9948d333'],
    description: 'Premium leather low-top with court-ready grip and minimalist silhouette.', features: ['Full-grain leather', 'Memory foam insole', 'Vulcanized rubber sole', 'Padded collar'] },
  { id: 3, name: 'Trail Blazer GTX', category: 'shoes', brand: 'Summit', price: 219, oldPrice: null, rating: 4.9, reviews: 156, badge: 'New', stock: 8,
    images: ['https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: 'Waterproof trail shoe with aggressive lug pattern for any terrain.', features: ['Gore-Tex membrane', 'Aggressive 5mm lugs', 'Rock plate protection', 'Quick-lace system'] },
  { id: 4, name: 'Urban Slip-On', category: 'shoes', brand: 'Metro', price: 119, oldPrice: 159, rating: 4.4, reviews: 89, badge: 'Sale', stock: 30,
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa9948d333', 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2', 'https://images.unsplash.com/photo-1606107557493-2e1e4511867c'],
    description: 'Effortless slip-on design with stretch-knit construction for all-day comfort.', features: ['Stretch-knit upper', 'No-tie design', 'Cushioned footbed', 'Flexible outsole'] },
  { id: 5, name: 'Phantom High-Top', category: 'shoes', brand: 'Velocity', price: 179, oldPrice: 229, rating: 4.7, reviews: 274, badge: 'Best Seller', stock: 15,
    images: ['https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: 'Bold high-top silhouette with premium suede overlays and ankle support.', features: ['Premium suede', 'Ankle support collar', 'Cushioned heel', 'Durable rubber cup sole'] },
  { id: 6, name: 'Velocity Sprint X', category: 'shoes', brand: 'Velocity', price: 209, oldPrice: 269, rating: 4.8, reviews: 198, badge: 'Sale', stock: 10,
    images: ['https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdbaf3'],
    description: 'Race-day ready sprint shoe with ultralight foam and propulsion plate.', features: ['Ultralight foam', 'Propulsion plate', 'Mesh upper', 'Race-tuned outsole'] },
  { id: 7, name: 'Heritage Leather', category: 'shoes', brand: 'Metro', price: 259, oldPrice: null, rating: 4.9, reviews: 112, badge: 'Premium', stock: 6,
    images: ['https://plus.unsplash.com/premium_photo-1673367751802-ed858d3950d2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: 'Handcrafted full-grain leather shoe with Goodyear-welted construction.', features: ['Full-grain leather', 'Goodyear welt', 'Leather lining', 'Resoleable design'] },
  { id: 8, name: 'Retro Runner', category: 'shoes', brand: 'Summit', price: 139, oldPrice: 179, rating: 4.5, reviews: 167, badge: 'Sale', stock: 25,
    images: ['https://images.unsplash.com/photo-1539185441755-769473a23574', 'https://images.unsplash.com/photo-1605348532760-6753d2c43329', 'https://images.unsplash.com/photo-1544966503-ff66c61607c6'],
    description: 'Throwback runner silhouette with modern comfort technology.', features: ['Suede and nylon', 'EVA midsole', 'Rubber outsole', 'Padded tongue'] },
  { id: 9, name: 'Minimal Canvas', category: 'shoes', brand: 'Metro', price: 89, oldPrice: 119, rating: 4.3, reviews: 312, badge: 'Sale', stock: 40,
    images: ['https://images.unsplash.com/photo-1549298916-b93d53655f6d', 'https://images.unsplash.com/photo-1525966222134-fcfa9948d333', 'https://images.unsplash.com/photo-1614252369475-5b56e4ebc4e2'],
    description: 'Clean canvas low-top with vulcanized sole for everyday wear.', features: ['Canvas upper', 'Vulcanized sole', 'Cushioned insole', 'Metal eyelets'] },

  // ===== HEADPHONES (8) =====
  { id: 10, name: 'Aura Studio Pro', category: 'headphones', brand: 'Soundwave', price: 349, oldPrice: 449, rating: 4.9, reviews: 521, badge: 'Best Seller', stock: 14,
    images: ['https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D'],
    description: 'Reference-grade over-ear headphones with adaptive noise cancellation.', features: ['Adaptive ANC', '40mm beryllium drivers', '40h battery', 'Hi-Res certified'] },
  { id: 11, name: 'Pulse Wireless', category: 'headphones', brand: 'Soundwave', price: 229, oldPrice: 299, rating: 4.7, reviews: 389, badge: 'Sale', stock: 22,
    images: ['https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    description: 'Wireless freedom with premium sound and all-day comfort.', features: ['Bluetooth 5.3', 'Multipoint pairing', '30h battery', 'USB-C fast charge'] },
  { id: 12, name: 'Echo Buds Pro', category: 'headphones', brand: 'Nova', price: 199, oldPrice: 249, rating: 4.6, reviews: 612, badge: 'Sale', stock: 35,
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a815', 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46', 'https://images.unsplash.com/photo-1572569517546-931f4d4b56db'],
    description: 'True wireless earbuds with active noise cancellation and spatial audio.', features: ['Active noise cancellation', 'Spatial audio', '8h + 24h battery', 'IPX4 sweat resistant'] },
  { id: 13, name: 'Studio Monitor X', category: 'headphones', brand: 'Soundwave', price: 399, oldPrice: null, rating: 4.8, reviews: 178, badge: 'Premium', stock: 7,
    images: ['https://plus.unsplash.com/premium_photo-1674817241270-c5bd09d510b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGlvJTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D'],
    description: 'Professional studio monitor headphones with flat frequency response.', features: ['Flat response', 'Detachable cable', 'Velour earpads', 'Foldable design'] },
  { id: 14, name: 'Aero Sport Buds', category: 'headphones', brand: 'Nova', price: 129, oldPrice: 169, rating: 4.4, reviews: 445, badge: 'Sale', stock: 50,
    images: ['https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46', 'https://images.unsplash.com/photo-1590658268037-6bf12165a815', 'https://images.unsplash.com/photo-1572569517546-931f4d4b56db'],
    description: 'Secure-fit sport earbuds with hooks and sweat protection.', features: ['Ear hooks', 'IPX5 rating', '10h battery', 'Ambient mode'] },
  { id: 15, name: 'Heritage Over-Ear', category: 'headphones', brand: 'Soundwave', price: 279, oldPrice: 349, rating: 4.7, reviews: 234, badge: 'Sale', stock: 18,
    images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b', 'https://images.unsplash.com/photo-1583394838346-d0cec194fdb1', 'https://images.unsplash.com/photo-1505740420928-5e560c066a2e'],
    description: 'Premium leather and aluminum build with warm, rich sound signature.', features: ['Leather earcups', 'Aluminum frame', 'Wired/wireless', '30h battery'] },
  { id: 16, name: 'QuietPro ANC', category: 'headphones', brand: 'Nova', price: 299, oldPrice: 379, rating: 4.8, reviews: 298, badge: 'Best Seller', stock: 11,
    images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b', 'https://images.unsplash.com/photo-1590658268037-6bf12165a815', 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46'],
    description: 'Industry-leading noise cancellation for travel and focus.', features: ['Hybrid ANC', 'Transparency mode', '35h battery', 'Travel case included'] },
  { id: 17, name: 'Bass Cannon XL', category: 'headphones', brand: 'Soundwave', price: 159, oldPrice: 209, rating: 4.5, reviews: 367, badge: 'Sale', stock: 28,
    images: ['https://images.unsplash.com/photo-1545125393-52b95e9e4d9d', 'https://images.unsplash.com/photo-1572569517546-931f4d4b56db', 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46'],
    description: 'Deep bass tuned headphones with RGB accent lighting.', features: ['Enhanced bass', 'RGB lighting', '20h battery', 'Detachable mic'] },

  // ===== LAPTOPS (8) =====
  { id: 18, name: 'ZenBook Pro 16', category: 'laptop', brand: 'Apex', price: 1899, oldPrice: 2199, rating: 4.9, reviews: 156, badge: 'Best Seller', stock: 5,
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853', 'https://images.unsplash.com/photo-1517336714734-599c5d4b1e8e', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9'],
    description: '16-inch creator laptop with OLED display and dedicated GPU.', features: ['16" OLED 4K', '32GB RAM', '1TB SSD', 'RTX 4070 GPU'] },
  { id: 19, name: 'AirLite 13', category: 'laptop', brand: 'Apex', price: 1099, oldPrice: 1299, rating: 4.8, reviews: 289, badge: 'Sale', stock: 12,
    images: ['https://images.unsplash.com/photo-1517336714734-599c5d4b1e8e', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9'],
    description: 'Ultralight 13-inch laptop with all-day battery life.', features: ['13" Retina', '16GB RAM', '512GB SSD', '18h battery'] },
  { id: 20, name: 'Gaming Titan X', category: 'laptop', brand: 'Vortex', price: 2299, oldPrice: 2599, rating: 4.7, reviews: 134, badge: 'Sale', stock: 4,
    images: ['https://images.unsplash.com/photo-1603304416467-53a98e1f1d0b', 'https://images.unsplash.com/photo-1593305841991-e5f8d80b2f1c', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9'],
    description: '17-inch gaming powerhouse with 240Hz display and RTX graphics.', features: ['17" 240Hz', '32GB DDR5', '2TB SSD', 'RTX 4080'] },
  { id: 21, name: 'ProBook 14', category: 'laptop', brand: 'Apex', price: 899, oldPrice: 1099, rating: 4.6, reviews: 198, badge: 'Sale', stock: 16,
    images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853', 'https://images.unsplash.com/photo-1517336714734-599c5d4b1e8e'],
    description: 'Business-class 14-inch laptop with premium build quality.', features: ['14" IPS', '16GB RAM', '512GB SSD', 'Backlit keyboard'] },
  { id: 22, name: 'Creator Studio 15', category: 'laptop', brand: 'Apex', price: 1599, oldPrice: null, rating: 4.8, reviews: 87, badge: 'New', stock: 8,
    images: ['https://plus.unsplash.com/premium_photo-1681566925305-e7827f95c717?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwY3JlYXRlciUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D'],
    description: 'Color-accurate display for professional content creators.', features: ['15" 4K HDR', '32GB RAM', '1TB SSD', 'Color calibrated'] },
  { id: 23, name: 'UltraBook Slim', category: 'laptop', brand: 'Apex', price: 799, oldPrice: 999, rating: 4.5, reviews: 312, badge: 'Sale', stock: 20,
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9', 'https://images.unsplash.com/photo-1517336714734-599c5d4b1e8e'],
    description: 'Thin and light everyday laptop with great value.', features: ['14" FHD', '8GB RAM', '256GB SSD', '12h battery'] },
  { id: 24, name: 'Workstation Pro', category: 'laptop', brand: 'Vortex', price: 2799, oldPrice: null, rating: 4.9, reviews: 54, badge: 'Premium', stock: 3,
    images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9', 'https://images.unsplash.com/photo-1603304416467-53a98e1f1d0b', 'https://images.unsplash.com/photo-1593305841991-e5f8d80b2f1c'],
    description: 'Mobile workstation with Xeon processor and ECC memory.', features: ['16" 4K', '64GB ECC', '2TB SSD', 'RTX A5000'] },
  { id: 25, name: 'Flex 2-in-1', category: 'laptop', brand: 'Apex', price: 1199, oldPrice: 1499, rating: 4.6, reviews: 145, badge: 'Sale', stock: 10,
    images: ['https://images.unsplash.com/photo-1517336714734-599c5d4b1e8e', 'https://images.unsplash.com/photo-1593305841991-e5f8d80b2f1c', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9'],
    description: 'Convertible touchscreen laptop with stylus support.', features: ['14" Touch OLED', '16GB RAM', '1TB SSD', 'Stylus included'] },

  // ===== PHONES (8) =====
  { id: 26, name: 'Galaxy Edge Pro', category: 'phone', brand: 'Lumina', price: 999, oldPrice: 1199, rating: 4.8, reviews: 432, badge: 'Best Seller', stock: 15,
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9', 'https://images.unsplash.com/photo-1592750475338-10b5639fc929', 'https://images.unsplash.com/photo-1598327105666-5b0ee4f7e9d3'],
    description: 'Flagship smartphone with curved AMOLED display and pro camera.', features: ['6.7" AMOLED', 'Triple 108MP camera', '5000mAh', '5G enabled'] },
  { id: 27, name: 'Pixel Mini', category: 'phone', brand: 'Lumina', price: 649, oldPrice: 799, rating: 4.6, reviews: 298, badge: 'Sale', stock: 25,
    images: ['https://images.unsplash.com/photo-1592750475338-10b5639fc929', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9', 'https://images.unsplash.com/photo-1598327105666-5b0ee4f7e9d3'],
    description: 'Compact flagship with AI-powered photography.', features: ['5.9" OLED', '50MP camera', '4000mAh', 'AI photography'] },
  { id: 28, name: 'Titan Ultra', category: 'phone', brand: 'Lumina', price: 1299, oldPrice: null, rating: 4.9, reviews: 187, badge: 'New', stock: 8,
    images: ['https://images.unsplash.com/photo-1709744722656-9b850470293f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Ftc3VuZyUyMGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D'],
    description: 'Ultra-premium phone with titanium frame and periscope zoom.', features: ['6.8" LTPO', '200MP camera', 'Titanium frame', '10x zoom'] },
  { id: 29, name: 'Lite 5G', category: 'phone', brand: 'Lumina', price: 449, oldPrice: 599, rating: 4.4, reviews: 367, badge: 'Sale', stock: 30,
    images: ['https://images.unsplash.com/photo-1598327105666-5b0ee4f7e9d3', 'https://images.unsplash.com/photo-1592750475338-10b5639fc929', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'],
    description: 'Affordable 5G phone with solid performance.', features: ['6.5" LCD', '64MP camera', '5000mAh', '5G connectivity'] },
  { id: 30, name: 'Fold Pro Gen2', category: 'phone', brand: 'Lumina', price: 1799, oldPrice: 1999, rating: 4.7, reviews: 98, badge: 'Premium', stock: 5,
    images: ['https://images.unsplash.com/photo-1610945265 435e8c8e8e8e', 'https://images.unsplash.com/photo-1592750475338-10b5639fc929', 'https://images.unsplash.com/photo-1598327105666-5b0ee4f7e9d3'],
    description: 'Foldable phone with flexible OLED display and multitasking power.', features: ['7.6" foldable OLED', '12GB RAM', '512GB storage', 'Dual screen'] },
  { id: 31, name: 'Rugged X', category: 'phone', brand: 'Lumina', price: 549, oldPrice: 699, rating: 4.5, reviews: 178, badge: 'Sale', stock: 18,
    images: ['https://images.unsplash.com/photo-1592750475338-10b5639fc929', 'https://images.unsplash.com/photo-1598327105666-5b0ee4f7e9d3', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'],
    description: 'IP68 rugged phone built for extreme conditions.', features: ['IP68 rated', '6000mAh', 'Gorilla Glass', 'Military grade'] },
  { id: 32, name: 'Studio Phone', category: 'phone', brand: 'Lumina', price: 899, oldPrice: 1099, rating: 4.7, reviews: 234, badge: 'Sale', stock: 12,
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9', 'https://images.unsplash.com/photo-1598327105666-5b0ee4f7e9d3', 'https://images.unsplash.com/photo-1592750475338-10b5639fc929'],
    description: 'Creator-focused phone with cinema-grade video capabilities.', features: ['6.7" OLED', '8K video', 'Pro color science', '512GB storage'] },
  { id: 33, name: 'Eco Phone', category: 'phone', brand: 'Lumina', price: 399, oldPrice: 499, rating: 4.3, reviews: 412, badge: 'Sale', stock: 40,
    images: ['https://images.unsplash.com/photo-1598327105666-5b0ee4f7e9d3', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9', 'https://images.unsplash.com/photo-1592750475338-10b5639fc929'],
    description: 'Sustainable phone made from recycled materials.', features: ['6.4" OLED', '48MP camera', '4500mAh', 'Recycled body'] },

  // ===== WATCHES (8) =====
  { id: 34, name: 'Chrono Classic', category: 'watch', brand: 'Meridian', price: 459, oldPrice: 599, rating: 4.8, reviews: 234, badge: 'Best Seller', stock: 10,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30', 'https://images.unsplash.com/photo-1547996160-81dfa63595aa', 'https://images.unsplash.com/photo-1524512152583-3d8e0d2e3e6e'],
    description: 'Timeless automatic watch with sapphire crystal and leather strap.', features: ['Automatic movement', 'Sapphire crystal', 'Leather strap', '100m water resistant'] },
  { id: 35, name: 'Smart Watch Pro', category: 'watch', brand: 'Meridian', price: 379, oldPrice: 449, rating: 4.7, reviews: 456, badge: 'Sale', stock: 20,
    images: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', 'https://images.unsplash.com/photo-1547996160-81dfa63595aa'],
    description: 'Advanced health tracking smartwatch with AMOLED display.', features: ['AMOLED display', 'ECG + SpO2', 'GPS built-in', '7-day battery'] },
  { id: 36, name: 'Diver 300', category: 'watch', brand: 'Meridian', price: 599, oldPrice: null, rating: 4.9, reviews: 123, badge: 'Premium', stock: 6,
    images: ['https://images.unsplash.com/photo-1547996160-81dfa63595aa', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', 'https://images.unsplash.com/photo-1524512152583-3d8e0d2e3e6e'],
    description: 'Professional dive watch with 300m water resistance.', features: ['300m water resistant', 'Automatic movement', 'Ceramic bezel', 'Screw-down crown'] },
  { id: 37, name: 'Minimalist Quartz', category: 'watch', brand: 'Meridian', price: 189, oldPrice: 249, rating: 4.5, reviews: 289, badge: 'Sale', stock: 30,
    images: ['https://images.unsplash.com/photo-1524512152583-3d8e0d2e3e6e', 'https://images.unsplash.com/photo-1547996160-81dfa63595aa', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'],
    description: 'Clean, minimalist design with mesh steel bracelet.', features: ['Quartz movement', 'Mesh bracelet', 'Sapphire crystal', '30m water resistant'] },
  { id: 38, name: 'Sport Active', category: 'watch', brand: 'Meridian', price: 249, oldPrice: 329, rating: 4.6, reviews: 367, badge: 'Sale', stock: 25,
    images: ['https://images.unsplash.com/photo-1557456125-857f4a872c0a', 'https://images.unsplash.com/photo-1546868871-7041f2a55e12', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'],
    description: 'Fitness-focused smartwatch with 100+ workout modes.', features: ['100+ sport modes', 'Heart rate monitor', 'Sleep tracking', '5 ATM'] },
  { id: 39, name: 'GMT World Timer', category: 'watch', brand: 'Meridian', price: 799, oldPrice: 949, rating: 4.8, reviews: 89, badge: 'Sale', stock: 7,
    images: ['https://images.unsplash.com/photo-1547996160-81dfa63595aa', 'https://images.unsplash.com/photo-1524512152583-3d8e0d2e3e6e', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'],
    description: 'Dual-time GMT watch for the global traveler.', features: ['GMT movement', 'Dual time zones', 'Sapphire crystal', 'Steel bracelet'] },
  { id: 40, name: 'Heritage Gold', category: 'watch', brand: 'Meridian', price: 1299, oldPrice: null, rating: 5.0, reviews: 45, badge: 'Premium', stock: 3,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30', 'https://images.unsplash.com/photo-1547996160-81dfa63595aa', 'https://images.unsplash.com/photo-1524512152583-3d8e0d2e3e6e'],
    description: 'Gold-tone luxury watch with exhibition caseback.', features: ['Gold-tone case', 'Automatic movement', 'Exhibition back', 'Alligator strap'] },
  { id: 41, name: 'Field Watch', category: 'watch', brand: 'Meridian', price: 219, oldPrice: 279, rating: 4.4, reviews: 198, badge: 'Sale', stock: 22,
    images: ['https://images.unsplash.com/photo-1524512152583-3d8e0d2e3e6e', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', 'https://images.unsplash.com/photo-1547996160-81dfa63595aa'],
    description: 'Rugged field watch with military-inspired design.', features: ['NATO strap', 'Luminous hands', 'Mineral crystal', '100m water resistant'] },

  // ===== GAMING (8) =====
  { id: 42, name: 'Phantom Controller', category: 'gaming', brand: 'Vortex', price: 69, oldPrice: 89, rating: 4.7, reviews: 534, badge: 'Best Seller', stock: 40,
    images: ['https://images.unsplash.com/photo-1592840496694-26d035b52b48', 'https://images.unsplash.com/photo-1605901309584-818e25960a92', 'https://images.unsplash.com/photo-1612287230202-1ff1d2d39ee4'],
    description: 'Pro-grade wireless controller with Hall-effect sticks.', features: ['Hall-effect sticks', 'Wireless + wired', 'Mappable paddles', '40h battery'] },
  { id: 43, name: 'RGB Mech Keyboard', category: 'gaming', brand: 'Vortex', price: 149, oldPrice: 199, rating: 4.8, reviews: 412, badge: 'Sale', stock: 25,
    images: ['https://images.unsplash.com/photo-1605901309584-818e25960a92', 'https://images.unsplash.com/photo-1592840496694-26d035b52b48', 'https://images.unsplash.com/photo-1612287230202-1ff1d2d39ee4'],
    description: 'Hot-swappable mechanical keyboard with per-key RGB.', features: ['Hot-swappable', 'Per-key RGB', 'Aluminum frame', 'PBT keycaps'] },
  { id: 44, name: 'Gaming Mouse Pro', category: 'gaming', brand: 'Vortex', price: 89, oldPrice: 119, rating: 4.6, reviews: 389, badge: 'Sale', stock: 35,
    images: ['https://images.unsplash.com/photo-1612287230202-1ff1d2d39ee4', 'https://images.unsplash.com/photo-1592840496694-26d035b52b48', 'https://images.unsplash.com/photo-1605901309584-818e25960a92'],
    description: 'Ultralight gaming mouse with 26K DPI sensor.', features: ['26K DPI sensor', '54g ultralight', 'Optical switches', '8 programmable buttons'] },
  { id: 45, name: 'VR Headset Vision', category: 'gaming', brand: 'Vortex', price: 499, oldPrice: null, rating: 4.5, reviews: 178, badge: 'New', stock: 8,
    images: ['https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac', 'https://images.unsplash.com/photo-1592840496694-26d035b52b48', 'https://images.unsplash.com/photo-1605901309584-818e25960a92'],
    description: 'Immersive VR headset with 4K per-eye resolution.', features: ['4K per eye', '120Hz refresh', 'Inside-out tracking', 'Spatial audio'] },
  { id: 46, name: 'Gaming Headset 7.1', category: 'gaming', brand: 'Vortex', price: 129, oldPrice: 169, rating: 4.6, reviews: 312, badge: 'Sale', stock: 28,
    images: ['https://images.unsplash.com/photo-1592840496694-26d035b52b48', 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac', 'https://images.unsplash.com/photo-1605901309584-818e25960a92'],
    description: 'Surround sound gaming headset with noise-cancelling mic.', features: ['7.1 surround', 'Noise-cancelling mic', '50mm drivers', 'RGB lighting'] },
  { id: 47, name: 'Stream Deck Mini', category: 'gaming', brand: 'Vortex', price: 99, oldPrice: 129, rating: 4.4, reviews: 234, badge: 'Sale', stock: 30,
    images: ['https://images.unsplash.com/photo-1605901309584-818e25960a92', 'https://images.unsplash.com/photo-1612287230202-1ff1d2d39ee4', 'https://images.unsplash.com/photo-1592840496694-26d035b52b48'],
    description: '15-key control deck for streaming and productivity.', features: ['15 LCD keys', 'USB-C', 'Custom profiles', 'One-touch actions'] },
  { id: 48, name: 'Arcade Fight Stick', category: 'gaming', brand: 'Vortex', price: 199, oldPrice: 249, rating: 4.7, reviews: 156, badge: 'Sale', stock: 12,
    images: ['https://images.unsplash.com/photo-1612287230202-1ff1d2d39ee4', 'https://images.unsplash.com/photo-1592840496694-26d035b52b48', 'https://images.unsplash.com/photo-1605901309584-818e25960a92'],
    description: 'Tournament-grade fight stick with Sanwa components.', features: ['Sanwa buttons', 'Sanwa joystick', 'Detachable cable', 'Tournament legal'] },
  { id: 49, name: 'Gaming Chair Elite', category: 'gaming', brand: 'Vortex', price: 399, oldPrice: 499, rating: 4.5, reviews: 289, badge: 'Sale', stock: 15,
    images: ['https://images.unsplash.com/photo-1592078615290-033ee584e267', 'https://images.unsplash.com/photo-1592840496694-26d035b52b48', 'https://images.unsplash.com/photo-1605901309584-818e25960a92'],
    description: 'Ergonomic gaming chair with lumbar support and 4D armrests.', features: ['4D armrests', 'Lumbar pillow', 'Class 4 gas lift', '165° recline'] },

  // ===== FASHION (9) =====
  { id: 50, name: 'Cashmere Overcoat', category: 'fashion', brand: 'Atelier', price: 899, oldPrice: 1199, rating: 4.9, reviews: 87, badge: 'Premium', stock: 5,
    images: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d', 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a6', 'https://images.unsplash.com/photo-1551232864-3f0890e5e1dc'],
    description: 'Tailored cashmere overcoat with timeless silhouette.', features: ['100% cashmere', 'Full canvas', 'Horn buttons', 'Made in Italy'] },
  { id: 51, name: 'Silk Button Shirt', category: 'fashion', brand: 'Atelier', price: 189, oldPrice: 249, rating: 4.6, reviews: 234, badge: 'Sale', stock: 20,
    images: ['https://images.unsplash.com/photo-1525507119028-ed4c629a60a6', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d', 'https://images.unsplash.com/photo-1551232864-3f0890e5e1dc'],
    description: 'Premium silk button-up with mother-of-pearl buttons.', features: ['100% silk', 'Mother-of-pearl buttons', 'French seams', 'Regular fit'] },
  { id: 52, name: 'Wool Tailored Pants', category: 'fashion', brand: 'Atelier', price: 249, oldPrice: 329, rating: 4.7, reviews: 145, badge: 'Sale', stock: 18,
    images: ['https://images.unsplash.com/photo-1551232864-3f0890e5e1dc', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d', 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a6'],
    description: 'Italian wool trousers with tailored fit and clean lines.', features: ['Italian wool', 'Tailored fit', 'Side adjusters', 'Full lined'] },
  { id: 53, name: 'Leather Jacket', category: 'fashion', brand: 'Atelier', price: 599, oldPrice: null, rating: 4.8, reviews: 112, badge: 'New', stock: 8,
    images: ['https://images.unsplash.com/photo-1551028719-00167b6e5670', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d', 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a6'],
    description: 'Lambskin leather jacket with asymmetrical zip design.', features: ['Lambskin leather', 'Quilted shoulders', 'YKK zippers', 'Inner pockets'] },
  { id: 54, name: 'Merino Knit Sweater', category: 'fashion', brand: 'Atelier', price: 159, oldPrice: 219, rating: 4.5, reviews: 298, badge: 'Sale', stock: 25,
    images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105', 'https://images.unsplash.com/photo-1551232864-3f0890e5e1dc', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d'],
    description: 'Extra-fine merino crewneck with ribbed details.', features: ['Extra-fine merino', 'Crew neck', 'Ribbed cuffs', 'Machine washable'] },
  { id: 55, name: 'Linen Summer Suit', category: 'fashion', brand: 'Atelier', price: 449, oldPrice: 599, rating: 4.6, reviews: 167, badge: 'Sale', stock: 12,
    images: ['https://images.unsplash.com/photo-1490481651871-ab68de25d43d', 'https://images.unsplash.com/photo-1551232864-3f0890e5e1dc', 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105'],
    description: 'Breathable linen suit for warm-weather occasions.', features: ['100% linen', 'Half-lined', 'Patch pockets', 'Slim fit'] },
  { id: 56, name: 'Pima Cotton Tee', category: 'fashion', brand: 'Atelier', price: 79, oldPrice: 99, rating: 4.4, reviews: 412, badge: 'Sale', stock: 50,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab', 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d'],
    description: 'Premium Pima cotton t-shirt with soft hand feel.', features: ['Pima cotton', 'Pre-shrunk', 'Reinforced collar', 'Regular fit'] },
  { id: 57, name: 'Trench Coat Classic', category: 'fashion', brand: 'Atelier', price: 549, oldPrice: 699, rating: 4.8, reviews: 198, badge: 'Sale', stock: 10,
    images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caef', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d', 'https://images.unsplash.com/photo-1551028719-00167b6e5670'],
    description: 'Water-resistant trench coat with belted waist.', features: ['Water-resistant', 'Belted waist', 'Storm flap', 'Removable liner'] },
  { id: 58, name: 'Quilted Vest', category: 'fashion', brand: 'Atelier', price: 199, oldPrice: 259, rating: 4.5, reviews: 223, badge: 'Sale', stock: 22,
    images: ['https://images.unsplash.com/photo-1551028719-00167b6e5670', 'https://images.unsplash.com/photo-1591047139829-d91aecb6caef', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d'],
    description: 'Lightweight quilted vest with down fill.', features: ['Down fill', 'Packable', 'Zip pockets', 'Standing collar'] },

  // ===== ACCESSORIES (8) =====
  { id: 59, name: 'Leather Weekender Bag', category: 'accessories', brand: 'Atlas', price: 399, oldPrice: 499, rating: 4.8, reviews: 156, badge: 'Best Seller', stock: 8,
    images: ['https://images.unsplash.com/photo-1611923134455-b4be1c5c5b1f', 'https://images.unsplash.com/photo-1547949003-9792a18a2601', 'https://images.unsplash.com/photo-1566150905458-1bf1fc112f14'],
    description: 'Full-grain leather weekender with cotton twill lining.', features: ['Full-grain leather', 'Cotton lining', 'Brass hardware', 'Shoe compartment'] },
  { id: 60, name: 'Carbon Wallet', category: 'accessories', brand: 'Atlas', price: 89, oldPrice: 119, rating: 4.6, reviews: 345, badge: 'Sale', stock: 30,
    images: ['https://images.unsplash.com/photo-1627123424574-724758594e93', 'https://images.unsplash.com/photo-1611923134455-b4be1c5c5b1f', 'https://images.unsplash.com/photo-1547949003-9792a18a2601'],
    description: 'Slim carbon fiber wallet with RFID protection.', features: ['RFID blocking', 'Carbon fiber', '8 card slots', 'Money clip'] },
  { id: 61, name: 'Aviator Sunglasses', category: 'accessories', brand: 'Atlas', price: 219, oldPrice: 279, rating: 4.7, reviews: 234, badge: 'Sale', stock: 20,
    images: ['https://images.unsplash.com/photo-1572631381389-98cd876a05a5', 'https://images.unsplash.com/photo-1611923134455-b4be1c5c5b1f', 'https://images.unsplash.com/photo-1547949003-9792a18a2601'],
    description: 'Polarized aviator sunglasses with titanium frame.', features: ['Polarized lenses', 'Titanium frame', '100% UV400', 'Leather case'] },
  { id: 62, name: 'Leather Belt', category: 'accessories', brand: 'Atlas', price: 129, oldPrice: null, rating: 4.5, reviews: 189, badge: 'New', stock: 25,
    images: ['https://images.unsplash.com/photo-1624222247344-550fb60583dc', 'https://images.unsplash.com/photo-1611923134455-b4be1c5c5b1f', 'https://images.unsplash.com/photo-1547949003-9792a18a2601'],
    description: 'Italian leather belt with brushed buckle.', features: ['Italian leather', 'Brushed buckle', '35mm width', 'Reversible'] },
  { id: 63, name: 'Tech Backpack', category: 'accessories', brand: 'Atlas', price: 179, oldPrice: 229, rating: 4.7, reviews: 412, badge: 'Sale', stock: 18,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62', 'https://images.unsplash.com/photo-1611923134455-b4be1c5c5b1f', 'https://images.unsplash.com/photo-1547949003-9792a18a2601'],
    description: 'Weatherproof backpack with laptop sleeve and USB port.', features: ['Weatherproof', '15" laptop sleeve', 'USB port', 'Anti-theft'] },
  { id: 64, name: 'Silk Tie Set', category: 'accessories', brand: 'Atlas', price: 99, oldPrice: 139, rating: 4.4, reviews: 167, badge: 'Sale', stock: 35,
    images: ['https://images.unsplash.com/photo-1611923134455-b4be1c5c5b1f', 'https://images.unsplash.com/photo-1624222247344-550fb60583dc', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62'],
    description: 'Set of 3 premium silk ties in classic patterns.', features: ['100% silk', '3-piece set', 'Classic patterns', 'Gift box'] },
  { id: 65, name: 'Minimalist Watch Roll', category: 'accessories', brand: 'Atlas', price: 149, oldPrice: 199, rating: 4.6, reviews: 98, badge: 'Sale', stock: 15,
    images: ['https://images.unsplash.com/photo-1547949003-9792a18a2601', 'https://images.unsplash.com/photo-1611923134455-b4be1c5c5b1f', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62'],
    description: 'Leather watch roll case for 3 watches.', features: ['Full-grain leather', 'Holds 3 watches', 'Soft suede lining', 'Travel friendly'] },
  { id: 66, name: 'Wireless Charger Pad', category: 'accessories', brand: 'Atlas', price: 59, oldPrice: 79, rating: 4.3, reviews: 289, badge: 'Sale', stock: 40,
    images: ['https://images.unsplash.com/photo-1591290619762-c5e5e5e5e5e5', 'https://images.unsplash.com/photo-1611923134455-b4be1c5c5b1f', 'https://images.unsplash.com/photo-1547949003-9792a18a2601'],
    description: '15W fast wireless charging pad with aluminum body.', features: ['15W fast charge', 'Aluminum body', 'Qi certified', 'LED indicator'] },

  // ===== CAMERAS (8) =====
  { id: 67, name: 'Mirrorless Pro R5', category: 'camera', brand: 'Optix', price: 2499, oldPrice: 2899, rating: 4.9, reviews: 134, badge: 'Best Seller', stock: 4,
    images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd', 'https://images.unsplash.com/photo-1516035069371-29a1b244a782', 'https://images.unsplash.com/photo-1606983340126-99ab1f1ad1c0'],
    description: '45MP full-frame mirrorless with 8K video capability.', features: ['45MP full-frame', '8K video', '5-axis IBIS', '20fps burst'] },
  { id: 68, name: 'Compact Zoom G7', category: 'camera', brand: 'Optix', price: 899, oldPrice: 1099, rating: 4.6, reviews: 234, badge: 'Sale', stock: 12,
    images: ['https://images.unsplash.com/photo-1516035069371-29a1b244a782', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd', 'https://images.unsplash.com/photo-1606983340126-99ab1f1ad1c0'],
    description: 'Travel-ready compact with 25x optical zoom.', features: ['1" sensor', '25x zoom', '4K video', 'Tilting screen'] },
  { id: 69, name: 'Action Cam 4K', category: 'camera', brand: 'Optix', price: 349, oldPrice: 449, rating: 4.5, reviews: 456, badge: 'Sale', stock: 25,
    images: ['https://images.unsplash.com/photo-1606983340126-99ab1f1ad1c0', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd', 'https://images.unsplash.com/photo-1516035069371-29a1b244a782'],
    description: 'Waterproof action camera with HyperSmooth stabilization.', features: ['5.3K video', 'Waterproof 10m', 'HyperSmooth', 'Dual screens'] },
  { id: 70, name: 'Prime 50mm Lens', category: 'camera', brand: 'Optix', price: 599, oldPrice: null, rating: 4.8, reviews: 178, badge: 'New', stock: 10,
    images: ['https://images.unsplash.com/photo-1606980615434-2e3c5a3e5e5e', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd', 'https://images.unsplash.com/photo-1516035069371-29a1b244a782'],
    description: 'Fast f/1.2 prime lens for stunning portraits.', features: ['f/1.2 aperture', '13-blade aperture', 'Nano-coating', 'Weather sealed'] },
  { id: 71, name: 'Drone Air 3', category: 'camera', brand: 'Optix', price: 999, oldPrice: 1199, rating: 4.7, reviews: 289, badge: 'Sale', stock: 8,
    images: ['https://images.unsplash.com/photo-1473968512647-3e447244af8f', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd', 'https://images.unsplash.com/photo-1516035069371-29a1b244a782'],
    description: '4K HDR drone with 46-minute flight time.', features: ['4K HDR', '46min flight', '10km range', 'Obstacle sensing'] },
  { id: 72, name: 'Studio Flash Kit', category: 'camera', brand: 'Optix', price: 449, oldPrice: 599, rating: 4.4, reviews: 134, badge: 'Sale', stock: 14,
    images: ['https://images.unsplash.com/photo-1516035069371-29a1b244a782', 'https://images.unsplash.com/photo-1606983340126-99ab1f1ad1c0', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd'],
    description: 'Complete 3-light studio flash kit with softboxes.', features: ['3x 400W flashes', 'Softboxes included', 'Wireless trigger', 'Light stands'] },
  { id: 73, name: 'Gimbal Stabilizer 3', category: 'camera', brand: 'Optix', price: 379, oldPrice: 479, rating: 4.6, reviews: 198, badge: 'Sale', stock: 16,
    images: ['https://images.unsplash.com/photo-1606983340126-99ab1f1ad1c0', 'https://images.unsplash.com/photo-1516035069371-29a1b244a782', 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd'],
    description: '3-axis gimbal for smooth cinematic video.', features: ['3-axis stabilization', '14h battery', 'Payload 4.2kg', 'Follow modes'] },
  { id: 74, name: 'Film Camera X', category: 'camera', brand: 'Optix', price: 649, oldPrice: null, rating: 4.7, reviews: 87, badge: 'Premium', stock: 5,
    images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd', 'https://images.unsplash.com/photo-1606983340126-99ab1f1ad1c0', 'https://images.unsplash.com/photo-1516035069371-29a1b244a782'],
    description: 'Modern rangefinder film camera with classic design.', features: ['35mm film', 'Rangefinder', 'Fixed 40mm lens', 'Manual focus'] },

  // ===== SMART HOME (8) =====
  { id: 75, name: 'Smart Speaker Hub', category: 'smarthome', brand: 'Nimbus', price: 199, oldPrice: 249, rating: 4.7, reviews: 367, badge: 'Best Seller', stock: 20,
    images: ['https://images.unsplash.com/photo-1558002038-1055907df827', 'https://images.unsplash.com/photo-1543512214-318c7553f570', 'https://images.unsplash.com/photo-1558089687-f282ffcbc126'],
    description: 'Voice-controlled smart speaker with premium sound.', features: ['360° sound', 'Voice assistant', 'Smart home hub', 'Multi-room audio'] },
  { id: 76, name: 'Smart Display 10', category: 'smarthome', brand: 'Nimbus', price: 249, oldPrice: 299, rating: 4.5, reviews: 234, badge: 'Sale', stock: 15,
    images: ['https://images.unsplash.com/photo-1543512214-318c7553f570', 'https://images.unsplash.com/photo-1558002038-1055907df827', 'https://images.unsplash.com/photo-1558089687-f282ffcbc126'],
    description: '10-inch smart display for home control and video calls.', features: ['10" touchscreen', 'Video calling', 'Smart home control', 'Photo frame'] },
  { id: 77, name: 'Smart Thermostat', category: 'smarthome', brand: 'Nimbus', price: 179, oldPrice: 229, rating: 4.6, reviews: 312, badge: 'Sale', stock: 25,
    images: ['https://images.unsplash.com/photo-1581244907913-9c999a4e4e3e', 'https://images.unsplash.com/photo-1558002038-1055907df827', 'https://images.unsplash.com/photo-1543512214-318c7553f570'],
    description: 'Learning thermostat with energy saving features.', features: ['Auto-schedule', 'Energy saving', 'Remote control', 'Air quality sensor'] },
  { id: 78, name: 'Security Camera 4K', category: 'smarthome', brand: 'Nimbus', price: 229, oldPrice: null, rating: 4.7, reviews: 189, badge: 'New', stock: 18,
    images: ['https://images.unsplash.com/photo-1557324998-7c2f1e8c2e2e', 'https://images.unsplash.com/photo-1558002038-1055907df827', 'https://images.unsplash.com/photo-1543512214-318c7553f570'],
    description: '4K security camera with AI motion detection.', features: ['4K resolution', 'AI detection', 'Night vision', 'Two-way audio'] },
  { id: 79, name: 'Smart Door Lock', category: 'smarthome', brand: 'Nimbus', price: 299, oldPrice: 349, rating: 4.5, reviews: 156, badge: 'Sale', stock: 12,
    images: ['https://images.unsplash.com/photo-1558002038-1055907df827', 'https://images.unsplash.com/photo-1581244907913-9c999a4e4e3e', 'https://images.unsplash.com/photo-1543512214-318c7553f570'],
    description: 'Keyless smart lock with fingerprint and app control.', features: ['Fingerprint unlock', 'App control', 'Auto-lock', 'Backup key'] },
  { id: 80, name: 'Smart Lighting Kit', category: 'smarthome', brand: 'Nimbus', price: 149, oldPrice: 199, rating: 4.4, reviews: 278, badge: 'Sale', stock: 30,
    images: ['https://images.unsplash.com/photo-1558089687-f282ffcbc126', 'https://images.unsplash.com/photo-1558002038-1055907df827', 'https://images.unsplash.com/photo-1543512214-318c7553f570'],
    description: '4-pack smart bulbs with 16M colors and schedules.', features: ['16M colors', 'Voice control', 'Schedules', 'No hub needed'] },
  { id: 81, name: 'Robot Vacuum Pro', category: 'smarthome', brand: 'Nimbus', price: 599, oldPrice: 749, rating: 4.8, reviews: 234, badge: 'Sale', stock: 10,
    images: ['https://images.unsplash.com/photo-1581244907913-9c999a4e4e3e', 'https://images.unsplash.com/photo-1558002038-1055907df827', 'https://images.unsplash.com/photo-1558089687-f282ffcbc126'],
    description: 'Self-emptying robot vacuum with LiDAR mapping.', features: ['LiDAR mapping', 'Self-empty base', 'Mop function', '60-day capacity'] },
  { id: 82, name: 'Smart Plug 4-Pack', category: 'smarthome', brand: 'Nimbus', price: 79, oldPrice: 99, rating: 4.3, reviews: 345, badge: 'Sale', stock: 45,
    images: ['https://images.unsplash.com/photo-1543512214-318c7553f570', 'https://images.unsplash.com/photo-1558002038-1055907df827', 'https://images.unsplash.com/photo-1558089687-f282ffcbc126'],
    description: '4 smart plugs with energy monitoring and schedules.', features: ['4-pack', 'Energy monitoring', 'Voice control', 'Schedules'] },

  // ===== EXTRA (a few more to exceed 80) =====
  { id: 83, name: 'Aero Runner Elite', category: 'shoes', brand: 'Velocity', price: 229, oldPrice: 289, rating: 4.8, reviews: 145, badge: 'New', stock: 9,
    images: ['https://images.unsplash.com/photo-1600185365926-3a2ce3cdbaf3', 'https://images.unsplash.com/photo-1539185441755-769473a23574', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'],
    description: 'Elite marathon shoe with supercritical foam and carbon plate.', features: ['Supercritical foam', 'Carbon plate', 'Ultralight upper', 'Race fit'] },
  { id: 84, name: 'Aura Open-Ear', category: 'headphones', brand: 'Soundwave', price: 179, oldPrice: 229, rating: 4.4, reviews: 198, badge: 'Sale', stock: 22,
    images: ['https://images.unsplash.com/photo-1572569517546-931f4d4b56db', 'https://images.unsplash.com/photo-1590658268037-6bf12165a815', 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46'],
    description: 'Open-ear bone conduction headphones for outdoor safety.', features: ['Bone conduction', 'Open-ear design', '8h battery', 'IP67 waterproof'] },
  { id: 85, name: 'Galaxy Tab Pro', category: 'laptop', brand: 'Apex', price: 799, oldPrice: 949, rating: 4.6, reviews: 178, badge: 'Sale', stock: 14,
    images: ['https://images.unsplash.com/photo-1561154464-82e9adf32794', 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853', 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9'],
    description: '12-inch tablet with stylus and keyboard cover.', features: ['12" AMOLED', 'Stylus included', 'Keyboard cover', '8GB RAM'] },
]

// Helper: get image URL with sizing
export const getProductImage = (product, index = 0) => {
  const base = product.images[index] || product.images[0]
  return img(base)
}

// Helper: get product by id
export const getProductById = (id) => products.find((p) => p.id === Number(id))

// Helper: get products by category
export const getProductsByCategory = (cat) => products.filter((p) => p.category === cat)

// Helper: get related products
export const getRelatedProducts = (product, limit = 4) =>
  products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit)

// Helper: get best sellers
export const getBestSellers = (limit = 8) =>
  products.filter((p) => p.badge === 'Best Seller').slice(0, limit)

// Helper: get featured products
export const getFeaturedProducts = (limit = 8) =>
  products.filter((p) => p.rating >= 4.7).slice(0, limit)

// Helper: get products on sale
export const getSaleProducts = (limit = 8) =>
  products.filter((p) => p.oldPrice && p.oldPrice > p.price).slice(0, limit)

// Helper: get new products
export const getNewProducts = (limit = 8) =>
  products.filter((p) => p.badge === 'New').slice(0, limit)

// Helper: format price
export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price)

// Helper: calculate discount
export const getDiscount = (product) => {
  if (!product.oldPrice) return 0
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
}

// Testimonials data
export const testimonials = [
  { id: 1, name: 'Sophia Chen', role: 'Creative Director', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', rating: 5, text: 'The quality and curation at LuxeCart is unmatched. Every product feels hand-picked for people who appreciate true craftsmanship.' },
  { id: 2, name: 'Marcus Webb', role: 'Tech Entrepreneur', avatar: 'https://images.unsplash.com/photo-1500648760491-505a05e9d14b?w=200&q=80', rating: 5, text: 'From the seamless shopping experience to the premium packaging, LuxeCart has redefined what online luxury shopping should feel like.' },
  { id: 3, name: 'Isabella Rossi', role: 'Fashion Editor', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', rating: 5, text: 'I have shopped at every luxury retailer online. None compare to the attention to detail and aesthetic refinement of LuxeCart.' },
  { id: 4, name: 'James Park', role: 'Product Designer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', rating: 5, text: 'The interface itself is a work of art. Shopping here feels like browsing a gallery, not a store. Absolutely brilliant.' },
  { id: 5, name: 'Aisha Patel', role: 'Architect', avatar: 'https://images.unsplash.com/photo-1534528741775-3a6e6b7f1f2f?w=200&q=80', rating: 5, text: 'Every detail, from the typography to the animations, is meticulously crafted. This is what premium e-commerce should look like.' },
  { id: 6, name: 'Daniel Kim', role: 'Photographer', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', rating: 5, text: 'The camera selection is incredible, and the buying experience is the smoothest I have encountered. LuxeCart sets the standard.' },
]

// Stats for animated counters
export const stats = [
  { label: 'Premium Products', value: 82, suffix: '+' },
  { label: 'Happy Customers', value: 50, suffix: 'K' },
  { label: 'Categories', value: 10, suffix: '' },
  { label: 'Customer Rating', value: 4.9, suffix: '' },
]
