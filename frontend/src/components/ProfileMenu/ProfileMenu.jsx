import { Button, Dropdown, Menu, Space, Col } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { removeToken } from "../../utilities/localStorage";
import "./ProfileMenu.scss";

function ProfileMenu() {
  const { isAuthenticated, setToken } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isOnLoginPage = pathname === "/login";

  const handleLogout = () => {
    removeToken();
    setToken("");
    navigate("/");
  };

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      handleLogout();
    }
  };

  const items = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Disconnect
      </Menu.Item>
    </Menu>
  );

  const handleIconClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  };

  return (
    <span className="log-btn">
      {!isOnLoginPage && (
        <Dropdown overlay={items} trigger={["click"]}>
          <Space>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <Button
                className="button-menu"
                shape="circle"
                icon={<UserOutlined />}
                onClick={handleIconClick}
              />
            </Col>
          </Space>
        </Dropdown>
      )}
    </span>
  );
}

export default ProfileMenu;
