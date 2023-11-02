import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLinkWrapper = styled.div`
`
export const StyledLink = styled(Link)`
  background: #ebcbe0;
  color: #2b3a3f;
  width: 100px;
  max-height: 20px;
  margin-left: 0;
  text-decoration: none;
  text-align: center;
  font-family: -apple-system, -blink-mac-system-font, -segoe -u-i, -roboto, -oxygen, -ubuntu, -cantarell, -fira, -sans, -droid, -sans, -helvetica, -neue, sans-serif;
  font-weight: bold;
  font-size: 10px;
  flex-grow: 1;
  padding: 10px 0 10px 0;
  position: relative;
  transition: 0.5s;
  &:hover {
    background: #2b3a3f;
    color: #ebcbe0;
  }

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 0;

  }

  &:before {
    transition: width 0s ease, background .4s ease;
    left: 10%;
    right: 0;
    bottom: 6px;
  }

  &:after {
    right: 10%;
    bottom: 6px;
    background: #ebcbe0;
    transition: width .4s ease;
  }

  &:hover {
    &:before {
      width: 80%;
      background: ivory;
      transition: width .4s ease;
    }

    &:after {
      width: 80%;
      background: 0 0;
      transition: all 0s ease;
    }
  }
`