import { Container } from "react-bootstrap"

export default function Bkg({imgx, children}){
  return(
    <Container fluid="true" className="bkgfull" style={{'background': `url(${imgx}) no-repeat center center fixed`}}>
      {children}
    </Container>
  )
}