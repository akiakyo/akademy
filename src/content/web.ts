import { course } from "./types";

export const css = course(
  { slug: "css", name: "CSS", icon: "{ }", group: "Web", blurb: "Colors, layouts, and fonts. Make your pages look the way you want.", shiki: "html", runner: "html" },
  {
    Basics: {
      "CSS intro": {
        intro: "CSS controls how HTML looks. A rule picks elements with a selector, then sets properties on them.",
        code: `<style>\n  h1 { color: tomato; }\n  p { font-size: 18px; }\n</style>\n<h1>Styled heading</h1>\n<p>Styled paragraph.</p>`,
        basics: ["A rule is a selector plus a block of declarations.", "A declaration is property: value;", "CSS goes in a <style> tag or a linked .css file.", "One stylesheet can restyle a whole site."],
        keywords: [["selector", "The part of a rule that picks elements."], ["declaration", "A property and value pair."], ["stylesheet", "A file of CSS rules."]],
        tips: ["Keep CSS in one external file so every page shares it.", "Common mistake: forgetting the semicolon, which breaks the next declaration."],
        cards: [["What does CSS stand for?", "Cascading Style Sheets"], ["What ends a declaration?", "A semicolon."]],
        quiz: [["What does CSS stand for?", "Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Sheets"], ["Which is valid CSS?", "p { color: red; }", "p: color = red", "<p color=red>", "p(color, red)"]],
      },
      Selectors: {
        intro: "Selectors choose what to style: by tag name, by `.class`, by `#id`, or by state such as `:hover`.",
        code: `<style>\n  p { color: gray; }\n  .note { color: green; }\n  #main { font-weight: bold; }\n  a:hover { color: tomato; }\n</style>\n<p>Tag selector</p>\n<p class="note">Class selector</p>\n<p id="main">Id selector</p>\n<a href="#">Hover me</a>`,
        basics: [".name selects a class.", "#name selects an id.", "a b selects b inside a.", "More specific selectors win over less specific ones."],
        keywords: [["class selector", "A selector starting with a dot."], ["pseudo-class", "A selector for a state, like :hover."], ["specificity", "The score deciding which rule wins."]],
        tips: ["Style with classes. They are reusable and easy to override.", "Common mistake: writing .note for an id or #note for a class."],
        cards: [["Which symbol selects a class?", "A dot, as in .note"], ["Which selector is stronger: id or class?", "id"]],
        quiz: [["How do you select id=\"top\"?", "#top", ".top", "top", "*top"], ["What does a:hover target?", "A link under the pointer", "Every visited link", "All anchors always", "A hidden link"]],
      },
      "Box model": {
        intro: "Every element is a box: content, then padding, then border, then margin. Understanding this makes spacing predictable.",
        code: `<style>\n  .box {\n    box-sizing: border-box;\n    width: 200px;\n    padding: 16px;\n    border: 4px solid #6b4a2f;\n    margin: 24px;\n    background: #f2d06b;\n  }\n</style>\n<div class="box">I am a box.</div>`,
        basics: ["Padding is space inside the border.", "Margin is space outside the border.", "box-sizing: border-box counts padding in the width.", "Vertical margins between blocks can collapse."],
        keywords: [["padding", "Space between content and border."], ["margin", "Space outside the border."], ["border-box", "A sizing mode where width includes padding and border."]],
        tips: ["Set box-sizing: border-box on everything. Most sites do.", "Common mistake: using margin when you want background color to extend. Use padding."],
        cards: [["Is padding inside or outside the border?", "Inside."], ["What does border-box change?", "Width then includes padding and border."]],
        quiz: [["Which space is outside the border?", "margin", "padding", "content", "outline-box"], ["With border-box, a 200px element with 16px padding is how wide?", "200px", "232px", "216px", "168px"]],
      },
    },
    Layout: {
      Flexbox: {
        intro: "Flexbox arranges items in a row or column and shares out the space. Add `display: flex` to the parent.",
        code: `<style>\n  .row { display: flex; gap: 8px; justify-content: space-between; }\n  .row div { background: #1f3d2b; color: white; padding: 12px; }\n</style>\n<div class="row"><div>One</div><div>Two</div><div>Three</div></div>`,
        basics: ["display: flex goes on the parent.", "flex-direction picks row or column.", "justify-content aligns along the main axis.", "align-items aligns along the cross axis."],
        keywords: [["flex container", "The parent with display: flex."], ["main axis", "The direction items flow."], ["gap", "Space between items."]],
        tips: ["Use gap instead of margins between flex items.", "Common mistake: putting display: flex on the child rather than the parent."],
        cards: [["Which property centers along the main axis?", "justify-content"], ["Where does display: flex go?", "On the parent container."]],
        quiz: [["Which aligns items on the cross axis?", "align-items", "justify-content", "flex-axis", "text-align"], ["Which sets a vertical stack?", "flex-direction: column", "flex-wrap: wrap", "display: block-flex", "order: 1"]],
      },
      Grid: {
        intro: "CSS Grid lays items out in rows and columns at once. It is the best tool for whole-page and card layouts.",
        code: `<style>\n  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }\n  .grid div { background: #f2d06b; padding: 16px; }\n</style>\n<div class="grid"><div>A</div><div>B</div><div>C</div><div>D</div></div>`,
        basics: ["display: grid goes on the parent.", "grid-template-columns defines the columns.", "1fr means one share of free space.", "gap spaces rows and columns."],
        keywords: [["grid container", "The parent with display: grid."], ["fr", "A unit for a fraction of free space."], ["track", "One row or column of a grid."]],
        tips: ["Try repeat(auto-fit, minmax(200px, 1fr)) for a responsive card grid.", "Common mistake: using flexbox for two-dimensional layouts that grid handles in one line."],
        cards: [["What does 1fr mean?", "One share of the free space."], ["Grid or flexbox for two dimensions?", "Grid."]],
        quiz: [["Which creates three equal columns?", "repeat(3, 1fr)", "columns: 3", "grid: 3", "fr(3)"], ["Grid is best for layouts in how many dimensions?", "Two", "One", "Three", "Zero"]],
      },
    },
  },
);

