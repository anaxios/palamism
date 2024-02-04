import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html";

export default function chatLayout() {
  return html`
    <div class="flex">
      <input
        type="text"
        class="m-4 input input-bordered w-full max-w-xs"
        id="textBoxInputElement"
        hx-get="/chat"
        hx-trigger="keyup changed delay:500ms"
        hx-target="#content"
        hx-indicator="#spinner"
        hx-swap="innerHTML"
        mustache-template="foo"
        name="query"
        placeholder="Type your question here."
      />
      <div
        id="spinner"
        class="justify-center items-center h-full text-center htmx-indicator .hidden"
      >
        Loading...
      </div>
    </div>
    <div id="content" class=""></div>
  `;
}
