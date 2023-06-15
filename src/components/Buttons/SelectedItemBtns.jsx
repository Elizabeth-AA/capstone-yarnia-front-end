import { InformationCircleIcon, PlusCircleIcon, ScissorsIcon } from '@heroicons/react/24/outline'

export default function SelectedItemBtns({ selectedItem, addToStash, handleClose, handleClick }) {

  return (
    <div className="join-horizontal md:join-vertical mt-1 mb-2 mx-auto md:m-auto md:mr-2">
        {/* md:absolute md:right-4 md:bottom-0.5 w-36 md:w-44 inline-flex items-baseline justify-between */}
        <div className="btn-tip" data-tip="close">
            <button onClick={() => { handleClose() }}><ScissorsIcon className="icon" /></button>
        </div>
        <div className="btn-tip" data-tip="view on ravelry">
            <a
                href={`https://www.ravelry.com/yarns/library/${selectedItem.permalink}`}
                target="_blank"
            >
                <InformationCircleIcon className="icon mx-4 md:mx-0 md:my-4" />
            </a>
        </div>
        <div className="btn-tip" data-tip="add to stash">
            <button onClick={() => { handleClick(); addToStash(selectedItem); handleClose() }}><PlusCircleIcon className="icon" /></button>
        </div>
    </div>
  )
}
