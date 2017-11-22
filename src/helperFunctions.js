// Function that compares two tracks and returns -1 if A comes before B, +1 otherwise
export default function (A, B) {
  // Checking for priority
  if (A.priority) {
    if (!B.priority) return -1
  } else if (B.priority && !A.priority) return +1

  // By vote
  if (A.votes.count >= B.votes.count) return -1
  if (A.votes.count < B.votes.count) return +1

  // If we didn't enter any of the past cases ==> ordering by ID
  return A.id >= B.id ? -1 : +1
}
