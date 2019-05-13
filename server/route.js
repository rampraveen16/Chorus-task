const express = require('express');
const router = express.Router();
const https = require("https");
const url = require('url');  
const querystring = require('querystring');
var convert = require('xml-js');

router.get('/',(req,res)=>{
    //console.log(res)

    let parsedUrl = url.parse(req.url); 
    let parsedQs = querystring.parse(parsedUrl.query);
    let id = parsedQs.id;
    var host = {
        a: `https://static.chorus.ai/api/${id}.json`
    }
    function IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
    https.get(host.a, (http_res) => {
                var data = '';
                
                http_res.on('data', (chunk) => {
                    data += chunk;
                });
                http_res.on('end', (chunk) => {
                        if(IsJsonString(data)) {
                            res.send(data);
                        }
                        else {
                            var result = convert.xml2json(data, {compact: true, spaces: 4});
                            let message = JSON.parse(result).Error.Message;
                            data = {
                                'error': message
                            }
                            res.send(data);
                        }
      

                    
                });

});
    
});
module.exports =router;