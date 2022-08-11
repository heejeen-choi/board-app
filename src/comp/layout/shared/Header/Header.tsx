import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

export default function Header() {
  const [ nav, setNav ] = React.useState(0);
  const [ work, setWork ] = React.useState(0);

  const navChange = (event: React.SyntheticEvent, newValue: any) => {
    setNav(newValue);
  };
  const workChange = (event: React.SyntheticEvent, newValue: any) => {
    setWork(newValue);
  };

  // React.useEffect(() => {
  //   setNav(context.navTab);
  // }, [context.navTab]);

  return (
    <header className="layout-header">
      <div className="layout-center">
        <div className="header-top">
          <h1 className="header-logo">
            <Link href="/">Nomadian</Link>
            {/* Nomadian */}
          </h1>

          <div>
            <IconButton>
              <Avatar>H</Avatar>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary" max={999}>
                <NotificationsNoneIcon color="secondary"/>
              </Badge>
            </IconButton>
          </div>
        </div>

        <div className="header-gnb-wrap">
          <Tabs value={nav} onChange={navChange} className="header-gnb">
            <Tab label="이슈체크"/>
            <Tab label="프로젝트"/>
            <Tab label="근태현황"/>
            <Tab label="git분석"/>
            <Tab label="조직도"/>
          </Tabs>

          <Tabs value={work} onChange={workChange} className="tab-select">
            <Tab label="출근"/>
            <Tab label="퇴근"/>
          </Tabs>
        </div>
      </div>
    </header>
  );
}
