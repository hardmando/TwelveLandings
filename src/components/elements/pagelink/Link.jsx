import React from "react";
import { StyledLinkWrapper } from "./styledLink";
import { Link } from "react-router-dom";

const LinkContainer = ({content, link}) => {

    const [hover, setHover] = React.useState(false)

    const hoverOnHandler = () => {
        setHover(true);
    }
    const hoverOffHandler = () => {
        setHover(false);
    }

    return (
        <Link to={link}
              onMouseOver={hoverOnHandler}
              onMouseOut={hoverOffHandler}
              style={
                  {
                      "color": "#282c34",
                      "background": hover ? "#436E8E" : "ivory",
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
                }
              }
        >
            <StyledLinkWrapper>
                {content}
            </StyledLinkWrapper>
        </Link>
    )
}
export default LinkContainer;