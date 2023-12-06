import "./Body.css";
import Category from "./Category/Category";
import Carosel from "./Carosel/Carosel";
import WhatNew from "./WhatNew/WhatNew";
import DesignOfWeek from "./DesignOfWeek/DesignOfWeek";
import Masonry from "./Masonry/Masonry";

const Body = () => {
  return (
    <div className="body-container">
      <Category />
      <Carosel />
      <WhatNew />
      <DesignOfWeek />
      <Masonry/>
    
    </div>
  );
};

export default Body;
