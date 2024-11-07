import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px auto;
  padding: 10px;
  background: #171923;
  width: 90%;
  border-radius: 5px;
  border: 2px solid #533693;

form{
display:flex;
align-items:center;
justify-content: center;
gap: 1em;
width: 100%;
::placeholder {
    opacity: 0.5; /* Define a transparência do placeholder para 50% */
    padding-left:0.5em;
  }
}
`;

export const RadioGroup = styled.div`
display: flex;
align-itens:center;
color:#fff;
gap:0.5em;
`;
