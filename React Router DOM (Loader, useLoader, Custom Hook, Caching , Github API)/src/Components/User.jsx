import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { user_id } = useParams();
  return (
    <div className="bg-stone-700 mt-[58px] h-screen p-8 flex items-center justify-center text-white">
      <h1 className="text-4xl font-bold">User : {user_id}</h1>
    </div>
  );
};

export default User;
