import {StyledTitleWrapper} from "./styledTitle";

const TitleContainer = ({content, type}) => {
    return(
        <StyledTitleWrapper type={type}> {content} </StyledTitleWrapper>
    )
}
export default TitleContainer;