import React from 'react';
import {
  DashboardContainer,
  WelcomeMessage,
  UserInfo,
  UserInfoTitle,
  UserInfoContent,
  RecentActivities,
  ActivitiesTitle,
  ActivitiesList,
  ActivityItem,
  QuickLinks,
  QuickLinkButton,
  TutorialsSection,
  TutorialsTitle,
  TutorialLink,
} from '../styles/DashboardStyles';

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
