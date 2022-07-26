import styled, { css } from "styled-components";

import { AiOutlineClockCircle, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";

// Components:

export const Container = styled.div`
  width: 100vw;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bd-bold-purple);
  padding: 5px;
`;

export const TopNavLeft = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const TopNavCenter = styled.div`
  flex-grow: 2;
  background: var(--bd-light-purple);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;

  > input {
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 70%;
    border: 1px solid var(--iron);
    background: inherit;
    margin-right: 15px;
    cursor: pointer;
  }

  > input::placeholder {
    color: white;
  }

  > article {
    width: 7%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 5px;
  }

  > article > article {
    position: relative;
    display: inline-block;
  }

  > article > article > span {
    position: absolute;
    visibility: hidden;
    font-size: 13px;
    background: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    top: 120%;
    margin-left: -40px;
    margin-bottom: 5px;
    padding: 10px;
  }

  > article > article:hover span {
    visibility: visible;
  }

  > article > article > span:after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #000 transparent;
  }
`;

export const TopNavRight = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  padding: 5px 20px;
  align-items: center;
`;

// Icons:

const iconCss = css`
  width: 20px;
  height: 20px;
  /* Cor dos icones */
  fill: var(--white);
`;

export const Clock = styled(AiOutlineClockCircle)`
  ${iconCss}
`;

export const Settings = styled(GoSettings)`
  width: 15px;
  height: 15px;
  /* Cor dos icones */
  fill: var(--white);
  transform: rotate(-90deg);
`;

export const Search = styled(BsSearch)`
  width: 15px;
  height: 15px;
  /* Cor dos icones */
  fill: var(--light-gray);
`;

export const Question = styled(AiOutlineQuestionCircle)`
  ${iconCss}
`;

export const UserCircle = styled(BiUserCircle)`
  width: 30px;
  height: 30px;
  fill: var(--light-gray);
  background: white;
  border-radius: 6px;
  margin-left: 20px;
`;
