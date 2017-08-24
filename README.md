# Magna Carta

This is a rails app used to chart events.

* Ruby version: 2.3.1

* Database: Postgres

* Deployed using: Heroku

* Found at http://magnacarta.herokuapp.com

# Configuring Windows for Local Development


## Setting up Ubuntu on Windows
Using "Ubuntu on Windows 10" you can set your Windows machine up to develop locally.

* Press Windows key and search for "Use Developer Features"

* Select "Developer Mode"

* Press Windows key and search for "Turn windows features on and off" 

* Check "Windows Subsystem for Linux"

* Press Windows key and search for "bash"

* A command prompt should pop up. Type in Y to confirm installation. 

* Select a username and password for Ubuntu (can't be "admin")

* On restart, you should be able to search for "Bash on Ubuntu on Windows" which will open up a Bash command line. 

* Note: **do not edit files like .bashrc using Windows text editors. Changes you make to your Linux file system should be made directly from the bash command line and not from a Windows program or the file explorer. If you do that, you're gonna have a bad time.**

## Setting up Ruby

* From your bash command line (search windows for "Bash on Ubuntu on Windows"), run the following commands:

`sudo apt-get update` (APT = Ubuntu's Advanced Packaging Tool)

`sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev nodejs` (install some Ruby dependencies)

Now we'll install Ruby, using rbenv (https://github.com/rbenv/rbenv), which helps you manage multiple versions of Ruby on the same machine.

`cd`

`git clone https://github.com/rbenv/rbenv.git ~/.rbenv` (install rbenv)

`echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc` (change your path so you can access rbenv from your bash command line)

`echo 'eval "$(rbenv init -)"' >> ~/.bashrc`

`exec $SHELL`

`git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build` (install ruby-build)

`echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc` (change your path so you can access ruby-build from your bash command line)

`exec $SHELL`

`rbenv install 2.3.1` (use rbenv to install Ruby 2.3...this one takes a while)

`rbenv global 2.3.1` (use rbenv to set our global ruby version to 2.3.1)

When you run `ruby -v` to check what version of Ruby is running, you should now see Ruby 2.3.1

`gem install bundler` (gem is Ruby's package manager, bundler is a useful gem AKA ruby package) that helps you manage which gems you're using)
