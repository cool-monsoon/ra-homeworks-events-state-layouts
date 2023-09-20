export default function IconSwitch ({icon, onSwitch}) {
  return (
    <div className="icon-menu">
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}