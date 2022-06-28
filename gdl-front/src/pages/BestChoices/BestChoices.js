import styled from "styled-components"
import background from "../../assets/img/Group4.png"
import logo from "../../assets/img/Lol-logo.png"
import { useNavigate } from "react-router-dom"
import {useState, useEffect} from 'react'

export function BestChoices(){
  const [data, setData] = useState()
  const navigate = useNavigate()

  useEffect(()=>{

  },[])
  
  return(
    <Container style={{backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundImage:`url(${background})`}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <MainTitleText>Graphs Dominating League</MainTitleText>

        <BackButton onClick={() => navigate("/")}>Reiniciar</BackButton>
      </div>

      <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <ChampTitleText>Campeão Inimigo</ChampTitleText>

        <BlueCaixaButton>Campeão</BlueCaixaButton>
      </div>

      <div style={{display:'flex',marginTop:50, alignItems:'center', flexDirection:'column'}}>
        <ChampTitleText>Campeão Escolhido</ChampTitleText>

        <RedCaixaButton>Campeão</RedCaixaButton>
      </div>

      <div style={{display:'flex',marginTop:50, alignItems:'center', flexDirection:'column'}}>
        <ChampTitleText>Equipe Proposta</ChampTitleText>

        <div style={{display:'flex',marginTop:50, alignItems:'center', gap:13}}>
          <RedCaixaButton>Campeão</RedCaixaButton>
          <RedCaixaButton>Campeão</RedCaixaButton>
          <RedCaixaButton>Campeão</RedCaixaButton>
          <RedCaixaButton>Campeão</RedCaixaButton>
        </div>
      </div>

      <LogoImg src={logo} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 10px 40px;
  justify-content: space-between;
`

const MainTitleText = styled.text`
  font-family: 'Fredericka the Great';
  font-size: 50px;
  width: 60%;
  color: #C7971A;
`
const ChampTitleText = styled.text`
  height: 25px;
  font-family: 'Fredericka the Great';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #C7971A;
  vertical-align: 'middle';
`

const BackButton = styled.button`
  border:0;
  border-radius: 12px;
  width: fit-content;
  background-color: #141351;
  border: 2px solid #C7971A;
  align-self: center;
  cursor: pointer;
  padding: 10px 15px;

  font-size: 20px;
  font-family: 'Fredericka the Great';
  color: #C7971A;
`

const RedCaixaButton = styled.div`
  width: 201px;
  height: 84px;
  background: rgba(81, 19, 19, 0.79);
  border-radius: 10px;
  border:0;
  padding: 10px 15px;
  font-family: 'Glegoo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #C7971A;
`
const BlueCaixaButton = styled.button`
  width: 201px;
  height: 84px;
  background: rgba(20, 19, 81, 0.79);
  border-radius: 10px;
  border:0;
  padding: 10px 15px;

  font-family: 'Glegoo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #C7971A;
`

const LogoImg = styled.img`
  width: 120px;
  height: auto;
`