import React from 'react'
import ReactDOM from 'react-dom'
import GuessingPage from './GuessingPage'
import Canvas from '../../Utils/Canvas/Canvas'
// import ErrorBoundary from '../ErrorBoundary/errorBoundary'
import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

describe(`Guessing component`, () => {
    it('renders without crashing', () => {

        window.HTMLCanvasElement.prototype.getContext = () => { }
        const context = {
            game: {
                id: 'game uuid',
                current_drawer: 'test player',
                current_answer: 'test',
                status: 'waiting for players',
                winner: 'test winner'
            }
        }

        const guessPage = shallow(<GuessingPage />, { context })
        guessPage.setContext({ context })
        expect(guessPage).toMatchSnapshot();
    })
})