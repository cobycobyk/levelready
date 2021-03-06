import { Link } from "react-router-dom";
import "./ProfilePage.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import { PlayCircleFilledWhite } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 45,
  },
  media: {
    height: 240,
  },
});

export default function ProfilePage({ user }) {
  const classes = useStyles();

  return (
    <div className="profile">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
            title={user.name}
          />
          <CardActions>
            <Button size="small" color="secondary">
              Favorite
            </Button>
            <Button size="small" color="primary">
              <Link to="/messages">Message</Link>
            </Button>
          </CardActions>
          <CardContent className="profmiddle">
            <Typography gutterBottom variant="h4" component="h2">
              {user.name}
            </Typography>
            <hr />
            <Typography variant="body2" color="textSecondary" component="p">
              I have played games all my life and love FPS and MMOG games.
              Trying to rank up!
            </Typography>
            <hr />
            <Typography variant="body2" color="textSecondary" component="p">
              Looking for: Recruiting and Event Invites
            </Typography>
            <hr />
            <Typography variant="body2" color="textSecondary" component="p">
              My Socials
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <InstagramIcon />
              <InstagramIcon />
              <InstagramIcon />
              <InstagramIcon />
            </Typography>
          </CardContent>
        </CardActionArea>
        <Link to="/profiledetail" className="underlineHover login__signup">
          See more details
        </Link>
      </Card>
      <div className="stats">
        <div className="higher">
          <div className="score">
            LevelReady Score
            <hr />
            <h1>84.3</h1>
          </div>
          <div className="score">
            Total Games Played
            <hr />
            <h1>5406</h1>
          </div>
          <div className="score">
            Total Wins
            <hr />
            <h1>1150</h1>
          </div>
        </div>
        <div className="middle">
          <div className="breakdown">
            <div className="title">
              <h1>Games Breakdown</h1>
              <h4> Last 6 Months</h4>
            </div>
            <div className="graph">
              <img
                className="graphimage"
                src="https://i.imgur.com/x3Z28F3.png"
                alt=""
              />
            </div>
          </div>
          <div className="datasource">
            <img
              src="https://i.imgur.com/rtP9jRB.png"
              alt=""
              className="data"
            />
          </div>
        </div>
        <div className="low">
          <img
            src="https://i.imgur.com/pxSMNaI.png"
            alt=""
            className="gamesplayed"
          />
        </div>
      </div>
    </div>
  );
}
