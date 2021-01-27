import React, {useState} from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';
import Copyright from './Copyright';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
      width: '100%',
    },
    '& .MuiGrid-root .MuiGrid-item': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
      // paddingRight: theme.spacing(2),
      width: '100%',
    },
    '& .MuiGrid-spacing-xs-3 > .MuiGrid-item': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    '& .MuiGrid-root > .MuiInputBase-root': {
      width: '100%',
    },
  },
  img: {
    width: '100%',
    height: 400,
    objectFit: 'cover',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ChallengeView = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <img src="/sleep.jpg" className={classes.img}/>
      <Container maxWidth="md">
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid container xs={12}>
              <Grid item>
                <FormLabel component="label">タイトル</FormLabel>
                <TextField defaultValue="睡眠の質を改善"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item>
                <FormLabel component="label">説明</FormLabel>
                <TextField defaultValue={"12週間のチャレンジで睡眠の質を向上し、心身のコンディションを整えます。"} multiline rows="5"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item>
                <FormLabel component="label">間隔</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                  <FormControlLabel value="daily" control={<Radio color="primary" />} label="日" />
                  <FormControlLabel value="weekly" control={<Radio color="primary" />} label="週" />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item>
                <FormLabel component="label">回数</FormLabel>
                <TextField defaultValue="12" type="number"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={12}>
                <FormLabel component="label">チャレンジ内容と設問</FormLabel>
              </Grid>
            </Grid>
            {/* 1 */}
            <Grid container direction="row">
              <Grid item xs={1}>
                <Typography>1</Typography>
              </Grid>
              <Grid item xs={4}>
                  <TextField defaultValue="1日の睡眠を8時間以上"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
              </Grid>
              <Grid item xs={4}>
                <TextField defaultValue="達成できましたか？"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={1}
                >
                  <MenuItem value={1}>2択</MenuItem>
                  <MenuItem value={2}>スライダー</MenuItem>
                  <MenuItem value={3}>Thirty</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={1}>
              <Typography>1</Typography>
            </Grid>
            <Grid item xs={4}>
                <TextField defaultValue="1日の睡眠を8時間以上"
                  InputProps={{
                    readOnly: true,
                  }}
                />
            </Grid>
            <Grid item xs={4}>
              <TextField defaultValue="達成できましたか？"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
              >
                <MenuItem value={1}>2択</MenuItem>
                <MenuItem value={2}>スライダー</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </Container>

      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

export default ChallengeView;