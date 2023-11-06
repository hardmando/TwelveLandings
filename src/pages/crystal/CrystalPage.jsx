import React, {useState} from "react";
import {
    StyledCrystalWrapper,
    StyledBackground,
    StyledTopBgVector,
    StyledProductsWrapper,
    StyledBotBgVector,
    StyledBackgroundBot,
    StyledTopRect,
    StyledLogo,
    Logo,
    StyledSlider,
    StyledSliderButtons,
    StyledArrowButton,
    StyledHeader,
    StyledLinkWrapper,
    StyledRectImg,
    StyledSliderDot,
    StyledTopTextWrapper,
    StyledTopTextSubHeader,
    StyledTopTextHeader,
    StyledTopText, StyledTopButton, StyledScrollDownImg
} from "./styledCrystal";
import background from '../../images/crystal-background.svg';
import vectorbgtop from '../../images/crystal-vector-top.svg'
import vectorbgbot from '../../images/crystal-vector-bot.svg';
import logo from '../../images/crystal-logo.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import CrystalNavLink from "../../components/crystal-nav-link/CrystalNavLink";
import agate1 from "../../images/rock.png"
import agate2 from "../../images/rock2.jpg"
import agate3 from "../../images/rock3.jpg"
import scrolldownimg from "../../images/crystal-scrolldownimg.svg"
import CrystalTopCard from "../../components/crystal-top-card/CrystalTopCard";
const navLinks = [
    {
        title: "Home",
        link: "#"
    },
    {
        title: "Shop",
        link: "#"
    },
    {
        title: "About Us",
        link: "#"
    },
    {
        title: "Help",
        link: "#"
    }
]

const products = [
    {
        id: 1,
        img: agate1,
        name: "CRYSTAL AGATE PHONE GRIP 1",
        price: "18.99"
    },
    {
        id: 2,
        img: agate2,
        name: "CRYSTAL AGATE PHONE GRIP 2",
        price: "14.99"
    },
    {
        id: 3,
        img: agate3,
        name: "CRYSTAL AGATE PHONE GRIP 3",
        price: "19.99"
    },
]


const CrystalPage = () => {

    const [productRect, setProductRect] = React.useState(2);
    const [isBgBlurred, setIsBgBlurred] = useState(false);

    const blurBg = () => {
        setIsBgBlurred(true);
    }

    const handleArrowClick = (e) => {
        if(e.target.id === "left_arrow") {
            if (productRect > 1) {
                setProductRect(productRect - 1);
            } else {
                setProductRect(products.length);
            }
        } else if(e.target.id === "right_arrow") {
            if (productRect < products.length) {
                setProductRect(1 + +productRect);
            } else {
                setProductRect(1)
            }
        }
        console.log(productRect);
    }
    return (
        <StyledCrystalWrapper >
            <StyledHeader>
                <a style={{textDecoration:"none"}} href="/crystal">
                    <Logo>
                        <StyledLogo src={logo} /> <p>Pop Rock Crystal</p>
                    </Logo>
                </a>
                <StyledLinkWrapper>
                    {navLinks.map((link) => <CrystalNavLink content={link.title} link={link.link} />)}
                </StyledLinkWrapper>
            </StyledHeader>
            <div>
                <StyledBackground onLoad={blurBg} blur={isBgBlurred} src={background}/>
                <StyledTopTextWrapper>
                    <StyledTopTextSubHeader>Welcome to</StyledTopTextSubHeader>
                    <StyledTopTextHeader>Pop Rock Crystal Shop!</StyledTopTextHeader>
                    <StyledTopText>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
                    </StyledTopText>
                    <StyledTopButton type={"shop"} >SHOP NOW</StyledTopButton>
                    <StyledTopButton type={"about"} >about us</StyledTopButton>
                </StyledTopTextWrapper>
                <StyledSlider>
                    <StyledTopRect >
                        {products.map((product) => <CrystalTopCard activeId={productRect} id={product.id} key={product.id} img={product.img} name={product.name} price={product.price} />)}
                    </StyledTopRect>
                    <StyledSliderButtons>
                        <StyledArrowButton onClick={handleArrowClick} id="left_arrow" ><FontAwesomeIcon icon={faArrowLeft} size="1x"></FontAwesomeIcon></StyledArrowButton>
                        <StyledSliderDot id={1} activeId={productRect} />
                        <StyledSliderDot id={2} activeId={productRect} />
                        <StyledSliderDot id={3} activeId={productRect} />
                        <StyledArrowButton onClick={handleArrowClick} id="right_arrow" ><FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon></StyledArrowButton>
                    </StyledSliderButtons>
                </StyledSlider>
                <StyledTopBgVector src={vectorbgtop} />
            </div>
            <StyledScrollDownImg src={scrolldownimg} />
            <StyledProductsWrapper >

            </StyledProductsWrapper>
            <StyledBotBgVector src={vectorbgbot} />
            <StyledBackgroundBot />
        </StyledCrystalWrapper>
    )
}
export default CrystalPage;