import React from "react";
import "./SocialWidgets.css";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import LinkedInProfileBadge from "react-linkedin-profile-badge";

const SocialWidgets = () => {
  return (
    <div className="container general-container">
      <div className="row mb-5">
        <h2 className="text-center text-uppercase">Buscanos en nuestras redes sociales!</h2>
      </div>
      <div className="row row-widgets">
        <div className="col-6 col-timeline">
          <div className="container-timeline">
            <TwitterTimelineEmbed
              noFooter="true"
              options={{ width: 450, height: 350 }}
              screenName="ONGSomosMas"
              sourceType="profile"
            />
          </div>
        </div>
        <div className="col-6 container-followWidgets">
          <div className="container-followButton">
            <TwitterFollowButton
              options={{
                size: "large",
              }}
              screenName="ONGSomosMas"
            />
          </div>
          <LinkedInProfileBadge
            orientation="horizontal"
            profileId="somos-mas-85b310224"
            size="large"
            theme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialWidgets;
