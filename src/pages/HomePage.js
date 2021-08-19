import logoImg from "../images/logo-transparent.png"
import fundamentalMarketingImg from "../images/fundamental-marketing.jpg"
import digitalMarketingImg from "../images/digital-marketing.jpg"
import administrativeSupportImg from "../images/administrative-support.jpg"
import addedValueServicesImg from "../images/added-value-services.jpg"
import {faChartLine, faEnvelopeOpenText, faHandHoldingUsd, faLaptop} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MetaTags from "../components/MetaTags";
import FooterComponent from "../components/FooterComponent";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-between" style={{minHeight: "100vh"}}>
      <MetaTags
        title="Home"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="container max-w-7xl px-3">
          <section className="flex items-center justify-center py-32">
            <img src={logoImg} alt="Marketing Mind" className="h-14 md:h-28"/>
          </section>

          <main className="mb-5 bg-white border rounded">
            <h1 className="p-5 md:p-8 text-lg md:text-xl border-b text-brand text-brand text-brand font-bold">
              Mission
            </h1>
            <p className="p-5 md:px-8 md:py-5 text-gray-900 text-sm md:text-base leading-loose md:leading-loose">
              We work with you to contribute to the success of your business.
              We focus on understanding your special needs and providing the most efficient customized services
              in order to facilitate the achievement of your goals.
              We are creative in developing the most effective solutions, working with integrity and discipline.
              Based on over 20 years of experience in Marketing,
              we are passionate to add value to your marketing activities.
              Marketing Mind offers integrated marketing solutions
              based on your business special needs. Your success is our business.
            </p>
          </main>
          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            <section className="bg-white border rounded">
              <h1 className="p-5 md:p-8 text-brand text-xl font-bold">
                <FontAwesomeIcon icon={faChartLine} className="mr-3"/>
                Fundamental Marketing
              </h1>

              <img src={fundamentalMarketingImg}
                   alt="Fundamental Marketing section"
                   className="object-cover w-full h-64"
              />

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Business Plan
                </h2>
                <p className="text-gray-700">
                  Business plans with a complete ppt/overheads presentation, including
                  Market Analysis, Company Targets, Company Investment, Sales Plan, ROI.
                </p>
              </div>

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Marketing Plan
                </h2>
                <p className="text-gray-700">
                  Marketing plans with a complete ppt/overheads presentation, including
                  Market Analysis, Product details, Pricing - Distribution - Promotion Plan,
                  Company Targets, Company Investment, ROI.
                </p>
              </div>

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Promotions Design
                </h2>
                <p className="text-gray-700">
                  Suggest, design and develop promotion ideas according to your needs,
                  including financials (Gross Margin calculation, pricing, quantity discounts, etc.)
                </p>
              </div>

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Brochure Design
                </h2>
                <p className="text-gray-700">
                  Design, develop and print company, product and promo brochures
                  in cooperation with your/suggested graphic designer and printer.
                </p>
              </div>
            </section>

            <section className="bg-white border rounded">
              <h1 className="p-5 md:p-8 text-brand text-xl font-bold">
                <FontAwesomeIcon icon={faLaptop} className="mr-3"/>
                Digital Marketing
              </h1>

              <img src={digitalMarketingImg}
                   alt="Digital Marketing section"
                   className="object-cover w-full h-64"
              />

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Site Design
                </h2>
                <p className="text-gray-700">
                  Company site (form, texts, motos, mission, photos) development in cooperation with graphic designer.
                </p>
              </div>

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Social Media Posts
                </h2>
                <p className="text-gray-700">
                  Social network posts (daily, weekly, monthly, etc.) regarding total company,
                  products/services, based on briefing on your special needs.
                </p>
              </div>

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Google Search Ads
                </h2>
                <p className="text-gray-700">
                  Google Search Keywords and Google Ads campaigns.
                </p>
              </div>
            </section>

            <section className="bg-white border rounded">
              <h1 className="p-5 md:p-8 text-brand text-xl font-bold">
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="mr-3"/>
                Administrative Support
              </h1>

              <img src={administrativeSupportImg}
                   alt="Administrative Support section"
                   className="object-cover w-full h-64"
              />

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Reports Handling
                </h2>
                <p>
                  Preparation of Weekly/Monthly/Annual Reports, based on data provided regarding
                  Financial and Sales results, Marketing Activities Analytics, Coordination and Customized reports.
                </p>
              </div>
              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Secretarial Support
                </h2>
                <p className="text-gray-700">
                  Undertake the composition of Communication letters, Requisitions,
                  Internal Communication, Internal Events, Executives Meetings, e-mails, Offers/Tenders.
                </p>
              </div>
            </section>
            <section className="bg-white border rounded">
              <h1 className="p-5 md:p-8 text-brand text-xl font-bold">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-3"/>
                Added Value Services
              </h1>

              <img src={addedValueServicesImg}
                   alt="Added Value Services section"
                   className="object-cover w-full h-64"
              />

              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Event Management
                </h2>
                <p className="text-gray-700">
                  Handling and support of Executive Meetings,
                  Exhibitions, Congresses, Customer events, Employees Meetings, Annual Events.
                </p>
              </div>
              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Business Consulting
                </h2>
                <p className="text-gray-700">
                  Crisis Management, Project Management, Product Management, Key Account Management,
                  Team Management, Brand Identity development, Strategy Development.
                </p>
              </div>
              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0 border-b
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Software Development
                </h2>
                <p className="text-gray-700">
                  Development of customized software according to
                  your business needs (applications, programs, automation systems).
                </p>
              </div>
              <div className="px-5 md:px-8 flex flex-col justify-center lg:h-40 py-5 lg:py-0
                              text-sm md:text-base leading-loose md:leading-loose">
                <h2 className="font-bold text-gray-900">
                  Consulting Environmental Issues
                </h2>
                <p className="text-gray-700">
                  Development of Environmental Impact Studies
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}