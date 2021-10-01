import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pic from "./img/1.png";

const HeaderView = () => {
  const fileData = useSelector((state) => state.persistedReducer.friendsCart);

  return (
    <Container>
      <Logo src={pic} />
      <Home to="/">Home</Home>
      <FriendHolder>
        <Friend to="/friends">Friends</Friend>
        <FriendCount>{fileData?.length}</FriendCount>
      </FriendHolder>
      <NewFriend>FriendRequests</NewFriend>
    </Container>
  );
};

export default HeaderView;

const Home = styled(Link)`
  text-decoration: none;
  color: white;
`;
const FriendCount = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 25px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
const Friend = styled(Link)`
  text-decoration: none;
  color: white;
`;
const NewFriend = styled.div``;
const FriendHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
`;

const Logo = styled.img`
  height: 40px;
  width: 60px;
  object-fit: cover;
`;
