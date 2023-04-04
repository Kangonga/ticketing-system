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