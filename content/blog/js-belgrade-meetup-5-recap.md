---
title: Meetup #5 Angular.js Concepts in Depth - recap
author: stojanovic
date: 2015-04-19T13:54:39.602Z
status: publish
category: meetup
slug: js-belgrade-meetup-5-recap
layout: post.hbs
---

U subotu 18. aprila u ICT Hubu održan je 5. JS Belgrade meetup. Ovo je bio naš najveći meetup do sada, prisustvovalo je preko 70 ljudi, što je, kao što je Bogdan rekao, verovatno više nego na prethodna 4 meetupa zajedno.

Tema ovog meetupa je bio Angular.js, [Aleksandar Simović](https://twitter.com/simalexan) je pričao detaljno o Angular.js konceptima, a [Bogdan Gavrilović](https://twitter.com/ispijac_kafe) se uključivao sa pričom o najboljim praksama. I pored većeg broja ljudi meetup je ostao prilično interaktivan, bilo je puno pitanja i komentara u toku same prezentacije.

Prezentacija je kao i obično dostupna na [SlideShareu](http://www.slideshare.net/jsbelgrade/angularjs-concepts-in-depth):
<iframe src="//www.slideshare.net/slideshow/embed_code/key/tEYz5pvBPa1Unf" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:35px; max-width: 100%;" allowfullscreen> </iframe>

Par fotografija sa meetupa možete videti [ovde](https://www.dropbox.com/sc/nfe4aobolkm87im/AADmkdsJ8_F14y6RY5oDVvsDa#/) zahvaljujući [Ivanu Ćurkoviću](https://twitter.com/ivan_curkovic) i Tamari Gavrić.

S obzirom da je Angular.js prilično velika tema, neke od tema i pitanja su ostali nepokriveni.
Jedno od pitanja bez konkretnog odgovora je bilo vezano za one time binding i kompleksne izraze, Aleksandar je pripremio [plunker](http://plnkr.co/edit/r02niW1Ui1dRKFjMsYMS?p=info) koji pokazuje da to radi kao što je očekivano.

> Sustina “::” za one time binding je da Angular kada te simbole vidi u samom ng-bindu ili expressionu da oznaci (flagguje) tu promenljivu kao one-time bind promenljivu i onda on ukloni te “::” duple dvotacke pre compile-a
tako da kompleksni izrazi, kao sto je i dato u primeru rade.

Do narednog meetupa, možete koristiti [Slack](https://jsbelgrade.slack.com) za sva dodatna pitanja i diskusije. Ko želi invitation za Slack može da ga dobije ovde: [https://jsbelgrade-slack.herokuapp.com/](https://jsbelgrade-slack.herokuapp.com/).

<script async defer src="https://jsbelgrade-slack.herokuapp.com/slackin.js"></script>
<br/>


Na kraju, hvala [ICT Hubu](http://icthub.rs) što nas je ugostio, hvala [Elance/oDesk](http://elance-odesk.com) i [Cloud Horizonu](http://cloudhorizon.com) za podršku i pomoć prilikom organizacije meetupa i hvala [UX Passion](http://www.uxpassion.com/) za [Wall of Tweets](http://walloftweets.net/). Takođe hvala [PHP Srbija](http://phpsrbija.rs) i svima ostalima koji su nas podržali.
I na kraju hvala svima koji su prisustvovali meetupu. Nadam se da vam je bilo zanimljivo.

Vidimo se na nekom od narednih meetupa.

---------

Par korisnih linkova koji su pomenuti na meetupu:

- [Broccoli](http://broccolijs.com/) - The asset pipeline for ambitious applications.
- [Restangular](https://github.com/mgonto/restangular) - AngularJS service to handle Rest API Restful Resources properly and easily
- [Angular 2 Github repository](https://github.com/angular/angular)
- [httpexample](https://gist.github.com/aysbg/ff8a1792047d4a4a0ccd) - primer koji je Bogdan pominjao
