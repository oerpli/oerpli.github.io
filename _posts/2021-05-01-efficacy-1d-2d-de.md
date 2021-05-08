---
layout: post
title:  "Immunität nach Verabreichung der ersten Dosis Pfizer/Biontech BNT162b2"
date:   2021-05-01
excerpt: "Wie effektiv is die erste Impfdosis im Vergleich zur zweiten?"
tag:
- COVID-19
- FirstDosesFirst
- Vaccinations
---

Back to the [COVID-19 First Doses First Project Overview]({% post_url 2021-04-01-first-doses-first %}).

- [Einleitung](#einleitung)
  - [Die Inkubationszeit](#die-inkubationszeit)
  - [Wie Impfungen funktionieren](#wie-impfungen-funktionieren)
- [Wie wird die Wirksamkeit errechnet?](#wie-wird-die-wirksamkeit-errechnet)
- [Was bedeutet das?](#was-bedeutet-das)
- [Was macht man mit diesen Informationen?](#was-macht-man-mit-diesen-informationen)
- [Anhang](#anhang)
- [Andere Impfstoffe (Moderna, AZ, Sputnik,...)](#andere-impfstoffe-moderna-az-sputnik)
  - [Welche anderen Aspekte sollten beachtet werden?](#welche-anderen-aspekte-sollten-beachtet-werden)
- [Quellen](#quellen)

# Einleitung

Viele sind in der Annahme, dass der Impfstoff von Pfizer gegen COVID-19 erst dann gegen die Krankheit wirksam wird, wenn die zweite Impfdosis verabreicht wurde.
Dies stimmt jedoch nicht, wie Daten aus der dritten Phase der Zulassungsstudie zeigen.
In diesem Beitrag werde ich versuchen, einige dieser Missverständnisse auf einfach verständliche Weise zu klären.

Das folgende Bild zeigt den relevanten Verlauf aus der Publikation[^1]. Die zwei Kurven (blau und rot) zeigen die COVID-19 Inzidenz in Probanden, denen ein Plazebo (blau) und Impfstoff (rot) verabreicht wurde.

![](https://raw.githubusercontent.com/oerpli/oerpli.github.io/master/img/days_after_d1.png)

Würde die Impfung nicht funktionieren, wäre der Verlauf beider Kurven ähnlich steil.
Ist die Impfung effektiv, so ist die Kurve der Impfgruppe flacher als die der Plazebogruppe.
Die Effektivität errechnet sich aus dem Verhältnis der Steigung beider Kurven.

Das bedeutet: Wenn die Inzidenz in der Plazebogruppe 10 Einheiten pro Tag und bei der Impfgruppe 2 Einheiten pro Tag einsteigt, ergibt sich daraus eine Wirksamkeit von 80% (Eine Gruppe, die ohne Impfung 10 Infektionen gehabt hätte, hat nur 2 Infektionen, also eine Reduktion um 80%).


Die Tabelle unter dem Graph zeigt die Effektivität verschiedener Zeitintervalle:
The table below the plot shows the efficacy of various time-intervals:

- Nach der ersten Dosis (Tag 0 bis Ende): 82%
- Nach der ersten Dosis, vor der zweiten Dosis (Tag 0 bis 21): 52.4%
- Zweite Dosis bis sieben Tage danach (Tag 21 bis 28): 90.5%
- Mehr als sieben Tage nach der zweiten Dosis (day 28 to the end): 94.8%

Man würde denken, die zweite und dritte (bzw vierte) dieser Zahlen würden mit der Effektivität der ersten und zweiten Impfdosis korrespondieren. Jedoch stimmt das nicht, da sowohl die Inkubationsperiode, als auch die Art, wie Impfungen funktionieren, außer Acht gelassen werden.

## Die Inkubationszeit
Ist eine Person an Tag x dem Virus ausgesetzt, vergehen ein paar Tage (4-5, bis zu 7 Tagen), bis sie Symptome aufzeigt.
Nicht einmal mit einem PCR-Test könnte das Virus so kurz nach der Infektion nachgewiesen werden.
Ein Antigentest zeigt eine Infektion einige Tage nach der Infektion. 

Dies ist Grund genug zur Annahme, dass Personen, die in den ersten Tagen nach der ersten Impfdosis positiv auf das Virus getestet werden, bereits vor der Verabreichung der Impfung infiziert waren.

## Wie Impfungen funktionieren
Eine Impfung regt das Immunsystem des Körpers an, Schutz gegen ein Virus aufzubauen.
Da dieser Prozess etwas dauert, wenn sich eine Person beispielsweise mit dem Grippevirus infiziert (etwa eine Woche, soviel ich weiß), ist anzunehmen, dass das auch etwa so lange dauert, wenn das Immunsystem einem Impfstoff und keinem echten Virus ausgesetzt ist.
Ich weiß nicht, wie lange das Immunsystem braucht, um genau auf diese Impfung zu reagieren. Aber das Raten erübrigt sich, da man es eh in den Testdaten sieht.

Schaut man sich die rote und blaue Kurve direkt nach der Verabreichung an, bemerkt man, dass sie bis Tag 10-12 nach Dosis 1 einem ähnlichen Verlauf folgen (Schon im frühen Stadium ist die rote Kurve etwas unter der blauen, was jedoch Zufall ist).

Nach Tag 2 unterscheidet sich die Steigung der Kurven jedoch deutlich und ab Tag ~16 bis zum Ende der Studie nach 105 Tagen bleibt sie ähnlich.

# Wie wird die Wirksamkeit errechnet?
Die gleichen Punkte treffen auch bei der zweiten Impfdosis zu.
Leute, die die zweite Dosis an Tag 21 erhalten und an Tag 23 positiv getestet werden, haben sich wahrscheinlich schon davor infiziert.
Personen, die an Tag 26 positiv getestet werden, könnten sich schon nach Erhalt der zweiten Teilimpfung infiziert haben. Allerdings ist nicht unwahrscheinlich, dass deren Immunsystem noch nicht komplett auf die erneute Stimulation reagieren konnte, was bedeuten würde, dass der Schutz gegen einen schweren Infektionsverlauf noch von der ersten Dosis stammen würde.


Deshalb ist es vermutlich besser, für die Bestimmung der Effektivität der ersten Teilimpfung die Kurven zwischen Tag 14-28 anzuschauen. Somit würde die Kurve die Effektivität beider Impfdosen erst danach, also ab Tag 28, zeigen.

Ich habe das professionelle Tool zur Analyse medizinischer Daten, MS Paint™, verwendet, um die ersten 10 Tage zu entfernen und Graphen hinzuzufügen, die die geschätzte Wirksamkeit der ersten (grün) und zweiten (lila) Teilimpfung anzeigen sollen.

Das Ergebnis ist hier zu sehen:

![](https://github.com/oerpli/oerpli.github.io/raw/master/img/dad1_edit2.png)


# Was bedeutet das?

- Die grüne Kurve ist schon deutlich weniger steil als die blaue, also ist schon die erste Impfdosis vermutlich schon ausreichend, um symptomatische Verläufe zu verhindern (nach meinem Wissen gab es in der Testphase nach dieser ersten Phase, in der die Impfung noch keine Wirkung zeigt, keinen schweren Infektionsverlauf bei Personen, denen die erste Teilimpfung bereits verabreicht wurde).
- Die lila kurve ist etwas weniger steil als die grüne, aber im Vergleich zur blauen ist der Anstieg sehr gering. Daten des NHS zeigen, dass der Anstieg der Immunität nach der zweiten Dosis im Vergleich zur ersten etwa 1/15 beträgt. (89% vs 95%)[^2] 

# Was macht man mit diesen Informationen?

Politiker und andere Entscheidungsträger, die 50% der Impfdosen an Menschen, die bereits eine Immunität von >80% aufweisen, verschwenden, unter Druck setzen, damit diese Dosen an Leute, die noch keine Immunität aufweisen, verimpft werden können. 
Keit A Moyse aus Oxford[^3] hat unter Berücksichtigung dieser Faktoren eine optimale Impfstrategie errechnet. Diese ist im Grunde:
- Personen im Alter von N bis N+5 Jahren eine Impfdosis geben (anfangs ältere Menschen)
- Personen, die 15 Jahre jünger sind, die erste Dosis verabreichen
- Anschließend die zweite Dosis für die älteren Menschen

Falls jemand grobe Fehler bemerkt hat und mich darauf aufmerksam machen, oder mir etwas anderes sagen wollen, bin ich auf [Twitter](https://twitter.com/oerpli) erreichbar. Ansonsten befinden sich auf der Hauptseite dieses [Blogs](https://oerpli.github.io/) sämtliche Kontaktinformationen.

# Anhang
# Andere Impfstoffe (Moderna, AZ, Sputnik,...)
Das Gleiche gilt, mit leichten Abweichungen in den Zahlen, auch für die Impfstoffe der Hersteller Moderna und AstraZeneca. Da die Darstellung der Ergebnisse jedoch in der Veröffentlichung von Biontech am besten war, habe ich diesen Impfstoff in diesem Post behandelt. 

Wer trotzdem daran interessiert ist, kann sich hier die Darstellung von Moderna anschauen [^4] (Abb. 3b im Paper).

![](https://github.com/oerpli/oerpli.github.io/raw/master/img/moderna.png)
## Welche anderen Aspekte sollten beachtet werden?

Häufige Argumente gegen Impfstoffe mit nur einer Impfdosis sind der Langzeitschutz und Immunevasion.
Auf diese Argumente gehe ich in einem [separaten Blogpost] ({% post_url 2021-04-03-fdf-counter-arguments %}) ein.






# Quellen

[^1]: [Safety and Efficacy of the BNT162b2 mRNA Covid-19 Vaccine](https://www.nejm.org/doi/full/10.1056/NEJMoa2034577)

[^2]: [comparison between 1 and 2 dose prioritisation for a fixed number of doses](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/955846/annex-b-comparison-between-1-and-2-dose-prioritisation-for-a-fixed-number-of-doses.pdf)

[^3]: [In order to save as many lives as possible, rollout of the coronavirus vaccine should prioritise age groups so that the importance of giving younger ages their first vaccination is balanced against the importance of giving older ages their second](https://www.bmj.com/content/372/bmj.n710/rr)


[^4]: [Vaccine Efficacy of mRNA-1273 to Prevent Covid-19](https://www.nejm.org/doi/full/10.1056/NEJMoa2035389)
