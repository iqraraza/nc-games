import ViewAllReviews from "./Functions/ViewAllReviews";
import ViewCategories from "./Functions/ViewCategories";
// import CategoryList from "./CategoryList";
import SingleReview from "./IndividualReview";

const Body = () => {
  return (
    <div>
      <ViewAllReviews />
      <ViewCategories />
      {/* <CategoryList /> */}
      <SingleReview />
    </div>
  );
};

export default Body;
