import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

interface CommonProps {
  children: React.ReactNode;
}

function Common({ children }: CommonProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Common;
