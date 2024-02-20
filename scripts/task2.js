let schedule;
const container = document.getElementById('container');

const buttons = document.getElementsByClassName('button')

async function loadJson() {
    try {
        const response = await fetch('./src/schedule.json');
        if (!response.ok) {
            console.log(`Ошибка фетча: ${response.status} ${response.statusText}`);
            return; 
        }
        schedule = await response.json();
        console.log(schedule);
    } catch (error) {
        console.error('Ошибка: ', error);
    }
}

loadJson();

function getDayOfWeek(id) {
    const days = {
        "mon": "Понедельник",
        "tue": "Вторник",
        "wed": "Среда",
        "thu": "Четверг",
        "fri": "Пятница",
        "sat": "Суббота",
        "sun": "Воскресенье"
    };

    return days[id] || "День не найден";
}

function displaySchedule(event) {
    const btnId = event.target.id;
    container.innerHTML = ''
    const dayOfWeek = document.createElement('h1')
    dayOfWeek.textContent = getDayOfWeek(btnId)
    console.log(schedule[btnId])
    container.appendChild(dayOfWeek)

    let content = schedule[btnId]

    if (content == 'Выходной') {
        const row = document.createElement('p')
        row.textContent = content
        return container.appendChild(row)
    }

    for(let i = 0; i <= content.length; i++) {
        const time = content[i]['Время']
        const subject = content[i]['Предмет']
        const teacher = content[i]['Преподаватель']

        const rowWithTime = document.createElement('p')
        const rowWithSubject = document.createElement('p')
        const rowWithTeacher = document.createElement('p')
        const lineSplitter = document.createElement('br')
        rowWithTime.textContent = `Время: ${time}`
        rowWithSubject.textContent = `Предмет: ${subject}`
        rowWithTeacher.textContent = `Преподаватель: ${teacher}`

        container.appendChild(rowWithTime)
        container.appendChild(rowWithSubject)
        container.appendChild(rowWithTeacher)
        container.appendChild(lineSplitter)
    }
}

for (let button of buttons) {
    button.addEventListener('click', displaySchedule);
}