export const javascript = course(
  { slug: "javascript", name: "JavaScript", icon: "JS", group: "Web", blurb: "Add buttons that do things, forms that check input, and pages that react.", shiki: "javascript", runner: "javascript" },
  {
    Basics: {
      "JS intro": {
        intro: "JavaScript is the programming language of the web. It runs in every browser and makes pages interactive.",
        code: `console.log("Hello, Akademy!");\nconsole.log(2 + 3);`,
        basics: ["JavaScript runs in the browser.", "console.log prints a message.", "Statements usually end with a semicolon.", "JavaScript is case-sensitive."],
        keywords: [["statement", "One instruction for the computer."], ["console", "A panel showing messages from your code."], ["script", "A program written in JavaScript."]],
        tips: ["Open DevTools with F12 to see the console on any page.", "Common mistake: writing Console.log. Capitals matter."],
        cards: [["How do you print to the console?", "console.log(...)"], ["Is JavaScript case-sensitive?", "Yes."]],
        quiz: [["What does console.log do?", "Prints a message", "Saves a file", "Opens a window", "Stops the program"], ["Where does browser JavaScript run?", "On the visitor's device", "Only on servers", "Only in databases", "In the HTML file size"]],
      },
      Variables: {
        intro: "Variables hold values. Use `const` when the value will not be reassigned and `let` when it will.",
        code: `const name = "Ana";\nlet score = 90;\nscore = score + 5;\nconsole.log(name, score);\nconsole.log(typeof score);`,
        basics: ["const cannot be reassigned.", "let can be reassigned.", "Avoid var in new code.", "typeof tells you a value's type."],
        keywords: [["const", "Declares a variable that cannot be reassigned."], ["let", "Declares a variable that can be reassigned."], ["typeof", "An operator returning a value's type."]],
        tips: ["Default to const, and switch to let only when needed.", "Common mistake: using = in a comparison. Use === to compare."],
        cards: [["Which keyword cannot be reassigned?", "const"], ["Which operator checks strict equality?", "==="]],
        quiz: [["Which should you use for a value that changes?", "let", "const", "static", "fixed"], ["What does typeof 5 return?", "\"number\"", "\"int\"", "\"digit\"", "5"]],
      },
      Functions: {
        intro: "A function is a named, reusable block of code. It takes parameters and can return a result.",
        code: `function add(a, b) {\n  return a + b;\n}\n\nconst greet = (name) => \`Hello, \${name}!\`;\n\nconsole.log(add(2, 3));\nconsole.log(greet("Ben"));`,
        basics: ["Define with function or an arrow =>.", "Parameters are the inputs.", "return sends a value back.", "Without return, a function gives undefined."],
        keywords: [["parameter", "A named input in a function definition."], ["argument", "The real value passed in a call."], ["arrow function", "A short function syntax using =>."]],
        tips: ["Keep functions small and name them with a verb.", "Common mistake: forgetting return and getting undefined."],
        cards: [["What does a function return with no return statement?", "undefined"], ["Parameter or argument: which is in the call?", "Argument"]],
        quiz: [["What does add(2, 3) give for a + b?", "5", "23", "undefined", "\"2 3\""], ["Which is an arrow function?", "(a) => a * 2", "fn a -> a", "function => a", "def a: a"]],
      },
    },
    "Working with data": {
      "Arrays and objects": {
        intro: "Arrays hold ordered lists. Objects hold named values. Together they model most data.",
        code: `const scores = [90, 72, 85];\nconst passed = scores.filter((s) => s >= 75);\nconsole.log(passed);\n\nconst student = { name: "Ana", year: 2 };\nconsole.log(student.name, scores.length);`,
        basics: ["Array indexes start at 0.", ".map changes each item; .filter keeps some.", "Objects hold key: value pairs.", "Read a property with dot notation."],
        keywords: [["array", "An ordered list of values."], ["object", "A set of named values."], ["index", "An item's position, starting at 0."]],
        tips: ["Use .map and .filter instead of manual loops for clear code.", "Common mistake: reading arr[arr.length], which is one past the end."],
        cards: [["What is the first array index?", "0"], ["Which array method keeps matching items?", ".filter"]],
        quiz: [["What is [10, 20, 30][1]?", "20", "10", "30", "undefined"], ["How do you read name from user?", "user.name", "user->name", "user::name", "name(user)"]],
      },
      "The DOM": {
        intro: "The DOM is the browser's live model of your page. JavaScript uses it to find elements and change them.",
        code: `document.body.innerHTML = '<button id="b">Clicked 0 times</button>';\nlet n = 0;\nconst button = document.querySelector("#b");\nbutton.addEventListener("click", () => {\n  n++;\n  button.textContent = \`Clicked \${n} times\`;\n});`,
        basics: ["document represents the page.", "querySelector finds an element by CSS selector.", "addEventListener reacts to events.", "textContent sets text safely."],
        keywords: [["DOM", "The browser's tree model of a page."], ["event", "Something that happens, such as a click."], ["listener", "A function that runs when an event fires."]],
        tips: ["Prefer textContent to innerHTML for user input. It cannot inject markup.", "Common mistake: selecting an element before it exists on the page."],
        cards: [["What does DOM stand for?", "Document Object Model"], ["Which method attaches a click handler?", "addEventListener"]],
        quiz: [["Which finds the first matching element?", "document.querySelector", "document.find", "page.get", "dom.first"], ["Which is safer for showing user text?", "textContent", "innerHTML", "document.write", "eval"]],
      },
    },
  },
);

