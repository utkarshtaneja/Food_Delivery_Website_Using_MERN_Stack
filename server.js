const express = require('express');
const app = express();
const connectDB = require('./db');
const userRoutes = require('./backend/routes/userRoutes');
const { default: foodRouter } = require('./backend/routes/food.routes');
connectDB();

app.use(express.json())
app.use('/api/users', userRoutes)

app.listen(3001, () => {
    console.log(`Server started`);
});
app.use("/api/food" , foodRouter);
app.use("/images",express.static('uploads'))