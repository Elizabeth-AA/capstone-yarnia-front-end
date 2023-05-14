import { useState } from "react";

const SelectedItem = ({ selectedItem, addToStash }) => {
    const [open, setOpen] = useState(true)
    const [newStash, setNewStash] = useState({})

    const handleClick = () => setOpen((prev) => !prev)
    
    return (
        <div className="mt-4">
        {selectedItem && (
            <div className={open ? "modal-open flex justify-center" : "hidden"}>
                <div className="modal-box card p-3 max-h-min md:card-side md:w-fit bg-primary shadow-xl">
                    <img className="rounded-lg max-h-60 aspect-square" src={selectedItem.photo.small_url} alt="selected yarn image" />
                    <div className="md:flex-col">
                        <h3 className="card-header md:pl-4">{selectedItem.name}</h3>
                        <p className="text-neutral md:pl-4 md:pb-2"> by {selectedItem.yarn_company}</p>
                        <p className="text-neutral pb-4 md:pl-4">{selectedItem.yarn_weight.name} - {selectedItem.yardage} yds</p>
                        <div className="flex flex-wrap justify-evenly md:flex-col md:ml-4 md:mt-2">
                            <button onClick={handleClick} className="btn btn-xs btn-error w-2/4 md:w-full md:order-last">close</button>
                            <button onClick={() => { handleClick(); addToStash(selectedItem) }} className="btn btn-xs btn-accent w-2/4 md:order-first md:w-full">add to stash</button>
                            <a
                                href={`https://www.ravelry.com/yarns/library/${selectedItem.permalink}`}
                                target="_blank"
                                className="btn btn-xs bg-base-100 border-none w-full mt-4 md:mb-4"
                            >
                                view on ravelry
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default SelectedItem