export const typescript = course(
  { slug: "typescript", name: "TypeScript", icon: "TS", group: "Web", blurb: "JavaScript with types, so your editor catches mistakes before you run.", shiki: "typescript", runner: "typescript" },
  {
    Basics: {
      "TS intro": {
        intro: "TypeScript adds types to JavaScript. It checks your code first, then compiles to plain JavaScript.",
        code: `const city: string = "Cebu";\nconst year: number = 2026;\nconsole.log(\`\${city} in \${year}\`);`,
        basics: ["TypeScript is a superset of JavaScript.", "Annotate with a colon: name: string.", "tsc compiles .ts files to .js.", "Types are removed at runtime."],
        keywords: [["type annotation", "A label saying what type a value has."], ["compile", "Turn source code into another form."], ["superset", "A language containing all of another."]],
        tips: ["Let TypeScript infer simple types instead of annotating everything.", "Common mistake: using any everywhere, which turns checking off."],
        cards: [["What does TypeScript compile to?", "JavaScript"], ["Do types exist at runtime?", "No, they are erased."]],
        quiz: [["How do you annotate a string?", "name: string", "string name", "name as text", "<string> = name"], ["What runs in the browser?", "The compiled JavaScript", "The .ts file", "The type checker", "The tsconfig"]],
      },
      "Types and interfaces": {
        intro: "An `interface` describes the shape of an object. A `type` can name any type, including unions of options.",
        code: `interface Student {\n  name: string;\n  year?: number;\n}\ntype Grade = "pass" | "fail";\n\nconst ana: Student = { name: "Ana" };\nconst result: Grade = "pass";\nconsole.log(ana.name, result);`,
        basics: ["interface describes object shapes.", "type aliases any type.", "? marks an optional property.", "| makes a union of allowed types."],
        keywords: [["interface", "A named description of an object's shape."], ["union", "A type allowing one of several options."], ["optional property", "A property that may be missing."]],
        tips: ["Unions of string literals are a neat replacement for magic strings.", "Common mistake: forgetting to handle undefined on optional properties."],
        cards: [["Which symbol marks an optional property?", "?"], ["Which symbol makes a union?", "|"]],
        quiz: [["Which allows only 'a' or 'b'?", "\"a\" | \"b\"", "\"a\" & \"b\"", "string[]", "any"], ["What is year?: number?", "An optional number", "A required number", "A nullable string", "A function"]],
      },
      Generics: {
        intro: "Generics let a function or type work with many types while staying type-safe. `T` is a placeholder filled in when you use it.",
        code: `function first<T>(items: T[]): T | undefined {\n  return items[0];\n}\n\nconsole.log(first([1, 2, 3]));\nconsole.log(first(["a", "b"]));`,
        basics: ["<T> declares a type parameter.", "T is filled in on each call.", "TypeScript usually infers T.", "Array<T> is a built-in generic."],
        keywords: [["generic", "Code parameterized by a type."], ["type parameter", "A placeholder for a type, often T."], ["inference", "TypeScript working out a type on its own."]],
        tips: ["Add a generic only when it links two types, such as input and output.", "Common mistake: using any where a generic would keep the type."],
        cards: [["What is T in first<T>?", "A type parameter."], ["What does generic code avoid?", "Rewriting it for each type, or falling back to any."]],
        quiz: [["What does first([1, 2]) infer T as?", "number", "any", "string", "T"], ["Which is a generic type?", "Array<string>", "string", "number", "boolean"]],
      },
    },
  },
);

