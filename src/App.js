import Home from './Components/Home'
import Article from './Components/Article'
import ArticleBrowse from './Components/ArticleBrowse';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const registry = require('./registry.json')

function App() {

  let regArr = [];
    
  for (let a in registry){
      if (registry.hasOwnProperty(a)) {
          let val = registry[a];
          regArr.push(val)
        }
  }

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/articles">
            <ArticleBrowse/>
          </Route>

          {regArr.map((i) => {
            return  <Route exact path={`/${i.URLslug}`} key={i.title}>
                      <Article title={i.title} date={i.date} textURL={i.texturl} bgImg={i.backgroundImg}/>
                    </Route>                        
          })}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
