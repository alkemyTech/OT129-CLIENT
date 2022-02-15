import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchOrganization,
  selectorOrganization,
} from "../../features/Organization/organizationSlice";

import Footer from "./Footer";

const FooterToysContainer = () => {
  const dispatch = useDispatch();
  const { organization } = useSelector(selectorOrganization);

  useEffect(() => {
    dispatch(fetchOrganization());
  }, []);

  return (
    <Footer
      facebook={organization.facebook_url}
      instagram={organization.instagram_url}
      linkedin={organization.linkedin_url}
      twitter={organization.twitter_url}
    />
  );
};

export default FooterToysContainer;
