"use server";
import { google } from "googleapis";

export async function submitInterest(prevState, formData) {
  try {
    const client = new google.auth.JWT(
      process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL,
      null,
      // process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
      process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY,
      ["https://www.googleapis.com/auth/spreadsheets"]

    );

    client.authorize(async function (err, tokens) {
      if (err) {
        // return res.status(400).send(JSON.stringify({ error: true }));
        console.log(err)
        throw(err)
      }

      const gsapi = google.sheets({ version: "v4", auth: client });

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

      await gsapi.spreadsheets.values.append(opt);
    });
    return { type: "success", message: "ok" };
  } catch (e) {
    return { type: "failed", message: "Failed to update." };
  }
}