export const react = course(
  { slug: "react", name: "React", icon: "Re", group: "Frameworks", blurb: "Build interfaces from small components that update themselves.", shiki: "html", runner: "html" },
  {
    Basics: {
      Components: {
        intro: "A React component is a function that returns what should appear on screen. You compose small components into whole pages.",
        code: `<div id="app"></div>\n<script type="module">\n  import React from "https://esm.sh/react@19";\n  import { createRoot } from "https://esm.sh/react-dom@19/client";\n  const h = React.createElement;\n  function Greeting({ name }) {\n    return h("h2", null, "Hello, " + name + "!");\n  }\n  createRoot(document.getElementById("app")).render(h(Greeting, { name: "Ana" }));\n</script>`,
        note: "Real projects write JSX such as <Greeting name=\"Ana\" />, which a build tool turns into the createElement calls used here.",
        basics: ["A component is a function returning UI.", "Component names start with a capital letter.", "Props pass data from parent to child.", "JSX is HTML-like syntax for describing UI."],
        keywords: [["component", "A reusable function that returns UI."], ["props", "Inputs passed to a component."], ["JSX", "HTML-like syntax inside JavaScript."]],
        tips: ["Split a component when it does more than one job.", "Common mistake: naming a component in lowercase. React treats it as an HTML tag."],
        cards: [["What does a component return?", "The UI to display."], ["How does a parent send data to a child?", "Through props."]],
        quiz: [["Which is a valid component name?", "Greeting", "greeting", "greeting-card", "_greeting"], ["What are props?", "Inputs to a component", "CSS rules", "Database rows", "Server routes"]],
      },
      State: {
        intro: "State is data a component remembers. When you update it with `useState`, React redraws the component.",
        code: `<div id="app"></div>\n<script type="module">\n  import React, { useState } from "https://esm.sh/react@19";\n  import { createRoot } from "https://esm.sh/react-dom@19/client";\n  const h = React.createElement;\n  function Counter() {\n    const [count, setCount] = useState(0);\n    return h("button", { onClick: () => setCount(count + 1) }, "Clicked " + count);\n  }\n  createRoot(document.getElementById("app")).render(h(Counter));\n</script>`,
        basics: ["useState returns a value and a setter.", "Calling the setter re-renders the component.", "Never change state directly.", "Hooks run at the top level of a component."],
        keywords: [["state", "Data a component remembers between renders."], ["hook", "A function starting with use that adds React features."], ["render", "React calling your component to work out the UI."]],
        tips: ["Keep state as small as you can and compute the rest.", "Common mistake: pushing into a state array. Create a new array instead."],
        cards: [["What does useState return?", "The current value and a function to update it."], ["What does calling the setter do?", "Schedules a re-render with the new value."]],
        quiz: [["How do you update count?", "setCount(count + 1)", "count = count + 1", "count++", "useState(count + 1)"], ["Where can hooks be called?", "At the top level of a component", "Inside loops", "Inside conditions", "In CSS"]],
      },
      "Effects and lists": {
        intro: "Render lists with `.map`, giving each item a stable `key`. Use `useEffect` to sync with things outside React, such as timers.",
        code: `<div id="app"></div>\n<script type="module">\n  import React, { useEffect, useState } from "https://esm.sh/react@19";\n  import { createRoot } from "https://esm.sh/react-dom@19/client";\n  const h = React.createElement;\n  function Clock() {\n    const [s, setS] = useState(0);\n    useEffect(() => {\n      const id = setInterval(() => setS((v) => v + 1), 1000);\n      return () => clearInterval(id);\n    }, []);\n    const items = ["Read", "Try", "Test"];\n    return h("div", null, h("p", null, s + " seconds"),\n      h("ul", null, items.map((t) => h("li", { key: t }, t))));\n  }\n  createRoot(document.getElementById("app")).render(h(Clock));\n</script>`,
        basics: ["Give list items a stable key.", "useEffect runs after rendering.", "The dependency array controls when it reruns.", "Return a cleanup function to stop timers."],
        keywords: [["key", "A stable id React uses to track list items."], ["effect", "Code that syncs with something outside React."], ["cleanup", "A function that undoes an effect."]],
        tips: ["Use ids as keys, not array indexes, when a list can reorder.", "Common mistake: forgetting cleanup, which leaks timers and listeners."],
        cards: [["Why do list items need keys?", "So React can track each item between renders."], ["What does an empty dependency array mean?", "Run the effect once after the first render."]],
        quiz: [["What makes the best key?", "A stable id", "A random number", "The array length", "The current time"], ["What does an effect's returned function do?", "Cleans up", "Renders UI", "Sets state", "Declares props"]],
      },
    },
  },
);

export const vue = course(
  { slug: "vue", name: "Vue", icon: "Vu", group: "Frameworks", blurb: "A gentle framework for reactive interfaces built on HTML templates.", shiki: "html", runner: "html" },
  {
    Basics: {
      "Vue intro": {
        intro: "Vue connects data to HTML templates. When the data changes, the page updates by itself.",
        code: `<div id="app"><h2>{{ message }}</h2></div>\n<script type="module">\n  import { createApp } from "https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.prod.js";\n  createApp({ data: () => ({ message: "Hello from Vue!" }) }).mount("#app");\n</script>`,
        basics: ["createApp starts a Vue app.", "data returns your reactive state.", "{{ }} prints a value in a template.", "mount attaches the app to an element."],
        keywords: [["template", "HTML with Vue syntax."], ["reactive", "Updating the page when data changes."], ["mount", "Attach an app to the page."]],
        tips: ["Start with a CDN script, then move to Vite for real projects.", "Common mistake: mounting before the element exists on the page."],
        cards: [["What prints a value in a template?", "Double curly braces: {{ value }}"], ["Which function starts an app?", "createApp"]],
        quiz: [["What does {{ count }} do?", "Prints count", "Comments it out", "Deletes it", "Declares it"], ["What does mount do?", "Attaches the app to an element", "Installs Vue", "Compiles CSS", "Starts a server"]],
      },
      Directives: {
        intro: "Directives are special attributes starting with `v-`. They bind data, react to events, and repeat elements.",
        code: `<div id="app">\n  <button @click="n++">Add</button>\n  <p v-if="n > 2">That is a lot!</p>\n  <ul><li v-for="i in n" :key="i">Item {{ i }}</li></ul>\n</div>\n<script type="module">\n  import { createApp } from "https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.prod.js";\n  createApp({ data: () => ({ n: 1 }) }).mount("#app");\n</script>`,
        basics: ["v-if shows an element conditionally.", "v-for repeats an element.", "@click is short for v-on:click.", ":href is short for v-bind:href."],
        keywords: [["directive", "A v- attribute with special behavior."], ["v-for", "Repeats an element for each item."], ["v-model", "Two-way binding for form inputs."]],
        tips: ["Add :key to every v-for.", "Common mistake: using v-if and v-for on the same element."],
        cards: [["What is @click short for?", "v-on:click"], ["Which directive repeats elements?", "v-for"]],
        quiz: [["Which binds an attribute?", ":href", "@href", "#href", "$href"], ["Which directive suits form inputs?", "v-model", "v-for", "v-if", "v-key"]],
      },
      "Composition API": {
        intro: "The Composition API groups logic with `ref` and `computed` inside `setup`. It scales better in large components.",
        code: `<div id="app"><button @click="n++">{{ n }} doubled is {{ double }}</button></div>\n<script type="module">\n  import { createApp, ref, computed } from "https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.prod.js";\n  createApp({\n    setup() {\n      const n = ref(1);\n      const double = computed(() => n.value * 2);\n      return { n, double };\n    },\n  }).mount("#app");\n</script>`,
        basics: ["ref wraps a reactive value.", "Read and write it with .value in scripts.", "computed derives cached values.", "Templates unwrap refs for you."],
        keywords: [["ref", "A reactive wrapper for one value."], ["computed", "A cached value derived from others."], ["setup", "The entry point of the Composition API."]],
        tips: ["Use computed for derived data instead of methods in templates.", "Common mistake: forgetting .value inside scripts."],
        cards: [["How do you read a ref in a script?", "With .value"], ["What does computed provide?", "A cached value derived from reactive state."]],
        quiz: [["Which holds one reactive value?", "ref", "mount", "template", "props"], ["When does computed recalculate?", "When its dependencies change", "Every second", "Only once", "On every click anywhere"]],
      },
    },
  },
);

