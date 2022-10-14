import React, { useEffect, useState } from "react";
import axios from "axios";

import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import search from "./assets/icon-search.svg";

function App() {
  const [theme, setTheme] = useState("");
  const [user, setUser] = useState(false);
  const el = document.getElementById("root");
  useEffect(() => {
    if (localStorage.theme) {
      if (localStorage.theme === "dark") {
        el.classList.add("dark");
        setTheme("dark");
      } else if (localStorage.theme === "light") {
        el.classList.remove("dark");
        setTheme("light");
      }
    } else {
      localStorage.theme = "light";
      setTheme("light");
    }
  }, [theme]);

  const onSearch = async () => {
    const input = document.getElementById("searchInput");
    const inputError = document.getElementById("inputError");
    if (input) {
      const nickname = input.value;
      const data = await searchUser(nickname);
      if (data) {
        await setUser(data);
        if (!inputError.className.includes("hidden")) {
          inputError.classList.add("hidden");
        }
      } else {
        console.log("user does not exits...");
        inputError.classList.remove("hidden");
      }
    } else {
      console.log("Please enter username...");
      //code...
    }
  };
  const searchUser = async (nickname) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${nickname}`
      );
      if (data) {
        return data;
      } else {
        return false;
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  const darkModeClick = () => {
    if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      el.classList.add("dark");
      setTheme("dark");
    } else if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      el.classList.remove("dark");
      setTheme("light");
    }
  };

  const formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Ju;",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return day + " " + months[month - 1] + " " + year;
  };
  return (
    <div className="App w-screen min-h-screen bg-bgColor flex flex-col item-center dark:bg-dBg">
      <div className="container tablet:max-w-[573px] mobile:max-w-[327px]  my-auto">
        <div className="w-full flex justify-between mb-[35px]">
          <h1 className="text-xl text-[#222731] font-bold dark:text-dText">
            devfinder
          </h1>
          <button
            onClick={darkModeClick}
            className="flex items-center cursor-pointer"
          >
            <span className="text-sm text-date tracking-[2.5px] mr-4 font-bold dark:text-dText">
              {theme === "light" ? "DARK" : "LIGHT"}
            </span>
            <img
              src={theme === "light" ? moon : sun}
              alt=""
              className="h-5 w-5"
            />
          </button>
        </div>
        <div className="w-full flex items-center bg-main mb-6 h-[69px] round overflow-hidden shadow dark:shadow-none dark:bg-dMain">
          <img
            src={search}
            alt=""
            className="w-[21px] h-[21px] mobile:w-[17px] mobile:h-[17px] ml-8 mobile:ml-4"
          />
          <input
            placeholder="Search GitHub username…"
            id="searchInput"
            className="pl-6 mobile:pl-[10px] mobile:text-sm outline-none w-full text-[18px] placeholder:text-text text-[#222731] dark:bg-dMain dark:text-dText placeholder:dark:text-dText"
          />
          <span
            id="inputError"
            className="text-[#F74646] text-[15px] font-bold mobile:text-sm whitespace-nowrap mr-6 hidden"
          >
            No results
          </span>
          <button
            onClick={onSearch}
            className="bg-secondary text-dText font-bold text-base mobile:text-[14px] mobile:px-4 mobile:py-3 px-6 py-[13px] mr-[10px] rounded-[10px] hover:bg-[#60ABFF]"
          >
            Search
          </button>
        </div>
        {user ? (
          <div className="w-full flex flex-col bg-main mb-10 shadow dark:shadow-none round laptop:p-12 tablet:p-10 mobile:px-6 mobile:pt-8 mobile:pb-12 dark:bg-dMain">
            <div className="flex flex-row items-start w-full">
              <div className="w-[117px] h-[117px] mobile:w-[70px] mobile:h-[70px] mr-[37px] mobile:mr-[20px] bg-date rounded-full flex-none overflow-hidden">
                <img src={user.avatar_url} alt="" />
              </div>
              <div className="w-full flex laptop:flex-row tablet:flex-col justify-between">
                <div>
                  <p className="font-bold text-xl text-title dark:text-dText mobile:text-base">
                    {user.name}
                  </p>
                  <span className="text-secondary mt-[2px] mb-5 mobile:text-sm">
                    @{user.login}
                  </span>
                </div>
                <span className="text-date text-[15px] laptop:mt-2 tablet:mt-2 mobile:text-sm dark:text-dText">
                  Joined {formatDate(user.created_at)}
                </span>
              </div>
            </div>
            <div className="flex flex-col laptop:pl-[154px] tablet:mt-6 laptop:-mt-10">
              <p className="text-[15px] text-text max-w-full dark:text-dText mobile:text-sm">
                {user.bio ? user.bio : "This profile has no bio"}
              </p>
              <div className="mt-8 bg-bgColor w-full h-[85px] rounded-[10px] flex flex-row p-8 mobile:p-3 items-center dark:bg-dBg mobile:justify-between">
                <div className="flex-1 flex flex-col mobile:items-center">
                  <span className="text-sm text-text dark:text-dText mobile:text-[11px]">
                    Repos
                  </span>
                  <span className="text-lg font-bold text-title dark:text-dText mobile:text-base">
                    {user.public_repos}
                  </span>
                </div>
                <div className="flex-1 flex flex-col mobile:items-center">
                  <span className="text-sm text-text dark:text-dText mobile:text-[11px]">
                    Followers
                  </span>
                  <span className="text-lg font-bold text-title dark:text-dText mobile:text-base">
                    {user.followers}
                  </span>
                </div>
                <div className="flex-1 flex flex-col mobile:items-center">
                  <span className="text-sm text-text dark:text-dText mobile:text-[11px]">
                    Following
                  </span>
                  <span className="text-lg font-bold text-title dark:text-dText mobile:text-base">
                    {user.following}
                  </span>
                </div>
              </div>
              <div className="mt-[37px] mobile:mt-4 flex w-full flex-wrap mobile:flex-nowrap mobile:flex-col">
                <div className="flex flex-row items-center basis-1/2 overflow-hidden">
                  <svg
                    height="20"
                    width="14"
                    className={`mr-5 ${user.location ? "" : "opacity-50"}`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                      fill={theme === "light" ? "#4b6a9b" : "#FFFFFF"}
                    />
                  </svg>
                  <span
                    className={`whitespace-nowrap text-[15px] text-text dark:text-dText ${
                      user.location ? "hover:underline" : "opacity-50"
                    }`}
                  >
                    {user.location ? user.location : "Not Avaliable"}
                  </span>
                </div>
                <div className="flex flex-row items-center basis-1/2 overflow-hidden mobile:mt-4">
                  <svg
                    height="18"
                    className={`mr-5 ${
                      user.twitter_username ? "" : "opacity-50"
                    }`}
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                      fill={theme === "light" ? "#4b6a9b" : "#FFFFFF"}
                    />
                  </svg>
                  <span
                    className={`whitespace-nowrap text-[15px] text-text opacity-50 dark:text-dText ${
                      user.twitter_username ? "hover:underline" : "opacity-50"
                    }`}
                  >
                    {user.twitter_username
                      ? user.twitter_username
                      : "Not Avaliable"}
                  </span>
                </div>
                <div className="flex flex-row items-center basis-1/2 mt-5 overflow-hidden mobile:mt-4">
                  <svg
                    height="20"
                    width="20"
                    className={`mr-5 ${user.blog !== "" ? "" : "opacity-50"}`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill={theme === "light" ? "#4b6a9b" : "#FFFFFF"}>
                      <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
                      <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
                    </g>
                  </svg>
                  <span
                    className={`whitespace-nowrap text-[15px] text-text -ml-1 dark:text-dText ${
                      user.blog !== "" ? "hover:underline" : "opacity-50"
                    }`}
                  >
                    {user.blog !== "" ? user.blog : "Not Avaliable"}
                  </span>
                </div>
                <div className="flex flex-row items-center basis-1/2 mt-5 overflow-hidden mobile:mt-4">
                  <svg
                    height="20"
                    className={`mr-5 ${user.company ? "" : "opacity-50"}`}
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill={theme === "light" ? "#4b6a9b" : "#FFFFFF"}>
                      <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
                    </g>
                  </svg>
                  <span
                    className={`whitespace-nowrap text-[15px] text-text dark:text-dText ${
                      user.company ? "hover:underline" : "opacity-50"
                    }`}
                  >
                    {user.company ? user.company : "Not Avaliable"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
