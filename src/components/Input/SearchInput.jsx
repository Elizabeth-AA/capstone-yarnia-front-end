import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchInput({ value, placeholder, onChange, onFocus, onBlur }) {
    return (
        <div className="relative mb-6">
            <input
                type="text"
                className="bg-accent placeholder-base-content input input-bordered w-full md:text-lg lg:text-xl"
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                tabIndex={0}
            />
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center transition-opacity ${value ? 'opacity-0' : 'opacity-100'}`}>
                <MagnifyingGlassIcon className="h-5 w-5 text-neutral-content" />
            </div>
            <div className={`absolute inset-y-0 left-10 pr-3 flex items-center transition-opacity ${value ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-base-content">{placeholder}</span>
            </div>
        </div>
    )
}