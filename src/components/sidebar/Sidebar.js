import React from "react";
import "./sidebar.scss";
import FirstIcon from "../../assets/images/sidebar1.svg";
import secondIcon from "../../assets/images/sidebar2.svg";
import ThirdIcon from "../../assets/images/sidebar3.svg";
import FourthIcon from "../../assets/images/sidebar4.svg";
import FifthIcon from "../../assets/images/sidebar5.svg";
import SixthIcon from "../../assets/images/sidebar6.svg";
import NotificationIcon from "../../assets/images/Notification.svg";
import ProfileImage from "../../assets/images/profile.jpg";

const sidebarTop = [
  { title: "", icon: FirstIcon },
  { title: "", icon: secondIcon },
  { title: "", icon: ThirdIcon },
  { title: "", icon: FourthIcon },
  { title: "", icon: FifthIcon },
  { title: "", icon: SixthIcon },
];

const Sidebar = () => {
  return (
    <div className="icon-sidebar">
      <div className="red-square d-flex align-items-center justify-content-center">
        <div className="red-circle"></div>
      </div>
      <ul className="navbar-nav py-4 d-flex flex-column align-items-center">
        {sidebarTop.map((item, index) => (
          <li className="py-3">
            <a href="#">
              <img loading="lazy" src={item.icon} alt="service icon" />
            </a>
          </li>
        ))}
      </ul>
      <ul className="navbar-nav py-4 d-flex flex-column align-items-center">
        <li className="py-3">
          <a href="#">
            <img loading="lazy" src={NotificationIcon} alt="service icon" />
          </a>
        </li>
        <li className="py-3">
          <a href="#">
            <img
              className="profile-img"
              loading="lazy"
              src={ProfileImage}
              alt="service icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
