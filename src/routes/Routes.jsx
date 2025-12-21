import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import LoanDetails from '../pages/LoanDetails/LoanDetails'
import DashboardLayout from '../layouts/DashboardLayout'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import DHome from '../pages/Dashboard/DHome'
import MainLayout from '../layouts/MainLayout'
import MyLoans from '../pages/Dashboard/Borrower/MyLoans'
import { createBrowserRouter } from 'react-router'
import ManageLoans from '../pages/Dashboard/Manager/ManageLoans'
import MyProfile from '../pages/Dashboard/Comon/MyProfile'
import AddLoans from '../pages/Dashboard/Manager/AddLoan'
import PrivateRoute from './PrivateRoute'
import PendingApplications from '../pages/Dashboard/Manager/PendingApplications'
import ApprovedApplications from '../pages/Dashboard/Manager/ApprovedApplications'
import AllLoans from '../pages/Dashboard/Admin/AllLoans'
import LoanApplications from '../pages/Dashboard/Admin/LoanApplications'
import AllLoan from '../pages/Home/AllLoan'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/loan/:id',
        element: <LoanDetails />,
      },
      {
        path: '/all-loan',
        element: <AllLoan/>
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <DHome />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/all-loan',
        element: (
          <PrivateRoute>
            <AllLoans/>
          </PrivateRoute>
        ),
      },
      {
        path: 'loan-applications',
        element: (
          <PrivateRoute>
            <LoanApplications/>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-loans',
        element: (
          <PrivateRoute>
          <ManageLoans/>
          </PrivateRoute>
        ),
      },
      {
        path: 'approved-loans',
        element: (
          <PrivateRoute>
          <ApprovedApplications/>
          </PrivateRoute>
        ),
      },
      {
        path: 'pending-loans',
        element: (
          <PrivateRoute>
          <PendingApplications/>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <MyProfile/>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-loans',
        element: (
          <PrivateRoute>
            <MyLoans/>
          </PrivateRoute>
        ),
      },
      {
        path: 'add-loan',
        element: <AddLoans/>
      },
    ],
  },
])
