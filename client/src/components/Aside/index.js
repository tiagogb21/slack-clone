import React from "react";

import { conversationsTopics } from "../../utils/data";

import {
  Container,
  Group,
  Conversations,
  Channels,
  DirectMessages,
  PencilAlt,
} from "./styles";

function Aside() {
  return (
    <Container>
      {/* Group */}
      <Group>
        <h2>Meu Grupo do Slack</h2>
        <PencilAlt />
      </Group>
      {/* conversations */}
      <Conversations>
        <ul>
          {conversationsTopics.map((item) => (
            <li key={item.id}>
              {item.icon}
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
      </Conversations>
      {/* Channels */}
      <Channels>
        <h2>Canais</h2>
      </Channels>
      {/* Direct Messages */}
      <DirectMessages>
        <h2>Menssagens Diretas</h2>
      </DirectMessages>
    </Container>
  );
}

export default Aside;
