import { course } from "./types";

export const sql = course(
  { slug: "sql", name: "SQL", icon: "SQL", group: "Databases", blurb: "Ask questions of a database and get answers in rows and columns.", shiki: "sql", runner: "sql" },
  {
    Basics: {
      "SQL intro": {
        intro: "SQL is the language for talking to relational databases. Data lives in tables of rows and columns.",
        code: `CREATE TABLE students (name TEXT, score INTEGER);\nINSERT INTO students VALUES ('Ana', 92), ('Ben', 78), ('Cara', 64);\nSELECT * FROM students;`,
        basics: ["Tables hold rows and columns.", "SELECT reads data.", "* means all columns.", "Statements end with a semicolon."],
        keywords: [["table", "Data arranged in rows and columns."], ["row", "One record in a table."], ["query", "A request for data."]],
        tips: ["Write SQL keywords in capitals so queries are easy to scan.", "Common mistake: double quotes for text. Standard SQL uses single quotes."],
        cards: [["What does SQL stand for?", "Structured Query Language"], ["What does * select?", "All columns."]],
        quiz: [["Which reads data?", "SELECT", "READ", "GET", "OPEN"], ["Which quotes wrap text?", "Single quotes", "Backticks only", "Angle brackets", "Parentheses"]],
      },
      "WHERE and ORDER BY": {
        intro: "`WHERE` filters rows and `ORDER BY` sorts them. `LIMIT` caps how many come back.",
        code: `CREATE TABLE students (name TEXT, score INTEGER);\nINSERT INTO students VALUES ('Ana', 92), ('Ben', 78), ('Cara', 64);\nSELECT name, score FROM students\nWHERE score >= 70\nORDER BY score DESC\nLIMIT 2;`,
        basics: ["WHERE filters rows.", "AND and OR combine conditions.", "ORDER BY sorts; DESC reverses.", "LIMIT caps results."],
        keywords: [["filter", "Keeping rows that match."], ["DESC", "Descending order."], ["LIKE", "Matching text with patterns."]],
        tips: ["Use LIKE 'A%' to find text starting with A.", "Common mistake: WHERE col = NULL. Use IS NULL."],
        cards: [["How do you sort high to low?", "ORDER BY col DESC"], ["How do you test for null?", "IS NULL"]],
        quiz: [["Which filters rows?", "WHERE", "ORDER BY", "LIMIT", "FROM"], ["Which clause comes last here?", "LIMIT", "SELECT", "FROM", "WHERE"]],
      },
      "Changing data": {
        intro: "`INSERT` adds rows, `UPDATE` changes them, and `DELETE` removes them. Always check your `WHERE`.",
        code: `CREATE TABLE students (name TEXT, score INTEGER);\nINSERT INTO students VALUES ('Ana', 92), ('Ben', 78);\nUPDATE students SET score = 80 WHERE name = 'Ben';\nDELETE FROM students WHERE score > 90;\nSELECT * FROM students;`,
        basics: ["INSERT INTO adds rows.", "UPDATE ... SET changes values.", "DELETE FROM removes rows.", "Without WHERE, every row changes."],
        keywords: [["INSERT", "Adds new rows."], ["UPDATE", "Changes existing rows."], ["transaction", "A group of changes that succeed or fail together."]],
        tips: ["Run a SELECT with the same WHERE before you UPDATE or DELETE.", "Common mistake: forgetting WHERE and changing every row."],
        cards: [["What does UPDATE without WHERE do?", "Changes every row."], ["Which removes rows?", "DELETE"]],
        quiz: [["Which adds a row?", "INSERT", "ADD", "PUT", "APPEND"], ["What goes with UPDATE?", "SET", "VALUES", "INTO", "TO"]],
      },
    },
    "Combining data": {
      "Aggregates and GROUP BY": {
        intro: "Aggregate functions summarize many rows. `GROUP BY` makes one summary per group.",
        code: `CREATE TABLE sales (city TEXT, amount INTEGER);\nINSERT INTO sales VALUES ('Cebu', 100), ('Cebu', 50), ('Davao', 75);\nSELECT city, COUNT(*) AS orders, SUM(amount) AS total\nFROM sales\nGROUP BY city\nHAVING SUM(amount) > 80;`,
        basics: ["COUNT, SUM, AVG, MIN, MAX summarize.", "GROUP BY splits rows into groups.", "HAVING filters groups.", "AS renames a column."],
        keywords: [["aggregate", "A function over many rows."], ["GROUP BY", "Groups rows for summaries."], ["HAVING", "Filters groups after aggregation."]],
        tips: ["WHERE filters rows before grouping. HAVING filters after.", "Common mistake: selecting a column that is neither grouped nor aggregated."],
        cards: [["WHERE or HAVING for groups?", "HAVING"], ["Which function counts rows?", "COUNT(*)"]],
        quiz: [["Which computes an average?", "AVG", "MEAN", "AVERAGE", "MID"], ["When does HAVING run?", "After grouping", "Before FROM", "Before WHERE", "Never"]],
      },
      Joins: {
        intro: "A `JOIN` combines tables on matching columns. Keys link the rows together.",
        code: `CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT);\nCREATE TABLE exams (student_id INTEGER, score INTEGER);\nINSERT INTO students VALUES (1, 'Ana'), (2, 'Ben');\nINSERT INTO exams VALUES (1, 92), (1, 88);\nSELECT s.name, e.score\nFROM students s\nLEFT JOIN exams e ON e.student_id = s.id;`,
        basics: ["INNER JOIN keeps matches only.", "LEFT JOIN keeps all left rows.", "ON says how rows match.", "Aliases shorten table names."],
        keywords: [["primary key", "A unique id for each row."], ["foreign key", "A column pointing at another table's key."], ["join", "Combining rows from tables."]],
        tips: ["Prefix columns with table aliases to avoid confusion.", "Common mistake: leaving out ON, which pairs every row with every other."],
        cards: [["Which join keeps all left rows?", "LEFT JOIN"], ["What is a foreign key?", "A column pointing at another table's primary key."]],
        quiz: [["Which join keeps only matches?", "INNER JOIN", "LEFT JOIN", "FULL JOIN", "OUTER LOOP"], ["What does ON define?", "How rows match", "Sort order", "Column names", "The database"]],
      },
    },
  },
);

