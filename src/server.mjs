import { app } from "./app.mjs";

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})