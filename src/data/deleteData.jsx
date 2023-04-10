export const deleteTicket= async (id)=>{
    const res = await fetch(`http://localhost:5000/tickets/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
    })
    const data = await res.json()
    return data
}

export const deleteAgent= async (id)=>{
    const res = await fetch(`http://localhost:5000/agents/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
    })
    const data = await res.json()
    return data
}

export const deleteDevelopers= async (id)=>{
    const res = await fetch(`http://localhost:5000/developers/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
    })
    const data = await res.json()
    return data
}