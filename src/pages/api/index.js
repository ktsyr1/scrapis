import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
// function to get the client
const getClient = async () => {
    const auth = new GoogleAuth({
        keyFile: 'keyfile.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    return auth.getClient();
}

// function to read data from sheet
export const readData = async () => {
    const client = await getClient();
    // console.log({google});
    const sheets = google?.sheets({ version: 'v4', auth: client });
    const res = await sheets?.spreadsheets.values.get({
        spreadsheetId: '1ggIzNvYqceFWzTkCEc1ZPzpWBLK6MOM6nFaRFwOreWQ',
        range: 'table!A1:I20'
    });
    const data = res?.data;
    console.log(data);
    return data;
}

// function to write data to sheet
export const writeData = async () => {
    const client = await getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    const request = {
        spreadsheetId: 'your_spreadsheet_id',
        range: 'Sheet1!A1:C3',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [
                ["value1", "value2", "value3"],
                ["value4", "value5", "value6"]
            ]
        }
    };
    const response = await sheets.spreadsheets.values.update(request);
    console.log(response.data);
}
export default async function (req, res, next) {
    return await readData()
}