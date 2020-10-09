---
date: "2020-09-19"
title: "Bashrc vs Bashprofile"
---

# Linux Startup Settings (.bashrc and .bash_profile)

What are the differences between .bashrc and .bash_profile? Why are they required? Where should they be present? What to do in case they are absent in user's home directory? Where are environment variables and path declared in linux? If you are haunted by any of these questions and want to get a solid grasp in no time, you are at the perfect place. 

Although you will fully understand this just by reading along, still it is highly recommended to execute the below commands in your own terminal running bash. The commands and concepts presented here are not specific to any particular linux diastro, but are valid in general.

> The whole essence of working with Linux is to explore yourself without blindly trusting anyone, not even me! Before executing any command presented in this article, feel free to explore their `man` pages to know their usages and impacts. 

## High Level Understanding

**NOTE:** Don't get intimidated if you come across any new/unknown terms in this section. We will go through everything step-by-step while coding in the next section. 

Every contents in the file:
* `.bashrc` are executed when a non-login shell is opened for a user already having an active login session
* `.bash_profile` are executed when a login shell is opened or a new login session is created for a user

There are few things to understand. First, both of these files are specific to a user and are present in the user's home directory. For system wide settings, there are separate files which are beyond the scope of the current discussion and may be platform (diastro) dependent. Next, a non-login shell is obtained whenever you open a new terminal, perform local or remote login to an existing GUI session or switch the current user using `su` command without `-`, `-l` or `--login` options. A login shell is obtained whenever you run `su` command with the above options or start a new remote login session using `ssh` command. For more details, please refer to the man pages of `su` and `ssh`. 

If it is too much for you to digest switch-user and remote logging, a simple takeaway can be to remember that .bash_profile is executed only once when you login for the first time and .bashrc is executed everytime you open a new terminal.

Now, presence of these two files are not absolute necessary. But having them will save us lot's of efforts and help keeping things organized. For example, let's consider you need to have the environment variable JAVA_HOME declared before running a script in terminal. You can always explicitly declare the variable. But having declared that as part of .bashrc will save the effort of declaring it explicitly for new terminals. Moreover, we often need to have multiple environment variables declared for most of the softwares.

Alright! It's now time to get your hands dirty and let the fun begin! Close all other processes running (or wait for them to finish). Open your terminal and switch to the root user. If you need help in switching to root user, check my article `Linux: Switch to root user`.

## Get a user to experiment with

Not to get messed up with any of the existing user's settings, let's create a new user. Before that, let's verify if we have the bash shell available.

```shell
cat /etc/shells
```

If any of your output ends with bash (in my case, it is /bin/bash), then you are good to go and use that value as login shell in the next command.

**NOTE:** In this article, we are using username as user1 and it's home directory as /home/user1. You are free to choose your own. But, beware to use your own username and home directory in all the places ahead. If you are a newbie, it is better to copy paste and execute the commands from here.

The following `useradd` command creates a new user with the name _user1_ having home directory at _/home/user1_ and with login shell _/bin/bash_. To verify the user is successfully created, run `getent` command as below.

```shell
useradd -d /home/user1 -s /bin/bash -m user1 
getent passwd user1
```

You should get output similar to 

```shell
user1:x:10007:10007::/home/user1:/bin/bash
```

If you get any permission related errors for `useradd` command, probably you are not logged in as the root user. To know more about creating users in linux and understanding all the values in the above output, check my article `Linux Users and Groups`.

To set password for this user, run 

```shell
passwd user1
```

It should ask for entering a new password. Don't worry if you can't see the password you are typing on the screen. Just type your password for user1 and press 'Enter'.

Now that we have the password set, we can switch to that user. Execute

```shell
su - user1
```

Verify if we are logged in with the desired user and are in it's home directory

```shell
echo $USER
echo $HOME
pwd
```

If the output of `echo $HOME` and `pwd` are same, then you are at the right place.

## Edit .bashrc and .bash_profile

Let's append a print statement and a variable declaration at the end of .bashrc and .bash_profile using a text editor. If you don't have these files already created, you can explicitly create them here and have the last two lines from the below snippets inserted. Below are the contents of .bashrc and .bash_profile from my environment. Don't bother if yours look different. Just make sure the last two lines exist.

```shell
# .bashrc

# User specific aliases and functions

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

echo '.bashrc getting called'
my_bashrc_var='My .bashrc variable'
```

```shell
# .bash_profile

# Get the aliases and functions
if [ -f ~/.bashrc ]; then
	. ~/.bashrc
fi

# User specific environment and startup programs

PATH=$PATH:$HOME/bin:/sbin:/usr/sbin
BASH_ENV=$HOME/.bashrc
export BASH_ENV PATH
unset USERNAME

echo '.bash_profile getting called'
my_bash_profile_var='My .bash_profile variable'
```

If you are more interested to know how to be more productive with .bashrc, check out my article `Linux: My .bashrc Content`. For now, let's move on.

To test if you have done your edits properly, let's call both the files explicitly

```shell
source .bashrc
source .bash_profile
```

If you don't get any errors and have the echo statements printed, Congrats! You are all setup for the experiment to begin.

## See everything in action

If you have a GUI setup, follow these steps:

1. Logout of the current user. 

2. Login with user1

3. Open a terminal

You should see the echo statement that was put in the file `.bashrc`. To verify the persistence of variable declaration, run `echo $my_bashrc_var`. Amazing! Now you have seen it yourself that `.bashrc` is getting called whenever you open a new terminal. If you are wondering about seeing the echo statements in `.bash_profile`, I'm sorry! Those were executed in backgroud when you were logging in. It is not impossible to find out the logs, but those are platform(diastro) dependent and beyond the current scope. But hold on, we will definitely look at them using `su -` command.

For the next steps, you can again switch back to your default user (other than user1) - logout and login through GUI or use `su` command.

1. Open a terminal

2. Execute any one of the below three commands (all are equivalent; for more info, see options in `man su`)

```shell
sudo - user1
```
```shell
sudo -l user1
```
```shell
sudo --login user1
```

Did you see the echo statement in `.bash_profile` getting printed? You can execute `echo $my_bash_profile_var` to see if the variable is defined. That's it! 

**NOTE:** In some environments, you might be able to see both the echo statements of `.bashrc` and `.bash_profile`. The reason behind this is that `.bash_profile` is set to internally call `.bashrc`. If you see the contents of the `.bash_profile` posted above, this is exactly what is happening.

If you have made it up to here, you deserve **👏**. Now, exit from the session of user1 and relogin using `su` command, this time without any option

```shell
exit
su user1
```

You should be able to see the echo statement in `.bashrc`. Execute `echo $my_bashrc_var` and `echo $my_bash_profile_var`. I hope it should be clear by now when the two files get executed and what are the significances.

## Clean Up

After all the dirty mess, let's make everything clean as before! To delete the user user1, switch to root user and execute

```shell
userdel -rf user1
```

> Protip: It is always a good practice to call .bashrc in your .bash_profile to ensure all the settings for non-login shells are applied to login shells as well. Otherwise, you can explicitly call `source .bashrc` whenever you enter a login-shell.

> Protip: In general, always use .bashrc to declare your environment variables and aliases.