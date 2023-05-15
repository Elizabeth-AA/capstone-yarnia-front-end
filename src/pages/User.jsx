import { useEffect, useState } from "react"
import { getRavelryYarn, addNewStash } from "@utils/helpers"
import Autocomplete from "@components/Search/Autocomplete"
import SelectedItem from "@components/Modal/SelectedItem"
import StashCollapse from "@components/Collapse/StashCollapse"

export default function User() {
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [stash, setStash] = useState([])
    const [open, setOpen] = useState(false)

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
            }))
            setItems(searchResults)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (searchTerm) {
            search(searchTerm)
        } else {
            setItems([])
            setSelectedItem(null)
        }
    }, [searchTerm])
    
    const handleSelectItem = (item) => {
        setSelectedItem(item)
        setOpen(true)
        document.activeElement.blur()
    }
     
    const handleClose = () => {
        setSelectedItem(null)
        setOpen(false)
    }

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const addToStash = async (item) => {
        try {
            const data = {
                // user_id: `${id}`,
                rav_id: item.rav_id,
                name: item.name,
                yarn_company: item.yarn_company_name || "Unknown",
                yarn_weight: item.yarn_weight || "Unknown",
                yardage: item.yardage || "Unknown",
                photo: item.first_photo,
                permalink: item.permalink,
            }
            const response = await addNewStash(data)
            if (response && response.status === 201) {
                setStash([...stash, data])
                console.log(stash)
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
                handleClick={handleClick}
                handleClose={handleClose}
            />
            <StashCollapse
                stash={stash}
            />
        </>
    )
}