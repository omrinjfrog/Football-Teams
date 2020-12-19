import styled, { css } from "styled-components";

export const CenterV = css`
  display: flex;
  align-items: center;
`;

export const CenterH = css`
  display: flex;
  justify-content: center;
`;

export const CenterVH = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  ${props => (props.V ? CenterV : "")}
  ${props => (props.H ? CenterH : "")}
`;

export const NavCenter = styled.div`
  width: 100%;
  text-align: center;
  img {
    margin-top: 10px;
    height: 100px;
    width: 100px;
  }
`;

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;

  caption-side: bottom;

  td,
  th {
    border: none;
  }

  td {
    padding: 5px 10px;
    text-align: center;
  }

  img {
    width: 40px;
    height: 40px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
`;