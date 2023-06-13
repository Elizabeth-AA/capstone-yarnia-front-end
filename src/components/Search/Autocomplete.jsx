import { memo, useRef, useState } from "react"
import SearchInput from "./SearchInput";

const Autocomplete = ({ items, search, onChange, value, onSelect }) => {
    
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const [inputFocused, setInputFocused] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value
        onChange(value)
        search(value)
    }

    const handleInputFocus = () => {
        setInputFocused(!inputFocused);
    }

    return (
        <div className="flex justify-center">
            <div className={`dropdown w-9/12 ${open ? 'dropdown-open' : ''}`} ref={ref}>
                <SearchInput
                    value={value}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputFocus}
                    placeholder="Search for yarn by name"
                />
                <div className="dropdown-content bg-neutral top-14 max-h-96 overflow-auto flex-col rounded-md md:text-lg lg:text-xl">
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
                                    className="menu-item border-b border-b-base-content/10 w-full text-neutral-content hover:bg-accent"
                                >
                                    <button>{item.searchTerm}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Autocomplete);