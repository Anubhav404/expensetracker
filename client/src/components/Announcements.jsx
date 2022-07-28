import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14;
  font-weight: bold;
`;
const Announcements = () => {
  return <Container>Hurry!! FREE SHIPPING ON ORDERS ABOVE $ 50!!!</Container>;
};

export default Announcements;
