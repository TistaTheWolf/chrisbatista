import { Switch } from '@mui/material';
import { useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';

export const DarkModeToggle = () => {
  //   const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Switch
      defaultChecked
      slotProps={{ input: { 'aria-label': 'dark-mode-togle' } }}
      sx={{ m: 1 }}
      icon={<LightMode />}
      checkedIcon={<DarkMode />}
    />
  );
};
