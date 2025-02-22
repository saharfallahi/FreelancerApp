
function TextField({label,name,value,onChange}) {
  return (
    <div>
      <label className="mb-2 block" htmlFor={name}>
            {label}
          </label>
          <input
            value={value}
            onChange={onChange}
            className="textField__input"
            type="text"
            id={name}
            autoComplete="off"
          />
    </div>
  )
}

export default TextField