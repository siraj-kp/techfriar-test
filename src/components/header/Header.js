import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/images/Search.svg";
import filterIcon from "../../assets/images/filter.svg";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="people-btn">
                People{" "}
                <span className="plus-icon-wrapper ms-2">
                  <FontAwesomeIcon
                    fontSize={"18px"}
                    color="#fff"
                    icon={faPlus}
                  />
                </span>{" "}
              </button>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center me-0 mb-2 mb-lg-0">
            <form className="d-flex ms-5 search-input search-wrapper">
              <input
                className="form-control search-input me-2 search-field"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <img loading="lazy" src={searchIcon} alt="service icon" />
            </form>

            <li className="nav-item d-flex align-items-center justify-content-between">
              <button className="filter-btn">
                <img
                  className="me-2"
                  loading="lazy"
                  src={filterIcon}
                  alt="service icon"
                />
                Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
