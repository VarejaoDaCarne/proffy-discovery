document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField() {
    const schedule = document.querySelectorAll('.schedule-item')
    const newSchedule = schedule[schedule.length - 1].cloneNode(true)
    const fields = newSchedule.querySelectorAll('input')

    let fieldIsNotEmpty

    fields.forEach(field => {
        if(!field.value) 
            fieldIsNotEmpty = true
            field.value = ''
    })

    if(fieldIsNotEmpty)
        return false

        if (schedule.length < 2) {
            const div = document.createElement('div')
            const image = document.createElement('img')
    
            div.classList.add('input-block' , 'delete')
            image.src = 'images/icons/clear.svg'
            image.alt = "Apagar schedule"
            image.onclick = deleteSchedule
            div.appendChild(image)
    
            newSchedule.appendChild(div)
        } else {
            newSchedule.querySelector(".input-block.delete img").onclick = deleteSchedule
        }
    
    document.querySelector('#schedule-items').appendChild(newSchedule)
}

function deleteSchedule(event) {
    const schedule = document.querySelectorAll('.schedule-item')
    const scheduleItem = event.target.parentElement.parentElement

    if(schedule.length !== 1) {
        scheduleItem.remove()
    }
}