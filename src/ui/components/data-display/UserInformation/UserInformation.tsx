import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style";

interface UserInformationInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
