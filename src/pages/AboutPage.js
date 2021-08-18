import mariaMavrommatiImg from "../images/maria-mavrommati.jpg"
import PageMetaComponent from "../components/PageMetaComponent";
import FooterComponent from "../components/FooterComponent";

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-between" style={{minHeight: "100vh"}}>
      <PageMetaComponent title="About"/>
      <div className="flex flex-col items-center justify-center">
        <div className="container max-w-7xl px-3">
          <section className="flex items-center justify-center py-32">
            <h1 className="text-brand text-7xl font-bold text-brand">
              About
            </h1>
          </section>
          <main className="p-5 md:p-8 flex flex-col lg:flex-row justify-center bg-white border mb-5">
            <img src={mariaMavrommatiImg}
                 alt="Maria Mavrommati"
                 className="shadow-lg rounded h-80 object-cover mb-8 lg:mb-0 lg:mr-8"/>
            <div>
              <h1 className="text-brand font-bold mb-5 text-xl md:text-3xl">
                Maria Mavrommati
              </h1>
              <div className="text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Owner at Marketing Mind
                </h2>
                <p className="text-gray-900">
                  I'm a marketing professional with more than 20 years of experience,
                  passionate to work with all size of businesses to contribute to their success.
                  For this reason, I founded "Marketing Mind" focusing on understanding each
                  business' special needs and providing the most efficient customized services
                  to facilitate the achievement of their goals. Myself and my partners are highly
                  creative in developing the most effective solutions,
                  working with integrity and discipline. Always at your disposal to make your business succeed!
                </p>
              </div>
            </div>
          </main>
          <section className="bg-white border rounded mb-5">
            <h1 className="p-5 md:p-8 text-brand text-brand text-brand text-xl font-bold border-b">
              Education
            </h1>
            <div className="px-5 md:px-8 flex flex-col justify-center py-5 border-b
                            text-sm md:text-base leading-loose md:leading-loose">
              <h2 className="font-bold text-gray-900">
                1995 - 1997
              </h2>
              <p className="text-gray-700">
                University of LaVerne, Master in Business Administration (MBA) (GPA 3.64)
              </p>
            </div>
            <div className="px-5 md:px-8 flex flex-col justify-center py-5
                            text-sm md:text-base leading-loose md:leading-loose">
              <h2 className="font-bold text-gray-900">
                1991 - 1994
              </h2>
              <p className="text-gray-700">
                The American College of Greece - Deree College, Bachelor (BSc) in Marketing Management (GPA 3.17)
              </p>
            </div>
          </section>
          <section className="bg-white border rounded mb-5">
            <h1 className="p-5 md:p-8 text-brand text-brand text-brand text-xl font-bold border-b">
              Work Experience
            </h1>
            <div className="px-5 md:px-8 flex flex-col justify-center py-5 border-b
                            text-sm md:text-base leading-loose md:leading-loose">
              <h2 className="font-bold text-gray-900">
                Jun. 2020 - Today
              </h2>
              <p className="text-gray-700">
                Marketing Mind, Owner, Marketing Consultancy Agency offering customized marketing planning, digital
                marketing, event management, business development, business consulting, brand identity development,
                administrative support, fundamental marketing support, business coaching.
              </p>
            </div>
            <div className="px-5 md:px-8 flex flex-col justify-center py-5 border-b
                            text-sm md:text-base leading-loose md:leading-loose">
              <h2 className="font-bold text-gray-900">
                Jul. 1997 - Sep. 2019
              </h2>
              <p className="text-gray-700">
                3M Hellas Limited, Marketing Specialist, Marketing Coordinator, Marketing, Telesales & CRM, Export
                Coordinator, Quality Coordinator, Claim Planner, Sales Representative
              </p>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Dental Solutions planning & execution of Marketing programs CEE & WE portfolio</li>
                <li>Market Development</li>
                <li>Event Management</li>
                <li>CRM database handling</li>
                <li>Coordination of exporting procedures until the products' receipt from customers and payments'
                  clearance,
                </li>
                <li>Quality Control</li>
                <li>Internal audits of ISO9002/EN46002 quality systems</li>
                <li>Imports discrepancies handling -shortages, overages, wrong shipments-, quality problems
                  management, repairs' handling for visual and medical products
                </li>
                <li>Sales representation of Athens and western Greece</li>
              </ul>
            </div>
            <div className="px-5 md:px-8 flex flex-col justify-center py-5 border-b
                            text-sm md:text-base leading-loose md:leading-loose">
              <h2 className="font-bold text-gray-900">
                Oct. 1996 - Jan. 1999
              </h2>
              <p className="text-gray-700">
                Omiros College (Institute of Vocational Training), Instructor (teaching Marketing and Management
                courses,
                tutoring in Business Administration courses, teaching university-level business courses in English)
              </p>
            </div>
            <div className="px-5 md:px-8 flex flex-col justify-center py-5
                            text-sm md:text-base leading-loose md:leading-loose">
              <h2 className="font-bold text-gray-900">
                Feb. 1995 - Nov. 1995
              </h2>
              <p className="text-gray-700">
                Alfa Laboratory Scientific, Marketing Assistant (promotion of laboratory instruments, representation of
                the company exhibitions, contacts with other subsidiaries representatives, customer contacts, sales
                reports, invoice reports, mail correspondence)
              </p>
            </div>
          </section>
          <section className="bg-white border rounded mb-5 text-sm md:text-base leading-loose md:leading-loose">
            <h1 className="p-5 md:p-8 text-brand text-brand text-brand text-xl font-bold border-b">
              Continuing Education
            </h1>
            <div className="px-5 md:px-8 flex flex-col justify-center py-5">
              <h2 className="font-bold text-gray-900">
                Dec. 1999
              </h2>
              <p className="text-gray-700">
                Practical Auditing of Quality Management Systems to ISO 9001:1994 & ISO 10011-1 (Lead Auditor)
              </p>
            </div>
          </section>
          <section className="bg-white border rounded mb-5 text-sm md:text-base leading-loose md:leading-loose">
            <h1 className="p-5 md:p-8 text-brand text-brand text-brand text-xl font-bold border-b">
              Awards
            </h1>
            <div className="p-5 md:px-8 flex flex-col justify-center py-5">
              <ul className="text-gray-700 list-disc list-inside">
                <li>Jul. 1999 3M Hellas Limited, Spot recognition for ISO 9002/EN 46002 certification</li>
                <li>Jan. 2001 3M Hellas Limited, Acropolis award for total contribution to the company</li>
                <li>Jan. 2001 3M Hellas Limited, Exceptional Employee performance appraisal award</li>
                <li>Jan. 2006 3M Hellas Limited, Spot recognition for the project Telesales</li>
                <li>Jan. 2008 3M Hellas Limited, Olympus award for total contribution to the company</li>
                <li>Jan. 2010 3M Hellas Limited, a Six Sigma Professionalism Award in 2010</li>
                <li>Feb. 2017 3M Hellas MEPE, Marketing Excellence Award for 2016</li>
                <li>Jan. 2018 3M Hellas MEPE, Marketing Excellence Award for 2017</li>
              </ul>
            </div>
          </section>
          <section className="bg-white border rounded mb-5">
            <h1 className="p-5 md:p-8 text-brand text-brand text-brand text-xl font-bold border-b">
              Languages
            </h1>
            <div className="px-5 md:px-8 text-gray-700 flex flex-col justify-center py-5
                            text-sm md:text-base leading-loose md:leading-loose">
              <p>
                Fluency in English and Greek, working knowledge in French.
              </p>
            </div>
          </section>
          <section className="bg-white border rounded mb-5">
            <h1 className="p-5 md:p-8 text-brand text-brand text-brand text-xl font-bold border-b">
              Computer skills
            </h1>
            <div className="px-5 md:px-8 text-gray-700 flex flex-col justify-center py-5
                            text-sm md:text-base leading-loose md:leading-loose">
              <p>
                Windows, Office, Minitab, Outlook, WEBII, Salesforce.
              </p>
            </div>
          </section>
          <section className="bg-white border rounded mb-5">
            <h1 className="p-5 md:p-8 text-brand text-brand text-brand text-xl font-bold border-b">
              Extracurricular activities
            </h1>
            <div className="px-5 md:px-8 text-gray-700 flex flex-col justify-center py-5
                            text-sm md:text-base leading-loose md:leading-loose">
              <p>
                Cooking, food blogging, travelling.
              </p>
            </div>
          </section>
          <section className="bg-white border rounded mb-5">
            <h1 className="p-5 md:p-8 text-brand text-brand text-brand text-xl font-bold border-b">
              References
            </h1>
            <div className="px-5 md:px-8 text-gray-700 flex flex-col justify-center py-5
                            text-sm md:text-base leading-loose md:leading-loose">
              <p>
                Available upon request.
              </p>
            </div>
          </section>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}