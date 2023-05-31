import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContactClass from '../../models/Contact'
import { Input } from '../../styles'
import * as S from './styles'
import * as I from '../Icons'
import { remove, edit } from '../../store/reducers/contacts'

type Props = ContactClass

export const Contact = ({
  imgBox,
  name,
  email: emailOG,
  tel: telOG,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isClosed, setisClosed] = useState(true)
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

  const displayIcon = isClosed ? (
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
        <S.IconBoxButton
          onClick={() => (isClosed ? setisClosed(false) : setisClosed(true))}
        >
          {displayIcon}
        </S.IconBoxButton>
      </S.ContactMain>
      <S.ContactInfo closed={isClosed}>
        <S.IconBox as="p">{I.emailIcon}</S.IconBox>
        <Input
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditing}
        />
        <S.IconBox as="p">{I.telIcon}</S.IconBox>
        <Input
          defaultValue={tel}
          onChange={(e) => setTel(e.target.value)}
          disabled={!isEditing}
        />
        <S.ConfigIcons>
          {isEditing ? (
            <>
              <S.IconBoxButton
                onClick={() => {
                  dispatch(
                    edit({
                      email,
                      tel,
                      id,
                      imgBox,
                      name
                    })
                  )
                  setIsEditing(false)
                }}
              >
                {I.saveIcon}
              </S.IconBoxButton>
              <S.IconBoxButton
                onClick={() => {
                  cancelEditing()
                }}
              >
                {I.cancelEditingIcon}
              </S.IconBoxButton>
            </>
          ) : (
            <>
              <S.IconBoxButton onClick={() => setIsEditing(true)}>
                {I.editIcon}
              </S.IconBoxButton>
              <S.IconBoxButton onClick={() => dispatch(remove(id))}>
                {I.removeIcon}
              </S.IconBoxButton>
            </>
          )}
        </S.ConfigIcons>
      </S.ContactInfo>
    </>
  )
}
