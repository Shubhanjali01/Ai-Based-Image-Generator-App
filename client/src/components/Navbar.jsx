import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { AddRounded } from "@mui/icons-material";
import { ExploreRounded } from "@mui/icons-material";
import Button from "./ButtonComponent";

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.navbar || "#1e1e1e"};
  color: ${({ theme }) => theme.text_primary || "#fff"};
  font-weight: 600;
  font-size: 22px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 20px;
    font-size: 18px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <Container>
      GenAI
      {path[1] === "post" ? (
        <Button
          onClick={() => navigate("/post")}
          text="Explore Posts"
          type="secondary"
          leftIcon={<ExploreRounded style={{ fontSize: "20px" }} />}
        />
      ) : (
        <Button
          onClick={() => navigate("/post")}
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "20px" }} />}
        />
      )}
    </Container>
  );
};

export default Navbar;
