import styled from 'styled-components';

const Widget = styled.div`
z-index:2;
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #242424b5;
  border-radius: 4px;
  overflow: hidden;
  @import url('https://fonts.googleapis.com/css2?family=Raleway&family=Roboto&display=swap');

  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 0;
  }
  h2 {
    font-weight: 400;
    line-height: 1;
		margin-bottom: 0;
  }
  h3 {
    line-height: 1;
		margin-bottom: 0;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1;
    margin-top: 20px;
		margin-bottom: 32px;
    line-height: 1.2;
  }
  hr {
    border-image: linear-gradient(to right, white, transparent, transparent) 0 1 100%;
  }
`;

Widget.Header = styled.header`
  display: flex;
  place-items: center;
  text-align: center;
  justify-content: flex-start;
  padding: 18px 32px;
  border-bottom: 2px solid white;
  //background-color: ${({ theme }) => theme.colors.primary};
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.7));
  //border-image: linear-gradient(to right, white, ${({ theme }) => theme.colors.primaryGradientEnd}) 0 1 100%;
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
  padding: 10px 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block; 

  transition: transform 100ms linear;
  
  text {
    opacity: 1;
  }
  font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1;

  & input {
		display: none;
	}

  &.active {
		background-image: linear-gradient(
			to right,
			yellow,
			pink
		);
	}
  &:hover,
  &:focus {
    box-shadow: 2px 2px 2px #222;
		transform: translate(-5px, -2px);
		background-image: linear-gradient(
			to right,
			red,
      red,
			white,
      white
		);
  }
`;

export default Widget;