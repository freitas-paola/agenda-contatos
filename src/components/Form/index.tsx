import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { FormContainer } from './styles'
import { Button, ButtonCancel, Input } from '../../styles'
import Contact from '../../models/Contact'
import { add } from '../../store/reducers/contacts'

export const Form = () => {
  const [isClosed, setisClosed] = useState(true)

  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const addContact = (e: FormEvent) => {
    e.preventDefault()
    const firstLetter = name[0].toUpperCase()
    const newContact = new Contact(firstLetter, name, email, tel, 9)

    dispatch(add(newContact))

    setName('')
    setEmail('')
    setTel('')
  }

  return (
    <>
      <Button onClick={() => setisClosed(false)}>Adicionar contato +</Button>
      <div>
        <FormContainer open={isClosed} onSubmit={addContact}>
          <Input
            value={name}
            onChange={({ target }) => setName(target.value)}
            type="text"
            placeholder="Nome Completo"
            required
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="E-mail"
            required
          />
          <Input
            value={tel}
            onChange={({ target }) => setTel(target.value)}
            type="tel"
            placeholder="Telefone"
            required
          />
          <div>
            <Button type="submit">Adicionar</Button>
            <ButtonCancel type="button" onClick={() => setisClosed(true)}>
              Cancelar
            </ButtonCancel>
          </div>
        </FormContainer>
      </div>
    </>
  )
}
