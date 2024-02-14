import { BarChartOutlined, CalendarTodayOutlined, ContactsOutlined, HelpOutlineOutlined, HomeOutlined, MapOutlined, PeopleOutline, PersonOutline, PieChartOutline, ReceiptOutlined, TimerOutlined } from '@mui/icons-material';


export const Array1 = [
    {
        title: "Dashboard",
        path: "/",
        icon: <HomeOutlined />,
    },
    {
        title: 'Manage Team',
        path: '/team',
        icon: <PeopleOutline />,
    },
    {
        title: 'Contacts Information',
        path: '/contacts',
        icon: <ContactsOutlined />,
    },
    {
        title: 'Invoices Balances',
        path: '/invoices',
        icon: <ReceiptOutlined />,
    },
];

export const Array2 = [
    {
        title: "Profile Form",
        path: "/form",
        icon: <PersonOutline />,
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <CalendarTodayOutlined />,
    },
    {
        title: 'FAQ Page',
        path: '/faq',
        icon: <HelpOutlineOutlined />,
    },
];

export const Array3 = [
    {
        title: "Bar Chart",
        path: "/bar",
        icon: <BarChartOutlined />,
    },
    {
        title: 'Pie Chart',
        path: '/pie',
        icon: <PieChartOutline />,
    },
    {
        title: 'Line Chart',
        path: '/line',
        icon: <TimerOutlined />,
    },
    {
        title: 'Geography Chart',
        path: '/geo',
        icon: <MapOutlined />,
    },
];