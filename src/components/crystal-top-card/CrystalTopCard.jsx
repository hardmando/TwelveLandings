import React from "react";
import {StyledCrystalTopCard} from "./styledCrystalTopCard";
import {StyledRectImg} from "../../pages/crystal/styledCrystal";

const CrystalTopCard = ({img, name, price, id, activeId}) => {
    return (
        <StyledCrystalTopCard id={id} activeId={activeId}>
            <StyledRectImg src={img} />
            <p>{name} | {price}$</p>
        </StyledCrystalTopCard>
    )
}
export default CrystalTopCard;