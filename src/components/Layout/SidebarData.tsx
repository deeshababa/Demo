import React from "react";
import * as FaIcons from "react-icons/fa";
export const SidebarData = [
  {
    title: "Landing Page",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Orders",
    path: "/orderDetails",
    icon: <FaIcons.FaUsers />,
  },
  {
    title: "Tournament",
    path: "/tournamentCreate",
    icon: <FaIcons.FaTasks />,
  },
  {
    title: "Upload",
    path: "/upload",
    icon: <FaIcons.FaLink />,
  },
];
