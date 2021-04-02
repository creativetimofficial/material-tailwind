import React from "react";
import ProfileNavbar from "./Profile/ProfileNavbar";
import ProfileFooter from "./Profile/ProfileFooter";
import ProfileContainer from "./Profile/ProfileContainer";
import ProfileHeader from "./Profile/ProfileHeader";
import ProfileContent from "./Profile/ProfileContent";
import ProfileContentHeader from "./Profile/ProfileContentHeader";
import ProfileContentBody from "./Profile/ProfileContentBody";
import ProfileContentFooter from "./Profile/ProfileContentFooter";

export default function Profile() {
  return (
    <>
      <ProfileNavbar />
      <ProfileContainer>
        <ProfileHeader />

        <ProfileContent>
          <ProfileContentHeader />
          <ProfileContentBody />
          <ProfileContentFooter />
        </ProfileContent>
      </ProfileContainer>
      <ProfileFooter />
    </>
  );
}
