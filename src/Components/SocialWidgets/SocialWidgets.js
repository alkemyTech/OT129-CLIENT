import React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import LinkedInProfileBadge from "react-linkedin-profile-badge";

import styles from "./SocialWidgets.module.css";

const SocialWidgets = () => {
  return (
    <div className={`container ${styles.generalContainer}`}>
      <div className="row mb-5">
        <h2 className="text-center text-uppercase">Buscanos en nuestras redes sociales!</h2>
      </div>
      <div className={`row ${styles.widgetsRow}`}>
        <div className={`col-xs-12 col-md-6 ${styles.colTimeline}`}>
          <TwitterTimelineEmbed
            noFooter="true"
            options={{ width: 450, height: 350 }}
            screenName="ONGSomosMas"
            sourceType="profile"
          />
        </div>
        <div className={`col-xs-12 col-md-6 ${styles.containerFollowWidgets}`}>
          <div className={styles.containerFollowButton}>
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
