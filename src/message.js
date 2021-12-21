const regExStr = process.env.MESSAGE_REGEX_STRING || 'ip quality score'
const messageSelector = new RegExp(regExStr)

const emailRegExStr = process.env.MESSAGE_EMAIL_CAPTURE || "mailto:(?<emailAddr>\\S+@\\S+)\\|";
const emailCapture = new RegExp(emailRegExStr)


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
    return messageSelector.exec(this.text) !== null
  }

  extractEmail(){
    const match = emailCapture.exec(msg.text);
    console.log(match?.groups?.emailAddr);
    return match?.groups?.emailAddr || false
  }


}

module.exports = {Message}
