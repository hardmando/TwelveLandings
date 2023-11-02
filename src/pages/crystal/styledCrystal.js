import styled from "styled-components";
import backgroundbot from '../../images/crystal-bg-bot.svg';
import toprect from '../../images/crystal-top-rect.svg';

export const StyledCrystalWrapper = styled.div `
  width: 100%;
  height: 100%;
`
export const StyledBackground = styled.img `
  height: 100%;
  width: 100%;
  filter: blur(68px);
  margin-top: -10%;
  z-index: -1;
`
export const StyledTopBgVector = styled.img `
  height: 100%;
  width: 100%;
  position: relative;
  margin-top: -25%;
`
export const StyledProductsWrapper = styled.div `
  width: 100%;
  background: red;
  height: 1000px;
`
export const StyledBotBgVector = styled.img `
  height: 100%;
  width: 100%;
`
export const StyledBackgroundBot = styled.div `
  height: 1000px;
  width: 100%;
  margin-top: -60%;
  background-repeat: no-repeat;
  background-image: url(${backgroundbot});
  background-size: cover;
  z-index: 0;
`
export const StyledTopRect = styled.div `
  background-image: url(${toprect});
  width: 650px;
  height: 650px;
  position: relative;
  z-index: 1;
  background-repeat: no-repeat;
  filter: drop-shadow(0 0 20px rgb(0 0 0 / 0.2));
  flex: 1;
`
export const StyledLogo = styled.img `
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 1;
  padding: 10px;
`
export const Logo = styled.div `
  color: white;
  text-align: left;
  font-size: 20px;
  width: 20%;
  height: 100px;
  display: flex;
  flex-direction: row;
  z-index: 1;
  position: relative;
  align-items: center;
  padding: 30px;
`
export const StyledSlider = styled.div `
  position: relative;
  z-index: 1;
  height: 700px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 60%;
  margin-top: -50%;
`
export const StyledSliderButtons = styled.div `
`
export const StyledArrowButton = styled.button `
  padding: 20px;
  position: relative;
  margin-top: 0;
`