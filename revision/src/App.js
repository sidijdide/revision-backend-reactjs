
import './App.css';
import PageAcceuil from './Pages/PageAcceuil';
import PageApropos from './Pages/PageApropos';
import PageArticle  from './Pages/PageArticle';
import BareNavigation from './BareNavigation'
import PageListeArticles from './Pages/PageListeArticles';
import Jeu_De_Dragon from './Pages/Jeu_De_Dragon';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route }   from 'react-router-dom';


function App() {
  return (
    <Router>
        <Container>
          <BareNavigation/>
          <Route path="/" component={PageAcceuil} exact />
          <Route path="/a-propos" component={PageApropos} />
          <Route path="/article/:nom" component={PageArticle} />
          <Route path="/liste-articles" component={PageListeArticles} />
          <Route path="/jeu_de_dragon" component={Jeu_De_Dragon} />
       </Container>
    </Router>
    
  );
}

export default App; 
