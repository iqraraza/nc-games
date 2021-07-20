// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SingleReview = () => {
//   const [singleReview, setSingleReview] = useState({});
//   const { review_id } = useParams();
//   useEffect(() => {
//     return axios
//       .get(`https://backend-nc-games.herokuapp.com/api/reviews/${review_id}`)
//       .then((response) => {
//         setSingleReview(response.data.review);
//       });
//   }, [review_id]);
//   return (
//     <div className="review">
//       <h3 className="reviewTitle">{singleReview.title}</h3>
//       <h2>{singleReview.designer}</h2>
//       <p>{singleReview.review_body}</p>
//       <p>Category: {singleReview.category}</p>
//     </div>
//   );
// };
// export default SingleReview;
