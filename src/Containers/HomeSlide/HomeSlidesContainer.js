import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import HomeSlides from "../../Components/Home/HomeSlides/HomeSlides";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { fetchSlides, selectorSlides } from "../../features/slides/slidesSlice";

const HomeSlidesContainer = () => {
  const dispatch = useDispatch();
  const { slides, status } = useSelector(selectorSlides);

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">{slides && <HomeSlides data={slides} />}</div>
      <StatusHandler status={status} />
    </div>
  );
};

export default HomeSlidesContainer;
