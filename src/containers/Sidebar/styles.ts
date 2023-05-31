import styled from 'styled-components'
import variables from '../../styles/variables'

export const SideBarContainer = styled.div`
  padding: 1rem 1rem 0 1rem;
  background-color: ${variables.sidebarBackground};
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
    padding-bottom: 1rem;
  }
`
