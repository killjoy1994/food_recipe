import React from "react";
import Category from "./Category/Category";
import chicken from "../../assets/chicken.jpg";
import beef from "../../assets/beef.jpg";
import drink from "../../assets/drink.jpg";
import dessert from "../../assets/dessert.jpg";
import soup from "../../assets/soup.jpg";
import vegan from "../../assets/vegan.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Chicken",
      imgPath: chicken,
    },
    {
      id: 2,
      name: "Beef",
      imgPath: beef,
    },
    {
      id: 3,
      name: "Drink",
      imgPath: drink,
    },
    {
      id: 4,
      name: "Dessert",
      imgPath: dessert,
    },
    {
      id: 5,
      name: "Soup",
      imgPath: soup,
    },
    {
      id: 6,
      name: "Vegan",
      imgPath: vegan,
    },
  ];

  return (
    <div className="mb-20 mt-4">
      <div className="min-h-20 grid md:grid-cols-3  gap-x-5">
        {categories.map((category) => (
          <Category key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
