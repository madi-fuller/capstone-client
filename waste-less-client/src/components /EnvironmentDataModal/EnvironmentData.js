import "./EnvironmentData.scss";
import planet from "../../assets/images/question-planet.png";
import water from "../../assets/icons/water-drop.png";
import transport from "../../assets/icons/transportation (1).png";
import land from "../../assets/icons/land (1).png";
import co2 from "../../assets/icons/carbon-footprint.png";
import Tooltip from "@mui/material/Tooltip";

function EnvironmentData({ onClose, selectedItem, environmentalImpact }) {
  if (!environmentalImpact) {
    return null;
  }
  const { carbon_footprint, land_usage, water_usage, energy_consumption } =
    environmentalImpact[0];

  return (
    <div className="environment-data">
      <div className="environment-data__container">
        <div className="environment-data__header">
          <p onClick={() => onClose()} className="environment-data__close">
            &times;
          </p>
          <div className="environment-data__header-container">
            <h3 className="environment-data__item-name">{selectedItem}</h3>
            <img
              className="environment-data__image"
              src={planet}
              alt="planet with question mark"
            />
          </div>
        </div>
        <div className="environment-data__content container">
          <div className="environment-data__title-container row">
            <p className="environment-data__title col-6">
              Environmental Impact Factors
            </p>
            <p className="environment-data__title col-2"> Amount </p>
            <p className="environment-data__title col-4">
              {" "}
              Unit of Measurement
            </p>
          </div>
          <div className="row">
            <p className="col-6">Production C02 Emissions: </p>
            <p className="col-2"> {carbon_footprint} </p>
            <p className="col-4"> kg C02 /kg </p>
            <Tooltip
              title="Amount of carbon dioxide released during the manufacturing, cultivation and processing stages of food production"
              placement="right"
            >
              <img
                className="environment-data__icon col-1"
                src={co2}
                alt="foot"
              />
            </Tooltip>
          </div>
          <div className="row">
            <p className="col-6">Water Usage: </p>
            <p className="col-2"> {water_usage} </p>
            <p className="col-4"> L/Kg </p>
            <Tooltip
              title="Amount of water consumer throughout the production, processing and distribution of food"
              placement="right"
            >
              <img
                className="environment-data__icon col-1"
                src={water}
                alt="water drop"
              />
            </Tooltip>
          </div>
          <div className="row">
            <p className="col-6">Land Usage: </p>
            <p className="col-2">{land_usage} </p>
            <p className="col-4"> m²/Kg </p>
            <Tooltip
              title="Amount of land area required for food production including cultivation, farming and processing"
              placement="right"
            >
              <img
                className="environment-data__icon col-1"
                src={land}
                alt="plant budding"
              />
            </Tooltip>
          </div>
          <div className="row">
            <p className="col-6">Transportation C02 Emissions: </p>
            <p className="col-2"> {energy_consumption} </p>
            <p className="col-4"> kg C02 /kg</p>
            <Tooltip
              title="Amount of carbon dioxide released into the atmosphere during the transportation of food items"
              placement="right"
            >
              <img
                className="environment-data__icon col-1"
                src={transport}
                alt="plane truck and boat"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnvironmentData;
