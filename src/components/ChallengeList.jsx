import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import Chip from '@material-ui/core/Chip';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar'
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';

import { Link } from 'react-router-dom';
import Copyright from './Copyright';

import Header from './Header';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardContentChip: {
    paddingTop: 0,
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardAvatar: {
    backgroundColor: "#dd66dd",
  },
  editIcon: {
    marginLeft: "auto",
  },
  personIcon: {
    verticalAlign: "middle",
    fontSize: 24,
    color: '#666'
  },
  personCount: {
    verticalAlign: "middle",
    fontSize: 14,
    color: '#666'
  },
  personContainer: {
    verticalAlign: "middle",
    textAlign: "right",
    height: 32,
    paddingRight: 8,
    backgroundColor: 'rgba(200, 200, 200, 0.2)'
  },
  cardLink: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'default',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ChallengeList = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              チャレンジ構成管理
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              tec-bのユーザーに提供するチャレンジを管理します。
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    新しいチャレンジを作る
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to={`/challenge/view/${card}`} className={classes.cardLink}>
                  <CardActionArea>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.cardAvatar}>
                          R
                        </Avatar>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader="September 14, 2016"
                    />
                    <CardMedia
                      className={classes.cardMedia}
                      image="sleep.jpg"
                      title="Image title"
                    >
                      <div className={classes.personContainer}>
                        <PersonIcon className={classes.personIcon}/>
                        <span className={classes.personCount}>12</span>
                      </div>
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        睡眠の質を改善
                      </Typography>
                      <Typography>
                        12週間のチャレンジで睡眠の質を向上し、心身のコンディションを整えます。
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.cardContentChip}>
                      <Chip label="睡眠" variant="outlined" size="small" color="secondary" />
                      <Chip label="睡眠" variant="outlined" size="small" color="secondary" />
                    </CardContent>
                  </CardActionArea>
                  </Link>
                  <CardActions>
                    <Link to={`/challenge/edit/${card}`} className={classes.editIcon}>
                      <IconButton>
                        <EditIcon/>
                      </IconButton>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default ChallengeList;