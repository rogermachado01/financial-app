import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from '../views/login';

export type RouteConfig = {
    path: string;
    component: () => JSX.Element;
    always?: boolean
}[]

const routesConfig: RouteConfig = [{
    "path": "/login",
    "component": LoginPage
}]

const Routes = (routes: RouteConfig) => {
  return (
  <Router>
      {routes.map(route => {
          return (
            <Route path={route.path} component={route.component} />
          )
      })}
  </Router>
)};

const withRoutes = () => Routes(routesConfig)
export default withRoutes