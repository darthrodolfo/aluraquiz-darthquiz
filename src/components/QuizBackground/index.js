// src/components/QuizBackground/index.js
import styled from 'styled-components';
import React from 'react';

const QuizBackgroundBase = styled.div`
  //background-image: url(${({ backgroundImage }) => backgroundImage});
  //console.log(backgroundImage);
  //background-image: url('https://j.gifs.com/lxJVMV.gif');
  //background-image: ${({ test }) => test};
  //background-image: url('/backgif.gif');
  //background-color: ${({ theme }) => theme.colors.mainBg};
  
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

const QuizBackgroundVideo = styled.video`
    min-height: 100%;
    min-width: 100%;
    z-index:-1000;
    position:fixed;
    background-size: cover;
    height: auto;
    width:auto;
    opacity:1;
    object-fit: cover;
    left:0;
    //background: url(images/torre.jpg) no-repeat;
    //background: url(${({ backgroundImage }) => backgroundImage}) no-repeat;
`;

//export default QuizBackground;

export default function QuizBackground({videoSrc, videoReference, ...props}) {
  return(
    <div>
        <QuizBackgroundVideo width='100%' ref={videoReference} autoPlay muted loop {...props}>
          <source src={videoSrc} type="video/mp4"/>
        </QuizBackgroundVideo>
      <QuizBackgroundBase videoReference {...props}/>
    </div>
  );
}

{/* <div>
        <video width='100%' autoPlay muted>
          <source src="/Star Wars The Last Jedi  Lightspeed Scene 4K (Holdo's Sacrifice).mp4" type="video/mp4"/>
        </video>
      </div> */}


{/* <video width='100%' autoPlay muted>
      <source src="/Star Wars The Last Jedi  Lightspeed Scene 4K (Holdo's Sacrifice).mp4" type="video/mp4"/>
    </video> */}