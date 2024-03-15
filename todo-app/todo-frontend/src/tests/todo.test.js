import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

import Todo from "../Todos/Todo"

describe("Todo", () => {
  const todo = { text: "This is a todo", done: false }
  const onClickComplete = jest.fn()
  const onClickDelete = jest.fn()

  it("renders the todo", () => {
    render(
      <Todo
        todo={todo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
    )
    expect(screen.getByText(todo.text)).toBeInTheDocument()
  })

  it("calls onClickComplete when the todo is not done", () => {
    render(
      <Todo
        todo={todo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
    )
    fireEvent.click(screen.getByText("Set as done"))
    expect(onClickComplete).toHaveBeenCalledWith(todo)
  })
})
