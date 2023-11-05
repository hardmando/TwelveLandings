import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledCrystalNavLink = styled(Link) `
  color: white;
  width: 100px;
  font-size: 18px;
  z-index: 1;
  max-height: 15px;
  font-family: -apple-system, -blink-mac-system-font, -segoe -u-i, -roboto, -oxygen, -ubuntu, -cantarell, -fira, -sans, -droid, -sans, -helvetica, -neue, sans-serif;
  text-align: center;
  text-decoration: none;
  font-weight: 300;
  position: relative;
  padding: 20px;
  transition: 0.5s;

  &:hover {
    color: ivory;
  }

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 0;
    z-index: 2;
  }

  &:before {
    transition: width 0s ease, background .4s ease;
    left: 10%;
    right: 0;
    bottom: 6px;
    z-index: 2;
  }

  &:after {
    right: 10%;
    bottom: 6px;
    background: ivory;
    transition: width .4s ease;
    z-index: 2;
  }

  &:hover {
    &:before {
      width: 80%;
      background: ivory;
      transition: width .4s ease;
      z-index: 2;
    }

    &:after {
      width: 80%;
      background: 0 0;
      transition: all 0s ease;
      z-index: 2;
    }
  }
`