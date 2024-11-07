import React, { useState } from 'react';
import ResumoItens from '../ResumoItens';
import { Container, RadioGroup } from './styles';

function InputForm({ handleSave }) {
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState(0);

  function Salvar(event) {
    event.preventDefault();

    if (!descricao || !data || valor <= 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const dadosFinanceiro = {
      data,
      descricao,
      valor,
      tipo,
    };

    handleSave(dadosFinanceiro);
    event.target.reset();
    
  }

  return (
    <Container>
      <form onSubmit={Salvar}>
        <input
          type="text"
          placeholder="Informe a data (Ex. 02/05/2023)"
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type="text"
          placeholder="Informe a descrição"
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Informe o valor"
          onChange={(e) => setValor(Number(e.target.value))}
        />

        <RadioGroup>
          <input
            type="radio"
            id="rblEntrada"
            defaultChecked
            name="group1"
            onChange={() => setTipo(0)}
          />
          <label htmlFor="rblEntrada">Entrada</label>

          <input
            type="radio"
            id="rblSaida"
            name="group1"
            onChange={() => setTipo(1)}
          />
          <label htmlFor="rblSaida">Saída</label>
        </RadioGroup>

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
}

export default InputForm;
