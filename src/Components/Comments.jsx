import { useEffect, useState } from "react";

const Comments = ({ reviewId }) => {
  console.log(reviewId);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://backend-nc-games.herokuapp.com/api/reviews/${reviewId}/comments`
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
      });
  }, [reviewId]);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default Comments;
