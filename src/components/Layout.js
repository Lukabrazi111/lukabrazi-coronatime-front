import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /*
     * close language
     * menu on click
     * */
    let handler = (event) => {
      if (event.target.classList.contains("lang")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="absolute right-1/2 top-2">
        <ul>
          <li>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center cursor-pointer"
            >
              English
              <span>
                <img
                  className="ml-2"
                  src={require("../assets/img/Stroke 165.png")}
                  alt="arrowDown"
                />
              </span>
            </button>
            {isOpen && (
              <div className="shadow-md w-36 absolute left-0 top-9 rounded-lg bg-gray-200 bg-opacity-75 text-black">
                <ul>
                  <li>
                    <Link
                      to=""
                      className="lang text-left px-4 p-3 transition duration-150 ease-in hover:bg-gray-300 rounded w-full block"
                    >
                      English
                    </Link>
                  </li>

                  <li>
                    <Link
                      to=""
                      className="lang text-left px-4 p-3 transition duration-150 ease-in hover:bg-gray-300 rounded w-full block"
                    >
                      ქართული
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
