import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/prisma/client";

const todo_schema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

// enum Status {
//     INCOMPLETE,
//     COMPLETE
// }
// type Todo = {
//     id: number,
//     title : string,
//     description: string,
//     status?: Status,
//     createdAt?: Date,
//     updatedAt?: Date,
// }

export async function POST(request: NextRequest) {
    console.log("Called");
    const body = await request.json();
    const validated_body = todo_schema.safeParse(body);
    // BAD REQUEST
    if(!validated_body.success) {
        return NextResponse.json(validated_body.error, {status: 400})
    }
    // GOOD REQUEST
    const newTodo = await prisma.todo.create({
        data: {
            title: body.title,
            description: body.description
        }
    });

    return NextResponse.json(newTodo, {status: 201})

}

export async function GET() {

    const data = await prisma.todo.findMany(); 

    return NextResponse.json(data,{status: 200})    
}

export async function PATCH(request: NextRequest) {
    console.log("HERE")
    const body = await request.json();
    console.log(body.id + " : " + body.status)
    const updateTodo = await prisma.todo.update({
        where: {
            id: body.id
        },
        data: {
            status: body.status
        }
    })
    return NextResponse.json(updateTodo, {status: 200});
}

export async function DELETE(request: NextRequest) {
    const body = await request.json();
    console.log(body.id)
    const deleteTodo = await prisma.todo.delete({
        where: {
            id: body.id
        }
    })
    return NextResponse.json(deleteTodo, {status: 200})
}