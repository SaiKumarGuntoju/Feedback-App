import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiSelected: false}

  onClickEmoji = () => this.setState({isEmojiSelected: true})

  renderFeedbackAnswer = () => {
    const {feedbackData} = this.props
    return (
      <div className="feedback-container">
        <img
          className="love-emoji"
          alt="love"
          src={feedbackData.loveEmojiUrl}
        />
        <h1>Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performace.
        </p>
      </div>
    )
  }

  renderFeedbackQuestion = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData
    return (
      <div className="question-container">
        <h1 className="question-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-container">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              onClick={this.onClickEmoji}
              className="item-container"
            >
              <img className="emoji-logo" alt="emoji" src={emoji.imageUrl} />
              <p>{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isEmojiSelected} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          {isEmojiSelected
            ? this.renderFeedbackAnswer()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
