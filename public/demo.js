window.onSubmit = async function onSubmit(token) {
  debugger;
  console.log("token", token);
  //请求api

  let resp = await fetch("/api/recaptcha?token=" + token);
  resp = await resp.json();

  console.log("resp", resp);
  //   document.getElementById("demo-form").submit();
};

console.log("execute demo.js=========================>");
