import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, withStyles } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

const styles = theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing(1, 0),
  },
  TextField: {
    width: "100%"
  }
});

class FormMessage extends Component {
  state = {
    author: '',
    message: '',
  };

  onSubmit = e => {
    console.log(e);
    e.preventDefault();
    const { addMessage } = this.props;
    addMessage(this.state);
  };

  onChange = ({ target }) => {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { author, message } = this.state;
    return (
      <form className={classes.root} onSubmit={this.onSubmit}>
        {/* <TextField
          name="author"
          label="Author"
          onChange={this.onChange}
          value={author}
          autoComplete="off"
        /> */}
        <TextField
          name="message"
          label="Message text"
          onChange={this.onChange}
          value={message}
          autoComplete="off"
          variant="filled"
          className={classes.TextField}
        />
        <Button
          size="medium"
          type="submit"
        >
          <CreateIcon/>
      </Button>
      </form>
    );
  }
}

FormMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(FormMessage);
