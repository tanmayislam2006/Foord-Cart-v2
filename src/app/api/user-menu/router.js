// app/api/user-menu/route.js
export async function GET(req) {
  try {
    const data = { message: "Hello from user menu!" };
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
