import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC, ReactNode } from 'react';

import * as S from './styles';

type TabPanelTabProps = {
  label: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export const TabPanelTab: FC<TabPanelTabProps> = observer((props) => {
  const { label, icon, isActive, onClick } = props;

  return (
    <S.TabWrapper isActive={isActive} onClick={onClick}>
      <Typography variant="body2">{label}</Typography>
      {isActive && <S.Icon>{icon}</S.Icon>}
    </S.TabWrapper>
  );
});
