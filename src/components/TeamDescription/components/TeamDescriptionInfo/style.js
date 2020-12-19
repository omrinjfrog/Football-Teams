import styled, { css } from "styled-components";

export const TeamInfo = styled.div`
  padding: 15px; 
  margin-left: 15px; 
  margin-right: 15px; 
  border-style: solid; 
  border-width: thin; 
  border-radius: 25px; 
`;

export const TeamDescription = styled.div`
  h2 {
    text-decoration: underline;
  }
  
  span {
    color: #ff2e62;
    text-decoration: underline;
  }
  
  a {
    margin-bottom: 20px;
  }
`;

export const MoreTeamInfo = styled.div`
  img {
    width: 40px;
    height: 40px;
    margin-left: 4px;
  }
`;