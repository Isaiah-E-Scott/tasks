import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>UD CISC275 with React Hooks and TypeScript</h1>
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                    <br></br>
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    First column with first list as bullets.
                                    <ul>
                                        <li>First thing</li>
                                        <li>Another thing</li>
                                        <li>A third item</li>
                                    </ul>
                                </Col>
                                <Col>
                                    Second column with second list as numbers.
                                    <ol>
                                        <li>First thing</li>
                                        <li>Another thing</li>
                                        <li>A third item</li>
                                    </ol>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </p>
                <p>
                    This is a new paragraph for the page. Let&#39;s make it a
                    little longer.
                </p>
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
                <img
                    src="https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"
                    alt="A picture of my dog Ada"
                />
            </div>
        </>
    );
}

export default App;
