import React from 'react'
import App from '../App'
import AddDevice from './AddDevice'
import { fireEvent, getByText, render, screen } from '@testing-library/react';

it('AddDevice renders correctly', () => {
	const component = render(<AddDevice />)
	const text = component.getByText('Add a device')
	expect(text).toBeTruthy()
})


it ('AddDevice component contains 2 inputs', () => {
	const component = render(<App />)
	const name = component.getByPlaceholderText('name')
	const price = component.getByPlaceholderText('price')
	expect(name).toBeTruthy()
	expect(price).toBeTruthy()
})

it('AddDevice should contains a button', () => {
	const component = render(<App />)
	const addButton = component.getByText('add')
	expect(addButton).toBeTruthy()
})

it('AddDevice should contain props onAdd', () => {
	const fn = jest.fn()
	const component = render(<AddDevice onAdd={fn} />)
	const addButton = component.getByText('add')
	fireEvent.click(addButton)
	expect(fn).toHaveBeenCalled()
})

it('onAdd should add a new device to DeviceList state', () => {
	const component = render(<App />)
	const addButton = component.getByText('add')
	const name = component.getByPlaceholderText('name')
	const price = component.getByPlaceholderText('price')
	fireEvent.input(name, { target: { value: 'test' }})
	fireEvent.input(price, { target: { value: 100 }})
	fireEvent.click(addButton)
	expect(screen.getByText(/test/)).toBeTruthy()
})
