import {VercelRequest, VercelResponse} from '@vercel/node'
import { sendToTelegram } from '../bot/telegram'
import { sendToFeishu } from '../bot/feishu'

function handleMessage(name: string, data: any): string {
    let action = ''
    let content = ''
    switch (data.type) {
        // 主贴发表
        case 'post.created':
            action = '主贴发表'
            content = data?.payload?.post?.content
            break
        // 主贴更新
        case 'post.updated':
            action = '主贴更新'
            content = data?.payload?.post?.content
            break
        // 回复发表
        case 'reply.created':
            action = '回复发表'
            content = data?.payload?.reply?.content
            break
        // 回复更新
        case 'reply.updated':
            action = '回复更新'
            content = data?.payload?.reply?.content
            break
        default:
            action = data.type
            content = JSON.stringify(data?.payload)
            break
    }
    return `${name}有${action}: ${content}`
}

async function main(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return res.status(405).end('Method Not Allowed')
    }
    const bots = (process.env.BOTS || '').split(',').map(v => v.toUpperCase())
    try {
        const product = req.query.product.toString() || 'Unknown'
        const content = handleMessage(product, req.body)
        if (bots.indexOf('TELEGRAM') >= 0) {
          await sendToTelegram(content)
        }
        if (bots.indexOf('FEISHU') >= 0) {
          await sendToFeishu(content)
        }
        return res.status(200).end('ok')
    } catch (e) {
        console.error(e)
        return res.status(500).end(e.message || 'Server Error')
    }
}

export default main