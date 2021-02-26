import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import { CardMedia } from '@material-ui/core';


// const useStyles = makeStyles({
    
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });

const Cakecard = (props) => {

    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    const {avatarSrc, title, subtitle, description, img} = props;

    return(
    <Card>
<      CardHeader
        avatar={
          <Avatar src= {avatarSrc} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{height: "150px"}}
        image={img}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">OFFER </Button>
        <Button size="small">ADD TO CART</Button>
      </CardActions>
    </Card>
    );
}

export default Cakecard;