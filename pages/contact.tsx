import React, { useState } from "react";
import { useRouter } from 'next/router';

function ContactForm({closeContact, submitContact}:any) {

    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();
    const isContactPage = router.pathname === '/contact';

  // Function to simulate form submission
  const handleSubmit = async () => {
    if(isContactPage) {
      const backendApi = process.env.NEXT_PUBLIC_BKND;
    if (!backendApi) {
      console.error("Backend API endpoint is not defined");
      return;
    }

    try {
      // Make a POST request to the backend API
      const response = await fetch(backendApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include other headers if needed
        },
        body: JSON.stringify({ contact: phoneNumber, type: 'general' }),
      });

      // Check if the request was successful
      if (response.ok) {
        const responseData = await response.json();
        // Handle the response data as needed
      } else {
        // Handle HTTP errors
        console.error("HTTP Error:", response.status, response.statusText);
      }
    } catch (error: any) {
      // Handle network errors or other exceptions
      console.error("Fetching error:", error.message);
    }
    }
    else {
      submitContact(phoneNumber);
    }
  };

  const handleInputChange = (event:any) => {
    setPhoneNumber(event.target.value);
  };


  return (
    <>
      <div
        className="shadow-xl 
                   bg-gradient-to-r 
                   from-green-100 
                   via-blue-100 
                   to-cyan-100 
                   fixed
                   w-full
                   h-full
                   border-gray-600
                   border-2
                   md:w-1/2
                   md:max-w-300px
                   md:h-64"
        style={{
          top: "50%",
          left: "50%",
          zIndex: 999,
          borderRadius: "5px",
          padding: "20px",
          animation: "slideIn 0.5s forwards",
          transform: "translate(-50%, -50%)",
        }}
      >
        {!isContactPage && <div
            className="cursor-pointer 
                       px-3 
                       py-1 
                       text-sm 
                       text-white 
                       bg-red-500 
                       hover:bg-red-600 
                       rounded-full 
                       flex 
                       items-center 
                       h-10 
                       w-10 
                       justify-center 
                       absolute 
                       right-0 
                       top-0 
                       mt-5
                       mr-5
                       md:-mt-5 
                       md:-mr-5 
                       shadow-lg" 
            onClick={() => closeContact(false)}>
            X
        </div>}

        <div className="md:mt-6 mt-20">
          <img
            src="/logo.svg"
            alt="Logo"
            className="mx-auto w-1/2 md:w-40"
          />
        </div>
        <div className="md:mb-10 md:mt-10 md:px-10">
          <form onSubmit={handleSubmit}>
            <div className="md:flex w-full items-center justify-center">
              <input
                 type="tel"
                 placeholder="Enter your phone number"
                 pattern="^\+?[1-9]\d{1,14}$"
                 title="Enter valid contact number."
                 className="md:mr-4
                            my-10
                            w-full 
                            md:h-10 
                            md:flex-1 
                            rounded-lg 
                            border-2 
                            border-gray-300 
                            bg-white 
                            p-5
                            md:px-5 
                            md:pr-16 
                            text-sm 
                            focus:border-blue-400 
                            focus:outline-none"
                 required
                 value={phoneNumber} // Bind input value to state
                 onChange={handleInputChange} // Update state on input change
              />

              <button
                type="submit"
                className="rounded-lg 
                          w-full
                          md:w-auto
                        bg-blue-500 
                          p-4
                          md:px-4 
                          md:py-2 
                          text-white 
                          hover:bg-blue-700 
                          focus:outline-none 
                          focus:ring-2 
                          focus:ring-blue-400 
                          focus:ring-opacity-75"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-xs m-5 font-bold text-center">We'll contact you shortly.</div>
        </div>
      </div>
      <style>
        {`
          @keyframes slideIn {
            from {
              bottom: -100%;
            }
            to {
              bottom: 0;
            }
          }
        `}
      </style>
    </>
  );
}

export default ContactForm;
