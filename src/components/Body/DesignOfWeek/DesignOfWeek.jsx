import {designOfWeek} from "../../../utils/data"
import "./DesignOfWeek.css";

const DesignOfWeek = () => {
  return (
    <div className="design-of-week-container">
      <div className="dc-title">Design of the week</div>
      <div className="image-button">
        <div>
            <img className="w-100" src={designOfWeek?.[0]?.img} />
        </div>
        <div>
            <img className="w-100" src={designOfWeek?.[1]?.img} />
        </div>
      </div>
    </div>
  );
};

export default DesignOfWeek;
