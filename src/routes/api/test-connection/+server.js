import { json } from "@sveltejs/kit";
import { connectToDatabase } from "$lib/db";

export async function GET() {
  try {
    const db = await connectToDatabase();
    // 임의의 컬렉션에 접근하여 연결 테스트
    const collections = await db.collections();
    return json({
      status: "success",
      collections: collections.map((col) => col.collectionName),
    });
  } catch (err) {
    return json({ status: "error", message: err.message }, { status: 500 });
  }
}
