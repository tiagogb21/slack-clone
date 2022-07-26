import styled from "styled-components";

import { HiOutlinePencilAlt } from "react-icons/hi";

export const Container = styled.div`
  height: 93vh;
  width: 290px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: var(--bd-purple);
  color: var(--white);

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 400px) {
    width: 100px;
  }
`;

export const Group = styled.div`
  border-top: 1px solid var(--light-low-gray);
  border-bottom: 1px solid var(--light-low-gray);
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    font-size: 18px;
    font-weight: bolder;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > h2:hover {
    cursor: pointer;
  }
`;

export const PencilAlt = styled(HiOutlinePencilAlt)`
  width: 35px;
  height: 35px;
  color: var(--bd-purple);
  padding: 5px;
  background: white;
  &:hover {
    cursor: pointer;
  }
`;

export const Conversations = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > ul {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  > ul > li {
    display: flex;
    font-size: 16px;
    color: var(--light-gray);
    padding: 10px 20px;
  }

  > ul > li:first-child {
    color: white;
  }

  > ul > li:hover {
    cursor: pointer;
    background: var(--bd-bold-purple);
  }

  > ul > li > h3 {
    margin-left: 10px;
  }
`;

export const Channels = styled.div``;

export const DirectMessages = styled.div``;
