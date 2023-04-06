export const postTickets = async (formdata)=>{
    const res = await fetch('http://localhost:5000/tickets', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    })
    const data = await res.json()
    return data
}
export const postTicket= async (formdata,id)=>{
    const res = await fetch(`http://localhost:5000/tickets/${id}`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    })
    const data = await res.json()
    return data
}

export const postDeveloper = async (formdata)=>{
    const res = await fetch('http://localhost:5000/developers', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    })
    const data = await res.json()
    return data
}

export const postAgents = async (formdata)=>{
    const res = await fetch('http://localhost:5000/agents', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    })
    const data = await res.json()
    return data
}
export const postChats = async(formdata,chatID)=> {
    const res = await fetch(`http://localhost:5000/}`, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({...formdata, })
    })
    const data = await res.json()
    return data
}