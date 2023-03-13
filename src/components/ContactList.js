import { StyledButton } from './ContactForm';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';


const StyledNumber = styled.span`
margin-right: 5px;
margin-left: 5px;
`
const StyledName = styled.span`
font-weight:bold;
`

export const ContactList = () => {
    const contacts = useSelector(getContacts);

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} >

                    <StyledName>{contact.name}</StyledName>
                    <StyledNumber>{contact.number}</StyledNumber>
                    <StyledButton></StyledButton>
                </li>
            ))}
        </ul>
    )
}