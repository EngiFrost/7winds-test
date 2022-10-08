import { Tab } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { mainLayoutStore } from '../../store/MainLayoutStore';
import CloseIcon from '@mui/icons-material/Close';

import * as S from './styles';

export const TabPanel: FC = observer(() => {
  const closeTab = (tabId: string) => {
    mainLayoutStore.removeTabFromOpened(tabId);
  };

  return (
    <S.TabsWrapper>
      {mainLayoutStore.openedTabs.map((tab) => (
        <Tab label={tab.label} value={tab.id} icon={<CloseIcon onClick={() => closeTab(tab.id)} />} iconPosition="end" />
      ))}
    </S.TabsWrapper>
  );
});
