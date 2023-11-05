import React from "react";
import {StyledCrystalNavLink} from "./styledCrystalNavLink";

const CrystalNavLink = ({content, link}) => {
    return (
        <StyledCrystalNavLink to={link}>{content}</StyledCrystalNavLink>
    )
}
export default CrystalNavLink;