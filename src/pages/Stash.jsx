// search dropdown
// add to stash
// yarn images
// image hover reveals modal with brief info
// image click directs to yarn patterns page
import { useEffect, useState } from "react"
import Autocomplete from "@components/Search/Autocomplete"
import SelectedItem from "@components/Search/SelectedItem"
import { getRavelryYarn } from "@utils/helpers"

export default function Stash() {
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const search = async (searchTerm) => {
        try {
            const data = await getRavelryYarn(searchTerm)
            const searchResults = data.yarns.map((item) => ({
                rav_id: item.id,
                name: item.name,
                yarn_company: item.yarn_company_name,
                yarn_weight: item.yarn_weight,
                yardage: item.yardage,
                photo: item.first_photo,
                permalink: item.permalink,
                searchTerm: item.name,
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
    
    const handleSelectItem = (item) => {
        setSelectedItem(item);
        document.activeElement.blur();
        console.log(item)
    }

    return (
        <>
            <Autocomplete
                items={items}
                search={search}
                value={searchTerm}
                onChange={(item) => setSearchTerm(item)}
                onSelect={handleSelectItem}
            />
            <SelectedItem
                selectedItem={selectedItem}
            />
        </>
    )
}