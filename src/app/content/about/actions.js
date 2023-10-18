"use server";
import { google } from "googleapis";
import keys from "huros-v1-9a487d093eaf.json";

export async function submitInterest(prevState, formData) {
  console.log("client_email", keys.client_email);
  console.log("private_email", keys.private_key);

  console.log("client_email_env", process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL);
  console.log("private_email_env", process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY);
  try {
    const client = new google.auth.JWT(
      process.env.GOOGLE_SPREADSHEET_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SPREADSHEET_PRIVATE_KEY,
      ["https://www.googleapis.com/auth/spreadsheets"]

    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
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
