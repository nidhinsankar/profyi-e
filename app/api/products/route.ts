import { NextResponse, type NextRequest } from "next/server";
import path from "path";
import { promises as fs } from "node:fs";

export async function GET(req: NextRequest) {
  try {
    const path = process.cwd() + "/app/api/products/data.json";
    const file = await fs.readFile(path, "utf8");
    const data = JSON.parse(file);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read data", message: error },
      { status: 500 }
    );
  }
  // const path = __dirname.replace(".next/server", "src") + "/data.json";
  // const fileBuffer = await fs.readFile(path);
  // const json = JSON.parse(fileBuffer.toString());
  // console.log("json::", json);

  // return NextResponse.json(json);
}
