# akademy.

Free coding tutorials with a chalkboard theme, live compilers, flashcards, quizzes, and certificates.
Built with Next.js 16, React, and TypeScript.

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000. No API keys or environment variables are needed.

## Going live and Google Search Console

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your domain, then rebuild.
Verify the site in Search Console, either with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` or DNS, and submit `https://your-domain.com/sitemap.xml`.

## Add or edit lessons

Lessons are plain data in `src/content/` (`html.ts`, `web.ts`, `languages.ts`, `data.ts`).
A new lesson only needs an entry in its course. New courses also go in the `COURSES` list in `src/content/index.ts`.
Quiz questions list the correct answer first; the options are shuffled when shown.

## How code runs

| Where | Languages |
| --- | --- |
| Visitor's browser | HTML, CSS, JavaScript, browser frameworks (sandboxed iframe), SQL (sql.js), NumPy and pandas (Pyodide) |
| Compiler Explorer, with Wandbox as backup | Python, C, C++, Rust, Go, Java, C#, Ruby |
| Compiler Explorer only | Swift |
| Kotlin Playground, with Compiler Explorer as backup | Kotlin |
| Wandbox only | PHP, R, TypeScript, Bash, Node.js |

Wandbox allows about six runs in a burst per server, then pauses. `execute.ts` retries with a delay, so busy moments feel slow rather than broken.

Server-side runs go through `src/app/api/run/route.ts` and `src/lib/execute.ts`.
These are free community services with no uptime promise. For heavy traffic, host your own engine and add it as a backend in `execute.ts`.

Subject logos in `public/logos` come from [Devicon](https://github.com/devicons/devicon) (MIT), recolored to the site palette by `scripts/build-logos.mjs`. The logos themselves remain trademarks of their owners.

Interface icons come from the Solar set, Bold style only. To add one, edit `scripts/build-icons.mjs` and run it.

## Check the examples

With the app running (`npm run build && npm start`):

```
npm run check:examples           # every course
npm run check:examples go rust   # chosen courses
```
