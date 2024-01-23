import React, { useEffect } from "react";
import styles from "./Home.module.css";
// In your component or App's main entry file (e.g., index.js or App.js)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  useEffect(() => {
    const container = document.querySelector(`.${styles.scrollContainer}`);

    if (container) {
      let lastScrollTop = 0;

      const snapScroll = (event: any) => {
        const currentScrollTop = container.scrollTop;
        const screenHeight = window.innerHeight;
        const delta = currentScrollTop - lastScrollTop;
        const totalScreens = container.children.length;
        let targetScreenIndex;

        if (delta > 0) {
          // Scrolling down
          targetScreenIndex = Math.floor(
            (currentScrollTop + screenHeight) / screenHeight
          );
        } else {
          // Scrolling up
          targetScreenIndex = Math.floor(currentScrollTop / screenHeight);
        }

        // Clamp targetScreenIndex between 0 and totalScreens - 1
        targetScreenIndex = Math.max(
          0,
          Math.min(targetScreenIndex, totalScreens - 1)
        );

        container.scrollTo({
          top: screenHeight * targetScreenIndex,
          behavior: "smooth",
        });

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
      };

      container.addEventListener("wheel", snapScroll);

      return () => container.removeEventListener("wheel", snapScroll);
    }
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Default value, adjust as needed
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true, // Adjust based on your design preference
    centerPadding: "50px", // Default padding, adjust as needed
    responsive: [
      {
        breakpoint: 480, // Mobile devices
        settings: {
          slidesToShow: Math.floor(480 / 250), // Adjust based on card width
          centerPadding: "20px", // Reduced padding for mobile
          dots: false, // Optionally hide dots on mobile
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: Math.floor(768 / 250), // Adjust based on card width
        },
      },
      {
        breakpoint: 1024, // Smaller desktops
        settings: {
          slidesToShow: Math.floor(1024 / 250), // Calculate based on 1024px viewport
        },
      },
      {
        breakpoint: 1200, // Larger desktops
        settings: {
          slidesToShow: Math.floor(1200 / 250), // Calculate based on 1200px viewport
        },
      },
      {
        breakpoint: 1440, // Large screens
        settings: {
          slidesToShow: Math.floor(1440 / 250), // Calculate based on 1440px viewport
        },
      },
      // Add more breakpoints if needed
    ],
  };

  const imageNumbers = Array.from({ length: 44 }, (_, i) => i + 1);

  // ============== Template ============================ //
  return (
    <main
      className={`${styles.scrollContainer} 
                      h-screen 
                      overflow-y-scroll 
                      snap-y 
                      snap-mandatory`}
    >
      {/* screen 1 */}
      <div
        className={`${styles.screen} 
                       ${styles.screen1} 
                       flex flex-col md:flex-row 
                       items-center 
                       justify-end 
                       relative
                       md:justify-center
                       snap-start`}
      >
        <div className="absolute top-0 left-0 w-full md:w-1/3 opacity-50 z-10">
          <img
            src="/screen1-cover.svg"
            alt="cover"
            className="h-auto my-auto w-full"
          />
        </div>
        {/* Logo on the left for desktop, top for mobile */}
        <div
          className="flex flex-col 
                        items-center 
                        justify-center 
                        p-4 md:p-10 
                        w-full md:w-auto 
                        md:flex-1 
                        relative
                        z-20 
                        mb-28
                        md:mb-0"
        >
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-1/2 md:w-64 h-auto my-auto"
          />
          <div className="text-center p-6">
            <p
              className="text-xl mb-4 mx-auto hidden md:block"
              style={{ maxWidth: "600px", color: "#503D33" }}
            >
              Crafting interiors that tell your story.
            </p>
            <p
              className="text-base mb-6 mx-auto hidden md:block"
              style={{ maxWidth: "600px", color: "#503D33" }}
            >
              Studio 1925 is where your vision of home comes to life. Our
              designs blend timeless elegance with modern comfort, tailored to
              your unique style. Ready to transform your space? Let's connect
              and start the journey.
            </p>
            <button className="fixed top-0 right-0 m-4 md:relative md:m-auto bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
              Contact Us
            </button>
          </div>
        </div>

        {/* Animation on the right for desktop, bottom for mobile */}
        <div className="w-full md:w-auto md:flex-1 overflow-hidden h-58 md:h-auto">
          <video
            loop
            autoPlay
            muted
            playsInline
            style={{
              objectFit: "cover",
              width: "calc(100% + 2px)", // Extend the width slightly; you can adjust the value if needed
              height: "calc(100% + 2px)", // Extend the height slightly; you can adjust the value if needed
              transform: "scale(1.02)", // Scale the video up to 102%
            }}
          >
            <source src="/videos/final_cycels_mp4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* screen 2 */}
      <div className={`${styles.screen} ${styles.screen2} snap-start relative`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/screen2-cover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text on top 25% */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-4 md:p-8 text-white text-center w-full md:w-auto">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Design that Speaks
          </h2>
          <p className="text-base md:text-lg">
            Each space we design has its own narrative, a story that's told
            through the harmonious language of design and architecture. Witness
            the metamorphosis of your environment with Studio 1925.
          </p>
        </div>

        {/* Gallery Carousel taking bottom 60% */}
        <div className="w-full bg-black bg-opacity-25 absolute bottom-0 mb-20 px-4 pb-4 md:px-8 md:pb-8 overflow-hidden z-10">
          <h1 className="text-xl md:text-3xl font-bold mb-4 text-white">
            Gallery:{" "}
          </h1>
          <Slider {...carouselSettings}>
            {imageNumbers.map((num) => (
              <div key={num} className="p-2">
                <div
                  className="bg-white rounded shadow-lg flex items-center justify-center p-2"
                  style={{ height: "250px", width: "200px" }}
                >
                  <img
                    src={`/images/Hero${num}.jpg`}
                    alt={`Gallery Image ${num}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* screen 3 */}
      <div
        className={`${styles.screen} 
                       snap-start 
                       flex flex-col 
                       md:flex-row 
                       items-center 
                       md:justify-end relative`}
      >
        {/* Fullscreen background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/Hero3.jpg"
            alt="Interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:p-8 p-4 w-full flex flex-col items-center justify-center">
          <div className="mt-20 md:mt-0 bg-teal-900 bg-opacity-90 rounded-2xl w-full md:max-w-4xl p-5 md:p-10">
            {/* Title */}
            <h2 className="text-xl md:text-4xl font-semibold text-center text-teal-100 mb-4 md:mb-6">
              Solid and usable solutions for home interiors
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {/* Div 1 */}
              <div className="bg-teal-300 w-full md:h-52 bg-opacity-90 shadow rounded-lg p-4 md:p-12 flex flex-col justify-start">
                <h3 className="text-xl md:text-4xl font-bold mb-2 text-gray-800">
                  Design Consultation
                </h3>
                <p className="font-semibold md:text-sm opacity-50 text-gray-700 text-xs">
                  Our expert will speak to you to understand your vision for
                  your home.
                </p>
              </div>

              {/* Div 2 */}
              <div className="bg-teal-300 w-full md:h-52 bg-opacity-90 shadow rounded-lg p-4 md:p-12 flex flex-col justify-start">
                <h3 className="text-xl md:text-4xl font-bold mb-2 text-gray-800">
                  3D Modeling
                </h3>
                <p className="font-semibold md:text-sm opacity-50 text-gray-700 text-xs">
                  Translate your vision and our design ideas into 3D design
                  layout.
                </p>
              </div>

              {/* Div 3 */}
              <div className="bg-teal-300 w-full md:h-52 bg-opacity-90 shadow rounded-lg p-4 md:p-12 flex flex-col justify-start">
                <h3 className="text-xl md:text-4xl font-bold mb-2 text-gray-800">
                  Material Selection
                </h3>
                <p className="font-semibold md:text-sm opacity-50 text-gray-700 text-xs">
                  Choose your material at your doorstep or online to finalise 3D
                  modelling.
                </p>
              </div>

              {/* Div 4 */}
              <div className="bg-teal-300 w-full md:h-52 bg-opacity-90 shadow rounded-lg p-4 md:p-12 flex flex-col justify-start">
                <h3 className="text-xl md:text-4xl font-bold mb-2 text-gray-800">
                  Execution
                </h3>
                <p className="font-semibold md:text-sm opacity-50 text-gray-700 text-xs">
                  Our Professional Execution Team then seamlessly bring the
                  design to reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* screen 4 plans */}
      <div
        className={`${styles.screen} snap-start p-4 bg-gradient-to-r from-green-100 via-blue-100 to-cyan-100`}
      >
        <h2 className="text-lg mt-16 text-left font-semibold mb-4">
          Select Your Interior Design Plan
        </h2>

        <div className="text-xs pb-1 pl-3 font-semibold opacity-75">✓ Commercial Grade Ply or equivalent </div>
        <div className="text-xs pb-1 pl-3 font-semibold opacity-75">✓ Merino Laminates or equivalent</div>
        <div className="text-xs pb-1 mb-4 pl-3 font-semibold opacity-75">✓ Kitchen with water proof ply or equivalent</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Plan 1 */}
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between m-2">
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">2</div>{" "}
                <div className="text-xs p-2">BHK</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">1</div>{" "}
                <div className="text-xs p-2">Modular Kitchen</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">2</div>{" "}
                <div className="text-xs p-2">Wardrobes</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">1</div>{" "}
                <div className="text-xs p-2">TV Unit</div>
              </div>
            </div>
            <div className="bg-gradient-to-r font-semibold from-green-100 p-3 rounded-lg text-center text-md to-cyan-100 via-blue-100">
              Rs. 3.99L
            </div>
          </div>

          {/* Plan 2 */}
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between m-2">
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">3</div>{" "}
                <div className="text-xs p-2">BHK</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">1</div>{" "}
                <div className="text-xs p-2">Modular Kitchen</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">3</div>{" "}
                <div className="text-xs p-2">Wardrobes</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">1</div>{" "}
                <div className="text-xs p-2">TV Unit</div>
              </div>
            </div>
            <div className="bg-gradient-to-r font-semibold from-green-100 p-3 rounded-lg text-center text-md to-cyan-100 via-blue-100">
              Rs. 6.99L
            </div>
          </div>

          {/* Plan 3 */}
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between m-2">
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">4</div>{" "}
                <div className="text-xs p-2">BHK</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">1</div>{" "}
                <div className="text-xs p-2">Modular Kitchen</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2 border-r-slate-300">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">4</div>{" "}
                <div className="text-xs p-2">Wardrobes</div>
              </div>
              <div className="text-center text-xs pr-2 pl-2">
                <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">1</div>{" "}
                <div className="text-xs p-2">TV Unit</div>
              </div>
            </div>
            <div className="bg-gradient-to-r font-semibold from-green-100 p-3 rounded-lg text-center text-md to-cyan-100 via-blue-100">
              Rs. 11.99L
            </div>
          </div>
        </div>
      </div>

      {/* screen 4 contact us */}
      <div className={`${styles.screen} ${styles.screen4} snap-start`}>
        <div className="form-link">contacts</div>
      </div>
    </main>
  );
}