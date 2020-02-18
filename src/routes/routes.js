import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import ErrorBoundary from "./ErrorBoundary";

const Home = React.lazy(() => import("../Pages/Home/Home"));
const Skills = React.lazy(() => import("../Pages/Skills/Skills"));
const Projects = React.lazy(() => import("../Pages/Projects/Project"));
const About = React.lazy(() => import("../Pages/About/About"));
const PageNotFound = React.lazy(() =>
  import("../Pages/PageNotFound/PageNotFound")
);

export const Routes = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  </ErrorBoundary>
);
