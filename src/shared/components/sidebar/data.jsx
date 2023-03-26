import {  AnalyticsOutlined, BugReportOutlined, EngineeringOutlined, Home, HomeOutlined, LiveHelpOutlined, LogoutOutlined, PersonOutlined, SupportAgentOutlined } from '@mui/icons-material';

export const icons = {
    main:[
      {
      name:'dashboard',
      icon:<HomeOutlined />,
      route:'/'
      }
    ],
    lists:[
      {
      name:'Developers',
      icon:<EngineeringOutlined />,
      route:'/devs'
    },
    {
      name:'Agents',
      icon:<SupportAgentOutlined />,
      route:'/agents'
    },
    {
      name:'Tickets',
      icon: <BugReportOutlined />,
      route:'/tickets'
    }
    ],
    utilities: [
      {
      name:'Statistics',
      icon:<AnalyticsOutlined />,
      route:'/statistics'
    },
    {
      name:'FAQs',
      icon:<LiveHelpOutlined />,
      route:'/faq'
    }
    ],
    user:[
      {
        name:'Profile',
        icon:<PersonOutlined />,
        route:'/me'
      },
      {
        name:'Log Out',
        icon:<LogoutOutlined />,
        route:'/'
      }
    ],
  }