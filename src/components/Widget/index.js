import styled from 'styled-components';

const Widget = styled.div`
z-index:2;
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
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
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1;
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
  background-image: linear-gradient(to right, ${({ theme }) => theme.colors.primaryGradientStart}, ${({ theme }) => theme.colors.primaryGradientEnd});
  border-image: linear-gradient(to right, white, ${({ theme }) => theme.colors.primaryGradientEnd}) 0 1 100%;
  
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
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;