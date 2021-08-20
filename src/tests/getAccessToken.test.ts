import React from "react";

test("get access token", async () => {
  const resPromise = await fetch(
    "https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin",
    {
      body: "uuid=hello",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    }
  );
  const res = await resPromise.json();
  expect(res.response.access_token.length).toBe(64);
});
