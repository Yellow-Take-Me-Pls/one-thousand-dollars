import React from "react";

test("echo delete", async () => {
  const res = await fetch("https://jogtracker.herokuapp.com/api/v1/test/echo", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const isOK = res.status < 400;

  expect(isOK).toBe(true);
});
