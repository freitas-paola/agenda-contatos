import styled from 'styled-components'

type Props = {
  open: boolean
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
    stroke: #000;
    cursor: pointer;
    margin: 0;

    &:hover {
      stroke: red;
    }
  }
`

export const ImgBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
  }
`

export const ContactInfo = styled.div<Props>`
  display: ${(props) => (props.open ? 'none' : 'grid')};
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
