import { fetchAgents, fetchDevelopers } from "../../../data/data";

export const devRows = fetchDevelopers()
export const agentRows = fetchAgents()