'use strict';

const Notifier = require('@runnerty/module-core').Notifier;
const { WebClient } = require('@slack/web-api');
const { createReadStream } = require('fs');
const path = require('path');

class slackNotifier extends Notifier {
  constructor(notification) {
    super(notification);
  }
  async send(notification) {
    try {
      if (!notification.token) throw new Error('should have required property token');
      if (!notification.channel) throw new Error('should have required property channel');
      if (!notification.message && !notification.attachments) throw new Error('should have required property message');
      const token = notification.token;
      const web = new WebClient(token);
      const data = {
        text: notification.title,
        channel: notification.channel,
        icon_emoji: notification.bot_emoji,
        username: notification.bot_name,
        attachments: [
          {
            text: notification.message,
            color: notification.color
          }
        ]
      };
      if (notification.attachments) data.attachments = notification.attachments;
      await web.chat.postMessage(data);
      try {
        if (notification.file) {
          await web.files.upload({
            filename: path.basename(notification.file),
            file: createReadStream(notification.file),
            channels: notification.channel,
            title: notification.title,
            username: notification.bot_name,
            icon_emoji: notification.bot_emoji
          });
        }
      } catch (err) {
        this.logger.log('warn', `Slack Notifier error uploading file: ${err}`);
      }
      this.end();
    } catch (err) {
      this.logger.log('warn', `Slack Notifier error: ${err}`);
      this.end();
    }
  }
}

module.exports = slackNotifier;
