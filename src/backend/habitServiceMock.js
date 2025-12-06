// This is a mockup for habits backend
// it doesnt conflict with anything that celine will be doing i.e firestore, you can use this as a baseline

// local in mem list
let habits = [];

function makeId() {
  return Math.random().toString(36).substring(2, 9);
}

// getting all habits for the user
export async function getHabitsMock(userId) {
  return habits.filter(h => h.userId === userId);
}

// making a habit
export async function createHabitMock(userId, name, schedule = "daily", reminderEnabled = false) {
  const habit = {
    id: makeId(),
    userId,
    name,
    schedule,
    reminderEnabled,
    completedDates: []
  };
  habits.push(habit);
  return habit;
}

// deleting a habit
export async function deleteHabitMock(habitId) {
  habits = habits.filter(h => h.id !== habitId);
}

// marking as finished
export async function markHabitCompletedMock(habitId, date) {
  const habit = habits.find(h => h.id === habitId);
  if (!habit) return;
  if (!habit.completedDates.includes(date)) {
    habit.completedDates.push(date);
  }
  return habit;
}
