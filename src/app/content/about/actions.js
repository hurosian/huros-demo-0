"use server";
import { google } from "googleapis";

export async function submitInterest(prevState, formData) {
  try {
    console.log("hello!");

    const credential = JSON.parse(
      Buffer.from(process.env.GOOGLE_SHEETS_CREDENTIALS, 'base64').toString()
  );

    // const client = new google.auth.JWT(
    //   process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL,
    //   null,
    //   // privateKey,
    //   // process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
    //   process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY.replace(/\\n/g, "\n"),

    //   ["https://www.googleapis.com/auth/spreadsheets"]
    // );

    const client = new google.auth.JWT(
      credential.client_email,
      null,
      credential.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"],
      null,
      credential.private_key_id
    );
    console.log("CLIENT", client);

    client.authorize(async function (err, tokens) {
      if (err) {
        // return res.status(400).send(JSON.stringify({ error: true }));
        console.log(err);
        throw err;
      }

      console.log("CONNECTING SHEETS API")
      const gsapi = google.sheets({ version: "v4", auth: client });
      console.log("GSAPI", gsapi)

      //CUSTOMIZATION FROM HERE
      
      const opt = {
        spreadsheetId: "1V_Ka3e-SISwLfhpcORL7T22xqe91ZltxLOvup0h2QWI",
        range: "Sheet1!A2:I2",
        resource: {
          values: [
            [
              formData.get("fullName"),
              formData.get("email"),
              formData.get("company"),
              formData.get("telegram"),
              formData.get("discord"),
              formData.get("wallet"),
              formData.get("location"),
              formData.get("gender"),
              [
                formData.get("useHuros"),
                formData.get("investInHuros"),
                formData.get("partnerWithHuros"),
              ].join(", "),
            ],
          ],
        },
        valueInputOption: "USER_ENTERED",
      };
    
      console.log("STARTING APPENDING")
      let res = await gsapi.spreadsheets.values.append(opt);
      console.log("RESULTS", res);
    });
    return { type: "success", message: "ok" };
  } catch (e) {
    return { type: "failed", message: "Failed to update." };
  }
}
