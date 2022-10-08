import { Box, Tabs, Tab } from '@mui/material';
import { FC, useState } from 'react';

type AppBarProps = {
  items: {value: string, label: string}[],
  activeValue: string
}

export const AppBar: FC<AppBarProps> = ({items, activeValue}) => {
  const [value, setValue] = useState('display');

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
        aria-label="appBar"
      >
        {items.map(item => <Tab value={item.value} label={item.label} />)}
      </Tabs>
    </Box>
  );
}