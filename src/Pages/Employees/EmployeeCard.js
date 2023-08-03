import { useContext } from "react";
import PropTypes from "prop-types";
import { PlatformContext } from "../../PlatformContext";
import "./EmployeeCard.css";

const totalHoursLabel = "Total hours";

function EmployeeCard({ firstName, lastName, totalHours }) {
  const isMobile = useContext(PlatformContext);
  const containerClasses = `card-container ${
    isMobile ? "card-container-mobile" : "card-container-desktop"
  }`;

  return (
    <div className={containerClasses}>
      <div className="employee-card">
        <div className="employee-name">
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
        <div className="total-hours-container">
          <div className="total-hours-label">{totalHoursLabel}</div>
          <div>{totalHours}</div>
        </div>
      </div>
    </div>
  );
}

EmployeeCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  totalHours: PropTypes.number,
};

export default EmployeeCard;
