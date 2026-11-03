import { course } from "./types";

export const python = course(
  { slug: "python", name: "Python", icon: "py", group: "Languages", blurb: "A friendly first programming language for scripts, data, and automation.", shiki: "python", runner: "python" },
  {
    Basics: {
      "Python intro": {
        intro: "Python reads almost like English, which makes it a great first language. A program runs from top to bottom.",
        code: `print("Hello, Akademy!")\nprint(2 + 3)`,
        basics: ["print() shows output.", "Python runs line by line.", "Indentation is part of the syntax.", "# starts a comment."],
        keywords: [["interpreter", "The program that runs Python code."], ["function", "A named block of code you can call."], ["comment", "A note Python ignores."]],
        tips: ["Run code often, after every few lines.", "Common mistake: mixing tabs and spaces. Use four spaces."],
        cards: [["Which function displays text?", "print()"], ["What starts a comment?", "#"]],
        quiz: [["Which prints hello?", "print(\"hello\")", "echo \"hello\"", "console.log(\"hello\")", "say hello"], ["What does Python use to mark code blocks?", "Indentation", "Curly braces", "Semicolons", "Tags"]],
      },
      "Variables and types": {
        intro: "A variable is a name for a value. Python works out the type from the value, so you never declare it.",
        code: `name = "Ana"\nage = 19\ngpa = 1.75\nenrolled = True\nprint(name, age, gpa, enrolled)\nprint(type(age))\nprint(f"{name} is {age}")`,
        basics: ["Assign with =.", "Main types: str, int, float, bool.", "type() shows a value's type.", "f-strings put values in text."],
        keywords: [["variable", "A name that refers to a value."], ["f-string", "A string starting with f that embeds values."], ["casting", "Converting a value, as with int(\"5\")."]],
        tips: ["Use snake_case names like total_score.", "Common mistake: adding a string to a number. Convert with str() or use an f-string."],
        cards: [["What type is 3.14?", "float"], ["How do you turn \"5\" into a number?", "int(\"5\")"]],
        quiz: [["What type is True?", "bool", "str", "int", "true"], ["What does f\"{x}\" do?", "Inserts x into the string", "Formats the disk", "Makes x a float", "Deletes x"]],
      },
      "Conditions and loops": {
        intro: "`if` makes decisions and `for` repeats. The colon and indentation show which lines belong to the block.",
        code: `score = 82\nif score >= 90:\n    print("Excellent")\nelif score >= 75:\n    print("Passed")\nelse:\n    print("Try again")\n\nfor i in range(3):\n    print("Round", i)`,
        basics: ["if, elif, and else need a colon.", "for loops over a sequence.", "range(3) gives 0, 1, 2.", "while repeats while a condition holds."],
        keywords: [["condition", "An expression that is True or False."], ["iteration", "One pass through a loop."], ["range", "A built-in giving a sequence of numbers."]],
        tips: ["Use break to leave a loop and continue to skip a round.", "Common mistake: using = instead of == in a comparison."],
        cards: [["What does range(3) produce?", "0, 1, 2"], ["What keyword means 'else if'?", "elif"]],
        quiz: [["What ends an if line?", "A colon", "A semicolon", "A brace", "Nothing"], ["How many times does range(5) loop?", "5", "4", "6", "1"]],
      },
    },
    "Going further": {
      "Lists and dictionaries": {
        intro: "Lists keep ordered values. Dictionaries map keys to values, which is perfect for lookups.",
        code: `scores = [90, 72, 85]\nscores.append(88)\nprint(max(scores), len(scores))\n\nstudent = {"name": "Ana", "year": 2}\nstudent["year"] = 3\nfor key, value in student.items():\n    print(key, value)`,
        basics: ["Lists use [ ]; indexes start at 0.", ".append adds to the end.", "Dictionaries use { key: value }.", "len() counts items."],
        keywords: [["list", "An ordered, changeable collection."], ["dictionary", "A collection of key and value pairs."], ["tuple", "An ordered collection that cannot change."]],
        tips: ["Use dict.get(key) to avoid an error when a key may be missing.", "Common mistake: changing a list while looping over it."],
        cards: [["Which method adds to a list?", ".append()"], ["How do you loop over keys and values?", "for k, v in d.items():"]],
        quiz: [["What is [1, 2, 3][-1]?", "3", "1", "2", "An error"], ["Which is a dictionary?", "{\"a\": 1}", "[\"a\", 1]", "(\"a\", 1)", "<a=1>"]],
      },
      Functions: {
        intro: "Define a function with `def`. Parameters can have default values, and `return` sends back the result.",
        code: `def grade(score, passing=75):\n    if score >= passing:\n        return "pass"\n    return "fail"\n\nprint(grade(80))\nprint(grade(80, passing=85))`,
        basics: ["def starts a function.", "return sends back a value.", "Default values make parameters optional.", "Keyword arguments name their parameter."],
        keywords: [["def", "The keyword that defines a function."], ["return", "Sends a result to the caller."], ["default parameter", "A parameter with a preset value."]],
        tips: ["Give functions one job and a clear verb name.", "Common mistake: printing a result when you meant to return it."],
        cards: [["Which keyword defines a function?", "def"], ["What does a function return without return?", "None"]],
        quiz: [["What does print(grade(70)) show if passing is 75?", "fail", "pass", "None", "70"], ["Which is a keyword argument?", "grade(80, passing=85)", "grade(80, 85)", "grade[80]", "grade 80"]],
      },
    },
  },
);

