import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Lottie from "lottie-react";
import animationData from "../styles/assets/Animation - 1705591725824.json"; // Adjust the path to your JSON file

export default function Home() {
  const options = {
    loop: true,
    autoplay: true,
    speed: 0.25,
    animationData: animationData,
  };

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

  // ============== Template ============================ //
  return (
    <main
      className={`${styles.scrollContainer} h-screen overflow-y-scroll snap-y snap-mandatory`}
    >
      {/* screen 1 */}
      <div
        className={`${styles.screen} ${styles.screen1} flex flex-col md:flex-row items-center justify-between snap-start p-4 md:p-16`}
      >
        {/* Logo on the left for desktop, top for mobile */}
        <div className="w-full md:w-auto md:flex-1 text-3xl font-bold text-center md:text-left md:px-10">
          logo
        </div>

        {/* Animation on the right for desktop, bottom for mobile */}
        <div className="w-full md:w-auto md:flex-1 md:px-10">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ height: "100%" }}
          />
        </div>
      </div>

      {/* screen 2 */}
      <div className={`${styles.screen} ${styles.screen2} snap-start`}>
        <div className="text-xl font-semibold">text</div>
        <div className="gallery">gallery</div>
      </div>

      {/* screen 3 */}
      <div className={`${styles.screen} ${styles.screen3} snap-start`}>
        <div className="lt">lt</div>
        <div className="gallery">Gallery</div>
        <div className="rb">rb</div>
      </div>

      {/* screen 4 */}
      <div className={`${styles.screen} ${styles.screen4} snap-start`}>
        <div className="form-link">form link</div>
      </div>
    </main>
  );
}
