import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  getImg() {
    window.fetch('http://localhost:3000/img1', {method:'get'}).then((res) => res.blob()).then((res) => {
      console.log(res)
      let img = new Image()
      let urlCreator = window.URL || window.webkitURL
      let imageUrl = urlCreator.createObjectURL(res)
      img.src = imageUrl
      document.body.appendChild(img)
    })
  }
  render () {
    return <div>
      <span>Esta es una app hecha en React </span>
      <button onClick={this.getImg}>Traer imagen</button>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))



