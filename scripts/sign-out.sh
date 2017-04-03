#ID=20 TOKEN=BAhJIiVlMmIyYWI1YTRkNmYzNDU2NDY1YzE3ZTY2ODM0MmZjYQY6BkVG--16ab6be460d9c087d497bd90b08fca3fe5d61b6c scripts/sign-out.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-out/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"
