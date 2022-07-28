import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";

import SingleContent from "../components/SingleContent";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&dates=2010-10-10,2022-07-07&ordering=-added&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <>
      <p className="text-white text-center font-body text-3xl py-6">
        Popular Games
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

export default Popular;
