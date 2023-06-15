import YarnCardContents from "../Card/YarnCardContents"
import SelectedItemBtns from "../Buttons/SelectedItemBtns"

const SelectedItem = ({ selectedItem, addToStash, handleClose, handleClick }) => {

    return (
        <div className="mx-auto">
        {selectedItem && (
            <div className={`${open ? "modal-open flex justify-center" : "hidden"}`}>
                <div className="modal-box card p-0">
                    <YarnCardContents item={selectedItem} />
                    <SelectedItemBtns
                    selectedItem={selectedItem}
                    addToStash={addToStash} handleClose={handleClose} handleClick={handleClick}
                    />
                </div>
            </div>
        )}
        </div>
    )
}

export default SelectedItem