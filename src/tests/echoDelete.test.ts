import React from "react";

test("echo delete", async () => {
  const res = await fetch("https://jogtracker.herokuapp.com/api/v1/test/echo", {
    headers: {
      Accept: "application/json",
    },
    method: "DELETE",
  });
  const isOK = res.status < 400;

  expect(isOK).toBe(true);
});
