/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, queryByText, render, screen } from '@testing-library/react'
import Card from '../Components/Card';
import Form from '../Components/Form';
import Navbar from '../Components/Navbar';

import { MemoryRouter} from 'react-router-dom'
 
    describe ('Card tests', () => {
        test('Render card', () => {
            const cardData = {
              username: 'odontologoTest',
              name: 'odontologo',
              id: 1 ,
              liked: false,
            }
          
            const { container } = render(
              <MemoryRouter initialEntries={["/home"]}>
                <Card name={cardData.name} username={cardData.username} liked={cardData.liked} id={cardData.id}  />
              </MemoryRouter>
             
            )
           
            expect(container).toHaveTextContent(
              'odontologoTest'
            )
           
            const Button = screen.getByTestId("likeButton")
            expect(Button).toHaveTextContent("✰")
          
          })
          
          test('Like button change color on click', () => {
              const cardData = {
                username: 'odontologoTest',
                name: 'odontologo',
                id: 1 ,
                liked: false,
              }
            
              const { container } = render(
                <MemoryRouter initialEntries={["/home"]}>
                  <Card name={cardData.name} username={cardData.username} liked={cardData.liked} id={cardData.id}  />
                </MemoryRouter>
               
              )
             
              expect(container).toHaveTextContent(
                'odontologoTest'
              )
             
              const Button = screen.getByTestId("likeButton")
              expect(Button).toHaveTextContent("✰")
              fireEvent.click(Button)
              expect(Button).toHaveTextContent("★")
            })
          
            test('Odontologo details should appear on names click', () => {
              const cardData = {
                username: 'odontologoTest',
                name: 'odontologo',
                id: 1 ,
                liked: false,
              }
            
              const { container } = render(
                <MemoryRouter initialEntries={["/home"]}>
                  <Card name={cardData.name} username={cardData.username} liked={cardData.liked} id={cardData.id}  />
                </MemoryRouter>
               
              )
             
              expect(container).toHaveTextContent(
                'odontologoTest'
              )
             
              const nameLink = screen.getByTestId("cardName")
              fireEvent.click(nameLink)
              
              screen.queryByText("Detalle del dentista")
            })
          
    })

 
    describe ('Form tests', () => {
        test('Successfull Form test', () => {

            const { container } = render(
              <Form />
            )
          
            const nameInput = screen.getByLabelText(/^Nombre Completo/i)
            const emailInput = screen.getByLabelText(/^Email/i)
            const Button = screen.getByTestId("submitBtn")
          
            fireEvent.change(nameInput, { 
              target: { value: 'Test name' } 
            })
            fireEvent.change(emailInput, { 
              target: { value: 'test@test.com' } 
            })
          
            fireEvent.click(Button)
            const successMsg = screen.getByText(/^Gracias Test name! Te contactaremos a la brevedad via mail/i)
          
            expect(successMsg).toBeInTheDocument()
          
          })
          
          test('Fail Form test', () => {
          
              const { container } = render(
                <Form />
              )
            
              const nameInput = screen.getByLabelText(/^Nombre Completo/i)
              const emailInput = screen.getByLabelText(/^Email/i)
              const Button = screen.getByTestId("submitBtn")
            
              fireEvent.change(nameInput, { 
                target: { value: 'Test name' } 
              })
              fireEvent.change(emailInput, { 
                target: { value: 'test.com' } 
              })
            
              fireEvent.click(Button)
              const failMsg = screen.getByText(/^Por favor verifique su información nuevamente/i)
            
              expect(failMsg).toBeInTheDocument()
              expect(Button).toBeDisabled()
            
            })
          
    })


  