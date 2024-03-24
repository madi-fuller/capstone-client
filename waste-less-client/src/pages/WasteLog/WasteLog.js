import WasteLogHeader from "../../components /WasteLogHeader/WasteLogHeader";
import WasteItemsList from "../../components /WasteItemsList/WasteItemsList";
import AddWasteItem from "../../components /AddWasteItem/AddWasteItem";

function WasteLog () {
    return (
        <>
        <WasteLogHeader />
        <WasteItemsList />
        <AddWasteItem />
        </>
    )
}

export default WasteLog;