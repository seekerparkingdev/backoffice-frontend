import { Form, useParams } from "react-router-dom";
const FormCrud = () => {
const  {id} = useParams();
    return (
        <div>
            <h1>Formularios CRUD {id}</h1>
          <form action="onSubmit">
                

          </form>
        </div>
    )
}



export default FormCrud;