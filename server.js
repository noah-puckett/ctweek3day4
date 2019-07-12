const app = require('./lib/app');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Successfully started on ${PORT}, good job!`);
});
