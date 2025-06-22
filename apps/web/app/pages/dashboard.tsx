
import useSWR from 'swr'
import { format } from 'date-fns'

interface Task {
    id: number
    title: string
    description: string
    date: string
}

const getTasks = async (): Promise<Task[]> => {
    const res = await fetch('/api/tasks')
    if (!res.ok) throw new Error('Error al cargar las tareas')
        return res.json()
}

function Dashboard() {
const { data: tasks } = useSWR<Task[]>("tasks", getTasks)

return (
    <div className="grid gap-4">
    {tasks?.map((task: Task) => (
        <div key={task.id} className="p-4 bg-white rounded shadow">
            <h2 className="font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p className="text-sm text-gray-500">{format(new Date(task.date), 'PPP')}</p>
        </div>
        ))}
    </div>
    )
}

export default Dashboard
