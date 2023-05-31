import styled from 'styled-components'

type Props = {
  open: boolean
}

export const SideBarContainer = styled.div`
  padding: 1rem 1rem 0 1rem;
  background-color: orange;
  height: 100vh;
`

export const Form = styled.form<Props>`
  margin-top: 1rem;
  display: ${(props) => (props.open ? 'none' : 'flex')};
  flex-direction: column;
  gap: 1rem;

  button {
    margin-right: 1rem;
  }
`
