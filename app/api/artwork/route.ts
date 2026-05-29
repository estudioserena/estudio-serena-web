import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ url: null });

  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}&country=cl`,
      { next: { revalidate: 86400 } }
    );
    const data = await res.json();
    const result = data.results?.[0];
    if (result?.artworkUrl100) {
      const url = result.artworkUrl100.replace("100x100", "600x600");
      return NextResponse.json({ url });
    }
    return NextResponse.json({ url: null });
  } catch {
    return NextResponse.json({ url: null });
  }
}
