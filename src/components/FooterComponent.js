import {Link} from "react-router-dom";
import shortLogoImage from "../images/logo-short.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {useMemo} from "react";

export default function FooterComponent() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="flex items-center justify-center bg-brand shadow-lg">
      <div className="container max-w-7xl px-5 py-10 text-white font-bold">
        <div className="grid lg:grid-cols-3 gap-10 md:gap-0">
          <div className="flex items-center justify-center lg:justify-start">
            <Link to="/">
              <img src={shortLogoImage} alt="Marketing Mind" className="hover:opacity-90 h-14"/>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center text-center text-sm md:text-base">
            <p className="mb-1">
              &copy; {year} Marketing Mind
            </p>
            <p>
              Adding value to marketing activities
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <a href="https://www.facebook.com/marketingmind.gr/"
               target="_blank"
               rel="noopener noreferrer"
               className="mr-5 hover:opacity-90"
               title="Visit our Facebook page"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/company/marketingmindgr/"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:opacity-90"
               title="Visit our LinkedIn profile"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}