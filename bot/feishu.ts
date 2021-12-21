import fetch from 'node-fetch'

export async function sendToFeishu(content: string) {
  const URL = `https://open.feishu.cn/open-apis/bot/v2/hook/${process.env.FEISHU_TOKEN}`
  const body = JSON.stringify({
      "msg_type": "text",
      "content": {
          "text": content
      }
  })
  const res = await fetch(URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body,
  })
  const data = await res.json()
  if (data.StatusCode !== 0) {
      console.error(data.StatusMessage)
  }
}