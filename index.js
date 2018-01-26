"use strict";

const Notification = global.NotificationClass;
const IncomingWebhooks = require("@slack/client").IncomingWebhook;

class slackNotifier extends Notification {
  constructor(notification) {
    super(notification);
  }

  send(notification) {
    let _this = this;
    let wh = new IncomingWebhooks(notification.webhookurl);
    let data = {
      text: notification.title,
      channel: notification.channel,
      iconEmoji: notification.bot_emoji,
      username: notification.bot_name,
      attachments: [
        {
          text: notification.message,
          color: notification.color
        }
      ]
    };
    wh.send(data, function () {
      _this.end();
    });
  }

}

module.exports = slackNotifier;