function factorial(){

                                //sin el value, quiere decir que se esta tomando todo el espacio
                                //con el value se toma el valor q ahí en ese espacio
    let n = parseInt(document.getElementById('n').value);
    let factorial = 1;
    let i = 2;

    while(i <= n){
        factorial = factorial * i;
        i++;
    }

    return factorial;
}