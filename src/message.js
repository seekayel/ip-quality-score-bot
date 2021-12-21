


class Message {
  constructor(msg) {
    this.msg = msg;
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

  // matchesMessage(){
  //   return messageSelector.exec(msg_txt)
  // }
}

module.exports = {Message}
