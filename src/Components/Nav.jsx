import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-nc-games.herokuapp.com/api/categories")
      .then((response) => {
        setCategories(response.data.categories);
      });
  }, []);
  return (
    <main>
      <ul className="categoriesList">
        {categories.map((category) => {
          // {
          //   console.log(`/items?category_name=${category.slug}`);
          // }
          return (
            <li key={category.slug}>
              <Link to={`/categories/${category.slug}`}>
                <h3>{category.slug}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Nav;
