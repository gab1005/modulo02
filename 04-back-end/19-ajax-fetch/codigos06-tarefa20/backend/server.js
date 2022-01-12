const express = require("express");
const cors = require("cors");
const app = express();

//configuração do cors para permitir troca de informações em url's semelhantes
const configCors = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(configCors))

const clientes = [
    {
        "id": 1,
        "name": "Antonio",
        "email": "asawfoot0@arstechnica.com"
    }, {
        "id": 2,
        "name": "Daffi",
        "email": "dgadsden1@addtoany.com"
    }, {
        "id": 3,
        "name": "Colin",
        "email": "cmcisaac2@usa.gov"
    }, {
        "id": 4,
        "name": "Frederique",
        "email": "fwanden3@vinaora.com"
    }, {
        "id": 5,
        "name": "Gunner",
        "email": "gmerdew4@so-net.ne.jp"
    }, {
        "id": 6,
        "name": "Patty",
        "email": "phaversham5@nymag.com"
    }, {
        "id": 7,
        "name": "Zsa zsa",
        "email": "zfogt6@ifeng.com"
    }, {
        "id": 8,
        "name": "Hayward",
        "email": "hrawles7@accuweather.com"
    }, {
        "id": 9,
        "name": "Reamonn",
        "email": "rfarny8@meetup.com"
    }, {
        "id": 10,
        "name": "Hayden",
        "email": "hstucksbury9@telegraph.co.uk"
    }, {
        "id": 11,
        "name": "Culver",
        "email": "cimminsa@livejournal.com"
    }, {
        "id": 12,
        "name": "Marley",
        "email": "misakowiczb@twitpic.com"
    }, {
        "id": 13,
        "name": "Tripp",
        "email": "thouldinc@indiegogo.com"
    }, {
        "id": 14,
        "name": "Herb",
        "email": "hdybled@nationalgeographic.com"
    }, {
        "id": 15,
        "name": "Janaye",
        "email": "jbromeheade@dell.com"
    }, {
        "id": 16,
        "name": "Lucio",
        "email": "lsidebottonf@ca.gov"
    }, {
        "id": 17,
        "name": "Inglis",
        "email": "isherborng@sohu.com"
    }, {
        "id": 18,
        "name": "Avie",
        "email": "aconnahh@smugmug.com"
    }, {
        "id": 19,
        "name": "Jacquenette",
        "email": "jlococki@hexun.com"
    }, {
        "id": 20,
        "name": "Carri",
        "email": "cmclarenj@omniture.com"
    }]

app.get("/", (req, res) => {
    res.send(clientes);
});

app.get("/:idRecebido", (req, res) => {
    const idReq = req.params.idRecebido;

    if (idReq == "") {
        res.send(clientes);
    }
    else {
        const resServidor = clientes.filter(elemento => elemento.id == idReq);
        res.send(resServidor);
    }
});

app.listen(8080);
