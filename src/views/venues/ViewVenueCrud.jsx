import { PageVenueCrud  } from "../../page/venues/PageVenueCrud"
import { useParams } from "react-router-dom";
const ViewVenueCrud = () => {
    const { id } = useParams();
    return (
        <div>
 
            <PageVenueCrud  id={id} />   
        </div>
    )
}


export  {ViewVenueCrud} ;