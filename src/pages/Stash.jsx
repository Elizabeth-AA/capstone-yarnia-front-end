// search dropdown
// add to stash
// yarn images
// image hover reveals modal with brief info
// image click directs to yarn patterns page
import { useEffect, useState } from "react"
import Autocomplete from "@components/Search/Autocomplete"
import { getRavelryYarn } from "@utils/helpers"

export default function Stash() {
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    // const searchHandler = async (term) => {
    //     setSearchTerm(term)
    // }
    const search = async (searchTerm) => {
        try {
            const data = await getRavelryYarn(searchTerm)
            const searchResults = data.yarns.map((item) => ({
                loading: false,
                searchTerm: item.name,
                yarns: item.name
            }));
            setItems(searchResults)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (searchTerm) {
            search(searchTerm);
        } else {
            setItems([])
        }
    }, [searchTerm])

    // useEffect(() => {
    //     if (searchTerm.trim().length > 0) {
    //         setLoading(true);
    //         getRavelryYarn(searchTerm).then((data) => {
    //             ([{ searchTerm: searchTerm, loading: false, results: data }]);
    //             setLoading(false)
    //         })
    //     }
    // })

    // useEffect(() => {
    //     console.log(searchTerm)
    //     if (searchTerm && searchTerm.trim().length > 0) {
    //         getRavelryYarn(searchTerm).then((data) => {
    //             setSearchResults(data)
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    //     }
    // }, [searchTerm]);

    // const searchHandler = async (e) => {
    //     // e.preventDefault()
    //     setSearchTerm(e.target.value)
    // }

    return (
        <Autocomplete
            items={items}
            search={search}
            value={searchTerm}
            onChange={(item) => setSearchTerm(item)}
        />
    )
}