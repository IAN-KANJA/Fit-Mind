import React, {useState} from "react";

function MindExercise(){
  const [name, setName] = useState('')
  const [description, setDescription] = useState('');
  const [difficulty , setDifficulty] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const MindExerciseData = {
      name: name,
      description: description,
      difficulty: difficulty,
      duration: duration,

    }
  }
}