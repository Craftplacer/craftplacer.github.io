---
layout: cookbook
category: cmder
title: "Automatically change drive with the 'cd' command in Cmder"
tags: [ "windows", "cmder", "cd", "drive" ]
source-title: "cmd - Command prompt won't change directory to another drive - Stack Overflow"
source-url: "https://stackoverflow.com/a/54478765/7972419"
---

# Add the following code to your aliases file

<div class="code-file">
<span class="filename">[Cmder directory]/config/user_aliases.cmd</span>
{% highlight cmd %}
cd=cd /d $*
{% endhighlight %}
</div>
