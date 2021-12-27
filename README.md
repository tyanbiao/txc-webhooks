# 腾讯兔小巢 Webhooks
接入 webhook 到腾讯兔小巢，当有新反馈时自动推送消息到飞书群机器人，Telegram bot

## 如何使用
- 将 `.env.example` 重命名为 `.env.local`，`BOTS` 选项设置你需要接入的机器人，用逗号隔开 `FEISHU_BOT_URL`修改为你自己飞书群机器人的 webhook url，同样，`TELEGRAM_TOKEN` 和 `TELEGRAM_CHAT_ID` 修改为你的 telegram bot
- 点击右侧按钮一键部署到 Vercel [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tyanbiao/txc-webhooks.git)
- 在腾讯兔小巢中配置 Webhooks，`${your domain}/hooks/${product name}`，参考 [腾讯兔小巢·配置 Webhooks](https://txc.qq.com/helper/webHookGuide)

## 如何创建机器人
- 飞书: [飞书开放平台·自定义机器人指南](https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)
- Telegram: [How do I create a bot?](https://core.telegram.org/bots#3-how-do-i-create-a-bot)