import { useRef, useState } from "react"

const Autocomplete = ({ items, value, onChange }) => {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown w-full" ref={ref}>
            <input
                type="text"
                className="input input-bordered w-full"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search for yarn by name"
                tabIndex={0}
            />
            

        </div>
    )
}

export default Autocomplete