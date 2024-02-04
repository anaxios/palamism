import { Hono } from "hono";
import layout from "../../../layouts/layout";
import chatLayout from "../../../layouts/chatLayout";
import navbar from "../../../layouts/navbar";
import { html } from "hono/html";

const app = new Hono();

async function getSearch(query: string) {
  try {
    const url = new URL("https://j3nkn5.cc/api/chat");
    url.searchParams.set("query", query);
    url.searchParams.set("vectors", "true");

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const r = await res.json();
    let h = [];
    for (const e of r.vector) {
      h.push(
        html`<p class="px-4">${JSON.stringify(e.metadata)}</p>
          <p class="pb-4 px-4">${e.pageContent}</p>`
      );
    }
    return h.join(" ");
  } catch (error) {
    return `Error fetching data: ${error}`;
  }
}

app.get("/", async (c) => {
  const hxTrigger = c.req.header("HX-Trigger");
  const query = c.req.query("query");
  if (hxTrigger === "textBoxInputElement") {
    return c.html(await getSearch(query));
  }
  return c.html(
    layout({
      navbar: navbar(),
      title: "Search Database",
      contents: chatLayout(),
    })
  );
});

export default app;
