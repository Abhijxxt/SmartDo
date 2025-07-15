export default function Todo(id:number, title:string, description:string) {
    return(
        <div key={id}>
            <h5>Todo</h5>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
        </div>
    )
}