import fetch from 'node-fetch'

export async function sendToTelegram(text: string) {
  const URL = `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`
  const body = `chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${text}`
  const res = await fetch(URL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body,
  })
  const data = await res.json()
  if (!data.ok) {
      console.error(data.StatusMessage)
  }
}
