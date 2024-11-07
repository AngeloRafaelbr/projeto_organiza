import React, {useEffect, useState} from "react";
import { Container } from "./styles";
import Resumo from "../components/Resumo";
import InputForm from "../components/InputForm";
import Grid from "../components/Grid";

function Home(){

    const [dadosFin, setDadosFin] = useState(JSON.parse(localStorage.getItem('Financeiro')) ?? []);
    const [saldo, setSaldo] = useState(0);
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    const [atualizaGrid,setAtualizaGrid] = useState(false);

    useEffect(() =>{
        const totalSaida= dadosFin.filter((item)=> item.tipo ===1).map((transaction) => Number(transaction.valor));
        const totalEntrada= dadosFin.filter((item)=> item.tipo ===0).map((transaction) => Number(transaction.valor));

        const Entradas = totalEntrada.reduce((acc, cur)=> acc + cur, 0).toFixed(2);
        const Saidas = totalSaida.reduce((acc, cur)=> acc + cur, 0).toFixed(2);

        const saldoTotal = Entradas - Saidas

        setSaldo(saldoTotal);
        setEntrada(Entradas);
        setSaida(Saidas);
    }, [atualizaGrid])

    function handleSave(dados){
        const data = [...dadosFin, dados];
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        localStorage.setItem('Financeiro', JSON.stringify(data));
    }

    function onDelete(index){
        const data = dadosFin;
        data.splice(index,1);
        setDadosFin(data);
        setAtualizaGrid(!atualizaGrid);
        localStorage.setItem('Financeiro', JSON.stringify(data));
    }

return(
    <Container>
        <Resumo saldo={saldo} entrada={entrada} saida={saida}/>
        <InputForm handleSave={handleSave}/>
        <Grid dadosFin={dadosFin} onDelete={onDelete}/>
    </Container>
)

}

export default Home;