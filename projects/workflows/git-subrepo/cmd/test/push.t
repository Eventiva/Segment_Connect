#!/usr/bin/env bash

set -e

source test/setup

use Test::More

unset GIT_{AUTHOR,COMMITTER}_{EMAIL,NAME}

clone-foo-and-bar

# Make various changes to the repos for testing subrepo push:
(
	cd "$OWNER/foo"
	git subrepo clone "$UPSTREAM/bar"
	add-new-files bar/FooBar
	add-new-files ./FooBar
	modify-files bar/FooBar
	modify-files ./FooBar
	modify-files ./FooBar bar/FooBar
) &>/dev/null || die

(
	cd "$OWNER/bar"
	add-new-files bargy
	git push
) &>/dev/null || die

# Do the subrepo push and test the output:
{
	cd "$OWNER/foo"
	git config user.name 'PushUser'
	git config user.email 'push@push'
	git subrepo pull --quiet bar
	git pull
	git subrepo push bar
}

# Rest of the test cases continue as before...
