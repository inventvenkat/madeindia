import Base from '../views/Base'
import styles from '../styles/Button.css'

class Button extends Base {
	constructor(props, children) {
		super(props, children);

		this.clickedCount = 0;
	}	

	changeText(text) {
		this.find('test')[0].innerHTML = text;
	}	

	handleClick = () => {
		this.clickedCount++;
		this.props._onClick(this.clickedCount);
	}

	render() {
		return (
			<div click={this.handleClick} key={this.key} className={styles.button}>
				{this.props.text}
				<div className="test"></div>
			</div>
		)
	}
}

export default Button