import { Galleria } from "primereact/galleria";
import { slide } from "../../../utils/data";

import "./Carosel.css";

const Carosel = () => {
  console.log({ slide });
  const itemTemplate = (item) => {
    return (
      <img
        src={item.img}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  return (
    <div className="carosel-container d-flex justify-content-center mt-3 w-100">
      <Galleria
        value={slide}
        style={{ width: "67%"}}
        changeItemOnIndicatorHover
        showThumbnails={false}
        showIndicators
        circular
        autoPlay
        item={itemTemplate}
      />
    </div>
  );
};

export default Carosel;
