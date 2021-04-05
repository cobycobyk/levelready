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

export default function ProfileDetail({ user }) {
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
              Message
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
      </Card>
      <div className="detailss">
        <img src="https://i.imgur.com/b1Ahpzn.png" alt="" />
      </div>
    </div>
  );
}
