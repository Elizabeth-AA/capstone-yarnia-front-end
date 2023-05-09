// search dropdown
// add to stash
// yarn images
// image hover reveals modal with brief info
// image click directs to yarn patterns page
import { useEffect, useState } from "react"
import Autocomplete from "@components/Search/Autocomplete"
import { getRavelryYarn } from "../utils/helpers"

export default function Stash() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if (searchTerm.trim().length > 0) {
            getRavelryYarn().then((data) => {
                setSearchResults(data)
            })
            .catch(err => {
                console.error(err);
            });
        }
    }, [searchTerm]);

    const searchHandler = async (e) => {
        // e.preventDefault()
        setSearchTerm(e.target.value)
    }

    return (
        <Autocomplete
            items={searchResults}
            value={searchTerm}
            onChange={searchHandler}
        />
    )
}