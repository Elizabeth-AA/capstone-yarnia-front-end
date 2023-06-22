import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRavelryYarn, addNewStash } from "@utils/helpers"
import Autocomplete from "@components/Search/Autocomplete"
import SelectedItem from "@components/Modal/SelectedItem"
import StashCard from "@components/Cards/StashCard"
import SearchText from "@components/Text/SearchText"

export default function Stash() {
    const { userId } = useParams()
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])
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
                grams: item.grams,
                machine_washable: item.machine_washable,
                texture: item.texture,
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
                user_id: userId,
                rav_id: item.rav_id,
                name: item.name,
                yarn_company: item.yarn_company,
                yarn_weight: item.yarn_weight,
                yardage: item.yardage,
                grams: item.grams,
                machine_washable: item.machine_washable,
                texture: item.texture,
                photo: item.photo,
                permalink: item.permalink,
            }
            const response = await addNewStash(data)
            if (response && response.status === 201) {
                setStash([...stash, data])
            } else {
                console.error("yarn not added to stash")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main>
            <div className="section-border">
                <div className="section-content">
                    <SearchText />
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
                </div>
            </div>
            {stash && stash.length > 0 && (
                <div className="section-border">
                    <div className="section-content">
                        <section className="w-full mx-auto flex flex-wrap justify-center">
                            {stash.map((item) => (
                                <StashCard
                                    item={item}
                                />
                            ))}
                        </section>
                    </div>
                </div>
            )}
        </main>
    )
}