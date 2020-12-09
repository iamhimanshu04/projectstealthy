import React from "react";
import { NavLink } from "react-bootstrap";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
      style={{cursor:'pointer'}}
    >
     
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
      
    </div>
  );
}

export default FAQ;
