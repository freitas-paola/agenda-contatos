import styled from 'styled-components'

type Props = {
  open: boolean
}

export const FormContainer = styled.form<Props>`
  margin-top: 1rem;
  display: ${(props) => (props.open ? 'none' : 'flex')};
  flex-direction: column;
  gap: 1rem;

  button {
    margin-right: 1rem;
  }
`
