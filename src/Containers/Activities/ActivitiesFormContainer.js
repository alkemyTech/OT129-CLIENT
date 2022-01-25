import React, { useParams, useEffect, useState } from "react";
import ActivitiesForm from "../../Components/Activities/ActivitiesForm"

const getActivity = (id) => {
    axios
        .get(`http://ongapi.alkemy.org/api/activities/${id}`)
        .then((response) =>{
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
};

const ActivitiesFormContainer = () => {
    const [activity, setActivity] = useState({})
    const {id} = useParams()

    useEffect(() => {
      

      
    }, [id]);
    

    return(
    <div>
        <ActivitiesForm activity/>
    </div>
    )
};

export default ActivitiesFormContainer;
