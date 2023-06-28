import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRavelryYarn, addNewStash, getStash, deleteStashItem } from "@utils/helpers"
import Autocomplete from "@components/Search/Autocomplete"
import SelectedItem from "@components/Modal/SelectedItem"
import StashCardSection from "@components/Cards/StashCardSection"
import SearchText from "@components/Text/SearchText"
import AlertInvalidToken from "@components/Alert/AlertInvalidToken"

export default function Stash() {
    const { userId } = useParams()
    const [searchTerm, setSearchTerm] = useState("")
    const [items, setItems] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)
    const [stash, setStash] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)

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
            console.log(items)
        } catch (error) {
            console.error(error)
        }
    }

    const fetchStash = async () => {
        try {
            const response = await getStash(userId)
            console.log(response)
            if (response) {
                setStash(response)
            } else {
                setErrorAlert(true)
                console.error("failed to fetch stash")
            }
            setLoading(false)
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
        fetchStash()
    }, [userId, searchTerm])
    
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
                rav_id: item.rav_id,
                name: item.name,
                yarn_company: item.yarn_company,
                yarn_weight: item.yarn_weight,
                yardage: item.yardage,
                grams: item.grams,
                machine_washable: item.machine_washable,
                texture: item.texture,
                photo: {
                    small_url: item.photo.small_url,
                    medium_url: item.photo.medium_url
                  },
                permalink: item.permalink,
            }
            const response = await addNewStash(userId, data)
            if (response) {
                setLoading(true)
                await fetchStash()
            } else {
                setErrorAlert(true)
                console.error("yarn not added to stash")
            }   
        } catch (error) {
            console.error(error)
        }
    }

    const deleteFromStash = async (yarnId) => {
        try {
          const response = await deleteStashItem(userId, yarnId);
          if (response) {
            setLoading(true);
            await fetchStash();
          } else {
            setErrorAlert(true);
            console.error("Failed to delete yarn from stash");
          }
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <main>
            {errorAlert && <AlertInvalidToken />}
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
            {!loading && <StashCardSection stash={stash} deleteFromStash={deleteFromStash} />}
        </main>
    )
}