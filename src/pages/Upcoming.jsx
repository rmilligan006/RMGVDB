import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pagination from "../components/Pagination";
import SingleContent from "../components/SingleContent";
import axios from "axios";

const Upcoming = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  //Get the Current Month
  const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };

  //Getting the Date
  const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };

  //Current day/month/year
  const currentYear = new Date().getFullYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
  const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

  const fetchGames = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-released&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchGames();
  }, [page]);

  return (
    <>
      <p className="text-white text-center font-body text-3xl pt-5">
        {" "}
        Upcoming Games
      </p>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 pb-2">
          {/* Container */}
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                name={c.name}
                background_image={c.background_image}
                released={c.released}
                playtime={c.playtime}
                rating={c.rating}
              />
            ))}
        </div>
      </div>
      <Pagination setPage={setPage} />
    </>
  );
};

export default Upcoming;
