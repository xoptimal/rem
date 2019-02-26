const Generator = require('yeoman-generator');
const yParser = require('yargs-parser');
const glob = require('glob');
const {statSync} = require('fs');
const {basename} = require('path');
const debug = require('debug')('rem:BasicGenerator');


module.exports = class AppGenerator extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.args = yParser(args);
        this.name = basename(opts.env.cwd);
    }

    prompting() {
        const prompts = [
            {
                name: 'isTypeRem',
                type: 'confirm',
                message: 'Do you want to use rem?',
                default: true,
            },
        ];
        return this.prompt(prompts).then(props => {
            this.prompts = props;
        });
    }

    writing() {
        const context = {name: this.name, ...this.prompts};
        const {isTypeRem} = this.prompts;
        if (!isTypeRem) return false;
        glob.sync('**/**', {cwd: this.templatePath(), dot: true})
            .forEach(file => {
                debug(`copy ${file}`);
                const filePath = this.templatePath(file);
                if (statSync(filePath).isFile()) {
                    this.fs.copyTpl(
                        this.templatePath(filePath),
                        this.destinationPath(file.replace(/^_/, '.')),
                        context,
                    );
                }
            });
    }

};


