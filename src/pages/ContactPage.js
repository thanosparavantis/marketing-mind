import MetaTags from "../components/MetaTags";
import FooterComponent from "../components/FooterComponent";
import TextareaAutosize from "react-textarea-autosize";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {useCallback, useState} from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleFullNameChange = useCallback((event) => {
    setFullName(event.target.value)
  }, [])

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  const handleMessageChange = useCallback((event) => {
    setMessage(event.target.value)
  }, [])

  const resetFields = useCallback(() => {
    setFullName("")
    setEmail("")
    setMessage("")
  }, [])

  const resetStatus = useCallback(() => {
    setSuccess(false)
    setError(false)
  }, [])

  const encode = useCallback((data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }, [])

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    resetStatus()
    setLoading(true)

    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": "contact",
        "full-name": fullName,
        "email": email,
        "message": message
      })
    }).then(response => {
      if (response.ok) {
        setSuccess(true)
        resetFields()
      } else {
        setError(true)
      }
    }).catch(error => {
      console.error(error)
      setError(true)
    }).finally(() => {
      setLoading(false)
    })
  }, [resetStatus, resetFields, encode, fullName, email, message])

  return (
    <div className="flex flex-col justify-between" style={{minHeight: "100vh"}}>
      <MetaTags
        title="Contact"
        description="Get in touch and let us work together to contribute to the success of your business."
      />
      <div className="flex flex-col items-center justify-center">
        <div className="container max-w-7xl px-3">
          <header className="flex items-center justify-center py-32">
            <h1 className="text-brand text-5xl md:text-7xl font-bold">
              Contact
            </h1>
          </header>

          <main className="grid lg:grid-cols-2 gap-5 lg:mb-5">
            <iframe
              title="Marketing Mind on Google Maps"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUc50MDS9oRQR_88K8lBRPis&key=AIzaSyD4gDFO8ehyzN3EHwn4dEIqpte_58eRo3U"
              className="md:col-span-2 bg-white w-full shadow rounded h-80"
              loading="lazy"
              allowFullScreen
            />

            <section className="bg-white border rounded">
              <h1 className="p-5 md:p-8 text-brand text-xl font-bold border-b">
                Get in touch
              </h1>
              <address className="not-italic p-5 md:px-8 md:py-5 text-gray-900 text-sm md:text-base leading-loose md:leading-loose">
                <p>
                  26 Tositsa Street, 106 83 Athens, Greece
                </p>
                <p>
                  <a href="tel:+302103844423" className="underline">+30 210 3844423</a>
                  <span className="mx-3">&middot;</span>
                  <a href="tel:+306982929653" className="underline">+30 698 2929653</a>
                </p>
                <p>
                  <a href="mailto:contact@marketingmind.gr" className="underline">contact@marketingmind.gr</a>
                </p>
              </address>
            </section>

            <div className="bg-white border rounded">
              <h1 className="p-5 md:p-8 text-brand text-xl font-bold border-b">
                Contact form
              </h1>
              <form
                name="contact"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="p-5 md:px-8 md:py-5 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="full-name"
                        className="block text-gray-900 font-bold cursor-pointer mb-2 text-sm md:text-base"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        required
                        disabled={loading}
                        value={fullName || ""}
                        onChange={handleFullNameChange}
                        onFocus={resetStatus}
                        className="w-full px-3 py-2 border rounded text-gray-800
                                   text-sm border-gray-400 focus:outline-none focus:ring-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-900 font-bold cursor-pointer mb-2 text-sm md:text-base"
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        required
                        disabled={loading}
                        value={email || ""}
                        onChange={handleEmailChange}
                        onFocus={resetStatus}
                        className="w-full px-3 py-2 border rounded text-gray-800
                                   text-sm border-gray-400 focus:outline-none focus:ring-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-gray-900 font-bold cursor-pointer mb-2 text-sm md:text-base"
                      >
                        Message
                      </label>
                      <TextareaAutosize
                        minRows="4"
                        name="message"
                        id="message"
                        required
                        disabled={loading}
                        value={message || ""}
                        onChange={handleMessageChange}
                        onFocus={resetStatus}
                        className="w-full px-3 py-2 border rounded text-gray-800 leading-normal
                                   text-sm border-gray-400 resize-none focus:outline-none focus:ring-2"
                      />
                    </div>
                  </div>

                  {success && (
                    <div className="mt-8 text-sm font-bold text-green-500 text-center">
                      Your form has been submitted, thank you for contacting us.
                    </div>
                  )}

                  {error && (
                    <div className="mt-8 text-sm font-bold text-red-600 text-center">
                      Form submission failed, please try again later.
                    </div>
                  )}
                </div>
                <div className="p-5 md:px-8 md:py-3 border-t flex items-center justify-center text-center">
                  {loading ? (
                    <button className="w-full shadow text-white font-bold rounded py-2 text-sm md:text-base
                                       bg-blue-500 transition focus:outline-none focus:ring-2 cursor-not-allowed"
                            disabled>
                      <FontAwesomeIcon icon={faSpinner} spin className="mr-3"/>
                      Sending...
                    </button>
                  ) : (
                    <button className="w-full shadow text-white font-bold rounded py-3 text-sm md:text-base
                                       bg-blue-500 hover:bg-blue-600 transition focus:outline-none focus:ring-2">
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-3"/>
                      Send
                    </button>
                  )}
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
      <FooterComponent/>
    </div>
  )
}