export const mysql = course(
  { slug: "mysql", name: "MySQL", icon: "My", group: "Databases", blurb: "The popular open-source database behind many web apps.", shiki: "sql", noRunReason: "MySQL-only syntax needs a MySQL server, so this example is read-only. Try general SQL in the SQL course." },
  {
    Basics: {
      "MySQL intro": {
        intro: "MySQL is a database server. You create a database, pick it with `USE`, then create tables.",
        code: `CREATE DATABASE school;\nUSE school;\n\nCREATE TABLE students (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);`,
        basics: ["USE selects a database.", "AUTO_INCREMENT numbers rows.", "VARCHAR(n) stores short text.", "NOT NULL requires a value."],
        keywords: [["AUTO_INCREMENT", "Assigns the next number to each row."], ["VARCHAR", "Variable-length text."], ["schema", "The structure of a database."]],
        tips: ["Use InnoDB and utf8mb4, which are modern defaults.", "Common mistake: using the old utf8 charset, which cannot store emoji."],
        cards: [["Which command picks a database?", "USE"], ["What numbers rows automatically?", "AUTO_INCREMENT"]],
        quiz: [["Which stores short text?", "VARCHAR(100)", "INT", "BOOL", "BLOB(100)"], ["What does NOT NULL do?", "Requires a value", "Deletes nulls", "Adds an index", "Encrypts"]],
      },
      Indexes: {
        intro: "An index makes lookups fast, much like the index of a book. `EXPLAIN` shows how MySQL runs a query.",
        code: `CREATE INDEX idx_students_name ON students (name);\n\nEXPLAIN SELECT * FROM students WHERE name = 'Ana';\n\nSHOW INDEX FROM students;`,
        basics: ["Indexes speed up reads.", "Indexes slow writes slightly.", "Primary keys are indexed.", "EXPLAIN shows a query plan."],
        keywords: [["index", "A structure for fast lookup."], ["EXPLAIN", "Shows how a query executes."], ["full table scan", "Reading every row."]],
        tips: ["Index columns you filter or join on often.", "Common mistake: indexing every column, which slows every write."],
        cards: [["What does EXPLAIN show?", "The query execution plan."], ["What is the cost of an index?", "Slower writes and more storage."]],
        quiz: [["What do indexes speed up?", "Reads", "Writes", "Deletes only", "Backups"], ["Which is indexed automatically?", "The primary key", "Every text column", "Comments", "Nothing"]],
      },
      "Users and backups": {
        intro: "Give each app its own user with limited rights. `mysqldump` backs up a database.",
        code: `CREATE USER 'app'@'localhost' IDENTIFIED BY 'change-this-password';\nGRANT SELECT, INSERT, UPDATE ON school.* TO 'app'@'localhost';\n\n-- In a terminal:\n-- mysqldump -u root -p school > backup.sql`,
        basics: ["CREATE USER adds an account.", "GRANT gives permissions.", "REVOKE removes permissions.", "mysqldump exports a database."],
        keywords: [["GRANT", "Gives a user permissions."], ["privilege", "A permission on a database."], ["mysqldump", "A backup tool."]],
        tips: ["Give each app only the rights it needs.", "Common mistake: connecting apps as root."],
        cards: [["Which command gives permissions?", "GRANT"], ["Which tool makes a backup?", "mysqldump"]],
        quiz: [["Which removes a permission?", "REVOKE", "DROP", "DENY", "UNGRANT"], ["Should an app connect as root?", "No, use a limited user", "Yes, always", "Only in production", "Only on Fridays"]],
      },
    },
  },
);

