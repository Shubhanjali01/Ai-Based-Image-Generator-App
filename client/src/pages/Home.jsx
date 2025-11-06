import React from 'react';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';
import styled from 'styled-components';



const Container = styled.div`
height: 100%;
overflow-y:scroll ;
background: ${({theme})=>theme.bg}
padding : 30px 30px;
padding-bottom : 50px;
display:flex;
flex-direction:column;
align-items : center;
gap : 20px;
@ media (max-width: 768){
  padding : 6px;
}
`;


const Headline = styled.div`
   font-size: 34px;
   font-width: 500;
   color : ${({theme})=>theme.text_primary};
   display : flex;
   align-items : center;
   flex-direction : column;
   @media (max-width:600px){
      font-size : 22px;
   }
  `;


  const Span = styled.div`
   font-size: 30px;
   font-width: 800;
   color : ${({theme})=>theme.secondary};
      @media (max-width:600px){
      font-size : 20px;
   }
  `;


  const Wrapper = styled.div`
   width : 100%;
   max-width : 1400px;
   padding : 32px 0px;
   display : flex;
   justify-content : center;
  `;

  const CardWrapper = styled.div`
    display : grid;
    gap : 20px;
    @media(min-width:1200px ){
       grid-template-columns : repeat(4,1fr);
    }
    @media(min-width : 640px) and (max-width:1199px ){
       grid-template-columns : repeat(3,1fr);
    }
     @media( max-width:629px ){
       grid-template-columns : repeat(2,1fr);
    }
  `;

  
const Home = () => {
  const item = {
    photo: "https://interiordesign.net/wp-content/uploads/2024/01/Interior-Design-Best-of-Year-2023-Bjarke-Ingels-Group-Heatherwick-Studio-Studios-Architecture-idx231201_boy_OfficeTechL01-1024x683.jpg",
    author: "Shubhanjali",
    prompt: "Hey Prompts!"
  }
  
  return (
    <Container>
      <Headline>Explore polular posts in the Community!

        <Span>⊙💘Generated with AI💘 ⊙</Span>
      </Headline>
      <SearchBar/>

        <Wrapper>
               <CardWrapper>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                 <ImageCard item={item}/>
                
                </CardWrapper>
        </Wrapper>

     
    </Container>
  )
}

export default Home