// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
// 	appBar: {
// 		borderBottom: `1px solid ${theme.palette.divider}`,
// 	},
// }));

// function Header() {
// 	const classes = useStyles();
// 	return (
// 		<React.Fragment>
// 			<CssBaseline />
// 			<AppBar
// 				position="static"
// 				color="white"
// 				elevation={0}
// 				className={classes.appBar}
// 			>
// 				<Toolbar>
// 					<Typography variant="h6" color="inherit" noWrap>
// 						BlogmeUp
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 		</React.Fragment>
// 	);
// }

// export default Header;


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <StyledAppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            BlogmeUp
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </React.Fragment>
  );
}

export default Header;
