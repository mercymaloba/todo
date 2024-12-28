"use client";
import {
  Button,
  Card,
  CardContent,
  Input,
  Stack,
  Typography,
} from "@mui/material";
// import React, { useState } from "react";
// import {
//   Button,
//   Card,
//   CardContent,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { v4 as uuidv4 } from "uuid";

// type TaskType = {
//   id: string | null;
//   text: string;
// };
// interface TaskProps {
//   task: TaskType;
//   updateTask: (id: string | null, newText: string) => void;
//   saveTask: (id: string | null) => void;
// }

// export default function TodoApp() {
//   const [tasks, setTasks] = useState<TaskType[]>([]);

//   const addTask = () => {
//     const newTask: TaskType = {
//       id: null,
//       text: "",
//     };
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   };

//   const updateTask = (id: string | null, newText: string) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id || task.id === null ? { ...task, text: newText } : task
//       )
//     );
//   };

//   const saveTask = (id: string | null) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id || task.id === null
//           ? { ...task, id: uuidv4().slice(0, 8) }
//           : task
//       )
//     );
//   };
//   return (
//     <>
//       <Stack sx={{ gap: 2 }}>

//           {tasks.map((task, index) => (
//             <Task
//               key={index}
//               task={task}
//               updateTask={(id, newText) => updateTask(id, newText)}
//               saveTask={(id) => saveTask(id)}
//             />
//           ))}

//         <AddTask addTask={addTask} />
//       </Stack>
//     </>
//   );
// }

// export function Task({ task, updateTask, saveTask }: TaskProps) {
//   const [isSaved, setIsSaved] = useState(false);

//   const handleInputSubmit = () => {
//     if (task.text) {
//       saveTask(task.id);
//       setIsSaved(true);
//     }
//     console.log(handleInputSubmit, "sdsdsfsfsf");
//   };

//   return (
//     <>
//       <Card sx={{ width: 250 }}>
//         <CardContent>
//           {isSaved && task.id && (
//             <Typography sx={{ fontWeight: 600 }}>{task.id}</Typography>
//           )}
//           {isSaved ? (
//             <Typography>{task.text}</Typography>
//           ) : (
//             <TextField
//               value={task.text}
//               variant="standard"
//               onChange={(e) => updateTask(task.id, e.target.value)}
//               onBlur={handleInputSubmit}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleInputSubmit();
//                 }
//               }}
//             />
//           )}
//         </CardContent>
//       </Card>
//     </>
//   );
// }

// export function AddTask({ addTask }: { addTask: () => void }) {
//   return (
//     <Button variant="contained" sx={{ width: 110 }} onClick={addTask}>
//       Add Task
//     </Button>
//   );
// }
import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [submittedTask, setSubmittedTask] = useState("");
  const [displayTask, setDisplayTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSubmittedTask(task);
      setTask("");
    }
  };

  const handleBlur = () => {
    setSubmittedTask(task);
    setTask("");
  };

  const handleClick = () => {
    setDisplayTask(true);
    setTasks([]);
  };

  return (
    <Stack sx={{ width: 250 }}>
      {displayTask && (
        <Stack sx={{ marginTop: "5%" }}>
          <Card>
            <CardContent>
              <Typography>Id:1234</Typography>
              {submittedTask && (
                <Typography sx={{ color: "red" }}>{submittedTask}</Typography>
              )}
              <Input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                disableUnderline
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
              />
            </CardContent>
          </Card>
        </Stack>
      )}
      <Stack sx={{ marginTop: "2%", width: "50%" }}>
        <Button variant="contained" size="small" onClick={handleClick}>
          Add task{tasks}/check this part out
        </Button>
      </Stack>
    </Stack>
  );
};

export default TodoApp;