export const java = course(
  { slug: "java", name: "Java", icon: "Jv", group: "Languages", blurb: "A strongly typed language behind Android apps and large business systems.", shiki: "java", runner: "java" },
  {
    Basics: {
      "Java intro": {
        intro: "All Java code lives in classes. Programs begin at the `main` method.",
        code: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Akademy!");\n  }\n}`,
        basics: ["Code lives inside a class.", "Execution starts at main.", "Statements end with a semicolon.", "System.out.println prints a line."],
        keywords: [["class", "A blueprint containing code."], ["main method", "The entry point of a program."], ["JVM", "The Java Virtual Machine, which runs compiled Java."]],
        tips: ["A public class's file name must match the class name.", "Common mistake: writing string in lowercase. The type is String."],
        cards: [["Where does a program start?", "In the main method."], ["What ends a statement?", "A semicolon."]],
        quiz: [["Which prints a line?", "System.out.println(\"hi\");", "print(\"hi\");", "echo \"hi\";", "Console.log(\"hi\");"], ["What runs compiled Java?", "The JVM", "The browser", "The DOM", "SQLite"]],
      },
      "Variables and types": {
        intro: "Java is statically typed: every variable has a type, fixed when it is declared.",
        code: `public class Main {\n  public static void main(String[] args) {\n    int age = 19;\n    double gpa = 1.75;\n    boolean enrolled = true;\n    String name = "Ana";\n    System.out.println(name + " is " + age + ", GPA " + gpa + ", " + enrolled);\n  }\n}`,
        basics: ["Declare a type before the name.", "Primitives include int, double, boolean, char.", "String is a class.", "final makes a variable constant."],
        keywords: [["static typing", "Types are checked before running."], ["primitive", "A basic type that is not an object."], ["final", "A keyword that stops reassignment."]],
        tips: ["Use var for local variables when the type is obvious.", "Common mistake: comparing Strings with ==. Use .equals()."],
        cards: [["How do you compare Strings?", "a.equals(b)"], ["Which keyword makes a constant?", "final"]],
        quiz: [["Which holds a decimal?", "double", "int", "boolean", "char"], ["Which is a class rather than a primitive?", "String", "int", "boolean", "double"]],
      },
      "Control flow": {
        intro: "`if` chooses a path and loops repeat. Conditions must always be boolean.",
        code: `public class Main {\n  public static void main(String[] args) {\n    int[] scores = {90, 72, 85};\n    int total = 0;\n    for (int s : scores) {\n      total += s;\n    }\n    if (total / scores.length >= 75) {\n      System.out.println("Passed");\n    } else {\n      System.out.println("Failed");\n    }\n  }\n}`,
        basics: ["Conditions go in parentheses.", "The classic for has init, test, and step.", "for (x : items) loops over each item.", "Arrays have a fixed size."],
        keywords: [["for-each", "A loop visiting each item."], ["array", "A fixed-size list of one type."], ["boolean", "A true or false value."]],
        tips: ["Prefer for-each when you do not need the index.", "Common mistake: i <= arr.length, which runs past the end."],
        cards: [["How do you get an array's size?", "arr.length"], ["What is the type of a condition?", "boolean"]],
        quiz: [["What is the last valid index of an array of 3?", "2", "3", "1", "0"], ["What does int division 7 / 2 give?", "3", "3.5", "4", "2"]],
      },
    },
    "Object-oriented Java": {
      "Classes and objects": {
        intro: "A class defines fields and methods. `new` creates an object from it, and the constructor sets it up.",
        code: `class Student {\n  private final String name;\n  Student(String name) {\n    this.name = name;\n  }\n  String greet() {\n    return "Hi, I am " + name;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Student ana = new Student("Ana");\n    System.out.println(ana.greet());\n  }\n}`,
        basics: ["A class is a blueprint; an object is an instance.", "A constructor shares the class name.", "this means the current object.", "private hides a field from other classes."],
        keywords: [["object", "An instance of a class."], ["constructor", "Code run when an object is created."], ["encapsulation", "Hiding data behind methods."]],
        tips: ["Keep fields private and expose methods.", "Common mistake: giving a constructor a return type, which makes it a normal method."],
        cards: [["Which keyword creates an object?", "new"], ["What does this refer to?", "The current object."]],
        quiz: [["What has the same name as its class?", "The constructor", "Every field", "The package", "main"], ["Which hides a field?", "private", "public", "static", "void"]],
      },
      Inheritance: {
        intro: "`extends` builds a class from another. An `interface` lists methods a class promises to provide.",
        code: `interface Greeter {\n  String greet();\n}\n\nclass Person implements Greeter {\n  public String greet() { return "Hello"; }\n}\n\nclass Teacher extends Person {\n  @Override\n  public String greet() { return super.greet() + ", class!"; }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Greeter g = new Teacher();\n    System.out.println(g.greet());\n  }\n}`,
        basics: ["extends inherits from one class.", "implements fulfills interfaces.", "@Override replaces a parent method.", "super calls the parent."],
        keywords: [["inheritance", "Reusing a class by extending it."], ["interface", "A contract of methods."], ["polymorphism", "One type, many behaviors."]],
        tips: ["Always add @Override. The compiler then catches typos.", "Common mistake: trying to extend two classes. Java allows one."],
        cards: [["How many classes can a class extend?", "One."], ["How many interfaces can a class implement?", "Many."]],
        quiz: [["Which keyword uses an interface?", "implements", "extends", "inherits", "uses"], ["What does super.greet() call?", "The parent's method", "A static method", "A constructor only", "main"]],
      },
    },
  },
);

