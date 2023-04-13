export const fetchDevelopers = async()=> {
    const res = await fetch('http://localhost:5000/developers')
    const data = await res.json()
    return data
}
export const fetchAgents = async()=> {
    const res = await fetch('http://localhost:5000/agents')
    const data = await res.json()
    return data
}
export const fetchTickets = async()=> {
    const res = await fetch('http://localhost:5000/tickets')
    const data = await res.json()
    return data
}
export const fetchChats = async()=> {
    const res = await fetch('http://localhost:5000/chats')
    const data = await res.json()
    return data
}

export const fetchDeveloper = async(id)=> {
    const res = await fetch(`http://localhost:5000/developers/${id}`)
    const data = await res.json()
    return data
}
export const fetchTicket = async(id)=> {
    const res = await fetch(`http://localhost:5000/tickets/${id}`)
    const data = await res.json()
    return data
}
export const fetchAgent = async(id)=> {
    const res = await fetch(`http://localhost:5000/agents/${id}`)
    const data = await res.json()
    return data
}

export const fetchAgentOpenTickets = async(id)=> {
    const res = await fetch('http://localhost:5000/tickets')
    const data = await res.json()
    const agentOpenedTickets = data.filter(ticket=>ticket.agent.id===id)
    return agentOpenedTickets
}