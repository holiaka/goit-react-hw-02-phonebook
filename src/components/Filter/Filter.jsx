import PropTypes from "prop-types";

export const Filter = ({ onChange }) => {
    return (
        <>
        <p>Find contacts by name</p>
        <input type="text" onChange={onChange} />
        </>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}