import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <h1>Bem-vindo ao iPlace Clone!</h1>
            <p>Aqui você encontra os melhores produtos eletrônicos.</p>

            {/* Sobre o criador do site */}
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Sobre o Criador</Card.Title>
                                <Card.Text>
                                    Meu nome é Talles Pereira, e eu criei este site para demonstrar minhas habilidades em
                                    linguagens e frameworks de desenvolvimento web. Através deste projeto, busquei
                                    aplicar conceitos e práticas do desenvolvimento full-stack, utilizando as
                                    ferramentas mais atuais do mercado.

                                    As tecnologias utilizadas neste projeto incluem:
                                    <ul>
                                        <li><strong>Frontend:</strong> React.js, React-Bootstrap, CSS</li>
                                        <li><strong>Backend:</strong> Node.js, Express</li>
                                        <li><strong>Para um futuro Banco de Dados:</strong> PostgresSQL</li>
                                    </ul>

                                    Além disso, a aplicação foi estruturada com boas práticas de desenvolvimento, como
                                    modularização, controle de versão com Git e GitHub, e integração com APIs para
                                    fornecer uma experiência mais dinâmica.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
