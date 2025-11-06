import React from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@mui/icons-material';


const SearchBarContainer = styled.div`
  max-width : 550px;
  display : flex;
  width : 90%;
  border : 1px solid ${({theme})=> theme.text_secondary};
  color : ${({theme})=> theme.text_primary};
  border-radius : 8px;
  padding : 12px 16px;
  cursor : pointer;
  gap : 6px;
  align-items : center;

`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
        <SearchOutlined/>
        <input  
        placeholder='Search with prompt or name...'
        
        style={{border: "none",
        outline:"none",
        color : "inherit",
        width : "100%",
        background: "transparent",
        fontSize: "16px",
  }}
    
        />
    </SearchBarContainer>
  );
};

export default SearchBar