import React from 'react';
/* import PropTypes from "prop-types"; */

const Message = ({ author, message }) => {
    
        return (
          
            <li>
                <span>{`${author}: ${message}`}</span>
            </li>
            
    );
};

/* Message.propTypes = {
    item: PropTypes.string.isRequired,
};
 */
export default Message;