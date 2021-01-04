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

```bash
npm i @runnerty/notifier-console
```

### Configuration sample:

Add in [config.json]:

```json
{
  "notifiers": [
    {
      "id": "slack_default",
      "type": "@runnerty-notifier-slack",
      "webhookurl": "https://hooks.slack.com/services/ABC123/ABC123/ABC123",
      "bot_name": "Runnerty-Sentinel",
      "channel": "my_runnerty_channel",
      "maxConcurrents": 1,
      "minInterval": 600
    }
  ]
}
```

### Plan sample:

Add in [plan.json]:

```json
{
  "notifications": {
    "on_fail": [
      {
        "id": "slack_default",
        "bot_emoji": ":metal:",
        "channel": "my_runnerty_channel",
        "message": "PROCESS *:PROCESS_ID* OF CHAIN :CHAIN_ID RUNNING!"
      }
    ]
  }
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
