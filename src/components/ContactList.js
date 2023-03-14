import { useSelector } from 'react-redux';
import { getContacts, getFilters } from 'redux/selectors';
import { Contact } from './Contact';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filterValue = (useSelector(getFilters)).value;

    return (
        <ul>
            {contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase())).map(contact => (
                <li key={contact.id} >
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    )
}