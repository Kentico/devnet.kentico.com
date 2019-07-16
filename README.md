# Submit a New Kentico EMS Extension to DevNet

Do you run have an open-source project related to Kentico or some extantion you want to share? Submit a Pull Request to add it to the list!

Visit the [devnet.kentico.com/marketplace](https://devnet.kentico.com/marketplace) to see all extensions!

## How to qualify

In order for a project to be registered on DevNet it has to fulfill several requirements, such as:

- be related to any of the Kentico EMS products
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
- follow the object [naming conventions](https://docs.kentico.com/k12sp/custom-development/creating-custom-modules/creating-installation-packages-for-modules#Creatinginstallationpackagesformodules-Conventionsfordatabaseobjects) (if applicable)
- follow the [best practices for customization](https://docs.kentico.com/k12sp/custom-development/best-practices-for-customization) (if applicable)

## How to register an extension

Once your extension meets the above-mentioned criteria you can add it by submitting a pull request to this repository.

Projects are located in the [manifest.json](https://github.com/Kentico/devnet.kentico.com/blob/master/marketplace/manifest.json) file. To add your project create a new entry in the json object. [This guide](https://help.github.com/en/articles/editing-files-in-another-users-repository) shows you how to propose new changes directly in your browser without having to clone the repository to your machine.

The `.json` file entry contains details about your projects:

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

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/devnet.kentico.com?pixel)
