import { useState } from 'react';

const WorkoutForm = () => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you would send the data to your backend or store it locally
    console.log({ exercise, sets, reps, weight });

    // Reset the form fields after submission
    setExercise('');
    setSets('');
    setReps('');
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Exercise:</label>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block">Sets:</label>
        <input
          type="text"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block">Reps:</label>
        <input
          type="text"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block">Weight (kg):</label>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 w-full">Log Workout</button>
    </form>
  );
};

export default WorkoutForm;
