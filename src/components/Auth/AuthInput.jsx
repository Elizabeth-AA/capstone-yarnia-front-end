export default function AuthInput({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder
}) {
    return (
        <div>
            <label htmlFor={labelFor} className="sr-only">
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className="input input-secondary input-sm w-full border-2 my-2 placeholder-primary"
              placeholder={placeholder}
            />
        </div>
    )
}