const student = {
    name: 'shawmitra',
    sub: "cse",
    year: 2,
    subjects: ['ds', 'os', 'dbms', 'dld'],
    exam: function () {
        console.log(this.name);
    },
    improveExam: function (subjects) {
        console.log(this.exam());
    }
}
student.exam();
student.improveExam();