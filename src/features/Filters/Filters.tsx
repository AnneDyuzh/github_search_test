import { observer } from "mobx-react-lite"
import { Select } from "@shared/ui/Select/Select"

const selectKeys = [
    { value: 'none_filters', label: 'No filters' },
    { value: 'stars_up', label: 'Less stars' },
    { value: 'stars_down', label: 'More stars' },
    { value: 'alphavite', label: 'Alphabetical order' }
]

export const Filters = observer(({ handleChange }: { handleChange: any }) => {

    return (
        <>
            <Select
                onChange={handleChange}
                values={selectKeys}
            />
        </>
    )
})

