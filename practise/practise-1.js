const obj = {
    name: "shawmitra",
    age: 21,
    student: true,
    subject: function () {
        return subj = ['bangla', 'engilish', 'math', 'science']

    },
    subjectName: function () {
        console.log(this.subject());
    }


}
obj.subjectName();

