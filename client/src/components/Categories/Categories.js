import React, { useEffect } from "react";
import Category from "./Category/Category";
import chicken from "../../assets/chicken.jpg";
import fish from "../../assets/fish.jpg";
import beef from "../../assets/beef.jpg";
import drink from "../../assets/drink.jpg";
import pork from "../../assets/pork.jpg";
import dessert from "../../assets/dessert.jpg";
import soup from "../../assets/soup.jpg";
import vegan from "../../assets/vegan.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getDropdownCategories } from "../../redux/actions/recipes";


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

  const dispatch = useDispatch()
  const { dropdownCategories } = useSelector(state => state.recipes)

  useEffect(() => {
    dispatch(getDropdownCategories())
  }, [])

  let updatedDropdown = dropdownCategories.map(dropdown => {
    switch (dropdown.name) {
      case "fish":
        return { ...dropdown, imgPath: fish }
      case "chicken":
        return { ...dropdown, imgPath: chicken }
      case "beef":
        return { ...dropdown, imgPath: beef }
      case "drink":
        return { ...dropdown, imgPath: drink }
      case "dessert":
        return { ...dropdown, imgPath: dessert }
      case "vegan":
        return { ...dropdown, imgPath: vegan }
      case "pork":
        return { ...dropdown, imgPath: pork }
      case "soup":
        return { ...dropdown, imgPath: soup }
    }
  })

  return (
    <div className="mb-20 mt-4">
      <div className="min-h-20 grid md:grid-cols-3  gap-x-5">
        {updatedDropdown.map((category) => (
          <Category key={category._id} data={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
