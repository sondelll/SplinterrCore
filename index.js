const { json } = require('express');

const app = require('express')();
const PORT = 8080;

const today = new Date();
const date = today.toLocaleDateString();
const time = today.toLocaleTimeString();

 async function r(){
   const CoReed = require('./coreed');
   const CR = new CoReed

   var t = await CR.read();

   return t;
};

app.get('/ch1', async(req, res) => {
   var tR = await r();

   res.status(200).send(
      {
         date: `${date}`,
         time: `${time}`,
         temperature: `${tR}`
      }
   );
});

app.listen(
   PORT,
   () => console.log(`Listening on port ${PORT}.`)
);
