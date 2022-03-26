// index.js
const server = require('server');
const { get, post } = server.router;
const { file, redirect } = server.reply;

server(
  get('/', ctx => file('index.hbs')),
  post('/', ctx => {
    // Show the submitted data on the console:
    console.log(ctx.data);
    return redirect('/');
  })
);
<!-- views/index.hbs (omitting <head>, <body>, etc) -->
<form method="POST" action="/">
  <h2>Contact us</h1>
  <label><p>Name:</p> <input type="text" name="fullname"></label>
  <label><p>Message:</p> <textarea name="message"></textarea></label>

  <input type="hidden" name="_csrf" value="{{csrf}}">
  <input type="submit" name="Contact us">
</form>
