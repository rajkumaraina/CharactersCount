import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

const EachItem = props => {
  const {item} = props
  console.log(props)
  const {input} = item
  return (
    <li className="listItem">
      <p className="item">
        {input}: {input.length}
      </p>
    </li>
  )
}

class CharacersCount extends Component {
  state = {
    input: '',
    value: false,
    characterList: [],
    finalInput: '',
  }

  inputChange = event => {
    this.setState({input: event.target.value})
  }

  buttonClicked = event => {
    event.preventDefault()
    const {input} = this.state
    const newValue = {id: uuidv4(), input}
    this.setState(prevState => ({
      value: true,
      input: '',
      characterList: [...prevState.characterList, newValue],
    }))
  }

  render() {
    const {input, value, characterList} = this.state

    return (
      <div className="mainContainer">
        <div className="first">
          <div className="container">
            <h1 className="heading">Count the Characters like a Boss...</h1>
          </div>
          <ul className="unordered">
            {value ? (
              characterList.map(each => <EachItem key={uuidv4()} item={each} />)
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="noUser"
              />
            )}
          </ul>
        </div>
        <div className="second">
          <h1 className="heading2">Character Counter</h1>
          <form onSubmit={this.buttonClicked} className="inputContainer">
            <input
              type="text"
              value={input}
              onChange={this.inputChange}
              className="input"
              placeholder="Enter the Characters here"
            />
            <button className="button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacersCount
