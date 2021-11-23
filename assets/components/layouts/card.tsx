import React, {Component} from 'react'

import './card.scss';

type Props = {
	border?: boolean
	bodyClassName?: string
	className?: string

	title?: React.ReactNode
	actions?: React.ReactNode

	children: React.ReactNode
}

export function Card({border = true, bodyClassName, ...props}: Props) {
	return (
		<div className={`card ${props.className || ''}`}>
			{
				(props.title || props.actions) && (
					<div className={`card-header ${border ? "" : "no-border"}`}>
						{
							props.title && <div className="cardTitle">{props.title}</div>
						}
						{
							props.actions && <div className="card-action">{props.actions}</div>
						}
					</div>
				)
			}
			<div className={`card-body ${bodyClassName || ''} ${!(props.title || props.actions) ? 'body-no-title' : ''}`}>
				{props.children}
			</div>
		</div>
	)
}