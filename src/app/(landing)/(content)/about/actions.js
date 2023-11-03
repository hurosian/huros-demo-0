"use server";
import { google } from "googleapis";

export async function submitInterest(prevState, formData) {
  try {

    const credential = JSON.parse(
      Buffer.from(process.env.GOOGLE_SHEETS_CREDENTIALS, "base64").toString()
    );

    const client = new google.auth.JWT(
      credential.client_email,
      null,
      credential.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"],
      null,
      credential.private_key_id
    );

    client.authorize((err) => {
      if (err)
      {
        console.log(err)
        throw(err)
      }
    });
    const gsapi = google.sheets({ version: "v4", auth: client });

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

    let res = await gsapi.spreadsheets.values.append(opt);

    return { type: "success", message: "ok" };
  } catch (e) {
    return { type: "failed", message: "Failed to update." };
  }
}
