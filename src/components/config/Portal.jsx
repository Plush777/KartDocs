import React, { ReactElement, useEffect, useState } from "react";
import ReactDom, { createPortal } from "react-dom";

export default function Portal ({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === "undefined") return <></>;

  return mounted ? createPortal(children, document.getElementById("modalRoot")) : <></>;
};