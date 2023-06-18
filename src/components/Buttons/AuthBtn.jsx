export default function AuthBtn({
    handleSubmit,
    type='Button',
    action='submit',
    text,
    isActive
}) {
    return (
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className={`btn btn-secondary mt-2 btn-outline btn-md btn-block group relative ${
                    isActive ? 'disabled:text-error disabled:bg-neutral' : ''
                  }`}
                disabled={isActive}
                onClick={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}