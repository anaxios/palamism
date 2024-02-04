import { html } from "hono/html";

function menuItems() {
  return html`
    <li><a>New Note</a></li>
    <li><a href="/chat">Search Database</a></li>
    <li><a href="/calendar">Calendar</a></li>
  `;
}

export default function navbar() {
  return html`<div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          ${menuItems()}
        </ul>
      </div>
      <a class="btn btn-ghost text-xl" href="/">][</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        ${menuItems()}
      </ul>
    </div>
    <div class="navbar-end">
      <a
        class="btn"
        href="https://ipfs.io/ipfs/bafybeigwwctpv37xdcwacqxvekr6e4kaemqsrv34em6glkbiceo3fcy4si"
        >Click Me!</a
      >
    </div>
  </div>`;
}
