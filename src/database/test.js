const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: 'Diego Fernandes',
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp: '40028922',
        bio: 'Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    }

    classValue = {
        subject: 'Química',
        cost: '20,00',
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectedClassesAndProffys)

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "1000"
    `)

    // console.log(selectedClassesSchedules)
})