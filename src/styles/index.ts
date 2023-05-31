import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  color: ${variables.textColor};
}`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const MainContainer = styled.main`
  padding: 1rem 6rem 1rem 1rem;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${variables.backgroundColor};

  @media (max-width: 768px) {
    text-align: center;
    padding: 1rem;
  }
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${variables.buttonColor};
  color: ${variables.lightTextColor};
`

export const ButtonCancel = styled(Button)`
  background-color: ${variables.buttonColorCancel};
`

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
`

export default GlobalStyle
