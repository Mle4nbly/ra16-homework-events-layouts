function IconSwitch({ icon, onSwitch }) {
  return (
    <span 
      className="icon material-icons"
      onClick={onSwitch}
    >
      {icon}
    </span>
  )
}

export default IconSwitch