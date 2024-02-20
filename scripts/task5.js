const container = document.getElementById('container');
const btn = document.getElementById('btn');
const newGradeBtn = document.getElementById('new_grade');
const input = document.getElementById('input');

function getInfoMessage(person) {
    let message = `ФИО: ${person.lastName} ${person.firstName} ${person.middleName}<br>`
    message += `Год рождения: ${person.yearOfBirth}<br>`
    message += `Класс: ${person.grade}<br>`
    message += `Любимые предметы: ${(person.favoriteSubjects).join(', ')}<br><br>`

    return message
}

function getLivingInfo(registration, living) {
    let message = `Место прописки: ${registration.country}, г. ${registration.city}, ул. ${registration.street}, д. ${registration.building}, кв. ${registration.apartments}<br>`
    message += `Фактическое место проживания: `
    if (registration == living) {
        message += `совпадает с местом регистрации`
        return message
    }

    message += `${living.country}, г. ${living.city}, ул. ${living.street}, д. ${living.building}, кв. ${living.apartments}<br>`
    return message
}

const placeOfRegistration = {
    country: 'Россия',
    city: 'Кемерово',
    street: 'Красная',
    building: 12,
    apartments: 46
}

const placeOfLiving = placeOfRegistration

const student = {
    lastName: "Перетятько",
    firstName: "Никита",
    middleName: "Валерьевич",
    yearOfBirth: 2010,
    grade: 7,
    lastGrade: 11,
    favoriteSubjects: [
        'Математика', 'Русский язык', 'Информатика'
    ],
    placeOfRegistration: placeOfRegistration,
    placeOfLiving: placeOfLiving,
    displayInfo() {
        const studentInfo = getInfoMessage(this)
        const livingInfo = getLivingInfo(this.placeOfRegistration, this.placeOfLiving)
        const message = studentInfo + livingInfo
        container.innerHTML = message
    },
    validateYearOfBirth(year) {
        if (isNaN(year)) {
            return alert('Неверный ввод')
        }
        const now = new Date()
        console.log(now.getFullYear() - year)
        if (0 <= now.getFullYear() - year && now.getFullYear() - year <= 200) {
            this.yearOfBirth = year;
            this.displayInfo()
        } else {
            alert('Неверный год')
        }
    },
    goToNextGrade() {
        if (this.grade == this.lastGrade) {
            return alert('Достигнут максимальный класс')
        }
        this.grade += 1
        this.displayInfo()
    }
}

student.displayInfo()

btn.addEventListener('click', () => {
    student.validateYearOfBirth(input.value)
})

newGradeBtn.addEventListener('click', () => {
    student.goToNextGrade()
})
