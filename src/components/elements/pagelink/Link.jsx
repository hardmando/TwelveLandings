import React from "react";
import { StyledLinkWrapper, StyledLink } from "./styledLink";

const LinkContainer = ({content, link}) => {

    return (
        <StyledLink to={link}>
            <StyledLinkWrapper>
                {content}
            </StyledLinkWrapper>
        </StyledLink>
    )
}
export default LinkContainer;