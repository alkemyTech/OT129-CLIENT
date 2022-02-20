import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Testimonials from "../../Components/Testimonials/Testimonials/Testimonials";
import {
  fetchTestimonials,
  selectorTestimonials,
} from "../../features/Testimonials/testimonialsSlice";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";

const TestimonialsContainer = () => {
  const dispatch = useDispatch();
  const { testimonials, status } = useSelector(selectorTestimonials);

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, []);

  return (
    <div className="container p-0">
      <StatusHandler status={status} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsContainer;
