import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      console.log(categoriesFromApi);
      setCategories(categoriesFromApi);
    });
  }, []);
  return (
    <div>
      <p>All my Categories here</p>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <h3>{category.slug}</h3>
              <h4>{category.description}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AllCategories;
