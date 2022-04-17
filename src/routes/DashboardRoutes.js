import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// import UserDashboard from 'views/user-dashboard';

// dashboard routing
const UserDashboardDefault = Loadable(lazy(() => import('views/user-dashboard')));

const DashboardRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [

        {
            path: '/user-dashbboard',
            element: <UserDashboardDefault />
        }
    ]
};

export default DashboardRoutes;
