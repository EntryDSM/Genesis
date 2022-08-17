interface Props{
  isOpen : boolean
}

const ScheduleModifySelectIcon:React.FC<Props> = ({isOpen}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 13 11">
      <path id="다각형_35" data-name="다각형 35" d="M6.5,0,13,11H0Z" transform='translate(13 11) rotate(180)' fill={isOpen && '#f57278'}/>
    </svg>
  )
}
export default ScheduleModifySelectIcon