export const c = course(
  { slug: "c", name: "C", icon: "C", group: "Languages", blurb: "The small, fast language under operating systems and hardware.", shiki: "c", runner: "c" },
  {
    Basics: {
      "C intro": {
        intro: "C is a compiled language close to the hardware. Programs start in `main` and use headers for library functions.",
        code: `#include <stdio.h>\n\nint main(void) {\n  printf("Hello, Akademy!\\n");\n  return 0;\n}`,
        basics: ["#include brings in a header.", "main is the entry point.", "printf prints formatted text.", "return 0 means success."],
        keywords: [["compiler", "A tool that turns source code into a program."], ["header", "A file declaring library functions."], ["format string", "Text with placeholders such as %d."]],
        tips: ["Compile with warnings on: gcc -Wall main.c.", "Common mistake: forgetting \\n, so output lines run together."],
        cards: [["Which header provides printf?", "stdio.h"], ["What does return 0 from main mean?", "The program succeeded."]],
        quiz: [["Which header is needed for printf?", "stdio.h", "stdlib.h", "math.h", "iostream"], ["Where does a C program start?", "main", "start", "init", "the first line"]],
      },
      "Variables and types": {
        intro: "Variables must be declared with a type. Format specifiers tell `printf` how to print each one.",
        code: `#include <stdio.h>\n\nint main(void) {\n  int age = 19;\n  double gpa = 1.75;\n  char grade = 'A';\n  printf("%d %.2f %c\\n", age, gpa, grade);\n  printf("int size: %zu bytes\\n", sizeof(int));\n  return 0;\n}`,
        basics: ["int, double, and char are core types.", "%d prints int, %f double, %c char.", "sizeof gives a size in bytes.", "char literals use single quotes."],
        keywords: [["format specifier", "A code such as %d in a format string."], ["sizeof", "An operator giving a size in bytes."], ["literal", "A fixed value in the code."]],
        tips: ["Always initialize variables. Uninitialized ones hold garbage.", "Common mistake: a wrong specifier, such as %d for a double."],
        cards: [["Which specifier prints an int?", "%d"], ["What does sizeof return?", "A size in bytes."]],
        quiz: [["Which prints a double to 2 places?", "%.2f", "%d", "%c", "%2s"], ["Which uses single quotes?", "A char", "A string", "A number", "An array"]],
      },
      "Arrays and strings": {
        intro: "An array is a row of same-type values. A C string is a char array ending with a zero byte.",
        code: `#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n  int scores[3] = {90, 72, 85};\n  int total = 0;\n  for (int i = 0; i < 3; i++) {\n    total += scores[i];\n  }\n  char name[] = "Ana";\n  printf("%s: %d, length %zu\\n", name, total, strlen(name));\n  return 0;\n}`,
        basics: ["Array indexes start at 0.", "C does not check array bounds.", "Strings end with '\\0'.", "strlen gives the length without the terminator."],
        keywords: [["null terminator", "The zero byte that ends a C string."], ["bounds", "The valid index range of an array."], ["strlen", "A function that measures a string."]],
        tips: ["Use snprintf rather than strcpy to avoid overflows.", "Common mistake: writing past the end of an array. C will not stop you."],
        cards: [["What ends a C string?", "A null terminator, '\\0'."], ["Does C check array bounds?", "No."]],
        quiz: [["How many bytes does \"Ana\" need?", "4", "3", "5", "2"], ["Which function gives string length?", "strlen", "sizeof", "len", "length"]],
      },
    },
    Memory: {
      Pointers: {
        intro: "A pointer stores a memory address. `&` gets an address and `*` reads what is stored there.",
        code: `#include <stdio.h>\n\nvoid doubleIt(int *n) {\n  *n = *n * 2;\n}\n\nint main(void) {\n  int x = 21;\n  doubleIt(&x);\n  printf("%d\\n", x);\n  return 0;\n}`,
        basics: ["& gives a variable's address.", "* follows a pointer.", "Passing a pointer lets a function change the original.", "NULL means a pointer points nowhere."],
        keywords: [["pointer", "A variable holding an address."], ["dereference", "Reading through a pointer."], ["address", "A location in memory."]],
        tips: ["Check pointers for NULL before using them.", "Common mistake: returning a pointer to a local variable, which no longer exists."],
        cards: [["Which operator gets an address?", "&"], ["What does *p do?", "Reads the value p points to."]],
        quiz: [["What does int *p declare?", "A pointer to int", "A multiplied int", "An int array", "A constant"], ["Why pass a pointer to a function?", "To change the original", "To print faster", "To use less syntax", "To avoid main"]],
      },
      "Dynamic memory": {
        intro: "`malloc` reserves memory while the program runs. You must return it with `free`.",
        code: `#include <stdio.h>\n#include <stdlib.h>\n\nint main(void) {\n  int *nums = malloc(3 * sizeof(int));\n  if (nums == NULL) return 1;\n  for (int i = 0; i < 3; i++) nums[i] = i * i;\n  printf("%d\\n", nums[2]);\n  free(nums);\n  return 0;\n}`,
        basics: ["malloc reserves bytes on the heap.", "free returns them.", "malloc can return NULL.", "Every malloc needs one free."],
        keywords: [["heap", "Memory managed by the program at runtime."], ["memory leak", "Memory never freed."], ["stack", "Automatic memory for local variables."]],
        tips: ["Set a pointer to NULL after free.", "Common mistake: using memory after freeing it."],
        cards: [["Which function releases memory?", "free"], ["What should you check after malloc?", "Whether it returned NULL."]],
        quiz: [["Where does malloc allocate?", "The heap", "The stack", "The disk", "The CPU"], ["What is a memory leak?", "Memory that is never freed", "A crash", "A compile error", "A virus"]],
      },
    },
  },
);

export const cpp = course(
  { slug: "cpp", name: "C++", icon: "C++", group: "Languages", blurb: "Fast, low-level programming used in games, hardware, and your CompE classes.", shiki: "cpp", runner: "cpp" },
  {
    Basics: {
      "C++ intro": {
        intro: "C++ builds on C with classes and a large standard library. `std::cout` prints to the screen.",
        code: `#include <iostream>\n\nint main() {\n  std::cout << "Hello, Akademy!" << std::endl;\n  return 0;\n}`,
        basics: ["#include <iostream> enables cout.", "<< sends data to a stream.", "std:: is the standard namespace.", "main returns an int."],
        keywords: [["stream", "A flow of data in or out."], ["namespace", "A named group that prevents clashes."], ["cout", "The standard output stream."]],
        tips: ["Use \\n rather than std::endl unless you need to flush.", "Common mistake: forgetting the semicolon after a class definition."],
        cards: [["What does std::cout do?", "Prints to standard output."], ["What is std?", "The standard library namespace."]],
        quiz: [["Which header enables cout?", "iostream", "stdio", "string", "cmath"], ["Which operator writes to cout?", "<<", ">>", "->", "::"]],
      },
      "Variables and input": {
        intro: "C++ types work like C, plus `std::string` and `auto`. `std::cin` reads input from the keyboard.",
        code: `#include <iostream>\n#include <string>\n\nint main() {\n  std::string name = "Ana";\n  auto score = 92;\n  const double passing = 75.0;\n  std::cout << name << ": " << score;\n  std::cout << (score >= passing ? " passed" : " failed") << "\\n";\n  return 0;\n}`,
        basics: ["std::string is a real text type.", "auto lets the compiler pick the type.", "const blocks changes.", "cin >> reads input."],
        keywords: [["auto", "Asks the compiler to deduce the type."], ["const", "Marks a value as unchangeable."], ["ternary", "The compact a ? b : c choice."]],
        tips: ["Mark values const by default.", "Common mistake: cin >> stops at spaces. Use getline for full lines."],
        cards: [["Which reads a whole line?", "std::getline"], ["What does auto do?", "Lets the compiler deduce the type."]],
        quiz: [["Which reads from input?", "std::cin >> x", "std::cout << x", "read(x)", "input(x)"], ["What does const do?", "Prevents changes", "Speeds up loops", "Deletes a variable", "Imports a file"]],
      },
    },
    "Modern C++": {
      Functions: {
        intro: "Functions can be overloaded. Passing by reference with `&` avoids copying and lets the function change the original.",
        code: `#include <iostream>\n\nvoid increment(int& n) { n++; }\nint square(int n) { return n * n; }\ndouble square(double n) { return n * n; }\n\nint main() {\n  int x = 4;\n  increment(x);\n  std::cout << square(x) << " " << square(1.5) << "\\n";\n  return 0;\n}`,
        basics: ["int& is a reference.", "Overloads share a name with different parameters.", "Use const T& for big inputs.", "A function must be declared before use."],
        keywords: [["reference", "Another name for an existing variable."], ["overload", "Same function name, different parameters."], ["pass by value", "Giving a function its own copy."]],
        tips: ["Pass big objects as const references to avoid copies.", "Common mistake: returning a reference to a local variable."],
        cards: [["Which symbol declares a reference?", "&"], ["What is overloading?", "Several functions with one name and different parameters."]],
        quiz: [["What does void f(int& n) receive?", "A reference to the original", "A copy", "A pointer array", "A string"], ["Overloads must differ in what?", "Their parameters", "Only return type", "Their comments", "Their files"]],
      },
      "Classes in C++": {
        intro: "A class groups data with functions. Constructors set it up, and destructors clean up when it goes away.",
        code: `#include <iostream>\n#include <string>\n\nclass Student {\n public:\n  explicit Student(std::string name) : name_(std::move(name)) {}\n  void greet() const { std::cout << "Hi, I am " << name_ << "\\n"; }\n\n private:\n  std::string name_;\n};\n\nint main() {\n  Student ana("Ana");\n  ana.greet();\n  return 0;\n}`,
        basics: ["public members are open; private ones are hidden.", "An initializer list sets members.", "const methods do not change the object.", "A class definition ends with a semicolon."],
        keywords: [["constructor", "Runs when an object is created."], ["destructor", "Runs when an object is destroyed."], ["RAII", "Tying a resource's lifetime to an object."]],
        tips: ["Use initializer lists instead of assigning in the constructor body.", "Common mistake: forgetting the ; after the closing brace."],
        cards: [["What default access does a class have?", "private"], ["What is RAII?", "Acquiring a resource in a constructor and releasing it in a destructor."]],
        quiz: [["What ends a class definition?", "A semicolon", "A colon", "Nothing", "end"], ["What does a const method promise?", "Not to change the object", "To run faster", "To be static", "To be public"]],
      },
      "STL containers": {
        intro: "The standard library provides ready-made containers such as `vector` and `map`, plus algorithms such as `sort`.",
        code: `#include <algorithm>\n#include <iostream>\n#include <map>\n#include <vector>\n\nint main() {\n  std::vector<int> nums = {3, 1, 2};\n  nums.push_back(5);\n  std::sort(nums.begin(), nums.end());\n  for (int n : nums) std::cout << n << " ";\n\n  std::map<std::string, int> ages = {{"Ana", 19}};\n  std::cout << ages["Ana"] << "\\n";\n  return 0;\n}`,
        basics: ["vector is a growable array.", "map stores sorted key and value pairs.", "push_back adds to the end.", "Algorithms work on begin() and end()."],
        keywords: [["STL", "The Standard Template Library."], ["iterator", "An object that walks a container."], ["template", "Code parameterized by a type."]],
        tips: ["Make vector your default container.", "Common mistake: map[key] adds a missing key. Use find to only check."],
        cards: [["Which container is a growable array?", "std::vector"], ["Which method appends to a vector?", "push_back"]],
        quiz: [["Which header provides std::sort?", "algorithm", "vector", "map", "iostream"], ["What does ages[\"Bob\"] do if Bob is missing?", "Inserts Bob with 0", "Throws an error", "Returns null", "Exits"]],
      },
    },
  },
);

