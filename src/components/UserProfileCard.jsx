import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const Card = styled.View`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  flex-direction: column; /* Make it a column layout */
`;

const ImageContainer = styled.View`
  flex-direction: row; /* Arrange children horizontally */
  align-items: center; /* Center items horizontally */
  margin-bottom: 10px;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 10px; /* Add spacing between image and text */
`;

const InfoContainer = styled.View`
  flex: 1; /* Expand to fill available space */
  flex-direction: column; /* Make it a column layout */
  align-items: flex-start; /* Align items to the left */
  justify-content: flex-start; /* Align items to the top */
`;

const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Gender = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  color : #00000
`;

const PhoneNumber = styled.Text`
  font-size: 16px;
`;

const UserProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Make the API call
    axios
      .get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => {
        setUserData(response.data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!userData) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <Card>
        <ImageContainer>
          <ProfileImage source={{ uri: userData.picture.large }} />
          <InfoContainer>
            <Name>
              {userData.name.first} {userData.name.last}
            </Name>
            <Gender>{userData.gender}</Gender>
            <PhoneNumber>{userData.phone}</PhoneNumber>
          </InfoContainer>
        </ImageContainer>
      </Card>
    </Container>
  );
};

export default UserProfileCard;
