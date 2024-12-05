import { InfoGeneralPage } from "../../page/eventos/evento/InfoGeneralPage"
import { useParams } from "react-router-dom";


const Evento = () => {
    const { id } = useParams();
    return (
        <div>
 
            <InfoGeneralPage id={id} />   
        </div>
    )
}


export default Evento;