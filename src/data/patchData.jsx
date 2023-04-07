export const patchTicket= async (formdata,id)=>{
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

export const patchAgent= async (formdata,id)=>{
    const res = await fetch(`http://localhost:5000/agents/${id}`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    })
    const data = await res.json()
    return data
}

export const patchDevelopers= async (formdata,id)=>{
    const res = await fetch(`http://localhost:5000/developers/${id}`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
    })
    const data = await res.json()
    return data
}