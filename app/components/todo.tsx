// import { Props } from "next/script";
'use client'


enum Status {
    INCOMPLETE,
    COMPLETE
}

export default function Todo(props: any) {

    const changeStatus = async (id: any, status:any) => {
        console.log("HERE")
        let newstat = "";
        if(status == "COMPLETE") {
            newstat = "INCOMPLETE"
        } else {
            newstat = "COMPLETE";
        }
        const response = await fetch("/api/todo", {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                status: newstat
            })
        })
        if(!response.ok) {
            alert("There was some error")
        } else {
            window.location.reload()
        }
    }

    const deleteTodo = async (id:any) => {
        console.log(id);
        const response = await fetch("/api/todo", {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
        if(!response.ok) {
            alert("Cannot delete ERror occured");
        } else {
            window.location.reload();
        }
    }

    return(
        <div key={props.id} className={`mt-8 bg-slate-100 w-100 border-l-4 ${props.status == "COMPLETE" ? 'border-l-green-500' : 'border-l-red-500' } px-4 py-2`}>
            <p className="font-bold text-xl">{props.title}</p>
            <p>{props.description}</p>
            <label>Status: </label>
            {
                props.status == "COMPLETE" ? 
                <input type="checkbox" onChange={() => {changeStatus(props.id, props.status)}} checked></input> :
                <input type="checkbox" onChange={() => {changeStatus(props.id, props.status)}} ></input> 
            }<br></br>
            <div className="w-full flex justify-end">
                <button onClick={() => {deleteTodo(props.id)}} className="bg-red-400 px-2 py-1">Delete</button>
            </div>
        </div>
    )
}