import { categ } from "../../../utils/data";
import "./Category.css";

const CategoryView = ({ title, img }) => {
  return (
    <div
      className="d-flex"
      style={{
        margin: "0px 25px 0px 0px",
        width: "175px",
        flexDirection: "column",
      }}>
      <img src={img} alt={title} style={{ height: "175px", width: "175px" }} />
      <p className="d-flex justify-content-center">{title}</p>
    </div>
  );
};

const Category = () => {
  return (
    <div className="categ-container">
      {categ?.map((categData, i) => {
        return <CategoryView key={i} {...categData} />;
      })}
    </div>
  );
};

export default Category;
