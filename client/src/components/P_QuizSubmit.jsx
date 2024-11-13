import React, { useEffect } from "react";
import '../index.css';
import P_Navbar from "./P_Navbar";

const P_QuizSubmit = () => {
  useEffect(() => {
    document.title = "Trivia Taps - Participant Quiz Submit";
  }, []);

  return (
    <div className="shared-screen">
      <h1>Participant - Quiz Submit</h1>
    </div>
  );
};

export default P_QuizSubmit;
