import React, { useState, useEffect } from "react";
import axios from "axios";
import DevSinglecontent from "../components/DevSingleContent";
import Pagination from "../components/Pagination";

const Developers = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchDevelopers = async () => {
    const { data } = await axios.get(
      `https://api.rawg.io/api/developers?key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchDevelopers();
  }, [page]);

  return (
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <p className="text-white text-center font-body text-3xl pt-5">
        Developers
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 pb-2">
        {/* Container */}
        {content &&
          content.map((c) => (
            <DevSinglecontent
              key={c.id}
              id={c.id}
              name={c.name}
              background_image={c.image_background}
            />
          ))}
      </div>
      <Pagination setPage={setPage} />
    </div>
  );
};

export default Developers;
