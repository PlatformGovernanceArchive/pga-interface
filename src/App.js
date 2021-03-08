import React from 'react';

// Importing dependencies
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';

// Importing styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './pga.scss';

// Importing bootstrap
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

// Importing components
import Hero from './components/hero'
import Intro from './components/intro'
import Navigation from './components/Navigation';
import Document from './components/Document';
import Timeline from './components/Timeline';
import PolicyOverview from './components/PolicyOverview';
import ScrollToTop from './components/scrollToTop';
import * as Strings from './constants';
//import { DataContext } from './contexts/dataContext'

// Importing background images
import backgroundHome from "./assets/img/background-home.png";

const Home = () => (
  <div className="App home" style={{backgroundImage: 'url('+backgroundHome+')'}}>
    <Hero />
    <Intro />
  </div>
)

const PickPolicy = ({ match }) => (
  <div className="App pick">
    <Navigation />
    <PolicyOverview />
  </div>
)

const DocumentView = ({match}) => {
  let today = new Date().toISOString().slice(0, 10)
  let setDate = today

  if (match.params.dateStamp){
     setDate = match.params.dateStamp
  }

  return(
    <div className="App">
      <Navigation />
      <Document
        platform={match.params.platformSlug}
        type={match.params.typeSlug}
        date={setDate}
      />
      <Timeline
          platform={match.params.platformSlug}
          type={match.params.typeSlug}
          date={setDate}
      />
    </div>
  )
}

const Page = ({ match }) => {
  const components = {
//    about: About,
//    resources: Resources,
//    terms: Terms,
//    framework: Framework,
//    404: Error404
  }
  const CurrentPage = components[match.params.page] || components['404'];

  return(
    <div className={"App " + match.params.page}>
      <Navigation  page={match.params.page} />
      <CurrentPage />
    </div>
  )
}

class App extends React.Component {
  componentDidMount() {
    console.log('App mounted:')
  }

  render() {
    return(
      <Router>
        <ScrollToTop>

          <Helmet>
            <title>{Strings.Meta_PageTitle}</title>
            <meta name="description" content={Strings.Meta_Description} />
          </Helmet>

          {/*
          <DataContext.Consumer>
            {({ status }) => (
              <div>Data status: {status}</div>
            )}
          </DataContext.Consumer>
          */}

          <Switch>
            <Route path="/view/:platformSlug/:typeSlug/:dateStamp" component={DocumentView} />
            <Route path="/view/:platformSlug/:typeSlug" component={DocumentView} />
            <Route path="/explore" component={PickPolicy} />
            <Route path="/:page" component={Page} />
            <Route exact={true} path="/" component={Home} />
          </Switch>

        </ScrollToTop>
      </Router>

    )
  }
}
export default App;
