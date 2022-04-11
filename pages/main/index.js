import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Input } from "reactstrap"
import Header from "../../components/Header/Header"
import SearchBox from "../../components/SearchBox/SearchBox"
import MainBody from "../../components/MainBody/MainBody"

export default function Main() {
  return (
    <>
      <Header />
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/270"
          height="360px"
        />
        <CardImgOverlay>
          <CardText>
            소개페이지
          </CardText>
        </CardImgOverlay>
      </Card>
      <MainBody />
    </>
  )
}