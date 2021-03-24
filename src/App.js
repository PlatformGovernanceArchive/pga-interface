import React, { Suspense, lazy } from 'react';
import { useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';

// Importing styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './pga.scss';

// Importing bootstrap
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

// Importing components
import Hero from './components/hero'
import Intro from './components/intro'
import Navigation from './components/Navigation';
//import Documents from './components/Documents';
//import Timeline from './components/Timeline';
import PolicyOverview from './components/PolicyOverview';

import ScrollToTop from './components/scrollToTop';
import * as Strings from './constants';
import { DataContext } from './contexts/dataContext'
import About from "./pages/about";

// Importing pages
import about from "./pages/about";
import Research from "./pages/research";
import Error404 from "./pages/404";


// Importing background images
import backgroundHome from "./assets/img/background-home.png";
import euLogo from "./assets/img/EUlog_funding.png";

const appClassName = "App darkTheme"

const Documents = lazy(() => import('./components/Documents'));
const Timeline = lazy(() => import('./components/Timeline'));

const setDate = (platform, type, date, context) => {

//  console.log('Context:', context);
  const { platforms: platformData } = context
  if (date){
    return date
  }
  else if(platformData.length>0){

    //Get selected platform from context
    const selectedPlatform = platformData.filter(pl => pl.slug === platform);

    //Get selected policy from context
    const { policies: policiesData } = selectedPlatform[0]
    const selectedPolicy = policiesData.filter(po => po.slug === type);

    //Get dates from policy
    const { dates: datesData } = selectedPolicy[0]
    //Get most recent date (-1) in the format YYYYMMDD (0,8)
//    let recentDate=datesData.slice(-1)[0].slice(0,8)
    let recentDate=datesData.slice(-1)[0]


//    console.log('Dates:', recentDate);

    return recentDate
  }
  else{
    return '20200101'
  }

}


// Switch components

const Home = () => (
  <div className={`${appClassName} home`} style={{backgroundImage: 'url('+backgroundHome+')'}}>
    <Hero />
    <Intro />
  </div>
)

const PickPolicy = ({ match }) => {
  return(
    <div className={`${appClassName} pick`}>
      <Navigation />
      <PolicyOverview />
    </div>
  )
}

const DocumentView = ({ match }) => {

  const contextValue = React.useContext(DataContext);

  const dateSelected = setDate(
    match.params.platformSlug,
    match.params.typeSlug,
    match.params.dateStamp,
    contextValue)

  const history = useHistory()

  return(
    <div className={`${appClassName} view`}>
      <Navigation
        platform={match.params.platformSlug}
      />
      <Container fluid className="documentViewer">
        <Documents
          platform={match.params.platformSlug}
          type={match.params.typeSlug}
          date={dateSelected}
        />
        <Timeline
          platform={match.params.platformSlug}
          type={match.params.typeSlug}
          date={dateSelected}
          history={history}
        />
      </Container>
    </div>
  )
}

const Page = ({ match }) => {
  const components = {
    about: About,
    research: Research,
//    terms: Terms,
//    framework: Framework,
    404: Error404
  }
  const CurrentPage = components[match.params.page] || components['404'];

  return(
    <div className={`${appClassName} page ${match.params.page}`}>
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
        <ScrollToTop path="/">

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

          <Suspense fallback={<div>Page is Loading...</div>}>
            <Switch>
              <Route path="/view/:platformSlug/:typeSlug/:dateStamp" component={DocumentView} />
              <Route path="/view/:platformSlug/:typeSlug" component={DocumentView} />
              <Route path="/explore" component={PickPolicy} />
              <Route path="/:page" component={Page} />
              <Route exact={true} path="/" component={Home} />
            </Switch>
          </Suspense>



        </ScrollToTop>
      </Router>

    )
  }
}
export default App;
