import React, { useState } from "react";
import GeneratorImageForm from "../components/GeneratorImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";
import styled from "styled-components";


const Container = styled.div`
height: 100%;
overflow-y:scroll ;
background: ${({ theme }) => theme.bg}
padding : 30px 30px;
padding-bottom : 50px;

display:flex;
justify-content: center;
flex-direction:column;
align-items : center;
gap : 20px;
@ media (max-width: 768){
  padding : 6px 10px;
}
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  padding: 32px 0px;
  height: fit-content;
  gap: 8%;
  display: flex;
  justify-content: center;

  @media (max-width: 789px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
  const [generateImageLoading,setGenerateImageLoading] = useState(false);
  const [createPostLoading,setCreatePostLoading] = useState(false);
  const [post,setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  return (
    <Container>
      <Wrapper>

        <GeneratorImageForm 
        post={post} 
        setPost={setPost} 
        createPostLoading = {createPostLoading} 
        setCreatePostLoading = {setCreatePostLoading}
        setGenerateImageLoading = {setGenerateImageLoading} 
        generateImageLoading = {generateImageLoading}/>

        <GeneratedImageCard 
        src={post?.photo} 
        loading={generateImageLoading} 
        />

      </Wrapper>
    </Container>
  );
};

export default CreatePost;
