import express from "express";
import morgan from "morgan";
import { productRouter } from "./routes/product";
import { updateRouter } from "./routes/update";
import { updateBulletPointRouter } from "./routes/updateBulletPoint";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Root");
});

app.use("/api/product", productRouter);
app.use("/api/update", updateRouter);
app.use("/api/update-bullet-point", updateBulletPointRouter);
