import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  medium: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    border:"2px solid orange"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export function UserAvatar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Huma Qureshi" src="/hq.jpg" className={classes.medium} />
    </div>
  );
}
