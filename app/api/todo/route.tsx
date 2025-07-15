import { NextRequest, NextResponse } from "next/server";

type Todo = {
    title : string,
    description: string,
    createdOn?: Date,
    updatedOn?: Date,
}

export async function POST(request: NextRequest) {
    const body: Todo = await request.json();
    console.log(body)
    if(body != null) {
        return NextResponse.json({data: "Data reached", status: 200})
    } else {
        return NextResponse.json({data: "Data not received!", status: 500})
    }
}

export function GET() {
    return NextResponse.json({data: "This is an API in NextJS", status: 200})    
}