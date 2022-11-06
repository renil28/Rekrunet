import React from "react";
import questions from "../context/Faq"
import Banner from "../components/Banner";

const Help = () => {
  return (
    <Banner>
      <Banner.Header>Frequently Asked Questions</Banner.Header>
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answer}</Banner.Text>
        </Banner.Entity>
      ))}
      <h4>
        Question not on the list? Contact out help desk for further enquiries
      </h4>
    </Banner>
  );
}

export default Help

