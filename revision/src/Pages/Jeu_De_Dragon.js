import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function ChangerStats() {
  return (
    <>
      <h1>Valider le profil</h1>
      <h3>Points à assigner: 5 points</h3>

      <ul>
        <li>Force:  / 18
          <Button variant="warning" size="sm" className="m-1">incr</Button>
        </li>
        <li>Intelligence:  / 18
          <Button variant="warning" size="sm" className="m-1">incr</Button>
        </li>
        <li>Dextérité:  / 18
          <Button variant="warning" size="sm" className="m-1">incr</Button>
        </li>
        <li>Charisme:  / 18
          <Button variant="warning" size="sm" className="m-1">incr</Button>
        </li>
        <li>Endurance:  / 18
          <Button variant="warning" size="sm" className="m-1">incr</Button>
        </li>
      </ul>
    </>
  );
}

function ChoisirRace() {
  return (
    <>
      <h1>Choisir votre race</h1>
      <p>Cliquez sur l'image</p>
      <Table bordered size="sm" >
        <thead>
          <tr>
            <td align="center">Nain</td>
            <td align="center">Humain</td>
            <td align="center">Elfe</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">
              <img src="nain.jpg" height="200" alt="nain"/>
            </td>
            <td align="center">
              <img src="humain.jpg" height="300" alt="humain"/>
            </td>
            <td align="center">
              <img src="elfe.jpg" height="250" alt="elfe"/>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

function App() {
  var race = null;
  var composantAffiche = <ChangerStats />;

  if (race == null) {
    composantAffiche = <ChoisirRace />;
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            {composantAffiche}
          </Col>
        </Row>
      </Container>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


export default App;