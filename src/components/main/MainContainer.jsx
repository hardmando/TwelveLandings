import LinkContainer from "../elements/pagelink/Link";
import { StyledMainWrapper, StyledList, StyledHeaderWrapper } from "./styledMain";
import TitleContainer from "../title/TitleContainer";
import { Outlet } from "react-router-dom";

const links = [
    {
        title: "CRYSTAL",
        link: "/crystal"
    },
    {
        title: "PLUMBER",
        link: "/plumber"
    },
    {
        title: "HANDYMAN",
        link: "/bicycle"
    },
    {
        title: "HANDYMAN",
        link: "/handyman"
    },
    {
        title: "ELECTRIC",
        link: "/electric"
    },
    {
        title: "CLEANING SERVICES",
        link: "/cleaning"
    },
    {
        title: "MOVING SERVICES",
        link: "/moving"
    },
    {
        title: "YARD MAINTENANCE",
        link: "/yard"
    },
    {
        title: "LAWNCARE SERVICES",
        link: "/lawncare"
    },
    {
        title: "PEACHY PUP BAKERY",
        link: "/bakery"
    },
    {
        title: "BEARS BEARS",
        link: "/bears"
    },
]

const MainContainer = () => {
    return (
        <>
            <StyledMainWrapper>
                <StyledHeaderWrapper>
                    <TitleContainer content="CHOOSE YOUR LANDING" type="secondary" />
                    <StyledList style = {{display:"flex"}}>
                        {links.map((link) => <LinkContainer content={link.title} link={link.link} />)}
                        {/*<LinkContainer content="CRYSTAL" link="/crystal"/>*/}
                        {/*<LinkContainer content="PLUMBER" link="/plumber"/>*/}
                        {/*<LinkContainer content="BICYCLE REPAIR" link="/bicycle"/>*/}
                        {/*<LinkContainer content="HANDYMAN" link="/handyman"/>*/}
                        {/*<LinkContainer content="ELECTRIC" link="/electric"/>*/}
                        {/*<LinkContainer content="CLEANING SERVICES" link="/cleaning"/>*/}
                        {/*<LinkContainer content="MOVING SERVICES" link="/moving"/>*/}
                        {/*<LinkContainer content="YARD MAINTENANCE" link="/yard"/>*/}
                        {/*<LinkContainer content="LAWNCARE SERVICES" link="/lawncare"/>*/}
                        {/*<LinkContainer content="PEACHY PUP BAKERY" link="/bakery"/>*/}
                        {/*<LinkContainer content="BEARS BEARS" link="/bears"/>*/}
                    </StyledList>
                </StyledHeaderWrapper>
            </StyledMainWrapper>
            <div> <Outlet /> </div>
        </>
    )
}
export default MainContainer;