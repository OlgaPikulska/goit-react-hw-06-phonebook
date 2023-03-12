import styled from "styled-components";

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
margin-left: 10px;
`

const StyledInput = styled.input`
margin-top: 5px;
width: 200px;
`


export const Filter = () => {
    return (
        <>
            <StyledLabel>
                Find contacts by name
                <StyledInput type="text" />
            </StyledLabel>
        </>
    )
}