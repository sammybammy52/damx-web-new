import React from 'react'
import NavBar from '../../components/General/NavBar'
import Footer from '../../components/General/Footer'

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className={` bg-sorta-green flex justify-center items-center h-[83vh] max-md:h-[85vh]`}>
        <div className="text-center">
          <h1 className={` text-tetiary text-3xl mb-4`}>Get in touch</h1>

          <p className="text-white lg:px-32">
            Conversation is at the heart of what we do. Do you have a project in
            mind? or just want to say hello. Reach out to us at:{" "}
            <span className="text-tetiary text-xl">
              <a href="mailto:hello@damxstudio.com">hello@damxstudio.com</a>
            </span>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact