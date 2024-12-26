const axios = require('axios');
const crypto = require('crypto');

exports.handler = async (event) => {
    let SVID = event.queryStringParameters.svid;
    let HASH = event.queryStringParameters.hash;
    
    console.log(SVID);
    console.log(HASH);

    let survey_json = await decryptor(HASH, SVID);
    survey_json = JSON.parse(survey_json);


    let monitorid = survey_json.result.find(j => j.alias === 'monitorid').answer[0];
    let enqid = survey_json.result.find(j => j.alias === 'enqid').answer[0];

    let all_label = survey_json.result.map(j => j.answerLabel);

    let isSaso = all_label.every(l => !l.includes('saso'));

    let redirect_url = "";

    if (isSaso) {
        redirect_url = `https://abc.com?monitorId=${monitorid}&enqId=${enqid}&status=1`;
    } else {
        redirect_url = `https://abc.com?monitorId=${monitorid}&enqId=${enqid}&status=2`;
    }

    const response = {
        statusCode: 301,
        headers: {
            Location: redirect_url
        }
    };
    return response;
};

const decryptor = async function (hash, svid) {
    let SURVEYCAKE_DOMAIN = "";
    let VERSION = "v0";


    let hash_key = "caf00a88f2c68ee1";
    let iv_key = "c2e4d4059c0f8527";

    let resp = await axios.get(`https://${SURVEYCAKE_DOMAIN}/webhook/${VERSION}/${svid}/${hash}`);

    let data = resp.data;

    const decipher = crypto.createDecipheriv(
        'AES-128-CBC',
        hash_key,
        iv_key
    );

    let json = decipher.update(
        data,
        'base64',
        'utf8'
    );

    json += decipher.final('utf8');

    return json;
};