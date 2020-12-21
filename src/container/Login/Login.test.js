import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import Login from './Login';
import Swal from "sweetalert2";

describe('Login', () => {
  describe('valid input',() => {
    it('when user input password and National Id is true', async ()=>{
        const { getByLabelText, queryByTitle }  = render(<Login/>)
        const sub = queryByTitle('sub')
        const user = getByLabelText("NationalID")
        const pass = getByLabelText('Password') 
      await act( async () =>{
        fireEvent.change(user,{target:{value:'1234567890123456'}})
        fireEvent.change(pass,{target:{value:'test'}})
        expect(user.value).toBe('1234567890123456')
        expect(pass.value).toBe('test')
      })
      await act(async () => {
        fireEvent.submit(sub);
      })
    expect(Swal.getTitle().textContent).toBe('Login Success')
      })
  })
  describe('with empty password',() => {
    it('when user input empty password', async ()=>{
        const { getByLabelText, queryByTitle }  = render(<Login/>)
        const user = getByLabelText("NationalID")
      await act( async () =>{
        fireEvent.change(user,{target:{value:'1234567890123456'}})
        expect(user.value).toBe('1234567890123456')
      })
      await act(async () => {
        fireEvent.submit(queryByTitle('sub'));
      })
    expect(Swal.getTitle().textContent).toBe('Password is Empty!')
      })
  })
  describe('with invalid National Id',() => {
    it('when user input empty National Id', async ()=>{
        const { getByLabelText, queryByTitle }  = render(<Login/>)
        const pass = getByLabelText('Password') 
      await act( async () =>{
        fireEvent.change(pass,{target:{value:'test'}})
        expect(pass.value).toBe('test')
      })
      await act(async () => {
        fireEvent.submit(queryByTitle('sub'));
      })
    expect(Swal.getTitle().textContent).toBe('National Id is Empty!')
      })
  })
})

