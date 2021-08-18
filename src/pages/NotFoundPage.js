import FooterComponent from "../components/FooterComponent";
import PageMetaComponent from "../components/PageMetaComponent";
import {Link} from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-between" style={{minHeight: "calc(100vh - 5rem)"}}>
      <PageMetaComponent title="404"/>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="container max-w-7xl leading-loose px-3">
          <section className="flex flex-col items-center justify-center text-center">
            <h1 className="text-brand text-5xl font-bold text-gray-900 mb-8">
              404
            </h1>
            <p className="mb-5 font-bold text-gray-600">
              The page you requested could not be found.
            </p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 transition text-white font-bold
            rounded shadow px-8 py-2 focus:outline-none focus:ring-2">
              Back to Home
            </Link>
          </section>
        </div>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </div>
  )
}