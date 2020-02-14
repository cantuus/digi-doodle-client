import React, { Component } from 'react'
import Canvas from '../../Utils/Canvas/Canvas'
import Colors from '../../Utils/Colors/Colors'
import ColorContext from '../../Context/ColorContext'
import DigiDoodleApiService from '../../services/digi-doodle-api-service'
import '../../Utils/Colors/Colors.css'
import './DrawingPage.css'
import '../../Utils/Canvas/Canvas.css'

export default class DrawingPage extends Component {

    static contextType = ColorContext

    componentDidMount() {
        DigiDoodleApiService.getWordPrompt()
            .then(res => {
                this.context.getPrompt(res)
            })
    }

    render() {
        console.log(this.context);
        return (
            <div>
                <h1>{this.context.username}, it is your turn to draw!</h1>
                <h3>Draw {this.context.prompt}</h3>
                <div className="canvas-container">
                    <Canvas />
                    <Colors />
                </div>
            </div>
        )
    }
}