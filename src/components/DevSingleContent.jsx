import React from "react";

const DevSinglecontent = ({
  id,
  background_image,
  name,
  
}) => {
  return (
    <div
      className="bg-gray-900 text-gray-200 rounded-2xl hover:scale-105 cursor-pointer duration-300 shadow-lg shadow-green-500"
      id={id}
    >
      <img src={background_image} alt="/" className="rounded-t-xl" />
      <p className="text-xl p-2">{name}</p>
    </div>
  );
};

export default DevSinglecontent;