import styled from "styled-components"
// import "./App.css"


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
color:var(--lightBlue)
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.2rem 0;
transition:all 0.5s ease-in-out !important;
&:hover{background:(var--lightBlue)!important;
color:var(--mainYellow);
};
&:focus{
    outline: none;
}

`;
