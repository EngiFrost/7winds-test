import { FC, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

type SidebarProps = {
  items: {value: string, label: string}[],
  activeValue: string
}

export const Sidebar: FC<SidebarProps> = ({items, activeValue}) => {
  const [value, setValue] = useState(activeValue);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary" // FIXME: change colors
        indicatorColor="primary"
        orientation="vertical"
        aria-label="sidebar"
      >
        {items.map(item => <Tab value={item.value} label={item.label} icon={<DashboardIcon />} iconPosition="start"/>)}
      </Tabs>
    </Box>
  );
}