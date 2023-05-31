import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      imgBox: 'P',
      name: 'Paola Freitas',
      email: 'paolam.freitas@gmail.com',
      tel: '11 99999 9999'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    add: (state, action: PayloadAction<Contact>) => {
      const existingContact = state.items.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (existingContact) {
        alert('Já existe um contato com esse nome.')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, edit, add } = contactsSlice.actions

export default contactsSlice.reducer
