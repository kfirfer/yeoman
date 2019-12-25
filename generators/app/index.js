let Generator = require('yeoman-generator');
const dirsToCreate = require('./config/dirs_to_create');
const filesToCopy = require('./config/files_to_copy');
const filesToRender = require('./config/files_to_render');
const prompt = require('./config/prompts');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        var pjson = require('../../package.json');
        this.log("version " + pjson.version);
        for (let optionName in prompt.options) {
            this.option(optionName, prompt.options[optionName])
        }
    }

    prompting() {
        if (this.options["skip-prompt"]) {
            this.log("Skipping prompt");
            return;
        }

        return this.prompt(prompt.prompts).then(answers => {
            this.answers = answers;
        });
    }

    writing() {
        const templateData = this.options["skip-prompt"] !== undefined ? this.options : this.answers;

        const copy = (input, output) => {
            this.fs.copy(this.templatePath(input), this.destinationPath(output));
        };

        this.log("Create extra directories");
        dirsToCreate.dirsToCreate.forEach(item => {
            mkdirp(item);
        });

        const copyTpl = (input, output, data) => {
            this.fs.copyTpl(
                this.templatePath(input),
                this.destinationPath(output),
                data
            );
        };

        this.log("Render Files");
        filesToRender.filesToRender.forEach(file => {
            copyTpl(file.input, file.output, templateData);
        });

        this.log("Copy files");
        filesToCopy.filesToCopy.forEach(file => {
            copy(file.input, file.output);
        });
    }
};