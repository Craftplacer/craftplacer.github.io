---
layout: article
category: cookbook
title: "Automatically change drive with the 'cd' command in Cmder"
date: 2020-09-05 22:30:00 +0200
tags: [ "windows", "cmder", "cd", "drive" ]
stackoverflow: "https://stackoverflow.com/a/54478765/7972419"
---

In the file `[Cmder directory]/config/user_aliases.cmd`, add the following line:
```cmd
cd=cd /d $*
```
