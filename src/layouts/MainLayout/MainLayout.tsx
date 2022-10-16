import { ReactNode, FC } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { AppBar } from '../../components/AppBar/AppBar';
import { TabPanel } from '../../components/TabPanel/TabPanel';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { sidebarItems } from '../../store/MainLayoutStore';

import * as S from './styles';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = observer(({ children }) => {
  const appBarItems = [ //FIXME:
    {
      id: 'display',
      label: 'Просмотр',
    },
    {
      id: 'management',
      label: 'Управление',
    },
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
          <Typography variant="body2" sx={{ margin: '0 0 0 8px' }}>
            Антон Петров
          </Typography>
          <ExpandMoreIcon color="primary" sx={{ '&:hover': { cursor: 'pointer' } }} />
        </S.AppBarRight>
      </S.AppBarSection>

      <S.MainSection>
        <Sidebar items={sidebarItems} />

        <S.ContentSection>
          <TabPanel />
          {children}
        </S.ContentSection>
      </S.MainSection>
    </S.Wrapper>
  );
});
