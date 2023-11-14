import React from 'react';
import styles from './Sickness.module.css'
import Footer from '../components/Footer/Footer';

function Sickness() {
  return (
    <>
    <main className={styles.container}>
        <div className={styles.box}>
        <h3 className={styles.preface}>Health as the Absence of Sickness</h3>
      <p className={styles.content}>
      The idea of health as the absence of sickness seems perfectly intuitive. Obvious even. We are healthy when we aren’t sick, and vice versa. It couldn’t be more simple. According to this entirely common sense picture of things, there’s two distinct states that a human being may find themselves in — health and sickness — that are both defined in terms of the absence of the other. It’s a binary view of things, in other words — like yes and no, on and off, plus and minus. What could possibly be wrong with this picture? All appears good, that is, until one is forced to define sickness. If health really is the absence of sickness, it follows that one should have an intelligible definition of sickness. And clearly “sickness is non-health”, however true, doesn’t cut it. In order to define sickness in terms of the absence of health, health would need to be defined. And in order to define health in terms of sickness, sickness would need defining. So neither term can be meaningfully defined in terms of the absence of the other, without first defining the other, for that would result in a kind of infinite recursion. In other words, sickness has to be a some-thing, rather than a non-thing. But what exactly?
      <br></br><br></br>

Google defines sickness as “The state of being ill.” Thanks, Google. Fortunately, perhaps recognising the uselessness of this particular definition, Google — being the generous search engine that she is — provide us with a second. Sickness: “The feeling or fact of being affected with nausea or vomiting.” And so there you have it. Two equally ridiculous definitions that nevertheless characterise how we — “we,” being the statistical average of us — think about sickness. We consider ourselves to be sick when we’re “ill”, that is, when we’re stricken with nausea or vomiting or a comparably apparent form of unpleasantness or abnormality. Conversely, we’re healthy when there’s no apparent illness, abnormality, or persisting unpleasantness. Certainly, this captures a meaningful chunk of what it is like to be sick, however, it doesn’t do the same for what sickness, in a more fundamental sense, actually is. Can someone be sick and unaware of the fact? In other words, can someone be sick — in some generally uncontroversial sense — and yet still feel healthy? Well of course. Thus sickness cannot be judged in terms of subjective experience alone. One could even imagine someone who is sick, but whose subjective experience is actually made more pleasant by the sickness. Consider some kind of neurological dysfunction wherein serotonin production is substantially elevated. 
<br></br><br></br>

Moreover, what if this is all the individual has ever known? If so, we couldn’t define their sickness as abnormal, at least not without referring to what is normal for others, or what is ideal according to some defined standard. And so it is that with very little reasoning, our picture of sickness is made more subtle, less intuitive. Almost immediately, we find ourselves in deep philosophical waters. What we’ve realised, or at least what I hope has just been made sufficiently apparent, is that we cannot define sickness in terms of itself. We can merely describe it, allude to its phenomenology. In order to properly define it, we must define it in terms of its variance against some idealised, perfectly healthy human organism. That is, we cannot define sickness without first defining health. And we must define health positively — it must be a set of positive standards or criterion — for as we’ve just seen, we cannot define it in terms of sickness. Now that’s not to say that there is no place for sickness within a rational definition of health, it simply can’t be front and centre.
<br></br><br></br>


      </p>
      </div>
    </main>
    <Footer nextTitle="Health as Homeostasis" nextPage="/homeostasis"/>
    </>
  );
}

export default Sickness;
