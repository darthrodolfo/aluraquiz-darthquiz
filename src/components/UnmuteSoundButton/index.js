// src/components/GitHubCorner/index.js
import React, { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width:80px;
  height:80px;
  bottom:0;
  border: 0;
  right: 0;
  z-index: 20;
  //transform: rotate(90deg);
  a {
    position:absolute;
    bottom: 0px;
    right: 0px;
    width:36px;
    height:36px;
    border: 0;
    z-index: 200;
  }
  i {
    //transform: rotate(90deg);
    color: black;
  }
  img {
    position:fixed;
    width:36px;
    height:36px;
    bottom: 12px;
    right: 12px;
    border: 0;
    z-index: 220;
    transform: rotate(-90deg);
    background-color: white;
  }

  svg {
    transform: rotate(90deg);
    position: fixed;
    right:0;
    bottom:0;
  }
`;

const SVGWrapper = styled.svg`
  fill: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  &:hover .octo-arm{
    animation:octocat-wave 560ms ease-in-out
  }
  @keyframes octocat-wave{
    0%,100%{transform:rotate(0)}
    20%,60%{transform:rotate(-25deg)}
    40%,80%{transform:rotate(10deg)}
  }
  @media (max-width:500px){
    &:hover .octo-arm{
      animation:none
    }
    & .octo-arm{
      animation:octocat-wave 560ms ease-in-out
    }
  }
`;

export default function UnmuteButtonCorner(videoReference) {
  return (
    <Wrapper>
      {/* <i class="fas fa-music" width='100px'></i> */}
        <a href="/" target="_blank" rel="noreferrer" onClick={(eventInfo) => {
          eventInfo.preventDefault();

          if(videoReference.videoReference == undefined || videoReference.videoReference.current == undefined)
          {
            return;
          };
          
          videoReference.videoReference.current.muted = !videoReference.videoReference.current.muted;
          console.log(videoReference.videoReference.current.muted);
        }}>
        <img src='/audioIcon.png'></img>
        </a>
          <SVGWrapper className="githubCorner" width="100" height="100" viewBox="0 0 250 250" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          </SVGWrapper>
    </Wrapper>
  );
}

//  videoReference.current.muted = 'false';