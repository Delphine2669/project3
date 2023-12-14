import { Button, Dropdown, Menu, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { removeToken } from "../../utilities/localStorage";

function ProfileMenu() {
  const { isAuthenticated, setToken } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isOnLoginPage = pathname === "/login";

  const handleLogout = () => {
    removeToken();
    setToken("");
    window.location.reload(true);
    navigate("/");
  };

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      handleLogout();
    }
  };

  const menu = (
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
        <Dropdown overlay={menu} trigger={["click"]}>
          <Space>
            <Button
              shape="circle"
              icon={<UserOutlined />}
              onClick={handleIconClick}
            />
          </Space>
        </Dropdown>
      )}
    </span>
  );
}

export default ProfileMenu;
