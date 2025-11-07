import React from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  flex: 1;
  min-height: 300px;
  align-items: center;
  display-flex: flex;
  justity-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 26px;
  border: 1.5px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + "80"};
  border-radius: 20px;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.black + "80"};
`;
const GeneratedImageCard = ({src,loading}) => {
  return (
    <Container>
      {loading ? (
        // <>Loading...</>
        <>
          <CircularProgress
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating Your Image ...
        </>
      ) : (
        <> {src ? <Image src={src}/> : <>Write a prompt to generate image </>}</>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
