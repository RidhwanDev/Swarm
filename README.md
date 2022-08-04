# Swarm

The world's first open source blog

Please see the [Intro](https://github.com/RidhwanDev/Swarm/blob/main/docs/intro.md) page for information about the project.

This readme file will be about making contributions to the repository.

# Contributing to the repository

## Fork the repository

Click on the fork image in the top right of the github repository. ![Fork image](/static/img/forkimage.png)

On the presented page you can leave everything as default and continue to click Create fork.
![Fork image](/static/img/create-fork.png)

This will create a repository on your personal account against the main branch of the app.

You can now clone this to your local environment.

## Running the app

This isn't necessary as you can just make changes to the `md` files under `/docs/` but if you wish to run the app.

Make sure you have `node` and `yarn` installed.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Making changes

Choose the file you want to make a change against. All the resource files are located under the `/docs/` folder. You can choose to add new files if you wish to create new articles.

Edit the `md` files using Markdown language, which is pretty straight forward. Here is a [Cheat sheet](https://www.markdownguide.org/cheat-sheet/).

## Submitting a suggestion

Once you're happy with your changes, commit your changes to your `main` branch.

Navigate to the github page of your Fork, where you will find a banner at the top of the page that says:

> This branch is 1 commit ahead of RidhwanDev:main.

Click on the `contribute` button and then click on `Open pull request`.
![Fork image](/static/img/contribute-github.png)

Enter in a title that describes your changes. If you've added new files then give a brief explanation as to why you think this new file should be added.

If you have removed or changed existing information and it is not self explanatory then it is advisable to give a short explanation as to why.

Click on `Create pull request` button.

Congratulations you've made your suggestion!

This will then be reviewed and merged in and be reflected on the main site.

Once your pull request in merged into the main branch, it will start the pipeline to deploy the changes. The changes should take effect on the website within a few minutes.
