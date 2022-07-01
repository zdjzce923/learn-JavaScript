const e = React.createElement
/**
 * 刚学 React 最大的感受是 React 的写法相当自由，你可以将任何 JS 的知识与 React 进行结合。
 * 
 * 跟着官方文档主要学习到如何创建一个 React 组件，使用原生的 JS 类定义属性和 render 方法。
 * 可以将任意组件挂载到任意根节点中，并且一个页面可以拥有任意数量根节点。挂载的主要步骤和 js 基本相同
 * 都是先获取元素 再插入到某个元素当中 React 使用 ReactDOM.createRoot 去创建一个根节点，再使用根节点的 render 方法去渲染指定的组件
 * 
 * 下方的 JS 片段主要是原生 JS 配合 React 的 api 进行渲染。还学习到了如何使用 JSX，如果不想构建开发环境还要使用 JSX，则可以
 * 安装官方的 babel 库，并执行 npx babel --watch src --out-dir . --presets react-app/prod 。会自动进行监听，将 JSX 编译为 原生 JS 代码
 */

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
          console.log('this.state', this.state.liked)
        }
      },
      'Like'
    )
  }
}

const domContainer = document.querySelectorAll('#like_button_container').forEach(domContainer => {
  const commentID = parseInt(domContainer.dataset.commentid, 10)
  const root = ReactDOM.createRoot(domContainer)
  root.render(e(LikeButton, { commentID: commentID }))
})
