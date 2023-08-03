import PropTypes from "prop-types";
import "./Page.css";
import Employees from "./Employees/Employees";
import UserCard from "../Page Elements/UserCard";
import { useContext } from "react";
import { PlatformContext } from "../PlatformContext";

// current logged in user info
const firstName = "John";
const lastName = "Smith";
const email = "johnsmith@gmail.com";

function Page({ title }) {
  const isMobile = useContext(PlatformContext);
  const containerClassNames = `page-container ${
    isMobile ? "page-container-mobile" : ""
  }`;

  return (
    <>
      <div className="page-title-container">
        <div className="page-title">{title}</div>
        <div className="current-user-container">
          <UserCard firstName={firstName} lastName={lastName} email={email} />
        </div>
      </div>
      <div className={containerClassNames}>
        <Employees />
      </div>
    </>
  );
}

Page.propTypes = {
  title: PropTypes.string,
};

export default Page;
