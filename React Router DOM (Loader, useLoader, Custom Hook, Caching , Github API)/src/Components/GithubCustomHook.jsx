import React, { useEffect, useState } from "react";
import useGithub from "./Hooks/useGithub";
import { useLoaderData } from "react-router-dom";
const GithubCustomHook = () => {
  const { data, loading } = useGithub("Akib-7");
  if (loading) {
    return <p>Loading Profile...</p>;
  }

  if (!data) {
    return <p>No profile data found.</p>;
  }

  return (
    <>
      <div className="h-screen bg-stone-900">
        {" "}
        <div className="pt-[90px] text-white text-4xl text-center">Github</div>;
        <div className=" text-stone-500 text-md text-center">
          @Using React-router-Dom, Custom Hook, Cache and Github API
        </div>
        ;
        <div className="  mb-6  text-left px-[70px]">
          <p className="text-2xl  text-lime-400">Custom Hook Approach: </p>
          <span className="text-stone-400">
            Use this if you need more control over the data fetching process
            within the component and want to implement custom logic for caching,
            error handling, or loading states. This approach can be more
            efficient if you need to avoid unnecessary fetch calls and have
            components that can render without data initially.
          </span>
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

export default GithubCustomHook;
