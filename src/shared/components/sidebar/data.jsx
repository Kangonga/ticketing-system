import {  AnalyticsOutlined, BugReportOutlined, EngineeringOutlined, Home, HomeOutlined, LiveHelpOutlined, LogoutOutlined, PersonOutlined, SupportAgentOutlined } from '@mui/icons-material';

export const icons = {
    main:[
      {
      name:'dashboard',
      icon:<HomeOutlined />,
      route:'/admin/'
      }
    ],
    lists:[
      {
      name:'Developers',
      icon:<EngineeringOutlined />,
      route:'/admin/devs'
    },
    {
      name:'Agents',
      icon:<SupportAgentOutlined />,
      route:'/admin/agents'
    },
    {
      name:'Tickets',
      icon: <BugReportOutlined />,
      route:'/admin/tickets'
    }
    ],
    utilities: [
      {
      name:'Statistics',
      icon:<AnalyticsOutlined />,
      route:'/admin/statistics'
    },
    {
      name:'FAQs',
      icon:<LiveHelpOutlined />,
      route:'/admin/faq'
    }
    ],
    user:[
      {
        name:'Profile',
        icon:<PersonOutlined />,
        route:'/admin/profile'
      },
      {
        name:'Log Out',
        icon:<LogoutOutlined />,
        route:'/admin/login'
      }
    ],
  }