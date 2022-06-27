import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import background from "../../assets/img/Group4.png"
import logo from "../../assets/img/Lol-logo.png"

export function Home(){
const navigate = useNavigate()

  return(
    <Container style={{backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundImage:`url(${background})`}}>
      <div style={{display:'flex',flexDirection:'column', gap:15}}>
        <TitleText>Graphs Dominating League</TitleText>

        <MainText>Graphs Dominating League é uma aplicação viva de conceitos de grafos destinado a ajudar jogadores, desde iniciantes a profissionais, a montar o melhor time possível contra seus adversários. Selecionando um campeão que deseja derrotar, utilizamos boas bases de dados para analisar e apresentar quais personagens possuem vantagens sobre o campeão e devem ser considerados como escolha e quais perdem para o campeão, devendo ser evitados ao máximo.</MainText>
      </div>
    
      <StartButton onClick={() => navigate("/chooseChampion")}>Iniciar</StartButton>

      <LogoImg src={logo} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 50px;
  justify-content: space-between;
`

const TitleText = styled.text`
  font-family: 'Fredericka the Great';
  font-size: 50px;
  width: 60%;
  color: #C7971A;
`

const StartButton = styled.button`
  border:0;
  border-radius: 12px;
  height: 45px;
  width: 180px;
  background-color: #141351;
  border: 2px solid #C7971A;
  margin-left: 200px;
  cursor: pointer;

  font-size: 20px;
  font-family: 'Fredericka the Great';
  color: #C7971A;
`

const MainText = styled.text`
  font-size: 20px;
  width: 60%;
  color: #C7971A;
`

const LogoImg = styled.img`
  width: 120px;
  height: auto;
`