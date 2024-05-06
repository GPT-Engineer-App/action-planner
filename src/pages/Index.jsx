import React, { useState } from "react";
import { Box, Heading, Input, Button, VStack, HStack, Text, IconButton, Checkbox } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <Heading mb={6}>Todo App</Heading>
      <VStack spacing={4}>
        <HStack>
          <Input placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
          <Button colorScheme="blue" onClick={handleAddTask}>
            Add
          </Button>
        </HStack>
        <VStack spacing={2} align="stretch" w="full">
          {tasks.map((task) => (
            <HStack key={task.id} bg={task.completed ? "green.100" : "gray.100"} p={2} borderRadius="md" justify="space-between" align="center">
              <Checkbox isChecked={task.completed} onChange={() => handleToggleTask(task.id)}>
                <Text as={task.completed ? "del" : "span"} fontSize="lg" fontWeight="semibold">
                  {task.text}
                </Text>
              </Checkbox>
              <IconButton icon={<FaTrash />} aria-label="Delete Task" colorScheme="red" onClick={() => handleDeleteTask(task.id)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
