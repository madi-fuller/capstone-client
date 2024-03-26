
import info from "../../assets/icons/information.png";
import "./EnvironmentDetailsTooltip.scss";

function EnvironmentDetailsTooltip() {
  return (
    <div className="tooltip-trigger" >
      <img className="tooltip__icon"src={info} alt="info icon" />
      <div className="tooltip">Tooltip Text</div>
    </div>
  );
}

export default EnvironmentDetailsTooltip;
