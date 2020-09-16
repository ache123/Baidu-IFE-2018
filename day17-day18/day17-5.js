{
    let result = "";
    for (let n = 1; n <= 9; n++){
        for ( let m = n; m <= 9; m++){
            result = result + `${ n } * ${ m } = ${ n*m }    `;
        }
        result = result + `\n`;
    }
    console.log(result);
}