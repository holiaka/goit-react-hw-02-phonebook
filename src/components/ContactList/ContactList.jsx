import PropTypes from "prop-types";
import { ContactListItem } from "components/ContactListItem/ContactListItem";
export const ContactList = ({ contacts }) => {
    return (<ul>
        {contacts().map(({ id, name, number }) => (
            <li key={id}>
                <ContactListItem name={name} number={number}></ContactListItem>
            </li>
        ))}
    </ul>);
}

ContactList.propTypes = {
    contacts: PropTypes.func.isRequired,
}