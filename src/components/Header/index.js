import React, { Component } from "react"
import { Dropdown, Menu, Button, Icon } from "antd"

import images from "assets"
import "./Header.scss"

const { SubMenu } = Menu

class Header extends Component {
  menu = (
    <div>
      <Menu className="userMenu">
        <Menu.ItemGroup
          title={
            <div>
              <h3>User</h3> <p>Email</p>
            </div>
          }
        >
          <Menu.Divider />
          <Menu.Item key="1">Edit Profile</Menu.Item>
          <Menu.Item key="2">Change Password</Menu.Item>
          <Menu.Item key="3">Log Out</Menu.Item>
        </Menu.ItemGroup>
      </Menu>
      <Menu className="userMenu">
        <Menu.Item key="1">Super Admin Dashboard</Menu.Item>
        <Menu.Item key="2">Sales Dashboard</Menu.Item>
        <Menu.Item key="3">Designer Dashboard</Menu.Item>
      </Menu>
    </div>
  )
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
          {/* <Dropdown overlay={this.menu}>
            <Button>User</Button>
          </Dropdown> */}

          <Menu className="userMenu" mode="inline">
            <SubMenu title="User" key="sub1">
              <Menu.ItemGroup
                className="menuGroup menuGroupUser"
                title={
                  <div>
                    <h3>User</h3> <p>Email</p>
                  </div>
                }
              >
                <Menu.Divider />
                <Menu.Item key="1">Edit Profile</Menu.Item>
                <Menu.Item key="2">Change Password</Menu.Item>
                <Menu.Item key="3">Log Out</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup className="menuGroup menuGroupManage">
                <Menu.Item key="4">Super Admin Dashboard</Menu.Item>
                <Menu.Item key="5">Sales Dashboard</Menu.Item>
                <Menu.Item key="6">Designer Dashboard</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Header