export const postgresql = course(
  { slug: "postgresql", name: "PostgreSQL", icon: "Pg", group: "Databases", blurb: "A powerful open-source database with rich types and strong standards support.", shiki: "sql", noRunReason: "Postgres-only syntax needs a Postgres server, so this example is read-only. Try general SQL in the SQL course." },
  {
    Basics: {
      "PostgreSQL intro": {
        intro: "PostgreSQL is a feature-rich database server. `psql` is its command-line client.",
        code: `CREATE TABLE students (\n  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,\n  name TEXT NOT NULL,\n  joined DATE DEFAULT CURRENT_DATE\n);\n\nINSERT INTO students (name) VALUES ('Ana') RETURNING id;`,
        basics: ["psql is the terminal client.", "IDENTITY numbers rows.", "TEXT holds any length of text.", "RETURNING gives back inserted rows."],
        keywords: [["psql", "The PostgreSQL terminal client."], ["identity column", "An auto-numbered column."], ["RETURNING", "Returns rows changed by a statement."]],
        tips: ["In psql, \\dt lists tables and \\d name describes one.", "Common mistake: unquoted names fold to lowercase."],
        cards: [["Which psql command lists tables?", "\\dt"], ["What does RETURNING do?", "Gives back the affected rows."]],
        quiz: [["Which is Postgres's terminal client?", "psql", "mysql", "sqlcmd", "pgcli-admin"], ["Which is a modern auto-number?", "GENERATED ALWAYS AS IDENTITY", "AUTO_INCREMENT", "ROWNUM", "COUNTER"]],
      },
      "JSON and arrays": {
        intro: "PostgreSQL stores JSON and arrays directly. `jsonb` is binary JSON that you can query and index.",
        code: `CREATE TABLE events (id SERIAL PRIMARY KEY, data JSONB, tags TEXT[]);\n\nINSERT INTO events (data, tags)\nVALUES ('{"type": "login", "user": "Ana"}', ARRAY['web', 'auth']);\n\nSELECT data->>'user' FROM events\nWHERE data->>'type' = 'login' AND 'web' = ANY(tags);`,
        basics: ["jsonb stores queryable JSON.", "-> gets JSON; ->> gets text.", "TEXT[] is an array of text.", "ANY checks array members."],
        keywords: [["jsonb", "A binary JSON column type."], ["->>", "The operator getting a JSON field as text."], ["GIN index", "An index type for jsonb and arrays."]],
        tips: ["Prefer jsonb to json for querying.", "Common mistake: putting relational data in JSON that needs its own table."],
        cards: [["-> or ->>: which gives text?", "->>"], ["Which index suits jsonb?", "GIN"]],
        quiz: [["Which type is best for querying JSON?", "jsonb", "json", "text", "blob"], ["What does TEXT[] mean?", "An array of text", "A long text", "A text key", "An error"]],
      },
      "Window functions": {
        intro: "Window functions calculate across related rows and keep every row. They are great for rankings and running totals.",
        code: `SELECT name, score,\n       RANK() OVER (ORDER BY score DESC) AS place,\n       AVG(score) OVER () AS class_average\nFROM students;`,
        basics: ["OVER defines the window.", "PARTITION BY splits groups.", "RANK() orders rows.", "Rows are kept, unlike GROUP BY."],
        keywords: [["window function", "A calculation over related rows."], ["PARTITION BY", "Divides rows into windows."], ["CTE", "A named subquery written with WITH."]],
        tips: ["Combine with a WITH clause to keep long queries readable.", "Common mistake: filtering a window in WHERE. Use a subquery."],
        cards: [["Do window functions reduce rows?", "No, they keep every row."], ["What splits a window into groups?", "PARTITION BY"]],
        quiz: [["Which keyword starts a window?", "OVER", "WINDOW-ON", "GROUP", "WITH"], ["Which gives each row a ranking?", "RANK()", "SUM()", "LIMIT", "COUNT(*)"]],
      },
    },
  },
);

