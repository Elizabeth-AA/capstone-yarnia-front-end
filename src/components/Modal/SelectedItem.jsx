const SelectedItem = ({ selectedItem, addToStash, handleClose, handleClick }) => {

    return (
        <div>
        {selectedItem && (
            <div className={`${open ? "modal-open flex justify-center" : "hidden"}`}>
                <div className="modal-box card p-3 mb-4 md:card-side w-fit bg-neutral shadow-xl">
                    <img className="rounded-lg max-h-40 md:max-h-60" src={selectedItem.photo.small_url} alt="skein of yarn" />
                    <div className="md:flex-col">
                        <h3 className="card-header md:pl-4">{selectedItem.name}</h3>
                        <p className="body-text md:pl-4 sm:pb-0 pb-2"> by {selectedItem.yarn_company}</p>
                        <p className="body-text pb-4 md:pl-4">{selectedItem.yarn_weight.name} - {selectedItem.yardage} yds</p>
                        <div className="flex flex-wrap justify-evenly md:flex-col md:ml-4 md:mt-2 md:place-items-end">
                            <button onClick={() => { handleClose() }} className="btn btn-xs btn-error w-2/4 md:w-full md:order-last">close</button>
                            <button onClick={() => { handleClick(); addToStash(selectedItem); handleClose() }} className="btn btn-sm btn-secondary w-2/4 order-first sm:mb-4 w-full">add to stash</button>
                            <a
                                href={`https://www.ravelry.com/yarns/library/${selectedItem.permalink}`}
                                target="_blank"
                                className="btn btn-xs btn-accent border-none w-2/4 md:w-full md:mb-4"
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