import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getRavelryYarn, addNewStash } from "@utils/helpers"
import Autocomplete from "@components/Search/Autocomplete"
import SelectedItem from "@components/Modal/SelectedItem"
import StashItem from "@components/Card/StashItem"

export default function User() {
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [stash, setStash] = useState([])

    const { id } = useParams()

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

    const addToStash = async (item) => {
        try {
            const data = {
                // user_id: `${id}`,
                rav_id: item.rav_id,
                name: item.name,
                yarn_company: item.yarn_company_name,
                yarn_weight: item.yarn_weight,
                yardage: item.yardage,
                photo: item.first_photo,
                permalink: item.permalink,
            }
            const response = await addNewStash(data)
            if (response && response.status === 201) {
                setStash([...stash, item])
            } else {
                console.error("yarn not added to stash")
            }
        } catch (error) {
            console.error(error)
        }
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
                addToStash={addToStash}
            />
            <StashItem
                stash={stash}
            />
        </>
    )
}