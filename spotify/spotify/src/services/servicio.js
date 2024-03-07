//Consumiendo APIS

//1. Declarar una variable
//para almacenar la UREL del API

let url="https://api.spotify.com/v1/artists/4aJzQA930qk1ZLTxZDllh6/top-tracks?market=US"



//2. Almacenar en una variable
//o en varias variables datos de control
//que se necesitan en el API

let token ="Bearer BQAH_dWV8NRwFUxqEwFDFACe9qikdWWOE-XC32jLNIrf3Zqrcxv0NGSHyiJKNUvxOoltILqvePJrS7h7qSqYN002sJ4B2pGAq00aYqxKMzAvYswNaWU"



//3. Construir la peticion que se va enviar

let peticion={

    method: "GET",
    headers:{

        Authorization:token

    }

}




//4.  Ejecutar el consumo del API


fetch(url, peticion)
.then(function(){})
.then(function(){})
.catch(function(){})