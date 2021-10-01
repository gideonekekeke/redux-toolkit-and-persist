import React from "react";
import styled from "styled-components";
import pic from "./img/2.jpg";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { useSelector } from "react-redux";

const FriendsDetails = () => {
  const fileData = useSelector((state) => state.persistedReducer.friendDetail);
  return (
    <>
      <Container>
        <CardComponent>
          <Card>
            <ImgHolder src={fileData?.avatar} />
            <Name>NAME :{fileData?.name} </Name>
            <Email>Email : {fileData?.email} </Email>
            <Stack>Stack : {fileData?.stack}</Stack>
            <ButtonHolder>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                  background: "brown",
                  color: "white",
                  border: "none",
                }}
              >
                Details
              </button>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                  background: "lightblue",
                  color: "black",
                  marginLeft: "10px",
                  border: "none",
                }}
              >
                Add Friend
              </button>
            </ButtonHolder>
          </Card>
        </CardComponent>
        <BottomHolder>
          <IconHolder>
            <AiFillHome />
            <IconText>HOME</IconText>
          </IconHolder>
          <IconHolder>
            <FaUserFriends />
            <IconText>FRIENDS</IconText>
          </IconHolder>
          <IconHolder>
            <IoIosPersonAdd />
            <IconText>REQUESTS</IconText>
          </IconHolder>
          <IconHolder>
            <AiOutlineSetting />
            <IconText>SETTINGS</IconText>
          </IconHolder>
        </BottomHolder>
      </Container>
    </>
  );
};

export default FriendsDetails;

const ButtonHolder = styled.div`
  margin: 10px;
`;

const Name = styled.div`
  margin: 10px;
  font-weight: bold;
`;
const Email = styled.div`
  margin: 10px;
`;
const Stack = styled.div`
  margin: 10px;
`;

const Card = styled.div`
  height: 300px;
  width: 300px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;
const ImgHolder = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: silver;
    height: 40px;
    cursor: pointer;
    width: 60px;
    color: black;
    border-radius: 5px;
  }
`;
const IconText = styled.div`
  font-size: 13px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;
const CardComponent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BottomHolder = styled.div`
  height: 70px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;
