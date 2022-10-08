import { FC, useState } from 'react';
import { Box, Tabs, Tab, Collapse, IconButton, styled, IconButtonProps } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import * as S from './styles';

type SidebarProps = {
  items: {value: string, label: string}[],
  activeValue: string
}

export const Sidebar: FC<SidebarProps> = ({items, activeValue}) => {
  const [value, setValue] = useState(activeValue);
  const [expanded, setExpanded] = useState(true)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ width: '234px' }}>
      <S.SidebarHeader>
        <S.SidebarText>
          <S.SidebarTitle>Название проекта</S.SidebarTitle>
          <S.SidebarSubtitle>Аббревиатура</S.SidebarSubtitle>
        </S.SidebarText>

        <S.SidebarIcon>
          <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
          </ExpandMore>
        </S.SidebarIcon>
      </S.SidebarHeader>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary" // FIXME: change colors
          indicatorColor="primary"
          orientation="vertical"
          aria-label="sidebar"
        >
          {items.map(item => (
            <Tab 
              value={item.value} 
              label={item.label} 
              icon={<DashboardIcon />} 
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Collapse>
    </Box>
  );
}

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