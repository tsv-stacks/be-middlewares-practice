const db = require("../services/db");

exports.get = async (_, res) => {
  const connection = await db();
  const [rows] = await connection.execute("SELECT * FROM jokes");
  res.json(rows);
};

exports.create = async (req, res) => {
  const connection = await db();
  const [rows] = await connection.execute(
    "INSERT INTO jokes (name, content) VALUES (? , ?)",
    [req.body.name, req.body.content]
  );
  res.status(201).json(rows);
};
