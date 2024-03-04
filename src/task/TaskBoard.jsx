
import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";


const TaskBoard = () => {
    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': 'Learn React',
        'description': 'I want to learn react for getting a good job',
        'tags': ['web', 'app'],
        'priority': 'Low',
        'isFaborite': false,
    }
    const [tasks, setTasks] = useState([defaultTask]);
    const [modal, setModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);
    function addTask(newTask,isAdd) {
        if (isAdd) {
            setTasks([...tasks,newTask]);
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            );
        }
        handleClose()
    }
    function handleEdit(task){
        setTaskToUpdate(task)
        setModal(true)
    }
    function handleClose(){
        setTaskToUpdate(null)
        setModal(false)
    }
    function handleDeleteTask(taskId){
       const afterDeletTask=tasks.filter(task=>task.id!==taskId);
       setTasks(afterDeletTask)
    }
    function handleDeleteAll(){
        tasks.length=0;
        setTasks([...tasks])
    }
    function handleFaborite(taskId){
        const taskIndex=tasks.findIndex(task=>task.id===taskId)
        const newTasks=[...tasks]
        newTasks[taskIndex].isFaborite=! newTasks[taskIndex].isFaborite
        setTasks(newTasks)
    }
    function handleSearch(searchTask){
        const filtered=tasks.filter(task=>
            task.title.toLowerCase().includes(searchTask.toLowerCase())
            )
            setTasks([...filtered])
            
    }
    return (
        <div>
            <section className="mb-20" id="tasks">
                {modal && <AddTaskModal onSave={addTask} taskToUpdate={taskToUpdate}  handleClose={handleClose}/>}
                <div className="container">
                    <SearchTask onSearch={handleSearch} />
                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <TaskActions handleAddTask={()=>setModal(true)} onDeleteAll={handleDeleteAll} />
                       {tasks.length>0? (<TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDeleteTask} onFav={handleFaborite}/> ):(<NoTaskFound/>)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TaskBoard;