export const angular = course(
  { slug: "angular", name: "Angular", icon: "Ng", group: "Frameworks", blurb: "A full framework for large apps, with components, routing, and forms built in.", shiki: "typescript", noRunReason: "Angular projects need a build step, so this example is read-only.", },
  {
    Basics: {
      Components: {
        intro: "An Angular component is a TypeScript class with a decorator that links it to a template.",
        code: `import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-hello",\n  template: "<h2>Hello, {{ name }}!</h2>",\n})\nexport class HelloComponent {\n  name = "Ana";\n}`,
        basics: ["@Component marks a class as a component.", "selector is the HTML tag it creates.", "template is its HTML.", "Class fields are available in the template."],
        keywords: [["decorator", "An @ annotation that adds metadata to a class."], ["selector", "The tag name that renders a component."], ["interpolation", "Showing a value with {{ }}."]],
        tips: ["Use the Angular CLI: ng new and ng generate save lots of typing.", "Common mistake: using a component without importing it."],
        cards: [["Which decorator defines a component?", "@Component"], ["What does selector define?", "The HTML tag for the component."]],
        quiz: [["What language is Angular written in?", "TypeScript", "Python", "Ruby", "Go"], ["What does {{ name }} do?", "Shows name in the template", "Declares name", "Imports name", "Deletes name"]],
      },
      "Signals and control flow": {
        intro: "Signals hold reactive values. Templates use `@if` and `@for` blocks to show content conditionally or repeat it.",
        code: `import { Component, signal } from "@angular/core";\n\n@Component({\n  selector: "app-counter",\n  template: \`\n    <button (click)="add()">Add</button>\n    @if (count() > 2) { <p>That is a lot!</p> }\n    @for (i of [1, 2, 3]; track i) { <span>{{ i }}</span> }\n  \`,\n})\nexport class CounterComponent {\n  count = signal(0);\n  add() { this.count.update((n) => n + 1); }\n}`,
        basics: ["signal() creates a reactive value.", "Read a signal by calling it: count().", "@if and @for are template control flow.", "(click) binds an event; [src] binds a property."],
        keywords: [["signal", "A reactive value you read by calling it."], ["event binding", "Reacting to an event with (event)."], ["property binding", "Setting a property with [name]."]],
        tips: ["Remember: () is for events, [] is for properties.", "Common mistake: writing count instead of count() in a template."],
        cards: [["How do you read a signal?", "Call it, like count()."], ["What syntax binds an event?", "Parentheses: (click)"]],
        quiz: [["Which binds a click?", "(click)", "[click]", "{click}", "@click"], ["Which updates a signal based on its value?", "count.update(...)", "count = 1", "count.push(...)", "count.value++"]],
      },
      Services: {
        intro: "Services hold shared logic. Angular's dependency injection hands them to any component that asks.",
        code: `import { Injectable, inject } from "@angular/core";\n\n@Injectable({ providedIn: "root" })\nexport class ScoreService {\n  total = 0;\n  add(points: number) { this.total += points; }\n}\n\nexport class ScoreBoard {\n  private scores = inject(ScoreService);\n}`,
        basics: ["@Injectable marks a class as a service.", "providedIn: 'root' makes one app-wide instance.", "inject() retrieves a service.", "Services are good for data and API calls."],
        keywords: [["service", "A class of shared logic."], ["dependency injection", "A system that supplies the objects a class needs."], ["singleton", "A class with one shared instance."]],
        tips: ["Move HTTP calls out of components into services.", "Common mistake: creating a service with new, which skips injection."],
        cards: [["How do you get a service?", "With inject(ServiceName)."], ["What does providedIn: 'root' give you?", "One shared instance for the whole app."]],
        quiz: [["Which decorator marks a service?", "@Injectable", "@Service", "@Component", "@Shared"], ["What is dependency injection?", "Supplying a class with what it needs", "Injecting SQL", "Bundling CSS", "Hot reloading"]],
      },
    },
  },
);

