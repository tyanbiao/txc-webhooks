# 腾讯兔小巢 Webhooks
接入飞书群机器人到腾讯兔小巢，当有新反馈时自动推送消息到飞书群机器人

## 如何使用
- 在飞书新建一个群机器人，复制群机器人的 webhook 地址，详情见 [飞书开放平台·自定义机器人指南](https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)
- 将 `.env.example` 重命名为 `.env.local`，`WEBHOOK_URL`修改为你自己的群机器人 webhook 地址
- 点击右侧按钮一键部署到 Vercel [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tyanbiao/txc-webhooks.git)
- 在腾讯兔小巢中配置 Webhooks，`${your domain}/hooks/${product name}`，参考 [腾讯兔小巢·配置 Webhooks](https://txc.qq.com/helper/webHookGuide)
