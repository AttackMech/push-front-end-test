import PropTypes from "prop-types";
import "./UserCard.css";

function UserCard({ firstName = " ", lastName = " ", email }) {
  const initials =
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

  return (
    <>
      <div className="avatar">{initials}</div>
      <div>
        <div className="user-name">{`${firstName} ${lastName}`}</div>
        <div className="user-email">{email}</div>
      </div>
    </>
  );
}

UserCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

export default UserCard;
