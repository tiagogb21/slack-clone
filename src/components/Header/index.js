import React from "react";

import {
  Container,
  TopNavLeft,
  Clock,
  TopNavCenter,
  Settings,
  Search,
  TopNavRight,
  Question,
  UserCircle,
} from "./styles";

function Header() {
  return (
    <Container>
      {/* Nav Left */}
      <TopNavLeft>
        <Clock />
      </TopNavLeft>
      {/* Nav Center */}
      <TopNavCenter>
        <input type="text" placeholder="Pesquisar" />
        <article>
          <article>
            <Settings />
            <span>Filtrar</span>
          </article>
          <article>
            <Search />
            <span>Pesquisar</span>
          </article>
        </article>
      </TopNavCenter>
      {/* Nav Right */}
      <TopNavRight>
        <Question />
        <UserCircle />
      </TopNavRight>
    </Container>
  );
}

export default Header;
