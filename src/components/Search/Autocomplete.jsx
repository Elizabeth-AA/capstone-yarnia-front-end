import { memo, useRef, useState } from "react"

const Autocomplete = ({ items, search, onChange, value, onSelect }) => {
    
    const ref = useRef(null);
    const [open, setOpen] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value
        onChange(value)
        search(value)
    }

    return (
        <div className={`dropdown w-full ${open ? 'dropdown-open' : ''}`} ref={ref}>
            <input
                type="text"
                className="input input-bordered w-full"
                value={value}
                onChange={handleInputChange}
                placeholder="Search for yarn by name"
                tabIndex={0}
            />
            <div className="dropdown-content bg-base-100 top-14 max-h-96 overflow-auto flex-col rounded-md">
                <div 
                    className="menu menu-compact"
                    style={{ width: ref.current?.clientWidth }}
                >
                    {items.map((item, index) => {
                        return (
                            <div
                                key={index}
                                tabIndex={index+1}
                                onClick={() => {
                                    onSelect(item);
                                    setOpen(false);
                                }}
                                className="menu-item border-b border-b-base-content/10 w-full"
                            >
                                <button>{item.searchTerm}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default memo(Autocomplete);