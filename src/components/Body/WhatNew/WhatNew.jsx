import { categ2 } from "../../../utils/data";
import "./WhatNew.css";

const Card = ({ img, title }) => {
  return (
    <div className="card-view">
      <div>
        <img src={img} alt={title} />
      </div>
      <p className="m-0 pt-2">{title}</p>
    </div>
  );
};

const WhatNew = () => {
  console.log({ categ2 });
  return (
    <div className="whatnew-container">
      {categ2?.map((v, i) => {
        return <Card key={i} {...v} />;
      })}
    </div>
  );
};

export default WhatNew;
