import styled from "styled-components";

export const StyledTitleWrapper = styled.p`
  position: absolute;
  margin: 0 44%;
  font-weight: 600;
  padding: 20px 0;
  width: 200px;
  text-align: center;
  ${props =>
          props.type === "primary" ?
                  `
                  font-size: 100px;
                  color: #fffff0;
                  ` :
                  props.type === "secondary" ?
                          `
                    font-size: 20px;
                    color: #99D8E8;
                  ` :
                  `
                  font-size: 200px;
                  color: black;
          `
  };
`