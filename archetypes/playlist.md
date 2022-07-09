---
title: "Playlist: {{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: Here's a playlist for you...
tags: [music, playlist, curated]
imageUrl: 'https://images-here-hugo.vercel.app/api/og-image?title='
---

{{<spotify playlist id>}}
