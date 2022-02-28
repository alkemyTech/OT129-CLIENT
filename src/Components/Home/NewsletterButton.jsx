import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { alerts } from "../../utils/alerts";
import { selectAuth } from "../../features/auth/authSlice";

const NewsletterButton = () => {
  const history = useHistory();
  const { auth } = useSelector(selectAuth);
  const handleClick = () => {
    if (!auth) {
      alerts("Usted debe estar registrado para poder suscribirse al newsletter", "error");
      history.push("/");

      return;
    }
    history.push("/newsletter");
  };

  return (
    <button className="general-btn fill-btn me-4 px-4" onClick={handleClick}>
      Suscribirse al newsletter
    </button>
  );
};

export default NewsletterButton;
