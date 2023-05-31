class Contact {
  imgBox: string
  name: string
  email: string
  tel: string
  id: number

  constructor(
    imgBox: string,
    name: string,
    email: string,
    tel: string,
    id: number
  ) {
    this.imgBox = imgBox
    this.name = name
    this.email = email
    this.tel = tel
    this.id = id
  }
}

export default Contact
