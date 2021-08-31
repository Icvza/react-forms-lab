import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
  }

  handleEventChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remainingChar = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message}
          onChange={event => this.handleEventChange(event)}
        />
        <div>
          {remainingChar}
        </div>
      </div>
    );
  }
}


export default TwitterMessage;
