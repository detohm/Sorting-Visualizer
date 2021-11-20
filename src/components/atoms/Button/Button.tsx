import { IButton } from './Button.interface';

const Button = (props: IButton) => {
    return (
        <button
            className={props.className}
            disabled={props.disabled}
            onClick={props.onClick}>{props.label}</button>
    );
}

export default Button;