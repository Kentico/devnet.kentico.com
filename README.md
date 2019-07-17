# Submit a New Kentico EMS Extension to DevNet

[![Build Status](https://api.travis-ci.com/Kentico/devnet.kentico.com.svg?branch=master)](https://travis-ci.com/Kentico/devnet.kentico.com)
[![Live](https://img.shields.io/badge/live-brightgreen.svg)](https://devnet.kentico.com/marketplace)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico)

## :warning: Work in progress

Do you run have an open-source project related to Kentico or some extension you want to share? Submit a Pull Request to add it to the list!

Visit the [devnet.kentico.com/marketplace](https://devnet.kentico.com/marketplace) to see all extensions!

## How to qualify

In order for a project to be registered on DevNet it has to fulfill several requirements, such as:

- be related to any of the Kentico EMS products
- function with the latest version of the related product
- be well documented
- open-source approach
- contain a README file with:
  - a clear description of the project
  - download & installation instructions
  - (a link to) contribution guidelines
  - (a link to) license information
  - compatibility information
  - information about how the project is supported in case users have questions or find a bug
- follow the object [naming conventions](https://docs.kentico.com/k12sp/custom-development/creating-custom-modules/creating-installation-packages-for-modules#Creatinginstallationpackagesformodules-Conventionsfordatabaseobjects) (if applicable)
- follow the [best practices for customization](https://docs.kentico.com/k12sp/custom-development/best-practices-for-customization) (if applicable)
- (just recommendation) be hosted here on GitHub

## How to register an extension

Once your extension meets the above-mentioned criteria you can add it by submitting a pull request to this repository.

Projects are located in the [manifest.json](https://github.com/Kentico/devnet.kentico.com/blob/master/marketplace/manifest.json) file. To add your project create a new entry in the JSON object. [This guide](https://help.github.com/en/articles/editing-files-in-another-users-repository) shows you how to propose new changes directly in your browser without having to clone the repository to your machine.

The `.json` file entry contains details about your projects:

```json
[
   {
    "name": "YouTube Video widget",
    "description": "Widget allowing to select and render a YouTube video on site.",
    "thumbnailUrl": "https://avatars1.githubusercontent.com/u/47349751",
    "author": "kentico",
    "sourceUrl": "https://github.com/Kentico/ems-mvc-components#warning-this-repo-is-in-development",
    "version": "1.0.0",
    "kenticoVersion": "12.0.29",
    "category": "mvc widget",
    "tags": [
       "mvc",
       "youtube",
        "video",
        "inline-editor"
      ]
  }
]
```

| Property        | Type | Description|
| ------------- |:-------------:| -----:|
| name      | string | Name of the extension (max 40 characters).|
| description      | string | Description of the extension (max 160 characters).|
| thumbnailUrl      | string | Url to the thumbnail image (must be jpg/jpeg/png with 100x100px resolution and using the HTTPS)|
| author      | string | Name of the author (max 40 characters).|
| sourceUrl      | string | Url to the extension (must be using HTTPS).|
| version      | string | Extension version (must follow semantic versioning).|
| version      | string | Kentico supported version (must follow semantic versioning).|
| category      | string | Category of the extension. (One of these string `module`, `webpart`, `website template`, `utility`, `mvc widget`, `mvc section`, `mvc form component`, `mvc inline editor`, `mvc personalization condition type`, `other`)|
| tag      | array of strings | List that tags you want to mark an extension with.|

## Updating an extension

If you release a new version of the extension, update the record entry in the `JSON` file and reference the older version from the description linked by the `sourceUrl` link.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/devnet.kentico.com?pixel)
