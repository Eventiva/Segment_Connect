...
message=$(
  cd "$OWNER/foo"
  git pull
  git subrepo push bar
)
...
message=$(
  cd "$OWNER/foo"
  git pull
  git subrepo push bar
)
...
message=$(
  cd "$OWNER/foo"
  git pull
  git subrepo push bar
)
...
message=$(
  cd "$OWNER/foo"
  git pull
  git subrepo push bar 2>&1 || true
)
...