export const mongodb = course(
  { slug: "mongodb", name: "MongoDB", icon: "Mg", group: "Databases", blurb: "A document database that stores flexible JSON-like records.", shiki: "javascript", noRunReason: "MongoDB commands need a database server, so this example is read-only." },
  {
    Basics: {
      "Documents and collections": {
        intro: "MongoDB stores JSON-like documents in collections, not rows in tables. Each document can have its own shape.",
        code: `db.students.insertOne({ name: "Ana", score: 92, tags: ["cs"] });\n\ndb.students.insertMany([\n  { name: "Ben", score: 78 },\n  { name: "Cara", score: 64 },\n]);`,
        basics: ["A document is like a JSON object.", "A collection is like a table.", "_id is added automatically.", "Documents can differ in shape."],
        keywords: [["document", "One record stored as JSON-like data."], ["collection", "A group of documents."], ["BSON", "The binary format MongoDB stores."]],
        tips: ["Embed data that you always read together.", "Common mistake: treating it like SQL with many tiny linked collections."],
        cards: [["What is a collection like in SQL?", "A table."], ["What is added to every document?", "An _id field."]],
        quiz: [["Which adds one document?", "insertOne", "addRow", "put", "INSERT INTO"], ["What is BSON?", "Binary JSON", "A bash script", "A shell", "A CSS file"]],
      },
      Queries: {
        intro: "`find` takes a filter document. Operators such as `$gte` express comparisons.",
        code: `db.students.find({ score: { $gte: 75 } }).sort({ score: -1 }).limit(2);\n\ndb.students.updateOne({ name: "Ben" }, { $set: { score: 80 } });\n\ndb.students.deleteOne({ name: "Cara" });`,
        basics: ["find filters documents.", "$gte, $lt, and $in compare.", "$set changes fields.", "sort uses 1 and -1."],
        keywords: [["query operator", "A $ keyword for comparisons."], ["projection", "Choosing which fields to return."], ["cursor", "A pointer over query results."]],
        tips: ["Add an index for fields you filter on often.", "Common mistake: updating without $set, which errors or replaces fields."],
        cards: [["Which operator means greater or equal?", "$gte"], ["What does sort({ a: -1 }) do?", "Sorts a descending."]],
        quiz: [["Which changes a field?", "$set", "$put", "$add", "$new"], ["Which reads documents?", "find", "select", "get", "fetch"]],
      },
      Aggregation: {
        intro: "The aggregation pipeline passes documents through stages, such as filter, then group, then sort.",
        code: `db.sales.aggregate([\n  { $match: { year: 2026 } },\n  { $group: { _id: "$city", total: { $sum: "$amount" } } },\n  { $sort: { total: -1 } },\n]);`,
        basics: ["A pipeline is a list of stages.", "$match filters.", "$group summarizes.", "$lookup joins collections."],
        keywords: [["pipeline", "Stages that process documents in order."], ["$group", "The stage that summarizes."], ["$lookup", "The stage that joins collections."]],
        tips: ["Put $match first so later stages see fewer documents.", "Common mistake: forgetting the $ on field references like \"$city\"."],
        cards: [["Which stage filters?", "$match"], ["Which stage joins?", "$lookup"]],
        quiz: [["Which stage summarizes?", "$group", "$match", "$sort", "$limit"], ["Why place $match early?", "To reduce work", "It is required by syntax", "To add fields", "To sort"]],
      },
    },
  },
);

export const nodejs = course(
  { slug: "nodejs", name: "Node.js", icon: "No", group: "Frameworks", blurb: "Run JavaScript on the server and build web APIs.", shiki: "javascript", runner: "node" },
  {
    Basics: {
      "Node intro": {
        intro: "Node.js runs JavaScript outside the browser. It adds modules for files, networks, and more.",
        code: `const os = require("os");\nconsole.log("Hello from Node", process.version);\nconsole.log("Platform:", os.platform());`,
        basics: ["Node runs JavaScript on servers.", "require loads a module.", "process has runtime details.", "npm installs packages."],
        keywords: [["module", "A reusable file of code."], ["npm", "Node's package manager."], ["runtime", "The environment that runs code."]],
        tips: ["Use import syntax in new projects with type: module.", "Common mistake: using document or window. They exist only in browsers."],
        cards: [["What does npm do?", "Installs and manages packages."], ["Does Node have a document object?", "No, that is browser-only."]],
        quiz: [["Which loads a module?", "require(\"os\")", "include os", "using os", "#import os"], ["What is Node.js?", "A JavaScript runtime", "A CSS framework", "A database", "A browser"]],
      },
      "Async code": {
        intro: "Node waits for files and networks without blocking. `async` and `await` keep that code readable.",
        code: `const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\n\nasync function main() {\n  console.log("Start");\n  await wait(200);\n  console.log("200 ms later");\n}\n\nmain();`,
        basics: ["Node uses one main thread.", "A Promise is a future result.", "await pauses an async function.", "try/catch handles async errors."],
        keywords: [["Promise", "An object for a future value."], ["event loop", "The system running callbacks when work is ready."], ["non-blocking", "Not stopping while waiting."]],
        tips: ["Use Promise.all to run tasks at the same time.", "Common mistake: forgetting await and logging a pending Promise."],
        cards: [["What does await do?", "Pauses until a Promise settles."], ["Where can you use await?", "In async functions and ES module top level."]],
        quiz: [["What is a Promise?", "A future result", "A loop", "A class of errors", "A database"], ["Which runs tasks at once?", "Promise.all", "Promise.wait", "async.loop", "await.all"]],
      },
      "HTTP server": {
        intro: "The built-in `http` module creates a web server. This example starts one, requests a page from it, and stops.",
        code: `const http = require("http");\n\nconst server = http.createServer((req, res) => {\n  res.setHeader("Content-Type", "application/json");\n  res.end(JSON.stringify({ path: req.url, ok: true }));\n});\n\nserver.listen(3456, async () => {\n  const reply = await fetch("http://localhost:3456/hello");\n  console.log(await reply.text());\n  server.close();\n});`,
        basics: ["createServer takes a request handler.", "req is the request; res is the response.", "res.end finishes the response.", "listen picks a port."],
        keywords: [["port", "A numbered door for network traffic."], ["request", "What the client asks for."], ["response", "What the server sends back."]],
        tips: ["Frameworks such as Express add routing on top of this.", "Common mistake: forgetting res.end, which leaves the request hanging."],
        cards: [["Which method finishes a response?", "res.end()"], ["Which method starts listening?", "server.listen()"]],
        quiz: [["Which module makes a server?", "http", "fs", "path", "os"], ["What happens without res.end?", "The request hangs", "It crashes the OS", "It restarts", "It caches"]],
      },
    },
  },
);

