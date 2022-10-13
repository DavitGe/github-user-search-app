import React from "react";

// import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";
import location from "./assets/icon-location.svg";
import twitter from "./assets/icon-twitter.svg";
import website from "./assets/icon-website.svg";
import company from "./assets/icon-company.svg";
function App() {
  return (
    <div className="App w-screen min-h-screen bg-bgColor flex flex-col item-center">
      <div className="container my-auto">
        <div className="w-full flex justify-between mb-[35px]">
          <h1 className="text-xl text-[#222731] font-bold">devfinder</h1>
          <button className="flex items-center cursor-pointer">
            <span className="text-sm text-date tracking-[2.5px] mr-4 font-bold">
              DARK
            </span>
            <img src={moon} alt="" className="h-5 w-5" />
          </button>
        </div>
        <div className="w-full flex items-center bg-main mb-6 h-[69px] round overflow-hidden shadow">
          <img src={search} alt="" className="w-[21px] h-[21px] ml-8" />
          <input
            placeholder="Search GitHub username…"
            className="pl-6 outline-none w-full text-[18px] placeholder:text-text text-[#222731] dark:text-dText"
          />
          <button className="bg-secondary text-dText font-bold text-base px-6 py-[13px] mr-[10px] rounded-[10px]">
            Search
          </button>
        </div>
        <div className="w-full flex bg-main mb-10 shadow round p-12">
          <div className="w-[117px] h-[117px] mr-[37px] bg-date rounded-full flex-none"></div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full">
              <p className="font-bold text-xl text-title">The Octocat</p>
              <span className="text-date text-[15px]">Joined 25 Jan 2001</span>
            </div>
            <span className="text-secondary mt-[2px] mb-5">@octocat</span>
            <p className="text-[15px] text-text max-w-full">
              This profile has no bio.
            </p>
            <div className="mt-8 bg-bgColor w-full h-[85px] rounded-[10px] flex flex-row p-8 items-center">
              <div className="flex-1 flex flex-col">
                <span className="text-sm text-text">Repos</span>
                <span className="text-lg font-bold text-title">8</span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-sm text-text">Followers</span>
                <span className="text-lg font-bold text-title">3938</span>
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-sm text-text">Following</span>
                <span className="text-lg font-bold text-title">9</span>
              </div>
            </div>
            <div className="mt-[37px] flex w-full flex-wrap">
              <div className="flex flex-row items-center basis-1/2 overflow-hidden">
                <img src={location} alt="" className="mr-5" />
                <span className="whitespace-nowrap text-[15px] text-text">
                  San Francisco
                </span>
              </div>
              <div className="flex flex-row items-center basis-1/2 overflow-hidden">
                <img src={twitter} alt="" className="mr-5" />
                <span className="whitespace-nowrap text-[15px] text-text">
                  Not Available
                </span>
              </div>
              <div className="flex flex-row items-center basis-1/2 mt-5 overflow-hidden">
                <img src={website} alt="" className="mr-5" />
                <span className="whitespace-nowrap text-[15px] text-text -ml-1">
                  https://github.blog
                </span>
              </div>
              <div className="flex flex-row items-center basis-1/2 mt-5 overflow-hidden">
                <img src={company} alt="" className="mr-5" />
                <span className="whitespace-nowrap text-[15px] text-text">
                  San Francisco
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
