import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'
import TodoPalette from './components/TodoPalette'

class App extends Component {
  id = 3
  state = {
    input: '',
    color: '#343a40',
    todos: [
        { id: 0, text: '김불꽃', checked: false },
        { id: 1, text: '이불꽃', checked: true },
        { id: 2, text: '박불꽃', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
        input: e.target.value
    })
  }

  handleCreate = () => {
    const {input, color, todos} = this.state

    this.setState({
        input: '',
        todos: todos.concat({
            id: this.id++,
            text: input,
            textColor: color,
            checked: false
        })
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate()
    }
  }


  handleToggle = (id) => {
    const {todos} = this.state
    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index]
    const nextTodos = [...todos]

    nextTodos[index] = {
        ...selected,
        checked: !selected.checked
    }

    this.setState({
        todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state
    this.setState({
      todos: todos.filter(todo=> todo.id !== id)
    })
  }


  doSelectColor = (color) => {
    this.setState({
        color
    })
  }

  render() {
    const {input, color, todos} = this.state
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,

      doSelectColor
    } = this

    const arrPaletteColors = ['#343a40', '#f03e3e', '#12b886', '#228ae6']

    return (
      <TodoListTemplate
          form={
            <Form value={input}
                  onKeyPress={handleKeyPress}
                  onChange={handleChange}
                  onCreate={handleCreate}
                  color={color}/>
          }
          palette={
            <TodoPalette colors={arrPaletteColors}
                         selected={color}
                         onSelect={doSelectColor}/>
          }>
        <TodoItemList todos={todos}
                      onToggle={handleToggle}
                      onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App
