import styled from 'styled-components';

const QuizContainer = styled.div`
z-index: 2;
  width: 100%;
  max-width: 550px;
  padding-top: 20px;
  margin: auto 10%;
  //padding-top: 5%;
  
  h1 {
    text-align: center;
  }
  form {
    display:flex;
    flex-flow: column nowrap
  }
   form input {
    padding:10px;
    color: #FFFFFF;
    background:transparent;
    border-bottom: 3px solid;
    border-image: linear-gradient(to left, white, red) 0 1 100%;
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
  }

  .quizFinalScreen {
    padding-top: 5%;
    color: #000000;
  }
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 20px;
  }
`

export default QuizContainer;