import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  closed: boolean
}

export const ContactMain = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 1rem;
`

export const IconBox = styled.button`
  height: 1.4rem;
  width: 1.4rem;
  border: none;
  background-color: transparent;

  svg {
    width: 1.4rem;
    height: 1.4rem;
    stroke: ${variables.textColor};
    margin: 0;
  }
`
export const IconBoxButton = styled(IconBox)`
  svg {
    cursor: pointer;

    &:hover {
      stroke: ${variables.hover};
    }
  }
`

export const ImgBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${variables.buttonColor};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${variables.backgroundColor};
  }
`

export const ContactInfo = styled.div<Props>`
  display: ${(props) => (props.closed ? 'none' : 'grid')};
  grid-template-columns: 2rem 1fr;
  align-items: center;
  row-gap: 1rem;
`

export const ConfigIcons = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  grid-column: 2 / -1;
`
