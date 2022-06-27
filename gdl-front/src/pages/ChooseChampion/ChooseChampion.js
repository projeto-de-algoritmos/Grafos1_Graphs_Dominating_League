import styled from "styled-components"
import background from "../../assets/img/Group4.png"
import logo from "../../assets/img/Lol-logo.png"
import { useNavigate } from "react-router-dom"

export function ChooseChampion(){
const navigate = useNavigate()

  return(
    <Container style={{backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundImage:`url(${background})`}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <TitleText>Graphs Dominating League</TitleText>

        <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
      </div>
    
      <SelectButton>Selecionar Campeão</SelectButton>

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

const TitleText = styled.text`
  font-family: 'Fredericka the Great';
  font-size: 50px;
  width: 60%;
  color: #C7971A;
`

const SelectButton = styled.button`
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

const LogoImg = styled.img`
  width: 120px;
  height: auto;
`