import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState } from 'react'
import CalendarModal from '../component/CalendarModal'
import styled from 'styled-components'
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  // FullCalendar에서 날짜를 클릭했을 때 실행되는 함수
  const handleDateClick = (info) => {
    const clickedDate = info.dateStr;
    console.log('Clicked date:', clickedDate); // 클릭한 날짜를 콘솔에 출력
    setSelectedDate(clickedDate); // 클릭한 날짜를 selectedDate 상태에 업데이트
    setModalOpen(true); // 모달을 열기 위해 모달 상태를 true로 설정
  };

  return (
    <Container>
      <StyledCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        events={[
          { title: '공부하기', start: '2024-02-13', end: '2024-02-14', color: '#b1aee5' },
          { title: '축구하기', start: '2024-02-15', end: '2024-02-30', color: '#b1aee5' },
          { title: '빨래하기', start: '2024-03-08', color: '#2dee11' },
        ]}
      />
    {modalOpen &&
      <CalendarModal selectedDate={selectedDate} setModalOpen={setModalOpen} />
    }
    </Container>
  )
}

const Container = styled.div`
  padding-top: 120px;
  position: relative;
  height: 900px; 
  width: 1000px;
  margin: 0 auto;  
  
`
const StyledCalendar = styled(FullCalendar)`
  display: inline-block; 
`;
