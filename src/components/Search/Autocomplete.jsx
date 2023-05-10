import { memo, useRef, useState } from "react"

const Autocomplete = ({ items, search, onChange, value }) => {
    
    const ref = useRef(null);
    const [open, setOpen] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value
        onChange(value)
        search(value)
    }

    return (
        <div className="dropdown w-full dropdown-open" ref={ref}>
            <input
                type="text"
                className="input input-bordered w-full"
                value={value}
                onChange={handleInputChange}
                placeholder="Search for yarn by name"
                tabIndex={0}
            />
            <div className="dropdown-content bg-base-100 top-14 max-h-96 overflow-auto flex-col rounded-md">
                <ul 
                    className="menu menu-compact"
                    style={{ width: ref.current?.clientWidth }}
                >
                    {items
                    // .filter(item => {
                    //     if (searchTerm === '') {
                    //         return item;
                    //     } else if (item.yarns.toLowerCase().includes(searchTerm.toLowerCase())) {
                    //         return item;
                    //     }
                    // })
                    .map((item, index) => {
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
                                {item.loading ? <span>Loading...</span> : <button>{item.searchTerm}</button>}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default memo(Autocomplete);