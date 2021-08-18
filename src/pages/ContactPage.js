import PageMetaComponent from "../components/PageMetaComponent";
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

  const handleSubmit = useCallback((event) => {
    event.preventDefault()
    resetStatus()
    setLoading(true)
    const messageWithBreaks = message.replace(/(?:\r\n|\r|\n)/g, "<br />")

    console.debug(messageWithBreaks)
    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify({
        "fullname": fullName,
        "email": email,
        "message": messageWithBreaks
      })
    }).then(response => {
      console.debug(response)

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
  }, [resetStatus, resetFields, fullName, email, message])

  return (
    <div className="flex flex-col justify-between" style={{minHeight: "100vh"}}>
      <PageMetaComponent title="Contact"/>
      <div className="flex flex-col items-center justify-center">
        <div className="container max-w-7xl leading-loose px-3">
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
                  name="contact"
                  method="post"
                  onSubmit={handleSubmit}
                  className="bg-white border-l border-r border-b rounded-b"
                >
                  <div className="p-5 md:px-8 md:py-5 flex flex-col">
                    <input type="hidden" name="form-name" value="contact"/>

                    <label
                      htmlFor="fullname"
                      className="text-gray-900 font-bold cursor-pointer mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      required
                      disabled={loading}
                      value={fullName || ""}
                      onChange={handleFullNameChange}
                      onFocus={resetStatus}
                      className="px-2 py-1 border rounded text-gray-800 mb-8
                      border-gray-400 focus:outline-none focus:ring-2"
                    />
                    <label
                      htmlFor="email"
                      className="text-gray-900 font-bold cursor-pointer mb-1"
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
                      className="px-2 py-1 border rounded text-gray-800 mb-8
                      border-gray-400 focus:outline-none focus:ring-2"
                    />
                    <label
                      htmlFor="message"
                      className="text-gray-900 font-bold cursor-pointer mb-1"
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
                      className="px-2 py-1 border rounded text-gray-800 leading-normal
                      border-gray-400 resize-none focus:outline-none focus:ring-2"
                    />

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
                  <div className="p-5 md:px-8 md:py-3 bg-white border-t flex items-center justify-center text-center">
                    {loading ? (
                      <button className="w-full shadow text-white font-bold rounded py-2
                    bg-blue-500 transition focus:outline-none focus:ring-2 cursor-not-allowed" disabled>
                        <FontAwesomeIcon icon={faSpinner} spin className="mr-3"/>
                        Sending...
                      </button>
                    ) : (
                      <button className="w-full shadow text-white font-bold rounded py-2
                    bg-blue-500 hover:bg-blue-600 transition focus:outline-none focus:ring-2">
                        <FontAwesomeIcon icon={faPaperPlane} className="mr-3"/>
                        Send
                      </button>
                    )}
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