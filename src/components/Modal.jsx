import React from "react";
import '../App.css';

export default function Modal({ img, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content">
        <img src={img} alt="zoom" />
      </div>
    </div>
  );
}
