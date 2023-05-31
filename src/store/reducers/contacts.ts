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
    },
    {
      id: 2,
      imgBox: 'P',
      name: 'Paola Freitas',
      email: 'paolam.freitas@gmail.com',
      tel: '11 99999 9999'
    },
    {
      id: 3,
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
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    }
  }
})

export const { remove } = contactsSlice.actions

export default contactsSlice.reducer
