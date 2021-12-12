import { Container } from "react-bootstrap"

export default function Bkg({imgx, flexer, children}){
  return(
    <Container 
      fluid="true" 
      className="bkgfull" 
      style={{
        'background': `url(${imgx}) center center`,
        'flexDirection': flexer === 'column' ? 'column' : ''
      }}
    >
      {children}
    </Container>
  )
}