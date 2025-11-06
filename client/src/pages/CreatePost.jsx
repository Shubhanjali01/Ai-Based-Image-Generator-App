import React from 'react'
import styled from 'styled-components'


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




const CreatePost = () => {
  return (
    <Container>CreatePost</Container>
  )
}

export default CreatePost