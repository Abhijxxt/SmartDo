// import { Props } from "next/script";
enum Status {
    INCOMPLETE,
    COMPLETE
}

export default function Todo(props: any) {
    const changeStatus = async (id: any) => {

    }

    return(
        <div key={props.id} className="mt-8">
            <h5 className="text-m">Todo</h5>
            <p className="font-bold text-xl">Title: {props.title}</p>
            <p>Description: {props.description}</p>
            <label>Status: </label>

            {
                props.status == "COMPLETE" ? 
                <input type="checkbox" onChange={() => {changeStatus(props.id)}} checked></input> :
                <input type="checkbox" ></input> 
            }
        </div>
    )
}