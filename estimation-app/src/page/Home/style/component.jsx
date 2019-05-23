import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;

export const ProfileDetails = styled.div`
  display: flex;
`;

export const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;

export const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;

export const HeadingThreeText = styled.h3``;

export const ParagraphText = styled.p`
  margin-right: 25px;
`;

export const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileDetailsName = styled.div`
  text-align: left;
`;