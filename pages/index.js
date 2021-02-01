import React, { useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Link from '../src/components/Link';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import UnmuteButtonCorner from '../src/components/UnmuteSoundButton';


export default function Home() {
  const router = useRouter();
  const videoRef = useRef();
  const [name, setName] = React.useState('');


  return (
    <QuizBackground backgroundImage={db.bg} videoSrc='/DarthIntro_Trim.mp4' videoReference={videoRef}>
      <Head>
        <title>Darth Quiz - Star Wars</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
          <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
          <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          }}
          src='https://i.imgur.com/LKkWQJt.gif'/>
          <p>{db.description}</p>
            <form onSubmit={function (eventInfo) {
              eventInfo.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome!"
                value={name}
              />
               <Button type="submit" disabled={name.length === 0} text={name.length === 0 ? 'Começar' : `Vamos lá, ${name}!`}/>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/darthrodolfo/aluraquiz-darthquiz" />
      <UnmuteButtonCorner videoReference={videoRef}></UnmuteButtonCorner>
      </QuizBackground>
  );
}

// Input.defaultProps = {
//   value: '',
// };

// Input.propTypes = {
//   onChange: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string,
// };
