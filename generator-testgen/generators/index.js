var Generator = require('yeoman-generator');
const config = require('./config');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {

      prompting() {
        return this.prompt(config.prompts).then(answers => {
          this.groupId = answers.groupId;
          this.artifactId = answers.artifactId;
        });
      }


    writing() {
        const copy = (input, output) => {
          this.fs.copy(this.templatePath(input), this.destinationPath(output));
        };

        // Create extra directories
        config.dirsToCreate.forEach(item => {
          mkdirp(item);
        });


        const templateData = {
          groupId: this.groupId,
          artifactId: this.artifactId
        };


        const copyTpl = (input, output, data) => {
          this.fs.copyTpl(
            this.templatePath(input),
            this.destinationPath(output),
            data
          );
        };

        // Render Files
        config.filesToRender.forEach(file => {
          copyTpl(file.input, file.output, templateData);
        });

        // Copy files
        config.filesToCopy.forEach(file => {
          copy(file.input, file.output);
        });
    }
};