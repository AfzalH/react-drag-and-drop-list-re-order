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
  margin: 1rem auto;
  max-width: 30rem;
  padding: 2rem;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem #aaaaaa;
`;
export const ListItem = styled.div`
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  color: #444444;
  padding: 0.8rem 0.3rem;
  &:first-child {
    border-top: 1px solid #dddddd;
  }
  border-bottom: 1px solid #dddddd;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  background: white;
`;
