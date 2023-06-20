import React, { useState } from "react";
import "./main.scss";
import hambugerIcon from "../assets/images/hamburger.svg";
import dashIcon from "../assets/images/dash.svg";
import treeIcon from "../assets/images/tree.svg";
import TreeView from "../components/tree/TreeView";

const tabList = [
  { name: "hamburger", icon: hambugerIcon },
  { name: "dashboard", icon: dashIcon },
  { name: "tree", icon: treeIcon },
];

const MainPage = () => {
  const [tab, setTab] = useState("tree");

  return (
    <div className="content mt-3">
      <div className="d-flex align-items-center justify-content-end mx-3">
        <ul className="tab-button-wrapper">
          {tabList.map((item, index) => (
            <li
              className={tab === item.name ? "active" : ""}
              onClick={() => setTab(item.name)}
              key={index}
            >
              <img loading="lazy" src={item.icon} alt="service icon" />
            </li>
          ))}
        </ul>
      </div>
      <div id="treeWrapper" style={{ width: "50em", height: "30em" }}>
        <TreeView />
      </div>
    </div>
  );
};

export default MainPage;