export const csharp = course(
  { slug: "csharp", name: "C#", icon: "C#", group: "Languages", blurb: "A modern language for .NET apps, web services, and Unity games.", shiki: "csharp", runner: "csharp" },
  {
    Basics: {
      "C# intro": {
        intro: "C# runs on .NET. Programs are built from classes, and `Console.WriteLine` prints a line.",
        code: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, Akademy!");\n  }\n}`,
        basics: ["using imports a namespace.", "Main is the entry point.", "Statements end with a semicolon.", "C# is case-sensitive."],
        keywords: [[".NET", "The platform that runs C#."], ["namespace", "A named group of types."], ["Console", "The class for terminal input and output."]],
        tips: ["Modern C# lets you skip the class with top-level statements.", "Common mistake: writing console in lowercase."],
        cards: [["Which method prints a line?", "Console.WriteLine"], ["What runs C#?", ".NET"]],
        quiz: [["Which imports System?", "using System;", "import System;", "#include System", "require System"], ["What is the entry point?", "Main", "Start", "Run", "Init"]],
      },
      "Variables and types": {
        intro: "C# is statically typed. `var` lets the compiler infer the type, and `$\"...\"` builds strings with values.",
        code: `using System;\n\nclass Program {\n  static void Main() {\n    int age = 19;\n    var name = "Ana";\n    double gpa = 1.75;\n    bool enrolled = true;\n    Console.WriteLine($"{name} is {age}, GPA {gpa}, {enrolled}");\n  }\n}`,
        basics: ["int, double, bool, and string are core types.", "var infers the type.", "$\"\" interpolates values.", "const makes a compile-time constant."],
        keywords: [["var", "Lets the compiler infer a local type."], ["interpolation", "Putting values inside a string."], ["nullable", "A type allowing null, such as int?."]],
        tips: ["var is still statically typed. The type just is not written.", "Common mistake: assigning a string to an int without int.Parse."],
        cards: [["How do you interpolate a string?", "$\"Hello {name}\""], ["Is var dynamically typed?", "No, the type is fixed at compile time."]],
        quiz: [["Which parses text to int?", "int.Parse(\"5\")", "int(\"5\")", "\"5\".int", "toInt \"5\""], ["What does int? mean?", "An int that may be null", "A required int", "A question", "A float"]],
      },
    },
    "Objects and data": {
      "Classes and properties": {
        intro: "Properties expose data with get and set. Classes bundle properties and methods together.",
        code: `using System;\n\nclass Student {\n  public string Name { get; }\n  public int Score { get; set; }\n  public Student(string name) { Name = name; }\n  public bool Passed() => Score >= 75;\n}\n\nclass Program {\n  static void Main() {\n    var ana = new Student("Ana") { Score = 90 };\n    Console.WriteLine($"{ana.Name}: {ana.Passed()}");\n  }\n}`,
        basics: ["Properties use get and set.", "Constructors share the class name.", "=> writes a short method.", "new creates objects."],
        keywords: [["property", "A member with get and set access."], ["expression-bodied", "A one-line member using =>."], ["object initializer", "Setting properties in { } after new."]],
        tips: ["Omit set to make a property read-only.", "Common mistake: making fields public rather than using properties."],
        cards: [["How do you make a read-only property?", "Give it only get."], ["What does => define?", "A one-expression member."]],
        quiz: [["Which is an auto-property?", "public int Age { get; set; }", "public int Age();", "int Age => {}", "property Age"], ["Which creates an object?", "new Student(\"Ana\")", "Student.new()", "create Student", "make(Student)"]],
      },
      "Collections and LINQ": {
        intro: "`List<T>` is a growable list. LINQ queries collections with methods such as `Where` and `Select`.",
        code: `using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program {\n  static void Main() {\n    var scores = new List<int> { 90, 72, 85 };\n    var passed = scores.Where(s => s >= 75).OrderBy(s => s);\n    Console.WriteLine(string.Join(", ", passed));\n    Console.WriteLine(scores.Average());\n  }\n}`,
        basics: ["List<T> grows as needed.", "Where filters items.", "Select transforms items.", "ToList runs a query into a list."],
        keywords: [["LINQ", "Language Integrated Query."], ["lambda", "A short inline function."], ["deferred execution", "A query that runs when enumerated."]],
        tips: ["Call ToList() to snapshot a query's result.", "Common mistake: looping over a query repeatedly, which reruns it."],
        cards: [["Which method filters in LINQ?", "Where"], ["Which method transforms in LINQ?", "Select"]],
        quiz: [["What is s => s > 5?", "A lambda", "A pointer", "A loop", "A class"], ["Which namespace enables LINQ?", "System.Linq", "System.IO", "System.Web", "System.Text"]],
      },
    },
  },
);

