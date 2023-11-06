import React from "react";
import {
    StyledProductCard,
    StyledProductCardImg,
    StyledProductCardTitle,
    StyledProductCardPrice,
    StyledProductCardButton
} from "./styledProductCard";

const ProductCard = ({content, img, price}) => {
    return (
        <StyledProductCard>
            <StyledProductCardImg src={img}/>
            <StyledProductCardTitle>{content}</StyledProductCardTitle>
            <StyledProductCardPrice>{price}$</StyledProductCardPrice>
            <StyledProductCardButton href="/crystal">BUY NOW</StyledProductCardButton>
        </StyledProductCard>
    )
}
export default ProductCard;