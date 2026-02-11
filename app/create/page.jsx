"use client"

import {useState} from 'react'
import {useRouter} from 'next/navigation'

export default function CreateTask(){
    const [title, setTitle] = useState('')
    const router = useRouter()

    function handleSubmit(){

    }
    
    return(
        <div>
            <h1>Create Task</h1>
            <form onSubmit={handleSubmit}>
                <input  type='text' 
                        placeholder='Task Title'
                        value={title} 
                        onChange={e=>setTitle(e.target.value)} />
                <button type='submit'>Create Task</button>
            </form>
        </div>
    )
}
