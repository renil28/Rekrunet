
import React from 'react'; 
import {useState} from 'react';
import styled from "styled-components/macro";

//Styling the Question and Answers
export const Container = styled.div`
  border-bottom: 9px solid #070707;
  display: flex;
`;
export const Entity = styled.div`
  color: #070707;
  border: 1px solid #070707;
  max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 75px 40px;
  color: #070707;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: #7b96ec;
  padding: 0.75em 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 16px;
  color: #131225;
  font-weight: 500;
  line-height: normal;
  background: #a7bcff;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #070707;
  line-height: 7;
  margin-top: 0 !important;
  font-size: 45px;
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 33px;
  }

  color: #070707;
`;

const QuestionContext = React.createContext();
export default function Banner({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Banner.Header = function BannerHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};
Banner.Entity = function BannerEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};
Banner.Question = function BannerHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <h3>^</h3> : <h3>+</h3>}
    </Question>
  );
};
Banner.Text = function BannerText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);

  return open ? <Text {...restProps}>{children}</Text> : null;
};