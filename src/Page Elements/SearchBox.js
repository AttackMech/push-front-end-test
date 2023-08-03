import { useContext } from "react";
import { PlatformContext } from "../PlatformContext";
import PropTypes from "prop-types";
import "./SearchBox.css";

const placeholder = "Filter employees by name";

function SearchBox({ setSearchValue }) {
  const isMobile = useContext(PlatformContext);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={isMobile ? "search-full-width" : "search-half-width"}>
      <input
        type="text"
        name="search"
        id="search-box"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

SearchBox.propTypes = {
  setSearchValue: PropTypes.func,
};

export default SearchBox;
