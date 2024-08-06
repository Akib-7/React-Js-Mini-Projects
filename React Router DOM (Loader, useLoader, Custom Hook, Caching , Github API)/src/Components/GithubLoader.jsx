import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
const cache = {};
const GithubLoader = () => {
  const data = useLoaderData();

  const navigate = useNavigate();
  const [name, setname] = useState();
  const handleButtonClick = () => {
    const newUsername = name;
    navigate(`/githubLoader/${newUsername}`);
  };
  return (
    <>
      <div className="h-screen bg-stone-900">
        {" "}
        <div className="pt-[90px] text-white text-4xl text-center">Github</div>;
        <div className=" text-stone-500 text-md text-center">
          <p>@Using React-router-Dom, Loader, useLoaderData,</p>
          <p> useNavigate, Cache and Github API</p>
        </div>
        <div className="    text-left px-[70px]">
          <p className="text-2xl  text-lime-400">Loader Approach: </p>
          <span className="text-stone-400">
            Use this if you prefer centralized data fetching logic and want to
            ensure that data is available before rendering the component. This
            approach is optimal for routes where data is essential for rendering
            the component and you don't mind refetching data on each navigation.
          </span>
        </div>
        ;
        <div className="flex justify-center items-center mb-6 ">
          <input
            className="ml-5 p-1 rounded-md placeholder-stone-900 px-4 bg-stone-500 focus:outline-none "
            type="text"
            placeholder="Enter username"
            id="usernameInput"
            onChange={(e) => setname(e.target.value)}
          />
          <button
            className="bg-lime-400 ml-2 p-[6px] hover:bg-lime-700 transition-all duration-200 font-semibold rounded-md text-sm"
            onClick={handleButtonClick}
          >
            View Profile
          </button>
        </div>
        <div className="flex justify-center item-center ">
          <div className=" CARD flex flex-row w-[500px] h-[300px]  p-8 justify-between items-center bg-stone-950 shadow-lg shadow-lime-400  rounded-xl">
            <div className="w-[200px] h-[200px overflow-hidden rounded-lg">
              <img src={data.avatar_url} alt="" />
            </div>
            <div className="flex flex-col   items-start space-x-4">
              <h1></h1>
              <li className="text-lime-600 text-m list-none">{data.name}</li>
              <li className="text-lime-600 text-md list-none">{data.login} </li>

              <li className="text-lime-600 text-md list-none">
                Public Repos: {data.public_repos}{" "}
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const githubInfoLoader = async ({ params }) => {
  let username = params.username || "Akib-7";
  if (cache[username]) {
    console.log("From Cache");
    return cache[username];
  }
  const response = await fetch(`https://api.github.com/users/${username}`);
  const info = await response.json();
  cache[username] = info;
  console.log("New data Fetched");

  return info;
};

export default GithubLoader;
