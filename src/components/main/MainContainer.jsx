import react from "react";
import Link from "../elements/pagelink/Link";
import LinkContainer from "../elements/pagelink/Link";
import {StyledMainWrapper} from "./styledMain";
import {StyledTitleWrapper} from "../title/styledTitle";
import TitleContainer from "../title/TitleContainer";
import {Outlet} from "react-router-dom";

const MainContainer = () => {
    return (
        <>
            <StyledMainWrapper>
                <TitleContainer content="CHOOSE LANDING" type="secondary" />
                <LinkContainer content="CRYSTAL" link="/crystal"/>
                <LinkContainer content="PLUMBER" link="/bakery"/>
                <LinkContainer content="BICYCLE REPAIR" link="/bicycle"/>
                <LinkContainer content="HANDYMAN" link="/handyman"/>
                <LinkContainer content="ELECTRIC" link="/electric"/>
                <LinkContainer content="CLEANING SERVICES" link="/cleaning"/>
                <LinkContainer content="MOVING SERVICES" link="/moving"/>
                <LinkContainer content="YARD MAINTENANCE" link="/yard"/>
                <LinkContainer content="LAWNCARE SERVICES" link="/lawncare"/>
                <LinkContainer content="PEACHY PUP BAKERY" link="/bakery"/>
                <LinkContainer content="BEARS BEARS" link="/bears"/>
            </StyledMainWrapper>
            <div> <Outlet /> </div>
        </>
    )
}
export default MainContainer;