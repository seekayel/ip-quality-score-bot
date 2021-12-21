const {Message} = require('../src/message')

describe('Message', () => {
  it('type message', async () => {
    const msg = new Message({event: {type: "message"}})
    expect(msg.isMessage()).toBe(true)
    expect(msg.isAppMention()).toBe(false)
  })

  it('type mention', async () => {
    const msg = new Message({event: {type: "app_mention"}})
    expect(msg.isMessage()).toBe(false)
    expect(msg.isAppMention()).toBe(true)
  })

  it('type unknown', async () => {
    const msg = new Message({event: {type: "not a type"}})
    expect(msg.isMessage()).toBe(false)
    expect(msg.isAppMention()).toBe(false)
  })

 })
