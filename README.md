# Submit a New Project to DevNet
Do you run an open-source project related to Kentico? Submit a Pull Request to add it to the list!

Visit the [devnet.kentico.com/open-source](https://devnet.kentico.com/open-source) to see all projects!

## How to qualify

In order for a project to be registered on DevNet it has to fulfill several requirements, such as:
- be related to any of the Kentico products
- function with the latest version of the related product
- be well documented
- be hosted here on GitHub
- contain a README file with:
 - a clear description of the project
 - download & installation instructions
 - (a link to) contribution guidelines
 - (a link to) license infromation
 - compatibility information
 - information about how the project is supported in case users have questions or find a bug
- follow the [recommended project structure](#recommended-project-structure)
- follow the [best practices for customization](https://docs.kentico.com/display/K9/Best+practices+for+customization) (if applicable)

## How to register a project
Once your project meets the above-mentioned criteria you can add it by submitting a pull request to this repository.

Projects are located in the [os-projects](https://github.com/Kentico/devnet.kentico.com/tree/master/os-projects) folder grouped by organization name. To add your project create a new file named after your organization (or edit existing), ending with `.json`. [This guide](https://help.github.com/articles/creating-new-files/) shows you how to create the file directly in your browser without having to clone the repository to your machine.

The `.json` file contains details about your projects (it can contain multiple):

```json
[
   {
      "name": "project name",
      "description": "project description",
      "url": "https://github.com/<owner>/<repository>",
      "tags": [
         "your",
         "tags",
         "here"
      ]
   },
   {
      "name": "another project..."
   }
]
```

Check out [kentico.json](https://github.com/Kentico/devnet.kentico.com/blob/master/os-projects/kentico.json) for an example of the file structure.

## Recommended project structure

### Web parts
TODO

### Modules
TODO
https://docs.kentico.com/display/K9/Creating+installation+packages+for+modules
