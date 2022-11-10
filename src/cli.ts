import {Command} from "commander";

const program = new Command();

class Cli {

  public run() {
    program
    .name('tutornode')
    .version(require('../package.json').version, '-v, --version')
    .description(require('../package.json').description)
    .action(() => this.action())
    .parse(process.argv);
  }

  private action() {
    console.log("Action!")
  }
}

new Cli().run();