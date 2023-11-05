import styled from "styled-components";

export const StyledCrystalTopCard = styled.div `
  ${props => 
    props.id === props.activeId ?
        `
            display: block;
        ` : 
    `
        display: none;
    `
  };
`