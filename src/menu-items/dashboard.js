// assets
import { IconDashboard, IconLogout } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconLogout };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'officerDashboard',
            title: 'Officer Dashboard',
            type: 'item',
            url: '/officerDashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'officeAddrDashboard',
            title: 'Add Officer',
            type: 'item',
            url: '/addData',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'logout',
            title: 'Logout',
            type: 'item',
            url: '/login',
            icon: icons.IconLogout,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
