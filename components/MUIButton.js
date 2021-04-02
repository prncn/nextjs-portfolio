import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import tinycolor from 'tinycolor2';

const useStyles = makeStyles(theme => ({
  root: props => ({
    color: props.color === 'primary' ? 'white' : theme.palette[props.color].contrastText,
    boxShadow: props.color === 'primary'
        ? `0 2px 10px rgba(138, 227, 213, 0.4)`
        : 'none',
    marginRight: '20px',
    borderRadius: 2,
    textTransform: 'capitalize',
    transition: 'none',
    '&:hover': {
      backgroundColor: tinycolor(theme.palette[props.color].main).darken()
    }
  }),
}));

const MUIButton = (props) => {
  const classes = useStyles(props);
  return (
    <Button
      {...props}
      variant = {(props.variant === undefined) ? "contained" : props.variant}
      color = {(props.color === undefined) ? "default" : props.color}
      size="large"
      disableElevation
      className={classes.root}
    >
      {props.children}
    </Button>
  );
};

export default MUIButton;