export const django = course(
  { slug: "django", name: "Django", icon: "Dj", group: "Frameworks", blurb: "Python's full web framework, with a database and admin site built in.", shiki: "python", noRunReason: "Django runs as a project on a server, so this example is read-only." },
  {
    Basics: {
      "Views and URLs": {
        intro: "Django maps URLs to view functions. A view takes a request and returns a response.",
        code: `# views.py\nfrom django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse("Hello, Akademy!")\n\n# urls.py\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [path("", views.home)]`,
        basics: ["A project contains apps.", "urls.py routes paths to views.", "A view returns a response.", "manage.py runserver starts it."],
        keywords: [["view", "A function handling a request."], ["URLconf", "The list of URL patterns."], ["manage.py", "Django's project command tool."]],
        tips: ["Run python manage.py startapp to create each feature's app.", "Common mistake: adding an app but not listing it in INSTALLED_APPS."],
        cards: [["Which file routes URLs?", "urls.py"], ["What must a view return?", "A response."]],
        quiz: [["Which starts the dev server?", "manage.py runserver", "django start", "python run", "npm start"], ["Where do you register apps?", "INSTALLED_APPS", "urlpatterns", "views.py", "the template"]],
      },
      Models: {
        intro: "A model is a Python class that maps to a database table. Django builds the queries for you.",
        code: `from django.db import models\n\nclass Student(models.Model):\n    name = models.CharField(max_length=100)\n    score = models.IntegerField(default=0)\n\n# python manage.py makemigrations\n# python manage.py migrate\n\npassed = Student.objects.filter(score__gte=75).order_by("-score")`,
        basics: ["Models subclass models.Model.", "Fields become columns.", "Migrations update the database.", ".objects runs queries."],
        keywords: [["ORM", "Maps classes to database tables."], ["migration", "A recorded database change."], ["QuerySet", "A lazy database query."]],
        tips: ["Register models in admin.py to get a free admin site.", "Common mistake: changing a model without running migrations."],
        cards: [["What does score__gte mean?", "score is greater than or equal to."], ["Which commands apply model changes?", "makemigrations, then migrate."]],
        quiz: [["What does ORM stand for?", "Object-Relational Mapping", "Open Route Manager", "Online Record Model", "Ordered Row Map"], ["Which runs queries?", "Student.objects", "Student.sql", "Student.db()", "Student.rows"]],
      },
      Templates: {
        intro: "Templates are HTML files with placeholders. Views fill them with data through `render`.",
        code: `# views.py\nfrom django.shortcuts import render\n\ndef roster(request):\n    return render(request, "roster.html", {"students": ["Ana", "Ben"]})\n\n# roster.html\n# <ul>\n# {% for s in students %}\n#   <li>{{ s }}</li>\n# {% endfor %}\n# </ul>`,
        basics: ["{{ x }} prints a value.", "{% %} runs template logic.", "render combines a template and data.", "Output is escaped automatically."],
        keywords: [["template", "An HTML file with placeholders."], ["context", "The data passed to a template."], ["autoescape", "Making values safe in HTML."]],
        tips: ["Use template inheritance with {% extends %} to share layouts.", "Common mistake: placing heavy logic in templates. Keep it in views."],
        cards: [["Which syntax prints a value?", "{{ value }}"], ["Which syntax runs logic?", "{% ... %}"]],
        quiz: [["Which function renders a template?", "render", "print", "show", "send"], ["What is the context?", "Data passed to the template", "The database", "CSS", "A URL"]],
      },
    },
  },
);

