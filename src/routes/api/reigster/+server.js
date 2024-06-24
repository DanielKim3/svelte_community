import { json } from "@sveltejs/kit";
import { connectToDatabase } from "$lib/db";

export async function POST({ request }) {
  const { username, email, password } = await request.json();

  const db = await connectToDatabase();
  const collection = db.collection("users");

  const existingUser = await collection.findOne({ email });

  if (existingUser) {
    return json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = {
    username,
    email,
    password, // 실제로는 해시된 비밀번호를 저장해야 합니다.
  };

  await collection.insertOne(newUser);

  return json({ message: "User registered successfully" }, { status: 201 });
}
