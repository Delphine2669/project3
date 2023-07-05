import { Button, Dropdown, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const items = [
  {
    key: "1",
    danger: true,
    icon: <LogoutOutlined />,
    label: "Se déconnecter",
    disabled: false,
    onClick: () => console.info("logout"),
  },
];

function ProfileMenu() {
  // TODO: à contextualisé
  const isAuthenticated = false;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isOnLoginPage = pathname === "/login";

  const handleClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  };

  return (
    <span>
      {isOnLoginPage ? null : (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Space>
            <Button
              className="Login"
              shape="circle"
              icon={<UserOutlined />}
              onClick={handleClick}
            />
          </Space>
        </Dropdown>
      )}
    </span>
  );
}

export default ProfileMenu;
