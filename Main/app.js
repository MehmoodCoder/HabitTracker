// I'm a weak in js so, I write this code with help of Ai

let habits = JSON.parse(localStorage.getItem('habits')) || [];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let currentWeekOffset = 0;

function renderHabits() {
    let tableBody = document.getElementById('habitTableBody');
    let emptyState = document.getElementById('emptyState');
    let weekLabel = document.getElementById('weekLabel')
    
    if (currentWeekOffset === 0) {
        weekLabel.innerText = "Current Week";
    } else if (currentWeekOffset < 0) {
        weekLabel.innerText = currentWeekOffset + " Week Previous"
    } else {
        weekLabel.innerText = currentWeekOffset + " Week Next"
    }

    tableBody.innerHTML = '';
    
    if (habits.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
    }

    let today = new Date();
    let realDayIndex = today.getDay();
    let myDayIndex = realDayIndex === 0 ? 6 : realDayIndex - 1;
    let todayName = daysOfWeek[myDayIndex];

    for (let i = 0; i < habits.length; i++) {
        let habit = habits[i];
        
        let rowHtml = '<tr><td class="text-start fw-semibold">' + habit.name + '</td>';
        
        for (let j = 0; j < daysOfWeek.length; j++) {
            let day = daysOfWeek[j];
            let key = currentWeekOffset + '_' + day;
            
            let isChecked = '';
            if (habit.history[key] === true) {
                isChecked = 'checked';
            }
            
            let isTodayClass = '';
            if (day === todayName && currentWeekOffset === 0) {
                isTodayClass = 'today-highlight'
            }
            
            rowHtml += '<td class="' + isTodayClass + '">' +
                       '<input type="checkbox" class="form-check-input" ' + isChecked + ' onclick="toggleDay(' + i + ', \'' + day + '\')">' +
                       '</td>';
        }

        rowHtml += '<td class="fw-bold text-warning">' + habit.streak + ' </td>' +
                   '<td><button class="btn btn-danger btn-sm" onclick="deleteHabit(' + i + ')">Delete</button></td>' +
                   '</tr>';
        
        tableBody.innerHTML += rowHtml;
    }
}

function addHabit() {
    let input = document.getElementById('Input');
    let name = input.value.trim();
    
    if (name === '') {
        alert('Please enter a habit name!');
        return;
    }

    let newHabit = {
        name: name,
        history: {}, 
        streak: 0
    };

    habits.push(newHabit);
    
    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
    
    input.value = '';
}

function toggleDay(habitIndex, day) {
    let key = currentWeekOffset + '_' + day
    
    if (habits[habitIndex].history[key] === true) {
        habits[habitIndex].history[key] = false;
    } else {
        habits[habitIndex].history[key] = true;
    }
    
    let count = 0;
    for (let j = 0; j < daysOfWeek.length; j++) {
        let checkKey = currentWeekOffset + '_' + daysOfWeek[j];
        if (habits[habitIndex].history[checkKey] === true) {
            count++;
        }
    }
    habits[habitIndex].streak = count;

    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
}

function deleteHabit(index) {
    let check = confirm('Are you sure?');
    if (check === true) {
        habits.splice(index, 1);
        localStorage.setItem('habits', JSON.stringify(habits));
        renderHabits();
    }
}

function previousWeek() {
    currentWeekOffset = currentWeekOffset - 1;
    renderHabits();
}

function nextWeek() {
    currentWeekOffset = currentWeekOffset + 1;
    renderHabits();
}

window.onload = renderHabits;