import { useEffect, useState } from "react"
import StashCard from "@components/Cards/StashCard"

export default function StashCardSection({ stash, deleteFromStash }) {

    const [stashItems, setStashItems] = useState([])
    const sortedStash = stash.sort((a, b) => b.yarn_id - a.yarn_id)

    useEffect(() => {
        setStashItems(sortedStash)
    }, [stash])

  return (
    <div className="section-border">
        <div className="section-content">
            <section className="w-full mx-auto flex flex-wrap justify-center">
                {stashItems.map((item) => (
                    <StashCard
                        key={item.rav_id}
                        item={item}
                        deleteFromStash={deleteFromStash}
                    />
                ))}
            </section>
        </div>
    </div>
  )
}
