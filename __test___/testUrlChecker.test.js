// TODO: import the url check function
import { checkUrl } from "../src/client/js/urlChecker";
describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        // TODO: write your logic here
        expect(checkUrl).toBeDefined()
    })
    test('Testing the checkUrl function return false for invalid url', () => {
        // TODO: write your logic here
        expect(checkUrl('text')).toBeFalsy()
    })
    test('Testing the checkUrl function return true for valid url', () => {
        // TODO: write your logic here
        expect(checkUrl('http://goggel.com')).toBeTruthy()
    })

})