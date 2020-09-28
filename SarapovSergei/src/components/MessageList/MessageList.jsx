import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    list: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        margin: 0,
        border: '1px solid grey',
        width: '100%',
        padding: theme.spacing(4),
        borderRadius: '10px'
    }

}))


const MessageList = ({ messages }) => {
    const classes = useStyles();
    return (
        <Box component='ul' className={classes.list}>
            {
                messages.map(({ id, author, message }) => (
                    <Message key={id} author={author} message={message} />
                ))
            }
        </Box >
    )
}

MessageList.PropTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        message: PropTypes.string,
    })).isRequired,
}

export default MessageList;


