import shortLogoImage from "../images/logo-short.png";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useCallback, useEffect, useMemo, useState} from "react";

export default function Navigation() {
  const [opened, setOpened] = useState(false)
  const year = useMemo(() => new Date().getFullYear(), [])

  const toggleOpenState = useCallback(() => {
    setOpened(!opened)
  }, [opened])

  useEffect(() => {
    const body = document.querySelector("body")

    if (opened) {
      body.classList.add("overflow-hidden")
    } else {
      body.classList.remove("overflow-hidden")
    }
  }, [opened])

  return (
    <nav className="flex items-center justify-center h-20 bg-brand shadow-lg">
      <div className="container max-w-7xl flex items-center px-5 text-white font-bold">
        <Link to="/">
          <img src={shortLogoImage}
               title="Marketing Mind - Adding value to marketing activities"
               alt="Marketing Mind"
               className="hover:opacity-90 h-12"
          />
        </Link>
        <div className="ml-auto hidden md:flex md:items-center md:justify-center">
          <NavLink to="/"
                   exact={true}
                   activeClassName="opacity-100"
                   className="h-20 flex items-center justify-center text-center
                   mr-10 opacity-80 transition hover:opacity-100"
          >
            Home
          </NavLink>
          <NavLink to="/about"
                   exact={true}
                   activeClassName="opacity-100"
                   className="h-20 flex items-center justify-center text-center
                   mr-10 opacity-80 transition hover:opacity-100"
          >
            About
          </NavLink>
          <NavLink to="/contact"
                   exact={true}
                   activeClassName="opacity-100"
                   className="h-20 flex items-center justify-center text-center
                   opacity-80 transition hover:opacity-100"
          >
            Contact
          </NavLink>
        </div>

        <button className="ml-auto block md:hidden" onClick={toggleOpenState} aria-label="Toggle navigation menu">
          <div className="h-20 px-5 flex items-center justify-center text-center">
            <FontAwesomeIcon icon={opened ? faTimes : faBars} size="lg"/>
          </div>
        </button>

        {opened && (
          <div
            className="flex flex-col justify-between absolute bg-gray-100 top-0 left-0 right-0 bottom-0 mt-20 overflow-auto"
            style={{height: "calc(100vh - 5rem)"}}>
            <div className="text-brand text-lg">
              <Link to="/"
                    className="h-20 flex items-center px-5 bg-white border-b"
                    onClick={toggleOpenState}
              >
                Home
              </Link>
              <Link to="/about"
                    className="h-20 flex items-center px-5 bg-white border-b"
                    onClick={toggleOpenState}
              >
                About
              </Link>
              <Link to="/contact"
                    className="h-20 flex items-center px-5 bg-white border-b"
                    onClick={toggleOpenState}
              >
                Contact
              </Link>
            </div>
            <div className="m-5 text-sm text-gray-500 text-center">
              <p>
                &copy; {year} Marketing Mind
              </p>
              <p>
                Adding value to marketing activities
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}