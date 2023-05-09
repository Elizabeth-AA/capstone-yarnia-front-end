import { memo, useRef, useState } from "react"

const Autocomplete = ({ items, value, onChange }) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown w-full dropdown-open" ref={ref}>
            <input
                type="text"
                className="input input-bordered w-full"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search for yarn by name"
                tabIndex={0}
            />
            <div className="dropdown-content bg-base-100 top-14 max-h-96 overflow-auto flex-col rounded-md">
                <ul 
                    className="menu menu-compact"
                    style={{ width: ref.current?.clientWidth }}
                >
                    {items.map((item, index) => {
                        return (
                            <li
                                key={index}
                                tabIndex={index+1}
                                onClick={() => {
                                    onChange(item);
                                    setOpen(false);
                                }}
                                className="border-b border-b-base-content/10 w-full"
                            >
                                <button>{item}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default memo(Autocomplete);