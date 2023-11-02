import {
    StyledCrystalWrapper,
    StyledBackground,
    StyledTopBgVector,
    StyledProductsWrapper,
    StyledBotBgVector,
    StyledBackgroundBot, StyledTopRect, StyledLogo, Logo, StyledSlider, StyledSliderButtons, StyledArrowButton
} from "./styledCrystal";
import background from '../../images/crystal-background.svg';
import vectorbgtop from '../../images/crystal-vector-top.svg'
import vectorbgbot from '../../images/crystal-vector-bot.svg';
import logo from '../../images/crystal-logo.svg';
const CrystalPage = () => {
    return (
        <StyledCrystalWrapper >
            <Logo>
                <StyledLogo src={logo} /> <p>Pop Rock Crystal</p>
            </Logo>
            <div>
                <StyledBackground src={background}/>
                <StyledSlider>
                    <StyledTopRect />
                    <StyledSliderButtons>
                        <StyledArrowButton />
                    </StyledSliderButtons>
                </StyledSlider>
                <StyledTopBgVector src={vectorbgtop} />
            </div>
            <StyledProductsWrapper />
            <StyledBotBgVector src={vectorbgbot} />
            <StyledBackgroundBot />
        </StyledCrystalWrapper>
    )
}
export default CrystalPage;