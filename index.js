{"changed":true,"filter":false,"title":"index.js","tooltip":"/index.js","value":"var express = require('express');\nvar mysql = require('mysql');\nvar app = express();\n\nconsole.log(process.env.IP);\nconsole.log(process.env.PORT);\n\nvar connection = mysql.createConnection({\n    //propriedades...\n    host: process.env.IP,\n    user: 'root',\n    password: '',\n    database: 'c9'\n})\n\nfunction executaQuery(query){\n    connection.connect(function(error){\n        if(!!error){\n            console.log('error');\n        } else {\n            console.log('connected');\n        }\n    })\n    \n    //query\n    connection.query(query, function(error, rows, fields){\n        if(!!error){\n            console.log('Erro na query');\n        } else {\n            console.log('query bem sucedida');\n            console.log(rows);\n        }\n    });\n    \n    connection.end(function(error) {\n      // The connection is terminated gracefully\n      // Ensures all previously enqueued queries are still\n      // before sending a COM_QUIT packet to the MySQL server.\n    });\n    \n    process.exit();\n}\n","undoManager":{"mark":76,"position":100,"stack":[[{"start":{"row":35,"column":45},"end":{"row":35,"column":46},"action":"remove","lines":["\""],"id":452}],[{"start":{"row":35,"column":44},"end":{"row":35,"column":45},"action":"remove","lines":[" "],"id":472}],[{"start":{"row":35,"column":43},"end":{"row":35,"column":44},"action":"remove","lines":[","],"id":473}],[{"start":{"row":35,"column":42},"end":{"row":35,"column":43},"action":"remove","lines":["P"],"id":474}],[{"start":{"row":35,"column":41},"end":{"row":35,"column":42},"action":"remove","lines":["I"],"id":475}],[{"start":{"row":35,"column":40},"end":{"row":35,"column":41},"action":"remove","lines":["."],"id":476}],[{"start":{"row":35,"column":39},"end":{"row":35,"column":40},"action":"remove","lines":["v"],"id":477}],[{"start":{"row":35,"column":38},"end":{"row":35,"column":39},"action":"remove","lines":["n"],"id":478}],[{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"remove","lines":["e"],"id":479}],[{"start":{"row":35,"column":36},"end":{"row":35,"column":37},"action":"remove","lines":["."],"id":480}],[{"start":{"row":35,"column":35},"end":{"row":35,"column":36},"action":"remove","lines":["s"],"id":481}],[{"start":{"row":35,"column":34},"end":{"row":35,"column":35},"action":"remove","lines":["s"],"id":482}],[{"start":{"row":35,"column":33},"end":{"row":35,"column":34},"action":"remove","lines":["e"],"id":483}],[{"start":{"row":35,"column":32},"end":{"row":35,"column":33},"action":"remove","lines":["c"],"id":484}],[{"start":{"row":35,"column":31},"end":{"row":35,"column":32},"action":"remove","lines":["o"],"id":485}],[{"start":{"row":35,"column":30},"end":{"row":35,"column":31},"action":"remove","lines":["r"],"id":486}],[{"start":{"row":35,"column":29},"end":{"row":35,"column":30},"action":"remove","lines":["p"],"id":487}],[{"start":{"row":35,"column":28},"end":{"row":35,"column":29},"action":"remove","lines":[" "],"id":488}],[{"start":{"row":35,"column":27},"end":{"row":35,"column":28},"action":"remove","lines":[","],"id":489}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":29},"action":"remove","lines":["","app.listen(process.env.PORT);"],"id":490},{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":491}],[{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"remove","lines":["",""],"id":492}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"remove","lines":["",""],"id":493}],[{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"remove","lines":["",""],"id":494}],[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":495}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["f"],"id":496}],[{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["u"],"id":497}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["n"],"id":498}],[{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["t"],"id":499}],[{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["i"],"id":500}],[{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["o"],"id":501}],[{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["n"],"id":502}],[{"start":{"row":15,"column":7},"end":{"row":15,"column":9},"action":"insert","lines":["()"],"id":503}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["c"],"id":504}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":["c"],"id":505}],[{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["c"],"id":506}],[{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":[" "],"id":507}],[{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["e"],"id":508}],[{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["x"],"id":509}],[{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["e"],"id":510}],[{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["c"],"id":511}],[{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["u"],"id":512}],[{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["t"],"id":513}],[{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":["e"],"id":514}],[{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"insert","lines":["Q"],"id":515}],[{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"insert","lines":["u"],"id":516}],[{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"insert","lines":["e"],"id":517}],[{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["r"],"id":518}],[{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"insert","lines":["y"],"id":519}],[{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"insert","lines":["{"],"id":520}],[{"start":{"row":15,"column":24},"end":{"row":15,"column":25},"action":"insert","lines":["}"],"id":521}],[{"start":{"row":15,"column":24},"end":{"row":17,"column":0},"action":"insert","lines":["","    ",""],"id":522}],[{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":["q"],"id":523}],[{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"insert","lines":["u"],"id":524}],[{"start":{"row":15,"column":24},"end":{"row":15,"column":25},"action":"insert","lines":["e"],"id":525}],[{"start":{"row":15,"column":25},"end":{"row":15,"column":26},"action":"insert","lines":["r"],"id":526}],[{"start":{"row":15,"column":26},"end":{"row":15,"column":27},"action":"insert","lines":["y"],"id":527}],[{"start":{"row":18,"column":0},"end":{"row":44,"column":3},"action":"remove","lines":["connection.connect(function(error){","    if(!!error){","        console.log('error');","    } else {","        console.log('connected');","    }","})","","","//query","connection.query(\"SELECT * FROM usuarios\", function(error, rows, fields){","    if(!!error){","        console.log('Erro na query');","    } else {","        console.log('query bem sucedida');","        console.log(rows);","    }","});","","","","","connection.end(function(error) {","  // The connection is terminated gracefully","  // Ensures all previously enqueued queries are still","  // before sending a COM_QUIT packet to the MySQL server.","});"],"id":528}],[{"start":{"row":16,"column":4},"end":{"row":42,"column":3},"action":"insert","lines":["connection.connect(function(error){","    if(!!error){","        console.log('error');","    } else {","        console.log('connected');","    }","})","","","//query","connection.query(\"SELECT * FROM usuarios\", function(error, rows, fields){","    if(!!error){","        console.log('Erro na query');","    } else {","        console.log('query bem sucedida');","        console.log(rows);","    }","});","","","","","connection.end(function(error) {","  // The connection is terminated gracefully","  // Ensures all previously enqueued queries are still","  // before sending a COM_QUIT packet to the MySQL server.","});"],"id":529}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "],"id":530},{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"insert","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"insert","lines":["    "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"insert","lines":["    "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"insert","lines":["    "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"insert","lines":["    "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"insert","lines":["    "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":4},"action":"insert","lines":["    "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"insert","lines":["    "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"insert","lines":["    "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"insert","lines":["    "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":4},"action":"remove","lines":["    "],"id":531}],[{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"remove","lines":["e"],"id":532}],[{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":["a"],"id":533}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":45},"action":"remove","lines":["\"SELECT * FROM usuarios\""],"id":534},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["q"]}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["u"],"id":535}],[{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["e"],"id":536}],[{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["r"],"id":537}],[{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["y"],"id":538}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["    "],"id":539}],[{"start":{"row":36,"column":4},"end":{"row":37,"column":0},"action":"remove","lines":["",""],"id":540}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "],"id":541}],[{"start":{"row":35,"column":4},"end":{"row":36,"column":0},"action":"remove","lines":["",""],"id":542}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "],"id":543}],[{"start":{"row":34,"column":4},"end":{"row":35,"column":0},"action":"remove","lines":["",""],"id":544}],[{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["    "],"id":545}],[{"start":{"row":23,"column":4},"end":{"row":24,"column":0},"action":"remove","lines":["",""],"id":546}],[{"start":{"row":16,"column":4},"end":{"row":16,"column":8},"action":"remove","lines":["    "],"id":547}],[{"start":{"row":38,"column":7},"end":{"row":39,"column":0},"action":"insert","lines":["",""],"id":548},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":39,"column":4},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":549},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":40,"column":4},"end":{"row":40,"column":5},"action":"insert","lines":["p"],"id":550}],[{"start":{"row":40,"column":5},"end":{"row":40,"column":6},"action":"insert","lines":["r"],"id":551}],[{"start":{"row":40,"column":6},"end":{"row":40,"column":7},"action":"insert","lines":["o"],"id":552}],[{"start":{"row":40,"column":7},"end":{"row":40,"column":8},"action":"insert","lines":["c"],"id":553}],[{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["e"],"id":554}],[{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["s"],"id":555}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["s"],"id":556}],[{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["."],"id":557}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["e"],"id":558}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["n"],"id":559}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":["d"],"id":560}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"remove","lines":["d"],"id":561}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"remove","lines":["n"],"id":562}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"remove","lines":["e"],"id":563}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["e"],"id":564}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["c"],"id":565}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"remove","lines":["c"],"id":566}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["x"],"id":567}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":["i"],"id":568}],[{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":["t"],"id":569}],[{"start":{"row":40,"column":16},"end":{"row":40,"column":18},"action":"insert","lines":["()"],"id":570}],[{"start":{"row":40,"column":18},"end":{"row":40,"column":19},"action":"insert","lines":[";"],"id":571}]]},"ace":{"folds":[],"scrolltop":509.5,"scrollleft":0,"selection":{"start":{"row":42,"column":0},"end":{"row":42,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":28,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1469986114856}