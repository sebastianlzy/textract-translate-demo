
const { TranslateClient, TranslateTextCommand } = require("@aws-sdk/client-translate");
const client = new TranslateClient({ region: process.env.REGION });


const translate = async (text, params) => {

    const input = {
        SourceLanguageCode: 'en',
        TargetLanguageCode: 'zh',
        Text: text,
        ...params
    };
    try {
        const command = new TranslateTextCommand(input);
        const data = await client.send(command);
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}


module.exports = translate