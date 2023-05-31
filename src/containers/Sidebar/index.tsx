import { useState } from 'react'
import { Form, SideBarContainer } from './styles'
import { Button, Input } from '../../styles'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <SideBarContainer>
      <Button onClick={() => setIsOpen(false)}>Adicionar contato +</Button>
      <div>
        <Form open={isOpen}>
          <Input type="text" placeholder="Nome Completo" required />
          <Input type="tel" placeholder="Telefone" required />
          <Input type="email" placeholder="E-mail" required />
          <div>
            <Button type="submit">Adicionar</Button>
            <Button type="button" onClick={() => setIsOpen(true)}>
              Cancelar
            </Button>
          </div>
        </Form>
      </div>
    </SideBarContainer>
  )
}
