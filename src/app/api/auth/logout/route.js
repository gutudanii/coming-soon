export async function POST(req) {
  const headers = new Headers();
  headers.append("Set-Cookie", "session=; Max-Age=0; Path=/; HttpOnly");

  return new Response(JSON.stringify({ message: "Logged out" }), {
    status: 200,
    headers,
  });
}
