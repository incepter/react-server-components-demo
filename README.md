# React Server Components Demo

* [What is this?](#what-is-this)
* [When will I be able to use this?](#when-will-i-be-able-to-use-this)
* [Should I use this demo for benchmarks?](#should-i-use-this-demo-for-benchmarks)
* [Setup](#setup)
* [License](#license)

## What is this?

This is a demo app built with Server Components, an experimental React feature. **We strongly recommend [watching our talk introducing Server Components](https://reactjs.org/server-components) before exploring this demo.** The talk includes a walkthrough of the demo code and highlights key points of how Server Components work and what features they provide.

## When will I be able to use this?

Server Components are an experimental feature and **are not ready for adoption**. For now, we recommend experimenting with Server Components via this demo app. **Use this in your projects at your own risk.**

## Should I use this demo for benchmarks?

If you use this demo to compare React Server Components to the framework of your choice, keep this in mind:

* **This demo doesn’t have server rendering.** Server Components are a separate (but complementary) technology from Server Rendering (SSR). Server Components let you run some of your components purely on the server. SSR, on the other hand, lets you generate HTML before any JavaScript loads. This demo *only* shows Server Components, and not SSR. Because it doesn't have SSR, the initial page load in this demo has a client-server network waterfall, and **will be much slower than any SSR framework**. However, Server Components are meant to be integrated together with SSR, and they *will* be in a future release.
* **This demo doesn’t have an efficient bundling strategy.** When you use Server Components, a bundler plugin will automatically split the client JS bundle. However, the way it's currently being split is not necessarily optimal. We are investigating more efficient ways to split the bundles, but they are out of scope of this demo.
* **This demo doesn’t have partial refetching.** Currently, when you click on different “notes”, the entire app shell is refetched from the server. However, that’s not ideal: for example, it’s unnecessary to refetch the sidebar content if all that changed is the inner content of the right pane. Partial refetching is an [open area of research](https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md#open-areas-of-research) and we don’t yet know how exactly it will work.

This demo is provided “as is” to show the parts that are ready for experimentation. It is not intended to reflect the performance characteristics of a real app driven by a future stable release of Server Components.

## Setup

You will need to have nodejs >=14.9.0 in order to run this demo. [Node 14 LTS](https://nodejs.org/en/about/releases/) is a good choice! (If you use `nvm`, run `nvm i` before running `npm install` to install the recommended Node version.)

  ```
  npm install
  npm start
  ```

(Or `npm run start:prod` for a production build.)

Then open http://localhost:4000.

The app won't work until you set up the database, as described below.

<details>
  <summary>Setup with Docker (optional)</summary>
  <p>You can also start dev build of the app by using docker-compose.</p>
  <p>⚠️ This is <b>completely optional,</b> and is only for people who <i>prefer</i> Docker to global installs!</p>
  <p>If you prefer Docker, make sure you have docker and docker-compose installed then run:</p>
  <pre><code>docker-compose up</code></pre>
  <h4>Running seed script</h4>
  <p>1. Run containers in the detached mode</p>
  <pre><code>docker-compose up -d</code></pre>
  <p>2. Run seed script</p>
  <pre><code>docker-compose exec notes-app npm run seed</code></pre>
  <p>If you'd rather not use Docker, skip this section and continue below.</p>
</details>

## License
This demo is MIT licensed.
