import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const WelcomeMessage = styled.h1`
  font-size: 3rem;
  margin-bottom: 30px;
  color: #333;
`;

const UserInfo = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`;

const UserInfoTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #007BFF;
`;

const UserInfoContent = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
  color: #555;
`;

const RecentActivities = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`;

const ActivitiesTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #007BFF;
`;

const ActivitiesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #555;
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
`;

const QuickLinkButton = styled.button`
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
`;

const TutorialsSection = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const TutorialsTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: #007BFF;
`;

const TutorialLink = styled.a`
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
`;

const Dashboard = () => {
  const user = {
    fullName: "John Doe",
    email: "john.doe@example.com"
  };

  return (
    <DashboardContainer>
      <WelcomeMessage>Welcome Back, {user.fullName}!</WelcomeMessage>

      <UserInfo>
        <UserInfoTitle>User Information</UserInfoTitle>
        <UserInfoContent><strong>Name:</strong> {user.fullName}</UserInfoContent>
        <UserInfoContent><strong>Email:</strong> {user.email}</UserInfoContent>
      </UserInfo>

      <RecentActivities>
        <ActivitiesTitle>Recent Activities</ActivitiesTitle>
        <ActivitiesList>
          <ActivityItem>Logged in at 10:45 AM</ActivityItem>
          <ActivityItem>Updated profile at 11:00 AM</ActivityItem>
          <ActivityItem>Watched "React Router Tutorial" at 12:30 PM</ActivityItem>
        </ActivitiesList>
      </RecentActivities>

      <QuickLinks>
        <QuickLinkButton onClick={() => alert('Profile Settings clicked!')}>Profile Settings</QuickLinkButton>
        <QuickLinkButton onClick={() => alert('Logout clicked!')}>Logout</QuickLinkButton>
      </QuickLinks>

      <TutorialsSection>
        <TutorialsTitle>Check out the latest tutorials</TutorialsTitle>
        <TutorialLink href="https://www.youtube.com/@yatunyibrian/videos" target="_blank">Visit Coding with Brian on YouTube</TutorialLink>
      </TutorialsSection>
    </DashboardContainer>
  );
};

export default Dashboard;
