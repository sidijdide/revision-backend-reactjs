import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function ChangerStats(props) {
  const statitiques=props.stats;
  const points=props.points;
  const handleClick=props.handleClick;
  const libelles=["Force","Inteligence","Dextérité","Charisme","Endurance"];
  return (
    <>
      <h1>Valider le nouvelle  profil</h1>
      <h3>Points à assigner: {points} points</h3>
  
      <ul>
        {
          statitiques.map((stat,index) =>
          
          <li>{libelles[index]}: {stat} / 18
        {(points> 0 && stat <18) ?
          <Button variant="warning" size="sm" className="m-1" onClick={()=>handleClick(index)}>incr</Button>
          :null
        }
        </li>

          )
        }
        
      </ul>
    </>
  );
}

function ChoisirRace(props) {
  const handleClick=props.handleClick;
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
              <img src="nain.jpg" height="200" alt="nain" onClick={()=>handleClick("nain")}/>
            </td>
            <td align="center">
              <img src="humain.jpg" height="300" alt="humain" onClick={()=>handleClick("humain")}/>
            </td>
            <td align="center">
              <img src="elfe.jpg" height="250" alt="elfe" onClick={()=>handleClick("elfe")}/>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

function App() {

  const [statistiques,setStatistiques]=useState(null);
  const [points,setPoints]=useState(5);
 
  function handleClickRace(race){
    var nouvellesStats=[];
    nouvellesStats[0]=GenererNombreAleatoire(6,12);
    nouvellesStats[1]=GenererNombreAleatoire(6,12);
    nouvellesStats[2]=GenererNombreAleatoire(6,12);
    nouvellesStats[3]=GenererNombreAleatoire(6,12);
    nouvellesStats[4]=GenererNombreAleatoire(6,12);

    if(race==="nain"){

      nouvellesStats[0]+=3;
      nouvellesStats[1]-=2;
      //statistiques[2]+=3;
      nouvellesStats[2]+=3;
      nouvellesStats[3]-=3;
    }
    else if(race==="elfe"){

      nouvellesStats[0]-=2;
      nouvellesStats[1]+=3;
      nouvellesStats[2]+=3;
      nouvellesStats[3]-=2;
    }

    setStatistiques(nouvellesStats);
  }

  function handleClickStats(index){

       var nouvellesStats=statistiques.slice();
       nouvellesStats[index]+=1;

       setPoints(points - 1);
       setStatistiques(nouvellesStats);
  }
  function GenererNombreAleatoire(min,max){
   return Math.floor(Math.random()* (max - min +1 ))+min;
  }

  composantAffiche = <ChoisirRace handleClick ={handleClickRace} />;
 

  if (statistiques != null) {
    var composantAffiche = <ChangerStats stats={statistiques} points={points} handleClick={handleClickStats} />;
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