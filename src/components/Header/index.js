import React, { Component } from "react";
import images from "assets";
import "./Header.scss";

class Header extends Component {
  state = { isShow: false };
  showMenu = () => {
    this.setState({ isShow: !this.state.isShow });
    console.log(this.state);
  };

  show = this.state.isShow ? "show" : "";
  render() {
    return (
      <div className="header">
        <div className="headerLeft">
          <img src={images.logo} alt="logo" />
          <h3>
            <strong>DESIGN</strong>CAFE
          </h3>
        </div>
        <div className="headerRight">
          <div className="userMenu">
            <button className="btn btn-secondary" onClick={this.showMenu}>
              AD
            </button>
            <div className={`menuDropdown ${this.state.isShow ? "show" : ""}`}>
              <div className="menuGroup menuGroupUser">
                <h3>Username</h3>
                <p>Email</p>
                <hr />
                <a className="dropdown-item" href="#">
                  Edit Profile
                </a>
                <a className="dropdown-item" href="#">
                  Change Password
                </a>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
              <div className="menuGroup menuGroupManage">
                <a className="dropdown-item" href="#">
                  Super Admin Dashboard
                </a>
                <a className="dropdown-item" href="#">
                  Sales Dashboard
                </a>
                <a className="dropdown-item" href="#">
                  Designer Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
