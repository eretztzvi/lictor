import { useState, useEffect, lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import GuestLayout from '../layouts/Guest';
import LogoOnlyLayout from '../layouts/LogoOnly/index';

// pages
import Home from '../pages/Guest/Home';
import About from '../pages/Guest/About';
import Register from '../pages/Authentication/Register';
import Login from '../pages/Authentication/Login';
import ResetPasswordRequest from '../pages/Authentication/ResetPasswordRequest';
import ResetPassword from '../pages/Authentication/ResetPassword';
import NotFound from '../pages/NotFound'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/slicers/authSlicer';
import UserLayout from '../layouts/User';
import HomeUser from '../pages/User/HomeUser';
import Report from '../pages/User/Report';

// ----------------------------------------------------------------------

export default function Router() {

  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const [isAdmin, setIsAdim] = useState(null)

  useEffect(() => {

    const isUser = JSON.parse(localStorage.getItem('user'))

    if (isUser) {
      dispatch(login(isUser))
    }

    setIsAdim(isUser ? isUser.is_admin : null)

  }, user)

  let userRoutes;

  // except ADMIN and USER maybe in the future will be more types

  if (isAdmin === true) {
    // userRoutes = [...adminRouting]
    userRoutes = [...guestRouting]
  }

  if (isAdmin === false) {
    userRoutes = [...userRouting]
    // userRoutes = [...guestRouting]
  }

  if (isAdmin === null) {
    userRoutes = [...guestRouting]
  }

  return useRoutes([...userRoutes]);

}

const guestRouting = [
  // Main Routes
  {
    path: '*',
    element: <LogoOnlyLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'reset-password', element: <ResetPasswordRequest /> },
      { path: 'verify/:token/:email', element: <ResetPassword /> },
      { path: '/', element: <Navigate to="/home" replace /> }
    ]
  },

  { path: '*', element: <Navigate to="/404" replace /> }
]


const userRouting = [
  // dashboard
  {
    path: '/',
    element: <UserLayout />,
    children: [
      { path: '/', element: <Navigate to="/home" replace /> },
      { path: 'home', element: <HomeUser /> },
      { path: 'report', element: <Report /> },
      // { path: 'feed', element: <Feed /> },
    ]
  },
  // Main Routes
  {
    path: '*',
    element: <LogoOnlyLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]
  },
]



// const adminRouting = [
//   // dashboard
//   {
//     path: 'branch',
//     element: <BranchDashboardLayout />,
//     children: [
//       { path: '/', element: <Navigate to="/branch/home" replace /> },
//       { path: 'home', element: <HomeBranch /> },
//       { path: 'trainings', element: <TrainingsBranch /> },
//       {
//         path: 'guards',
//         children: [
//           {
//             path: '/',
//             element: <Navigate to="/guards/onduty" replace />
//           },
//           { path: 'onduty', element: <GuardsOnDutyBranch /> },
//           { path: 'recruit', element: <GuardsRecruitBranch /> },
//           { path: 'new-guard', element: <NewGuard /> },
//           { path: 'guard-profile/:_id', element: <GuardProfile /> },
//           { path: 'doc-page/:_id/:doc_id', element: <DocPage /> },
//         ]
//       },
//       { path: 'general-settings', element: <GegenralSettingsBranch /> },
//     ]
//   },
//   // Main Routes
//   {
//     path: '*',
//     element: <LogoOnlyLayout />,
//     children: [
//       { path: '404', element: <NotFound /> },
//       { path: '*', element: <Navigate to="/404" replace /> }
//     ]
//   },
//   {
//     path: '/',
//     element: <BranchDashboardLayout />,
//     children: [
//       { path: '/', element: <Navigate to="/branch/home" replace /> }
//     ]
//   }
//   ,

//   { path: '*', element: <Navigate to="/404" replace /> }
// ]


