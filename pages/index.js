import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'


const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 50px;
  margin: auto 10%;
  form {
    display:flex;
    flex-flow: column nowrap
  }
  form input {
    padding:10px;
    border-radius:${({ theme }) => theme.borderRadius};
    border:solid 1px ${({ theme }) => theme.colors.secondary};
    color: #FFFFFF;
    background:transparent
  }
  form input:focus{
    outline:0
  }
  form button {
    padding:10px;
    border-radius:${({ theme }) => theme.borderRadius};
    border:none;
    color:${({ theme }) => theme.colors.contrastText};
    margin-top:10px;
    background:${({ theme }) => theme.colors.button};
    font-size: larger;
  }
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 20px;
  }
`

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Darth Quiz - Star Wars</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz de Star Wars</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (eventInfo) {
              eventInfo.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (eventInfo) {
                  setName(eventInfo.target.value);
                }}
                placeholder="Qual é seu nome?"
              />
               <button type='submit' disabled={name.length === 0}>{name.length === 0 ? 'Jogar' : 'Vamos la ' + name}</button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/darthrodolfo/aluraquiz-darthquiz" />
      </QuizBackground>
  );
}
