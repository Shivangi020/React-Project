import React, { useContext } from "react";
import TourCard from "./Card";
import Loading from "./Loading";
import Error from "./Error";
import useFetch from "./useFetch";
import { TourGlobalData } from "./TourMainPage";

function CardSection() {
  const { isLoading, error } = useFetch(
    "https://course-api.com/react-tours-project"
  );
  const { tour, setTour } = useContext(TourGlobalData);

  const deleteAction = (index) => {
    console.log(index);
    const newTourList = tour.filter((tour) => {
      return tour.id !== index;
    });
    setTour(newTourList);
  };

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }
  return (
    <div className="tour-cards">
      {tour.map((item) => {
        const { id, name, price, info, image } = item;
        return (
          <TourCard
            name={name}
            price={price}
            info={info}
            image={image}
            key={id}
            deleteAction={() => deleteAction(id)}
          />
        );
      })}
    </div>
  );
}

export default CardSection;
