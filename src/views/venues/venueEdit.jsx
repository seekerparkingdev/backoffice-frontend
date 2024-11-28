import { InfoGeneralPage } from "../../page/venues/edit/InfoGeneralPage"
import { useParams } from "react-router-dom";
const venueEdit = () => {
    const { id } = useParams();
    return (
        <div>
 
            <InfoGeneralPage id={id} />   
        </div>
    )
}


export default venueEdit;