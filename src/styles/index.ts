import styled, { createGlobalStyle } from 'styled-components'
// import variables from './variables'

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem auto;
  column-gap: 2rem;
`

export const MainContainer = styled.main`
  padding: 1rem 6rem 1rem 0;
  height: 100vh;
  overflow-y: scroll;
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
`

export default GlobalStyle
