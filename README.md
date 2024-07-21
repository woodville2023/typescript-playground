This project is just a place holder for quickly running a test playground for learning typescript

Tasks required for setup\
  node version 20 is setup and it is in path
  ```
    #Type 
    node -v
    #will print something like
    v20.13.1
  ```

Install typescript if not installed\
  `npm install -g typescript`

After installation then run\
`tsc --v`\
Install ts-node if not installed\
  `npm install -g ts-node`\
After installation type\
  `ts-node -v`
\
Create a file called tsconfig.json with the following contents\
```
{
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "sourceMap": true,
    "outDir": "target"
  }
}
```

Create a folder called .vscode\
Create a file called tasks.json under .vscode folder
with following contents\
```
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
        "type": "typescript",
        "tsconfig": "tsconfig.json",
        "problemMatcher": [
            "$tsc"
        ],
        "group": "build",
        "label": "tsc: build - tsconfig.json"
    },
    {
        "type": "typescript",
        "tsconfig": "tsconfig.json",
        "option": "watch",
        "problemMatcher": [
            "$tsc-watch"
        ],
        "group": {
            "kind": "build",
            "isDefault": true
        },
        "label": "tsc: watch - tsconfig.json"
    }
]
}
```

On the VS code Menu bar\
  Go to Terminal>Run Task\
  Then type\
    ```tsc:watch```
\
This will watch the typescript files and\
transpile/compile the typescript files to  to javascript inside target directory


To compile and run type script for a file named src/helloword.ts\
With the file open in the editor\
On the VS code MenuBar
```
Go To Run Menu

Click Run Without Debugging

You will see on the bottom , a Panel named

Debug Console

you will see the output here

Do this evertime you want to test/run your code

```

