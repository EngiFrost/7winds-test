import { ReactNode, FC } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { AppBar } from './AppBar';
import { ITab } from './entity';
import { TabPanel } from './TabPanel';
import { Typography } from '@mui/material';

import * as S from './styles';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const appBarItems = [
    {
      id: 'display',
      label: 'Просмотр',
    },
    {
      id: 'management',
      label: 'Управление',
    },
  ];

  const sidebarItems: ITab[] = [
    // TODO: move to store
    { id: 'item1', label: 'Label1' },
    { id: 'item2', label: 'Label2' },
    { id: 'item3', label: 'Label3' },
    { id: 'item4', label: 'Label4' },
    { id: 'item5', label: 'Label5' },
    { id: 'item6', label: 'Label6' },
    { id: 'item7', label: 'Label7' },
    { id: 'item8', label: 'Label8' },
    { id: 'item9', label: 'Label9' },
    { id: 'item10', label: 'Label10' },
    { id: 'item11', label: 'Label11' },
    { id: 'item12', label: 'Label12' },
    { id: 'item13', label: 'Label13' },
    { id: 'item14', label: 'Label14' },
    { id: 'item15', label: 'Label15' },
  ];

  return (
    <S.Wrapper>
      <S.AppBarSection>
        <S.AppBarLeft>
          <S.ButtonContainer>
            <AppsIcon fontSize="medium" color="primary" onClick={() => console.info('Apps button pushed!')} />
            <ReplyIcon fontSize="medium" color="primary" onClick={() => console.info('Back button pushed!')} />
          </S.ButtonContainer>

          <AppBar items={appBarItems} activeValue="display" />
        </S.AppBarLeft>

        <S.AppBarRight>
          <Avatar src="https://joeschmoe.io/api/v1/random" style={{ height: '28px', width: '28px' }} />
          <Typography variant="body1" sx={{ margin: '0 0 0 8px' }}>
            Антон Петров
          </Typography>
          <ExpandMoreIcon color="primary" />
        </S.AppBarRight>
      </S.AppBarSection>

      <S.MainSection>
        <Sidebar items={sidebarItems} activeValue="item5" />

        <S.ContentSection>
          <TabPanel />
          {children}
        </S.ContentSection>
      </S.MainSection>
    </S.Wrapper>
  );
};
