

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  //从request中获取token参数
  let googleResponse = {};

  try {
    const url = new URL(request.url)
    const token = url.searchParams.get('token')
    let secret = "6Lf35IYqAAAAAPRWcq2E7L78Kb6uCzoZzJ4aZY2d";
    console.log("token", token)

    const responseFromExternalAPI = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json"
      // },
      // body: JSON.stringify({
      //   secret: "6Lf35IYqAAAAAPRWcq2E7L78Kb6uCzoZzJ4aZY2d",
      //   response: token
      // })

      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,

    })

    if (responseFromExternalAPI) {
      googleResponse = await responseFromExternalAPI.json();
      console.log("googleResponse", googleResponse)
    }

  } catch (erro) {
    console.log("erro", erro)
  }

  //https://www.google.com/recaptcha/api/siteverify


  return NextResponse.json({ googleResponse });
}