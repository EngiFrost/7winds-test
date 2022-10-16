import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { mainLayoutStore } from '../../store/MainLayoutStore';
import CloseIcon from '@mui/icons-material/Close';
import { TabPanelTab } from './TabPanelTab';
import { ITab } from '../../model/tab';

import * as S from './styles';

export const TabPanel: FC = observer(() => {
  const closeTab = (e: React.SyntheticEvent, tabId: string) => {
    e.stopPropagation();
    mainLayoutStore.removeTabFromOpened(tabId);
  };

  const handleTabChange = (tab: ITab) => {
    mainLayoutStore.setActiveTab(tab);
  };

  return (
    <S.TabsWrapper variant='scrollable' scrollButtons={false}>
      {mainLayoutStore.openedTabs.map((tab) => (
        <TabPanelTab key={tab.id} label={tab.label} icon={<CloseIcon color="primary" onClick={(e) => closeTab(e, tab.id)} />} isActive={mainLayoutStore.activeTab.id === tab.id} onClick={() => handleTabChange(tab)} />
      ))}
    </S.TabsWrapper>
  );
});