export const numpy = course(
  { slug: "numpy", name: "NumPy", icon: "Np", group: "Data and tools", blurb: "Fast arrays and math for Python data work.", shiki: "python", runner: "python-data" },
  {
    Basics: {
      Arrays: {
        intro: "NumPy arrays are fast, fixed-type grids of numbers. They are the base of Python's data tools.",
        code: `import numpy as np\n\nscores = np.array([90, 72, 85])\nprint(scores.mean(), scores.max())\nprint(scores.shape, scores.dtype)`,
        basics: ["np.array makes an array.", "All items share one type.", "shape gives dimensions.", "dtype gives the element type."],
        keywords: [["ndarray", "NumPy's array type."], ["shape", "The size in each dimension."], ["dtype", "The element type."]],
        tips: ["Import it as np, as everyone does.", "Common mistake: mixing text and numbers, which turns everything into strings."],
        cards: [["What is the standard import?", "import numpy as np"], ["Which attribute gives dimensions?", "shape"]],
        quiz: [["Which creates an array?", "np.array([1, 2])", "np.list(1, 2)", "array{1, 2}", "numpy(1, 2)"], ["How many types can one array hold?", "One", "Two", "Unlimited", "None"]],
      },
      "Vectorized math": {
        intro: "Math applies to every element without a loop. Broadcasting stretches smaller values to fit.",
        code: `import numpy as np\n\nscores = np.array([90, 72, 85])\nprint(scores + 5)\nprint(scores * 1.1)\nprint(scores[scores >= 75])`,
        basics: ["Operators work element by element.", "Broadcasting matches shapes.", "Conditions make boolean masks.", "Vectorized code beats Python loops."],
        keywords: [["vectorization", "Running an operation over a whole array."], ["broadcasting", "Stretching shapes to match."], ["boolean mask", "An array of True or False for filtering."]],
        tips: ["If you are writing a for loop over an array, look for a vectorized way.", "Common mistake: using and between arrays. Use &."],
        cards: [["What is a boolean mask?", "An array of True and False used for filtering."], ["Which combines array conditions?", "& and |"]],
        quiz: [["What does np.array([1, 2]) + 1 give?", "[2 3]", "[1 2 1]", "An error", "4"], ["Which is usually fastest?", "Vectorized math", "Nested for loops", "print", "Strings"]],
      },
      "Reshaping and axes": {
        intro: "`reshape` changes an array's dimensions. The `axis` argument picks the direction to work along.",
        code: `import numpy as np\n\ngrid = np.arange(6).reshape(2, 3)\nprint(grid)\nprint(grid.sum(axis=0))\nprint(grid.sum(axis=1))`,
        basics: ["arange makes a sequence.", "reshape changes dimensions.", "axis=0 goes down columns.", "axis=1 goes across rows."],
        keywords: [["axis", "One direction of an array."], ["reshape", "Change dimensions without changing data."], ["slice", "A selected range of an array."]],
        tips: ["Use -1 in reshape to let NumPy work out one dimension.", "Common mistake: a reshape whose sizes do not multiply to the total."],
        cards: [["Which axis sums down columns?", "axis=0"], ["What does -1 mean in reshape?", "Work out this dimension."]],
        quiz: [["Can 6 items reshape to (2, 3)?", "Yes", "No", "Only with zeros", "Only as strings"], ["What does grid.sum(axis=1) do?", "Sums each row", "Sums each column", "Sums everything", "Sorts"]],
      },
    },
  },
);

