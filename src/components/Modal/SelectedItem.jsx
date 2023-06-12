import close from "@assets/icons/yarnia-scissors.png"
import rav_direct from "@assets/icons/yarnia-rav.png"
import stash from "@assets/icons/yarnia-stash.png"
import YarnCardContents from "../Card/YarnCardContents"

const SelectedItem = ({ selectedItem, addToStash, handleClose, handleClick }) => {

    return (
        <div className="mx-auto">
        {selectedItem && (
            <div className={`${open ? "modal-open flex justify-center" : "hidden"}`}>
                <div className="modal-box card p-0">
                    <YarnCardContents item={selectedItem} />
                    <div className="md:absolute md:right-4 md:bottom-0.5 w-36 md:w-44 inline-flex items-baseline justify-between">
                        <div className="btn-tip" data-tip="close">
                            <button onClick={() => { handleClose() }}><img src={close} className="icon" /></button>
                        </div>
                        <div className="btn-tip" data-tip="view on ravelry">
                            <a
                                href={`https://www.ravelry.com/yarns/library/${selectedItem.permalink}`}
                                target="_blank"
                            >
                                <img src={rav_direct} className="icon" />
                            </a>
                        </div>
                        <div className="btn-tip" data-tip="add to stash">
                            <button onClick={() => { handleClick(); addToStash(selectedItem); handleClose() }} className="md:w-full md:mb-4"><img src={stash} className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default SelectedItem