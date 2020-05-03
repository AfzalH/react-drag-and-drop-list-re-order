import styled from "styled-components";

export const DragIconWrapper = styled.div`
  display: inline-block;
  svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    padding-right: 1rem;
  }
`;
export const ListContainer = styled.div`
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  margin: 2rem auto;
  max-width: 30rem;
  padding: .5rem 2rem 2rem;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem #aaaaaa;
`;
export const ListItem = styled.div`
  color: #444444;
  padding: 0.8rem 0.3rem;
  border-bottom: 1px solid #dddddd;
   &:last-child {
    border-bottom: none;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
  background: white;
`;
