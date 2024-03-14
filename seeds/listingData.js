const { Listing } = require("../models");

const listingData = [
  {
    address_name: "123 Main St",
    description:
      "Modern 3-bed, 2-bath city home with updated kitchen, stainless steel appliances, granite countertops. Open-concept layout with ample natural light. Private backyard oasis with spacious patio, perfect for entertaining. Conveniently located near amenities, parks, and top-rated schools",
    price: 500000,
    user_id: 1,
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location_id: 1,
    building_type: 1,
    listing_type: 1,
  },
  {
    address_name: "456 round St",
    description:
      "Introducing a cozy 2-bedroom, 1-bathroom urban apartment showcasing a newly renovated kitchen equipped with modern appliances and elegant granite countertops. Bright and airy living room adorned with gleaming hardwood floors throughout. Step outside to enjoy the charming outdoor balcony, perfect for unwinding. Conveniently located within close proximity to local shops, cafes, and public transportation, offering the ideal urban lifestyle experience.",
    price: 300000,
    user_id: 2,
    imageUrl:
      "https://img.freepik.com/free-photo/modern-apartment-architecture_1268-14696.jpg?t=st=1710376010~exp=1710379610~hmac=c774433d2daaa5918d31cdb50e4c2e69ed857eba38d29144f9725595c355e310&w=1480",
    location_id: 2,
    building_type: 2,
    listing_type: 2,
  },
  {
    address_name: "789 Oak Lane",
    description:
      "Contemporary 3-bedroom, 2.5-bathroom townhouse with sleek design. Updated kitchen featuring quartz countertops and stainless steel appliances. Spacious living area with hardwood floors. Master suite with walk-in closet. Attached garage and private patio. Close to shopping and dining.",
    price: 620000,
    user_id: 3,
    imageUrl:
      "https://media.istockphoto.com/id/471569149/photo/modern-cookie-cutter-townhouses.jpg?s=612x612&w=0&k=20&c=o07J7zGzJ8IPan_gJc9kjDzGsuc-OR2mrgM_CK8mRkg=",
    location_id: 3,
    building_type: 4,
    listing_type: 1,
  },
  {
    address_name: "101 Maple Avenue",
    description:
      "Classic 4-bed, 3-bath colonial home with character. Renovated kitchen with farmhouse sink and subway tile backsplash. Formal dining room and cozy family room with fireplace. Master suite with clawfoot tub. Large backyard with deck and garden. Convenient to schools and parks.",
    price: 720000,
    user_id: 4,
    imageUrl:
      "https://t4.ftcdn.net/jpg/02/79/95/39/360_F_279953994_TmVqT7CQhWQJRLXev4oFmv8GIZTgJF1d.jpg",
    location_id: 9,
    building_type: 1,
    listing_type: 1,
  },
  {
    address_name: "222 Pine Street",
    description:
      "Spacious 2-bedroom, 2-bathroom loft-style condo in the heart of downtown. Open floor plan with exposed brick walls and high ceilings. Gourmet kitchen with granite countertops and stainless steel appliances. Balcony with city views. Walkable to shops, restaurants, and public transit.",
    price: 480000,
    user_id: 3,
    imageUrl:
      "https://www.bankrate.com/2015/06/19095912/low-apprasials-and-condo-associations-can-trip-up-mortgages.jpg?auto=webp&optimize=high&crop=16:9",
    location_id: 5,
    building_type: 6,
    listing_type: 1,
  },
  {
    address_name: "333 Cedar Court",
    description:
      "Modern 1-bedroom apartment with sleek finishes. Open-concept layout with hardwood floors and plenty of natural light. Updated kitchen with quartz countertops and breakfast bar. In-unit laundry and private balcony. Fitness center and rooftop deck in building. Close to transportation.",
    price: 350000,
    user_id: 2,
    imageUrl:
      "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg",
    location_id: 6,
    building_type: 2,
    listing_type: 2,
  },
  {
    address_name: "444 Birch Boulevard",
    description:
      "Cozy 2-bed, 1-bath bungalow with charm. Bright and airy living space with original hardwood floors. Kitchen features vintage cabinets and tile countertops. Fenced backyard with deck and garden beds. Detached garage and driveway parking. Near schools and community amenities.",
    price: 380000,
    user_id: 1,
    imageUrl:
      "https://www.royalhomes.com/wp-content/uploads/2017/06/bungalow.jpg",
    location_id: 7,
    building_type: 5,
    listing_type: 1,
  },
  {
    address_name: "555 Walnut Way",
    description:
      "Prime retail space available for lease in bustling downtown area. High foot traffic and visibility. Spacious layout with large storefront windows. Ideal for retail, restaurant, or office use. Close to public transportation and amenities.",
    price: 8000,
    user_id: 2,
    imageUrl:
      "https://media.istockphoto.com/id/135877652/photo/new-shopping-center.jpg?s=612x612&w=0&k=20&c=rmPt1VBDUhPI_nqvtOL7xgKUtk1n-HjLZi--njdgBPc=",
    location_id: 8,
    building_type: 7,
    listing_type: 3,
  },
  {
    address_name: "666 Spruce Street",
    description:
      "Quaint 3-bedroom cottage with updates. Renovated kitchen with granite countertops and stainless steel appliances. Cozy living room with wood-burning stove. Sunroom overlooking backyard. Detached studio perfect for office or guest space. Walking distance to shops and restaurants.",
    price: 420000,
    user_id: 3,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bignor_cottage.JPG/1600px-Bignor_cottage.JPG",
    location_id: 4,
    building_type: 3,
    listing_type: 2,
  },
];

const seedListing = async () => Listing.bulkCreate(listingData);

module.exports = seedListing;
