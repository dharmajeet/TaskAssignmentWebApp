import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const OfficerDashboardDefault = Loadable(lazy(() => import('views/user-dashboard')));
const AddOfficerAssignData = Loadable(lazy(() => import('views/user-dashboard/addData')));

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/officerDashboard',
            element: <OfficerDashboardDefault />
        },
        {
            path: '/addData',
            element: <AddOfficerAssignData />
        }
    ]
};

export default MainRoutes;
