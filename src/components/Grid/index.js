import React from 'react';
import { MdDelete, MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";
import { format, parse, isValid } from 'date-fns';
import { Table, Th, Td } from './styles';

function Grid({ dadosFin, onDelete }) {
  const formatarData = (data) => {
    const dataParseada = parse(data, 'dd/MM/yyyy', new Date()); // Converte a data diretamente do formato dd/MM/yyyy
    if (isValid(dataParseada)) {
      return format(dataParseada, 'dd/MM/yyyy'); // Retorna no mesmo formato
    }
    return "Data inválida"; // Retorna uma string padrão caso a data seja inválida
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th width={40}>Data</Th>
          <Th width={40}>Descrição</Th>
          <Th width={40}>Valor</Th>
          <Th width={40} alignCenter>Tipo</Th>
          <Th width={10}></Th>
        </tr>
      </thead>

      <tbody>
        {dadosFin?.map((dadosFin, index) => {
          return (
            <tr key={index}>
              <Td>{formatarData(dadosFin.data)}</Td> {/* Usando a função de formatação */}
              <Td>{dadosFin.descricao}</Td>
              <Td>R${Math.abs(dadosFin.valor).toFixed(2)}</Td>
              <Td alignCenter>
                {dadosFin.tipo === 1 ? (
                  <MdArrowCircleDown color="red" />
                ) : (
                  <MdArrowCircleUp color="green" />
                )}
              </Td>
              <Td alignCenter>
                <MdDelete onClick={() => onDelete(index)} />
              </Td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Grid;
