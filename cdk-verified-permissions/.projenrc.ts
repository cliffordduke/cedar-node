import { awscdk, javascript } from "projen";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "Clifford Duke",
  authorAddress: "clifduke@amazon.com",
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.0.0",
  name: "cdk-verified-permissions",
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  repositoryUrl: "https://github.com/clifduke/cdk-verified-permissions.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();