import React, { ButtonHTMLAttributes } from 'react';
import './button.scss'

type Props = {
	primary?:boolean,
	secondary?:boolean,
	dashSecondary?:boolean,
	danger?:boolean,
	disabled?:boolean,
	className?:string,
	spinOn?:boolean,
	inline?:boolean
}

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({primary, secondary, dashSecondary, danger, className, spinOn, inline, disabled, ...props}: ButtonProps) {
	return (
		<button
			className={`button ${className || ''} ${PropsToClassNames(secondary, dashSecondary, danger, inline, disabled)} ${spinOn ? 'spinning' : ''}`} {...props}
		>
			{
				spinOn && (
					<div className="spinner">
					  <div className="bounce1"></div>
					  <div className="bounce2"></div>
					  <div className="bounce3"></div>
					</div>
				)
			}
			{props.children}
		</button>
	)
}

function PropsToClassNames(secondary, dashSecondary, danger, inline, disabled){
	return `${secondary ? 'secondary' : ''} ${dashSecondary ? 'dashSecondary' : ''} ${danger ? 'danger' : ''} ${inline ? 'inline' : ''} ${disabled ? 'disabled' : ''}`
}