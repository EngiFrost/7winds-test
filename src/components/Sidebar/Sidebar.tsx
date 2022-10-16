import { FC, useState } from 'react';
import { Box, Collapse, IconButton, styled, IconButtonProps, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { observer } from 'mobx-react-lite';
import { mainLayoutStore } from '../../store/MainLayoutStore';
import { ITab } from '../../layouts/MainLayout/entity';
import { SidebarTab } from './SidebarTab';

import * as S from './styles';

type SidebarProps = {
  items: ITab[];
  activeValue: string;
};

export const Sidebar: FC<SidebarProps> = observer(({ items, activeValue }) => {
  const [expanded, setExpanded] = useState(true);
  const [value, setValue] = useState(activeValue);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    mainLayoutStore.setActiveTab(items.find((item) => item.id === newValue)!);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        width: '234px',
        height: 'calc(100vh - 44px)',
        backgroundColor: '#27272A',
        borderLeft: '1px solid #414144',
        boxSizing: 'border-box',
      }}
    >
      <S.SidebarHeader>
        <S.SidebarText>
          <Typography variant="subtitle1">Название проекта</Typography>
          <Typography variant="caption">Аббревиатура</Typography>
        </S.SidebarText>

        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon color="primary" />
        </ExpandMore>
      </S.SidebarHeader>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <S.SidebarTabList>
          {items.map((item) => (
            <SidebarTab key={item.id} label={item.label} icon={<DashboardIcon />} isActive={value === item.id} onClick={() => handleChange(item.id)} />
          ))}
        </S.SidebarTabList>
      </Collapse>
    </Box>
  );
});

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
