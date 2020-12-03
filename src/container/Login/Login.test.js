import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils'
import Login from './Login';



describe('Login', () => {
  describe('with vald input', () => {
    it('tes log and logIn function', async () => {
      const jsdomAlert = window.alert;
      window.alert = () => {};
      const mockOnSubmit = jest.fn()
      const {getByLabelText, getByRole} = render(<Login onSubmit={mockOnSubmit}/>)

      await act(async () => {
        fireEvent.change(getByLabelText('National ID'),{target:{value:'1234567890123456'}})
        fireEvent.change(getByLabelText('Password'),{target:{value:'password'}})
      })

      await act(async () => {
        fireEvent.click(getByRole('button'))
      })
      window.alert = jsdomAlert;
    })
  })
})

 // describe("with invalid National ID", () => {
  //   it("renders the National ID validation error", async () => {
  //     const {getByLabelText} = render(<Login />)
    
  //     await act(async () => {
  //       const inputId = getByLabelText('National ID')
  //       fireEvent.change(inputId, {target: {
  //         value: '12345678901234'
  //       }})
  //       fireEvent.error(inputId)
  //     })
  //   })
  // })

  // describe("with invalid password", () => {
  //   it("renders the password validation error", async () => {
  //     const {getByLabelText} = render(<Login />)

  //     await act(async () => {
  //       const paswordInput = getByLabelText('Password')
  //       fireEvent.change(paswordInput, {target: {
  //         value: "123"
  //       }})
  //       fireEvent.error(paswordInput)
  //     })
  //   })
  // })

// import {configure, mount, render, shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import { act } from 'react-dom/test-utils';
// import Login from './Login'
// React.useLayoutEffect = React.useEffect 

// configure({adapter: new Adapter()})

// describe('Login', ()=>{
 
//   let vald;
//   let nationalId;
//   let pswrd;
//   let login;
//   beforeAll (()=>{
//    vald = shallow(<Login/>);
//    nationalId = vald.find("#nationalId");
//    pswrd = vald.find("#password");
//    login = vald.find(jest.fn('logIn'));
//   })

//   afterEach(() => {
//     jest.clearAllMocks()
//   })
//   it("should match the snapshot", () => {
//     // snapshots are text references of the html of the rendered component.
//     expect(vald.html()).toMatchSnapshot()
//   })
//   it('check Login',()=>{
//     vald.find('Login');
//   })
//   it('check national id',()=>{
//     const onMuck = jest.fn()
//     const {getByLabelText, getByRole} = vald
   
//   })

// })
