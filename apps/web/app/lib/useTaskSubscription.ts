import { useEffect } from "react";
import { supabase } from "./supabase";
import { mutate } from "swr";

export function useTaskSubscription() {
    useEffect(() => {
    const sub = supabase
        .channel('tasks')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'Task' }, payload => {
            console.log('Cambio en tarea', payload)
            mutate('tasks')
        })
        .subscribe()

    return () => {
        supabase.removeChannel(sub)
    }
}, []);
}



