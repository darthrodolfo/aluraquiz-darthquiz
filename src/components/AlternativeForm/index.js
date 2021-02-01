import styled from 'styled-components';

const AlternativeForm = styled.form`
  label {
    &[data-selected="true"] {
      background-image: linear-gradient(
			to right,
			red,
			white,
      white
		);
      
      &[data-status="SUCCESS"] {
        background-image: linear-gradient(
			to right,
			green,
			green,
      white
		);
      }
      &[data-status="ERROR"] {
        background-image: linear-gradient(
			to right,
			darkred,
			darkred,
      red
		);
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativeForm;