const productDataNotImages = [
  // PAAN CORNER
  { name: "Shadani Banarasi Pan", price: 300, type: "2 Jar", category: "Paan Corner" },
  { name: "Rajnigandha Sachet", price: 300, type: "1 Jar", category: "Paan Corner" },
  { name: "Rajnigandha", price: 50, type: "1 Packet", category: "Paan Corner" },
  { name: "Stash Pro", price: 40, type: "1 Packet", category: "Paan Corner" },
  { name: "SmoothMix Herbal Rolling Blend", price: 100, type: "1 Sachet", category: "Paan Corner" },
  { name: "Chimp Herbs", price: 300, type: "1 Jar", category: "Paan Corner" },

  // Dairy Bread Eggs
  { name: "Amul Gold Milk", price: 50, type: "1 Packet", category: "Dairy Bread Eggs" },
  { name: "Amul Taza Milk", price: 70, type: "1 Carton", category: "Dairy Bread Eggs" },
  { name: "Harvest Gold Bread", price: 50, type: "1 Packet", category: "Dairy Bread Eggs" },
  { name: "6X Eggs Carton", price: 60, type: "1 Packet", category: "Dairy Bread Eggs" },
  { name: "Amul Butter", price: 60, type: "1 Brick", category: "Dairy Bread Eggs" },
  { name: "Amul Diced Cheese Mozzarella", price: 150, type: "1 Packet", category: "Dairy Bread Eggs" },

  // FRUITS & VEGETABLES
  { name: "Coriander Leaves", price: 30, type: "1 Bundle", category: "Fruits Vegetables" },
  { name: "Potatoes", price: 60, type: "1 Packet", category: "Fruits Vegetables" },
  { name: "Chillies", price: 50, type: "1 Packet", category: "Fruits Vegetables" },
  { name: "Bananas", price: 60, type: "1 Packet", category: "Fruits Vegetables" },
  { name: "Coconut Slices", price: 400, type: "1 Packet", category: "Fruits Vegetables" },
  { name: "Oranges", price: 500, type: "1 Packet", category: "Fruits Vegetables" },

  // COLD DRINKS
  { name: "Thumbs Up", price: 50, type: "1 Bottle", category: "Cold Drinks Juices" },
  { name: "Limca", price: 50, type: "1 Bottle", category: "Cold Drinks Juices" },
  { name: "Zero Sparkling Water", price: 100, type: "1 Bottle", category: "Cold Drinks Juices" },
  { name: "Twinnings Classic Edition", price: 100, type: "1 Bottle", category: "Cold Drinks Juices" },
  { name: "Abby Maple Syrup", price: 50, type: "1 Bottle", category: "Cold Drinks Juices" },
  { name: "Hershey Chocolate Syrup", price: 50, type: "1 Bottle", category: "Cold Drinks Juices" },

  // SNACKS
  { name: "Cheetos Flamin' Hot Crunchy", price: 50, type: "1 Packet", category: "Snacks Munchies" },
  { name: "Uncle Chips", price: 50, type: "1 Packet", category: "Snacks Munchies" },
  { name: "Lays West Indian Style", price: 50, type: "1 Packet", category: "Snacks Munchies" },
  { name: "Fan Bakery", price: 100, type: "1 Packet", category: "Snacks Munchies" },
  { name: "Treat Chocolate Wafers", price: 50, type: "1 Packet", category: "Snacks Munchies" },
  { name: "Let's Try Bhujia", price: 200, type: "6 Packet", category: "Snacks Munchies" },

  // BREAKFAST
  { name: "Kellogg's Chocos Moon and Stars", price: 100, type: "1 Packet", category: "Breakfast Instant Food" },
  { name: "Kellogg's Cornflakes", price: 100, type: "1 Packet", category: "Breakfast Instant Food" },
  { name: "McCain Smiles", price: 50, type: "1 Packet", category: "Breakfast Instant Food" },
  { name: "Maggi 2-Minute Noodles", price: 50, type: "1 Packet", category: "Breakfast Instant Food" },
  { name: "MTR 3-Minute Breakfast", price: 50, type: "1 Packet", category: "Breakfast Instant Food" },
  { name: "Safal Frozen Peas", price: 50, type: "1 Packet", category: "Breakfast Instant Food" },

  // SWEET TOOTH
  { name: "Snickers", price: 30, type: "1 Bar", category: "Sweet Tooth" },
  { name: "KitKat", price: 100, type: "2 Packet", category: "Sweet Tooth" },
  { name: "Dairy Milk", price: 50, type: "1 Packet", category: "Sweet Tooth" },
  { name: "Ferrero Rocher Moments", price: 500, type: "1 Packet", category: "Sweet Tooth" },
  { name: "Cornetto Ice Cream", price: 50, type: "1 Cone", category: "Sweet Tooth" },
  { name: "Slice Cassata", price: 50, type: "1 Packet", category: "Sweet Tooth" },

  // BAKERY & BISCUITS
  { name: "Biscoff Biscuits", price: 100, type: "1 Packet", category: "Bakery Biscuits" },
  { name: "Hide and Seek Chocolate Chips", price: 150, type: "1 Packet", category: "Bakery Biscuits" },
  { name: "Coconut Cookies", price: 100, type: "1 Jar", category: "Bakery Biscuits" },
  { name: "Haldiram's Cookie Heaven", price: 150, type: "1 Packet", category: "Bakery Biscuits" },
  { name: "Baked Creations", price: 100, type: "1 Packet", category: "Bakery Biscuits" },
  { name: "Parle-G Biscuits", price: 20, type: "1 Packet", category: "Bakery Biscuits" },

  // TEA COFFEE
  { name: "Wagh Bakri Royalty Tea", price: 500, type: "1 Packet", category: "Tea Coffee Health Drink" },
  { name: "Brook Bond Red Label", price: 200, type: "1 Packet", category: "Tea Coffee Health Drink" },
  { name: "Society Tea", price: 300, type: "1 Packet", category: "Tea Coffee Health Drink" },
  { name: "Nescafe Coffee", price: 200, type: "1 Jar", category: "Tea Coffee Health Drink" },
  { name: "Bru Instant Coffee", price: 100, type: "1 Packet", category: "Tea Coffee Health Drink" },
  { name: "Bournvita", price: 200, type: "1 Packet", category: "Tea Coffee Health Drink" },

  // ATTA RICE DAL
  { name: "Fortune Multigrain", price: 200, type: "1 Packet", category: "Atta Rice Dal" },
  { name: "Organic Tatva Flour", price: 300, type: "1 Packet", category: "Atta Rice Dal" },
  { name: "Aashirvaad Aata", price: 500, type: "1 Packet", category: "Atta Rice Dal" },
  { name: "Dawat Basmati Rice", price: 200, type: "1 Packet", category: "Atta Rice Dal" },
  { name: "Fortune Arhar Dal", price: 100, type: "1 Packet", category: "Atta Rice Dal" },
  { name: "Fortune Chana Dal", price: 300, type: "1 Packet", category: "Atta Rice Dal" },

  // MASALA OIL
  { name: "Eastern Kashmiri Chilli", price: 200, type: "1 Packet", category: "Masala Oil More" },
  { name: "Maggi Masala-e-Magic", price: 100, type: "1 Packet", category: "Masala Oil More" },
  { name: "MDH Deggi Mirch", price: 100, type: "1 Packet", category: "Masala Oil More" },
  { name: "Desi Ghee", price: 300, type: "1 Packet", category: "Masala Oil More" },
  { name: "Mustard Oil", price: 200, type: "1 Bottle", category: "Masala Oil More" },
  { name: "Fortune Mustard Oil", price: 200, type: "1 Packet", category: "Masala Oil More" },

  // SAUCES
  { name: "Tops Tomato Ketchup", price: 300, type: "1 Bottle", category: "Sauces Spreads" },
  { name: "Kissan Tomato Ketchup", price: 100, type: "1 Packet", category: "Sauces Spreads" },
  { name: "Del Monte Tomato Ketchup", price: 200, type: "1 Packet", category: "Sauces Spreads" },
  { name: "Red & Green Chilli Sauce", price: 100, type: "2 Bottle", category: "Sauces Spreads" },
  { name: "FunFoods Mayo", price: 200, type: "1 Jar", category: "Sauces Spreads" },
  { name: "Dabur Honey", price: 200, type: "1 Jar", category: "Sauces Spreads" },

  // BABY CARE
  { name: "Teddy Diapers", price: 200, type: "1 Packet", category: "Baby Care" },
  { name: "Little Diapers-XL", price: 300, type: "1 Packet", category: "Baby Care" },
  { name: "Little Diapers-XXL", price: 400, type: "1 Packet", category: "Baby Care" },
  { name: "Johnsons Baby Wipes", price: 300, type: "1 Packet", category: "Baby Care" },
  { name: "Johnsons Baby Soap", price: 200, type: "2 Packets", category: "Baby Care" },
  { name: "Nestle Cerelac", price: 400, type: "1 Packet", category: "Baby Care" },

  // PHARMA WELLNESS
  { name: "For Men Ultra Thin", price: 300, type: "6 Packet", category: "Pharma Wellness" },
  { name: "Manforce 1500 Dots", price: 300, type: "6 Packet", category: "Pharma Wellness" },
  { name: "Durex Invisible 003", price: 300, type: "6 Packet", category: "Pharma Wellness" },
  { name: "Azah Body Messager", price: 600, type: "1 Packet", category: "Pharma Wellness" },
  { name: "Wellness Scrub with Lotion", price: 300, type: "1 Packets", category: "Pharma Wellness" },
  { name: "Handcuffs", price: 200, type: "1 Packet", category: "Pharma Wellness" },

  // PET CARE
  { name: "Drools Focus Dog Food", price: 400, type: "1 Packet", category: "Pet Care" },
  { name: "Pedigree Dog Food", price: 400, type: "1 Packet", category: "Pet Care" },
  { name: "Purepet Dog Food", price: 500, type: "1 Packet", category: "Pet Care" },
  { name: "Purepet Cat Food", price: 400, type: "1 Packet", category: "Pet Care" },
  { name: "Whiskas Cat Food", price: 300, type: "1 Packets", category: "Pet Care" },
  { name: "Purepet Creamy Sticks", price: 300, type: "4 Packet", category: "Pet Care" },
];

export const productData = productDataNotImages.map((product, index) => ({
  productId: index + 1, // unique id
  ...product,
  image: `/images/product-images/product${index + 1}.avif`
}));
