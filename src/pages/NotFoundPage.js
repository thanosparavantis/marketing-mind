import FooterComponent from "../components/FooterComponent";
import PageMetaComponent from "../components/PageMetaComponent";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-between" style={{height: "calc(100vh - 5rem)"}}>
      <PageMetaComponent title="404"/>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="container max-w-7xl text-justify leading-loose px-5">
          <section className="flex flex-col items-center justify-center text-center">
            <h1 className="text-brand text-5xl font-bold text-gray-900 mb-8">
              404
            </h1>
            <p className="font-bold text-gray-600">
              The page you requested could not be found.
            </p>
          </section>
        </div>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </div>
  )
}