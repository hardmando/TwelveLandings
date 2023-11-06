import styled from "styled-components";
import backgroundbot from '../../images/crystal-bg-bot.svg';
import toprect from '../../images/crystal-top-rect.svg';
import {Link} from "react-router-dom";

export const StyledCrystalWrapper = styled.div `
  width: 100%;
  height: 100%;
`
export const StyledBackground = styled.img `
  height: 100%;
  width: 100%;
  filter: none;
  margin-top: -10%;
  transition: 1s ;
  ${props =>
          props.blur ? `
           filter: blur(58px);
          ` :
          `
            filter: none;
          `
    
  };
  }
`
export const StyledTopBgVector = styled.img `
  height: 100%;
  width: 100%;
  position: relative;
  margin-top: -25%;
`
export const StyledProductsWrapper = styled.div `
  width: 100%;
  background: white;
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  max-height: 1000px;
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
  justify-content: center;
  text-align: center;
  font-size: 22px;
  font-weight: 200;
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
  text-decoration: none;
`
export const StyledSlider = styled.div `
  position: relative;
  z-index: 1;
  height: 700px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 55vw;
  margin-top: -50%;
`
export const StyledSliderButtons = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  background: white;
  border-radius: 5px;
  filter: drop-shadow(0 0 20px rgb(0 0 0 / 0.2));
  padding: 10px;
  margin-left: 20px;
`
export const StyledArrowButton = styled.button `
  padding: 20px;
  position: relative;
  margin-top: 0;
  background: white;
  border: none;
  filter: drop-shadow(0 0 20px rgb(0 0 0 / 0.2));
  border-radius: 5px;
  z-index: 3;
`
export const StyledHeader = styled.div `
  width: 97%;
  display: flex;
  flex-direction: row;
  z-index: 1;
  justify-content: space-between;
`
export const StyledLinkWrapper = styled.div `
  width: 50%;
  z-index: 1;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`
export const StyledRectImg = styled.img `
  margin-top: 20%;
  max-height: 350px;
  margin-left: 5%;
`
export const StyledSliderDot = styled.span `
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-top: 4%;
  ${props =>
          props.id === props.activeId ? 
                  `
                    background-color: #8A93E5;
                  ` :
                  `
                    background-color: #D7DBFF;
                  `
  };
`
export const StyledTopTextWrapper = styled.div `
  width: 1000px;
  height: 500px;
  z-index: 1;
  position: absolute;
  top: 500px;
  margin-left: 100px;
`
export const StyledTopTextSubHeader = styled.p `
  color: white;
  font-size: 52px;
  font-weight: 300;
  padding: 0;
  margin-bottom: 2%;

`
export const StyledTopTextHeader = styled.p `
  color: white;
  font-size: 80px;
  font-weight: 800;
  padding: 0;
  margin: 0;
`
export const StyledTopText = styled.p `
  color: black;
  font-size: 24px;
  width: 550px;
  font-weight: 250;
`
export const StyledTopButton = styled(Link)`
  text-decoration: none;
  top: 50px;
  margin-right: 40px;
  position: relative;
  color: #317189;
  ${props => 
    props.type === "shop" ?`
        background-color: white;
        border-radius: 15px;
        font-size: 18px;
        font-weight: 600;
        padding: 20px 35px;
    ` :
    props.type === "about" ? `
        font-size: 18px;
        font-weight: 300;
        background: none;
    ` :
    `
    color: black;        
    `
}
`
export const StyledScrollDownImg = styled.img `
  height: 50px;
  width: 100%;
`