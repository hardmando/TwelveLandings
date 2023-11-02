import styled from "styled-components";

export const StyledTitleWrapper = styled.h1`
  position: absolute;
  font-weight: 600;
  width: 300px;
  margin-top: -100px;
  height: 50px;
  text-align: center;
  ${props =>
          props.type === "primary" ?
                  `
                  font-size: 100px;
                  color: #6f738a;
                  ` :
                  props.type === "secondary" ?
                          `
                    font-size: 20px;
                    color: #6f738a;
                  ` :
                  `
                  font-size: 200px;
                  color: black;
          `
  };
`