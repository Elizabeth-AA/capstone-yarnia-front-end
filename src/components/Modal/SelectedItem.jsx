import close from "@assets/icons/yarnia-scissors.png"
import rav_direct from "@assets/icons/yarnia-rav.png"
import stash from "@assets/icons/yarnia-stash.png"

const SelectedItem = ({ selectedItem, addToStash, handleClose, handleClick }) => {

    return (
        <div className="mx-auto w-max">
        {selectedItem && (
            <div className={`${open ? "modal-open flex justify-center" : "hidden"}`}>
                <div className="modal-box card p-3 mb-4 md:card-side w-full bg-neutral shadow-xl border-2 solid border-accent">
                    <img className="rounded-lg max-h-40 md:max-h-60" src={selectedItem.photo.small_url} alt="skein of yarn" />
                    <div className="w-full h-full md:flex md:flex-col">
                        <h3 className="card-header md:pl-4">{selectedItem.name}</h3>
                        <p className="body-text md:pl-4 sm:pb-0 pb-2"> by {selectedItem.yarn_company}</p>
                        <p className="body-text pb-4 md:pl-4">{selectedItem.yarn_weight.name} - {selectedItem.yardage} yds</p>
                        <div className="flex items-baseline justify-between flex-wrap md:mx-4 md:mt-2">
                            <div className="btn-tip" data-tip="close">
                                <button onClick={() => { handleClose() }}><img src={close} className="icon" /></button>
                            </div>
                            <div className="btn-tip" data-tip="add to stash">
                                <button onClick={() => { handleClick(); addToStash(selectedItem); handleClose() }} className="md:w-full md:mb-4"><img src={stash} className="icon" /></button>
                            </div>
                            <div className="btn-tip" data-tip="view on ravelry">
                                <a
                                    href={`https://www.ravelry.com/yarns/library/${selectedItem.permalink}`}
                                    target="_blank"
                                >
                                    <img src={rav_direct} className="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default SelectedItem