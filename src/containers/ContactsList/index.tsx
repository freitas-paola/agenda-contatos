import { useSelector } from 'react-redux'

import * as S from './styles'
import { Contact } from '../../components/Contact'
import { RootReducer } from '../../store'

export const ContactsList = () => {
  const { contacts } = useSelector((state: RootReducer) => state)

  return (
    <S.ContactListContainer>
      <h1>Agenda de Contatos</h1>
      <S.List>
        {contacts.items.map((c) => (
          <li key={c.id}>
            <Contact
              imgBox={c.imgBox}
              name={c.name}
              email={c.email}
              tel={c.tel}
              id={c.id}
            />
          </li>
        ))}
      </S.List>
    </S.ContactListContainer>
  )
}
