'use client'
// import { useRouter } from "next/router";
import { redirect, RedirectType } from "next/navigation";

export default function CreateTodo() {

    // const router = useRouter(); 

    const createTodoFunction = async (event: any) => {
        event.preventDefault();
        const title = event.target[0].value;
        const description = event.target[1].value;
        console.log(title + " : " + description);

        const response = await fetch("/api/todo", {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                title,
                description
            })
        })
        if(!response.ok) {
            alert("Something went wrong");
        } else {
            event.target[0].value = "";
            event.target[1].value = "";
            redirect('/home', RedirectType.push);
        }

    }


    return(
        <div className="create-todo-container h-[80vh] flex justify-center items-center">
            <form className="create-todo-form w-110 bg-pink-100 px-6 py-4 rounded-lg text-lg" onSubmit={createTodoFunction}>
                <label htmlFor="Title" className="text-2xl">Title</label><br/>
                <input type="text" placeholder="Its your choice!" 
                    className="w-100 outline-0 border-l-3 border-l-pink-500 p-2 mb-4"
                /><br/>
                <label htmlFor="Description" className="text-2xl">Description</label><br></br>
                <textarea placeholder="Open up. We would love that" cols={40} rows={5} style={{resize: "none"}}
                    className="w-100 outline-0 border-l-3 border-l-pink-500 p-2 mb-4"
                ></textarea> <br></br>
                <input type="submit" value="Add" className="px-4 py-2 bg-blue-950 text-white rounded-full" />    
            </form>
        </div>
    )
}