export const jquery = course(
  { slug: "jquery", name: "jQuery", icon: "$", group: "Frameworks", blurb: "The classic library for selecting elements and handling events.", shiki: "html", runner: "html" },
  {
    Basics: {
      Selectors: {
        intro: "`$()` selects elements using CSS selectors. You can then act on all of them in one line.",
        code: `<p class="a">One</p><p class="a">Two</p>\n<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>\n<script>\n  $(".a").css("color", "tomato").append(" (changed)");\n</script>`,
        basics: ["$ is the jQuery function.", "Selectors are the same as CSS.", "Methods apply to every match.", "Methods can be chained."],
        keywords: [["jQuery object", "A wrapped set of matched elements."], ["chaining", "Calling several methods in a row."], ["CDN", "A network that serves shared library files."]],
        tips: ["Modern browsers cover much of jQuery natively. It is most useful in existing projects.", "Common mistake: running jQuery before its script has loaded."],
        cards: [["What does $(\".a\") do?", "Selects all elements with class a."], ["What is chaining?", "Calling several methods in a row on one selection."]],
        quiz: [["How do you select id=\"menu\"?", "$(\"#menu\")", "$(\".menu\")", "$(menu)", "#(\"menu\")"], ["What must load first?", "The jQuery script", "Your CSS", "An image", "A font"]],
      },
      Events: {
        intro: "`.on()` attaches a handler to an event. Inside it, `$(this)` is the element that fired.",
        code: `<button id="go">Hide me</button>\n<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>\n<script>\n  $("#go").on("click", function () {\n    $(this).fadeOut();\n  });\n</script>`,
        basics: [".on attaches event handlers.", "$(this) is the current element.", ".hide, .show, and .fadeOut animate.", "$(fn) runs fn once the page is ready."],
        keywords: [["handler", "A function run when an event fires."], ["delegation", "Handling child events on a parent."], ["ready", "When the page structure has loaded."]],
        tips: ["Use delegation, .on('click', '.item', fn), for elements added later.", "Common mistake: using an arrow function when you need $(this)."],
        cards: [["Which method attaches events?", ".on()"], ["What is $(this) inside a handler?", "The element that fired the event."]],
        quiz: [["Which fades out an element?", ".fadeOut()", ".remove()", ".css()", ".on()"], ["When does $(fn) run?", "When the page is ready", "Before HTML loads", "After every click", "Never"]],
      },
      "Changing the page": {
        intro: "jQuery reads and writes text, HTML, attributes, and classes with short methods.",
        code: `<p id="t">Original</p>\n<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>\n<script>\n  $("#t").text("Updated").addClass("done").attr("title", "Hi");\n  console.log($("#t").text());\n</script>`,
        basics: [".text() reads or sets text.", ".html() reads or sets markup.", ".attr() reads or sets attributes.", ".addClass() adds a class."],
        keywords: [["getter", "A method call that reads a value."], ["setter", "A method call that writes a value."], ["markup", "HTML code."]],
        tips: ["Use .text for user content and .html only for trusted markup.", "Common mistake: expecting .val() and .text() to do the same job. .val() is for form fields."],
        cards: [["Which method reads an input's value?", ".val()"], ["Which method adds a class?", ".addClass()"]],
        quiz: [["Which sets plain text?", ".text(\"hi\")", ".html(\"hi\", true)", ".write(\"hi\")", ".print(\"hi\")"], ["What does .attr(\"title\") do with one argument?", "Reads the attribute", "Deletes it", "Sets it to empty", "Throws an error"]],
      },
    },
  },
);

export const sass = course(
  { slug: "sass", name: "Sass", icon: "Sa", group: "Frameworks", blurb: "CSS with variables, nesting, and mixins, compiled to plain CSS.", shiki: "scss", noRunReason: "Sass compiles to CSS with a build step, so this example is read-only." },
  {
    Basics: {
      Variables: {
        intro: "Sass adds features to CSS and compiles to regular CSS. Variables store values you reuse.",
        code: `$chalk-green: #1f3d2b;\n$gap: 16px;\n\n.card {\n  background: $chalk-green;\n  padding: $gap;\n}`,
        basics: ["Sass variables start with $.", ".scss is the common file format.", "Sass compiles to CSS.", "Browsers never see Sass itself."],
        keywords: [["preprocessor", "A tool that compiles to CSS."], ["SCSS", "The CSS-like syntax of Sass."], ["compile", "Convert Sass into CSS."]],
        tips: ["Keep colors and spacing in one _variables.scss file.", "Common mistake: linking a .scss file directly in HTML. Link the compiled .css."],
        cards: [["What do Sass variables start with?", "$"], ["What does a browser load?", "The compiled CSS."]],
        quiz: [["Which is a Sass variable?", "$gap", "--gap", "@gap", "#gap"], ["What does Sass produce?", "CSS", "HTML", "JavaScript", "SQL"]],
      },
      Nesting: {
        intro: "Nesting lets you write selectors inside each other, following your HTML structure. `&` refers to the parent selector.",
        code: `.nav {\n  background: black;\n\n  a {\n    color: white;\n\n    &:hover {\n      color: gold;\n    }\n  }\n}`,
        basics: ["Child rules can sit inside parent rules.", "& means the parent selector.", "Nesting compiles to descendant selectors.", "Keep nesting shallow."],
        keywords: [["nesting", "Writing rules inside other rules."], ["parent selector", "The & symbol in Sass."], ["descendant", "An element inside another."]],
        tips: ["Stop at three levels of nesting to keep selectors simple.", "Common mistake: deep nesting that creates highly specific, hard-to-override CSS."],
        cards: [["What does & refer to?", "The parent selector."], ["How deep should nesting go?", "About three levels at most."]],
        quiz: [["What does &:hover in a compile to?", "a:hover", "a :hover", "&:hover", "hover a"], ["What is the risk of deep nesting?", "Overly specific selectors", "Smaller files", "Faster CSS", "Missing variables"]],
      },
      Mixins: {
        intro: "A mixin is a reusable block of styles, which can take arguments. Define it with `@mixin` and use it with `@include`.",
        code: `@mixin center($direction: row) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero {\n  @include center(column);\n}`,
        basics: ["@mixin defines reusable styles.", "@include inserts a mixin.", "Mixins can take arguments.", "Arguments can have defaults."],
        keywords: [["mixin", "A reusable block of CSS declarations."], ["@include", "The rule that uses a mixin."], ["@use", "The rule that loads another Sass file."]],
        tips: ["Use a mixin when styles take arguments. Otherwise a class is often simpler.", "Common mistake: forgetting @include and writing the mixin name alone."],
        cards: [["How do you define a mixin?", "@mixin name { ... }"], ["How do you use a mixin?", "@include name;"]],
        quiz: [["Which applies a mixin?", "@include", "@mixin", "@apply", "@extend-mixin"], ["Can mixins take arguments?", "Yes", "No", "Only colors", "Only numbers"]],
      },
    },
  },
);

