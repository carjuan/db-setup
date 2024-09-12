import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("Arrived at the root of product");
});

router.get("/:id", () => {});

router.post("/", () => {});

router.put("/:id", () => {});

router.delete("/:id", () => {});

export { router as productRouter };