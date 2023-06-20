import React from "react";
import Tree from "react-d3-tree";

import { useCenteredTree } from "./helpers";
import "./style.scss";
import profileImage1 from "../../assets/images/profile.jpg";
import profileImage2 from "../../assets/images/profilegirl.jpg";

const orgChartJson = {
  name: "Seth Williams",
  attributes: {
    position: "Managing director",
    image: profileImage1,
  },
  children: [
    {
      name: "Ramon Harris",
      attributes: {
        position: "Regional Director",
        country: "Brazil",
        image: profileImage1,
      },
      children: [
        {
          name: "Janet Parks",
          attributes: {
            position: "CEO",
            image: profileImage2,
            department: "Retail",
          },
        },
        {
          name: "Isabelle Kaif",
          attributes: {
            position: "CFO",
            image: profileImage2,
            department: "Retail",
          },
        },
      ],
    },
    {
      name: "Dan Morgan",
      attributes: {
        position: "Regional Director",
        country: "USA",
        image: profileImage1,
      },
      children: [
        {
          name: "Ivan Toney",
          attributes: {
            position: "CEO",
            image: profileImage1,
            department: "Retail",
          },
        },
        {
          name: "Sabrina Francis",
          attributes: {
            position: "CFO",
            image: profileImage2,
            department: "Retail",
          },
        },
      ],
    },
    {
      name: "Stella Nelson",
      attributes: {
        position: "Regional Director",
        country: "Italy",
        image: profileImage2,
      },
      children: [
        {
          name: "Miles Clark",
          attributes: {
            position: "Chief Administrator",
            image: profileImage1,
            department: "Retail",
          },
        },
        {
          name: "Angela Howard",
          attributes: {
            position: "Chief Administrator",
            image: profileImage2,
            department: "Retail",
          },
        },
      ],
    },
  ],
};

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <g>
    <circle r={15}></circle>
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps}>
      <div
        style={{
          width: "226px",
          height: "96px",
          border: "1px solid #E7E5E4",
          borderRadius: "8px",
          backgroundColor: "#F6F6F6",
          marginLeft: "10px",
        }}
      >
        <div className="profile-image-wrapper position-absolute">
          <img
            loading="lazy"
            src={nodeDatum?.attributes?.image}
            alt="service icon"
          />
        </div>
        <p className="tree-title" style={{ textAlign: "center" }}>
          {nodeDatum.name}
        </p>
        <p className="tree-content">{nodeDatum?.attributes?.position}</p>
        <p className="department-text text-center mx-auto">
          {nodeDatum?.attributes?.department}
        </p>
      </div>
    </foreignObject>
  </g>
);

export default function TreeView() {
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -100,
    y: -20,
  };
  return (
    <div style={containerStyles} ref={containerRef}>
      <Tree
        data={orgChartJson}
        translate={translate}
        nodeSize={nodeSize}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        pathClassFunc={() => "node__link"}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        orientation="vertical"
      />
    </div>
  );
}
