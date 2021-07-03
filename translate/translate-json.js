


const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");
const client = new TranslateClient({ region: process.env.REGION });
const translate = require('./index')


const translateJSON = async (dataInJSON) => {
    const resp = []
    for(let i = 0; i< dataInJSON.length; i++) {
        const data = dataInJSON[i]
        const res = {}
        const keys = Object.keys(data)

        for (let j = 0; j< keys.length; j++) {
            const key = keys[j]
            const temp = await translate(data[key])
            res[key] = temp["TranslatedText"]
        }
        resp.push(res)
    }

    console.log("=== translateJSON ===\n",  resp)
    return resp
}


module.exports = translateJSON