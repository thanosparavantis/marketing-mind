import PageMetaComponent from "../components/PageMetaComponent";
import FooterComponent from "../components/FooterComponent";
import TextareaAutosize from "react-textarea-autosize";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div className="flex flex-col justify-between" style={{minHeight: "100vh"}}>
      <PageMetaComponent title="Contact"/>
      <div className="flex flex-col items-center justify-center">
        <div className="container max-w-7xl text-justify leading-loose px-3">
          <section className="flex items-center justify-center py-32">
            <h1 className="text-brand text-7xl font-bold">
              Contact
            </h1>
          </section>

          <main className="grid lg:grid-cols-2 gap-5 mb-5">
            <div>
              <div>
                <h1 className="p-5 md:p-8 bg-white text-brand text-xl font-bold border rounded-t">
                  Get in touch
                </h1>
                <div className="p-5 md:px-8 md:py-5 bg-white text-gray-900 border-l border-r border-b rounded-b mb-5">
                  <p>
                    26 Tositsa Street, 106 83 Athens, Greece
                  </p>
                  <p>
                    +30 210 3844423<span className="mx-3">&middot;</span>+30 698 2929653
                  </p>
                  <p>
                    <a href="mailto:contact@marketingmind.gr" className="underline">contact@marketingmind.gr</a>
                  </p>
                </div>
              </div>
              <div>
                <h1 className="p-5 md:p-8 bg-white text-brand text-xl font-bold border rounded-t">
                  Contact form
                </h1>
                <form
                  action="/contact/success"
                  name="contact"
                  method="post"
                  className="bg-white border-l border-r border-b rounded-b"
                >
                  <div className="p-5 md:px-8 md:py-5 flex flex-col">
                    <input type="hidden" name="form-name" value="contact"/>

                    <label
                      htmlFor="fullname"
                      className="font-bold cursor-pointer mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      required
                      className="px-2 py-1 border rounded text-gray-800 mb-8
                      border-gray-400 focus:outline-none focus:ring-2"
                    />
                    <label
                      htmlFor="email"
                      className="font-bold cursor-pointer mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      required
                      className="px-2 py-1 border rounded text-gray-800 mb-8
                      border-gray-400 focus:outline-none focus:ring-2"
                    />
                    <label
                      htmlFor="message"
                      className="font-bold cursor-pointer mb-1"
                    >
                      Message
                    </label>
                    <TextareaAutosize
                      minRows="4"
                      name="message"
                      id="message"
                      required
                      className="px-2 py-1 border rounded text-gray-800
                      border-gray-400 resize-none focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="p-5 md:px-8 md:py-3 bg-white border-t flex items-center justify-center text-center">
                    <button className="w-full shadow text-white font-bold rounded py-2
                    bg-green-400 hover:bg-green-500 transition focus:outline-none focus:ring-2">
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-3"/>
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <iframe
              title="Marketing Mind on Google Maps"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUc50MDS9oRQR_88K8lBRPis&key=AIzaSyD4gDFO8ehyzN3EHwn4dEIqpte_58eRo3U"
              className="bg-white w-full border rounded"
              style={{height: "500px"}}
              loading="lazy"
              allowFullScreen
            />
          </main>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}