const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        return this.name + ' is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

