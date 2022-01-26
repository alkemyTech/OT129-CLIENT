import React, { /* useParams ,*/ useEffect, useState } from "react";
import ActivitiesForm from "../../Components/Activities/ActivitiesForm";
import axios from "axios";

const ActivitiesFormContainer = () => {
  const [activity, setActivity] = useState({});
  /* const {id} = useParams() */

  useEffect(() => {
    if (id) {
      axios.get(`http://ongapi.alkemy.org/api/activities/${id}`).then((response) => {
        const result = response.data.data;

        setActivity(result);
      });

      console.log(activity);
    } else {
      setActivity({
        name: "",
        description: "",
        image: "",
      });
    }
  }, [id]);

  return (
    <div>
      <h1>{activity?.name}</h1>
      <ActivitiesForm activity={activity} />
    </div>
  );
};

export default ActivitiesFormContainer;
