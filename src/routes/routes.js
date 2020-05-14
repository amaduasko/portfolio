import React, { Suspense } from 'react'
import { Spinner } from 'reactstrap'
import { Route, Switch } from 'react-router'
import ErrorBoundary from './ErrorBoundary'

const Home = React.lazy(() => import('../Pages/Home/Home'))
const About = React.lazy(() => import('../Pages/About/About'))
const Skills = React.lazy(() => import('../Pages/Skills/Skills'))
const PageNotFound = React.lazy(() =>
  import('../Pages/PageNotFound/PageNotFound')
)

export const Routes = () => (
  <ErrorBoundary>
    <Suspense
      fallback={
        <div
          style={{
            right: '0',
            top: '0',
            left: '0',
            bottom: '0',
            width: 'fit-content',
            height: 'fit-content',
          }}
          className='m-auto position-absolute'
        >
          <Spinner type='grow' color='success' />
          <Spinner type='grow' color='warning' />
          <Spinner type='grow' color='danger' />
        </div>
      }
    >
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  </ErrorBoundary>
)
