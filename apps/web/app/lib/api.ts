export async function getTasks() {
    const res = await fetch("http://localhost:3001/tasks")
    return res.json()
}
