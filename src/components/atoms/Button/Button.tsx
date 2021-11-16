import { IButton } from './Button.interface';

const Button = (props: IButton) => {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    );
}

export default Button;