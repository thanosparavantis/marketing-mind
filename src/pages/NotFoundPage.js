import Footer from "../components/Footer";
import MetaTags from "../components/MetaTags";
import {Link} from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-between" style={{minHeight: "calc(100vh - 5rem)"}}>
      <MetaTags title="404"/>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="container max-w-7xl px-3">
          <main className="flex flex-col items-center justify-center text-center"
                style={{minHeight: "calc(100vh - 5rem)"}}>
            <h1 className="text-brand font-bold text-gray-900 mb-8 text-3xl md:text-5xl">
              404
            </h1>
            <p className="mb-5 font-bold text-gray-600 text-sm md:text-base leading-loose">
              The page you requested could not be found.
            </p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 transition text-white font-bold
                                    rounded shadow px-8 py-3 focus:outline-none focus:ring-2 text-sm md:text-base">
              Back to Home
            </Link>
          </main>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}