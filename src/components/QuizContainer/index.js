import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 50px;
  text-align: center;
  margin: auto 10%;
  padding-top: 5%;
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