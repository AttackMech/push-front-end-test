import PropTypes from "prop-types";
import "./DesktopMenu.css";
import logo from "../Assets/logo.svg";

function DesktopMenu({ menuItems, menuTitle, currentMenuIndex }) {
  const menu = menuItems.map((menuItem, index) => {
    return (
      <div
        className={`menu-item ${
          index === currentMenuIndex ? "menu-item-current" : ""
        }`}
        key={menuItem.name}
      >
        {menuItem.name}
      </div>
    );
  });

  return (
    <>
      <div className="desktop-title">
        <div className="logo-container">
          <img src={logo} alt="Push logo" />
        </div>
        <div className="desktop-menu-title">{menuTitle}</div>
      </div>
      <div className="desktop-menu-items">{menu}</div>
    </>
  );
}

DesktopMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  menuTitle: PropTypes.string,
  currentMenuIndex: PropTypes.number,
};

export default DesktopMenu;
