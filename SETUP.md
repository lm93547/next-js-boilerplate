# README
This is an example repository. Please clone all newly repositories from this one.

_We will update this overtime to adjust for changing requirements._

Please always clone from `main`.

## Local Prerequisites
### awslabs/git-secrets
Avoid commiting sensitive information.
1. Install [awslabs/git-secrets](https://github.com/awslabs/git-secrets)
2. Follow the setup instructions

## Repository Setup
### Replacements
To get up and running quick, you'll find annotated the major setup parts with
variables to do a quick `replace in folder`. Below are all mentioned
annotations with their description.

| Document      | Name                     | Description                      | Example                   |
| ------------- | ------------------------ | -------------------------------- | ------------------------- |
| CHANGELOG.md	| $CL_VERSION              | SemVer of Change                 | 0.0.1                     |
| CHANGELOG.md	| $CL_DATE                 | Date of Change (yyyy-mm-dd)      | 2020-01-01                |
| CHANGELOG.md	| $CL_RELEASE_COMPARE_LINK | Compare link to previous version | compare/v1.0...v1.1       |
| CHANGELOG.md	| $CL_COMPARE_LINK         | Compare link to last major    	  | compare/v1.5.1...v1x      |
| CODEOWNERS    | $CO_GITHUB_HANDLE        | Your Github @handle              | @StructFi               |
| README.md 	| $RM_REPOSITORY_NAME      | Name of the Repository           | Example Repository        |
| README.md 	| $RM_YOUR_NAME            | Your Name                        | John Doe                  |
| README.md 	| $RM_YOUR_EMAIL           | Your StructFi Email              | john.doe@struct.fi   |
| README.md 	| $RM_DESCRIPTION          | Repository Description           | Example Repository Layout |
| SECURITY.md 	| $SE_YOUR_NAME            | Your Name                        | John Doe                  |
| SECURITY.md 	| $SE_YOUR_EMAIL           | Your StructFi Email              | john.doe@struct.fi   |

### README.md
Please update to match your projects requirements.

### CODESTYLE.md
Adjust [CODESTYLE.md](CODESTYLE.md) if you are not using JavaScript.

### GOLIVE.md
Modify [GOLIVE.md](docs/deployment/go-live-checklist.md) to match your go-live requirements.

### Rename master branch to main
Before the initial push, please rename `master` to `main`.

`git branch -M main`

### Delete SETUP.md
Once all done delete [SETUP.md](SETUP.md)

### All Ready to go!
Push and Enjoy.

---

##### Other Examples


