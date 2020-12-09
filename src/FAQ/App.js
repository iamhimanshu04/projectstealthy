import React, { useState } from "react";
import Header from "./Header";
import '../FAQ/App.css';
import '../FAQ/index1.css'
import Faq from "./Faq";

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: "How is data validated ?",
      answer:
        "This project works on OSINT model which is actually collecting data open freely available.",
      open: false,
    },
    {
      question: "Is the Data Secure ?",
      answer:
        "Yes. Since we understand that our website requests may contain sensitive data, we don't share data with anyone.",
      open: false,
    },
    {
      question: "What are the fields we currently work on ?",
      answer:
        "The tool mainly focuses on three key fields for threat detection, i.e. Email Address, IP Address, Phone Number",
      open: false,
    },
    {
      question: "What is the cost of the tool ?",
      answer:
        "Currently we are working the project at free of cost, So kindly dont worry about that and enjoy. **",
      open: false,
    },
    {
      question: "What is OSINT ?",
      answer:
        "Open-source intelligence is a multi-methods methodology for collecting, analyzing and making decisions about data accessible in publicly available sources to be used in an intelligence context",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
