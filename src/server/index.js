import express from "express";

const app = express();

app.get('*', (req, res, next) => {
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Home page</title>
        </head>
        <body>
          Basic HTML
        </body>
      </html>
    `);
});

app.listen(3001, () => {
  console.log(`Server is listening on port: 3001`);
});
