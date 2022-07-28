import React from "react";

const Singlecontent = ({
  id,
  rating,
  background_image,
  name,
  released,
  metacritic,
}) => {
  return (
    <div
      className="bg-gray-900 text-gray-200 rounded-2xl hover:scale-105 cursor-pointer duration-300 shadow-lg shadow-green-500"
      id={id}
    >
      <img src={background_image} alt="/" className="rounded-t-xl" />
      <p className="text-xl p-2">{name}</p>
      <p className="text-lg p-2">{released}</p>

      <p className="text-md p-2">User Rating: {rating}/5</p>
    </div>
  );
};

export default Singlecontent;
