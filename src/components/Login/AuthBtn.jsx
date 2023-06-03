export default function AuthBtn({
    handleSubmit,
    type='Button',
    action='submit',
    text
}) {
    return (
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="btn btn-secondary mt-2 btn-outline btn-sm btn-block group relative"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}