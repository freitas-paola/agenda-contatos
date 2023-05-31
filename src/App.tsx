import GlobalStyle, { Container, MainContainer } from './styles'
import { Sidebar } from './containers/Sidebar'
import { ContactsList } from './containers/ContactsList'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <MainContainer>
          <ContactsList />
        </MainContainer>
      </Container>
    </Provider>
  )
}

export default App
