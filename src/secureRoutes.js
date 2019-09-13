// core components
import Profile from "views/Profile";
import ControlCenter from "views/ControlCenter";

export default [
  {
    path: '/profile-page',
    // exact: true,
    component: Profile,
  },
  {
    path: '/control-page',
    // exact: true,
    component: ControlCenter,
  },
]