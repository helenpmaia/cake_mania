import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p><img src="/images/logo_quadrada.png"></img></p>
          </Col>
          <Col className="apresentacao-center">A Cake Mania nasceu de uma paixão por adoçar a vida das pessoas. Desde criança, nossa fundadora aprendeu com actions avó que confeitaria é arte e amor. Com receitas únicas e decorações encantadoras, decidiu transformar esse talento em uma loja especial.

Na Cake Mania, cada cupcake é feito com carinho, combinando sabores irresistíveis e criatividade. Seja para comemorar ou simplesmente alegrar o dia, nossos bolinhos são perfeitos para criar momentos inesquecíveis.

Assim, com dedicação e glacê, a Cake Mania se tornou mais que uma loja: é um lugar onde sonhos doces ganham vida!</Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Helen Maia</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
