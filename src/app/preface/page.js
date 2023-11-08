import React from 'react';
import styles from './Preface.module.css'
import Image from 'next/image';

function Preface() {
  return (
    <main className={styles.container}>
        <Image 
        className={styles.shape}
        src="/images/circle.png"
        width={200}
        height={200}
        alt="circle"
        />
        <h2 className={styles.introduction}>Introduction</h2>
        <div className={styles.line}></div>
        <p className={styles.chapter}>Chapter 1</p>
        <div className={styles.box}>
        <h3 className={styles.preface}>Preface</h3>
      <p className={styles.content}>

      I’m writing this preface some number of years after having completed the bulk of this book. Already it feels like a lifetime ago that I first set — would you believe — literal pen to paper. Distant though the experience of writing the book now seems, I distinctly recall the excitement — the veritable thrill — of it, as the first notions began to reveal themselves. Health, the very concept, was deeply misunderstood, I’d become convinced.Where conventional notions of health hinged on the absence of sickness — a fundamentally negative definition — it’s much more coherent, I figured, to think of health in terms of a spectrum. As it happens, this became the essential premise: Health isn’t a binary phenomenon, as in either you’re healthy or you’re not. Instead, it makes much more sense to consider it a continuum; a continuum, as I would later conclude, that was theoretically infinite in its reach (but we’ll get to that). Now, if you’re someone who already embodies this positive conception of health — that is, you’re someone who strives to be healthier, rather than just healthy — this frame of things will be familiar and thus likely to appear more trite than philosophically profound. Indeed, as a matter of practice, the health-as-a-spectrum conception of things is, in itself, hardly revelatory. We already talk in terms of better and worse health. So there’s nothing especially novel on its face. Where it gets interesting, however, is when we allow ourselves to forget the parochial and the practical and begin to explore the deeper, philosophical implications of this position instead. <br></br> <br></br>

For instance, if we’re agreed that one can be more or less healthy, then what is it, exactly, that constitutes health and what does it mean, precisely, to become “more healthy”? That is to say, what is health made of? These questions immediately rear their heads as soon as one rejects the health-as-absence-of-sickness conception. For if we can no longer define health purely in terms of what it’s not (i.e. sickness), then we’re forced to define it in terms of some positive criteria (i.e. what it is) instead. This is where the fun begins. 
<br></br> <br></br>

Tasked with positively defining health as such, a rather interesting philosophical exploration ensued, one that appeared to cast light on a number of pertinent — and increasingly practical — societal questions. For instance, as our capacity to intervene in the human condition develops, with gene-editing technologies such as CRISPR, when — if ever — are we justified in doing so? Are we only ever supposed to use these technologies as a means of treatment, or are we right to use them as a means of positive enhancement also? If the latter, what exactly constitutes ‘enhancement’? Is additional intelligence an enhancement? What about the extension of life itself? Without some notion of what’s Good, we’re left with no foundation upon which to answer such questions. And while such moral questions have historically been the domain of religion and ancient wisdom traditions, on these most modern matters, such traditions are distinctly lacking. What we need, it became apparent, is some conception of the human condition — and its various configuration states — that provided a framework for thinking through, and ultimately answering, such questions. What we need, in other words, is a suitable conception of health. 
<br></br> <br></br>

In the process of reckoning with the concept, it became apparent that health was a concept that had far-reaching — and, to my mind, grossly under-appreciated — philosophical import. In fact, so deep does the concept run, I concluded, that when properly construed, it extends to include all that we ought to care about as sentient moral agents. Everything we value — should we have things straight — we value because of its positive relationship to health. That was — and remains — my conviction. Health, more than any other concept, provides the firmest foundation upon which to sure up anything like a universal morality. This is of course an extraordinary claim, and since extraordinary claims demand extraordinary evidence, I decided to devote a book to that end. This here is the result. 
<br></br> <br></br>

Now whether or not I convince the reader of the moral primacy of health, I hope to have at least contributed something to the conversation. For it is, ultimately, the conversation that matters most – that is, the conversation about what ultimately matters most. And while such a conversation is fundamentally timeless — transcendent — its elevation in the broader cultural conversation would nevertheless seem timely. While fear-mongering and doom-posting is surely a symptom of our collective pathology, and thus not something one wishes to perpetuate, its existence is not without fair cause. No matter where one looks, our culture really does appear to hang in the balance. Our people are sick. Our planet is burning. Wealth is a wrought. And everywhere there’s fighting; we’re at war with each other, we’re at war with ourselves. At the same time, as if that weren’t enough, we find ourselves giving birth to a fundamentally new species of intelligence and concern ourselves with hand-waving notions of its “alignment”. Can you spot the irony? If we can’t contain ourselves, what chance are we really of containing an infinitely more potent brand of intelligence than our own? Although the future is inherently uncertain, the odds — however you conjure them — are certainly cause for concern.
<br></br> <br></br>

While the local causes are many and varied, the ultimate axis underpinning the problems of the present is, I argue, a crisis of values; a collective failure to value, and actively embody, that which we ought to. To the degree that values are the domain of philosophy, our shared predicament is thus a fundamentally philosophical problem. Indeed, as I will argue, philosophy lies always at the foundation of civilisation’s operating system, concerned, as it is, with the shape of its conceptual structure (its values, beliefs, ideas). And so, on this view, if we are to solve the problems of our time, it will necessarily demand the critical examination and reconstruction of the core beliefs that currently shape our worldview. That is the function — indeed the utility — of philosophy. But of course the human saga is about so much more than solving mere problems. Any enlightened account of our Being must  also provide for a positive vision of what we’re doing here — an inspiring notion of what we might create, what we might achieve, what we might Become. It is in this spirit that this work was written. While it is explicitly an attempt to diagnose the root cause of our cultural maladies, it is equally an attempt to convey a sense of hope and optimism, a positive ideal towards which we might aim our individual and collective striving. Something to live for. 
<br></br> <br></br>

I hope this finds you in good health and tends you towards better.
<br></br> <br></br>

Musashi
<br></br> <br></br>

      </p>
      </div>
    </main>
  );
}

export default Preface;
