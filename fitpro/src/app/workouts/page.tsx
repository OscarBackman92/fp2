'use client';

import { useState } from 'react';

import WorkoutForm from '../../components/WorkoutForm';

const WorkoutsPage = () => {
  const [workouts, setWorkouts] = useState<any[]>([]);

  const addWorkout = (workout: any) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Log Your Workout</h1>
      <WorkoutForm addWorkout={addWorkout} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Logged Workouts</h2>
        <ul>
          {workouts.map((workout, index) => (
            <li key={index} className="mb-2">
              {workout.exercise} - {workout.sets}x{workout.reps} @ {workout.weight}kg
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutsPage;
