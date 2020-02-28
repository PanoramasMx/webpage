import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiLink from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { the_event, social } from '../data/settings.json'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
    margin: 'auto',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.white,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  copyright: {
    paddingTop: theme.spacing(2),
  },
  subcontainer: {
    borderTop: '1px solid lightgrey'
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container className={classes.subcontainer}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="center"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                {social.map((x,i) => 
                  x.enable ?
                    <MuiLink key={i} color="inherit" href={x.url} target="_blank" rel="noopener noreferref">
                      <img src={x.img_url} alt={x.name} width="30" />
                    </MuiLink>
                  :null
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.copyright}>
              {the_event.full_name}{" "}{new Date().getFullYear()}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.copyright}>
            {the_event.org}
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
