import { ReactNode, FC } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { AppBar } from './AppBar';
import { ITab } from '../../model/tab';
import { TabPanel } from '../../components/TabPanel/TabPanel';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { mainLayoutStore } from '../../store/MainLayoutStore';

import * as S from './styles';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = observer(({ children }) => {
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
    { id: 'item1', label: 'По проекту' },
    { id: 'item2', label: 'Объекты' },
    { id: 'item3', label: 'РД' },
    { id: 'item4', label: 'МТО' },
    { id: 'item5', label: 'СМР' },
    { id: 'item6', label: 'График' },
    { id: 'item7', label: 'МиМ' },
    { id: 'item8', label: 'Рабочие' },
    { id: 'item9', label: 'Капвложения' },
    { id: 'item10', label: 'Бюджет' },
    { id: 'item11', label: 'Финансирование' },
    { id: 'item12', label: 'Панорамы' },
    { id: 'item13', label: 'Камеры' },
    { id: 'item14', label: 'Поручения' },
    { id: 'item15', label: 'Контрагенты' },
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
        <Sidebar items={sidebarItems} activeValue={mainLayoutStore.activeTab.id} />

        <S.ContentSection>
          <TabPanel />
          {children}
        </S.ContentSection>
      </S.MainSection>
    </S.Wrapper>
  );
});
