// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
    searchInput: '',
  }

  countLetters = event => {
    const letters = event.target.value
    this.setState({count: letters.length, searchInput: letters})
  }

  render() {
    const {count, searchInput} = this.state

    return (
      <div className="app-container">
        <div className="image-container">
          <img
            className="image"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phrase">Enter the phrase</label>
          <br />
          <input
            id="phrase"
            placeholder="Enter the phrase"
            type="text"
            onChange={this.countLetters}
            value={searchInput}
          />
          <p className="letters-count">No.of letters: {count}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
