import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      console.log(reviewsFromApi);
      setReviews(reviewsFromApi);
    });
  }, []);
  return (
    <div>
      <p>All my reviews here</p>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <img
                style={{ height: "80px" }}
                src={review.review_img_url}
                alt="game"
              ></img>
              <h3>
                {review.title} - {review.designer}
              </h3>
              <p>{review.owner}</p>
              <p>{review.review_body}</p> {/* Truncate body */}
              <p>{review.category}</p>
              <p>{review.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AllReviews;
