import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Portal = (props) => {
  const [mounted, setMounted] = useState(false);

  const { children } = props;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`${poppins.variable} font-poppins`}>{children}</div>,
    document.getElementById("navigation")
  );
};

export default Portal;
