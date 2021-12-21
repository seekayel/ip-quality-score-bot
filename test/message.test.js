const {Message} = require('../src/message')


const appMention = {"token":"ooV5oJ7RbnT6yDdlmzZOeL8a","team_id":"T0213HYD5MY","api_app_id":"A02RC35MKHB","event":{"client_msg_id":"b2e9adf9-bfe5-4e17-a092-33f876712251","type":"app_mention","text":"<@U02R8AXN4MU> test","user":"U021TC4PMC0","ts":"1640095294.087600","team":"T0213HYD5MY","blocks":[{"type":"rich_text","block_id":"y6z","elements":[{"type":"rich_text_section","elements":[{"type":"user","user_id":"U02R8AXN4MU"},{"type":"text","text":" test"}]}]}],"channel":"C02BG9KEG4V","event_ts":"1640095294.087600"},"type":"event_callback","event_id":"Ev02RJFBBQAW","event_time":1640095294,"authorizations":[{"enterprise_id":null,"team_id":"T0213HYD5MY","user_id":"U02R8AXN4MU","is_bot":true,"is_enterprise_install":false}],"is_ext_shared_channel":false,"event_context":"4-eyJldCI6ImFwcF9tZW50aW9uIiwidGlkIjoiVDAyMTNIWUQ1TVkiLCJhaWQiOiJBMDJSQzM1TUtIQiIsImNpZCI6IkMwMkJHOUtFRzRWIn0"}

const selfMessage = {"token":"ooV5oJ7RbnT6yDdlmzZOeL8a","team_id":"T0213HYD5MY","api_app_id":"A02RC35MKHB","event":{"bot_id":"B02RH9ZMN6Q","type":"message","text":"Hi <@U021TC4PMC0>! :smile: I heard you say:\n\n&gt; test of <@U02R8AXN4MU>","user":"U02R8AXN4MU","ts":"1640095601.087900","team":"T0213HYD5MY","bot_profile":{"id":"B02RH9ZMN6Q","deleted":false,"name":"Sample IP Quality Score Bot","updated":1640028390,"app_id":"A02RC35MKHB","icons":{"image_36":"https:\/\/a.slack-edge.com\/80588\/img\/plugins\/app\/bot_36.png","image_48":"https:\/\/a.slack-edge.com\/80588\/img\/plugins\/app\/bot_48.png","image_72":"https:\/\/a.slack-edge.com\/80588\/img\/plugins\/app\/service_72.png"},"team_id":"T0213HYD5MY"},"thread_ts":"1640095598.087800","parent_user_id":"U021TC4PMC0","channel":"C02BG9KEG4V","event_ts":"1640095601.087900","channel_type":"channel"},"type":"event_callback","event_id":"Ev02RLQUQF60","event_time":1640095601,"authorizations":[{"enterprise_id":null,"team_id":"T0213HYD5MY","user_id":"U02R8AXN4MU","is_bot":true,"is_enterprise_install":false}],"is_ext_shared_channel":false,"event_context":"4-eyJldCI6Im1lc3NhZ2UiLCJ0aWQiOiJUMDIxM0hZRDVNWSIsImFpZCI6IkEwMlJDMzVNS0hCIiwiY2lkIjoiQzAyQkc5S0VHNFYifQ"}

const triggerMessage = {"token":"ooV5oJ7RbnT6yDdlmzZOeL8a","team_id":"T0213HYD5MY","api_app_id":"A02RC35MKHB","event":{"client_msg_id":"c638f938-b1bf-4d19-bc66-4b74d249b5c2","type":"message","text":"Resolved incident on Spike.sh\nIncident fa-3618\n:raised_hands::\u00a0<mailto:abcdef@sketchy-domain.com|abcdef@sketchy-domain.com>\u00a0- tyyfrer hjkhfd and id 6197609f2a42580dbce7eef1\nLinks found in incident:\nNone\nIntegration:\nSpam detection on Spike.sh\nService:\nSpam monitoring\nEscalation policy:\nSignups and barred calls on Slack","user":"U021TC4PMC0","ts":"1640100043.091700","team":"T0213HYD5MY","blocks":[{"type":"rich_text","block_id":"JEjb1","elements":[{"type":"rich_text_section","elements":[{"type":"text","text":"Resolved incident on Spike.sh\nIncident fa-3618\n"},{"type":"emoji","name":"raised_hands"},{"type":"text","text":":\u00a0"},{"type":"link","url":"mailto:abcdef@sketchy-domain.com","text":"abcdef@sketchy-domain.com","unsafe":true},{"type":"text","text":"\u00a0- tyyfrer hjkhfd and id 6197609f2a42580dbce7eef1\nLinks found in incident:\nNone\nIntegration:\nSpam detection on Spike.sh\nService:\nSpam monitoring\nEscalation policy:\nSignups and barred calls on Slack"}]}]}],"channel":"C02BG9KEG4V","event_ts":"1640100043.091700","channel_type":"channel"},"type":"event_callback","event_id":"Ev02R49WDX6K","event_time":1640100043,"authorizations":[{"enterprise_id":null,"team_id":"T0213HYD5MY","user_id":"U02R8AXN4MU","is_bot":true,"is_enterprise_install":false}],"is_ext_shared_channel":false,"event_context":"4-eyJldCI6Im1lc3NhZ2UiLCJ0aWQiOiJUMDIxM0hZRDVNWSIsImFpZCI6IkEwMlJDMzVNS0hCIiwiY2lkIjoiQzAyQkc5S0VHNFYifQ"}

describe('Message', () => {
  it('type triggerMessage', async () => {
    const msg = new Message(triggerMessage)
    expect(msg.isMessage()).toBe(true)
    expect(msg.isAppMention()).toBe(false)

    expect(msg.isSelfMessage()).toBe(false)

    expect(msg.matchesMessage()).toBe(true)
  })

  it('type selfMessage', async () => {
    const msg = new Message(selfMessage)
    expect(msg.isMessage()).toBe(true)
    expect(msg.isAppMention()).toBe(false)

    expect(msg.isSelfMessage()).toBe(true)
    expect(msg.matchesMessage()).toBe(false)
  })

  it('type not-self app_mention', async () => {
    const msg = new Message(appMention)
    expect(msg.isMessage()).toBe(false)
    expect(msg.isAppMention()).toBe(true)

    expect(msg.text).toBe('<@U02R8AXN4MU> test')

    expect(msg.isSelfMessage()).toBe(false)
    expect(msg.matchesMessage()).toBe(false)
  })

  it('type unknown', async () => {
    const msg = new Message({event: {type: "not a type"}})
    expect(msg.isMessage()).toBe(false)
    expect(msg.isAppMention()).toBe(false)

    expect(msg.isSelfMessage()).toBe(false)
    expect(msg.matchesMessage()).toBe(false)
  })

 })
