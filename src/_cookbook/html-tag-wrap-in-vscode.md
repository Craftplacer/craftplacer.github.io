---
title: "Wrap text with a HTML tag inside Visual Studio Code using Emmet"
category: vscode
tags: [ "vscode", "emmet", "html" ]
source-title: "How to do tag wrapping in VS code?"
source-url: "https://stackoverflow.com/a/46854557/7972419"
---

There's a command called "**Emmet: Wrap with Abbreviation**", which allows typing in an Emmet abbreviation to add HTML tags around text.

This can be turned into a keyboard shortcut:

```json
{
    "key": "ctrl+shift+9",
    "command": "editor.emmet.action.wrapWithAbbreviation",
    "when": "editorHasSelection",
    "args": {
        "abbreviation": "span",
    },
},
```

*This section can be pasted into Visual Studio Code's keyboard shortcuts config, you can open it by executing **Preferences: Open Keyboard Shortcuts (JSON)***