const BOOTSTRAP = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">`;

export const bootstrap = course(
  { slug: "bootstrap", name: "Bootstrap", icon: "Bs", group: "Frameworks", blurb: "Ready-made components and a grid for building responsive pages fast.", shiki: "html", runner: "html" },
  {
    Basics: {
      "Grid system": {
        intro: "Bootstrap's grid splits each row into 12 columns. Classes say how many columns each item takes at each screen size.",
        code: `${BOOTSTRAP}\n<div class="container">\n  <div class="row">\n    <div class="col-md-8 bg-warning p-3">Main</div>\n    <div class="col-md-4 bg-success text-white p-3">Side</div>\n  </div>\n</div>`,
        basics: ["Each row has 12 columns.", "container centers the content.", "col-md-6 means half width from medium screens.", "Bootstrap is mobile-first."],
        keywords: [["breakpoint", "A screen width where the layout changes."], ["container", "A centered wrapper with padding."], ["mobile-first", "Styles for small screens, then larger."]],
        tips: ["Keep column numbers in each row adding up to 12.", "Common mistake: placing .col directly outside a .row."],
        cards: [["How many columns are in a row?", "12"], ["What does md mean in col-md-6?", "From the medium breakpoint upward."]],
        quiz: [["Which takes half a row?", "col-6", "col-2", "col-12", "col-half"], ["What does mobile-first mean?", "Small screens are styled first", "It only works on phones", "Desktop is unsupported", "Apps are required"]],
      },
      Components: {
        intro: "Bootstrap includes styled components such as buttons, cards, and alerts. Add the class names to plain HTML.",
        code: `${BOOTSTRAP}\n<div class="card m-3" style="width: 18rem">\n  <div class="card-body">\n    <h5 class="card-title">Akademy</h5>\n    <p class="card-text">Learn one lesson at a time.</p>\n    <button class="btn btn-success">Start</button>\n  </div>\n</div>`,
        basics: ["btn plus btn-primary makes a button.", "card groups related content.", "alert shows a message.", "Components are plain classes."],
        keywords: [["component", "A prebuilt piece of interface."], ["variant", "A style option such as btn-success."], ["utility class", "A class that does one thing."]],
        tips: ["Override Bootstrap with its CSS variables instead of !important.", "Common mistake: using btn-primary without the base btn class."],
        cards: [["Which two classes make a primary button?", "btn btn-primary"], ["Which component shows a message?", "alert"]],
        quiz: [["Which is a green button variant?", "btn-success", "btn-green", "btn-ok", "btn-go"], ["Which wraps related content in a box?", "card", "grid", "row", "span"]],
      },
      Utilities: {
        intro: "Utility classes handle one small job, such as spacing or alignment. `p-3` adds padding and `mt-2` adds a top margin.",
        code: `${BOOTSTRAP}\n<div class="d-flex justify-content-between align-items-center bg-dark text-white p-3 m-2 rounded">\n  <span>akademy.</span>\n  <span class="badge bg-warning text-dark">Free</span>\n</div>`,
        basics: ["m is margin; p is padding.", "t, b, s, e, x, and y pick sides.", "Sizes run from 0 to 5.", "d-flex turns on flexbox."],
        keywords: [["spacing utility", "A class that sets margin or padding."], ["d-flex", "A class setting display: flex."], ["text-center", "A class that centers text."]],
        tips: ["Reach for utilities before writing new CSS.", "Common mistake: long class lists when a small component class is clearer."],
        cards: [["What does mt-2 do?", "Adds a top margin of size 2."], ["Which class turns on flexbox?", "d-flex"]],
        quiz: [["Which adds padding on all sides?", "p-3", "m-3", "mt-3", "pad-3"], ["Which centers text?", "text-center", "align-middle-text", "center", "justify-text"]],
      },
    },
  },
);

const TAILWIND = `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`;

