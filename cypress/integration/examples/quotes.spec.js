import { text } from "express"

// write tests here
describe('Quotes App', () => {
     beforeEach(() => {
         cy.visit('http://localhost:3005')
     })

     const textInput = () => cy.get('input[type=text]')
     const linkBtns = () => cy.get('button[classname=navBar]')

     it('sanity check to make sure tests work', () => {
         expect(1+2).to.equal(3)
         expect(2+2).not.to.equal(5)
         expect({}).not.to.equal({})
         expect({}).to.eql({})
     })

     it('the proper elements are showing', () => {
         textInput().should('exist')
         linkBtns().should('exist')
     })

     describe('Filling out the inputs and cancelling', () => {
         it('can navigate to the site', () => {
             cy.url().should('include', 'localhost')
         })

         it('can type in the inputs', () => {
             textInput().should()
         })
     })
})