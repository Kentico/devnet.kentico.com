# Submit a New Kentico EMS Extension to DevNet

[![Build Status](https://api.travis-ci.com/Kentico/devnet.kentico.com.svg?branch=master)](https://travis-ci.com/Kentico/devnet.kentico.com)
[![Live](https://img.shields.io/badge/live-brightgreen.svg)](https://devnet.kentico.com/marketplace)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico)

Are you developing an open-source project or an extension related to Kentico and want to share it with the developer's community? Submit a Pull Request and share it on the [DevNet marketplace](https://devnet.kentico.com/marketplace)!

Visit [devnet.kentico.com/marketplace](https://devnet.kentico.com/marketplace) to see all available extensions.

## How to qualify

To register your project on DevNet, it needs to satisfy the following requirements. The project needs to:

- be related to any of the Kentico EMS products
- be compatible with the latest major version of the related product
- utilize the open-source approach
- have satisfactory documentation
- contain a README file with:
  - a clear description of the project
  - download & installation instructions
  - (a link to) contribution guidelines
  - (a link to) license information
  - compatibility information
  - information about how the project is supported in case users have questions or find a bug
  - (optional, but recommended) a screenshot/gif of the extension
-   follow [naming conventions](https://kentico.com/CMSPages/DocLinkMapper.ashx?version=latest&link=module_create_package#Creatinginstallationpackagesformodules-Conventionsfordatabaseobjects) for Kentico objects (if applicable)
-   follow [best practices for customization](https://kentico.com/CMSPages/DocLinkMapper.ashx?version=latest&link=customization_best_practices) (if applicable)
-   (recommended) be hosted on GitHub

> These requirements are automatically checked via [GitHub action](https://github.com/Kentico/devnet.kentico.com/actions/workflows/extensions-check.yml) duirng the pull request pipeline.

## Registering extensions

If your extension meets the above-mentioned criteria, you can create a pull request in this repository. Projects are located in the [`extensions.json`](/marketplace/extensions.json) file. To add your project, create a new entry in the JSON object.

You can propose changes to a file [directly in your browser](https://help.github.com/en/articles/editing-files-in-another-users-repository) without having to clone the repository, doing the changes locally, and committing.

### Example configuration

The [`extensions.json`](/marketplace/extensions.json) file contains details about available extensions. Add a new entry to submit an extension:

```json
[
  ...

  {
   "name": "Video widget",
   "description": "Widget allowing to select and render a YouTube video on site.",
   "thumbnailUrl": "https://raw.githubusercontent.com/Kentico/devnet.kentico.com/master/marketplace/assets/kentico-icon.png",
   "author": "Kentico",
   "sourceUrl": "https://github.com/Kentico/ems-mvc-components/tree/master/Kentico.Widget.Video#video-widget",
   "version": "1.0.0-beta1",
   "kenticoVersions": [
     "12.0.31"
   ],
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

| Property        | Type | Description |
| ------------- |:-------------:| :----- |
| name      | string | Name of the extension (max. 40 characters). |
| description      | string | Description of the extension (max. 160 characters). |
| thumbnailUrl<sup>1</sup>      | string | Url to the thumbnail image describing the extension, or the author (must be jpg/jpeg/png with 100x100px resolution and accessed using secure HTTPS). |
| author<sup>2</sup>      | string | Name of the author and/or company (max. 40 characters). |
| sourceUrl      | string | URL to access the extension (must use secure HTTPS). |
| version<sup>3</sup>      | string | Latest version of the extension (must follow the [semantic versioning](https://semver.org)). |
| kenticoVersions<sup>4</sup>      | array of strings | supported Kentico versions (version entries must follow the [semantic versioning](https://semver.org)). |
| category      | string | Category of the extension. Use one of the following: `module`, `webpart`, `website template`, `utility`, `mvc widget`, `mvc section`, `mvc form component`, `mvc inline editor`, `mvc personalization condition type`, `integration`, `other`. |
| tags      | array of strings | List of tags you want to apply to the extension. |

> <sup>1</sup> You can store the icon in the [/marketplace/assets](/marketplace/assets) folder as a part of the pull request and use URL format as showcased in the [example configuration](#example-configuration). [Kentico icon](/marketplace/assets/kentico-icon.png) is reserved for extesnions developed by Kentico.

> <sup>2</sup> If you want your submissions to count towards the [Kentico Partners program](https://www.kentico.com/partners), you need to provide the company name.

> <sup>3</sup> It is recommended to start your version numbering from `1.0.0`, but there are no limitations other than the versioning needs to follow the [semantic versioning](https://semver.org). Specified extension version needs to be compatible with the latest specified Kentico version.

> <sup>4</sup> The version of the Kentico EMS with which the extension is compatible. The array is used to keep track of what Kentico versions were supported in previous extension releases. The latest Kentico version needs to be bound with the `version` property. A recommended approach is to keep a table mapping the extension version to Kentico EMS version in the readme file of the project. Use `12.0.29` for Kentico 12 Service pack.

## Extension Ideas/Suggestions 

Let the community know what would be valuable for you! Maybe your desired piece of functionality is already out there.

If you have an idea for the MVC widget, MVC inline editor, MVC from component, or any other extension for Kentico EMS, feel free to submit a feature request issue, describe your extension and label it by `extension-idea`. 

## Updating extensions

If you release a new version of the extension, submit a pull request with an updated entry in the [`extensions.json`](/marketplace/extensions.json) file and provide a link to the older version in the readme file of the project. We recommend incrementing the major version in `version` when the major version of `kenticoVersion` is incremented.