export const php = course(
  { slug: "php", name: "PHP", icon: "php", group: "Languages", blurb: "The server-side language behind WordPress and much of the web.", shiki: "php", runner: "php" },
  {
    Basics: {
      "PHP intro": {
        intro: "PHP runs on the server and generates pages. Code goes between `<?php` tags.",
        code: `<?php\n$name = "Akademy";\necho "Hello, $name!\\n";\necho 2 + 3, "\\n";`,
        basics: ["Code starts with <?php.", "Variables begin with $.", "echo outputs text.", "Statements end with a semicolon."],
        keywords: [["server-side", "Running on the server before the page is sent."], ["echo", "Outputs text."], ["interpolation", "Putting variables in a double-quoted string."]],
        tips: ["Double quotes expand variables. Single quotes do not.", "Common mistake: forgetting the $ on a variable."],
        cards: [["What do PHP variables start with?", "$"], ["Which quotes expand variables?", "Double quotes."]],
        quiz: [["Which outputs text?", "echo \"hi\";", "print(\"hi\")!", "puts \"hi\"", "console.log(\"hi\")"], ["Where does PHP run?", "On the server", "Only in the browser", "In CSS", "In the DOM"]],
      },
      "Arrays and loops": {
        intro: "PHP arrays do two jobs: lists and key-value maps. `foreach` loops over them.",
        code: `<?php\n$scores = [90, 72, 85];\n$student = ["name" => "Ana", "year" => 2];\n\nforeach ($scores as $s) {\n  echo $s >= 75 ? "pass " : "fail ";\n}\necho "\\n", $student["name"], " ", count($scores), "\\n";`,
        basics: ["[ ] creates an array.", "=> sets a key.", "foreach loops an array.", "count() gives the length."],
        keywords: [["associative array", "An array with named keys."], ["foreach", "A loop over each array item."], ["count", "A function giving an array's size."]],
        tips: ["Use array_map and array_filter for simple transforms.", "Common mistake: using = in a comparison. Use ===."],
        cards: [["What sets a key in an array?", "=>"], ["Which function gives array length?", "count()"]],
        quiz: [["Which loop suits arrays best?", "foreach", "forever", "each do", "map loop"], ["What is [\"a\" => 1]?", "An associative array", "A function", "A class", "A string"]],
      },
      "Functions and classes": {
        intro: "PHP has typed functions and full classes. `->` reaches a member of an object.",
        code: `<?php\ndeclare(strict_types=1);\n\nclass Student {\n  public function __construct(public string $name, public int $score = 0) {}\n  public function passed(): bool {\n    return $this->score >= 75;\n  }\n}\n\n$ana = new Student("Ana", 90);\necho $ana->name, ": ", $ana->passed() ? "pass" : "fail", "\\n";`,
        basics: ["function defines a function.", "-> reaches an object's members.", "$this is the current object.", "__construct sets up an object."],
        keywords: [["constructor promotion", "Declaring properties in the constructor."], ["strict_types", "A mode that enforces parameter types."], ["$this", "The current object."]],
        tips: ["Turn on strict_types at the top of every file.", "Common mistake: writing . where you meant ->. The dot joins strings."],
        cards: [["Which operator joins strings?", "."], ["Which operator reaches an object's member?", "->"]],
        quiz: [["What is the constructor's name?", "__construct", "construct", "init", "new"], ["Inside a method, what is $this?", "The current object", "The class file", "The server", "A global"]],
      },
    },
    "Web basics": {
      "Forms and safety": {
        intro: "Form data arrives in `$_POST` and `$_GET`. Never trust it: escape it when you output it.",
        code: `<?php\n$comment = '<script>alert("hi")</script>';\n$safe = htmlspecialchars($comment, ENT_QUOTES, 'UTF-8');\necho $safe, "\\n";\n\n$age = filter_var("19", FILTER_VALIDATE_INT);\nvar_dump($age);`,
        basics: ["$_GET holds URL parameters.", "$_POST holds form fields.", "htmlspecialchars stops script injection.", "Use prepared statements for SQL."],
        keywords: [["XSS", "Injecting scripts into a page."], ["SQL injection", "Smuggling SQL through input."], ["prepared statement", "A query with safe placeholders."]],
        tips: ["Escape on output and validate on input.", "Common mistake: building SQL by joining strings with user input."],
        cards: [["Which function prevents XSS?", "htmlspecialchars"], ["What prevents SQL injection?", "Prepared statements."]],
        quiz: [["Where do POST fields arrive?", "$_POST", "$_FORM", "$POST", "$_DATA"], ["What is XSS?", "Injecting scripts into a page", "A CSS library", "A compiler", "A cache"]],
      },
    },
  },
);

