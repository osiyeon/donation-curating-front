import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap"
import Header from '../components/Header/Header'
import MainBody from "../components/MainBody/MainBody"

export default function Home() {
  return (<>
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
  </>)
}
