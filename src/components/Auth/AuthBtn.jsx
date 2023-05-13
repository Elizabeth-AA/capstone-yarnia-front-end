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
                className="btn btn-primary btn-outline btn-wide group relative mt-10"
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