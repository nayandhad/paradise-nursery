import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Peace Lily",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400",
        description: "Elegant white blooms that purify the air and thrive in low light.",
        cost: "$15.00",
      },
      {
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
        description: "Fast-growing and nearly indestructible, great for beginners.",
        cost: "$12.00",
      },
      {
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1616500268323-4ae1b63f07cf?w=400",
        description: "Hardy plant that releases oxygen at night, perfect for bedrooms.",
        cost: "$18.00",
      },
    ],
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      {
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400",
        description: "Soothing fragrance that helps reduce stress and improve sleep.",
        cost: "$14.00",
      },
      {
        name: "Jasmine",
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400",
        description: "Sweet-scented blooms that fill the room with delightful fragrance.",
        cost: "$16.00",
      },
      {
        name: "Rosemary",
        image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400",
        description: "Aromatic herb that doubles as a culinary ingredient.",
        cost: "$11.00",
      },
    ],
  },
  {
    category: "Insect Repellent Plants",
    plants: [
      {
        name: "Marigold",
        image: "https://images.unsplash.com/photo-1490750967868-88df5691cc34?w=400",
        description: "Bright flowers that naturally repel mosquitoes and aphids.",
        cost: "$9.00",
      },
      {
        name: "Basil",
        image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400",
        description: "Fragrant herb that keeps flies and mosquitoes at bay.",
        cost: "$8.00",
      },
      {
        name: "Lemon Balm",
        image: "https://images.unsplash.com/photo-1599598425947-5202edd56fda?w=400",
        description: "Citrus-scented leaves that deter insects while attracting bees.",
        cost: "$10.00",
      },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1567331711402-509c12c41959?w=400",
        description: "Soothing gel inside its leaves relieves burns and skin irritations.",
        cost: "$13.00",
      },
      {
        name: "Echinacea",
        image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400",
        description: "Boosts immunity and helps fight colds and infections naturally.",
        cost: "$17.00",
      },
      {
        name: "Peppermint",
        image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400",
        description: "Refreshing herb that soothes headaches and digestive issues.",
        cost: "$10.00",
      },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      {
        name: "ZZ Plant",
        image: "https://images.unsplash.com/photo-1599598425947-5202edd56fda?w=400",
        description: "Nearly indestructible, thrives on neglect and low light conditions.",
        cost: "$20.00",
      },
      {
        name: "Pothos",
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400",
        description: "Fast-growing vine that tolerates irregular watering and dim light.",
        cost: "$10.00",
      },
      {
        name: "Cactus",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        description: "Requires minimal water and thrives in bright, sunny spots.",
        cost: "$7.00",
      },
    ],
  },
];

function ProductList({ onGoToCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAddedToCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost, description: plant.description }));
  };

  return (
    <div className="product-list-container">
      <h2>Our Plants</h2>
      {plants.map((group) => (
        <div key={group.category} className="category-section">
          <h3>{group.category}</h3>
          <div className="product-grid">
            {group.plants.map((plant) => (
              <div key={plant.name} className="product-card">
                <img src={plant.image} alt={plant.name} />
                <div className="product-card-info">
                  <h4>{plant.name}</h4>
                  <p>{plant.description}</p>
                  <p className="price">{plant.cost}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAddedToCart(plant.name)}
                  >
                    {isAddedToCart(plant.name) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          className="checkout-btn"
          onClick={onGoToCart}
        >
          Go to Cart ??
        </button>
      </div>
    </div>
  );
}

export default ProductList;
