const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render () {
    if (this.state.liked) {
      return 'i like react'
    }

    return e(
      'button',
      {
        onClick: () => {
          this.setState({ liked: !this.liked })
          console.log('this.state',this.state.liked)
        }
      },
      'Like'
    )
  }
}

const domContainer = document.querySelector('#like_button_container')
const root = ReactDOM.createRoot(domContainer)
root.render(e(LikeButton))