export const go = course(
  { slug: "go", name: "Go", icon: "Go", group: "Languages", blurb: "A simple, fast language for servers and cloud tools.", shiki: "go", runner: "go" },
  {
    Basics: {
      "Go intro": {
        intro: "Go is a small compiled language. Each program has a `main` package with a `main` function.",
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Akademy!")\n}`,
        basics: ["Every file starts with package.", "import brings in packages.", "main.main runs first.", "No semicolons are needed."],
        keywords: [["package", "A folder of Go code."], ["fmt", "The formatting and printing package."], ["gofmt", "The standard code formatter."]],
        tips: ["Go may take several seconds to compile here, so give it a moment.", "Common mistake: an unused import or variable is a compile error."],
        cards: [["Which package prints text?", "fmt"], ["Is an unused variable allowed?", "No, it is a compile error."]],
        quiz: [["Which starts a function?", "func", "def", "function", "fn"], ["Which package holds the entry point?", "main", "fmt", "go", "start"]],
      },
      "Variables and slices": {
        intro: "`:=` declares and assigns in one step. Slices are Go's flexible lists.",
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tname := "Ana"\n\tscores := []int{90, 72, 85}\n\tscores = append(scores, 88)\n\tfor i, s := range scores {\n\t\tfmt.Println(i, s)\n\t}\n\tages := map[string]int{"Ana": 19}\n\tfmt.Println(name, ages["Ana"], len(scores))\n}`,
        basics: [":= infers the type.", "Slices grow with append.", "range loops with index and value.", "map holds keys and values."],
        keywords: [["slice", "A growable view of an array."], ["short declaration", "Declaring with :=."], ["zero value", "The default value of a type."]],
        tips: ["Use _ to ignore a value from range.", "Common mistake: := outside a function. Use var at package level."],
        cards: [["What does append return?", "A new slice, which you must assign."], ["Which keyword loops over a slice?", "range"]],
        quiz: [["Which declares and sets a variable?", "x := 1", "x = := 1", "let x = 1", "int x = 1"], ["Which is Go's only loop keyword?", "for", "while", "loop", "do"]],
      },
    },
    "Going further": {
      "Functions and errors": {
        intro: "Go functions can return several values. Errors are normal values that you check.",
        code: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nfunc divide(a, b float64) (float64, error) {\n\tif b == 0 {\n\t\treturn 0, errors.New("cannot divide by zero")\n\t}\n\treturn a / b, nil\n}\n\nfunc main() {\n\tif _, err := divide(1, 0); err != nil {\n\t\tfmt.Println("Error:", err)\n\t}\n}`,
        basics: ["Functions can return multiple values.", "Errors are returned, not thrown.", "nil means no error.", "Check err right after a call."],
        keywords: [["error", "A value describing a failure."], ["nil", "The zero value for pointers, errors, and more."], ["multiple return", "Returning several values at once."]],
        tips: ["Handle each error where it happens.", "Common mistake: ignoring an error with _."],
        cards: [["What does nil mean for an error?", "No error occurred."], ["Does Go use exceptions for normal errors?", "No, it returns error values."]],
        quiz: [["How do you check an error?", "if err != nil", "try err", "catch err", "err.throw()"], ["What creates a simple error?", "errors.New(\"x\")", "new Error(\"x\")", "raise \"x\"", "throw \"x\""]],
      },
      "Structs and goroutines": {
        intro: "Structs group data. Goroutines run functions concurrently, and channels pass values between them.",
        code: `package main\n\nimport "fmt"\n\ntype Student struct {\n\tName  string\n\tScore int\n}\n\nfunc (s Student) Passed() bool { return s.Score >= 75 }\n\nfunc main() {\n\tresult := make(chan bool)\n\tgo func() {\n\t\tresult <- Student{"Ana", 90}.Passed()\n\t}()\n\tfmt.Println(<-result)\n}`,
        basics: ["struct groups fields.", "Methods have a receiver.", "go starts a goroutine.", "Channels pass data safely."],
        keywords: [["struct", "A type made of named fields."], ["goroutine", "A lightweight concurrent function."], ["channel", "A pipe for sending values between goroutines."]],
        tips: ["Capitalized names are exported from a package.", "Common mistake: main exiting before goroutines finish."],
        cards: [["Which keyword starts a goroutine?", "go"], ["What creates a channel?", "make(chan T)"]],
        quiz: [["Which sends to a channel?", "c <- v", "c -> v", "send(c, v)", "c.push(v)"], ["What makes a name public?", "A capital first letter", "public", "export", "A trailing _"]],
      },
    },
  },
);

export const rust = course(
  { slug: "rust", name: "Rust", icon: "Rs", group: "Languages", blurb: "Memory safety without a garbage collector, for fast and reliable software.", shiki: "rust", runner: "rust" },
  {
    Basics: {
      "Rust intro": {
        intro: "Rust is a compiled language that catches memory bugs before your program runs. `println!` is a macro, shown by the `!`.",
        code: `fn main() {\n    println!("Hello, Akademy!");\n    println!("{} + {} = {}", 2, 3, 2 + 3);\n}`,
        basics: ["fn defines a function.", "main is the entry point.", "! marks a macro.", "{} is a print placeholder."],
        keywords: [["macro", "Code that writes code, called with !."], ["cargo", "Rust's build tool and package manager."], ["crate", "A Rust package."]],
        tips: ["Read compiler errors. Rust's messages often include the fix.", "Common mistake: println without the !."],
        cards: [["What does ! mean in println!?", "It is a macro."], ["Which tool builds Rust projects?", "cargo"]],
        quiz: [["Which defines a function?", "fn", "func", "def", "fun"], ["Which is a print placeholder?", "{}", "%s", "$x", "@"]],
      },
      "Variables and mutability": {
        intro: "Variables cannot change by default. Add `mut` to allow it.",
        code: `fn main() {\n    let name = "Ana";\n    let mut score = 90;\n    score += 5;\n    let passed: bool = score >= 75;\n    println!("{name}: {score}, {passed}");\n}`,
        basics: ["let declares a variable.", "Variables are immutable by default.", "mut allows changes.", "Types are usually inferred."],
        keywords: [["immutable", "Unable to change after being set."], ["mut", "The keyword making a variable changeable."], ["shadowing", "Re-declaring a name with let."]],
        tips: ["Add mut only when the compiler asks for it.", "Common mistake: assigning to a variable that is not mut."],
        cards: [["Are variables mutable by default?", "No."], ["Which keyword allows changes?", "mut"]],
        quiz: [["Which allows reassignment?", "let mut x = 1;", "let x = 1;", "const x = 1;", "var x = 1;"], ["What is shadowing?", "Re-declaring a name with let", "Hiding a window", "A memory leak", "Deleting a variable"]],
      },
    },
    "The Rust way": {
      Ownership: {
        intro: "Each value has one owner. Assigning a `String` moves it. Borrow with `&` to use it without taking ownership.",
        code: `fn length(text: &String) -> usize {\n    text.len()\n}\n\nfn main() {\n    let a = String::from("chalk");\n    let n = length(&a);\n    let b = a;\n    println!("{b} has {n} letters");\n}`,
        basics: ["Every value has one owner.", "Assignment of heap data moves it.", "& borrows without owning.", "Values drop when their owner leaves scope."],
        keywords: [["ownership", "The rule that one variable owns a value."], ["borrow", "A temporary reference to a value."], ["move", "Transferring ownership."]],
        tips: ["Prefer borrowing over cloning.", "Common mistake: using a value after moving it."],
        cards: [["How many owners can a value have?", "One."], ["Which symbol borrows?", "&"]],
        quiz: [["After let b = a; for a String, what is a?", "Moved and unusable", "A copy", "Null", "A pointer"], ["When is a value dropped?", "When its owner leaves scope", "Never", "At each line", "When printed"]],
      },
      "Enums and matching": {
        intro: "Enums list possible cases. `match` handles every case. `Option` and `Result` replace null and exceptions.",
        code: `fn divide(a: f64, b: f64) -> Option<f64> {\n    if b == 0.0 { None } else { Some(a / b) }\n}\n\nfn main() {\n    match divide(10.0, 4.0) {\n        Some(v) => println!("Result: {v}"),\n        None => println!("Cannot divide"),\n    }\n}`,
        basics: ["enum defines cases.", "match must cover every case.", "Option is Some or None.", "Result is Ok or Err."],
        keywords: [["enum", "A type with named variants."], ["pattern matching", "Choosing a path by a value's shape."], ["Option", "A value that may be absent."]],
        tips: ["Use ? to pass errors up in a function returning Result.", "Common mistake: overusing unwrap, which crashes on None."],
        cards: [["What replaces null in Rust?", "Option"], ["What are Result's variants?", "Ok and Err"]],
        quiz: [["What must match do?", "Cover every case", "Run all arms", "Return a string", "Use loops"], ["What does unwrap do on None?", "Panics", "Returns 0", "Returns null", "Retries"]],
      },
    },
  },
);

