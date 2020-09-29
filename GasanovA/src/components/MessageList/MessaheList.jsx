import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    }
}));

const MessaheList = ({ messages }) => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      {messages.map(({ id, author, message }) => (
        <Message key={id} author={author} message={message} />
      ))}
    </div>
  );
};

MessaheList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ).isRequired,
}

export default MessaheList
