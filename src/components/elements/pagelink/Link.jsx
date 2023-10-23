import react from "react";

import {StyledLinkWrapper} from "./styledLink";
import {Link} from "react-router-dom";

const LinkContainer = ({content, link}) => {
    return (
        <Link to={link}
            style={{
                "color": "#282c34",
                "background": "ivory",
                "width": "100px",
                "maxHeight": "20px",
                "textDecoration": "none",
                "textAlign": "center",
                "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                "fontWeight": "bold",
                "fontSize": "10px",
                "flexGrow": "2",
                "padding": "10px 0 10px 0",
                "position": "relative",
            }}
        >
            <StyledLinkWrapper>
                {content}
            </StyledLinkWrapper>
        </Link>
    )
}
export default LinkContainer;