export const kotlin = course(
  { slug: "kotlin", name: "Kotlin", icon: "Kt", group: "Languages", blurb: "A concise language for Android and the JVM.", shiki: "kotlin", runner: "kotlin" },
  {
    Basics: {
      "Kotlin intro": {
        intro: "Kotlin runs on the JVM and is the preferred language for Android. A program needs only a `main` function.",
        code: `fun main() {\n    println("Hello, Akademy!")\n    println(2 + 3)\n}`,
        basics: ["fun defines a function.", "println prints a line.", "Semicolons are optional.", "No class is required."],
        keywords: [["JVM", "The Java Virtual Machine."], ["Android", "The mobile platform where Kotlin is preferred."], ["top-level function", "A function outside any class."]],
        tips: ["Run your code often. Kotlin gives clear compile errors with line numbers.", "Common mistake: writing System.out.println. println is enough."],
        cards: [["Which keyword defines a function?", "fun"], ["Does Kotlin need semicolons?", "No, they are optional."]],
        quiz: [["Which prints a line?", "println(\"hi\")", "print_line(\"hi\")", "echo \"hi\"", "puts \"hi\""], ["Kotlin runs on what?", "The JVM", "The DOM", "SQLite", "PHP"]],
      },
      "Variables and null safety": {
        intro: "`val` cannot change and `var` can. Types are non-null unless you add `?`.",
        code: `fun main() {\n    val name = "Ana"\n    var score = 90\n    score += 5\n    val nickname: String? = null\n    println("$name: $score")\n    println(nickname?.length ?: "no nickname")\n}`,
        basics: ["val is read-only; var is changeable.", "String? may be null.", "?. calls safely.", "?: gives a fallback."],
        keywords: [["null safety", "Types that forbid null by default."], ["safe call", "The ?. operator."], ["Elvis operator", "The ?: fallback operator."]],
        tips: ["Prefer val until you need to reassign.", "Common mistake: using !!, which crashes on null."],
        cards: [["val or var: which is read-only?", "val"], ["What does ?: do?", "Gives a fallback when the left side is null."]],
        quiz: [["Which type allows null?", "String?", "String", "String!", "Null<String>"], ["What is $name in a string?", "A template", "A comment", "A pointer", "An error"]],
      },
      "Classes and collections": {
        intro: "A `data class` gives you a class with useful methods for free. Collections have rich helpers such as `filter`.",
        code: `data class Student(val name: String, val score: Int)\n\nfun main() {\n    val students = listOf(Student("Ana", 90), Student("Ben", 70))\n    val passed = students.filter { it.score >= 75 }.map { it.name }\n    println(passed)\n    println(students[0])\n}`,
        basics: ["data class generates toString and equals.", "listOf makes a read-only list.", "{ } is a lambda.", "it is the default lambda parameter."],
        keywords: [["data class", "A class for holding data."], ["lambda", "An inline function."], ["it", "The implicit single lambda parameter."]],
        tips: ["Use mutableListOf only when the list must change.", "Common mistake: trying to add to a listOf list."],
        cards: [["What is it in a lambda?", "The implicit single parameter."], ["Which makes a changeable list?", "mutableListOf"]],
        quiz: [["Which class gets toString for free?", "data class", "open class", "abstract class", "sealed interface"], ["Which keeps matching items?", "filter", "map", "fold", "sum"]],
      },
    },
  },
);

export const swift = course(
  { slug: "swift", name: "Swift", icon: "Sw", group: "Languages", blurb: "Apple's language for iPhone, iPad, and Mac apps.", shiki: "swift", runner: "swift" },
  {
    Basics: {
      "Swift intro": {
        intro: "Swift is a safe, modern language from Apple. A file's code runs from the top, so no `main` is needed.",
        code: `let name = "Akademy"\nprint("Hello, \\(name)!")\nprint(2 + 3)`,
        basics: ["print shows output.", "let makes a constant.", "var makes a variable.", "\\( ) interpolates a value."],
        keywords: [["constant", "A value that cannot change."], ["interpolation", "Putting values inside a string."], ["type inference", "Swift working out types itself."]],
        tips: ["Use let by default. Xcode warns when var is not needed.", "Common mistake: changing a let constant."],
        cards: [["let or var: which is constant?", "let"], ["How do you interpolate?", "\\(value)"]],
        quiz: [["Which declares a constant?", "let", "var", "const", "final"], ["Which prints?", "print(\"hi\")", "echo \"hi\"", "NSLog hi", "puts \"hi\""]],
      },
      Optionals: {
        intro: "An optional may hold a value or `nil`. You must unwrap it safely before using it.",
        code: `let nickname: String? = nil\nif let n = nickname {\n    print(n)\n} else {\n    print("No nickname")\n}\nprint(nickname ?? "Anonymous")`,
        basics: ["Type? may hold nil.", "if let unwraps safely.", "?? gives a default.", "guard let exits early."],
        keywords: [["optional", "A type that may hold nil."], ["unwrap", "Getting the value out of an optional."], ["nil", "The absence of a value."]],
        tips: ["Prefer guard let at the start of functions.", "Common mistake: force unwrapping with !, which crashes on nil."],
        cards: [["What does ?? do?", "Gives a default if nil."], ["Which keyword unwraps in a condition?", "if let"]],
        quiz: [["Which is an optional?", "Int?", "Int", "Int!!", "Optional-Int"], ["What does force unwrap do on nil?", "Crashes", "Returns 0", "Prints nil", "Retries"]],
      },
      "Structs and collections": {
        intro: "Structs model data as value types. Arrays and dictionaries have helpers such as `filter`.",
        code: `struct Student {\n    let name: String\n    var score: Int\n    func passed() -> Bool { score >= 75 }\n}\n\nlet students = [Student(name: "Ana", score: 90), Student(name: "Ben", score: 70)]\nlet names = students.filter { $0.passed() }.map { $0.name }\nprint(names)`,
        basics: ["struct is copied on assignment.", "class is shared by reference.", "{ } is a closure.", "$0 is the first closure argument."],
        keywords: [["value type", "A type copied on assignment."], ["closure", "An inline block of code."], ["reference type", "A type shared by reference."]],
        tips: ["Start with struct, and use class when you need shared identity.", "Common mistake: expecting a struct copy to change the original."],
        cards: [["What is $0?", "The first closure argument."], ["Struct or class: which is copied?", "Struct"]],
        quiz: [["Which is a reference type?", "class", "struct", "enum", "Int"], ["Which transforms items?", "map", "filter", "first", "count"]],
      },
    },
  },
);

