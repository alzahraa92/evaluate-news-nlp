// to solve ReferenceError: regeneratorRuntime is not defined
//import 'babel-polyfill'
//import handleSubmit from '../src/client/js/formHandler'
import { handleSubmit } from '../src/client/js/formHandler'
describe('Client Test', () => {
    // TODO: add your test cases to test client
    test('Testing handleSubmit', () => {
        expect(handleSubmit).toBeDefined()
    })
})