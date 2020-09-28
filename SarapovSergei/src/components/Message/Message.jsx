import React from 'react';
import cn from 'classnames';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import MessageList from '../MessageList';

const useStyles = makeStyles(theme => ({
  messageClass: {
    borderRadius: 4,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  author: {
    marginLeft: 'auto',
    backgroundColor: theme.palette.primary.dark,
  },
  bot: {
    marginRight: 'auto'
  }
}));

const Message = ({ author, message }) => {
  const classes = useStyles();
  return (
    <Box component="li"
      className={cn(classes.messageClass, {
        [classes.bot]: author === 'Bot',
        [classes.author]: author !== 'Bot',
      })}
    >
      <span>{`${author}: ${message}`}</span>
    </Box >
  );

};

Message.PropTypes = {
  author: PropTypes.string,
  message: PropTypes.string,
}

export default Message;
