export default function getStudentIdsSum(students) {
  if (students instanceof Array) return students.reduce((acc, s) => acc + s.id, 0);
  return 0;
}
