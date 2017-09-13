# Magna Carta

This is a rails app used to chart events.

* Ruby version: 2.3.1

* Database: Postgres

* Deployed using: Heroku

* Found at https://magnacarta.herokuapp.com

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

`rbenv rehash`

## Configuring Git / GitHub

Assuming you have created a GitHub account that has writing access to this repository, you need to set up your bash command line to use that account. You set your git config and then generate an SSH key.

`git config --global color.ui true`

`git config --global user.name "YOUR NAME"`

`git config --global user.email "YOUR@EMAIL.com"`

`ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.com"`

`cat ~/.ssh/id_rsa.pub` (add the newly-generated SSH key to your GitHub account). Copy that to your Github account: https://github.com/settings/keys

Now if you run `ssh -T git@github.com` you should get something like `Hi username! You've successfully authenticated, but GitHub does not provide shell access.`

## Installing Rails

`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -` (install nodeJS)

`sudo apt-get install -y nodejs`

`gem install rails -v 5.1.3` (install rails)

`rbenv rehash`

`rails -v` should return `Rails 5.1.3`

## Setting Up Postgres

Follow instructions here to install Postgres on Windows: https://www.postgresql.org/download/windows/

You should have a user `postgres` with password `postgres` set up on your pg database. Ensure that it is communicating correctly by typing `psql -p 5432 -h localhost -U postgres` into your bash terminal. The postgres command line should appear. Type `\q` to exit postgres command line and return to bash.

## Finishing touches

Navigate to the directory where you want your local repo to live e.g. `cd /mnt/c/Users/mhartman/Desktop` (you can read up more on how the linux/windows file system works here: https://blogs.msdn.microsoft.com/commandline/2016/11/17/do-not-change-linux-files-using-windows-apps-and-tools/).

`git clone https://github.com/mhartman4/magnacarta magnacarta` (clone this repo into a directory called magnacarta).

Optional: Make your magnacarta folder the bash terminal's default directory when you start bash e.g.: `echo 'cd /mnt/c/Users/mhartman/Desktop/magnacarta' >> ~/.bashrc`

`bundle install` to install all relevant gems in our Gemfile.

`rake db:create` to create your magnacarta_development database locally

`rake db:migrate` to get your database up to date

To start the server: `rails s` then go to localhost:1215 to see the app running.
