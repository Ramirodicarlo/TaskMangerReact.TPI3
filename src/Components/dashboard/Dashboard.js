// Dashboard.jsx
import React, { useContext } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../services/authenticationContext/authentication.context";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import Todos from "../todos/Todos";
import ComboLanguage from "../ui/comboLanguage/ComboLanguaje";
//import { TranslateContext } from "../../services/translationContext/translation.context";
import useTranslation from "../../custom/useTranslation/useTranslation";
import UserManagement from "../UserManagement/UserManagement";
import ProjectForm from "../projectForm/ProjectForm";
import Projects from "../projects/Projects";
import { ThemeContext } from "../services/themeContext/theme.context";

const Dashboard = () => {
  const { handleLogout, user } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const translate = useTranslation();
  const { theme } = useContext(ThemeContext);


  const username = user.email.split("@")[0];

  const handleLogoutInDashboard = () => {
    handleLogout();
    navigate("/login");
  };
  const userRole = localStorage.getItem("userRole");
  return (
    <Container fluid className={theme === "oscuro" ? "dark-theme" : ""}>
      <Navbar
      variant={theme === "oscuro" ? "dark" : "light"}
      className="d-flex align-items-center"
      style={{ borderBottom: `2px solid ${theme === "oscuro" ? "white" : "black"}` }}>
      <Navbar.Brand className="mr-4 ms-auto me-auto border-gray rounded">TASK MINDER</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="mr-4 ms-auto me-auto border-gray rounded">
            {translate("hi")} {username}!
          </Navbar.Text>
          <ToggleTheme />
          <Button
            variant="outline-primary"
            className="ml-2 mt-2 mt-md-0"
            onClick={handleLogoutInDashboard}
          >
            {translate("sign_off")}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <ComboLanguage />
      {userRole === '"sysadmin"' && <UserManagement />}
      {userRole === '"sysadmin"' || userRole === '"admin"' ? <ProjectForm /> : null}
      <Projects />



      {<Row>
        <Col xs={12} className="text-center mt-4">
          <Todos />
        </Col>
      </Row> }
    </Container>
  );
};

export default Dashboard;
