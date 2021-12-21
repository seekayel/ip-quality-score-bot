const {Message} = require('../src/message')


const appMention = {"token":"ooV5oJ7RbnT6yDdlmzZOeL8a","team_id":"T0213HYD5MY","api_app_id":"A02RC35MKHB","event":{"client_msg_id":"b2e9adf9-bfe5-4e17-a092-33f876712251","type":"app_mention","text":"<@U02R8AXN4MU> test","user":"U021TC4PMC0","ts":"1640095294.087600","team":"T0213HYD5MY","blocks":[{"type":"rich_text","block_id":"y6z","elements":[{"type":"rich_text_section","elements":[{"type":"user","user_id":"U02R8AXN4MU"},{"type":"text","text":" test"}]}]}],"channel":"C02BG9KEG4V","event_ts":"1640095294.087600"},"type":"event_callback","event_id":"Ev02RJFBBQAW","event_time":1640095294,"authorizations":[{"enterprise_id":null,"team_id":"T0213HYD5MY","user_id":"U02R8AXN4MU","is_bot":true,"is_enterprise_install":false}],"is_ext_shared_channel":false,"event_context":"4-eyJldCI6ImFwcF9tZW50aW9uIiwidGlkIjoiVDAyMTNIWUQ1TVkiLCJhaWQiOiJBMDJSQzM1TUtIQiIsImNpZCI6IkMwMkJHOUtFRzRWIn0"}

// const selfMessage =

describe('Message', () => {
  it('type message', async () => {
    const msg = new Message({event: {type: "message"}})
    expect(msg.isMessage()).toBe(true)
    expect(msg.isAppMention()).toBe(false)
  })

  it('type mention', async () => {
    const msg = new Message(appMention)
    expect(msg.isMessage()).toBe(false)
    expect(msg.isAppMention()).toBe(true)
  })

  it('type unknown', async () => {
    const msg = new Message({event: {type: "not a type"}})
    expect(msg.isMessage()).toBe(false)
    expect(msg.isAppMention()).toBe(false)
  })

 })
