import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//👇🏻 At the top of the TasksContainer.js file
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Socket, socket } from "socket.io-client";

const TasksContainer = () => {
    const [tasks, setTasks] = useState({});

    useEffect(() => {
        function fetchTasks() {
            fetch("http://localhost:4000/api")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setTasks(data);
                });
        }
        fetchTasks();
    }, []);
    const handleDragEnd = ({ destination, source }) => {
        if (!destination) return;
        if (
            destination.index === source.index &&
            destination.droppableId === source.droppableId
        )
            return;
    
        Socket.emit("taskDragged", {
            source,
            destination,
        });
    };
    const trainerMap = tasks?.map((data) => {
        return (
          <div className="">
        <p>{data?.id}</p>
          </div>
        );
      });
    
    return (
        <div className='container'>
            
        </div>
    );
};

export default TasksContainer;