export const pandas = course(
  { slug: "pandas", name: "Pandas", icon: "Pd", group: "Data and tools", blurb: "Clean, filter, and summarize tables of data in Python.", shiki: "python", runner: "python-data" },
  {
    Basics: {
      DataFrames: {
        intro: "A DataFrame is a table in Python. Each column is a Series.",
        code: `import pandas as pd\n\ndf = pd.DataFrame({\n    "name": ["Ana", "Ben", "Cara"],\n    "score": [92, 78, 64],\n})\nprint(df)\nprint(df["score"].mean())\nprint(df.shape)`,
        basics: ["DataFrame is a table.", "Series is one column.", "df[\"col\"] selects a column.", "pd.read_csv loads a file."],
        keywords: [["DataFrame", "A table of rows and columns."], ["Series", "One column of data."], ["index", "The row labels."]],
        tips: ["Use df.head() and df.info() first on any new data.", "Common mistake: forgetting that most methods return a new DataFrame."],
        cards: [["What is a Series?", "One column of data."], ["Which function loads a CSV?", "pd.read_csv"]],
        quiz: [["Which is the standard import?", "import pandas as pd", "import pd", "from data import pandas", "use pandas"], ["What does df.shape give?", "Rows and columns", "File size", "A chart", "Column types"]],
      },
      "Filtering and sorting": {
        intro: "Filter with a boolean condition and sort with `sort_values`. `.loc` selects by label.",
        code: `import pandas as pd\n\ndf = pd.DataFrame({"name": ["Ana", "Ben", "Cara"], "score": [92, 78, 64]})\npassed = df[df["score"] >= 75]\nprint(passed.sort_values("score", ascending=False))\nprint(df.loc[0, "name"])`,
        basics: ["df[condition] filters rows.", "& combines conditions.", "sort_values sorts.", ".loc uses labels; .iloc uses positions."],
        keywords: [["loc", "Selection by label."], ["iloc", "Selection by position."], ["mask", "A True or False column used to filter."]],
        tips: ["Wrap each condition in parentheses when combining with &.", "Common mistake: using and instead of &."],
        cards: [["loc or iloc: which uses positions?", "iloc"], ["Which method sorts rows?", "sort_values"]],
        quiz: [["Which keeps scores over 80?", "df[df[\"score\"] > 80]", "df.score > 80 only", "df.where[80]", "filter(df, 80)"], ["Which combines conditions?", "&", "and", "+", ","]],
      },
      "Grouping and cleaning": {
        intro: "`groupby` splits rows, summarizes each group, and joins the results. `fillna` handles missing values.",
        code: `import pandas as pd\n\ndf = pd.DataFrame({\n    "city": ["Cebu", "Cebu", "Davao"],\n    "amount": [100, None, 75],\n})\ndf["amount"] = df["amount"].fillna(0)\nprint(df.groupby("city")["amount"].sum())`,
        basics: ["groupby makes groups.", "Aggregations summarize each group.", "isna finds missing values.", "fillna replaces missing values."],
        keywords: [["groupby", "Split, apply, combine."], ["NaN", "A marker for a missing number."], ["fillna", "Replaces missing values."]],
        tips: ["Check df.isna().sum() before analyzing data.", "Common mistake: comparing with == NaN. Use isna()."],
        cards: [["How do you find missing values?", "df.isna()"], ["What does groupby do?", "Splits rows into groups for summarizing."]],
        quiz: [["Which fills missing values?", "fillna", "dropna", "groupby", "merge"], ["What is NaN?", "A missing number", "A string", "An index", "Zero"]],
      },
    },
  },
);

export const git = course(
  { slug: "git", name: "Git", icon: "Git", group: "Data and tools", blurb: "Save versions of your code and work with others.", shiki: "bash", noRunReason: "Git works on a project on your own computer, so this example is read-only." },
  {
    Basics: {
      "First commits": {
        intro: "Git records snapshots of your project. You stage changes, then commit them with a message.",
        code: `git init\ngit status\ngit add index.html\ngit commit -m "Add home page"\ngit log --oneline`,
        basics: ["git init starts a repository.", "git add stages changes.", "git commit saves a snapshot.", "git log shows history."],
        keywords: [["repository", "A project tracked by Git."], ["commit", "A saved snapshot."], ["staging area", "Changes queued for the next commit."]],
        tips: ["Write commit messages that say why, in a short line.", "Common mistake: committing secrets. Add those files to .gitignore."],
        cards: [["Which command stages a file?", "git add"], ["Which command saves a snapshot?", "git commit"]],
        quiz: [["What does git status show?", "The state of your changes", "Your password", "The server", "Only history"], ["Which starts a repo?", "git init", "git start", "git new", "git create"]],
      },
      "Branches and merging": {
        intro: "A branch is a separate line of work. When it is ready, you merge it back.",
        code: `git switch -c add-footer\n# ...edit and commit...\ngit switch main\ngit merge add-footer\ngit branch -d add-footer`,
        basics: ["git switch -c makes a branch.", "git switch moves between branches.", "git merge combines work.", "Conflicts need a manual fix."],
        keywords: [["branch", "An independent line of commits."], ["merge", "Combining branches."], ["conflict", "Competing changes Git cannot join."]],
        tips: ["Make one branch per feature and keep it short-lived.", "Common mistake: working directly on main."],
        cards: [["Which command creates and switches?", "git switch -c name"], ["What is a conflict?", "Changes that Git cannot combine on its own."]],
        quiz: [["Which combines branches?", "git merge", "git add", "git join", "git push"], ["Which deletes a merged branch?", "git branch -d name", "git rm name", "git delete name", "git drop name"]],
      },
      "Remotes and GitHub": {
        intro: "A remote is a copy hosted elsewhere, such as GitHub. Push sends commits and pull fetches them.",
        code: `git clone https://github.com/user/project.git\ngit remote -v\ngit pull\ngit push origin main`,
        basics: ["clone copies a repository.", "origin is the default remote.", "push uploads commits.", "pull downloads and merges."],
        keywords: [["remote", "A hosted copy of a repository."], ["origin", "The default remote name."], ["pull request", "A proposal to merge changes."]],
        tips: ["Pull before you start work to avoid conflicts.", "Common mistake: force-pushing to a shared branch."],
        cards: [["Which command uploads commits?", "git push"], ["What is origin?", "The default remote name."]],
        quiz: [["Which copies a remote repo?", "git clone", "git copy", "git get", "git fork"], ["What does git pull do?", "Fetches and merges", "Uploads", "Deletes a branch", "Stages files"]],
      },
    },
  },
);

