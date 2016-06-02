# devnet.kentico.com/open-source
Do you run an open-source project related to Kentico? Submit a Pull Request to add it to the list!

Visit the [site](https://devnet.kentico.com/open-source)!

## How to qualify

In order for a project to be registered on DevNet it has to fulfill several requirements. It has to:
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
- follow the [standard structure](#recommended-structure-of-your-project)

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

## Recommended structure of your project

### Web parts


### Modules
