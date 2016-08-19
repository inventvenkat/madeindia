import styles from '../styles/core.css'
import Base from './Base'
import Button from '../components/Button'

class Root extends Base {
	constructor(props, children) {
		super(props, children);
	}	

	handleStateChange(type) {
		switch(type) {
			case "APPEND_TO_BUTTON": 
				this.childrenObj[0].changeText(STATE.buttonText);
				break;
		}
	}

	handleClick = (count) => {
		if (count == 3)
		this.dispatch("APPEND_TO_BUTTON", "ButtonNew");
	}

	render() {
		return (
			<div key={this.key}>
				<div className="app">
					<div className="screen screen-active">
						<Button _onClick={this.handleClick} _onRender={this.setChildrens} text="Submit"/>
					</div>
				</div>
			</div>
		)
	}
}


export default Root;