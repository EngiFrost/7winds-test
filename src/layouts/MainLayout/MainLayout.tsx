import { ReactNode, FC, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReplyIcon from '@mui/icons-material/Reply';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import * as S from './styles';
import { Avatar } from '@mui/material';

export default function AppBar() {
  const [value, setValue] = useState('display');

  const appBarItems: {value: string, label: string}[] = [ // FIXME: receive from props
    {
      value: 'display',
      label: 'Просмотр',
    },
    {
      value: 'management',
      label: 'Управление',
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary" // FIXME: change colors
        indicatorColor="primary"
        aria-label="appBar"
      >
        {appBarItems.map(item => <Tab value={item.value} label={item.label} />)}
      </Tabs>
    </Box>
  );
}


type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.AppBarSection>
        <S.AppBarLeft>
          <S.ButtonContainer>
            <AppsIcon fontSize='medium' onClick={() => console.info('Apps button pushed!')}/>
            <ReplyIcon fontSize='medium' onClick={() => console.info('Back button pushed!')}/>
          </S.ButtonContainer>

          <AppBar />
          
          {/* <Menu // TODO: move to separate component
            style={{ width: 234 }} 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={appBarItems} 
          /> */}
        </S.AppBarLeft>

        <S.AppBarRight> 
          <Avatar src="https://joeschmoe.io/api/v1/random" style={{height: '28px', width: '28px'}}/>
          <S.Text>Антон Петров</S.Text>
          <ExpandMoreIcon />
        </S.AppBarRight>
      </S.AppBarSection>

      <S.MainSection>
        {/* <Menu // TODO: move to separate component
          style={{ width: 234 }} 
          defaultSelectedKeys={['item5']} 
          defaultOpenKeys={['sub1']}
          mode="inline" 
          items={sidebarItems}
        /> */}

        <S.ContentSection>{children}</S.ContentSection>
      </S.MainSection>
    </S.Wrapper>
  );
};

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

// const sidebarItems: MenuProps['items'] = [
//   getItem('Название проекта', 'sub1', null, [
//     getItem('Item 1', 'item1', <DashboardIcon fontSize='large' />),
//     getItem('Item 2', 'item2', <DashboardIcon fontSize='medium' />),
//     getItem('Item 3', 'item3', <DashboardIcon fontSize='medium' />),
//     getItem('Item 4', 'item4', <DashboardIcon fontSize='medium' />),
//     getItem('Item 5', 'item5', <DashboardIcon fontSize='medium' />),
//     getItem('Item 6', 'item6', <DashboardIcon fontSize='medium' />),
//     getItem('Item 7', 'item7', <DashboardIcon fontSize='medium' />),
//     getItem('Item 8', 'item8', <DashboardIcon fontSize='medium' />),
//     getItem('Item 9', 'item9', <DashboardIcon fontSize='medium' />),
//     getItem('Item 10', 'item10', <DashboardIcon fontSize='medium' /> ),
//     getItem('Item 11', 'item11', <DashboardIcon fontSize='medium' /> ),
//     getItem('Item 12', 'item12', <DashboardIcon fontSize='medium' /> ),
//     getItem('Item 13', 'item13', <DashboardIcon fontSize='medium' /> ),
//     getItem('Item 14', 'item14', <DashboardIcon fontSize='medium' /> ),
//     getItem('Item 15', 'item15', <DashboardIcon fontSize='medium' /> ),
// ])]