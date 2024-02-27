import React, { useRef } from 'react';
import './CalendarModal.css';

const CalendarModal = ({ selectedDate, setModalOpen }) => {
  const ref = useRef()

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleInputClick = (e) => {
    e.stopPropagation(); // 모달이 닫히는 것을 방지
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" ref={ref} onClick={(e) => e.stopPropagation()}>
        <div>
          <p>start date: </p>
          <input placeholder={`${selectedDate}`} onClick={handleInputClick} />
        </div>
        <div>
          <p>end date: </p>
          <input placeholder={`${selectedDate}`} onClick={handleInputClick} />
        </div>
        <div>
          <input placeholder='스케줄 상세' onClick={handleInputClick} />
        </div>
        <button onClick={handleCloseModal}>Close</button>
        <button onClick={handleCloseModal}>스케줄 등록</button>
      </div>
    </div>
  );
};

export default CalendarModal;
