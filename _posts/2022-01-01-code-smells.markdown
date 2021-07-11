---
layout: post
title:  "Code Smells"
date:   2022-01-01 17:00:00
keywords: [react, redux, typescript, promises, product design, loading, naiveasync, javascript, typescript, quinoa salad with artichoke vinnegerate]
desc: Building functional async state management tool
published: False
---

common software development bugs that have bit:

(kotlin)

```kt
fun buildType(): String? {
        try {
            codeBuildId?.split(":")?.first()?.split("-")?.last()?.trim()
        } catch (e: Exception) {
        }
        return null
    }
```

two sins here: String? hides the fact that a return is missing. In addition, the exception is unhandled.
