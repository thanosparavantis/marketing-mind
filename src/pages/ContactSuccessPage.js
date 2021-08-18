import PageMetaComponent from "../components/PageMetaComponent";
import FooterComponent from "../components/FooterComponent";
import {Link} from "react-router-dom";

export default function ContactSuccessPage() {
  return (
    <div className="flex flex-col justify-between" style={{height: "calc(100vh - 5rem)"}}>
      <PageMetaComponent title="Thank you"/>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="container max-w-7xl text-justify leading-loose px-3">
          <main className="flex flex-col items-center justify-center text-center">
            <h1 className="text-brand text-5xl font-bold text-gray-900 mb-8">
              Thank you
            </h1>
            <p className="mb-5 font-bold text-gray-600">
              We will get back to you soon, thank you for contacting us.
            </p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 transition text-white font-bold
            rounded shadow px-8 py-2 focus:outline-none focus:ring-2">
              Back to Home
            </Link>
          </main>
        </div>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </div>

  )
}