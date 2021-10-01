import React, { useEffect } from "react";
import styled from "styled-components";
import data from "./DataBase.json";
// import { MapFriends } from "./ReduxState/ReduxState";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import pic from "./img/2.jpg";

import { useSelector, useDispatch } from "react-redux";
import { addNewUser, DetailFrnd, getUsers } from "./ReduxState/SocialState";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.persistedReducer.users);

  useEffect(() => {
    dispatch(getUsers(data));
    console.log(data);
  }, []);

  return (
    <Container>
      <CardComponent>
        {fileData.map((props) => (
          <Card>
            <ImgHolder src={props.avatar} />
            <Name>NAME : {props.name} </Name>
            <Email>Email : {props.email} </Email>
            <Stack>Stack : {props.stack}</Stack>
            <ButtonHolder>
              <Link to="/details">
                <button
                  style={{
                    height: "40px",
                    width: "100px",
                    background: "brown",
                    color: "white",
                    border: "none",
                  }}
                  onClick={() => {
                    dispatch(DetailFrnd(props));
                  }}
                >
                  Details
                </button>
              </Link>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                  background: "lightblue",
                  color: "black",
                  marginLeft: "10px",
                  border: "none",
                }}
                onClick={() => {
                  dispatch(addNewUser(props));
                }}
              >
                Add Friend
              </button>
            </ButtonHolder>
          </Card>
        ))}
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
  );
};

export default HomeScreen;

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

  margin: 20px;
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
  /* align-items: center; */
  flex-wrap: wrap;
  overflow-y: scroll;
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
