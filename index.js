const app=require('./app.js');
const port=process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server is running on port ${port}`));