export const r = course(
  { slug: "r", name: "R", icon: "R", group: "Languages", blurb: "A language built for statistics, data, and charts.", shiki: "r", runner: "r" },
  {
    Basics: {
      "R intro": {
        intro: "R is made for working with data. `<-` assigns, and most operations work on whole vectors at once.",
        code: `name <- "Akademy"\nprint(paste("Hello,", name))\nscores <- c(90, 72, 85)\nprint(mean(scores))`,
        basics: ["<- assigns a value.", "c() combines values into a vector.", "print() shows a value.", "mean() averages a vector."],
        keywords: [["vector", "An ordered set of same-type values."], ["assignment", "Giving a value a name."], ["paste", "A function that joins text."]],
        tips: ["Use RStudio for the friendliest experience.", "Common mistake: indexes start at 1 in R, not 0."],
        cards: [["What is the first index in R?", "1"], ["Which function creates a vector?", "c()"]],
        quiz: [["Which assigns in R?", "x <- 5", "x := 5", "let x = 5", "int x = 5"], ["What does mean(c(2, 4)) give?", "3", "6", "2", "4"]],
      },
      "Vectors and functions": {
        intro: "Math applies to each element automatically. Functions are values created with `function`.",
        code: `scores <- c(90, 72, 85)\nprint(scores + 5)\nprint(scores[scores >= 75])\n\ngrade <- function(s) {\n  ifelse(s >= 75, "pass", "fail")\n}\nprint(grade(scores))`,
        basics: ["Operations apply element by element.", "[ ] with a condition filters.", "function creates a function.", "ifelse works on whole vectors."],
        keywords: [["vectorization", "Applying an operation to every element."], ["filter", "Keeping elements that match."], ["ifelse", "A vectorized condition."]],
        tips: ["Avoid loops when a vectorized function exists.", "Common mistake: writing if() on a vector. Use ifelse."],
        cards: [["What does c(1, 2) * 2 give?", "2 4"], ["Which applies a condition to a vector?", "ifelse"]],
        quiz: [["What is c(1, 2) + 1?", "2 3", "4", "1 2 1", "An error"], ["Which keeps scores above 75?", "scores[scores > 75]", "filter scores", "scores.where(75)", "scores > 75 only"]],
      },
      "Data frames": {
        intro: "A data frame is a table. Columns are vectors, and `$` picks one by name.",
        code: `df <- data.frame(\n  name = c("Ana", "Ben"),\n  score = c(90, 70)\n)\nprint(df)\nprint(df[df$score >= 75, ])\nprint(summary(df$score))`,
        basics: ["data.frame makes a table.", "$ selects a column.", "df[rows, cols] subsets.", "summary() gives quick statistics."],
        keywords: [["data frame", "A table of columns."], ["column", "One named vector in a data frame."], ["subset", "A selected part of a table."]],
        tips: ["Try the dplyr package for readable data work.", "Common mistake: forgetting the comma in df[condition, ]."],
        cards: [["Which symbol selects a column?", "$"], ["What is the form of df[ ]?", "df[rows, columns]"]],
        quiz: [["How do you read the score column?", "df$score", "df.score()", "df->score", "df:score"], ["Which gives quick statistics?", "summary()", "print()", "paste()", "c()"]],
      },
    },
  },
);

export const bash = course(
  { slug: "bash", name: "Bash", icon: "$_", group: "Languages", blurb: "Automate your computer from the command line with shell scripts.", shiki: "bash", runner: "bash" },
  {
    Basics: {
      "Bash intro": {
        intro: "Bash is the shell on most Linux systems. A script is a list of commands saved in a file.",
        code: `#!/bin/bash\necho "Hello, Akademy!"\necho "Today is $(date +%A)"\npwd`,
        basics: ["echo prints text.", "#! picks the interpreter.", "$( ) runs a command and captures output.", "chmod +x makes a script runnable."],
        keywords: [["shell", "A program that runs your commands."], ["script", "A file of commands."], ["shebang", "The #! first line of a script."]],
        tips: ["Add set -euo pipefail to stop on errors.", "Common mistake: spaces around = in an assignment."],
        cards: [["What is the #! line called?", "The shebang."], ["Which command prints text?", "echo"]],
        quiz: [["What does $(date) do?", "Runs date and uses its output", "Prints the word date", "Sets a variable", "Deletes date"], ["What makes a script runnable?", "chmod +x", "run +x", "echo +x", "exec file"]],
      },
      "Variables and conditions": {
        intro: "Assign with no spaces around `=`. Read with `$`. Quote variables to keep spaces safe.",
        code: `name="Ana"\nscore=82\nif [ "$score" -ge 75 ]; then\n  echo "$name passed"\nelse\n  echo "$name failed"\nfi`,
        basics: ["No spaces around =.", "$name reads a variable.", "Double quotes keep spaces together.", "if ends with fi."],
        keywords: [["-ge", "The greater-or-equal test for numbers."], ["quoting", "Wrapping values in quotes for safety."], ["exit code", "A number showing success or failure."]],
        tips: ["Always write \"$var\" with quotes.", "Common mistake: name = \"Ana\" with spaces. That runs a command named name."],
        cards: [["What closes an if?", "fi"], ["Which checks number equality?", "-eq"]],
        quiz: [["Which is valid?", "x=5", "x = 5", "$x = 5", "let x := 5"], ["Which test means greater than?", "-gt", ">>", "-big", "-more"]],
      },
      "Loops and functions": {
        intro: "Use `for` to repeat, and functions to reuse commands. Arguments arrive as `$1`, `$2`, and so on.",
        code: `greet() {\n  echo "Hello, $1!"\n}\n\nfor name in Ana Ben Cara; do\n  greet "$name"\ndone\n\nprintf "a\\nb\\nc\\n" | wc -l`,
        basics: ["for x in list; do ...; done.", "Functions read $1, $2, and so on.", "| pipes output to another command.", "> writes output to a file."],
        keywords: [["pipe", "Sending one command's output to another."], ["redirect", "Sending output to a file."], ["positional parameter", "An argument such as $1."]],
        tips: ["Chain small tools with pipes rather than writing long scripts.", "Common mistake: > overwrites a file. Use >> to append."],
        cards: [["Which symbol pipes output?", "|"], ["Which appends to a file?", ">>"]],
        quiz: [["What is $1 in a function?", "The first argument", "The price", "The last output", "The script name"], ["What closes a for loop?", "done", "fi", "end", "esac"]],
      },
    },
  },
);
