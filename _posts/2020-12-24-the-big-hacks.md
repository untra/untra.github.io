---
layout: post
title:  "The Big Hacks"
date:   2020-12-24 17:00:00
keywords: [Hacks, Vulnerabilities, Significant]
desc: My own record of significant publicized hacks, hacking attempts, cves and malware that significantly shaped future computer science.
---

This is my own record and somewhat informed perspective of significant software hacks within the software development history during my lifetime, and how they shaped the industry.

## Heartbleed
https://heartbleed.com/
(CVE-2014-0160)

### What was Heartbleed?

Problem: Improper pointer arithmetic resulting in out-of-bounds memory reads

Severity: Memory exposure and private key recovery

Worst case scenario: An attacker can perform out-of-bounds reads of values from a process’s memory. Sophisticated attacks allowed for the recovery of SSL/TLS private keys or other sensitive data in-memory.

**The takeaway**: too easy to make naive rookie mistakes in c open-source software that is fundamental to all cryptography

**Meme**: 
[relevant xkcd](https://xkcd.com/1354/)

## Specter
https://spectreattack.com/
(CVE-2017-5753 and CVE-2017-5715)

### What was Specter?

Problem: Abuse of i86 speculative code execution allowed for leaky application boundaries

Severity: Memory exposure and private key recovery

Worst case scenario: An attacker with knowledge of processor hardware and vulnerable code could design efficient malware.

**The takeaway**: this bug is endemic to current intel hardware going back 15 years. Software patches could disable speculative execution at the cost of significant performance decreases. This bug is a big distraction to Intel, and must be navigated around for future chip designs.

**Meme**: 
[relevant knowYourMeme](https://knowyourmeme.com/memes/cultures/meltdown-and-spectre)

## Log4Shell
https://en.wikipedia.org/wiki/Log4Shell
(CVE-2021-44228)

### What was Log4Shell?

Problem: A fundamental failure to check responses from api calls, and the confusing overlap of java package names and valid ldap addresses

Severity: arbitrary and trivial Remote Code Execution

Worst case scenario: arbitrary RCE means we could've all been pwnd since '13 and never know it.

**The takeaway**: nothing is safe. All of modern software is built on a house of cards. Logging software with fundamentally no reason to communicate outbound has a magic string that performs network calls and remote code execution. This is so fundamentally wrong and obvious, yet endemic to enterprise software. Governments response was to punish researchers and discourage future dissemination of white hat responsible disclosure. A fundamental questioning of where our software comes from and what it's made out of is starting to occur.

**Meme**: 
[relevant Memes](https://log4jmemes.com/)