export const tailwind = course(
  { slug: "tailwind", name: "Tailwind CSS", icon: "Tw", group: "Frameworks", blurb: "Style directly in your HTML with small utility classes.", shiki: "html", runner: "html", certificateName: "Tailwind CSS Fundamentals" },
  {
    Basics: {
      Utilities: {
        intro: "Tailwind gives you tiny single-purpose classes. You combine them in your HTML rather than writing CSS rules.",
        code: `${TAILWIND}\n<div class="m-4 max-w-sm rounded-xl bg-emerald-900 p-6 text-white shadow-lg">\n  <h2 class="text-xl font-bold">akademy.</h2>\n  <p class="text-emerald-200">Utility classes in action.</p>\n</div>`,
        basics: ["Each class sets one style.", "p-4 is padding; m-4 is margin.", "text-xl sets the font size.", "bg-emerald-900 sets the background."],
        keywords: [["utility-first", "Building designs from small classes."], ["design scale", "Preset sizes and colors."], ["purging", "Removing unused classes from the build."]],
        tips: ["Editor plugins autocomplete every Tailwind class.", "Common mistake: building class names by joining strings. Tailwind cannot detect them."],
        cards: [["What is utility-first?", "Building designs by combining small classes."], ["Which class adds padding?", "p-4"]],
        quiz: [["Which sets a large font?", "text-xl", "font-xl", "size-xl", "big-text"], ["Why not build names like 'bg-' + color?", "Tailwind cannot detect them", "They run slowly", "They are illegal HTML", "They break JavaScript"]],
      },
      "Responsive and states": {
        intro: "Prefixes apply a class only sometimes. `md:` applies from medium screens up and `hover:` applies on hover.",
        code: `${TAILWIND}\n<button class="m-4 rounded bg-amber-300 px-4 py-2 font-semibold hover:bg-amber-400 md:px-8">\n  Hover me\n</button>`,
        basics: ["md: applies at medium width and up.", "hover: applies on hover.", "focus: applies when focused.", "dark: applies in dark mode."],
        keywords: [["variant", "A prefix that makes a class conditional."], ["breakpoint", "A width where a layout changes."], ["state", "A condition such as hover or focus."]],
        tips: ["Write mobile styles first, then add md: and lg: overrides.", "Common mistake: expecting sm: to mean phones only. It means small and up."],
        cards: [["What does md:flex do?", "Applies flex from the medium breakpoint up."], ["Which prefix styles hover?", "hover:"]],
        quiz: [["Unprefixed classes apply at which widths?", "All widths", "Only mobile", "Only desktop", "None"], ["Which prefix targets keyboard focus?", "focus:", "active:", "tab:", "key:"]],
      },
      Layout: {
        intro: "Flex and grid are also utilities. A few classes give you full layouts without separate CSS.",
        code: `${TAILWIND}\n<div class="grid grid-cols-3 gap-2 p-4">\n  <div class="rounded bg-emerald-800 p-4 text-white">1</div>\n  <div class="rounded bg-emerald-800 p-4 text-white">2</div>\n  <div class="rounded bg-emerald-800 p-4 text-white">3</div>\n</div>`,
        basics: ["flex and grid set the display.", "gap-2 spaces items.", "grid-cols-3 makes three columns.", "items-center and justify-between align."],
        keywords: [["grid-cols", "A utility setting column count."], ["gap", "A utility spacing children."], ["container", "A utility capping width by breakpoint."]],
        tips: ["If you repeat a class list, extract a component.", "Common mistake: using margins on every child when gap on the parent is enough."],
        cards: [["Which class makes three columns?", "grid-cols-3"], ["Which class spaces flex children?", "gap-2"]],
        quiz: [["Which pushes items to opposite ends?", "justify-between", "items-center", "gap-0", "grid-cols-1"], ["Where does gap go?", "On the parent", "On each child", "On the html tag", "In a script"]],
      },
    },
  },
);

export const xml = course(
  { slug: "xml", name: "XML", icon: "<x>", group: "Web", blurb: "A strict text format for storing and exchanging structured data.", shiki: "xml", noRunReason: "XML stores data and has no output, so this example is read-only." },
  {
    Basics: {
      "XML syntax": {
        intro: "XML stores data in tags you name yourself. Unlike HTML, its rules are strict.",
        code: `<?xml version="1.0" encoding="UTF-8"?>\n<student id="7">\n  <name>Ana</name>\n  <score>92</score>\n</student>`,
        basics: ["You choose the tag names.", "Every element must be closed.", "A document has one root element.", "Tag names are case-sensitive."],
        keywords: [["root element", "The single element containing all others."], ["well-formed", "Following all of XML's syntax rules."], ["prolog", "The optional <?xml ?> line at the top."]],
        tips: ["Prefer JSON for new web APIs, but expect XML in config files and older systems.", "Common mistake: leaving attribute values unquoted."],
        cards: [["How many root elements can XML have?", "Exactly one."], ["Is XML case-sensitive?", "Yes."]],
        quiz: [["What does XML stand for?", "eXtensible Markup Language", "Extra Modern Language", "Example Markup Language", "Extended Machine List"], ["Which is required in XML?", "A closing tag for every element", "A <body>", "CSS", "An <h1>"]],
      },
      "Attributes and namespaces": {
        intro: "Attributes add details to an element. Namespaces stop name clashes when mixing vocabularies.",
        code: `<library xmlns:bk="https://example.com/books">\n  <bk:book lang="en">\n    <bk:title>Learn to Code</bk:title>\n  </bk:book>\n</library>`,
        basics: ["Attribute values must be quoted.", "xmlns declares a namespace.", "A prefix ties names to a namespace.", "&lt; escapes the < character."],
        keywords: [["namespace", "A unique name group that prevents clashes."], ["prefix", "A short alias for a namespace."], ["entity", "A code for a special character, like &amp;."]],
        tips: ["Use elements for data and attributes for metadata about it.", "Common mistake: a raw & in text, which breaks the parser."],
        cards: [["What escapes an ampersand?", "&amp;"], ["What does xmlns do?", "Declares a namespace."]],
        quiz: [["How do you write < in XML text?", "&lt;", "\\<", "<<", "%lt"], ["Why use namespaces?", "To avoid name clashes", "To speed up parsing", "To add styling", "To compress files"]],
      },
      XPath: {
        intro: "XPath is a query language for finding parts of an XML document. It reads like a file path.",
        code: `/library/book[1]/title\n//book[@lang='en']\n//book[price > 100]/title\ncount(//book)`,
        basics: ["/ steps to a child.", "// searches at any depth.", "@ selects an attribute.", "[ ] filters results."],
        keywords: [["XPath", "A language for selecting XML nodes."], ["node", "One item in an XML tree."], ["predicate", "A filter in square brackets."]],
        tips: ["Browsers run XPath too, with document.evaluate.", "Common mistake: assuming indexes start at 0. In XPath the first is 1."],
        cards: [["What does // mean?", "Search at any depth."], ["What is the first index in XPath?", "1"]],
        quiz: [["Which selects an attribute?", "@lang", "#lang", ".lang", "$lang"], ["What does [1] pick?", "The first match", "The second match", "All matches", "Nothing"]],
      },
    },
  },
);
