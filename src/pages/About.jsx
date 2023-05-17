export default function About() {
    <div className="section">
        <h1 className="page-header">Welcome to the world of yarnia</h1>
        <div>
            <h2 className="card-title">Find inspirational projects for your special skeins</h2>
            <p>Like many knitters, I have a stockpile of special yarn. this is yarn that was gifted, bought on vacation, or is otherwise sentimental. It can be daunting to choose a project that makes the best use of the yarn.</p>
            <p>Another challenge is presented by the huge amount of information available on Ravelry. yarnia streamlines the browsing process by suggesting projects that Ravelry users have made with particular yarn.</p>
            <p>Viewing projects is useful for learning how the yarn knits up. This helps with visualizing your dream project.</p>
        </div>
        <div>
            <h2 className="card-title">Planned for Phase 2</h2>
            <p>user auth for personal stash pages</p>
            <p>search using yarn colorways</p>
            <p>filter categories</p>
            <p>display detailed project information</p>
            <p>delete stash items</p>
        </div>
        <a
            href='/users/4'
            target="_blank"
            className="btn btn-sm btn-secondary btn-block"
            >
            Enter yarnia
        </a>
    </div>
}