import { MenuBook } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export const PageHeader = () => {
  const pages = ['Blog', 'Resume', 'Projects'];
  const settings = ['Contact'];

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElPage, setAnchorElPage] = useState<null | HTMLElement>(null);

  const handleOpenPageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPage(event.currentTarget);
  };

  const handleClosePageMenu = () => {
    setAnchorElPage(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Container>
            <Grid container sx={{ alignItems: 'center' }}>
              <Grid
                container
                size={{ xs: 4 }}
                sx={{ justifyContent: 'flex-start' }}
              >
                <IconButton
                  size="large"
                  aria-label="page menu options"
                  aria-controls="menu-appbar"
                  onClick={handleOpenPageMenu}
                >
                  <MenuBook sx={{ color: 'white' }} />
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="page-menu-appbar"
                  anchorEl={anchorElPage}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElPage)}
                  onClose={handleClosePageMenu}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleClosePageMenu}>
                      <Typography sx={{ textAlign: 'center' }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
              <Grid size={{ xs: 4 }}>
                <Typography variant="h4">Chris Batista</Typography>
              </Grid>
              <Grid
                container
                size={{ xs: 4 }}
                sx={{ justifyContent: 'flex-end' }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Chris Batista avatar"
                        src="/src/assets/chrisbatista.jpeg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="user-menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: 'center' }}>
                          {setting}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
