# Cyclic Slack Bot Starter

This repo is a starter slack bot that will let you receive mentions and send messages.

[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

## Setup

Click the deploy button above. This will fork and deploy the repo.

Visit the app url. The page will give you a link with Slack Manifest to create your slack bot.

Instructions are here: https://api.slack.com/reference/manifests#creating_app

Copy your app credentials into environment variables inside of your Cyclic account.

https://api.slack.com/apps/TEAM_ID/general => `App Credentials` => `Signing Secret`

https://api.slack.com/apps/TEAM_ID/install-on-team => `Bot User OAuth Token`


## Test

Try posting direct to your app from the command line.

```sh
API_KEY=some_value_from_slack
APP_DOMAIN='a-great-animal-name.cyclic.app'

curl -X POST "https://${APP_DOMAIN}/random" \
-H "Content-Type: application/json"
-H "Authorization: ${API_KEY}"
-d '{"text":"dddd"}'        
```
