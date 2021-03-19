<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Slack notifier for [Runnerty]:

### Installation:

Through NPM

```bash
npm i @runnerty/notifier-slack
```

You can also add modules to your project with [runnerty-cli]

```bash
npx runnerty-cli add @runnerty/notifier-slack
```

This command installs the module in your project, adds example configuration in your `config.json`.

If you have installed [runnerty-cli] globally you can include the module with this command:

```bash
rty add @runnerty/notifier-slack
```

### Configuration sample:

Add in [config.json]:

```json
{
  "notifiers": [
    {
      "id": "slack_default",
      "type": "@runnerty-notifier-slack",
      "token": "MY_BOT_TOKEN",
      "bot_name": "Runnerty-Sentinel",
      "channel": "MY_CHANNEL",
      "maxConcurrents": 1,
      "minInterval": 600
    }
  ]
}
```

### Plan sample:

Add in [plan.json]:

- Simple

```json
{
  "id": "slack_default",
  "bot_emoji": ":metal:",
  "channel": "MY_CHANNEL",
  "message": "PROCESS *:PROCESS_ID* OF CHAIN :CHAIN_ID RUNNING!"
}
```

- Attachments

```json
{
  "id": "slack_default",
  "bot_name": "Runnerty Bot",
  "bot_emoji": ":metal:",
  "channel": "MY_CHANNEL",
  "attachments": [
    {
      "fallback": "Required plain-text summary of the attachment.",
      "color": "#36a64f",
      "pretext": "Simple sample pretext",
      "author_name": "Runnerty Bot",
      "author_link": "https://github.com/runnerty/notifier-slackhttp://runnerty.io",
      "author_icon": "https://runnerty.io/assets/header/logo-stroked.png",
      "title": "Slack attachment sample",
      "title_link": "https://api.slack.com/docs/messages/builder",
      "text": "More info",
      "fields": [
        {
          "title": "Priority",
          "value": "High",
          "short": false
        }
      ],
      "image_url": "http://my-website.com/path/to/image.jpg",
      "thumb_url": "https://runnerty.io/assets/header/logo-stroked.png",
      "footer": "Runnerty Notifier Slack Sample",
      "footer_icon": "https://runnerty.io/assets/header/logo-stroked.png"
    }
  ]
}
```

- Upload File

```json
{
  "id": "slack_default",
  "bot_emoji": ":metal:",
  "channel": "MY_CHANNEL",
  "message": "PROCESS *:PROCESS_ID* OF CHAIN :CHAIN_ID RUNNING!",
  "file": "./resume.csv"
}
```

[runnerty]: http://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/notifier-slack.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/notifier-slack
[npm-image]: https://img.shields.io/npm/v/@runnerty/notifier-slack.svg
[david-badge]: https://david-dm.org/runnerty/notifier-slack.svg
[david-badge-url]: https://david-dm.org/runnerty/notifier-slack
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/
