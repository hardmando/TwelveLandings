import styled from "styled-components";

export const StyledProductCard = styled.div `
  width: 15%;
  height: 22vw;
  background: white;
  border-radius: 8%;
  margin: 30px;
  text-align: center;
  border: 3px solid #DDDDDD;
  padding: 50px;
  transition: 0.5s;
  &:hover {
    filter: drop-shadow(0 20px 20px rgb(0 0 0 / 0.2));
  }
`
export const StyledProductCardTitle = styled.p `
  font-size: 18px;
`
export const StyledProductCardImg = styled.img `
  height: 15vw;
`
export const StyledProductCardPrice = styled.p `
  font-weight: 700;
  color: #317189;
`
export const StyledProductCardButton = styled.a `
  padding: 15px 20px;
  background: white;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  filter: drop-shadow(0 0 20px rgb(0 0 0 / 0.2));
  background: -webkit-linear-gradient(#75cceb, #6fb4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2.5px solid #6fb4ff;
  position: relative;
  top: 1vw;
`