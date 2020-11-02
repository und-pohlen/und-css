if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi

yarn install
yarn build

cd dist
scp -Cpr * $SSH_USERNAME@$SSH_SERVER:$SSH_PATH
