// core components
import Home from "views/Home";
import Login from "views/Login";
import Register from "views/Register";
import LeagueTableView from "views/LeagueTableView";
import News from "views/News";
// import ControlCenter from "views/ControlCenter";
import ResultsView from "views/ResultsView";

export default [
  {
    path: '/',
    exact: true,
    component: Home,
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
    component: LeagueTableView,
  },
  {
    path: '/news-page/:id',
    exact: true,
    component: News,
  },
  // {
  //   path: '/control-page',
  //   exact: true,
  //   component: ControlCenter,
  // },
  {
    path: '/results-page',
    exact: true,
    component: ResultsView,
  }
]