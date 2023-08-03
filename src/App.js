import { useEffect, useState } from "react";
import { PlatformContext } from "./PlatformContext";
import "./App.css";
import DesktopMenu from "./Page Elements/DesktopMenu";
import Page from "./Pages/Page";

function App() {
  const isMobileWidth = () => {
    return window.innerWidth <= 768;
  };

  const [isMobile, setIsMobile] = useState(isMobileWidth());

  const handleWindowSizeChange = () => {
    setIsMobile(isMobileWidth());
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // menu info
  const menuTitle = "Push";
  const menuItems = [
    {
      name: "Employees",
      link: "/employees",
    },
    {
      name: "Scheduler",
      link: "/scheduler",
    },
    {
      name: "Time Tracking",
      link: "/time-tracking",
    },
  ];
  const currentMenuIndex = 0;

  return (
    <div className="App">
      <div className="container">
        <PlatformContext.Provider value={isMobile}>
          <div className={isMobile ? "hide-menu" : "menu-desktop"}>
            <DesktopMenu
              menuItems={menuItems}
              menuTitle={menuTitle}
              currentMenuIndex={currentMenuIndex}
            />
          </div>
          <div className={isMobile ? "page-full-width" : "page-desktop"}>
            <Page title={menuItems[currentMenuIndex].name} />
          </div>
        </PlatformContext.Provider>
      </div>
    </div>
  );
}

export default App;
