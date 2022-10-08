import { ReactNode, FC } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Sidebar } from './Sidebar';
import { AppBar } from './AppBar';

import * as S from './styles';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const appBarItems = [
    {
      value: 'display',
      label: 'Просмотр',
    },
    {
      value: 'management',
      label: 'Управление',
    },
  ];

  const sidebarItems = [
    { value: 'item1', label: 'Label1' },
    { value: 'item2', label: 'Label2' },
    { value: 'item3', label: 'Label3' },
    { value: 'item4', label: 'Label4' },
    { value: 'item5', label: 'Label5' },
    { value: 'item6', label: 'Label6' },
    { value: 'item7', label: 'Label7' },
    { value: 'item8', label: 'Label8' },
    { value: 'item9', label: 'Label9' },
    { value: 'item10', label: 'Label10' },
    { value: 'item11', label: 'Label11' },
    { value: 'item12', label: 'Label12' },
    { value: 'item13', label: 'Label13' },
    { value: 'item14', label: 'Label14' },
    { value: 'item15', label: 'Label15' },
  ];

  return (
    <S.Wrapper>
      <S.AppBarSection>
        <S.AppBarLeft>
          <S.ButtonContainer>
            <AppsIcon fontSize='medium' onClick={() => console.info('Apps button pushed!')}/>
            <ReplyIcon fontSize='medium' onClick={() => console.info('Back button pushed!')}/>
          </S.ButtonContainer>

          <AppBar items={appBarItems} activeValue='display'/>
        </S.AppBarLeft>

        <S.AppBarRight> 
          <Avatar src="https://joeschmoe.io/api/v1/random" style={{height: '28px', width: '28px'}}/>
          <S.Text>Антон Петров</S.Text>
          <ExpandMoreIcon />
        </S.AppBarRight>
      </S.AppBarSection>

      <S.MainSection>
        <Sidebar items={sidebarItems} activeValue='item5'/>

        <S.ContentSection>{children}</S.ContentSection>
      </S.MainSection>
    </S.Wrapper>
  );
};
