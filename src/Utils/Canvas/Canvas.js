import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import socket from '../../services/socket-service';
import ColorContext from '../../Context/ColorContext';

class Canvas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			canvasData: []
		};
	}
	static contextType = ColorContext;
	// socket;

	componentDidMount() {
		socket.on('clear canvas', () => {
			this._sketch.clear();
		});

		socket.on('sketch return', async (data) => {
			if (this.context.userId !== this.context.game.current_drawer && data !== this.context.canvasData) {
				console.log('changing state');
				await this.context.setCanvas(data);
			}
		});
	}

	handleSketchChange = () => {
		if (this.context.userId === this.context.game.current_drawer) {
			let sketch = this._sketch.toJSON();
			console.log('sketch is', sketch.objects);
			socket.emit('sketch', sketch);
		}
	};

	render() {
		return (
			<SketchField
				width="90%"
				height="400px"
				tool={Tools.Pencil}
				lineColor={this.context.color}
				lineWidth={this.context.eraser}
				backgroundColor="white"
				value={this.context.canvasData}
				onChange={this.handleSketchChange}
				ref={(c) => (this._sketch = c)}
			/>
		);
	}
}

export default Canvas;
