import React from 'react';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  list: {
    maxWidth: 255,
    wordWrap: "break-word",
    marginBottom: 12,
    lineHeight: 24,
    position:"relative",
    padding:"10px 20px",
    borderRadius:25,
    // '&::before','&::after'{
    //   content:"";
		// position:"absolute";
    // bottom:-2;
    // height:20;
    // }
  },
  

})

const Message = ({ author, message, className }) => {
  return (
    <li
      className={cn('list', {
        'author-bot': author === 'Bot',
        author: author !== 'Bot',
        className,
      })}
    >
      <span>{`${message}`}</span>
    </li>
  );

};

export default Message;
