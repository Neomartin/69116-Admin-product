function formatTimestampToDate(fecha) {

    const collator = new Intl.DateTimeFormat("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })

    return collator.format(fecha)


    // const dateObject = new Date(fecha)

    // const year = dateObject.getFullYear();

    // let month = dateObject.getMonth() + 1; 

    // if(month < 10) {
    //     month = "0" + month
    // }

    // const day = dateObject.getDate();

    // return `${day}/${month}/${year}`

}
