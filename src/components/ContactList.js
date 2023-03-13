import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Contact } from './Contact';


export const ContactList = () => {
    const contacts = useSelector(getContacts);

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} >
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    )
}