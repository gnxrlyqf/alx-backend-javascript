export default function getListStudentIds(students) {
  if (students instanceof Array) return students.map((s) => s.id);
  return [];
}
