// core components
import Home from "views/Home";
import Landing from "views/Landing";
import Login from "views/Login";
import Register from "views/Register";
import TableView from "views/TableView";
import News from "views/News";
import ControlCenter from "views/ControlCenter";
import ResultsView from "views/ResultsView";

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/landing-page',
    exact: true,
    component: Landing,
  },
  {
    path: '/login-page',
    exact: true,
    component: Login,
  },
  {
    path: '/register-page',
    exact: true,
    component: Register,
  },
  {
    path: '/table-page',
    exact: true,
    component: TableView,
  },
  {
    path: '/news-page/:id',
    exact: true,
    component: News,
  },
  {
    path: '/control-page',
    exact: true,
    component: ControlCenter,
  },
  {
    path: '/results-page',
    exact: true,
    component: ResultsView,
  }

]