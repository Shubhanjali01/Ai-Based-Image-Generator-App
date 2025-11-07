import React,{useState} from "react";
import {CreatePost} from "../api";
import {useNavigate} from "react-router-dom";
import Button from "./button";
import TextInput from "./TextInput";
import styled from "styled-components";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";
import { GenerateAiImage } from "../api";

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9%;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
`;
const Action = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;
const GeneratorImageForm = ({
  post,
  setPost,
  createPostLoading,
  setCreatePostLoading,
  setGenerateImageLoading,
  generateImageLoading,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const generateImageFun = async () => {
    setGenerateImageLoading(true);
    await GenerateAiImage({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpeg;base64,${res?.data?.photo}`,
        });

        setGenerateImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message)
        setGenerateImageLoading(false)
      });
  };
  const CreatePostFun = async() => {
    setCreatePostLoading(true);
    await CreatePost(post).then((res)=>{
        setCreatePostLoading(false);
        navigate("/");

    }).catch((error)=>{
        setError(error?.response?.data?.message);
        setCreatePostLoading(false);
    })
  };
  return (
    <Form>
      <Top>
        <Title>Generate Image with Prompt</Title>
        <Desc>Write your own image you want to generate...</Desc>
      </Top>

      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your Name..."
          name="name"
          value={post.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about your image you want to generate..."
          name="name"
          rows="8"
          textArea
          value={post.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />

        {error && <div style={{ color: 'red' }}>{error}</div>}


        ** You can post the AI Generated Image to the Community **
      </Body>
      <Action>
        <Button
          text="Generate Image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImageLoading}
          isDisabled={post.prompt === ""}
          onClick={() => generateImageFun()}
        />
        <Button
          text="Post Image"
          flex
          type="secondary"
          leftIcon={<CreateRounded />}
          isLoading={createPostLoading}
          isDisabled={post.name === "" || post.prompt === ""}
          onClick={() => CreatePostFun()}
        />
      </Action>
    </Form>
  );
};

export default GeneratorImageForm;
