// Every language the playground can run, and where it runs.
// "preview", "sqlite", and "pyodide" run in the visitor's browser; "remote" goes through /api/run.

export type RunnerId =
  | "html"
  | "javascript"
  | "sql"
  | "python"
  | "python-data"
  | "java"
  | "c"
  | "cpp"
  | "csharp"
  | "php"
  | "go"
  | "rust"
  | "kotlin"
  | "swift"
  | "typescript"
  | "r"
  | "bash"
  | "ruby"
  | "node";

export type Runner = {
  id: RunnerId;
  label: string;
  kind: "preview" | "sqlite" | "pyodide" | "remote";
  filename: string;
  /** Grammar name for the static code highlighter. */
  shiki: string;
  hello: string;
};

const HELLO_HTML = `<style>
  h2 { color: tomato; }
</style>
<h2>Chalk it up</h2>
<button onclick="this.textContent = 'Clicked!'">Click me</button>
`;

export const RUNNERS: Runner[] = [
  { id: "html", label: "HTML / CSS", kind: "preview", filename: "index.html", shiki: "html", hello: HELLO_HTML },
  {
    id: "javascript",
    label: "JavaScript",
    kind: "preview",
    filename: "script.js",
    shiki: "javascript",
    hello: `const name = "Akademy";\nconsole.log("Hello, " + name + "!");\n`,
  },
  {
    id: "sql",
    label: "SQL (SQLite)",
    kind: "sqlite",
    filename: "query.sql",
    shiki: "sql",
    hello: `CREATE TABLE students (name TEXT, score INTEGER);\nINSERT INTO students VALUES ('Ana', 92), ('Ben', 78);\nSELECT * FROM students WHERE score > 80;\n`,
  },
  { id: "python", label: "Python", kind: "remote", filename: "main.py", shiki: "python", hello: `print("Hello, Akademy!")\n` },
  {
    id: "python-data",
    label: "Python + NumPy / pandas",
    kind: "pyodide",
    filename: "analysis.py",
    shiki: "python",
    hello: `import numpy as np\nimport pandas as pd\n\nscores = pd.Series(np.array([90, 72, 85]))\nprint(scores.describe())\n`,
  },
  {
    id: "java",
    label: "Java",
    kind: "remote",
    filename: "Main.java",
    shiki: "java",
    hello: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Akademy!");\n  }\n}\n`,
  },
  { id: "c", label: "C", kind: "remote", filename: "main.c", shiki: "c", hello: `#include <stdio.h>\n\nint main(void) {\n  printf("Hello, Akademy!\\n");\n  return 0;\n}\n` },
  { id: "cpp", label: "C++", kind: "remote", filename: "main.cpp", shiki: "cpp", hello: `#include <iostream>\n\nint main() {\n  std::cout << "Hello, Akademy!\\n";\n  return 0;\n}\n` },
  {
    id: "csharp",
    label: "C#",
    kind: "remote",
    filename: "Program.cs",
    shiki: "csharp",
    hello: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, Akademy!");\n  }\n}\n`,
  },
  { id: "php", label: "PHP", kind: "remote", filename: "index.php", shiki: "php", hello: `<?php\necho "Hello, Akademy!\\n";\n` },
  { id: "go", label: "Go", kind: "remote", filename: "main.go", shiki: "go", hello: `package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, Akademy!")\n}\n` },
  { id: "rust", label: "Rust", kind: "remote", filename: "main.rs", shiki: "rust", hello: `fn main() {\n    println!("Hello, Akademy!");\n}\n` },
  { id: "kotlin", label: "Kotlin", kind: "remote", filename: "Main.kt", shiki: "kotlin", hello: `fun main() {\n    println("Hello, Akademy!")\n}\n` },
  { id: "swift", label: "Swift", kind: "remote", filename: "main.swift", shiki: "swift", hello: `print("Hello, Akademy!")\n` },
  { id: "typescript", label: "TypeScript", kind: "remote", filename: "main.ts", shiki: "typescript", hello: `const name: string = "Akademy";\nconsole.log(\`Hello, \${name}!\`);\n` },
  { id: "r", label: "R", kind: "remote", filename: "main.r", shiki: "r", hello: `print("Hello, Akademy!")\n` },
  { id: "bash", label: "Bash", kind: "remote", filename: "main.sh", shiki: "bash", hello: `name="Akademy"\necho "Hello, $name!"\n` },
  { id: "ruby", label: "Ruby", kind: "remote", filename: "main.rb", shiki: "ruby", hello: `puts "Hello, Akademy!"\n` },
  { id: "node", label: "Node.js", kind: "remote", filename: "server.js", shiki: "javascript", hello: `console.log("Hello from Node", process.version);\n` },
];

export function getRunner(id: string | undefined | null): Runner | undefined {
  return RUNNERS.find((r) => r.id === id);
}
