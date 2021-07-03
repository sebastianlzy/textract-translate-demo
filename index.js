(async function () {
    const dotenv = require('dotenv').config()
    const translate = require('./translate')
    const translateJSON = require("./translate/translate-json.js")
    const tableJSON = require('./translate/tables.json')
    const shell = require('shelljs');

    const translateWithoutCustomTerminology = async () => {
        console.log("=== translateWithoutCustomTerminology ===\n", await translate("Have you ever shopped using Amazon Alexa?"))

    }

    const translateWithCustomTerminology = async () => {
        console.log("=== translateWithCustomTerminology ===\n",
            await translate("Have you ever shopped using Amazon Alexa?", {
                TerminologyNames: ["alexa-terminology"]
            })
        )
    }

    const textractWithDetect = () => {
        shell.exec("amazon-textract --input-document \"./textract/employment_application.png\"")
    }

    const textractWithAnalyze = () => {
        shell.exec("amazon-textract --input-document \"./textract/employment_application.png\" --features FORMS TABLES")
    }

    const textractWithAnalyzeAndPrettyPrint = () => {
        shell.exec("cat ./textract/analyze.json | amazon-textract --stdin --pretty-print FORMS TABLES")
    }
    //TEXTRACT

    //textractWithDetect()
    //textractWithAnalyze()
    // textractWithAnalyzeAndPrettyPrint()

    //TRANSLATE

    // await translateWithoutCustomTerminology()
    // await translateWithCustomTerminology()

    //TEXTRACT + TRANSLATE
    // await translateJSON(tableJSON)

}())
