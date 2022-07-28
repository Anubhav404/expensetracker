import {
    Facebook,
    Instagram,
    LinkedIn,
    MailOutline,
    Phone,
    Room,
    Twitter,
    YouTube,
  } from "@material-ui/icons";
  
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  const Logo = styled.h1``;
  const Description = styled.p`
    margin: 20px 0;
  `;
  const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;
  const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  const List = styled.ul`
    margin: 30px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  const Payment = styled.img`
    width: 100%;
  `;
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>ShopMySuggesstion</Logo>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            facere corporis sunt ratione eum dolor.
          </Description>
          <SocialContainer>
            <SocialIcon color="385999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="385999">
              <LinkedIn />
            </SocialIcon>
            <SocialIcon color="E60023">
              <YouTube />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Kids Fashion</ListItem>
            <ListItem>Home Essentials</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Terms And Conditions </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact Us</Title>
          <ContactItem>
            {" "}
            <Room style={{ marginRight: "10px" }} />
            42, eyfsj, hbfihi fehe, ihemewhr - 456258
          </ContactItem>
          <ContactItem>
            {" "}
            <Phone style={{ marginRight: "10px" }} />
            +91-0000111222
          </ContactItem>
          <ContactItem>
            {" "}
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            contact@shopmysuggesstion{" "}
          </ContactItem>
          <ContactItem>+91-0000111222</ContactItem>
  
          <Payment src="https://i.ibb.co/Qfvn4z6/payent.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  