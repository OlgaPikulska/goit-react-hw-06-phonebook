import { StyledButton } from './ContactForm';
import styled from "styled-components";

const StyledNumber = styled.span`
margin-right: 5px;
margin-left: 5px;
`
const StyledName = styled.span`
font-weight:bold;
`

export const ContactList = () => {
    return (
        <ul>
            <li key={styled} >
                <StyledName></StyledName>
                <StyledNumber></StyledNumber>
                <StyledButton></StyledButton>
            </li>
        </ul>
    )
}