export const dsa = course(
  { slug: "dsa", name: "DSA", icon: "O(n)", group: "Data and tools", blurb: "Data structures and algorithms, taught with short Python programs.", shiki: "python", runner: "python", certificateName: "Data Structures and Algorithms" },
  {
    Basics: {
      "Big O": {
        intro: "Big O describes how work grows with input size. It lets you compare approaches before running them.",
        code: `def has_duplicate(items):\n    seen = set()\n    for item in items:\n        if item in seen:\n            return True\n        seen.add(item)\n    return False\n\nprint(has_duplicate([1, 2, 3, 2]))`,
        basics: ["O(1) is constant time.", "O(n) grows with input.", "O(n^2) is usually nested loops.", "O(log n) halves each step."],
        keywords: [["time complexity", "How running time grows."], ["space complexity", "How memory use grows."], ["Big O", "Notation for growth rate."]],
        tips: ["A set or dictionary often turns O(n^2) into O(n).", "Common mistake: optimizing before measuring."],
        cards: [["What is the complexity of two nested loops?", "Usually O(n^2)."], ["What does O(1) mean?", "Constant time."]],
        quiz: [["Which grows slowest?", "O(log n)", "O(n)", "O(n^2)", "O(2^n)"], ["What is a set lookup on average?", "O(1)", "O(n)", "O(n^2)", "O(log n)"]],
      },
      Sorting: {
        intro: "Sorting puts items in order. Merge sort splits a list, sorts each half, and merges them.",
        code: `def merge_sort(items):\n    if len(items) <= 1:\n        return items\n    mid = len(items) // 2\n    left, right = merge_sort(items[:mid]), merge_sort(items[mid:])\n    merged = []\n    while left and right:\n        merged.append(left.pop(0) if left[0] <= right[0] else right.pop(0))\n    return merged + left + right\n\nprint(merge_sort([5, 2, 9, 1]))`,
        basics: ["Bubble sort is O(n^2).", "Merge sort is O(n log n).", "Recursion splits the problem.", "Built-in sorts are usually best."],
        keywords: [["merge sort", "Divide, sort, and merge."], ["recursion", "A function calling itself."], ["stable sort", "A sort keeping equal items in order."]],
        tips: ["In real code, call sorted() rather than writing your own.", "Common mistake: forgetting the base case in recursion."],
        cards: [["What is merge sort's complexity?", "O(n log n)"], ["What stops recursion?", "The base case."]],
        quiz: [["Which is faster on large data?", "Merge sort", "Bubble sort", "Random sort", "They match"], ["What does a base case do?", "Stops recursion", "Starts a loop", "Sorts instantly", "Imports code"]],
      },
      "Stacks, queues, and search": {
        intro: "A stack is last in, first out. A queue is first in, first out. Binary search finds items in sorted data quickly.",
        code: `from collections import deque\n\nstack = [1, 2]\nstack.append(3)\nprint(stack.pop())\n\nqueue = deque([1, 2])\nqueue.append(3)\nprint(queue.popleft())\n\ndef search(items, target):\n    low, high = 0, len(items) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if items[mid] == target:\n            return mid\n        if items[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1\n\nprint(search([1, 3, 5, 7], 5))`,
        basics: ["Stack: last in, first out.", "Queue: first in, first out.", "Binary search needs sorted data.", "Binary search is O(log n)."],
        keywords: [["stack", "A last-in, first-out structure."], ["queue", "A first-in, first-out structure."], ["binary search", "Halving a sorted range each step."]],
        tips: ["Use deque for queues. list.pop(0) is O(n).", "Common mistake: using binary search on unsorted data."],
        cards: [["Which structure is LIFO?", "A stack."], ["What does binary search require?", "Sorted data."]],
        quiz: [["Which suits undo history?", "A stack", "A queue", "A set", "A string"], ["What is binary search's complexity?", "O(log n)", "O(n)", "O(1)", "O(n^2)"]],
      },
    },
  },
);
