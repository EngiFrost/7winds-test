import { Box, Tabs, Tab } from '@mui/material';
import { FC, useState } from 'react';

type AppBarProps = {
  items: {id: string, label: string}[], //FIXME:
  activeValue: string
}

export const AppBar: FC<AppBarProps> = ({items, activeValue}) => {
  const [value, setValue] = useState(activeValue);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="appBar"
        sx={{minHeight: "44px", button: {padding: 0, margin: "0 14px"}}}
      >
        {items.map(item => <Tab value={item.id} label={item.label} key={item.id} sx={{minHeight: '44px'}}/>)}
      </Tabs>
    </Box>
  );
}