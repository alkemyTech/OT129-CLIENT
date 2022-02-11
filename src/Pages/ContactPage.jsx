import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import ContactForm from "../Components/Contact/ContactForm";
import Titles from "../Components/Titles/Titles";
import LeaFlet from "../Components/Leaflet/LeaFlet";
import {
  fetchOrganization,
  selectorOrganization,
} from "../features/Organization/organizationSlice";

const position = [4.6689404, -74.062345];

const ContactPage = () => {
  const { organization } = useSelector(selectorOrganization);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrganization());
  }, []);

  return (
    <div className="container">
      <Titles title="Contacto" />
      <ContactForm />
      <LeaFlet address={organization.address} height={"35vh"} position={position} />
    </div>
  );
};

export default ContactPage;
