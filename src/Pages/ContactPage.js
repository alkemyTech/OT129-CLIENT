import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ContactForm from "../Components/Contact/ContactForm";
import Titles from "../Components/Titles/Titles";
import LeaFlet from "../Components/Leaflet/LeaFlet";
import {
  fetchOrganization,
  selectorOrganization,
} from "../features/Organization/organizationSlice";
import { selectAuth } from "../features/auth/authSlice";

const position = [4.6689404, -74.062345];

const ContactPage = () => {
  const { organization } = useSelector(selectorOrganization);
  const {
    auth,
    user: { role_id },
  } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    auth && role_id === 1 && history.push("/");
    dispatch(fetchOrganization());
  }, []);

  return (
    <>
      <div className="container">
        <Titles title="Contacto" />
        <ContactForm />
        <LeaFlet address={organization.address} height={"35vh"} position={position} />
      </div>
    </>
  );
};

export default ContactPage;
