import PropTypes from "prop-types";

export const Filter = ({ onChange }) => {
    return (
        <>
        <input type="text" onChange={onChange} />
        </>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}