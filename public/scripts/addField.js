document.querySelector('#add-time')
.addEventListener('click', cloneField)

function cloneField() {
    const fieldContainer = document.querySelectorAll('.schedule-item')
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)
    const fields = newField.querySelectorAll('input')

    let fieldIsNotEmpty

    fields.forEach(field => {
        if(!field.value) 
            fieldIsNotEmpty = true
            field.value = ''
    })

    if(fieldIsNotEmpty)
        return false

    document.querySelector('#schedule-items').appendChild(newField)
}