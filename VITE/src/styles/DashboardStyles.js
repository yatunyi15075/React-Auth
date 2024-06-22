// src/styles/DashboardStyles.js
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

export const WelcomeMessage = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const UserInfo = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const UserInfoTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #007BFF;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const UserInfoContent = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
  color: #555;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const RecentActivities = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const ActivitiesTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #007BFF;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const ActivitiesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ActivityItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const QuickLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const QuickLinkButton = styled.button`
  background: #007BFF;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;
  width: 48%;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const TutorialsSection = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export const TutorialsTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #007BFF;

  @media (max-width: 600px) {
    font-size: 1.5rem;  
  }
`;

export const TutorialLink = styled.a`
  display: inline-block;
  background: #28a745;
  color: white;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background 0.3s;

  &:hover {
    background: #218838;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
