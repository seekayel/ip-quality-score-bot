

const regExStr = process.env.MESSAGE_REGEX_STRING || 'ip quality score'
const messageSelector = new RegExp(regExStr)

class Message {
  constructor(msg) {
    this.msg = msg;
    this.text = this.msg.event.text
  }


  isAppMention(){
    return (this.msg.event.type === "app_mention")
  }
  isMessage() {
    return (this.msg.event.type === "message")
  }
  isSelfMessage(){
    return (this.msg.event?.bot_profile?.app_id === process.env.SLACK_APP_ID)
  }

  matchesMessage(){
    return messageSelector.exec(this.msg.event.text)
  }
}

module.exports = {Message}
