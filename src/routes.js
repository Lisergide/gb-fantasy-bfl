// core components
import Home from "views/Home";
import Landing from "views/Landing";
import Login from "views/Login";
import Register from "views/Register";
import Fantasy from "views/Fantasy";
import News from "views/News";

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/landing-pag',
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
    path: '/fantasy-page',
    exact: true,
    component: Fantasy,
  },
  {
    path: '/news-page/:id',
    exact: true,
    component: News,
  }
]