import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const green = `rgb(52, 211, 153)`
const red = `rgb(239, 68, 68)`
const pink = `rgb(236, 72, 153)`

beforeEach(() => {
  render(<App />)
})

it('should increment the counter when increment pressed', () => {
  const counter = screen.getByRole('heading')
  expect(counter).toHaveTextContent('0')
  expect(counter).toHaveStyle(`color: ${pink}`)

  const incrementButton = screen.getByRole('button', { name: 'increment' })
  userEvent.click(incrementButton)
  expect(counter).toHaveTextContent('1')
  expect(counter).toHaveStyle(`color: ${green}`)

  userEvent.click(incrementButton)
  expect(counter).toHaveTextContent('2')
  expect(counter).toHaveStyle(`color: ${green}`)
})

it('should decrement the counter when decrement pressed', () => {
  const counter = screen.getByRole('heading')
  expect(counter).toHaveTextContent('0')
  expect(counter).toHaveStyle(`color: ${pink}`)

  const decrementButton = screen.getByRole('button', { name: 'decrement' })
  userEvent.click(decrementButton)
  expect(counter).toHaveTextContent('-1')
  expect(counter).toHaveStyle(`color: ${red}`)

  userEvent.click(decrementButton)
  expect(counter).toHaveTextContent('-2')
  expect(counter).toHaveStyle(`color: ${red}`)
})

it('should reset the counter when reset is pressed', () => {
  const counter = screen.getByRole('heading')
  expect(counter).toHaveTextContent('0')
  expect(counter).toHaveStyle(`color: ${pink}`)

  const decrementButton = screen.getByRole('button', { name: 'decrement' })
  userEvent.click(decrementButton)
  expect(counter).toHaveTextContent('-1')
  expect(counter).toHaveStyle(`color: ${red}`)

  const resetButton = screen.getByRole('button', { name: 'reset' })
  userEvent.click(resetButton)
  expect(counter).toHaveTextContent('0')
  expect(counter).toHaveStyle(`color: ${pink}`)
})

it('should count and reset all the things', () => {
  const counter = screen.getByRole('heading')
  expect(counter).toHaveTextContent('0')
  expect(counter).toHaveStyle(`color: ${pink}`)

  const incrementButton = screen.getByRole('button', { name: 'increment' })
  userEvent.click(incrementButton)
  expect(counter).toHaveTextContent('1')
  expect(counter).toHaveStyle(`color: ${green}`)

  userEvent.click(incrementButton)
  expect(counter).toHaveTextContent('2')
  expect(counter).toHaveStyle(`color: ${green}`)

  const resetButton = screen.getByRole('button', { name: 'reset' })
  userEvent.click(resetButton)
  expect(counter).toHaveTextContent('0')
  expect(counter).toHaveStyle(`color: ${pink}`)

  const decrementButton = screen.getByRole('button', { name: 'decrement' })
  userEvent.click(decrementButton)
  expect(counter).toHaveTextContent('-1')
  expect(counter).toHaveStyle(`color: ${red}`)

  userEvent.click(decrementButton)
  expect(counter).toHaveTextContent('-2')
  expect(counter).toHaveStyle(`color: ${red}`)

  userEvent.click(resetButton)
  expect(counter).toHaveTextContent('0')
  expect(counter).toHaveStyle(`color: ${pink}`)
})
