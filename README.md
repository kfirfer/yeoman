### prerequisite
1) Install npm
2) Setup Yeoman: https://yeoman.io/learning/index.html


### Build generator-testgen:
1) git clone
2) Open terminal on this project and run:
    ```bash
    npm link
    ```


# Use the generator created before
Create some test folder, and run the generator:
```bash
mkdir test && cd test
yo testgen:app
```
You should see this console output: `create pom.xml`