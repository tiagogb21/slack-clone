import React from "react";
import { BiMessageRoundedDetail, BiPencil } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiAtSign } from "react-icons/fi";
import { HiOutlineBookmark } from "react-icons/hi";
import { RiWechatLine } from "react-icons/ri";

export const conversationsTopics = [
  {
    id: 1,
    name: "Conversas",
    icon: <BiMessageRoundedDetail />,
  },
  {
    id: 2,
    name: "Mensagens Diretas",
    icon: <RiWechatLine />,
  },
  {
    id: 3,
    name: "Menções e Reações",
    icon: <FiAtSign />,
  },
  {
    id: 4,
    name: "Rascunhos",
    icon: <BiPencil />,
  },
  {
    id: 5,
    name: "Itens Salvos",
    icon: <HiOutlineBookmark />,
  },
  {
    id: 6,
    name: "Mais",
    icon: <BsThreeDotsVertical />,
  },
];
