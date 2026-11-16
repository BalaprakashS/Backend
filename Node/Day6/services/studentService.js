
let students = [];
let nextId = 1;

// Create student
export const createStudent = (data) => {
    const student = {
        id: nextId++,
        name: data.name,
        email: data.email,
        age: data.age,
        course: data.course
    };

    students.push(student);
    return student;
};

// Get all students
export const getAllStudents = () => {
    return students;
};

// Update student
export const updateStudent = (id, data) => {
    const student = students.find(s => s.id === Number(id));

    if (!student) {
        return null;
    }

    Object.assign(student, data);
    return student;
};

// Delete student
export const deleteStudent = (id) => {
    const index = students.findIndex(s => s.id === Number(id));

    if (index === -1) {
        return null;
    }

    return students.splice(index, 1)[0];
};
