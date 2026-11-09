#!/bin/sh
set -e

if [ ! -f "./.env" ]; then
	echo ".env file missing"
	exit 1
fi

echo "Removing previous files"
mkdir -p ~/.config/containers/systemd/
rm -f ~/.config/containers/systemd/akyuu*

echo "Copying new files"
cp ./systemd/* ~/.config/containers/systemd/
echo "SetWorkingDirectory=$(pwd)" >> ~/.config/containers/systemd/akyuu-bot.build

cp ./.env ~/.config/containers/systemd/akyuu.env
chmod 600 ~/.config/containers/systemd/akyuu.env

echo "Generating quadlet files"
/usr/lib/systemd/system-generators/podman-system-generator --user --dryrun > /dev/null

systemctl --user daemon-reload

echo ""
echo "Run: run0 loginctl enable-linger $USER"
echo "Run: systemctl --user start akyuu-bot-build"
echo "Run: systemctl --user start akyuu-bot"
