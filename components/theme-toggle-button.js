import { AnimatePresence, motion } from 'framer-motion'
// import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton } from '@mui/material';
import { ModeNightIcon , LightModeIcon } from "@mui/icons-material";

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('purple', 'orange');
  const icon = useColorModeValue(<ModeNightIcon />, <LightModeIcon />);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <IconButton
          // colorScheme={color}
          // icon={icon}
          onClick={colorMode.toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}
