import PropTypes from "prop-types";

export const ContactListItem = ({ name, number }) => {
    return (
        <p>{name}:<span>{number}</span></p>
    );
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
