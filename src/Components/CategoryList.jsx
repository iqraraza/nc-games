// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const CategoryList = () => {
//   const [categoryPageContent, setCategoryPageContent] = useState([]);
//   const { reviews } = useParams();

//   useEffect(() => {
//     axios
//       .get(
//         `https://backend-nc-games.herokuapp.com/api/categories?slug=${reviews}`
//       )
//       .then((response) => {
//         setCategoryPageContent(response.data.reviews);
//       });
//   }, [reviews]);

//   return (
//     <ul className="itemList">
//       {categoryPageContent.map((category) => {
//         return (
//           <li key={category.slug}>
//             <h3>{category.slug}</h3>
//             <p>{category.description}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default CategoryList;
