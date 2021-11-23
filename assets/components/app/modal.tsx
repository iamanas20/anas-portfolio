import React from 'react';
import {createPortal} from 'react-dom'
import hotkeys from 'hotkeys-js';

import './modal.scss';

const modalRoot = document.getElementById('modals');

export function Modal(props) {
  return !(props.active === false) ? (
    createPortal(
      <SubmodalContent {...props} />,
      modalRoot
    )
  ) : null;
}

export function SubmodalContent(props) {
  React.useEffect(
    function () {
      if(!props.close){
        return;
      }
      hotkeys(
        'escape',
        'all',
        function (event) {
          props.close();
        }
      );
    },
    []
  );
  return (
    <div className={`modal ${props.className || ''}`} >
      <div className="overlay" onClick={props.close} />
      <props.children.type {...props.children.props} className={`${props.children.props.className || ''} contentWrapper`} />
    </div>
  )
}

Modal.useModalState = function(initState: boolean = false) {

  let [state, setState] = React.useState(initState);
  return [
    state,
    () => setState(true),
    () => setState(false),
  ] as const;
}

Modal.Title = function (props) {
  return (
    <div {...props} className={"modalTitle " + (props.className || '')} />
  )
}

Modal.Footer = function (props) {
  return (
    <div {...props} className={'modalFooter' + (props.className ? ' ' + props.className : '')} />
  )
}

Modal.Body = function (props) {
  return (
    <div {...props} className={`modalBody ${props.className || ''}`}  />
  )
}

Modal.modalRoot = modalRoot;