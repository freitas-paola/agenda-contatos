import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContactClass from '../../models/Contact'
import { Input } from '../../styles'
import * as S from './styles'
import { remove } from '../../store/reducers/contacts'

type Props = ContactClass

export const Contact = ({
  imgBox,
  name,
  email: emailOG,
  tel: telOG,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (emailOG.length > 0) {
      setEmail(emailOG)
    }
    if (telOG.length > 0) {
      setTel(telOG)
    }
  }, [emailOG, telOG])

  const displayIcon = isOpen ? (
    <>
      {' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>{' '}
    </>
  ) : (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </>
  )

  const removeIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </>
  )

  const editIcon = isEditing ? (
    <>
      {' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </>
  ) : (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    </>
  )

  const cancelEditingIcon = (
    <>
      {' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>{' '}
    </>
  )

  const telIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  )

  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  )

  function cancelEditing() {
    setIsEditing(false)
    setEmail(emailOG)
    setTel(telOG)
  }

  return (
    <>
      <S.ContactMain>
        <S.ImgBox>
          <p>{imgBox}</p>
        </S.ImgBox>
        <p>{name}</p>
        <S.IconBox
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
          {displayIcon}
        </S.IconBox>
      </S.ContactMain>
      <S.ContactInfo open={isOpen}>
        <S.IconBox>{emailIcon}</S.IconBox>
        <Input
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditing}
        />
        <S.IconBox>{telIcon}</S.IconBox>
        <Input
          defaultValue={tel}
          onChange={(e) => setTel(e.target.value)}
          disabled={!isEditing}
        />
        <S.ConfigIcons>
          <S.IconBox onClick={() => setIsEditing(true)}>{editIcon}</S.IconBox>
          {isEditing ? (
            <S.IconBox
              onClick={() => {
                cancelEditing()
              }}
            >
              {cancelEditingIcon}
            </S.IconBox>
          ) : (
            <S.IconBox onClick={() => dispatch(remove(id))}>
              {removeIcon}
            </S.IconBox>
          )}
        </S.ConfigIcons>
      </S.ContactInfo>
    </>
  )
}
