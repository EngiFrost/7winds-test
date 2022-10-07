import { ReactNode, FC, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReplyIcon from '@mui/icons-material/Reply';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Menu, MenuProps } from 'antd';

import * as S from './styles';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [current, setCurrent] = useState('display');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <S.Wrapper>
      <S.AppBarSection>
        <S.AppBarLeft>
          <S.ButtonContainer>
            <AppsIcon fontSize='medium' onClick={() => console.info('Apps button pushed!')}/>
            <ReplyIcon fontSize='medium' onClick={() => console.info('Back button pushed!')}/>
          </S.ButtonContainer>
          
          <Menu // TODO: move to separate component
            style={{ width: 234 }} 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={appBarItems} 
          />
        </S.AppBarLeft>

        <S.AppBarRight> 
          <Avatar src="https://joeschmoe.io/api/v1/random" size={28}/>
          <S.Text>Антон Петров</S.Text>
          <ExpandMoreIcon />
        </S.AppBarRight>
      </S.AppBarSection>

      <S.MainSection>
        <Menu // TODO: move to separate component
          style={{ width: 234 }} 
          defaultSelectedKeys={['item5']} 
          defaultOpenKeys={['sub1']}
          mode="inline" 
          items={sidebarItems}
        />

        <S.ContentSection>{children}</S.ContentSection>
      </S.MainSection>
    </S.Wrapper>
  );
};

const appBarItems: MenuProps['items'] = [
  {
    label: 'Просмотр',
    key: 'display',
  },
  {
    label: 'Управление',
    key: 'management',
  },
];

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const sidebarItems: MenuProps['items'] = [
  getItem('Название проекта', 'sub1', null, [
    getItem('Item 1', 'item1', <DashboardIcon fontSize='large' />),
    getItem('Item 2', 'item2', <DashboardIcon fontSize='medium' />),
    getItem('Item 3', 'item3', <DashboardIcon fontSize='medium' />),
    getItem('Item 4', 'item4', <DashboardIcon fontSize='medium' />),
    getItem('Item 5', 'item5', <DashboardIcon fontSize='medium' />),
    getItem('Item 6', 'item6', <DashboardIcon fontSize='medium' />),
    getItem('Item 7', 'item7', <DashboardIcon fontSize='medium' />),
    getItem('Item 8', 'item8', <DashboardIcon fontSize='medium' />),
    getItem('Item 9', 'item9', <DashboardIcon fontSize='medium' />),
    getItem('Item 10', 'item10', <DashboardIcon fontSize='medium' /> ),
    getItem('Item 11', 'item11', <DashboardIcon fontSize='medium' /> ),
    getItem('Item 12', 'item12', <DashboardIcon fontSize='medium' /> ),
    getItem('Item 13', 'item13', <DashboardIcon fontSize='medium' /> ),
    getItem('Item 14', 'item14', <DashboardIcon fontSize='medium' /> ),
    getItem('Item 15', 'item15', <DashboardIcon fontSize='medium' /> ),
])]